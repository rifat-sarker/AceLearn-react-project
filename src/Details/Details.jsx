
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";



const Details = () => {
  const {id} = useParams()
  return (
    <div>
      <Navbar></Navbar>
        <p>{id}</p>
   
    </div>
  );
};

export default Details;
