import style from '../../css/Components.module.css';

import image from '../../assets/images/Nlogo.png';

export default function Logo () {
    return(
        <div>
            <img src={image} className={style.n_logo} alt='NEtuno logo - um n maiúscul elevado ao quadrado'></img>
        </div>
    )
}