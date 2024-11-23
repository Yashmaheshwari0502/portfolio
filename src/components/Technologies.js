import { motion } from "framer-motion"

import cppIcon from "../assets/icons/c++.svg";
import pythonIcon from "../assets/icons/python.svg";
import reactIcon from "../assets/icons/react.svg";
import gitIcon from "../assets/icons/git.svg";
import flutterIcon from "../assets/icons/flutter.svg"
import nodejsIcon from "../assets/icons/nodejs.svg"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                {/* C++ */}
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className=" p-4">
                    <img
                        src={cppIcon}
                        alt="C++"
                        className="text-7xl"
                        style={{ width: '100px', height: '100px' }}
                    />
                </motion.div>

                {/* Python */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className=" p-4">
                    <img
                        src={pythonIcon}
                        alt="Python"
                        className="text-7xl"
                        style={{ width: '100px', height: '100px' }}
                    />
                </motion.div>

                {/* React */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className=" p-4">
                    <img
                        src={reactIcon}
                        alt="React"
                        className="text-7xl"
                        style={{ width: '100px', height: '100px' }}
                    />
                </motion.div>
                {/* nodejs */}
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className=" p-4">
                    <img
                        src={nodejsIcon}
                        alt="nodejs"
                        className="text-7xl"
                        style={{ width: '100px', height: '100px' }}
                    />
                </motion.div>
                {/* Flutter */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className=" p-4">
                    <img
                        src={flutterIcon}
                        alt="flutter"
                        className="text-7xl"
                        style={{ width: '100px', height: '100px' }}
                    />
                </motion.div>
                {/* Git */}
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className=" p-4">
                    <img
                        src={gitIcon}
                        alt="git"
                        className="text-7xl"
                        style={{ width: '100px', height: '100px' }}
                    />
                </motion.div>



            </motion.div>
        </div>
    )
}

export default Technologies
