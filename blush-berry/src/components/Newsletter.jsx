import React from 'react';

const Newsletter = () => {
  return (
    <div className="border-b border-[#F5CCDA] px-6 lg:px-16 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

      {/* Left Content */}
      <div className="lg:col-span-6 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#ebb2bd] block">
          Stay Connected
        </span>

        <h3 className="font-serif text-3xl lg:text-4xl">
          Seasonal specials,
          <br />
          delivered to you
        </h3>

        <p className="text-[#FFF0F3]/70 font-light text-sm leading-relaxed">
          New recipes, early access to holiday boxes,
          and exclusive offers — once a week,
          never more.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="lg:col-span-6 flex flex-col sm:flex-row gap-3 w-full"
      >
        <input
          type="text"
          placeholder="Your name"
          className="bg-[#FFF0F3] border border-[#F5CCDA] px-4 py-3 text-sm focus:outline-none focus:border-[#E8728A] w-full placeholder:text-[#7A2438]/40"
        />

        <input
          type="email"
          placeholder="your@email.com"
          className="bg-[#FFF0F3] border border-[#F5CCDA] px-4 py-3 text-sm focus:outline-none focus:border-[#E8728A] w-full placeholder:text-[#7A2438]/40"
        />

        <button className="bg-[#7A2438] text-[#FFF0F3] px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#E8728A] transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;