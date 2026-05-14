import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../src/lib/supabase";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" legacyBehavior>
            <a className="brand text-brand-charcoal">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "var(--brand-accent)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                T
              </div>

              <span style={{ marginLeft: 10 }}>Travence</span>
            </a>
          </Link>
        </div>

        <nav className="nav hidden md:flex items-center text-sm">
          <Link href="/shop" legacyBehavior>
            <a>Shop</a>
          </Link>

          <Link href="/compare" legacyBehavior>
            <a>Compare</a>
          </Link>

          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>

          <Link href="/support" legacyBehavior>
            <a>Support</a>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <button onClick={handleLogout} className="btn-ghost">
              Logout
            </button>
          ) : (
            <Link href="/account" legacyBehavior>
              <a className="btn-ghost">Login / Signup</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
