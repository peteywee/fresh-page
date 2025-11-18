import Link from 'next/link';
import React from 'react';

const CheckIcon = (props: Omit<React.SVGProps<SVGSVGElement>, 'ref'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.81a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
);

const plans = [
  { name: 'Starter', price: '$29', per: 'per location/month', bestFor: 'Single-unit venues and smaller teams (up to 20 staff).', features: ['Unlimited Schedules', 'Mobile Staff App Access', 'Basic Availability Tools', 'Email/Chat Support'], cta: 'Start 14-Day Trial', href: '#' },
  { name: 'Growth', price: '$59', per: 'per location/month', bestFor: 'Multi-location businesses and mid-sized teams (20+ staff).', features: ['All Starter features, plus:', 'Real-Time Labor Cost Forecasting', 'POS Integration (Basic)', 'Compliance Tracking & Alerts', 'Role-Based Scheduling'], cta: 'Start 14-Day Trial', isPrimary: true, href: '#' },
  { name: 'Enterprise', price: 'Custom', per: 'contact us for pricing', bestFor: 'Large chains, franchises, and venues with complex regulatory needs.', features: ['All Growth features, plus:', 'Dedicated Account Manager', 'Advanced Multi-Location Reporting', 'API Access & Custom Integrations', 'SLA & Priority Support'], cta: 'Contact Sales', href: '/contact' },
];

export default function PricingPage() {
  return (
    <div className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-extrabold text-brand-text text-center sm:text-5xl">Predictable Costs. Predictable Scheduling.</h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">No hidden fees, no per-user charges. Simple, transparent pricing that grows with your business.</p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`flex flex-col p-8 rounded-xl shadow-2xl ${plan.isPrimary ? 'bg-brand-dark text-white' : 'bg-white text-brand-text border border-gray-100'}`}>
              <h3 className={`text-xl font-display font-bold ${plan.isPrimary ? 'text-brand-primary' : 'text-brand-text'}`}>{plan.name}</h3>
              <p className={`mt-4 text-4xl font-display font-extrabold ${plan.isPrimary ? 'text-white' : 'text-brand-text'}`}>{plan.price}{plan.price !== 'Custom' && (<span className="text-base font-medium ml-1">{plan.per}</span>)}</p>
              <p className={`mt-3 text-sm ${plan.isPrimary ? 'text-gray-300' : 'text-gray-500'}`}>Best for: <span className="font-semibold">{plan.bestFor}</span></p>

              <Link href={plan.href} className={`mt-8 block w-full py-3 text-center rounded-lg text-lg font-semibold shadow-md transition duration-150 ${plan.isPrimary ? 'bg-brand-primary text-brand-dark hover:bg-green-700' : 'bg-brand-light text-brand-text hover:bg-gray-200 border border-brand-text'}`}>{plan.cta}</Link>

              <ul role="list" className={`mt-8 space-y-4 text-sm ${plan.isPrimary ? 'text-gray-200' : 'text-gray-600'}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className={`h-5 w-5 flex-shrink-0 ${plan.isPrimary ? 'text-brand-primary' : 'text-brand-text'}`} aria-hidden="true" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-white rounded-xl shadow-lg"><p className="text-lg font-medium text-brand-text">Every plan includes a <strong>14-day free trial</strong>. No credit card required. Cancel anytime.</p></div>
      </div>
    </div>
  );
}
