import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-6 py-16 bg-gradient-to-r from-purple-400 to-pink-200 relative overflow-hidden"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-2xl p-10 border border-white/20 shadow-xl">
        <h1 className="text-violet-800 dark:text-violet-800 font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
          Step Into the Future with Sonia
        </h1>

        <p className="text-black dark:text-white/80 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          Full Stack Developer specialized in crafting modern, responsive web
          applications using React, Tailwind CSS, MongoDB, Node.js, Express.js,
          and Next.js. Focused on clean code and seamless user experiences.
        </p>

        <a
          href="mailto:sonia@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
        >
          <IconMail className="w-5 h-5" />
          Contact Me
        </a>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/sonia-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-800 dark:text-violet-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <IconBrandLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/sonia-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-800 dark:text-violet-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <IconBrandGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;