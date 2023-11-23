import Banner from "../../Banner/Banner";
import Services from "../../Services/Services";
import Navbar from "../../shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner> 
            <Services></Services> 
        </div>
    );
};

export default Home;