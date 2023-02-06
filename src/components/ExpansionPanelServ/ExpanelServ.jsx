import './styles.css'
import React from "react";
import {
  ExpansionList,
  ExpansionPanel,
  usePanels,
} from "@react-md/expansion-panel";

const ExpanelServ = () => {
  const [panels, onKeyDown] = usePanels({
    count: 7,
    multiple: true,
  });

  const [panel1Props, panel2Props, panel3Props, panel4Props, panel5Props, panel6Props, panel7Props] = panels;

  return (
    <div>
      <ExpansionList onKeyDown={onKeyDown} >
        <ExpansionPanel {...panel1Props} header="Versatilidade">
          As estruturas metálicas podem ser utilizadas em vários modos diferentes. Assim para projetistas que gostam de sair do comum e serem criativos em suas ideias são ótimos materiais para isso!
        </ExpansionPanel>
        <ExpansionPanel {...panel2Props} header="Rapidez na obra">
          Como as peças já chegam prontas da fábrica o processo dentro de obra é muito mais otimizado, assim podendo reduzir o tempo total da obra até em 1/3 do tempo normalmente levado.
        </ExpansionPanel>
        <ExpansionPanel {...panel3Props} header="Custo benefício">
          A estrutura metálica é um material em si mais caro que os convencionais, entretanto tendo uma análise de custos geral da obra se faz ser um método construtivo mais barato devido ao menor tempo demandado para efetuar a obra, e muitas das vezes saindo mais barato em comparação com o uso de madeira, ou
          projetos mais complexos.
        </ExpansionPanel>
        <ExpansionPanel {...panel4Props} header="Desperdício reduzido">
          Por ser um produto 100% reciclável o desperdício é o menor possível, além de serem peças pré-fabricadas, assim no projeto já está demandado tudo que vai ser necessário na obra, diminuindo ainda mais desperdícios.
        </ExpansionPanel>
        <ExpansionPanel {...panel5Props} header="Fácil compatibilidade com outros sistemas construtivos">
          É um sistema industrializado, dessa forma, permite um planejamento prévio, sendo possível deixar preparadas todas as furações necessárias nos montantes da estrutura para a passagem de condutores e canos.
        </ExpansionPanel>
        <ExpansionPanel {...panel6Props} header="Durabilidade">
          São estruturas que tem uma boa durabilidade em uma construção, e comparando
          com outros tipos de construção, é uma das melhores para evitar manutenção.
        </ExpansionPanel>
        <ExpansionPanel {...panel7Props} header="Sustentabilidade">
          Um tópico importante a se levantar é o favorecimento para a natureza que as construções em estruturas metálicas proporcionam, por ser um processo construtivo a seco, utilizasse pouca agua em relação a outros processos construtivos, além de reduzir a emissão de poluição pelo fato dos materiais utilizados não passarem por um processo de queima, e do aço ser um material 100% reciclável
        </ExpansionPanel>
      </ExpansionList>
    </div>
  );
};

export default ExpanelServ