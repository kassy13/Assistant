import React from "react";
import {motion} from "framer-motion";
import growth from "../../assets/images/guest img/icons/growth icon.svg";
import growth2 from "../../assets/images/guest img/icons/grow icon.svg";
import money from "../../assets/images/guest img/icons/money icon.svg";
import cartShop from "../../assets/images/guest img/icons/cart shop.svg";
import GradientCard from "./GradientCard";

const Why = () => {
  return (
    <div className="w-full flex flex-col items-center px-2 lg:px-[4.5rem] lg:pt-12">
      <motion.h1
        className="font-bold text-text tracking-tight text-[22px] md:text-[32px] lg:text-3xl xxxl:text-4xl"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Why Leverage NetworkX
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-between  items-center gap-10 px-4 md:px-12 py-8">
        <motion.div
          className="w-full md:w-full transition-all hover:scale-[1.05] hover:shadow-[0px_0px_35px_5px_#0653C099] rounded-2xl"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.3, duration: 1}}
          viewport={{once: true}}
        >
          <GradientCard
            title="Grow"
            description="Attract real followers within your niche who are genuinely interested in your content and eager to engage with your posts. "
            imageSrc={growth2}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-full transition-all hover:scale-[1.05] hover:shadow-[0px_0px_35px_5px_#0653C099] rounded-2xl"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.6, duration: 1}}
          viewport={{once: true}}
        >
          <GradientCard
            title="Monitize"
            description="With X’s new revenue-sharing model, you have the opportunity to earn income from views on AI-generated posts and replies tailored to your audience."
            imageSrc={money}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-full transition-all hover:scale-[1.05] hover:shadow-[0px_0px_35px_5px_#0653C099] rounded-2xl"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.9, duration: 1}}
          viewport={{once: true}}
        >
          <GradientCard
            title="Sell"
            description="Elevate your marketing strategy by using our DM marketing tool to effectively sell your product or service directly to targeted audiences."
            imageSrc={cartShop}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
