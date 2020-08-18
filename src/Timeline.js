import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.css';
import Equalizer from '@material-ui/icons/Equalizer';
import TurnedIn from '@material-ui/icons/TurnedIn';
import SmsFailed from '@material-ui/icons/SmsFailed';

function Timeline(){
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
                contentStyle={{ background: '#FFFFFF', color: '#222222' }}
                iconStyle={{ background: '#FEF0BD', color: '#F9C80E' }}
                icon={<Equalizer/>}
            >
                <div className="title">
                    <h3>Predição</h3>
                </div>
                <div className="subtitle">
                    <p>Evento realizado ás 10:20h</p>
                </div>
                <div className="botao">
                    <p>Risco Atual</p>
                    <span>CRITICO</span>
                </div>
                <div className="text-block">
                    <span>ID:102</span><br />
                    <span>Descrição: Predição</span><br /><br />
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                </div>
                <a href="#"><span>Ver Detalhes</span></a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#FFFFFF', color: '#222222' }}
                iconStyle={{ background: '#F9CDCE', color: '#EF3737' }}
                icon={<TurnedIn />}
                className="second"
            >
                <div className="title-second">
                    <h3>Ticket</h3>
                </div>
                <div className="subtitle">
                    <p>Evento realizado ás 3:30h</p>
                </div>
                <div className="botoes">
                    <div className="botao-second">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                    <div className="botao-second">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                    <div className="botao-second">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                </div>
                <div className="text-block">
                    <span>ID:3218</span><br />
                    <span>Descrição: Boleto em atraso!</span><br /><br />
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                    <p>31/07/2020 ás 02:51 - Iniciada por Coordenador</p>
                    <p>31/07/2020 ás 02:51 - Ação incluida por Coordenador</p>
                    <p>31/07/2020 ás 02:51 - Direcionado para Bolsas</p>
                    <p>31/07/2020 ás 02:51 - Finalizado por Coordenador</p>
                </div>
                <a href="#"><span>Ver Detalhes</span></a>
            </VerticalTimelineElement>  
            <VerticalTimelineElement
                contentStyle={{ background: '#FFFFFF', color: '#222222' }}
                iconStyle={{ background: '#F9CDCE', color: '#EF3737' }}
                icon={<TurnedIn />}
                className="third"
            >
                <div className="title-second">
                    <h3>Ticket</h3>
                </div>
                <div className="subtitle">
                    <p>Evento realizado ás 3:30h</p>
                </div>
                <div className="botoes">
                    <div className="botao-second">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                    <div className="botao-second">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                    <div className="botao-second">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                </div>
                <div className="text-block">
                    <span>ID:3218</span><br />
                    <span>Descrição: Boleto em atraso!</span><br /><br />
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                </div>
                <a href="#"><span>Ver Detalhes</span></a>
            </VerticalTimelineElement> 
            <VerticalTimelineElement
                contentStyle={{ background: '#FFFFFF', color: '#222222' }}
                iconStyle={{ background: '#B4EED8', color: '#11C07F' }}
                icon={<SmsFailed />}
                className="fourth"
            >
                <div className="title-fourth">
                    <h3>Ticket</h3>
                </div>
                <div className="subtitle">
                    <p>Evento realizado ás 3:30h</p>
                </div>
                <div className="botoes">
                    <div className="botao-fourth">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                    <div className="botao-fourth">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                    <div className="botao-fourth">
                        <p>Aguardando Repostas</p>
                        <span>24/07/2018 ás 18:05</span>
                    </div>
                </div>
                <div className="text-block">
                    <span>ID:3218</span><br />
                    <span>Descrição: Boleto em atraso!</span><br /><br />
                    <p>31/07/2020 ás 02:51 - Data da Criação</p>
                </div>
                <a href="#"><span>Ver Detalhes</span></a>
            </VerticalTimelineElement>       
        </VerticalTimeline>
    );
}

export default Timeline;