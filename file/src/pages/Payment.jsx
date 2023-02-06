import { motion } from "framer-motion";
import { buttonVariant } from "../components/motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navber from "../components/Navbar";

export default function Payment() {
    const Navigate = useNavigate();

    const handleclick = () => {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
            resolveAfter3Sec,{
                pending: 'Processing Payment',
                success: 'Payment Successful',
                error: 'Payment rejected'
            }
        )
        const timer = setTimeout(() => Navigate("/user"), 5000);
    }
    
    return (
        <motion.div initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}  className="w-screen h-screen md:overflow-hidden bg-[#3BBDB6]">
            <Navber hide="true" />
            <div className="flex w-screen h-screen justify-center items-center px-[10px]">
                <motion.div variants={buttonVariant(1)} className="bg-white py-6 px-4 min-w-[270px] sm:min-w-[500px] overflow-hidden max-w-[500px]">
                    <h1 className="text-center font-bold text-2xl text-[#3BBDB6]">Payment</h1>
                    <button onClick={handleclick} className="bg-[#3BBDB6] py-2 mt-10 text-white w-[100%]">Pay Premium</button>
                    <p className="text-[#ff0000] text-sm mt-2">This is just to simulate the payment process no money would be deducted.</p>
                </motion.div>
            </div>
            <ToastContainer className="overflow-hidden"/>
        </motion.div>
    )
}