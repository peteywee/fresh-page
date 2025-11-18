import React from 'react';

const steps = [
  { step: 1, title: 'Connect & Configure', description: 'Connect your POS system and upload your staff list, roles, and availability. We handle the initial setup to match your current operational structure.' },
  { step: 2, title: 'Forecast & Set Targets', description: 'Enter your sales forecasts for the coming week. Set your ideal labor percentage. Fresh Schedules instantly provides a real-time budget and warning thresholds.' },
  { step: 3, title: 'Generate the Draft', description: 'With one click, the system drafts a schedule that minimizes overtime, respects staff availability, and aims for your labor budget. This is the "hardest part" we eliminate.' },
  { step: 4, title: 'Adjust & Optimize', description: 'Review the draft using the intuitive drag-and-drop interface. Make quick adjustments for last-minute changes or manager preferences while watching the labor cost meter.' },
  { step: 5, title: 'Publish & Track', description: 'Publish the final schedule. All staff are instantly notified. Track shift coverage, clock-ins, and last-minute requests all from one predictable dashboard.' },
];

const CheckCircleIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);

export default function HowItWorksPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-extrabold text-brand-text text-center sm:text-5xl">Get a Full Schedule in 5 Minutes. Seriously.</h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">The complexity is on our side. The simplicity is on yours. We distill the entire scheduling process into five logical, friction-free steps.</p>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute inset-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200"></div>
          <div className="space-y-16">
            {steps.map((item, index) => (
              <div key={item.step} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="z-10 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xl ring-8 ring-white md:ring-brand-light">{item.step}</div>
                <div className={`mt-4 md:mt-0 p-6 w-full md:w-5/12 rounded-xl shadow-lg bg-brand-light border border-gray-200 transition duration-300 hover:shadow-xl ${index % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <h2 className="text-2xl font-display font-bold text-brand-text flex items-center"><CheckCircleIcon className="w-6 h-6 text-brand-primary mr-3" />{item.title}</h2>
                  <p className="mt-3 text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
