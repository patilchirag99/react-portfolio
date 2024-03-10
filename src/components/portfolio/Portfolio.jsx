import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Food ordering app",
    demo:"https://firehouse-pizza.netlify.app",
    git:"https://github.com/patilchirag99/react-food-order",
    img: "https://images.pexels.com/photos/9461218/pexels-photo-9461218.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Food ordering app using React",
  },
  {
    id: 2,
    title: "React todos app",
    demo:"https://learnredux-todos.netlify.app/",
    git:"https://github.com/patilchirag99/learn-redux-todos",
    img: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=800",
    desc: "Todos app using react and redux",
  },
  {
    id: 3,
    title: "React weather app",
    demo:"https://react-weather-app-chirag.netlify.app",
    git:"https://github.com/patilchirag99/learn-react-weather",
    img: "https://media.istockphoto.com/id/1130294493/photo/focusing-weather-icon-on-smart-phone-screen.jpg?b=1&s=612x612&w=0&k=20&c=BcjXDaPi-oYWC1o6aAXPd0mHn7QPsW8QeXGCl8YoM5Q=",
    desc: "Weather application using react using api",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref , 
    // offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300,300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href= {`${item.demo}`} target="_blank">
              <button>See demo</button>
            </a>
            <a href= {`${item.git}`} target="_blank" >
              <button>Github</button>
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
