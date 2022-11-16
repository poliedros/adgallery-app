import { Button, Card, Form, InputGroup } from "react-bootstrap";
import CapBtn from "../elements/capBtn";
import CapForm from "../elements/capForm";

export default function AgChangeAdStatus({adO}: {adO: any}) {
    return <>
        <div className="flex-column text-center">
            <div className="flex !justify-center">
                <Card className="!rounded-none" border="dark">
                    <Card.Body>
                    { adO ?
                        <img src={adO.urls[0]} className="-mt-4 w-64 mb-3" />
                        : <h5 className="text-gray">Nenhuma Imagem<br/>selecionada ainda</h5>
                    }
                    {/* <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </Card.Text> */}
                    <div className="flex justify-center">
                        {/* <Button className="!rounded-none -mb-[1rem]">
                            Anderson
                        </Button> */}
                        <CapBtn label="confirm" variant="success" iconType="hi" icon="HiCheck" />
                    </div>
                    </Card.Body>
                </Card>
            </div>

            {/* <InputGroup className="mb-3 !rounded-none">
                <InputGroup.Checkbox className="!rounded-none" aria-label="Checkbox for following text input" />
                <Form.Control aria-label="Text input with checkbox" />
            </InputGroup> */}
            <div className="mt-6">
                <CapForm label="name" placeholder="name" value={adO ? adO.description : ""} />
            </div>
            {/* <Button className="!rounded-none">
                Anderson
            </Button>
            <Button className="!rounded-none">
                Anderson
            </Button> */}

            <div className="flex justify-center m-3">
                <CapBtn label="confirmAd" variant="success" iconType="hi" icon="HiCheck" css="!m-0" />
                <CapBtn label="rejectAd" variant="danger" iconType="hi" icon="HiX" css="!m-0" />
            </div>

            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button className="!rounded-none" variant="outline-secondary" id="button-addon2">
                    Confirmar Pagamento
                </Button>
            </InputGroup>
        </div>
    </>;
}