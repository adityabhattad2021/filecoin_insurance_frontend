import { Flowsteps } from "./data";
import { motion } from "framer-motion";
import { staggerContainer,fadeIn } from "./motion";

export default function Flow() {
    return(
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="min-w-screen bg-[#3BBDB6] min-h-screen" id="flow">
            <div className="bg-white w-[95%] h-[95%] m-[2.5%] md:w-[80%] md:h-[80%] md:m-[10%] rounded-3xl">
                <h1 className="text-3xl text-center pb-2 pt-6 font-extrabold text-[#3BBDB6]">How does our project works</h1>
                <div className="py-6 px-3 flex justify-center items-center flex-wrap">
                    {Flowsteps.map((Flowstep,i) => (
                        <motion.div variants={fadeIn('right', 'spring', i * 0.5, 0.75)} key={Flowstep.id} className="border-2 h-[220px] max-w-[400px] border-[#3BBDB6] p-3 my-4 sm:mx-6">
                            <h1 className="h-[30px] bg-[#3BBDB6] w-[30px] text-white flex justify-center items-center rounded-full mb-4">{Flowstep.id}</h1>
                            <h2 className="text-xl font-extrabold text-[#3BBDB6] mb-2">{Flowstep.heading}</h2>
                            <p className="text-[#464646]">{Flowstep.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}