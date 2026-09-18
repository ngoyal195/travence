import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../lib/supabase";

export default function AccountPage() {
  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (mounted) {
        setUser(session?.user ?? null);
      }
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  function clearMessages() {
    setMessage("");
    setErrorMessage("");
  }

  async function handleAuth(e) {
    e.preventDefault();

    clearMessages();
    setLoading(true);

    try {
      if (mode === "signup") {
        if (password.length < 8) {
          throw new Error("Password must be at least 8 characters.");
        }

        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
            },
            emailRedirectTo: `${window.location.origin}/account`,
          },
        });

        if (error) throw error;

        if (data.session) {
          setMessage("Your Travence account has been created.");
          setUser(data.user);
        } else {
          setMessage(
            "Account created. Please check your email and confirm your email address before logging in."
          );
        }

        setPassword("");
      }

      if (mode === "login") {
        const { data, error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) throw error;

        setUser(data.user);
        setMessage("Welcome back to Travence.");
        setPassword("");

        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }

      if (mode === "forgot") {
        const { error } =
          await supabase.auth.resetPasswordForEmail(
            email.trim(),
            {
              redirectTo:
                `${window.location.origin}/reset-password`,
            }
          );

        if (error) throw error;

        setMessage(
          "If an account exists for this email, a password reset link has been sent."
        );
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function resendConfirmation() {
    clearMessages();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email.trim(),
      });

      if (error) throw error;

      setMessage("A new confirmation email has been sent.");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/";
  }

  if (user) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 border border-gray-100">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900">
                My Account
              </h1>

              <p className="mt-3 text-gray-500">
                Welcome to Travence.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-sm text-gray-500">
                  Email
                </label>

                <div className="mt-1 rounded-2xl bg-gray-50 px-5 py-4">
                  {user.email}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full rounded-2xl bg-black text-white py-4 font-semibold hover:bg-gray-800 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 border border-gray-100">

          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              {mode === "login" && "Welcome Back"}
              {mode === "signup" && "Create Account"}
              {mode === "forgot" && "Reset Password"}
            </h1>

            <p className="mt-3 text-gray-500">
              {mode === "forgot"
                ? "We'll send you a secure reset link."
                : "Premium travel begins here ✈️"}
            </p>
          </div>

          {message && (
            <div className="mt-6 rounded-2xl bg-green-50 text-green-700 px-4 py-3 text-sm">
              {message}
            </div>
          )}

          {errorMessage && (
            <div className="mt-6 rounded-2xl bg-red-50 text-red-700 px-4 py-3 text-sm">
              {errorMessage}
            </div>
          )}

          <form
            onSubmit={handleAuth}
            className="mt-8 space-y-5"
          >
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />

            {mode !== "forgot" && (
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-black text-white py-4 font-semibold hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Login"
                : mode === "signup"
                ? "Create Account"
                : "Send Reset Link"}
            </button>
          </form>

          {mode === "signup" && (
            <button
              onClick={resendConfirmation}
              disabled={!email || loading}
              className="mt-4 w-full text-sm text-gray-500 hover:text-black"
            >
              Resend confirmation email
            </button>
          )}

          <div className="mt-6 space-y-3 text-center text-sm">
            {mode === "login" && (
              <>
                <button
                  onClick={() => {
                    clearMessages();
                    setMode("forgot");
                  }}
                  className="text-gray-500 hover:text-black"
                >
                  Forgot your password?
                </button>

                <div>
                  <button
                    onClick={() => {
                      clearMessages();
                      setMode("signup");
                    }}
                    className="text-gray-500 hover:text-black"
                  >
                    Don't have an account? Sign up
                  </button>
                </div>
              </>
            )}

            {mode === "signup" && (
              <button
                onClick={() => {
                  clearMessages();
                  setMode("login");
                }}
                className="text-gray-500 hover:text-black"
              >
                Already have an account? Login
              </button>
            )}

            {mode === "forgot" && (
              <button
                onClick={() => {
                  clearMessages();
                  setMode("login");
                }}
                className="text-gray-500 hover:text-black"
              >
                Back to Login
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
