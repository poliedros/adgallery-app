import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";

export default function Erase() {
    return (
        <>
            <Container className="font-[Lekton] p-10">
                <Row>
                    <Col className="flex items-center p-6" sm={4}>
                        <h1 className="">
                            Anderson
                            <br />
                            <span className="font-[DotGothic16] text-[#eab308]">
                                M
                            </span>
                            endes
                            <br />
                            Ribeiro
                        </h1>
                    </Col>
                    <Col className="p-6" sm={8}>
                        <h5 className="flex font-[DotGothic16] text-[#84cc16]">
                            {getIconsByName("bi", "BiHome")}&nbsp;Residência
                        </h5>
                        <h4>
                            Moreno 3028 - Balvanera | Ciudad Autónoma de Buenos
                            Aires - Argentina
                            <br />
                            Codigo Postal C1209ABF
                        </h4>
                        <h4 className="flex">
                            {getIconsByName("md", "MdMail")}
                            &nbsp;sr.andersonmendesribeiro@gmail.com
                            (preferêncial)
                        </h4>
                        <h4 className="flex">
                            {getIconsByName("md", "MdPhoneAndroid")}&nbsp;+54 11
                            5508-2980
                        </h4>
                    </Col>
                    <h6 className="border-l-4 border-[#84cc16] mt-3 mx-3 mb-12">
                        Estudei na UFV, fiz um intercâmbio, e ao regressar
                        participei de um trabalho educatico para prefeitura,
                        posteriormente me mudei para Argentina, onde estou
                        trabalhando para Beesion, uma companhia multinacional de
                        origem argentina, desde de 2019. Mais de 3 anos de
                        experiência em desenvolvimento de software.
                    </h6>
                    <Col
                        className="flex items-center justify-center my-6"
                        sm={1}
                    >
                        <h3>{getIconsByName("ri", "RiBriefcase4Fill")}</h3>
                    </Col>
                    <Col sm={11} className="border-l-2 my-6 my-6">
                        <h5>
                            <span className="font-[DotGothic16] text-[#84cc16]">
                                Trainee - Programador Junior - Full Stack
                            </span>
                            <br />
                            Janeiro de 2019 - Atualmente
                            <br />
                            <span className="bg-[#14532d]">
                                &nbsp;Beesion&nbsp;
                            </span>{" "}
                            - Low Code Technology Solutions
                            <br />
                            Palermo - Ciudad Autónoma de Buenos Aires -
                            Argentina
                            <br />
                            <span className="font-[DotGothic16] text-[#84cc16]">
                                Professor de Programação
                            </span>
                            <br />
                            Abril de 2015 - Junho de 2015
                            <br />
                            <span className="bg-[#14532d]">
                                &nbsp;Colégio Viçosa&nbsp;
                            </span>
                            <br />
                            Viçosa - Minas Gerais - Brasil
                            <br />
                        </h5>
                    </Col>
                    <Col
                        className="flex items-center justify-center my-6"
                        sm={1}
                    >
                        <h3>{getIconsByName("fa", "FaUniversity")}</h3>
                    </Col>
                    <Col sm={11} className="border-l-2 my-6">
                        <h6>
                            <span className="font-[DotGothic16] text-[#84cc16]">
                                Universidade
                            </span>
                            <br />
                            Março de 2012 - Novembro de 2016
                            <br />
                            <span className="bg-[#14532d]">
                                &nbsp;Universidade Federal de Viçosa&nbsp;
                            </span>{" "}
                            - Ciência da Computação
                            <br />
                            Viçosa - Minas Gerias - Brasil
                            <br />
                            <span className="font-[DotGothic16] text-[#84cc16]">
                                Intercambio
                            </span>
                            <br />
                            Fevereiro de 2014 - Dezembro de 2014
                            <br />
                            <span className="bg-[#14532d]">
                                &nbsp;University at Albany&nbsp;
                            </span>{" "}
                            - Ciência da Computação
                            <br />
                            Albany - New York - Estados Unidos
                            <br />
                        </h6>
                    </Col>
                    <h5 className="leading-relaxed">
                        <span className="font-[DotGothic16] text-[#84cc16] flex">
                            {getIconsByName("fa", "FaLanguage")}&nbsp;Línguas
                        </span>
                        Português, Inglês e Espanhol
                        <br />
                        <br />
                        <span className="font-[DotGothic16] text-[#84cc16] flex">
                            Back-End
                        </span>
                        <span className="bg-[#14532d]">
                            &nbsp;C++, JAVA, JS(TS), Python e PHP&nbsp;
                        </span>
                        <br />
                        <ProgressBar striped variant="success" now={70} />
                        <br />
                        <span className="font-[DotGothic16] text-[#84cc16] flex">
                            Front-End Framework
                        </span>
                        <span className="bg-[#14532d]">
                            &nbsp;Angular, React.js e Next.js&nbsp;
                        </span>{" "}
                        (HTML, CSS e similares)
                        <br />
                        <ProgressBar striped variant="success" now={90} />
                        <br />
                        <span className="font-[DotGothic16] text-[#84cc16] flex">
                            Bancos de Dados
                        </span>
                        <span className="bg-[#14532d]">
                            &nbsp;MySQL, MongoDB e API&nbsp;
                        </span>
                        <br />
                        <ProgressBar striped variant="success" now={65} />
                    </h5>
                    <h6>
                        <span className="font-[DotGothic16] text-[#84cc16] flex">
                            {getIconsByName("ri", "RiCreativeCommonsByFill")}
                            &nbsp;Habilidades
                        </span>{" "}
                        Latex, Matlab, Three.js, Manipulção de Imagens,
                        Engenharia de Software e Design
                        <br />
                        <span className="font-[DotGothic16] text-[#84cc16] flex">
                            {getIconsByName("gi", "GiPerson")}&nbsp;Pessoal
                        </span>
                        Criatividade, Solução de Problemas e Depuração,
                        Comunicação, Resolução de Conflitos, Pensamento Crítico
                    </h6>
                </Row>
            </Container>
        </>
    );
}
