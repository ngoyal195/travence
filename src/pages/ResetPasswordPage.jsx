import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setReady(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      setMessage(
        "Password updated successfully. You can now log in."
      );

      setTimeout(() => {
        window.location.href = "/account";
      }, 1500);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Set New Password
        </h1>

        <p className="mt-3 text-gray-500 text-center">
          Choose a new password for your Travence account.
        </p>

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

        {!ready ? (
          <div className="mt-8 text-center text-gray-500">
            Waiting for the password reset link...
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <input
              type="password"
              placeholder="New password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              placeholder="Confirm new password"
              required
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-black text-white py-4 font-semibold hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading
                ? "Updating..."
                : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
