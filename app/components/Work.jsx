import { assets, projects } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const Work = (darkMode) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-lg mx-auto mt-5 mb-12"
      >
        Explore my latest collection of projects showcasing my expertise in
        frontend development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-2xl group max-h-[610px] h-[407px]"
          >
            {/* IMAGE */}
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="
                w-full h-full object-cover transition-all duration-500
                group-hover:scale-110 group-hover:blur-sm

                /* Force hover ON below lg */
                max-lg:scale-110 max-lg:blur-sm
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0 bg-[#1c1d25] opacity-0 transition-all duration-300
                group-hover:opacity-70

                /* Force hover ON below lg */
                max-lg:opacity-70
              "
            ></div>

            {/* TEXT CONTAINER */}
            <div
              className="
                absolute top-1/2 left-6 transform translate-y-full opacity-0
                transition-all duration-500 text-white max-w-[550px]
                group-hover:opacity-100 group-hover:-translate-y-1/2

                /* Force hover ON below lg */
                max-lg:opacity-100 max-lg:-translate-y-1/2
              "
            >
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <h4 className="text-xl mt-2">{project.subtitle}</h4>

              {/* Mobile (<768px) — visible always */}
              <p className="text-lg mt-4 md:hidden">{project.description}</p>

              {/* Tablet (768–1023px) — HIDDEN */}
              <p className="text-lg mt-4 hidden md:block lg:hidden"></p>

              {/* Desktop (≥1024px) — visible on hover */}
              <p className="text-lg mt-4 hidden lg:block">
                {project.description}
              </p>

              <div className="flex items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-3xl mr-4 cursor-pointer transition-all duration-300
                  hover:scale-[1.15] hover:text-[#daa520] active:scale-[0.9]"
                >
                  <FontAwesomeIcon icon={faSquareGithub} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="text-3xl cursor-pointer transition-all duration-300
                  hover:scale-[1.15] hover:text-[#daa520] active:scale-[0.9]"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700
        border-[1px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
        hover:bg-lightHover duration-500 dark:text-white dark:hover:bg-darkHover"
      >
        Show More{" "}
        <Image
          src={
            darkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </a>
    </motion.div>
  );
};

export default Work;
