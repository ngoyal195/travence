import { useState } from "react";
import Header from "../components/Header";
import { supabase } from "../src/lib/supabase";

export default function AccountPage() {
  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleAuth(e) {
    e.preventDefault();

    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        alert("Account created successfully!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        alert("Logged in successfully!");

        window.location.href = "/";
      }
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 border border-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              {mode === "login"
                ? "Welcome Back"
                : "Create Account"}
            </h1>

            <p className="mt-3 text-gray-500">
              Premium travel begins here ✈️
            </p>
          </div>

          <form
            onSubmit={handleAuth}
            className="mt-8 space-y-5"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-black text-white py-4 font-semibold hover:bg-gray-800 transition"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Login"
                : "Create Account"}
            </button>
          </form>

          <button
            onClick={() =>
              setMode(
                mode === "login"
                  ? "signup"
                  : "login"
              )
            }
            className="mt-6 w-full text-center text-sm text-gray-500 hover:text-black"
          >
            {mode === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>
      </main>
    </>
  );
}
