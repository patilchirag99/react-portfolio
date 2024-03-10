import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Chirag Patil
        </motion.span>
        <div className="socials">
          <a href="https://github.com/patilchirag99" target="_blank">
            <img className="git" src="/git-white.svg" alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/chirag-patil098" target="_blank">
            <img className="linkedin" src="/linkedin-original.svg" alt=""></img>
          </a>
  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
