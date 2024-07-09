import TierList from '@/app/Components/TierList'
import pagesBg from '../../../../assets/images/pages-bg.png'
import Shaco from '../../../../assets/images/champImages/ShacoSquare.webp'
import Khazix from '../../../../assets/images/champImages/kha.webp'
import Ivern from '../../../../assets/images/champImages/IvernSquare.webp'
import Viego from '../../../../assets/images/champImages/Viego_OriginalSquare.webp'
import BlueSide from '../../../../assets/images/blue side.png'
import RedSide from '../../../../assets/images/red side.png'
import Image from 'next/image'
import rankEmerald from '../../../../assets/images/rank-emerald.png'

export default function jungle(){
    return(
        <div className="min-h-[100vh] p-10 bg-cover bg-no-repeat bg-fixed bg-center" style={{backgroundImage: `url(${pagesBg.src})`}} >
            <div className='max-w-[1350px] m-auto bg-[#060e1f] p-4'>
                <TierList s={[Shaco]} a={[Khazix, Ivern]} b={null} c={[Viego]} title='Jungle' />
                <div>
                    <p className='font-bebas text-4xl my-5'>Elo mais alto atingido como Jungle: </p>
                    <div className='flex justify-center items-center flex-col w-fit'>
                        <Image src={rankEmerald} width={250} height={250} alt="emerald elo" />
                        <p className='font-bebas text-3xl my-5 text-[#114d36]'>Esmeralda I</p>
                    </div>
                    <p className='font-bebas text-4xl my-5'>Principais estratégias:</p>
                    <p>Primeiramente, jungle que precisa de leash, ou é mal caráter, ou não sabe o que está fazendo! Como eu não quero que o jungler inimigo saiba onde eu vou começar, seu leash não é necessário pra mim.</p>
                    <p>99% dos jogos eu começo top pra jogar com o bot, então, meu amigo toplaner, você não vai receber tanta atenção como a botlane, tenha paicência e farma safe.</p>
                    <p className='font-bebas text-3xl my-5'>ATENÇÂO:</p>
                    <p>Mesmo que você não vá dar leash, é muito importante proteger as entradas da jungle pra evitar um invade do time inimigo.</p>
                    <p className='font-bebas text-3xl my-5 text-blue-600'>Lado Azul:</p>
                    <Image src={BlueSide} width={800} height={600} alt="blue side" />
                    <p className='font-bebas text-3xl my-5 text-red-600'>Lado Vermelho:</p>
                    <Image src={RedSide} width={800} height={600} alt="blue side" />

                </div>
            </div>
        </div>
    )
}