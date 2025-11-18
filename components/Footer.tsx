import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-lg font-extrabold font-display">Fresh Schedules™</div>
            <p className="mt-3 text-sm text-[color:var(--ts-slate)] max-w-sm">We automate the invisible, repetitive labor so you can focus on people and profit.</p>
            <p className="mt-3 text-xs text-[color:var(--ts-slate)]">Fresh Schedules™ by Top Shelf Service LLC™ — The hardest part is done for you.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[color:var(--brand-muted)]">Product</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li><Link href="/product" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Features</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Workflow</Link></li>
              <li><Link href="/pricing" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[color:var(--brand-muted)]">Company</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li><Link href="/company" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Our Philosophy</Link></li>
              <li><Link href="/contact" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Contact Sales</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-100">
          <p className="text-sm text-[color:var(--ts-slate)]">© 2025 Top Shelf Service LLC™. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/legal/privacy" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Privacy</Link>
            <Link href="/legal/terms" className="text-sm text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
