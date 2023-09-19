import Navbar  from "./navabar";
import bg from '../../public/images/book.jpeg'
const Layout =({ children }) =>{
    return(
        <div className=" images opacity-150
         h-[100vh] w-[100vw]  ">
            <Navbar />
       
            {children}  
        
        </div>)
}
export default Layout;