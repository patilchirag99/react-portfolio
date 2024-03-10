import Portfolio from "../portfolio/Portfolio";
import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants ={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants ={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>CHIRAG PATIL</motion.h2>
          <motion.h1 variants={textVariants}>Full stack developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href={`#${"Portfolio"}`}>
             <motion.div variants={textVariants}>See the latest projects</motion.div>
            </a>
            <a href={`#${"Contact"}`}>
              <motion.div variants={textVariants}>Contact me</motion.div>
            </a>
          </motion.div>
          <motion.img variants={textVariants} src="/scroll.png" animate="scrollButton"></motion.img>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Frontend Developer, Backend Developer
      </motion.div>
      {/* <div className="imageContainer">
        <img src="./hero.png" alt=""></img>
      </div> */}
    </div>
  );
};

export default Hero;
