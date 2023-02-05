import { motion } from "framer-motion";
import { buttonVariant } from "../components/motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navber from "../components/Navbar";
import { useAuthContext } from "../hook/Authhook";

export default function Register() {

    const [ownerAddress, setOwnerAddress] = useState("");
    const [totalSector, setTotalSector] = useState("");
    const [allfields, setAllfields] = useState(false);
    const { dispatch } = useAuthContext()

    const Navigate = useNavigate();

    useEffect(() => {
        if((ownerAddress.length === 0 || totalSector.length === 0)){
            setAllfields(false);
        } else {
            setAllfields(true);
        }
    }, [ownerAddress, totalSector])

    const handleclick = () => {
        const user = {"owneraddress": ownerAddress, "totalSector": totalSector};
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type: 'LOGIN', payload: user})
        Navigate("/payment")
    }
    
    return (
        <motion.div initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}  className="w-screen h-screen md:overflow-hidden bg-[#3BBDB6]">
            <Navber hide="true" />
            <div className="flex justify-center items-center mt-28 mx-2">
                <motion.div variants={buttonVariant(1)} className="bg-white py-6 px-4 overflow-hidden max-w-[500px]">
                    <h1 className="text-center font-bold text-2xl text-[#3BBDB6]">Registration Form</h1>
                    <div className="mt-16">
                        <label className="font-medium text-[#3BBDB6] text-xl">Storage Provider Id</label>
                        <input onChange={(e) => {setOwnerAddress(e.target.value)}} className="w-[100%] mt-2 mb-8 rounded-lg bg-[#54cbc5] p-2 text-white placeholder-white" placeholder="Eg: 51539845896xe676891208"/>
                        {allfields ? <button onClick={handleclick} className="bg-[#3BBDB6] py-2 text-white w-[100%]">Register</button> : <button className="bg-[#3BBDB6] opacity-60 py-2 text-white w-[100%] disabled cursor-not-allowed">Register</button>}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}