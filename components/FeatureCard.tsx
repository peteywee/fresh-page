import React from 'react';

interface FeatureCardProps { icon: React.ReactNode; title: string; description: string; }

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition duration-300 hover:shadow-xl hover:border-ts-accent-green/30 group">
      <div className="flex flex-col items-start space-y-4">
        <div className="text-4xl p-3 bg-ts-mist rounded-xl group-hover:bg-ts-accent-green/10 transition-colors">{icon}</div>
        <h3 className="text-xl font-display font-bold text-ts-charcoal">{title}</h3>
      </div>
      <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
