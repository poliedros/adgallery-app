import Container from 'react-bootstrap/Container';

export default function AgTitle() {
    return <>
        <Container className="text-center align-middle">
            <div className="h-screen flex justify-center flex-column">
                <h3>O seu guia de compras</h3>
                <h1 className="font-[Jost] unselectable text-[10rem]">
                    <span className="font-thin">G</span>
                    <span className="font-extralight">A</span>
                    <span className="font-light">L</span>
                    <span className="font-normal">E</span>
                    <span className="font-light">R</span>
                    <span className="font-extralight">I</span>
                    <span className="font-thin">A</span>
                </h1>
                <h5>
                    2ª Edição <b>· Julho</b> de 2021 {/* <virtual> */}versão virtual{/* </virtual> */}  <br/>
                </h5>
                <h5>
                    {/* <name> */}
                        Rosa Maria ·
                    {/* </name> */}
                    {/* <email> */} informativoopcao@gmail.com{/* </email> */} <b>· 98898-6305</b> {/* <virtual> */}oi{/* </virtual> */} <b>· 99920-3720</b> {/* <virtual> */}vivo{/* </virtual> */}
                </h5>
            </div>
            <h5>
                <sub>
                <b className="font-[Playfair] uppercase">Opção</b>
                </sub>
            </h5>
            <h3>Outubro de 20<b>22</b></h3>
            <hr /* size="2" width="5%" color="greenyellow" */ />
            <h6>
                Informativo - Ano XIX - <b>Julho</b> de 2021 - NºCCXXVIII <br/>
                São João Nepomuceno e Região - Minas Gerais <br/>
            </h6>
        </Container>
    </>;
}