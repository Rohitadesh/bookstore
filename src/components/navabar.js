// import Image from "next/image";
// import Logo from "../../public/images/bookart.png"
import Link from "next/link";
// import { catgories } from "./book";
import {AiOutlineShoppingCart,} from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";


const Navbar = () =>{
    const [open,setopen]=useState(false)
    const catgories = ["fiction","nonfiction","history"]
    const router =useRouter();
    return(
        <div className="border border-black h-24 w-full opacity-700 bg-white-100  grid grid-cols-6">
                <div className="border border-black h-full w-full  flex flex-wap justify-center items-center">
                    {/* <Image src={Logo} width='auto' height='auto' alt="image"   priority={true}  /> */}
                </div>
                <div className="border border-green-500 h-full w-full  flex flex-wap justify-center items-center">
                    <Link href="/" className="text-black text-xl hover:text-sky-500 md:italic">Home</Link>
                </div>
                <div className="border border-pink-500 h-full w-full dropdown dropdown-bottom 
                   flex flex-wrap flex-col items-center justify-center">
                   <button className="md:text-xl md:text-black italic md:hover:text-sky-500" onClick={()=>setopen(!open)}>Categories</button>
                  {
                   
                    open && ( <div className=" absolute top-[13%]"><ul className="w-[150%] rounded-md h-[150%] bg-gray-100  flex flex-wrap flex-col gap-2 justify-center items-center z-100 ">
                        {
                            catgories.map((e,index)=>(
                                <li key={index}><Link href={`/${e}`} className="md:text-xl md:italic" onClick={()=>setopen(!open)}>{e}</Link> </li>
                            ))
                        }
                    </ul></div> )
                    

                  } 
                </div>
                <div className="h-full w-full  flex flex-wrap flex-col justify-center items-center">

                    <input type="search" className="h-[30%] w-[90%] rounded-xl p-3 border border-solid border-black" placeholder=" search" />

                </div>
                <button  className="border border-sky-100 h-full w-full flex flex-wrap flex-col justify-center items-center"
                    onClick={()=>router.push('/cart')}>
                <AiOutlineShoppingCart className="h-[60%] w-[48%]"/>
                </button>
                <div className=" border border-green-500 h-full w-full flex flex-wrap flex-col justify-center items-center">
                    <button className="h-[48%] w-24 text-black border border-black rounded-md"
                    onClick={()=>router.push('/login')}>Signin</button>
                </div>
        </div>
    )
}
export default Navbar;