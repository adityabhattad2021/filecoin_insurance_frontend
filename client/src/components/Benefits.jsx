import { packages } from "./data";
import { motion } from "framer-motion";
import { staggerContainer,fadeIn } from "./motion";


export default function Benefits() {
    return(
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-[30px] relative z-10" id="benefits">
            <div className="max-w-[800px] mx-auto pt-[60px] pb-[30px]">
                <h1 className="text-center py-4 text-[#3BBDB6] text-2xl sm:text-4xl font-bold mb-4 overflow-hidden">Benefits of Getting a SP Insurance </h1>
            </div>   
            <div className="flex justify-center items-center flex-wrap">
                {packages.map((item,index) => {
                    return(
                        <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className="mx-4 h-[470px] p-4 rounded-2xl mb-6 bg-[#3BBDB6]  w-[280px] lg:mx-6" key={item.id}>
                            <img className="h-auto rounded-xl w-[280px] object-contain" src={item.url} alt="merch-image"/>
                            <h1 className="text-xl font-bold text-[#fff] my-4 md:my-4">{item.heading}</h1>
                            <p className="text-[#e8e8e8] text-sm mb-6">{item.description}</p>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}