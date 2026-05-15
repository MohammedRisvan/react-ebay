import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

function Home (){
    const{name, setName} = useContext(UserContext);
    const arr = ["https://i.ebayimg.com/images/g/XdkAAeSw0HJp1Swr/s-l1600.webp","https://i.ebayimg.com/images/g/t1cAAeSwjwRpusMM/s-l1600.webp","https://i.ebayimg.com/images/g/6ooAAeSwCB9p-MMQ/s-l960.webp",,"https://i.ebayimg.com/images/g/9nwAAOSwfX5n1EXY/s-l1600.webp"]
    return(
        <div>
            <img src={arr[0]}/>
        </div>
    )
}

export default Home;