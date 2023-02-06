import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "./motion";
import { Link } from "react-router-dom";

export default function HomeBanner() {
    return(
        <motion.div  initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} className="h-[100vh] bg-[#3BBDB6] w-screen flex flex-col px-12 py-20 sm:flex-row sm:py-4" id="#">
            <motion.div variants={buttonVariant(0.8)} className="flex-1 my-auto">
                <h1 className="text-[20px] py-4 text-white font-bold md:text-[36px]">Insurance for Storage Providers</h1>
                <p className="text-[#d2d2d2] text-[10px] mb-4 font-bold md:text-[16px]">Storage Providers can take out insurance policies that protect them from active faults and ensure an active revenue stream in the case of failure.</p>
                <Link to="/register"><button className="font-medium text-sm border-2 px-2 py-1 text-white transition-all duration-700 hover:bg-white hover:text-[#3BBDB6] md:text-2sm md:px-4 md:text-xl">Register Now</button></Link>
            </motion.div>
            <motion.img variants={buttonrightVariant(0.8)}className="flex-1 object-contain" src="/banner-image.png" alt="banner-image"  />      
        </motion.div>
    )
}