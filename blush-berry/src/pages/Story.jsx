import React, { useEffect } from "react";
import Footer from '../components/Footer';
import Storybanner from '../assets/Storybanner.png';
import story2 from '../assets/story2.jpg';
import baker1 from '../assets/baker1.jpg';
import baker2 from '../assets/baker2.jpg';
import baker3 from '../assets/baker3.jpg';

const Story = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFF0F3] text-[#280C14] overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src={Storybanner}
            alt="Hero"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_10s_ease-out_forwards]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#280C14]/60 via-[#280C14]/40 to-[#7A2438]/80"></div>

        <div className="relative z-10 text-center px-5 opacity-0 animate-[fadeUp_1.2s_.3s_forwards]">

          <div className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#F5CCDA] ">
            Est. 1987 · Bhopal
          </div>

          <h1 className="font-serif text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] leading-[0.9] font-light text-[#FFF0F3] mb-1">
            A story
            <br />
            baked in
            <br />
            <span className="italic text-[#E8728A]">
              love.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-[#F5CCDA] text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 font-light">
            Three decades of waking before dawn,
            of flour-dusted hands, of recipes
            passed down like heirlooms.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[#F5CCDA]/70 uppercase tracking-[2px] text-[10px] sm:text-xs animate-bounce">
          Scroll
          <div className="text-lg sm:text-xl mt-1">↓</div>
        </div>
      </section>

      {/* FOUNDING */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-13 items-center">

        {/* LEFT */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">

          <div className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#E8728A] mb-2">
            The Beginning
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-3">
            How a small kitchen
            <br />
            became{" "}
            <span className="italic text-[#E8728A]">
              Blush and Butter
            </span>
          </h2>

          <p className="text-[#9A5060] leading-8 mb-2 font-light text-sm sm:text-base">
            In the summer of 1987, Meera Verma
            returned to Bhopal from a two-year
            apprenticeship in Lyon, France, with
            a battered notebook of recipes and
            an unshakeable belief that this city
            deserved real pastry.
          </p>

          <p className="text-[#9A5060] leading-8 mb-2 font-light text-sm sm:text-base">
            She set up a small oven in her
            mother&apos;s kitchen and began selling
            croissants to neighbours. Within a
            month, the queue stretched down the
            street.
          </p>

          <div className="border-l-4 border-[#E8728A] bg-[#FFE4EA] p-5 sm:p-6 rounded-r-xl">

            <p className="font-serif italic text-xl sm:text-2xl leading-9 sm:leading-10">
              "I didn't want to open a bakery.
              I wanted to open a feeling."
            </p>

            <span className="block mt-4 text-[10px] sm:text-xs uppercase tracking-[2px] text-[#9A5060]">
              — Meera Verma
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">

          <img
            src={story2}
            alt="Founder"
            className="w-full h-[380px] sm:h-[500px] lg:h-[560px] object-cover rounded-2xl shadow-xl"
          />

          <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:-left-6 bg-[#7A2438] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-xl">

            <span className="block text-3xl sm:text-5xl font-serif font-semibold">
              1987
            </span>

            <span className="uppercase tracking-[2px] text-[10px] sm:text-xs text-[#F5CCDA]">
              Founded in Bhopal
            </span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#FFF8FA] px-5 sm:px-8 lg:px-10 py-10 sm:py-10">

        <div className="text-center mb-8">

          <div className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#E8728A] mb-3">
            What We Believe
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light">
            Our{" "}
            <span className="italic text-[#E8728A]">
              values
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {[
            {
              num: "01",
              title: "No shortcuts",
              desc: "Every item is made from scratch every morning by human hands.",
            },
            {
              num: "02",
              title: "Local first",
              desc: "We source ingredients from nearby farms and local markets.",
            },
            {
              num: "03",
              title: "Honest craft",
              desc: "We follow timeless techniques instead of chasing trends.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF0F3] p-8 sm:p-10 hover:bg-[#FFE4EA] transition duration-300 rounded-2xl shadow-sm hover:shadow-lg"
            >

              <div className="font-serif text-5xl sm:text-6xl text-[#F5CCDA] mb-4">
                {item.num}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl mb-4">
                {item.title}
              </h3>

              <p className="text-[#9A5060] leading-8 font-light text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-5 sm:px-8 lg:px-10 py-10 sm:py-10">

        <div className="text-center mb-">

          <div className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#E8728A] mb-2">
            The People
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light">
            Meet our{" "}
            <span className="italic text-[#E8728A]">
              team
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              img: baker1,
              name: "Priti Verma",
              role: "Head Pâtissier & Owner",
            },
            {
              img: baker2,
              name: "Arjun Das",
              role: "Head Baker",
            },
            {
              img: baker3,
              name: "Kavya Nair",
              role: "Pastry Chef",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center reveal opacity-0 translate-y-8 transition-all duration-700 group"
            >

              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl mt-6 mb-1">
                {member.name}
              </h3>

              <p className="uppercase tracking-[2px] text-[10px] sm:text-xs text-[#E8728A] mb-2">
                {member.role}
              </p>

              <p className="text-[#9A5060] leading-7 font-light text-sm sm:text-base max-w-sm mx-auto">
                Passionate about creating handcrafted
                pastries with timeless techniques.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowZoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Story;