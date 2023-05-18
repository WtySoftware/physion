import Physion from './img/physion.png'
import Aspas from './img/logoAspa.png'
import Onda from './img/onda.png'
import Emisor from './img/emisor.png'
import Receptor from './img/receptor.png'

const Logo =()=>{
    return(
        <div className='boxLogo '>
           
            <div className='ondas'>
                <img className='emisor' src={Emisor} alt="" />
                <img className='onda I' src={Onda} alt="" />
                <img className='onda II' src={Onda} alt="" />
                <img className='onda III' src={Onda} alt="" />
                <img className='onda IV' src={Onda} alt="" />
                <img className='onda V' src={Onda} alt="" />
                <img className='onda VI' src={Onda} alt="" />
                <img className='receptor' src={Receptor} alt="" />
            </div>
            
            <img className='physion' src={Physion} alt="" />
            <img className='aspas' src={Aspas} alt="" />
        </div>
    )
}

export default Logo