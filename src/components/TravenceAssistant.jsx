import { useEffect, useRef, useState } from "react";

const quickReplies = [
  "Best cabin luggage?",
  "Warranty info",
  "Which bag is anti theft?",
  "How do I contact support?"
];

const faqAnswers = {
  "best cabin luggage": {
    answer:
      "Our Travence Swiss and Travence CTY Cabin variants are great for cabin travel. Lightweight, smooth spinner wheels, and compact airline-friendly design ✈️"
  },

  "warranty": {
    answer:
      "Most Travence luggage comes with a 3 year warranty covering manufacturing defects."
  },

  "anti theft": {
    answer:
      "Travence ZAG Secure CM includes premium anti-theft zippers and TSA lock security features 🔒"
  },

  "support": {
    answer:
      "You can contact us anytime at support@travencebags.in or via WhatsApp at +91 8527530306 📞"
  },

  "tsa": {
    answer:
      "TSA locks allow airport security to inspect luggage without damaging the lock. Useful for international travel 🌍"
  },

  "delivery": {
    answer:
      "Delivery timelines usually depend on your location and seller platform availability."
  },

  "material": {
    answer:
      "Most Travence luggage uses durable PP hard-shell material for lightweight strength and impact resistance."
  }
};

export default function TravenceAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text:
        "Hi 👋 I’m the Travence travel assistant. Ask me about luggage, warranty, cabin bags, anti-theft features, or support."
    }
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateReply = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes("cabin") ||
      q.includes("best") ||
      q.includes("small suitcase")
    ) {
      return faqAnswers["best cabin luggage"].answer;
    }

    if (q.includes("warranty")) {
      return faqAnswers["warranty"].answer;
    }

    if (q.includes("anti") || q.includes("theft") || q.includes("secure")) {
      return faqAnswers["anti theft"].answer;
    }

    if (
      q.includes("support") ||
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("whatsapp")
    ) {
      return faqAnswers["support"].answer;
    }

    if (q.includes("tsa")) {
      return faqAnswers["tsa"].answer;
    }

    if (q.includes("delivery") || q.includes("shipping")) {
      return faqAnswers["delivery"].answer;
    }

    if (
      q.includes("material") ||
      q.includes("shell") ||
      q.includes("pp")
    ) {
      return faqAnswers["material"].answer;
    }

    return "I’m still learning 🧳 Try asking about warranty, anti-theft luggage, cabin bags, TSA locks, or support.";
  };

  const sendMessage = (customMessage = null) => {
    const text = customMessage || input;

    if (!text.trim()) return;

    const userMessage = {
      type: "user",
      text
    };

    const botMessage = {
      type: "bot",
      text: generateReply(text)
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition flex items-center justify-center"
      >
        {open ? (
          <span className="text-2xl">×</span>
        ) : (
          <span className="text-2xl">💬</span>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-6 w-[360px] max-w-[90vw] h-[520px] bg-white rounded-3xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-black text-white px-5 py-4">
            <h3 className="font-bold text-lg">Travence Assistant</h3>
            <p className="text-sm text-gray-300 mt-1">
              Smart luggage helper ✈️
            </p>
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
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "bg-black text-white rounded-br-md"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

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
              className="bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
