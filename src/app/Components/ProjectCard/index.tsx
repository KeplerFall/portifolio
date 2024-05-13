import { StaticImageData } from "next/image"
import Image from "next/image"
import DemoArrow from "../../../../assets/images/demoarrow.svg"

interface Props{
    itemImage: StaticImageData,
    itemTitle: String,
    itemDescription: String,
    projectDate: String,
    projectRole: String,
    projectLink: string
}

function ProjectCart({itemImage, itemTitle, itemDescription, projectRole, projectDate, projectLink}: Props){
    return(
        <div className="my-6 xl:flex xl:justify-center xl:items-center gap-4">
            <div className="max-h-[343px] overflow-hidden rounded-lg xl:w-1/2">
                <div><Image src={itemImage} alt="" width={343}/></div>
            </div>
            <div className="xl:w-1/2">
                <h3 className="font-manrope text-2xl mb-2">{itemTitle}</h3>
                <p className="font-manrope text-[#c7c7c7] mb-4 xl:min-h-36">{itemDescription}</p>

                <div>
                    <h4>PROJECT INFO</h4>
                    <div className="h-[1px] my-3 bg-[#484848] w-full"></div>
                    <div className="flex justify-between"><p className="font-manrope">Year</p><p className="text-[#c7c7c7] font-manrope">{projectDate}</p></div>
                    <div className="h-[1px] my-3 bg-[#484848] w-full"></div>
                    <div className="flex justify-between"><p className="font-manrope">Role</p><p className="text-[#c7c7c7] font-manrope">{projectRole}</p></div>
                    <div className="h-[1px] my-3 bg-[#484848] w-full"></div>
                </div>
                <a href={projectLink} target="_blank" className="w-fit font-bold flex font-manrope text-[#d3e97a] border-b-2 border-b-[#d3e97a]">LINK <Image src={DemoArrow} width={22} alt="demo arrow" /></a>
            </div>
        </div>
    )
}

export default ProjectCart
 