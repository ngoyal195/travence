import Link from "next/link";

export default function Header(){
  return (
    <header className="w-full bg-white/60 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-18 px-6 py-3">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-accent rounded flex items-center justify-center text-white font-bold">T</div>
            <span className="font-semibold text-lg text-brand-charcoal">Travence</span>
          </a>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          <Link href="/shop"><a>Shop</a></Link>
          <Link href="/compare"><a>Compare</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2">🔍</button>
          <Link href="/account"><a className="p-2">👤</a></Link>
          <Link href="/cart"><a className="relative p-2">🛒<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">0</span></a></Link>
        </div>
      </div>
    </header>
  );
}
