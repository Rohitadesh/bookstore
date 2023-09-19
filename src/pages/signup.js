const SignUp = () =>{

    return(
        <main className="h-[86%] w-full  flex 
        flex-wrap flex-col justify-center items-center">
        
            <div className="border border-green-500 lg:h-[90%] lg:w-[35%] grid grid-row-5
            rounded-xl opacity-80 bg-white">
                 <div className="lg:h-full lg:w-full  flex flex-col flex-wrap justify-center items-center">
                    <h1 className="lg:text-black lg:text-2xl">SignUp</h1>
                 </div>
                 <div className="lg:h-full lg:w-full flex flex-col flex-wrap justify-center items-center">
                    <input type="text" placeholder="email" className="lg:h-[50%] lg:w-[70%]  border border-black rounded-xl"/>
                 </div>
                 <div className="lg:h-full lg:w-full flex flex-col flex-wrap justify-center items-center">
                    <input type="text" placeholder="password" className="lg:h-[50%] lg:w-[70%]  border border-black rounded-xl"/>
        
                 </div>
                 <div className="lg:h-full lg:w-full flex flex-col flex-wrap justify-center items-center">
                    <input type="text" placeholder="Confirm password" className="lg:h-[50%] lg:w-[70%]  border border-black rounded-xl"/>
                 </div>
                 <div className="lg:h-full lg:w-full flex flex-col flex-wrap justify-center items-center">
                    <button className="lg:h-[50%] lg:w-[40%]  border border-black rounded-2xl text-xl text-black">SignUp</button>
                 </div>

            </div>
        </main>
    )
}

export default SignUp;