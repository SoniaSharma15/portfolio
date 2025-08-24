function ContactSection() {
  return (

      <section className="w-full  text-center bg-gradient-to-r from-purple-400 to-pink-200 p-10 rounded-xl " id="contact">
        <h1 className="text-violet-800 font-bold text-7xl mb-4">
          Step Into the Future with Sonia
        </h1>

        <p className="text-black text-base mb-6 xl:w-[50%] mx-auto">
          Full Stack Developer specialised in crafting modern, responsive web
          applications using React, Tailwind CSS, MongoDB, Node.js, Express.js,
          and Next.js. Focused on clean code and simple, clean UI.
        </p>

        <button className="px-6 py-2 rounded-xl bg-black text-white hover:bg-white hover:text-black transition-colors duration-300">
          Contact Me
        </button>
      </section>
  );
}

export default ContactSection;