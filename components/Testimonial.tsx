import Image from 'next/image';

export const Testimonial = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-ts-mist rounded-2xl p-10 md:p-16 overflow-hidden">
          <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 text-gray-200">
            <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-display font-bold text-ts-charcoal leading-relaxed">
              "Fresh Schedules removed the headache of weekly scheduling. Our managers save about 8 hours every single week, and the staff loves the app."
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Jamie R." 
                className="h-12 w-12 rounded-full ring-2 ring-white"
              />
              <div className="text-left">
                <div className="font-bold text-ts-charcoal">Jamie Rivera</div>
                <div className="text-sm text-gray-500">Operations Director, Table 5 Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
