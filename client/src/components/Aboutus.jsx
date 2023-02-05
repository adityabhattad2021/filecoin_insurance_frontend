import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "./motion";

export default function Aboutus(){
    return(
        <motion.div initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} id="aboutus" className="z-10 bg-[#3BBDB6] relative top-0 px-4 py-16 sm:py-10 md:py-28 lg:px-12">
            <motion.h1 variants={buttonVariant(0.8)} className="font-bold text-4xl lg:text-6xl text-white mb-4 py-4 lg:mb-5">About Us</motion.h1>
            <motion.div variants={buttonrightVariant(0.8)} className="text-sm lg:text-xl">
                <p className="text-white">Storage providers will receive insurance from FilecoinInsurance that will shield them from a crypto crash. The storage provider would be able to make a claim for insurance if a cryptocurrency dropped below 75%, which would not only secure the provider but also give them motivation to offer the finest services possible. To obtain premium insurance, they would have to pay a minimal amount every six months.</p>
            </motion.div>
        </motion.div>
    )
}
