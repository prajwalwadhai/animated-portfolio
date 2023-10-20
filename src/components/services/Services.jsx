import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>Learning Insites...</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Languages</h2>
          <p>
            My experience with C, C++, and Java has honed my programming skills. C taught me memory management, C++ introduced me to object-oriented design, and Java emphasized portability and code readability. These languages have enriched my software development expertise significantly.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DSA</h2>
          <p>
          Studying data structures and algorithms has illuminated the art of efficient problem-solving. I've grasped the power of selecting the right data structure and algorithm for a task, optimizing code, and enhancing the performance of software. These fundamental concepts are the cornerstone of sound programming.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DBMS</h2>
          <p>
          Exploring database management systems has revealed the crucial role of structured data in modern applications. I've acquired skills in data organization, retrieval, and optimization, recognizing that well-designed databases are the backbone of robust information systems. Mastering these systems is key to creating efficient and scalable software solutions.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ReactJs</h2>
          <p>
           My journey with React.js has unveiled the power of declarative, component-based user interfaces. I've harnessed the ability to build interactive, responsive web applications with ease, and React's virtual DOM has reshaped my understanding of efficient UI rendering. This library is a game-changer for modern web development.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
