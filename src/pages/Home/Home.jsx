import Banner from "../../Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>  
        </div>
    );
};

export default Home;