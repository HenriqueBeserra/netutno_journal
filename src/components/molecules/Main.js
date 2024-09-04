import Cardnoticia from "./Cardnoticia"

export default function Main () {
    return (
        <div>
            <Cardnoticia 
                titulo={'Crise na bolsa Brasileira'} 
                sub_titulo={'Entenda o contexto da crise'} 
                conteudo={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} 
                autor={'Henrique Beserra'}
            />
            <Cardnoticia 
                titulo={'Melhor hora de investir?'} 
                sub_titulo={'Entenda o contexto da bolsa brasileira'} 
                conteudo={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaa'} 
                autor={'Henrique Beserra'}
            />
            <Cardnoticia 
                titulo={'Como a tecnologia tem afetado os investimentos?'} 
                sub_titulo={'A tecnologia e seus benefícios financeiros'} 
                conteudo={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaa'} 
                autor={'Henrique Beserra'}
            />
        </div>
    )
}