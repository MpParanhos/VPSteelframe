import './styles.css'
import React from "react";
import {
  ExpansionList,
  ExpansionPanel,
  usePanels,
} from "@react-md/expansion-panel";
//import images from 'Casa Barueri'
import i101 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/01.jpg' 
import i102 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/02.jpg'
import i103 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/03.jpg'
import i104 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/04.jpg'
import i105 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/05.jpg'
import i106 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/06.jpg'
import i107 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/07.jpg'
import i108 from '../../Assets/Images/TrabalhosRealizados/CasaBarueri_SP/08.jpg' 
//import images from 'Casa Laguna'
import i201 from '../../Assets/Images/TrabalhosRealizados/CasaCondominioLaguna_Varzea_SP/01.jpg'
import i202 from '../../Assets/Images/TrabalhosRealizados/CasaCondominioLaguna_Varzea_SP/02.jpg'
import i203 from '../../Assets/Images/TrabalhosRealizados/CasaCondominioLaguna_Varzea_SP/03.jpg'
import i204 from '../../Assets/Images/TrabalhosRealizados/CasaCondominioLaguna_Varzea_SP/04.jpg'
//import images from 'Chalé'
import i301 from '../../Assets/Images/TrabalhosRealizados/Chale/01.jpg'
import i302 from '../../Assets/Images/TrabalhosRealizados/Chale/02.jpg'
import i303 from '../../Assets/Images/TrabalhosRealizados/Chale/03.jpg'
import i304 from '../../Assets/Images/TrabalhosRealizados/Chale/04.jpg'
import i305 from '../../Assets/Images/TrabalhosRealizados/Chale/05.jpg'
import i306 from '../../Assets/Images/TrabalhosRealizados/Chale/06.jpg'
import i307 from '../../Assets/Images/TrabalhosRealizados/Chale/07.jpg'
import i308 from '../../Assets/Images/TrabalhosRealizados/Chale/08.jpg'
import i309 from '../../Assets/Images/TrabalhosRealizados/Chale/09.jpg'
import i310 from '../../Assets/Images/TrabalhosRealizados/Chale/10.jpg'
import i311 from '../../Assets/Images/TrabalhosRealizados/Chale/11.jpg'
import i312 from '../../Assets/Images/TrabalhosRealizados/Chale/12.jpg'
//import images from 'Conjunto Habitacional'
import i401 from '../../Assets/Images/TrabalhosRealizados/ConjuntoHabitacional/01.jpg'
import i402 from '../../Assets/Images/TrabalhosRealizados/ConjuntoHabitacional/02.jpg'
import i403 from '../../Assets/Images/TrabalhosRealizados/ConjuntoHabitacional/03.jpg'
import i404 from '../../Assets/Images/TrabalhosRealizados/ConjuntoHabitacional/04.jpg'
import i405 from '../../Assets/Images/TrabalhosRealizados/ConjuntoHabitacional/05.jpg'
//import images from 'Construção Sobrado'
import i501 from '../../Assets/Images/TrabalhosRealizados/ConstrucaoSobrado/01.jpg'
import i502 from '../../Assets/Images/TrabalhosRealizados/ConstrucaoSobrado/02.jpg'
import i503 from '../../Assets/Images/TrabalhosRealizados/ConstrucaoSobrado/03.jpg'
//import images from 'Ed+ Cabreúva - SP'
import i601 from '../../Assets/Images/TrabalhosRealizados/EdCabreuva_SP/01.jpg'
import i602 from '../../Assets/Images/TrabalhosRealizados/EdCabreuva_SP/02.jpg'
import i603 from '../../Assets/Images/TrabalhosRealizados/EdCabreuva_SP/03.jpg'
import i604 from '../../Assets/Images/TrabalhosRealizados/EdCabreuva_SP/04.jpg'
//import images from 'Ed+ Valinhos - SP'
import i701 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/01.jpg'
import i702 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/02.jpg'
import i703 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/03.jpg'
import i704 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/04.jpg'
import i705 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/05.jpg'
import i706 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/06.jpg'
import i707 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/07.jpg'
import i708 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/08.jpg'
import i709 from '../../Assets/Images/TrabalhosRealizados/EdValinhos_SP/09.jpg'
//import images from 'Galpão'
import i801 from '../../Assets/Images/TrabalhosRealizados/Galpao/01.jpg'
import i802 from '../../Assets/Images/TrabalhosRealizados/Galpao/02.jpg'
import i803 from '../../Assets/Images/TrabalhosRealizados/Galpao/03.jpg'
import i804 from '../../Assets/Images/TrabalhosRealizados/Galpao/04.jpg'
import i805 from '../../Assets/Images/TrabalhosRealizados/Galpao/05.jpg'
import i806 from '../../Assets/Images/TrabalhosRealizados/Galpao/06.jpg'
import i807 from '../../Assets/Images/TrabalhosRealizados/Galpao/07.jpg'
import i808 from '../../Assets/Images/TrabalhosRealizados/Galpao/08.jpg'
import i809 from '../../Assets/Images/TrabalhosRealizados/Galpao/09.jpg'
import i810 from '../../Assets/Images/TrabalhosRealizados/Galpao/10.jpg'
import i811 from '../../Assets/Images/TrabalhosRealizados/Galpao/11.jpg'
import i812 from '../../Assets/Images/TrabalhosRealizados/Galpao/12.jpg'
import i813 from '../../Assets/Images/TrabalhosRealizados/Galpao/13.jpg'
import i814 from '../../Assets/Images/TrabalhosRealizados/Galpao/14.jpg'
import i815 from '../../Assets/Images/TrabalhosRealizados/Galpao/15.jpg'
import i816 from '../../Assets/Images/TrabalhosRealizados/Galpao/16.jpg'
import i817 from '../../Assets/Images/TrabalhosRealizados/Galpao/17.jpg'
//import images from 'Hotel Salto Plaza - SP'
import i901 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/01.jpg'
import i902 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/02.jpg'
import i903 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/03.jpg'
import i904 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/04.jpg'
import i905 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/05.jpg'
import i906 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/06.jpg'
import i907 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/07.jpg'
import i908 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/08.jpg'
import i909 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/09.jpg'
import i910 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/10.jpg'
import i911 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/11.jpg'
import i912 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/12.jpg'
import i913 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/13.jpg'
import i914 from '../../Assets/Images/TrabalhosRealizados/HotelSaltoPlaza_SP/14.jpg'
//import images from 'Painel elevador | Campinas - SP
import i1001 from '../../Assets/Images/TrabalhosRealizados/PainelElevador_Campinas_SP/01.jpeg'
import i1002 from '../../Assets/Images/TrabalhosRealizados/PainelElevador_Campinas_SP/02.jpeg'
import i1003 from '../../Assets/Images/TrabalhosRealizados/PainelElevador_Campinas_SP/03.jpeg'
import i1004 from '../../Assets/Images/TrabalhosRealizados/PainelElevador_Campinas_SP/04.jpeg'
import i1005 from '../../Assets/Images/TrabalhosRealizados/PainelElevador_Campinas_SP/05.jpeg'
//import images from 'Posto de saúde | Porto Feliz - SP
import i1101 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/01.jpg'
import i1102 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/02.jpg'
import i1103 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/03.jpg'
import i1104 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/04.jpg'
import i1105 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/05.jpg'
import i1106 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/06.jpg'
import i1107 from '../../Assets/Images/TrabalhosRealizados/PostodeSaude_PortoFeliz_SP/07.jpg'
//import images from 'Telhados'
import i1201 from '../../Assets/Images/TrabalhosRealizados/Telhados/01.jpg'
import i1202 from '../../Assets/Images/TrabalhosRealizados/Telhados/02.jpg'
import i1203 from '../../Assets/Images/TrabalhosRealizados/Telhados/03.jpg'
import i1204 from '../../Assets/Images/TrabalhosRealizados/Telhados/04.jpg'
import i1205 from '../../Assets/Images/TrabalhosRealizados/Telhados/05.jpg'
import i1206 from '../../Assets/Images/TrabalhosRealizados/Telhados/06.jpg'
import i1207 from '../../Assets/Images/TrabalhosRealizados/Telhados/07.jpg'
import i1208 from '../../Assets/Images/TrabalhosRealizados/Telhados/08.jpg'
import i1209 from '../../Assets/Images/TrabalhosRealizados/Telhados/09.jpg'
import i1210 from '../../Assets/Images/TrabalhosRealizados/Telhados/10.jpg'
import i1211 from '../../Assets/Images/TrabalhosRealizados/Telhados/11.jpg'
import i1212 from '../../Assets/Images/TrabalhosRealizados/Telhados/12.jpg'
import i1213 from '../../Assets/Images/TrabalhosRealizados/Telhados/13.jpg'
import i1214 from '../../Assets/Images/TrabalhosRealizados/Telhados/14.jpg'
import i1215 from '../../Assets/Images/TrabalhosRealizados/Telhados/15.jpg'
import i1216 from '../../Assets/Images/TrabalhosRealizados/Telhados/16.jpg'

const ExpanelImages = () => {
  const [panels, onKeyDown] = usePanels({
    count: 12,
    multiple: false,
  });

  const [pi1Props, pi2Props, pi3Props, pi4Props, pi5Props, pi6Props, pi7Props, pi8Props,
    pi9Props, pi10Props, pi11Props, pi12Props] = panels;

  return(
    <div>
      <ExpansionList onKeyDown={onKeyDown}>
        <ExpansionPanel {...pi1Props} header="Casa Barueri - SP">
          <div>
            <p className='pcontent'>Casa feita em Barueri num condomínio. O Pavimento térreo foi construído em alvenaria convencional.
              Fomos procurados pra executar ampliação da casa uma vez que a estrutura não havia sido projetada para construir o pavimento superior. O Steel frame possibilitou essa ampliação de mais de 100m2 a residência. Projeto e Execução ARQUEN em parceria com a VP Steel Frame.</p>
            <div id='trabimages'>
              <img src={i101} alt="" />
              <img src={i102} alt="" />
              <img src={i103} alt="" />
              <img src={i104} alt="" />
              <img src={i105} alt="" />
              <img src={i106} alt="" />
              <img src={i107} alt="" />
              <img src={i108} alt="" />
            </div>
          </div>          
        </ExpansionPanel>
        <ExpansionPanel {...pi2Props} header="Casa no condomínio Laguna | Várzea - SP">
          <div>
            <p>Sobrado executado no condomínio Laguna na cidade de Várzea Paulista em apenas 125 dias entregue totalmente pronto: Elétrica, Hidráulica, Revestimentos, Cobertura, Esquadrias. O sobrado tem aproximadamente 150m2. A Laje do segundo pavimento foi executada em steel deck.</p>
            <div id='trabimages'>
              <img src={i201} alt="" />
              <img src={i202} alt="" />
              <img src={i203} alt="" />
              <img src={i204} alt="" />
            </div>
          </div> 
        </ExpansionPanel>
        <ExpansionPanel {...pi3Props} header="Chalé">
          <div id='trabimages'>
            <img src={i301} alt="" />
            <img src={i302} alt="" />
            <img src={i303} alt="" />
            <img src={i304} alt="" />
            <img src={i305} alt="" />
            <img src={i306} alt="" />
            <img src={i307} alt="" />
            <img src={i308} alt="" />
            <img src={i309} alt="" />
            <img src={i310} alt="" />
            <img src={i311} alt="" />
            <img src={i312} alt="" />
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi4Props} header="Conjunto habitacional">
          <div id='trabimages'>
            <img src={i401} alt="" />
            <img src={i402} alt="" />
            <img src={i403} alt="" />
            <img src={i404} alt="" />
            <img src={i405} alt="" />
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi5Props} header="Construção de sobrado">
          <div>
            <p>Sobrado de aproximadamente 165m2 100% pronto, com chave na mão, entregue ao cliente em apenas 4 meses.</p>
            <div id='trabimages'>
              <img src={i501} alt="" />
              <img src={i502} alt="" />
              <img src={i503} alt="" />
            </div>
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi6Props} header="Ed+ Cabreúva - SP">
          <div>
            <p>550m² feitos em container, execução em 90 dias. Estrutura do telhado feita em Steel Frame.</p>
            <div id='trabimages'>
              <img src={i601} alt="" />
              <img src={i602} alt="" />
              <img src={i603} alt="" />
              <img src={i604} alt="" />
            </div>
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi7Props} header="Ed+ Valinhos - SP">
          <div>
            <p>Feita em estruturas metálicas em 15 dias.</p>
            <div id='trabimages'>
              <img src={i701} alt="" />
              <img src={i702} alt="" />
              <img src={i703} alt="" />
              <img src={i704} alt="" />
              <img src={i705} alt="" />
              <img src={i706} alt="" />
              <img src={i707} alt="" />
              <img src={i708} alt="" />
              <img src={i709} alt="" />
            </div>
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi8Props} header="Galpão">
          <div id='trabimages'>
            <img src={i801} alt="" />
            <img src={i802} alt="" />
            <img src={i803} alt="" />
            <img src={i804} alt="" />
            <img src={i805} alt="" />
            <img src={i806} alt="" />
            <img src={i807} alt="" />
            <img src={i808} alt="" />
            <img src={i809} alt="" />
            <img src={i810} alt="" />
            <img src={i811} alt="" />
            <img src={i812} alt="" />
            <img src={i813} alt="" />
            <img src={i814} alt="" />
            <img src={i815} alt="" />
            <img src={i816} alt="" />
            <img src={i817} alt="" />
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi9Props} header="Hotel Salto Plaza - SP">
          <div id='trabimages'>
            <img src={i901} alt="" />
            <img src={i902} alt="" />
            <img src={i903} alt="" />
            <img src={i904} alt="" />
            <img src={i905} alt="" />
            <img src={i906} alt="" />
            <img src={i907} alt="" />
            <img src={i908} alt="" />
            <img src={i909} alt="" />
            <img src={i910} alt="" />
            <img src={i911} alt="" />
            <img src={i912} alt="" />
            <img src={i913} alt="" />
            <img src={i914} alt="" />
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi10Props} header="Painel elevador | Campinas - SP">
          <div>
            <p>Trabalho feito em Campinas, São Paulo em 4 dias. Revestimento com painéis em estrutura metálica para elevador.</p>
            <div id='trabimages'>
              <img src={i1001} alt="" />
              <img src={i1002} alt="" />
              <img src={i1003} alt="" />
              <img src={i1004} alt="" />
              <img src={i1005} alt="" />
            </div>
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi11Props} header="Posto de saúde | Porto Feliz - SP">
          <div>
            <p>Na cidade de Porto Feliz nós executamos um posto de saúde da fundação ao acabamento. Os quase 300m2 de construção foram executados em apenas 82 dias.
              Nesse projeto nós fizemos fundação do tipo radier, elétrica (tubos flexíveis corrugados – conduítes) e hidráulica (tubulação rígida convencional).
              Cobertura em telha cerâmica, revestimento cerâmico nas paredes e pisos de área fria, esquadrias de alumínio.</p>
            <div id='trabimages'>
              <img src={i1101} alt="" />
              <img src={i1102} alt="" />
              <img src={i1103} alt="" />
              <img src={i1104} alt="" />
              <img src={i1105} alt="" />
              <img src={i1106} alt="" />
              <img src={i1107} alt="" />
            </div>
          </div>
        </ExpansionPanel>
        <ExpansionPanel {...pi12Props} header="Telhados">
          <div id='trabimages'>
            <img src={i1201} alt="" />
            <img src={i1202} alt="" />
            <img src={i1203} alt="" />
            <img src={i1204} alt="" />
            <img src={i1205} alt="" />
            <img src={i1206} alt="" />
            <img src={i1207} alt="" />
            <img src={i1208} alt="" />
            <img src={i1209} alt="" />
            <img src={i1210} alt="" />
            <img src={i1211} alt="" />
            <img src={i1212} alt="" />
            <img src={i1213} alt="" />
            <img src={i1214} alt="" />
            <img src={i1215} alt="" />
            <img src={i1216} alt="" />
          </div>
        </ExpansionPanel>
      </ExpansionList>
    </div>
  )
}

export default ExpanelImages