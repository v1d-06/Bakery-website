import React, { useEffect, useState, useRef } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { useBasket } from '../context/BasketContext';
import menuHero from '../assets/menuHero.jpg';
import Footer from '../components/Footer';

// A lightweight hook to trigger animations when a section scrolls into view natively
function useIntersectionObserver() {
  const [hasRendered, setHasRendered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Set initial render trigger for hero components to animate immediately
    setHasRendered(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [elementRef, hasRendered];
}

export default function FullMenu() {
  const { addToBasket } = useBasket();
  const [activeCategory, setActiveCategory] = useState('pastries');

  // Assign individual animation refs to sections
  const [pastriesRef] = useIntersectionObserver();
  const [cakesRef] = useIntersectionObserver();
  const [cupcakesRef] = useIntersectionObserver();
  const [breadsRef] = useIntersectionObserver();
  const [drinksRef] = useIntersectionObserver();

  // Handle smooth scroll navigation natively matching the HTML behavior
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounts for fixed primary nav + sticky category bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveCategory(id);
  };

  // Watch scroll to update active category state automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['pastries', 'cakes', 'cupcakes', 'breads', 'drinks'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categorize items dynamically from your data source
  const getCategoryItems = (type) => {
    return MENU_ITEMS.filter(item => item.type?.toLowerCase() === type.toLowerCase());
  };

  return (
    <div className="bg-[#FFF0F3] text-[#280C14] min-h-screen selection:bg-[#E8728A] selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative min-h-[380px] pt-20 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A2438] to-[#4A1020]" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" 
          src={menuHero}
          alt="pastry background"
        />
        <div className="relative z-10 px-6 lg:px-16 pb-16 max-w-4xl transition-all duration-700 ease-out transform translate-y-0 opacity-100">
          <div className="text-xs tracking-[0.3em] uppercase text-[#F5CCDA]/80 mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#E8728A]" /> Handcrafted · Baked Daily
          </div>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#FFF0F3] tracking-tight leading-[0.92]">
            Our <em className="italic text-[#E8728A] not-contained">Menu</em>
          </h1>
          <p className="mt-5 text-[#F5CCDA]/75 text-sm sm:text-base font-light max-w-md rhythms leading-relaxed">
            Everything made in-house, every morning. No freezers, no shortcuts — just craft.
          </p>
        </div>
      </section>

      {/* MARQUEE RUNNING STRIP */}
      <div className="bg-[#E8728A] overflow-hidden py-3 whitespace-nowrap selective-marquee select-none">
        <div className="inline-flex animate-[marquee_20s_linear_infinite] gap-14 pr-14">
          {['Croissants', 'Tartes', 'Éclairs', 'Gâteaux', 'Macarons', 'Donuts', 'Soufflés', 'Cheesecakes'].map((item, i) => (
            <span key={i} className="font-serif italic text-white text-lg flex items-center gap-5">
              {item} <span className="not-italic opacity-60 text-xs">✦</span>
            </span>
          ))}
          {/* Duplicated for smooth loop matching original markup */}
          {['Croissants', 'Tartes', 'Éclairs', 'Gâteaux', 'Macarons', 'Donuts', 'Soufflés', 'Cheesecakes'].map((item, i) => (
            <span key={`dup-${i}`} className="font-serif italic text-white text-lg flex items-center gap-5">
              {item} <span className="not-italic opacity-60 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* STICKY CATEGORY NAV */}
      <div className="sticky top-16 z-40 bg-[#FFF0F3]/95 backdrop-blur-md border-b border-[#F5CCDA] px-6 lg:px-16 flex overflow-x-auto scrollbar-none">
        {[
          { id: 'pastries', label: 'Pastries' },
          { id: 'cakes', label: 'Cakes & Tarts' },
          { id: 'cupcakes', label: 'Cupcakes' },
          { id: 'breads', label: 'Breads' },
          { id: 'drinks', label: 'Drinks' }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className={`bg-transparent border-b-2 py-[18px] px-6 text-[11px] tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-300 font-medium relative ${
              activeCategory === cat.id 
                ? 'border-[#E8728A] text-[#E8728A]' 
                : 'border-transparent text-[#9A5060] hover:text-[#E8728A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* MENU BODY CONTENT */}
      <div className="px-6 lg:px-20 py-[76px] max-w-8xl mx-auto space-y-20">

        {/* 01. PASTRIES SECTION */}
        <section 
          id="pastries" 
          ref={pastriesRef}
          className="opacity-0 translate-y-8 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="flex flex-col md:flex-row md:items-baseline border-b border-[#F5CCDA] pb-4 mb-10 gap-5">
            <div className="flex items-baseline gap-5">
              <span className="font-serif text-sm text-[#E8728A] tracking-widest">01</span>
              <h2 className="font-serif text-4xl font-light text-[#280C14]">Our <em className="italic text-[#E8728A]">Pastries</em></h2>
            </div>
            <p className="text-[13px] font-light text-[#9A5060] md:ml-auto max-w-xs md:text-right leading-relaxed">
              Our signature range, each made with French technique and local soul.
            </p>
          </div>

          {/* Core Pastries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
            {getCategoryItems('pastries').filter(i => i.tag?.toLowerCase() !== 'bestseller').map((item) => (
              <div key={item.id} className="bg-[#FFF8FA] border border-[#F5CCDA] rounded-sm overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(232,114,138,0.12)] transition-all duration-300 flex flex-col group">
                <div className="h-[290px] overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  {item.tag && <div className="absolute top-3 left-3 bg-[#7A2438] text-[#F5CCDA] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm">{item.tag}</div>}
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#280C14] mb-1.5 group-hover:text-[#E8728A] transition-colors duration-300">{item.name}</h4>
                    <p className="text-xs font-light text-[#9A5060] leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif text-2xl font-semibold text-[#E8728A]">₹{item.price}</span>
                    <button onClick={() => addToBasket(item)} className="w-8 h-8 rounded-full bg-[#280C14] text-[#FFF0F3] flex items-center justify-center text-lg hover:bg-[#E8728A] hover:rotate-90 hover:scale-110 transition-all duration-300">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02. CAKES & TARTS SECTION */}
        <section 
          id="cakes" 
          ref={cakesRef}
          className="opacity-0 translate-y-8 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="flex flex-col md:flex-row md:items-baseline border-b border-[#F5CCDA] pb-5 mb-10 gap-5">
            <div className="flex items-baseline gap-5">
              <span className="font-serif text-sm text-[#E8728A] tracking-widest">02</span>
              <h2 className="font-serif text-4xl font-light text-[#280C14]">Cakes & <em className="italic text-[#E8728A]">Tarts</em></h2>
            </div>
            <p className="text-[13px] font-light text-[#9A5060] md:ml-auto max-w-xs md:text-right leading-relaxed">
              Whole cakes available 48hrs in advance. Slice service daily.
            </p>
          </div>

          {/* Seasonal Featured Cake */}
          {getCategoryItems('cakes').filter(i => i.tag?.toLowerCase() === 'seasonal').map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] border border-[#F5CCDA] rounded-md overflow-hidden bg-[#FFF8FA] hover:shadow-[0_24px_48px_rgba(232,114,138,0.14)] transition-all duration-300 mb-7 group">
              <div className="h-100 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[700ms]" />
                <div className="absolute top-[18px] left-[18px] bg-[#E8728A] text-white text-[10px] tracking-widest uppercase px-[14px] py-1.5 rounded-sm">🍓 Seasonal</div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-[11px] tracking-widest uppercase text-[#E8728A] mb-3.5">Signature Cake</div>
                <h3 className="font-serif text-4xl font-light text-[#280C14] leading-none mb-4" dangerouslySetInnerHTML={{__html: item.name.replace(' ', '<br/><em>') + '</em>'}} />
                <p className="text-sm font-light text-[#9A5060] leading-relaxed mb-7">{item.desc}</p>
                {item.ingredients && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.ingredients.map((ing, idx) => (
                      <span key={idx} className="bg-[#FFE4EA] text-[#7A2438] border border-[#F5CCDA] px-3.5 py-1 text-[11px] rounded-full tracking-wide hover:bg-[#7A2438] hover:text-[#FFF0F3] transition-colors duration-200">{ing}</span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-semibold text-[#E8728A]">₹{item.price} <small className="text-sm text-[#9A5060] font-normal">/ slice</small></span>
                  <button onClick={() => addToBasket(item)} className="bg-[#280C14] text-[#FFF0F3] text-[11px] tracking-widest uppercase px-7 py-3 rounded-sm hover:bg-[#E8728A] hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">Add to basket</button>
                </div>
              </div>
            </div>
          ))}

          {/* Standard Cakes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
            {getCategoryItems('cakes').filter(i => i.tag?.toLowerCase() !== 'seasonal').map((item) => (
              <div key={item.id} className="bg-[#FFF8FA] border border-[#F5CCDA] rounded-sm overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(232,114,138,0.12)] transition-all duration-300 flex flex-col group">
                <div className="h-[290px] overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[700ms]" />
                  {item.tag && <div className="absolute top-3 left-3 bg-[#7A2438] text-[#F5CCDA] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm">{item.tag}</div>}
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#280C14] mb-1.5 group-hover:text-[#E8728A] transition-colors duration-300">{item.name}</h4>
                    <p className="text-xs font-light text-[#9A5060] leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif text-2xl font-semibold text-[#E8728A]">₹{item.price}</span>
                    <button onClick={() => addToBasket(item)} className="w-8 h-8 rounded-full bg-[#280C14] text-[#FFF0F3] flex items-center justify-center text-lg hover:bg-[#E8728A] hover:rotate-90 hover:scale-110 transition-all duration-300">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03. CUPCAKES SECTION */}
        <section 
          id="cupcakes" 
          ref={cupcakesRef}
          className="opacity-0 translate-y-8 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="flex flex-col md:flex-row md:items-baseline border-b border-[#F5CCDA] pb-5 mb-10 gap-5">
            <div className="flex items-baseline gap-5">
              <span className="font-serif text-sm text-[#E8728A] tracking-widest">03</span>
              <h2 className="font-serif text-4xl font-light text-[#280C14]">Our <em className="italic text-[#E8728A]">Cupcakes</em></h2>
            </div>
            <p className="text-[13px] font-light text-[#9A5060] md:ml-auto max-w-xs md:text-right leading-relaxed">
              Decadent frostings, light sponges, beautifully frosted treats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
            {getCategoryItems('cupcakes').map((item) => (
              <div key={item.id} className="bg-[#FFF8FA] border border-[#F5CCDA] rounded-sm overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(232,114,138,0.12)] transition-all duration-300 flex flex-col group">
                <div className="h-[270px] overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[700ms]" />
                  {item.tag && <div className="absolute top-3 left-3 bg-[#7A2438] text-[#F5CCDA] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm">{item.tag}</div>}
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#280C14] mb-1.5 group-hover:text-[#E8728A] transition-colors duration-300">{item.name}</h4>
                    <p className="text-xs font-light text-[#9A5060] leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif text-2xl font-semibold text-[#E8728A]">₹{item.price}</span>
                    <button onClick={() => addToBasket(item)} className="w-8 h-8 rounded-full bg-[#280C14] text-[#FFF0F3] flex items-center justify-center text-lg hover:bg-[#E8728A] hover:rotate-90 hover:scale-110 transition-all duration-300">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. BREADS SECTION (List Style Layout) */}
        <section 
          id="breads" 
          ref={breadsRef}
          className="opacity-0 translate-y-8 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="flex flex-col md:flex-row md:items-baseline border-b border-[#F5CCDA] pb-5 mb-10 gap-5">
            <div className="flex items-baseline gap-5">
              <span className="font-serif text-sm text-[#E8728A] tracking-widest">04</span>
              <h2 className="font-serif text-4xl font-light text-[#280C14]">Artisan <em className="italic text-[#E8728A]">Breads</em></h2>
            </div>
            <p className="text-[13px] font-light text-[#9A5060] md:ml-auto max-w-xs md:text-right leading-relaxed">
              Long ferments, heritage grains, honest loaves.
            </p>
          </div>

          <div className="flex flex-col gap-[1px] border border-[#F5CCDA] rounded-sm overflow-hidden bg-[#F5CCDA]">
            {getCategoryItems('breads').map((item) => (
              <div 
                key={item.id} 
                onClick={() => addToBasket(item)}
                className="grid grid-cols-[60px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center gap-5 p-5 sm:p-6 bg-[#FFF8FA] hover:bg-[#FFE4EA] transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl text-center select-none group-hover:scale-110 transition-transform duration-300">{item.emoji || '🍞'}</div>
                <div>
                  <h4 className="font-serif text-xl text-[#280C14] mb-0.5 group-hover:text-[#E8728A] transition-colors duration-200">{item.name}</h4>
                  <p className="text-xs font-light text-[#9A5060] leading-snug">{item.desc}</p>
                </div>
                <div className="flex items-center gap-[18px]">
                  <span className="font-serif text-2xl font-semibold text-[#E8728A]">₹{item.price}</span>
                  <button className="w-8 h-8 bg-transparent text-[#280C14] border border-[#F5CCDA] rounded-full flex items-center justify-center text-lg group-hover:bg-[#E8728A] group-hover:text-white group-hover:border-[#E8728A] transition-all duration-300">+</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. DRINKS SECTION (List Style Layout) */}
        <section 
          id="drinks" 
          ref={drinksRef}
          className="opacity-0 translate-y-8 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="flex flex-col md:flex-row md:items-baseline border-b border-[#F5CCDA] pb-5 mb-10 gap-5">
            <div className="flex items-baseline gap-5">
              <span className="font-serif text-sm text-[#E8728A] tracking-widest">05</span>
              <h2 className="font-serif text-4xl font-light text-[#280C14]">Drinks & <em className="italic text-[#E8728A]">Accompaniments</em></h2>
            </div>
            <p className="text-[13px] font-light text-[#9A5060] md:ml-auto max-w-xs md:text-right leading-relaxed">
              To complete the ritual.
            </p>
          </div>

          <div className="flex flex-col gap-[1px] border border-[#F5CCDA] rounded-sm overflow-hidden bg-[#F5CCDA]">
            {getCategoryItems('beverages').map((item) => (
              <div 
                key={item.id} 
                onClick={() => addToBasket(item)}
                className="grid grid-cols-[60px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center gap-5 p-5 sm:p-6 bg-[#FFF8FA] hover:bg-[#FFE4EA] transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl text-center select-none group-hover:scale-110 transition-transform duration-300">{item.emoji || '☕'}</div>
                <div>
                  <h4 className="font-serif text-xl text-[#280C14] mb-0.5 group-hover:text-[#E8728A] transition-colors duration-200">{item.name}</h4>
                  <p className="text-xs font-light text-[#9A5060] leading-snug">{item.desc}</p>
                </div>
                <div className="flex items-center gap-[18px]">
                  <span className="font-serif text-2xl font-semibold text-[#E8728A]">₹{item.price}</span>
                  <button className="w-8 h-8 bg-transparent text-[#280C14] border border-[#F5CCDA] rounded-full flex items-center justify-center text-lg group-hover:bg-[#E8728A] group-hover:text-white group-hover:border-[#E8728A] transition-all duration-300">+</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer/>
    </div>
  );
}