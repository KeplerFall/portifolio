import { StaticImageData } from "next/image"
import Image from 'next/image'

interface ARG{
    s: StaticImageData[] | null,
    a: StaticImageData[] | null,
    b: StaticImageData[] | null,
    c: StaticImageData[] | null,
    title: string
}

export default function TierList(props: ARG){
    return(
        <div className="flex flex-col gap-1 bg-black w-fit">
            <p className="font-bebas text-4xl">Tier List: {props.title}</p>
            <div className="flex flex-row gap-1">
                <div className="h-16 w-16 bg-red-600 text-white flex items-center justify-center font-bold font-bebas text-[60px]">S</div>
                {props.s != null && props.s.map((item, index)=>{
                    return(
                        <Image key={index} width={64} height={64} src={item} alt="" />
                    )
                })}
            </div>
            <div className="flex flex-row gap-1">
                <div className="h-16 w-16 bg-orange-600 text-white flex items-center justify-center font-bold font-bebas text-[60px]">A</div>
                {props.a != null && props.a.map((item, index)=>{
                    return(
                        <Image key={index} width={64} height={64} src={item} alt="" />
                    )
                })}
            </div>
            <div className="flex flex-row gap-1">
                <div className="h-16 w-16 bg-yellow-600 text-white flex items-center justify-center font-bold font-bebas text-[60px]">B</div>
                {props.b != null && props.b.map((item, index)=>{
                    return(
                        <Image key={index} width={64} height={64} src={item} alt="" />
                    )
                })}
            </div>
            <div className="flex flex-row gap-1">
                <div className="h-16 w-16 bg-green-600 text-white flex items-center justify-center font-bold font-bebas text-[60px]">C</div>
                {props.c != null && props.c.map((item, index)=>{
                    return(
                        <Image key={index} width={64} height={64} src={item} alt="" />
                    )
                })}
            </div>
        </div>
    )
}