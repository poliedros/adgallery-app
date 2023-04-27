import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";

export default function Erase() {
  return (
    <>
      <Container className="font-[Lekton] p-10">
        <Row>
          {/* <Col sm={12}>
                    <h5>
                            Anderson Ribeiro<br/>
                            Moreno 3028 - 8C | +54 9 11 5508-2980 | sr.andersonmendesribeiro@gmail.com<br/>
                            <br/>
                            Januery 16, 2023<br/>
                            <br/>
                            Hello Roberto Riera,<br/>

                            I&#39;m very motivated, and would be grateful if accepted to work at VALATAM.<br/>
                            <br/>
                            I studied at UFV, did an exchange program at this time. After I returned and
                            participated in an educational work for the city hall. Later I moved to Argentina,
                            where I am working for Beesion, a multinational company of Argentinian origin, since
                            2019. More than 4 years of experience in software development.<br/>
                            <br/>
                            In this 4 years of expirience in programming in my company<br/>
                            <br/>
                            {/* First Year: /}
                            - Creating and testing SQL scripts, using Oracle SQL Developer<br/>
                            - Debbuging the webpage errors, using the browser tools, JS<br/>
                            - Debugging JAVA code, and building structures to software like methods, classes and interfaces, in Eclipse as JRE<br/>
                            <br/>
                            {/* Second Year: /}
                            - Using a internal platform (BlazedPath) to create layout and design in the app, using CSS, HTML and JS<br/>
                            - Concepts of MS (Microservices), API (Swagger) and MongoDB (no-relational DB)<br/>
                            - Using concepts similar to React and/or Angular, like Hooks and Decorators<br/>
                            - Using AmChart to create graphs to the app<br/>
                            <br/>
                            {/* Third Year: /}
                            - Discuss projects to a foreign cliente, create BPMN graphs (CAMUNDA) and documentation<br/>
                            - Testing migration in Postman<br/>
                            <br/>
                            {/* Fourth Year: /}
                            - Using SuperSet to create searchs in SQL scripts<br/>
                            - Migrating data to relational to a no-relational DataBase PHP to MongoDB<br/>
                            - Developing program to clientes using the concepts of MS and Kafka as a messanger<br/>
                            <br/>
                            So what drives me to look for a new job is the opportunity to change companies, because
                            I have been with this company for a long time, and my situation is regular for now, but the company has some finacial problems.
                            The advantage to the remote work is maintain my lifestyle because I&#39;m currently working from home,
                            and also meet new people around the world. Indeed, will likely learn new technologies and discuss big projects.<br/>
                            <br/>
                            About the two questions in the email:<br/>
                            a) $1000-$1300 it is value for a Full-time<br/>
                            b) no travels for now and the next 3 months<br/>
                            <br/>
                            Sincerily, Anderson.
                        </h5>
                    </Col> */}
          <Col className="flex items-center p-6" sm={4}>
            <h1 className="">
              Anderson
              <br />
              <span className="font-[DotGothic16] text-[#eab308]">M</span>
              endes
              <br />
              Ribeiro
            </h1>
          </Col>
          <Col className="p-6" sm={8}>
            <h5 className="flex font-[DotGothic16] text-[#84cc16]">
              {getIconsByName("bi", "BiHome")}&nbsp;
              {/* Residência Address */}Residencia
            </h5>
            <h4>
              Moreno 3028 - Balvanera | Ciudad Autónoma de Buenos Aires -
              Argentina
              <br />
              {/* Zip Code */}Código Postal C1209ABF
            </h4>
            <h4 className="flex">
              {getIconsByName("md", "MdMail")}
              &nbsp;sr.andersonmendesribeiro@gmail.com
              {/* (preferêncial) */}
            </h4>
            <h4 className="flex">
              {getIconsByName("md", "MdPhoneAndroid")}&nbsp;+54 11 5508-2980
            </h4>
          </Col>
          <h6 className="border-l-4 border-[#84cc16] mt-3 mx-3 mb-12">
            {/* Estudei na UFV, fiz um intercâmbio, e ao regressar
                        participei de um trabalho educatico para prefeitura,
                        posteriormente me mudei para Argentina, onde estou
                        trabalhando para Beesion, uma companhia multinacional de
                        origem argentina, desde de 2019. Mais de 3 anos de
                        experiência em desenvolvimento de software. */}
            {/* I studied at UFV, did an exchange program at this time. After I
            returned and participated in an educational work for the city hall.
            Later I moved to Argentina, where I am working for Beesion, a
            multinational company of Argentinian origin, since 2019. More than 4
            years of experience in software development. */}
            Estudié en la UFV, hice un intercambio y cuando regresé participé en
            un trabajo educativo para gobierno de Viçosa, luego me mudé a
            Argentina, donde estoy trabajando para Beesion, una empresa
            multinacional de origen argentina, desde 2019. Casi 4 años de
            experiencia en desarrollo de software.
          </h6>
          <Col className="flex items-center justify-center my-6" sm={1}>
            <h3>{getIconsByName("ri", "RiBriefcase4Fill")}</h3>
          </Col>
          <Col sm={11} className="border-l-2 my-6 my-6">
            <h5>
              <span className="font-[DotGothic16] text-[#84cc16]">
                {/* Md/Sr Programmer */} Programador Middle/Senior - Full Stack
              </span>
              <br />
              {/* Janeiro de 2019 - Atualmente JAN
              2019 - Currently */}{" "}
              Enero 2019 - Actualmente
              <br />
              <span className="bg-[#14532d]">&nbsp;Beesion&nbsp;</span> - Low
              Code Technology Solutions
              <br />
              Palermo - Ciudad Autónoma de Buenos Aires - Argentina
              <br />
              <span className="font-[DotGothic16] text-[#84cc16]">
                {/* Professor de Programação Teaching Code */}
                Profesor de Programación
              </span>
              <br />
              {/* Abril de 2015 - Junho de 2015 APR 2015 - JUN 2015  */}
              Abril 2015 - Junio 2015
              <br />
              <span className="bg-[#14532d]">&nbsp;Colégio Viçosa&nbsp;</span>
              <br />
              Viçosa - Minas Gerais - Brasil
              <br />
            </h5>
          </Col>
          <Col className="flex items-center justify-center my-6" sm={1}>
            <h3>{getIconsByName("fa", "FaUniversity")}</h3>
          </Col>
          <Col sm={11} className="border-l-2 my-6">
            <h6>
              <span className="font-[DotGothic16] text-[#84cc16]">
                {/* Universidade University */}Universidad
              </span>
              <br />
              {/* Março de 2012 - Novembro de 2016 MAR 2016 - NOV 2016 */}
              Marzo 2012 - Noviembre 2016
              <br />
              <span className="bg-[#14532d]">
                &nbsp;Universidade Federal de Viçosa&nbsp;
              </span>{" "}
              -{" "}
              {/* Ciência da Computação Computer
              Science */}
              Ciencia de la Computación
              <br />
              Viçosa - Minas Gerias - Brasil
              <br />
              <span className="font-[DotGothic16] text-[#84cc16]">
                {/* Exchangeship */}Intercambio
              </span>
              <br />
              {/* Fevereiro de 2014 - Dezembro de 2014 FEB 2014 - DIC 2014 */}
              Febrero 2014 - Diciembre 2014
              <br />
              <span className="bg-[#14532d]">
                &nbsp;University at Albany&nbsp;
              </span>{" "}
              -{" "}
              {/* Ciência da Computação Computer
              Science */}
              Ciencia de la Computación
              <br />
              Albany - New York - {/* Estados Unidos USA */}EEUU
              <br />
            </h6>
          </Col>
          <h5 className="leading-relaxed">
            <span className="font-[DotGothic16] text-[#84cc16] flex">
              {getIconsByName("fa", "FaLanguage")}&nbsp;
              {/* Línguas Languages */}
              Idiomas
            </span>
            {/* Português, Inglês e Espanhol */}
            {/* Portugues, English and Spanish */}
            Portugués, Inglés y Español
            <br />
            <br />
            <span className="font-[DotGothic16] text-[#84cc16] flex">
              Back-End
            </span>
            <span className="bg-[#14532d]">
              &nbsp;C++, JAVA, JS(TS), Python {/* e and */}y PHP&nbsp;
            </span>
            <br />
            <ProgressBar striped variant="success" now={70} />
            <br />
            <span className="font-[DotGothic16] text-[#84cc16] flex">
              Front-End Framework
            </span>
            <span className="bg-[#14532d]">
              &nbsp;Angular, React.js {/* e and */}y Next.js&nbsp;
            </span>{" "}
            (HTML, CSS {/* e and suchlike */}y similares)
            <br />
            <ProgressBar striped variant="success" now={90} />
            <br />
            <span className="font-[DotGothic16] text-[#84cc16] flex">
              {/* Bancos de Dados Data Base */} Base de Datos
            </span>
            <span className="bg-[#14532d]">
              &nbsp;MySQL, MongoDB {/* e and */}y API&nbsp;
            </span>
            <br />
            <ProgressBar striped variant="success" now={65} />
          </h5>
          <h6>
            <span className="font-[DotGothic16] text-[#84cc16] flex">
              {getIconsByName("ri", "RiCreativeCommonsByFill")}
              &nbsp;{/* Skills */}Habilidades
            </span>{" "}
            Latex, Matlab, Three.js,{" "}
            {/* Manipulção de Imagens,
                        Engenharia de Software e Design */}
            Manipulación de Imágines, Ingenería de Software y Design
            {/* Picture manage, Software Engineering & Design */}
            <br />
            <span className="font-[DotGothic16] text-[#84cc16] flex">
              {getIconsByName("gi", "GiPerson")}&nbsp;{/* Pessoal */}Personal
            </span>
            {/* Criatividade, Solução de Problemas e Depuração,
                        Comunicação, Resolução de Conflitos, Pensamento Crítico */}
            Creatividad, Solución de Problemas y Depuración, Comunicación,
            Resolución de Conflictos, Pensamiento Crítico
            {/* Creativity, Troubleshooting and Debugging, Communication, Conflict
            Resolution, Critical Thinking */}
          </h6>
        </Row>
      </Container>
    </>
  );
}
