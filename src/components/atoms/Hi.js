import style from '../../css/Components.module.css'

export default function Hi ({nome}){
    return(
        <h5 className={style.hi_header}>
            Hi, {nome}!
        </h5>
    );
}