import Cardnoticia from "./Cardnoticia"
import style from '../../css/Components.module.css'

export default function Main () {
    return (
        <div className={style.main}>
            <Cardnoticia 
                titulo={'Crise na bolsa Brasileira'} 
                
                conteudo={'**Crise na Bolsa Brasileira: Quedas Acentuadas e Incertezas no Mercado**A Bolsa de Valores Brasileira enfrenta uma crise significativa, com quedas acentuadas no índice B3 e um ambiente de grande instabilidade. Fatores como instabilidades políticas e preocupações econômicas globais estão gerando um clima de incerteza entre investidores.'} 
                autor={'Henrique Beserra'}
            />
            <Cardnoticia 
                titulo={'Melhor Hora para Investir: Oportunidades em Meio à Incerteza'} 
                conteudo={'Com a volatilidade atual do mercado, muitos se perguntam qual é o momento certo para investir. Especialistas recomendam analisar cuidadosamente as tendências e avaliar as oportunidades em setores resilientes para maximizar os retornos.'} 
                autor={'Henrique Beserra'}
            />
            <Cardnoticia 
                titulo={'Impacto da Tecnologia nos Investimentos: Transformação e Oportunidades'} 
                conteudo={'A tecnologia tem revolucionado o mundo dos investimentos, oferecendo novas ferramentas e plataformas que facilitam o acesso e a análise de dados. Com a ascensão dos aplicativos de trading, algoritmos de investimento e inteligência artificial, investidores agora podem tomar decisões mais informadas e rápidas. Além disso, a automação e o big data estão permitindo estratégias mais personalizadas e eficientes, mudando o cenário financeiro e criando novas oportunidades e desafios para os investidores.'} 
                autor={'Henrique Beserra'}
            />
            <Cardnoticia
                titulo={'Fintechs Lideram Inovação com Novas Soluções de Pagamento e Investimento'} 
                conteudo={'Nesta semana, o setor de fintechs tem atraído a atenção com o lançamento de novas soluções inovadoras que prometem transformar o meio financeiro. A startup FinTechX revelou um novo sistema de pagamentos que utiliza tecnologia blockchain para oferecer transações mais rápidas e seguras. Simultaneamente, a InvestSmart, outra fintech em ascensão, lançou uma plataforma de investimento baseada em inteligência artificial que personaliza estratégias de investimento para atender às necessidades individuais dos usuários.'} 
                autor={'Henrique Beserra'}
            />
        </div>
    )
}