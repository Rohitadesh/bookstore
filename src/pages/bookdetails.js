import { useRouter } from "next/router";
import {AiOutlineShoppingCart,AiOutlineAmazon} from "react-icons/ai";
import books from "@/utiles/books";
 import Image from "next/image";
const Details = () =>{
    // console.log(input_value)

    let router = useRouter();
    let {id,author,images,publish,titles,amazon,book_height,book_width}= router.query;
    // let {each_value}=router.option
    // let obj =  id;
    return(
        <main className="h-[86%] w-[100%] overflow-auto 
        flex flex-col flex-wrap justify-center items-center">
            <div className=" h-[90%] w-[80%] grid grid-cols-2 ">
               
                <div className="h-full w-full flex flex-wrap flex-col items-center  justify-center">
                    {images && <Image src={images} width={350} height={350}  alt={titles}   priority />}
                </div>
               
                <div className="h-[90%] w-[80%] opacity-700 bg-transparent  gap-6 rounded-3xl">
                   <div className="lg:h-[37%] w-[100%]  flex flex-wrap flex-col 
                   justify-center items-center gap-6 ">
                    
                    <h1 className="text-xl text-black Roboto">Title: {titles}</h1>
                    <h1 className="text-xl text-black Roboto">Author: {author}</h1>
                    <h1 className="text-xl text-black Roboto">Published: {publish}</h1>

                   </div>
                   <div className="lg:h-[63%] w-[100%] flex flex-wrap flex-col 
                   justify-center items-center gap-4">
                        <div className="h-[15%] rounded-xl w-[40%] bg-blue-100 border-sky-200
                            flex flex-wrap items-center justify-center flex-col ">
                            <h1 className="text-2xl Roboto">Price: Rs {102.00}</h1>
                        </div>
                        <a href={`${amazon}`}><AiOutlineAmazon className="h-20 w-20" /></a>
                        {/* <div className="border border-black mr-4"> */}
                            {/* <h1 className="underline text-black ">Amazon:{amazon}</h1> */}

                        {/* </div> */}
                        <button className="h-[15%] w-[40%] bg-yellow-100 flex flex-wrap flex-col justify-center items-center 
                        text-xl border border-green-200  gap-2 rounded-xl bg-yellow-400"
                            onClick={()=>router.push('/cart')}>
                            <AiOutlineShoppingCart size={37}/> 
                            <h2 className="lg:text-2xl pr-3">Add to cart</h2>
                            
                        </button>
                        <button className="h-[15%] w-[30%] text-xl 
                         rounded-xl bg-sky-200" onClick={()=>router.push('/cart')}>
                            Buy
                        </button>
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Details;