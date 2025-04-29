import Image from "next/image";

const Home = () => {
    return(
        <div>
            <Image
                src="https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
                alt="Image from Unsplash"
                width={600}
                height={400}
            />
        </div>
    )
}

export default Home;