import style from '../../css/Components.module.css'
import Cardview from '../atoms/Cardview'
import img_tech from "../../assets/images/techpeople.jpg"
import economia from '../../assets/images/economia_tech.jpeg'
import investimentos from '../../assets/images/investimentos.jpg'
import dolar from '../../assets/images/dolar.png'

export default function Cards () {
    return (
        <div className={style.cards}>
            {/* Elementos vizuais do card - elementos */}
            <Cardview conteudo='Fin tech' ulr_image={img_tech}/>
            <Cardview conteudo='Economia' ulr_image={economia}/>
            <Cardview conteudo='Investimentos' ulr_image={investimentos}/>
            <Cardview conteudo='Dolar' ulr_image={dolar}/>
        </div>
    )
}