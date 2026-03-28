import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  IconMail, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconMapPin,
  IconSend,
  IconCheck
} from "@tabler/icons-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  
  // Parallax scroll setup
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to vertical movement for the background glows
  const yParallax1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const formspreeId = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); 
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Formspree error");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      // Updated background theme to a deep, rich radial gradient
      className="w-full px-6 py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0e] to-black relative overflow-hidden"
    >
      {/* 1. Scroll-Linked Ambient Background Glows */}
      <motion.div 
        style={{ y: yParallax1 }}
        animate={{ 
          scale: [1, 1.05, 1], 
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        style={{ y: yParallax2 }}
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* 2. Staggered Scroll Reveal Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Together</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's make it happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* ================= LEFT SIDE: CONTACT INFO ================= */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-purple-500/5 hover:border-white/20 hover:bg-white/[0.03]">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <a 
                    href="mailto:soniasunita15@gmail.com" 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 shrink-0 border border-purple-500/20">
                      <IconMail className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1 transition-colors group-hover:text-purple-400">Email Me</p>
                      <p className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                        soniasunita15@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 shrink-0 border border-pink-500/20">
                      <IconMapPin className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1 transition-colors group-hover:text-pink-400">Location</p>
                      <p className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                        Lucknow, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Connect on Socials</p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://linkedin.com/in/sonia-sharma-15a-11b-2024c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] border border-white/10 hover:border-transparent"
                      aria-label="LinkedIn"
                    >
                      <IconBrandLinkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/SoniaSharma15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-colors duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] border border-white/10 hover:border-transparent"
                      aria-label="GitHub"
                    >
                      <IconBrandGithub className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT SIDE: CONTACT FORM ================= */}
            <motion.div variants={itemVariants}>
              <div className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-pink-500/5 hover:border-white/20 hover:bg-white/[0.03]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2 group">
                      <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1 transition-colors group-focus-within:text-purple-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:-translate-y-1 focus:shadow-[0_10px_20px_-10px_rgba(168,85,247,0.4)] transition-all duration-300"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 group">
                      <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1 transition-colors group-focus-within:text-purple-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:-translate-y-1 focus:shadow-[0_10px_20px_-10px_rgba(168,85,247,0.4)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 group">
                    <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1 transition-colors group-focus-within:text-purple-400">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="How can I help you?"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:-translate-y-1 focus:shadow-[0_10px_20px_-10px_rgba(168,85,247,0.4)] transition-all duration-300 resize-none custom-scrollbar"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: status === "submitting" || status === "success" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "submitting" || status === "success" ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`w-full group flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed ${
                      status === "error" 
                        ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]" 
                        : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 disabled:opacity-70 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    }`}
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center gap-2">
                        <IconCheck className="w-5 h-5 text-white" />
                        Message Sent
                      </span>
                    ) : status === "error" ? (
                      <span>Error. Try Again.</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <IconSend className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;