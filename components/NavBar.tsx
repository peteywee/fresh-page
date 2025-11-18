import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Product', href: '/product' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Company', href: '/company' },
];

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-ts-charcoal/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-colors">
                <Image src="/images/logo-fresh-schedules.svg" alt="Fresh Schedules" width={32} height={32} className="object-contain" />
              </div>
              <div>
                <div className="text-lg font-extrabold font-display tracking-tight text-white">Fresh Schedules</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex md:space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition duration-150">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white hidden sm:block">Log in</Link>
            <Link href="/pricing" className="btn-primary bg-ts-accent-green hover:bg-green-500 text-ts-charcoal font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-green-900/20">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
