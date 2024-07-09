import Jungle from '../../../assets/images/Position_Gold-Jungle.png'
import Middle from '../../../assets/images/Position_Gold-Mid.png'
import Top from '../../../assets/images/Position_Gold-Top.png'
import Carry from '../../../assets/images/Position_Gold-Bot.png'
import Support from '../../../assets/images/Position_Gold-Support.png'
import LeagueMap from '../../../assets/images/lol_map.png'
import Image from 'next/image'

export default function lol(){
    return(
        <div className='flex justify-center items-center h-[100vh] relative'>
            <Image src={LeagueMap} width={1280} height={720} alt="league map" className='w-[100vw] h-[100vh]' style={{maskImage: "radial-gradient(circle, rgba(0,0,0,1) 44%, rgba(0,0,0,0) 57%);"}}/>
            <a href="/lol/jungle" className='absolute z-20 top-[38%] left-[39%]'><Image src={Jungle} width={45} height={45} alt="jungle image" /></a>
            <a href="/lol/middle" className='absolute z-20 top-[45%] left-[45%]'><Image src={Middle} width={45} height={45} alt="middle image" /></a>
            <a href="/lol/middle" className='absolute z-20 top-[31%] left-[34%]'><Image src={Top} width={45} height={45} alt="top image" /></a>
            <a href="/lol/middle" className='absolute z-20 top-[60%] left-[59%]'><Image src={Carry} width={45} height={45} alt="carry image" /></a>
            <a href="/lol/middle" className='absolute z-20 top-[58%] left-[62%]'><Image src={Support} width={45} height={45} alt="support image" /></a>
        </div>
    )
}   