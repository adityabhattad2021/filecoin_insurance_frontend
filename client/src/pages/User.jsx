import { motion } from "framer-motion";
import { buttonVariant } from "../components/motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Navber from "../components/Navbar";
import { useAuthContext } from "../hook/Authhook";

export default function User() {
    const { user } = useAuthContext()
    const [claim,setClaim] = useState(false);

    const handleclick = () => {
        setClaim(true); 
    }
    
    return (
        <motion.div initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}  className="w-screen h-screen md:overflow-hidden bg-[#3BBDB6]">
            <Navber hide="true" logout="true"/>
            <div className="flex w-screen h-screen justify-center items-center px-[10px]">
                <motion.div variants={buttonVariant(1)} className="bg-white py-6 px-4 min-w-[270px] sm:min-w-[500px] overflow-hidden max-w-[500px]">
                    <h1 className="text-center font-bold text-2xl text-[#3BBDB6]">Claim</h1>
                    <div className="mt-6">
                        <h1 className="text-[#757575]"><span className="text-[#3BBDB6] font-bold">Owner Address: </span>{user.owneraddress}</h1>
                        <h1 className="text-[#757575]"><span className="text-[#3BBDB6] font-bold">Total Sector:  </span>{user.totalSector}</h1>
                    </div>
                    <button onClick={handleclick} className="bg-[#3BBDB6] py-2 mt-4 text-white w-[100%]">Claim</button>
                    {claim ? <p className="text-[#51be51] text-sm text-center mt-2">Your claim is processed</p> : <p className="text-[#ff0000] text-sm mt-2">This is just to simulate the Claiming process.</p>}
                </motion.div>
            </div>
        </motion.div>
    )
}