import {  useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
const History = () =>{
    const router=useRouter()
    const [history_book,sethistorybook]=useState([])
    useEffect (()=>{
        const history_store = async()=>{
            try{
                let data_storage = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/e-book-fiction.json?api-key=gHcDNMtPecx1lAljsW3014jTqobTAjcb')
                // let data= await data_storage.json()
                sethistorybook(data_storage.data)
            }
            catch(e){
                console.log(e)
            }
        }
        history_store();
    },[])
    return(
        <main className="border border-black h-[86%] w-[100%]
        flex flex-wrap flex-row gap-4 items-center justify-center overflow-auto">

        <div className="border mt-1 w-[25%] flex flex-col flex-wrap items-center justify-center 
        ">
            <h1 className="text-2xl italic">e-book-ficiton </h1>
        </div>
        <div className="h-[120%] w-[90%]  grid grid-row-3 grid-cols-5 flex gap-4 p-5">
        {
            history_book.results?.books.map((element,index)=>{
                return(
                    <div key={index} className="border border-black h-[15rem] w-[100%] 
                            flex flex-col flex-wrap justify-center items-center rounded-2xl gap-4">
                            <h1 className="h-[50px] w-full  text-md text-black truncate text-center ">{element.title}</h1>
                            <h1 className="h-[50px] text-md text-black truncate text-center ">{element.author}</h1>
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
export default History