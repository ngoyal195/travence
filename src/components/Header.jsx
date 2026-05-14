import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; // Verify this path matches your project

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
    <header className="site-header sticky top-0 z-50 bg-white border-b border-gray-100">
     <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" legacyBehavior>
            <a className="brand flex items-center text-brand-charcoal">
              <div className="relative" style={{ width: 42, height: 42 }}>
                <Image
                  src="/images/logo.png"
                  alt="Travence Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>

              {/* Match typography from image_adcfdc.png */}
              <span 
                className="font-bold uppercase tracking-[0.15em] text-xl" 
                style={{ marginLeft: 12, fontFamily: 'sans-serif' }}
              >
                Travence
              </span>
            </a>
          </Link>
        </div>

        <nav className="nav hidden md:flex items-center text-sm gap-8">
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
            <button onClick={handleLogout} className="btn-ghost px-4 py-2 rounded-full border border-gray-200 text-sm">
              Logout
            </button>
          ) : (
            <Link href="/account" legacyBehavior>
              <a className="btn-ghost px-4 py-2 rounded-full border border-gray-200 text-sm">Login / Signup</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
