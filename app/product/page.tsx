import { FeatureCard } from '@/components/FeatureCard';

const detailedFeatures = [
  { icon: '🧠', title: 'Smart Scheduling in Under 5 Minutes', description: 'Fresh Schedules uses historical data and staff preferences to auto-generate a compliant, optimized schedule draft, saving managers hours every week.' },
  { icon: '💸', title: 'Labor Forecasting & Budget Control', description: 'Set labor targets based on forecasted sales. The platform warns you in real-time if a shift pushes you over budget, giving you control before publication.' },
  { icon: '⚙️', title: 'Shift Templates & Role-Based Scheduling', description: 'Create reusable templates for your busiest weeks. Ensure every shift is filled by staff with the right skills and certifications using role-based filtering.' },
  { icon: '📱', title: 'Mobile-Friendly for Staff', description: 'Your team can view their schedule, swap shifts, request time off, and communicate with managers all from a simple, mobile-optimized interface. No more calling in.' },
  { icon: '📜', title: 'Compliance and Breaks Tracking', description: 'Automatically enforce labor laws (e.g., break times, consecutive shift limits) for your state/region, significantly reducing the risk of costly penalties.' },
  { icon: '🤝', title: 'Seamless Integrations', description: 'Connect Fresh Schedules to your POS and payroll systems. Data flows instantly, eliminating manual entry and reconciliation at the end of the pay period.' },
];

export default function ProductPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-extrabold text-brand-text text-center sm:text-5xl">Scheduling Power, Without the Complexity</h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">Fresh Schedules is built to solve the core pain points of service-industry operations: high staff turnover, unpredictable labor costs, and manager burnout.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{detailedFeatures.map((feature, index) => (<FeatureCard key={index} {...feature} />))}</div>
        <div className="mt-20 p-10 bg-brand-primary/10 border-l-4 border-brand-primary rounded-lg"><h2 className="text-2xl font-display font-bold text-brand-text">The ROI: Time is Money</h2><p className="mt-3 text-lg text-gray-700">Our clients report saving an average of **8 hours per manager per week** on scheduling and communication alone. That's a full day of focus back on customers, training, and optimizing the floor.</p></div>
      </div>
    </div>
  );
}
