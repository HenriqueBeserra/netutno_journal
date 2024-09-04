import style from "../../css/Components.module.css"
import Hi from "../atoms/Hi"
import Explore from "../atoms/Explore"

export default function Header ({nome_usuario}) {
    return (
        <div className={style.header_container}>
            <Hi nome={nome_usuario} />   
            <Explore />
        </div>
    )
};