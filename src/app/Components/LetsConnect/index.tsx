import Link from "next/link"

function LetsConnect(){
    return(
        <div className="p-4 mb-12 xl:max-w-[1280px] xl:m-auto" id="contact">
            <h2 className="font-bebas text-[44px] text-white mb-3">LET&apos;S CONNECT</h2>
            <p className="text-[#C7C7C7] font-manrope">Say hello at <a className="underline decoration-[#D3E97A] text-white" href="mailto: keplermpereira@gmail.com">keplermpereira@gmail.com</a></p>
            <p className="text-[#C7C7C7] font-manrope">or, you can contact me directly via my <a className="underline decoration-[#D3E97A] text-white" href="https://www.linkedin.com/in/keplerpereira/">Linkedin</a> page.</p>
        
        </div>
    )
}

export default LetsConnect