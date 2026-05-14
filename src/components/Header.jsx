import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Header() {

  const [user, setUser] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();

  }, []);

  async function handleLogout() {

    await supabase.auth.signOut();

    window.location.reload();

  }

  const navLinks = [
    {
      label: "Shop",
      href: "/shop"
    },
    {
      label: "Compare",
      href: "/compare"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Support",
      href: "/support"
    }
  ];

  return (

    <>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-2xl">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between py-4">

            {/* LOGO */}
            <Link href="/" legacyBehavior>

              <a className="flex items-center group">

                <div className="relative w-[44px] h-[44px] transition duration-500 group-hover:scale-105">

                  <Image
                    src="/images/logo.png"
                    alt="Travence Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />

                </div>

                <span
                  className="ml-3 font-black uppercase tracking-[0.18em] text-xl text-black"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Travence
                </span>

              </a>

            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">

              {navLinks.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  legacyBehavior
                >

                  <a className="relative text-sm font-semibold text-gray-700 hover:text-black transition duration-300 group">

                    {link.label}

                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>

                  </a>

                </Link>

              ))}

            </nav>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-4">

              {user ? (

                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-black hover:text-white transition duration-300 text-sm font-semibold"
                >
                  Logout
                </button>

              ) : (

                <Link href="/account" legacyBehavior>

                  <a className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300 text-sm font-semibold shadow-lg">

                    Login / Signup

                  </a>

                </Link>

              )}

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="md:hidden relative w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center"
            >

              <div className="flex flex-col gap-[5px]">

                <span
                  className={`block w-5 h-[2px] bg-black transition duration-300 ${
                    mobileMenuOpen
                      ? "rotate-45 translate-y-[7px]"
                      : ""
                  }`}
                />

                <span
                  className={`block w-5 h-[2px] bg-black transition duration-300 ${
                    mobileMenuOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                <span
                  className={`block w-5 h-[2px] bg-black transition duration-300 ${
                    mobileMenuOpen
                      ? "-rotate-45 -translate-y-[7px]"
                      : ""
                  }`}
                />

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* MENU PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <div className="flex flex-col h-full px-8 py-10">

            {/* TOP */}
            <div className="flex items-center justify-between">

              <div className="flex items-center">

                <div className="relative w-10 h-10">

                  <Image
                    src="/images/logo.png"
                    alt="Travence"
                    layout="fill"
                    objectFit="contain"
                  />

                </div>

                <span className="ml-3 font-black uppercase tracking-[0.18em] text-lg">

                  Travence

                </span>

              </div>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="text-3xl leading-none"
              >
                ×
              </button>

            </div>

            {/* LINKS */}
            <div className="mt-16 flex flex-col gap-8">

              {navLinks.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  legacyBehavior
                >

                  <a
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="text-3xl font-black tracking-tight text-black hover:text-gray-500 transition"
                  >

                    {link.label}

                  </a>

                </Link>

              ))}

            </div>

            {/* BOTTOM */}
            <div className="mt-auto">

              {user ? (

                <button
                  onClick={handleLogout}
                  className="w-full bg-black text-white py-4 rounded-2xl font-semibold"
                >
                  Logout
                </button>

              ) : (

                <Link href="/account" legacyBehavior>

                  <a
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="block w-full text-center bg-black text-white py-4 rounded-2xl font-semibold"
                  >

                    Login / Signup

                  </a>

                </Link>

              )}

              <p className="mt-6 text-sm text-gray-400 leading-relaxed">

                Premium luggage engineered for modern travel.

              </p>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}
