import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "./motion";

export default function Aboutus(){
    return(
        <motion.div initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} id="aboutus" className="z-10 bg-[#3BBDB6] relative top-0 px-4 py-16 sm:py-10 md:py-28 lg:px-12">
            <motion.h1 variants={buttonVariant(0.8)} className="font-bold text-4xl lg:text-6xl text-white mb-4 py-4 lg:mb-5">About Us</motion.h1>
            <motion.div variants={buttonrightVariant(0.8)} className="text-sm lg:text-xl">
                <p className="text-white">With Filecoin insurance we are trying to frame an insurance policy that could help Storage Providers in case of active faults. We used characteristics (such as their sector size, initial pledge collateral, vesting rewards, etc) to calculate the premium and claim amount for the SPs.
In exchange for recurrent insurance premium payments, the storage provider would be able to request a claim to a protocol. The storage providers will have to surrender their beneficiary address to the insurer 
After verifying the beneficiary, the claims along with the initial pledge collateral and the locked block rewards will be released. This could espically help the SP who needs money urgently.
</p>
            </motion.div>
        </motion.div>
    )
}