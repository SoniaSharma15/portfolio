import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "Home", link: "#home" },
      { id: "About", link: "#about" },
      { id: "Projects", link: "#projects" },
      { id: "Certificates", link: "#certificates" },
      { id: "Contact", link: "#contact" },
      { id: "Tech", link: "#tech" },
    ],
    []
  );

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full py-2 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Sonia Sharma
          </span>
        </motion.div>{" "}
        {/* Desktop Nav */}
        <nav className="lg:flex hidden space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="group relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors"
            >
              {item.id}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>
        {/* Social + CTA */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            href="https://linkedin.com/in/sonia-sharma"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://github.com/SoniaSharma15"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 16.5,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>{" "}
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            className="text-gray-300"
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={toggleMenu}
              className="text-gray-300 font-medium py-2"
            >
              {item.id}
            </a>
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/SoniaSharma15">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://linkedin.com/in/sonia-sharma">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 w-full py-2 text-white bg-violet-500 rounded"
          >
            Contact Me
          </button>
        </div>
      </motion.div>{" "}
      {/* Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex flex-col justify-between items-center mb-4 relative">
                <h1 className="text-3xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 absolute top-0 right-0" />
                </button>
                <form className="w-full space-y-4 mt-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-500 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="msg"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="msg"
                      name="message"
                      rows="4"
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-500 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.03 }}
                    type="submit"
                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-violet-400 text-white font-semibold"
                  >
                    Send Message
                  </motion.button>{" "}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
