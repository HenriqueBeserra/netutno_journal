import style from "../../css/Components.module.css"
import Hi from "../atoms/Hi"
import Explore from "../atoms/Explore"
import Logo from '../atoms/Logo'
let nome_user = window.prompt('Oii, Digite seu nome, por favor!')

export default function Header () {
    return (
        <div className={style.header_container}>
            <Logo />
            <Hi  nome={nome_user}/>   
            <Explore />
        </div>
    )
};