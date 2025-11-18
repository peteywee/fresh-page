import React from 'react';

const PhoneIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l10 10m-10-10l10 10M12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>);
const EnvelopeIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 1.76-1.54 3.19-3.41 3.47L12 18.75l-4.09-4.78C6.54 13.69 5 12.26 5 10.5a7 7 0 1 1 14 0Z" /></svg>);
const MapPinIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 1.76-1.54 3.19-3.41 3.47L12 18.75l-4.09-4.78C6.54 13.69 5 12.26 5 10.5a7 7 0 1 1 14 0Z" /></svg>);

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-extrabold text-brand-text text-center sm:text-5xl">Still Have Questions? Talk to a Specialist.</h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">Whether you need a custom Enterprise quote or just want to see a live demo, we&apos;re here to help.</p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 p-8 bg-brand-light rounded-xl shadow-lg">
            <h2 className="text-2xl font-display font-bold text-brand-text mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization Name</label>
                <input type="text" name="organization" id="organization" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-brand-dark bg-brand-primary hover:bg-green-700 transition duration-150">Submit Request</button>
              <p className="text-center text-sm text-gray-500">We aim to respond to all inquiries within one business day.</p>
            </form>
          </div>

          <div className="lg:col-span-1 space-y-10">
            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-display font-bold text-brand-text mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3"><EnvelopeIcon className="w-6 h-6 text-brand-primary flex-shrink-0" /><span className="text-gray-700 break-all">sales@freshschedules.com</span></div>
                <div className="flex items-center space-x-3"><PhoneIcon className="w-6 h-6 text-brand-primary flex-shrink-0" /><span className="text-gray-700">(800) 555-0199</span></div>
                <div className="flex items-start space-x-3"><MapPinIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" /><span className="text-gray-700">Top Shelf Service LLC, 123 Automation Way, HQ 90210</span></div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-display font-bold text-brand-text mb-4">Quick FAQ</h3>
              <div className="space-y-4 text-gray-700">
                <details className="border-b pb-2"><summary className="font-semibold cursor-pointer text-brand-text">Do you offer a free trial?</summary><p className="mt-2 text-sm text-gray-600">Yes, every plan includes a 14-day free trial, no credit card required.</p></details>
                <details className="border-b pb-2"><summary className="font-semibold cursor-pointer text-brand-text">How long does setup take?</summary><p className="mt-2 text-sm text-gray-600">Most single-location venues are fully operational within one weekend.</p></details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
