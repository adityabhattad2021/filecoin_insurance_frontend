import { navVariants } from "./motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hook/Authhook";

export default function Navber({hide,logout}) {

    const { dispatch } = useAuthContext()

    const Logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
    }

    return(
        <motion.div variants={navVariants}
        initial="hidden"
        whileInView="show" className="flex z-20 bg-[#3BBDB6] fixed w-screen items-center justify-between px-8 py-4 shadow-2xl">
            <a href="/"><img className="h-8 object-contain cursor-pointer md:h-12" src="/logo.png" alt="cryptosurance-logo"/></a>
            {hide !== "true" && <div className="flex gap-6 items-center">
                <a className="hidden md:block" href="#flow"><li className="text-white font-bold text-xl">Flow</li></a>
                <a className="hidden md:block" href="#benefits"><li className="text-white font-bold text-xl">Benefits</li></a>
                <a className="hidden md:block" href="#aboutus"><li className="text-white font-bold text-xl">About Us</li></a>
                <Link to="/register"><button className="font-medium text-sm border-2 px-2 py-1 text-white transition-all duration-700 hover:bg-white hover:text-[#3BBDB6] md:text-2sm md:px-4 md:text-xl">Register Now</button></Link>
            </div>}
            {logout === "true" && <div className="flex gap-6 items-center">
                <button onClick={Logout} className="font-medium text-sm border-2 px-2 py-1 text-white transition-all duration-700 hover:bg-white hover:text-[#3BBDB6] md:text-2sm md:px-4 md:text-xl">Logout</button>
            </div>}
        </motion.div>
    )
}