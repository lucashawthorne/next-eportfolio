import { articles, assets } from "@/assets/assets";
import Image from "next/image";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

interface WritingProps {
  darkMode: boolean;
}

const Writing: FC<WritingProps> = ( darkMode ) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="writing"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg gold"
      >
        My Writing Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        All-Star Articles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-[30rem] mx-auto mt-5 mb-12"
      >
        Have a gander at some of my all-star articles that demonstrate my writing skills.
        See my <a href="https://www.lucashawthorne.com/" target="_blank" className="gold underline">full website here.</a>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16"
      >
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-2xl group max-h-[610px] h-[407px]"
          >
            {/* IMAGE */}
            <Image
              src={article.image}
              alt={article.title}
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
                absolute top-1/2 left-9 transform translate-y-full opacity-0
                transition-all duration-500 text-white w-fit pr-4 max-w-[480px]
                group-hover:opacity-100 group-hover:-translate-y-1/2

                /* Force hover ON below lg */
                max-lg:opacity-100 max-lg:-translate-y-1/2
              "
            >
              <h3 className="text-3xl font-bold">{article.title}</h3>
              <h4 className="text-xl mt-2 italic">{article.subtitle}</h4>

              {/* Mobile (<768px) — visible always */}
              <p className="text-lg mt-4 md:hidden">{article.description}</p>

              {/* Tablet (768–1023px) — HIDDEN */}
              <p className="text-lg mt-4 hidden md:block lg:hidden"></p>

              {/* Desktop (≥1024px) — visible on hover */}
              <p className="text-lg mt-4 hidden lg:block">
                {article.description}
              </p>

              <div className="flex items-center mt-4">
                <a
                  href={article.demo}
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

      {/* Optional Show More Button */}
      {/* <a
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
      </a> */}
    </motion.div>
  );
};

export default Writing;
