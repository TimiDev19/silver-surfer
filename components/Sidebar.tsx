"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay (transparent with soft blur) */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleSidebar}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      ></motion.div>

      {/* Sidebar (Slides in) */}
      <motion.div
        className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col justify-center"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Navigation Links (Slide in one by one) */}
        <motion.nav
          className="mt-10 space-y-6"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
            hidden: {},
          }}
        >
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="block py-3 px-4 text-lg font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>

      {/* Animated Hamburger Button */}
      <button
        className="fixed top-5 z-50 flex flex-col items-center justify-center w-10 h-10 cursor-pointer"
        onClick={toggleSidebar}
      >
        <motion.div
          className="bg-gray-900 dark:bg-white w-8 h-[1.5px]"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="bg-gray-900 dark:bg-white w-8 h-[1.5px] mt-2"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
    </>
  );
};

export default Sidebar;
