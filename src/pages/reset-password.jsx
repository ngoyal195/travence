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
        window.location.href = "/account/";
      }, 1500);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#f6f6f6]
        dark:bg-[#0B0D10]
        flex
        items-center
        justify-center
        px-6
        py-20
        transition-colors
        duration-500
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          dark:bg-[#15181D]
          rounded-[32px]
          shadow-2xl
          dark:shadow-black/40
          p-8
          border
          border-gray-100
          dark:border-white/10
          transition-colors
          duration-500
        "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl
            font-extrabold
            text-gray-900
            dark:text-white
            text-center
            transition-colors
            duration-500
          "
        >
          Set New Password
        </h1>

        <p
          className="
            mt-3
            text-gray-500
            dark:text-gray-400
            text-center
            transition-colors
            duration-500
          "
        >
          Choose a new password for your Travence account.
        </p>

        {/* Success Message */}
        {message && (
          <div
            className="
              mt-6
              rounded-2xl
              bg-green-50
              dark:bg-green-950/30
              border
              border-green-100
              dark:border-green-900/50
              text-green-700
              dark:text-green-300
              px-4
              py-3
              text-sm
              transition-colors
              duration-300
            "
          >
            {message}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div
            className="
              mt-6
              rounded-2xl
              bg-red-50
              dark:bg-red-950/30
              border
              border-red-100
              dark:border-red-900/50
              text-red-700
              dark:text-red-300
              px-4
              py-3
              text-sm
              transition-colors
              duration-300
            "
          >
            {errorMessage}
          </div>
        )}

        {/* Waiting State */}
        {!ready ? (
          <div
            className="
              mt-8
              text-center
              text-gray-500
              dark:text-gray-400
              transition-colors
              duration-500
            "
          >
            Waiting for the password reset link...
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* New Password */}
            <input
              type="password"
              placeholder="New password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-gray-300
                dark:border-white/10
                bg-white
                dark:bg-[#1D2128]
                text-gray-900
                dark:text-white
                placeholder-gray-400
                dark:placeholder-gray-500
                px-5
                py-4
                outline-none
                focus:ring-2
                focus:ring-black
                dark:focus:ring-white
                transition-all
                duration-300
              "
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm new password"
              required
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                border
                border-gray-300
                dark:border-white/10
                bg-white
                dark:bg-[#1D2128]
                text-gray-900
                dark:text-white
                placeholder-gray-400
                dark:placeholder-gray-500
                px-5
                py-4
                outline-none
                focus:ring-2
                focus:ring-black
                dark:focus:ring-white
                transition-all
                duration-300
              "
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-2xl
                bg-black
                dark:bg-white
                text-white
                dark:text-black
                py-4
                font-semibold
                hover:bg-gray-800
                dark:hover:bg-gray-200
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
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
