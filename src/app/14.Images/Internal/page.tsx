import tiger from "../../../../public/tiger.jpg";
import Image from "next/image";

const Home = () => {
    return(
        <div>
            <Image src={tiger} alt="tiger"/>
        </div>
    )
}

export default Home;