import { Hero } from '@/components/Hero';
import { Testimonial } from '@/components/Testimonial';
import { FeatureCard } from '@/components/FeatureCard';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  { icon: '📅', title: 'Drag-and-Drop Scheduling', description: 'Stop fighting spreadsheets. Intuitively build, edit, and adjust your weekly schedule right from your browser. Changes are live instantly.' },
  { icon: '💰', title: 'Fast Labor Forecasting', description: 'Instantly view projected labor cost against sales targets in real-time. Hit your budget targets without sacrificing coverage.' },
  { icon: '🚀', title: 'One-Tap Shift Publishing', description: 'Publish the entire week in seconds. Staff are notified automatically via text or app, drastically reducing communication overhead.' },
];

export default function HomePage() {
  return (
    <div className="bg-ts-mist">
      <Hero />
      
      {/* Social Proof Strip */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Powering the best teams in hospitality</p>
          <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             <div className="h-8 w-24 bg-gray-300 rounded"></div>
             <div className="h-8 w-24 bg-gray-300 rounded"></div>
             <div className="h-8 w-24 bg-gray-300 rounded"></div>
             <div className="h-8 w-24 bg-gray-300 rounded hidden sm:block"></div>
             <div className="h-8 w-24 bg-gray-300 rounded hidden sm:block"></div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-bold tracking-wide text-ts-accent-green uppercase">Focus on Hospitality, Not Headaches</h2>
            <p className="mt-2 text-3xl font-display font-bold tracking-tight text-ts-charcoal sm:text-4xl">From Hours of Stress to Minutes of Clarity</p>
            <p className="mt-4 text-xl text-gray-600">Fresh Schedules removes the hidden operational burden that limits your growth. We reduce labor compliance risks, save manager time, and create predictable weeks for your staff.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (<FeatureCard key={index} {...feature} />))}
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="py-24 bg-ts-charcoal text-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-ts-accent-green/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">A Preview of What's Possible</h2>
              <p className="text-lg text-gray-300 mb-8">
                See your entire operation at a glance. Our dashboard gives you the insights you need to make better decisions in real-time.
              </p>
              <ul className="space-y-4 mb-8">
                {['Real-time labor vs sales tracking', 'Automatic overtime alerts', 'Mobile app for staff communication'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <svg className="w-5 h-5 text-ts-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/product" className="text-ts-accent-green font-semibold hover:text-white transition-colors inline-flex items-center">
                Explore all features <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ts-accent-green to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-ts-slate border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-1">
                   <Image src="/images/app-preview.png" alt="Dashboard Preview" width={800} height={600} className="rounded-lg w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ts-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-extrabold text-ts-charcoal">Ready to stop pushing the boulder?</h2>
          <p className="mt-4 text-xl text-gray-600">Start your 14-day free trial and see how much time Fresh Schedules saves you.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/pricing" className="rounded-lg bg-ts-accent-green px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-200">
              Try Fresh Schedules Free
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
