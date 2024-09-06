import nlogo from '../../assets/images/Nlogo.png'
import style from '../../css/Components.module.css'

let dia = ['Domingo', 'Segunda','Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let data = new Date()
let dataAtual = `${dia[data.getDay()]} , ${data.getDate()} de ${mes[data.getMonth()]}`

export default function Foot () {
    return (
        <div className={style.foot}>
            <img className={style.footer_logo} alt='' src={nlogo}></img>
            <h6>Netuno * News - Seu jornal Financeiro</h6>
            <p className={style.data}>{dataAtual}</p>
        </div>
    )
}