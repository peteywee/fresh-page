'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-ts-charcoal">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(#2C3036 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-ts-accent-green/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-ts-accent-green mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              New: AI-Powered Forecasting
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white tracking-tight">
              The hardest part is <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-accent-green to-emerald-400">done for you.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop wrestling with spreadsheets. Fresh Schedules automates your labor planning, compliance, and communication in one modern platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-ts-charcoal" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-ts-charcoal" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-ts-charcoal" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
              </div>
              <div className="text-sm text-gray-400">
                Trusted by <span className="text-white font-semibold">500+</span> managers
              </div>
            </div>
          </div>

          {/* Right Column: Auth/Signup Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ts-accent-green to-emerald-500"></div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-ts-charcoal">Get started for free</h3>
                <p className="text-sm text-gray-500 mt-1">No credit card required. Cancel anytime.</p>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-lg transition-colors">
                  <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12.0003 20.45c-4.6667 0-8.45-3.7833-8.45-8.45 0-4.6667 3.7833-8.45 8.45-8.45 2.2833 0 4.35 0.8333 5.9667 2.2167l-2.55 2.55c-0.8667-0.8333-2.0333-1.3333-3.4167-1.3333-2.9 0-5.25 2.35-5.25 5.25s2.35 5.25 5.25 5.25c2.6333 0 4.8333-1.6667 5.1667-4.1h-5.1667v-3.1h8.55c0.1167 0.5833 0.1833 1.1833 0.1833 1.8167 0 5.0667-3.3667 8.35-8.7333 8.35z" fill="currentColor" />
                  </svg>
                  Sign up with Google
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-xs text-gray-500 uppercase">Or continue with email</span>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="email" className="sr-only">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-ts-accent-green focus:ring-ts-accent-green sm:text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-ts-accent-green focus:ring-ts-accent-green sm:text-sm"
                      placeholder="Create a password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-ts-accent-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ts-accent-green transition-colors"
                  >
                    Create Account
                  </button>
                </form>
              </div>
              
              <p className="mt-4 text-center text-xs text-gray-500">
                By clicking "Create Account", you agree to our <Link href="/terms" className="underline hover:text-gray-900">Terms</Link> and <Link href="/privacy" className="underline hover:text-gray-900">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
