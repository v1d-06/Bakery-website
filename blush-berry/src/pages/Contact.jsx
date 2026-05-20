import React, { useEffect } from "react";
import Footer from "../components/Footer";
import contactBanner from "../assets/contactBanner.png";

const Contact = () => {
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
            src={contactBanner}
            alt="Contact Banner"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_10s_ease-out_forwards]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#280C14]/60 via-[#280C14]/40 to-[#7A2438]/80"></div>

        <div className="relative z-10 text-center px-5 opacity-0 animate-[fadeUp_1.2s_.3s_forwards]">

          <div className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#F5CCDA] mb-1">
            We'd Love To Hear From You
          </div>

          <h1 className="font-serif text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px] leading-[0.9] font-light text-[#FFF0F3] mb-3">
            Get in
            <br />
            <span className="italic text-[#E8728A]">
              touch.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-[#F5CCDA] text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 font-light">
            Questions, reservations, collaborations,
            or simply a sweet hello — our doors
            and inbox are always open.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-14 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">

        {/* LEFT */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">

          <div className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#E8728A] mb-2">
            Contact Information
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-2">
            Let&apos;s start a
            <br />
            <span className="italic text-[#E8728A]">
              conversation
            </span>
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl mb-1">
                Visit Us
              </h3>

              <p className="text-[#9A5060] leading-8 font-light text-sm sm:text-base">
                24 Heritage Street,
                <br />
                Bhopal, Madhya Pradesh
                <br />
                India
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl mb-2">
                Call Us
              </h3>

              <p className="text-[#9A5060] leading-8 font-light text-sm sm:text-base">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl mb-2">
                Email
              </h3>

              <p className="text-[#9A5060] leading-8 font-light text-sm sm:text-base break-all">
                blush@butter.com
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl mb-2">
                Opening Hours
              </h3>

              <p className="text-[#9A5060] leading-8 font-light text-sm sm:text-base">
                Tuesday — Sunday
                <br />
                7:00 AM — 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#FFF8FA] p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">

          <div className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#E8728A] mb-1">
            Send A Message
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-2">
            Contact
            <span className="italic text-[#E8728A]">
              {" "}Us
            </span>
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block uppercase tracking-[2px] text-[10px] sm:text-xs text-[#9A5060] mb-1">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-[#F5CCDA] bg-white px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#E8728A] transition rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block uppercase tracking-[2px] text-[10px] sm:text-xs text-[#9A5060] mb-1">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-[#F5CCDA] bg-white px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#E8728A] transition rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block uppercase tracking-[2px] text-[10px] sm:text-xs text-[#9A5060] mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-[#F5CCDA] bg-white px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#E8728A] transition resize-none rounded-xl text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#280C14] hover:bg-[#E8728A] transition text-white uppercase tracking-[2px] text-xs px-8 sm:px-10 py-4 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CATERING SECTION */}
      <section className="bg-[#E56F8C] px-5 sm:px-8 lg:px-14 py-12 sm:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-25 items-center">

          {/* LEFT CONTENT */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">

            <div className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#FFE4EA] mb-2">
              Planning An Event?
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-tight font-light text-white mb-5">
              Bespoke catering
              <br />
              for{" "}
              <span className="italic">
                every occasion
              </span>
            </h2>

            <p className="text-[#FFE4EA] text-sm sm:text-base lg:text-lg leading-8 sm:leading-9 font-light max-w-xl mb-5">
              From intimate weddings to large corporate
              spreads — we create custom menus and pastry
              towers tailored to your event. Minimum
              72 hours notice. Delivery available in
              Bhopal.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-4 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">

            {[
              {
                icon: "💍",
                title: "Weddings",
                desc: "Custom cakes, petit fours, dessert tables from ₹8,000",
              },
              {
                icon: "🏢",
                title: "Corporate",
                desc: "Breakfast spreads, gift boxes, conference catering",
              },
              {
                icon: "🎂",
                title: "Celebrations",
                desc: "Birthdays, anniversaries, milestone events",
              },
              {
                icon: "🎁",
                title: "Gift Boxes",
                desc: "Curated seasonal boxes from ₹600, door delivery",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#F5A1B5] bg-[#E9859D] px-5 sm:px-8 py-6 sm:py-7 rounded-2xl hover:bg-[#EA90A6] transition duration-300 hover:-translate-y-1"
              >

                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="text-2xl sm:text-3xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[#FFE4EA] leading-7 font-light text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default Contact;