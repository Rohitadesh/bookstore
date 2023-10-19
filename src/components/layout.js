import Navbar  from "./navabar";
import bg from '../../public/images/book.jpeg'
const Layout =({ children }) =>{
    return(
        <div className="border border-red-500 images opacity-150 ">
            <Navbar />
       
            {children}  
        
        </div>)
}
export default Layout;