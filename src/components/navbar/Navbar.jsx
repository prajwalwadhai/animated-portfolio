import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Prajwal Wadhai
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/prajwal-wadhai-29719b204/" target="_blank">
            <img src="/linkedin.png" alt="!" />
          </a>
          <a href="https://github.com/prajwalwadhai" target="_blank">
            <img src="/github.png" alt="!" />
          </a>
          <a href="#" target="_blank">
            <img src="/instagram.png" alt="!" />
          </a>
          <a href="#" target="_blank">
            <img src="/dribbble.png" alt="!" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
