import Banner from "../../Banner/Banner";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import Review from "../../Review/Review";
import Services from "../../Services/Services";
import Navbar from "../../shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner> 
            <Services></Services> 
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;