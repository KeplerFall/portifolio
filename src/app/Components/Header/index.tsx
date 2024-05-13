'use client'
import { useState } from "react"

function Header(){
    //const [menu, setMenu] = useState(false)

    return(
        <div>
            <header className="h-16 flex items-center justify-between p-4 fixed top-0 w-full bg-black">
                <p className="text-3xl text-[#c7c7c7] font-bebas font-medium">KÉPLER PEREIRA</p>
                <div>
                    {/*<div className="flex flex-col gap-3 xl:hidden" onClick={()=> setMenu(true)}>
                        <div className="w-8 h-1 rounded-md bg-[#c7c7c7]"></div>
                        <div className="w-8 h-1 rounded-md bg-[#c7c7c7]"></div>
                    </div>
                    <div>
                        {<div className={`transition-all ease-in fixed ${!menu ? `left-full` : `left-0`} bg-black h-[100vh] w-[100vw] z-10 top-0`}>
                            Hehehe
                        </div>}
                    </div>*/}
                </div>
            </header>
            <div className="h-16">
            </div>
        </div>
    )
}

export default Header