import {useRouter} from "next/router"
import  books  from "@/utiles/books"
// import Details from "@/pages/details"
// import Link from "next/link"
const Grid = ( ) =>{
    const router =useRouter()
    return(
         <main className="h-[86%] w-[100%]  overflow-auto 
        flex flex-col flex-wrap justify-center items-center gap-4">
          
            <div className="w-[20%]   flex flex-wrap justify-center items-center  ">
                <h1 className="text-black text-xl">Top Books</h1> 
            </div>
           
            <div className="h-[80%] w-[70%]   grid
            grid-cols-3 grid-rows-3 flex gap-4">
          
                {
                books.map((e,index)=>{
                    console.log(e.title)
          
                    return(
          
                    <div key={index} className="md:hover:animate-pulse md:shadow-xl hover:-translate-y-2 h-full w-full border border-gray-800 rounded-md 
                    bg-transparent opacity-150 shadow-xl   flex flex-wrap flex-col justify-center items-center gap-4">
                        <h1 className="md:text-neutral-950 md:text-2xl ">{e.title}</h1>
                        <h1>{e.author}</h1>
                        <button className="w-12 border shadow-xl rounded-md"
                            onClick={()=>{
                                router.push({
                                    pathname: '/bookdetails',
                                    query:{id:index}
                                })
                            }}>
                            view 
                        </button>
                    </div>
                    )
                })
                }
            </div>
        </main>
    )
}
export default Grid;