import Navber from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Flow from "../components/Flow";

export default function Home() {
    return(
        <>
            <Navber />
            <HomeBanner />
            <Flow />
            <Aboutus />
            <Footer />
        </>
    )
}