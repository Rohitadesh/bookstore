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
        <div className="h-24 w-full  opacity-700 bg-white-100  flex flex-wrap flex-col justify-center items-center">
                <div className="h-full w-[20%]  flex flex-wap justify-center items-center">
                    {/* <Image src={Logo} width='auto' height='auto' alt="image"   priority={true}  /> */}
                </div>
                <div className="h-full w-[10%]  flex flex-wap justify-center items-center">
                    <Link href="/" className="text-black text-xl hover:text-sky-500 md:italic">Home</Link>
                </div>
                <div className="h-full w-[10%] dropdown dropdown-bottom 
                    pt-9 pl-7">
                   <button className="md:text-xl md:text-black italic md:hover:text-sky-500" onClick={()=>setopen(!open)}>Categories</button>
                  {
                   
                    open &&( <div className="pr-20 "><ul className="w-[600%] rounded-md h-[600%] bg-gray-100  flex flex-wrap flex-col gap-2 justify-center items-center relative z-100 ">
                        {
                            catgories.map((e,index)=>(
                                <li key={index}><Link href={`/${e}`} className="md:text-xl md:italic" onClick={()=>setopen(!open)}>{e}</Link> </li>
                            ))
                        }
                    </ul></div> )
                    

                  } 
                </div>
                <div className="h-full w-[30%]  flex flex-wrap flex-col justify-center items-center">

                    <input type="search" className="h-[30%] w-[90%] rounded-xl p-3 border border-solid border-black" placeholder=" search" />

                </div>
                <button  className="h-full w-[13%] flex flex-wrap flex-col justify-center items-center"
                    onClick={()=>router.push('/cart')}>
                <AiOutlineShoppingCart className="h-[60%] w-[48%]"/>
                </button>
                <div className="h-full w-[12%]  flex flex-wrap flex-col justify-center items-center">
                    <button className="h-[48%] w-24 text-black border border-black rounded-md"
                    onClick={()=>router.push('/login')}>Signin</button>
                </div>
        </div>
    )
}
export default Navbar;