import Image from "next/image"
import RightArrow from "../../../../assets/images/right-arrow.svg"
import Linkedin from "../../../../assets/images/linkedin.svg"
import GitHub from "../../../../assets/images/github.svg"
import Myself from "../../../../assets/images/myself.jpg"


function HelloSection(){
    return(
        <section className="flex flex-col p-4 mb-4 xl:flex xl:flex-row xl:justify-between xl:items-center xl:max-w-[1280px] xl:mx-auto xl:mb-7">
            <div className="xl:max-w-[544px]">
                <h1 className="mb-3">
                    <p className="font-bebas font-normal text-5xl xl:text-8xl">HI, I AM</p>
                    <p className="font-bebas font-normal text-5xl xl:text-8xl">KÉPLER PEREIRA.</p>
                </h1>
                <p className="font-manrope text-[#c7c7c7] mb-7">A São Paulo, Brazil based full-stack developer passionate about building accessible and user friendly websites.</p>
                <div className="flex gap-5 mb-12">
                    <div className={`bg-[#D3E97A] w-40 h-12 rounded-full flex items-center justify-between px-2`}>
                        <a href="#contact" className="font-manrope font-bold text-black">CONTACT ME</a>
                        <div className="h-9 w-9 bg-black rounded-full flex items-center justify-center"><Image className="-rotate-45" src={RightArrow} alt={`right arrow`} width={15} height={15} /></div>
                    </div>
                    <a target="_blank" href="https://www.linkedin.com/in/keplerpereira" className="w-12 h-12 flex justify-center items-center bg-[#222] rounded-full">
                        <Image src={Linkedin} alt="Linkedin image" />
                    </a>
                    <a target="_blank" href="https://github.com/KeplerFall" className="w-12 h-12 flex justify-center items-center bg-[#222] rounded-full">
                        <Image src={GitHub} alt="GitHub image" />
                    </a>
                </div>
            </div>
            <Image className={`rounded-xl xl:max-h-[700px] w-auto`} src={Myself} alt={`A picture of Képler Miranda`} />
        </section>
    )
}

export default HelloSection