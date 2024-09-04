import style from '../../css/Components.module.css'


export default function Cardview ({conteudo, ulr_image, alt_image}) {
    
    return (
        <div className={style.card_view}>
            <img src={ulr_image} alt={alt_image}></img>
            <div className={style.container_p_card}>
                <p>{conteudo}</p> 
            </div>
        </div>
        
    )   
}