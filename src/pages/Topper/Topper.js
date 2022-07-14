import "./Topper.css";
import useFetch from "../../useFetch";
const url = 'https://node-js-server.dvirko.repl.co/';


const Topper = () => {
    const [images] = useFetch(url+'images');

    return(
      <>
        <div  class="Topper">
        {images && 
        images.map((item,i) => {
        return <img alt={i} src={item.image}></img>;
        })}
        </div>
      </>
    );}

export default Topper;