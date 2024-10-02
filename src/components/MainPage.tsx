"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useTime, useTransform } from "framer-motion";

export function MainPage() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const text = "Aakash Subedi".split(" ");
  const text2 = "Spartan Here".split(" ");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center h-full">
      <BackgroundLines className="flex items-center justify-center w-full  flex-col px-4 py-8 lg:gap-3">
        <h2>
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
              className="bg-clip-text text-transparent  text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative  font-bold tracking-tight"
            >
              {el}{" "}
            </motion.span>
          ))}
        </h2>
        <h2>
          {text2.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 5,
                delay: i / 10,
              }}
              key={i}
              className="bg-clip-text text-transparent text-center bg-gradient-to-b from-red-600 via-yellow-700 to-yellow-400 dark:from-red-900 dark:via-brown-900 dark:to-yellow-500 text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative font-bold tracking-tight"
            >
              {el}{" "}
            </motion.span>
          ))}
        </h2>

        <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center z-20">
          <div className="flex justify-center space-x-6 mt-6">
            <motion.div style={{ rotate }}>
              <a
                href="https://www.instagram.com/aakashhhhh_s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors z-40 "
              >
                <FaInstagram />
              </a>
            </motion.div>
            <a
              href="https://github.com/subediaakash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl z-50 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
            >
              <motion.div style={{ rotate }}>
                <FaGithub />
              </motion.div>
            </a>
            <motion.div style={{ rotate }}>
              <a
                href="https://www.linkedin.com/in/aakash-subedi-a9986625a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </motion.div>
            <motion.div style={{ rotate }}>
              <a
                href=" https://x.com/Aakash12527680?t=RmgIUKg35kP9g98Z_VOXOQ&s=08"
                target="_blank"
                className="text-2xl z-40 md:text-3xl dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}
