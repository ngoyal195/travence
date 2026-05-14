import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import products from "../lib/products";

const SUPPORT_EMAIL = "support@travencebags.in";
const SUPPORT_WHATSAPP = "https://wa.me/918527530306";

const quickReplies = [
  "Best cabin luggage?",
  "Recommend a business bag",
  "Which bag is anti theft?",
  "Set of 3 for family travel",
  "Warranty info",
  "How do I contact support?"
];

function normalizeText(text) {
  return (text || "").toLowerCase().trim();
}

function getProductText(product) {
  return [
    product.name,
    product.subtitle,
    ...(product.features || []),
    ...(product.tags || []),
    ...(product.colors || []),
    ...(product.sizes || []),
  ]
    .join(" ")
    .toLowerCase();
}

function scoreProducts(query) {
  const q = normalizeText(query);

  return products
    .map((product) => {
      const text = getProductText(product);
      let score = 0;

      const keywordGroups = [
        { terms: ["cabin", "carry on", "carry-on", "small", "flight"], points: 5 },
        { terms: ["business", "office", "executive", "work"], points: 5 },
        { terms: ["anti theft", "antitheft", "secure", "security", "tsa", "lock"], points: 6 },
        { terms: ["set of 3", "family", "combo", "bundle"], points: 6 },
        { terms: ["lightweight", "light"], points: 4 },
        { terms: ["spinner", "wheels", "silent"], points: 3 },
        { terms: ["pp", "polypropylene", "shell"], points: 3 },
        { terms: ["warranty"], points: 2 },
      ];

      keywordGroups.forEach(({ terms, points }) => {
        if (terms.some((term) => q.includes(term)) && terms.some((term) => text.includes(term.split(" ")[0]))) {
          score += points;
        }
      });

      const words = q.split(/[\s,.;:!?()]+/).filter(Boolean);
      words.forEach((word) => {
        if (word.length > 2 && text.includes(word)) score += 1;
      });

      if (q.includes("best") && (text.includes("cabin") || text.includes("business"))) score += 2;
      if (q.includes("anti") && q.includes("theft") && text.includes("anti")) score += 4;
      if (q.includes("compare") && text.includes("compare")) score += 1;

      return { product, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
}

function getReply(query) {
  const q = normalizeText(query);

  if (
    q.includes("contact") ||
    q.includes("support") ||
    q.includes("email") ||
    q.includes("whatsapp") ||
    q.includes("human") ||
    q.includes("talk to us") ||
    q.includes("call")
  ) {
    return {
      kind: "support",
      text:
        "Absolutely. Our team can help you with product details, bulk orders, and warranty questions.",
    };
  }

  if (q.includes("compare")) {
    return {
      kind: "text",
      text:
        "You can compare two products from the Compare page. I can also suggest the best two bags if you tell me your travel style.",
    };
  }

  if (
    q.includes("cabin") ||
    q.includes("carry on") ||
    q.includes("small suitcase") ||
    q.includes("flight")
  ) {
    const matches = scoreProducts("cabin luggage");
    return {
      kind: "recommendation",
      text:
        "For cabin travel, these are strong matches from the Travence lineup.",
      products: matches.length ? matches.map((m) => ({
        ...m.product,
        reason:
          m.product.sizes?.includes("Cabin")
            ? "Cabin-friendly and travel-ready"
            : "Compact and easy to carry",
      })) : [],
    };
  }

  if (
    q.includes("business") ||
    q.includes("office") ||
    q.includes("executive") ||
    q.includes("work")
  ) {
    const matches = scoreProducts("business luggage");
    return {
      kind: "recommendation",
      text:
        "For business travel, these models keep things polished and practical.",
      products: matches.length ? matches.map((m) => ({
        ...m.product,
        reason:
          m.product.subtitle?.toLowerCase().includes("business")
            ? "Built for business travel"
            : "A smart professional option",
      })) : [],
    };
  }

  if (
    q.includes("anti theft") ||
    q.includes("antitheft") ||
    q.includes("secure") ||
    q.includes("tsa") ||
    q.includes("lock")
  ) {
    const matches = scoreProducts("anti theft luggage");
    return {
      kind: "recommendation",
      text:
        "These are the Travence picks with security-friendly features.",
      products: matches.length ? matches.map((m) => ({
        ...m.product,
        reason:
          m.product.features?.some((f) =>
            normalizeText(f).includes("tsa") || normalizeText(f).includes("lock")
          )
            ? "Security-focused feature set"
            : "Good fit for secure travel",
      })) : [],
    };
  }

  if (q.includes("set of 3") || q.includes("family") || q.includes("combo")) {
    const matches = scoreProducts("set of 3");
    return {
      kind: "recommendation",
      text:
        "For family or long trips, a set is usually the smoothest play.",
      products: matches.length ? matches.map((m) => ({
        ...m.product,
        reason: "Great for family or multi-trip travel",
      })) : [],
    };
  }

  if (q.includes("warranty")) {
    return {
      kind: "text",
      text:
        "Most Travence luggage comes with a 3 year warranty covering manufacturing defects.",
    };
  }

  if (q.includes("material") || q.includes("shell") || q.includes("pp")) {
    return {
      kind: "text",
      text:
        "Travence luggage is designed around durable hard-shell construction, with lightweight travel-friendly materials like PP and similar premium shells depending on the model.",
    };
  }

  if (q.includes("delivery") || q.includes("shipping")) {
    return {
      kind: "text",
      text:
        "Delivery depends on your location and where the order is placed from. For the fastest answer, our support team can confirm shipping details for you.",
    };
  }

  const genericMatches = scoreProducts(query);

  if (genericMatches.length) {
    return {
      kind: "recommendation",
      text:
        "I found a few Travence products that may fit what you are looking for.",
      products: genericMatches.map((m) => ({
        ...m.product,
        reason:
          m.product.subtitle || "Good all-round match for your request",
      })),
    };
  }

  return {
    kind: "text",
    text:
      "I’m still learning 🧳 Try asking about cabin luggage, anti-theft models, warranty, business bags, set of 3 options, or contact support.",
  };
}

function ProductCard({ product }) {
  return (
    <div className="mt-3 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="bg-gray-50 p-4 flex items-center justify-center">
        <img
          src={product.images?.[0] || "/images/logo.png"}
          alt={product.name}
          className="h-36 object-contain"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-bold text-gray-900 leading-snug">
              {product.name}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {product.reason}
            </p>
          </div>

          <div className="shrink-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
            ₹{Number(product.offerPrice || 0).toLocaleString()}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {(product.features || []).slice(0, 2).map((feature, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/product/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TravenceAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      kind: "text",
      text:
        "Hi 👋 I’m the Travence travel assistant. Ask me about luggage, warranty, cabin bags, anti-theft features, or support.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const sendMessage = (customMessage = null) => {
    const text = (customMessage ?? input).trim();
    if (!text) return;

    const userMessage = {
      type: "user",
      kind: "text",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const reply = getReply(text);
      setMessages((prev) => [...prev, { type: "bot", ...reply }]);
      setIsTyping(false);
    }, 700);
  };

  const openWhatsApp = () => {
    window.open(SUPPORT_WHATSAPP, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open Travence assistant"
        className="fixed bottom-6 right-6 z-50 bg-black text-white w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition flex items-center justify-center border border-gray-800 overflow-hidden"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <img
            src="/images/logo.png"
            alt="Travence"
            className="w-9 h-9 object-contain"
          />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-6 w-[380px] max-w-[92vw] h-[560px] bg-white rounded-3xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-black text-white px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Travence"
                className="w-7 h-7 object-contain"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg leading-tight">
                Travence Assistant
              </h3>
              <p className="text-sm text-gray-300 mt-0.5">
                Smart luggage helper ✈️
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] ${
                    msg.kind === "recommendation" ? "w-full" : ""
                  }`}
                >
                  {msg.kind === "recommendation" ? (
                    <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl p-4 rounded-bl-md shadow-sm">
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      {msg.products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : msg.kind === "support" ? (
                    <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl p-4 rounded-bl-md shadow-sm">
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <div className="mt-4 flex flex-col gap-2">
                        <a
                          href={`mailto:${SUPPORT_EMAIL}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
                        >
                          Email Support
                        </a>
                        <button
                          onClick={openWhatsApp}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-300 text-sm font-semibold hover:bg-gray-100 transition"
                        >
                          WhatsApp Us
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.type === "user"
                          ? "bg-black text-white rounded-br-md"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.1s]"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-3 pt-3 flex flex-wrap gap-2 border-t bg-white">
            {quickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(reply)}
                className="text-xs px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about luggage..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={() => sendMessage()}
              className="bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
