import Banner from "../../Banner/Banner";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import Services from "../../Services/Services";
import Navbar from "../../shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner> 
            <Services></Services> 
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;