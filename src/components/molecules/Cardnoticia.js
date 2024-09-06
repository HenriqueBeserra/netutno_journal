import Noticia from "../atoms/Noticia"
import style from '../../css/Components.module.css'

export default function Cardnoticia ({titulo, sub_titulo, conteudo, autor}) {
    return (
        <div className={style.card_noticia}>
            <Noticia titulo={titulo} conteudo={conteudo} autor={autor}/>
        </div>
    )
}