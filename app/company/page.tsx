import React from 'react';

const ClockIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>);
const UsersIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.65 1.83m-2.65-1.83A2.65 2.65 0 0 0 15 17.5a2.65 2.65 0 0 0-2.65-2.65m2.65 2.65a2.65 2.65 0 0 1-2.65 2.65m0-2.65c-2.457-1.127-4.1-3.664-4.1-6.578 0-4.08 3.14-7.4 7-7.4s7 3.32 7 7.4c0 2.914-1.643 5.451-4.1 6.578m0-2.65a9.38 9.38 0 0 0-2.65 1.83" /></svg>);
const ScaleIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3a9 9 0 0 1 9 9h-9M12 3a9 9 0 0 0-9 9h9m-9 0h9m0 0a9 9 0 0 1 9 9m-9-9v9m-9-9v9" /></svg>);
const SparklesIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 3.375C17.5 7.5 19 11 19 12c0 2.375-1.5 6.125-3.5 10M10.5 3.375C12.5 7.5 14 11 14 12c0 2.375-1.5 6.125-3.5 10M3 12h2M19 12h2" /></svg>);

const values = [
  { icon: ClockIcon, title: 'Efficiency', description: 'Time is the most valuable asset. Our tools must save more time than they cost.' },
  { icon: UsersIcon, title: 'Respect for Staff', description: 'Predictability and transparency lead to better staff retention. A happy team is a productive team.' },
  { icon: ScaleIcon, title: 'Reliability', description: 'Scheduling is mission-critical. We build stable, competent, and trustworthy software that just works.' },
  { icon: SparklesIcon, title: 'Transparency', description: 'Clear communication about schedules, costs, and data is foundational to trust between management and staff.' },
];

export default function CompanyPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-extrabold text-brand-text text-center sm:text-5xl">Our Philosophy: Why Fresh Schedules Exists</h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">We exist to take the heavy, repetitive operational work off small operators so they can focus on people and profit.</p>
        <div className="mt-16 p-10 bg-brand-light rounded-xl shadow-inner border border-gray-200">
          <p className="text-3xl font-serif italic text-gray-700 leading-snug">&ldquo;The hardest part of running a successful venue isn&apos;t the rush—it&apos;s the invisible, exhausting labor of constant scheduling, communication, and cost control. We know that pain. Fresh Schedules was built to be the silent partner that finally moves that boulder, giving operators back their focus and their peace of mind.&rdquo;</p>
          <p className="mt-6 text-right text-lg font-semibold text-brand-text">— Patrick Craven, Owner, Top Shelf Service LLC™</p>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-display font-bold text-brand-text text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <value.icon className="w-10 h-10 mx-auto text-brand-primary" />
                <h3 className="mt-4 text-xl font-display font-semibold text-brand-text">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
