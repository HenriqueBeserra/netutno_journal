import style from '../../css/Components.module.css'

export default function Noticia ({titulo, sub_titulo, conteudo, autor}) {
    return (
        <div className={style.noticia}>
            <h3>
                {titulo}
            </h3>
            <h4>
                {sub_titulo}
            </h4>
            <p>
                {conteudo}
            </p>
            <h5>
                {autor}
            </h5>
        </div>
    );
}