import {  useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
const Non_fiction = () =>{
    const router=useRouter()
    const [nonfiction_book,setnon_book]=useState([])
    useEffect (()=>{
        const getnon_books = async()=>{
            try{
                let data_storage = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=gHcDNMtPecx1lAljsW3014jTqobTAjcb')
                // let data= await data_storage.json()
                setnon_book(data_storage.data)
            }
            catch(e){
                console.log(e)
            }
        }
        getnon_books();
    },[])
    return(
       <main className=" h-[86%] w-[100%]
        flex flex-wrap flex-row gap-4 items-center justify-center overflow-auto">

        <div className=" mt-1 flex flex-col flex-wrap items-center justify-center 
        ">
            <h1 className="text-2xl italic">Non-Fiction Books</h1>
        </div>
        <div className="h-[120%] w-[90%] grid grid-row-3 grid-cols-5 flex gap-4">
        {
            nonfiction_book.results?.books.map((element,index)=>{
                return(
                    <div key={index} className="border border-black h-full w-full
                            flex flex-col flex-wrap justify-center items-center rounded-2xl gap-4">
                            <h1 className="text-md text-black text-center ">{element.title}</h1>
                            <h1 className="text-md text-black ">{element.author}</h1>
                            <button className="w-12 border shadow-xl rounded-md"
                            onClick={()=>{
                                router.push(
                                    {
                                        pathname:'/bookdetails',
                                        query:{id:element.primary_isbn10,
                                        author:element.author,
                                        images:element.book_image,
                                        publish:element.publisher,
                                        titles:element.title,
                                        amazon:element.amazon_product_url
                                        }
                                        
                                    }
                                )

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
export default Non_fiction;