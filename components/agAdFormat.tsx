import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import CapBtn from "../elements/capBtn";
import CapForm from "../elements/capForm";

export default function AgAdFormat({adF}: {adF: any}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    return (
        <>
            <Form className="my-3 text-center">
            { adF ? 
                    (<div className="flex justify-center">
                        <CapBtn
                            label="returnNewFormatAd"
                            variant="primary"
                            iconType="io5"
                            icon="IoCaretBack" /* iconType="md" icon="MdOutlineLogin" */
                            css="mb-3"
                            click={ () => {adF = undefined} }
                        />
                    </div>)
                : '' }
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                {/* <Button className="!rounded-none" variant="primary" /* type="submit" / onClick={() => alert(name)}>
                    Sigin
                </Button> */}
                {/* <CapForm
                    label="name"
                    placeholder="enterName"
                    value={name}
                    change={(e: any) => {
                        setName(e.target.value);
                    }}
                />
                <CapForm
                    label="password"
                    placeholder="enterPassword"
                    value={password}
                    change={(e: any) => {
                        setPassword(e.target.value);
                    }}
                />
                <div className="flex justify-center">
                    <CapBtn label="signin" iconType="md" icon="MdOutlineLogin" />
                </div> */}
                <CapForm
                    label="adFormat"
                    placeholder="name"
                    value={adF ? adF.name : name}
                    change={(e: any) => {
                        setName(e.target.value);
                    }}
                />
                <CapForm
                    label="description"
                    placeholder="description"
                    value={adF ? adF.description : description}
                    change={(e: any) => {
                        setDescription(e.target.value);
                    }}
                />
                <CapForm
                    label="price"
                    placeholder="brazilianCurrency"
                    value={adF ? adF.amountCents : price}
                    change={(e: any) => {
                        setPrice(e.target.value);
                    }}
                />
                <Row>
                    <h6>Escalas</h6>
                    <Col>
                        <CapForm
                            //label="width"
                            placeholder="width"
                            value={adF ? adF.width : width}
                            change={(e: any) => {
                                setWidth(e.target.value);
                            }}
                        />
                    </Col>
                    <Col>
                        <CapForm
                            //label="height"
                            placeholder="height"
                            value={adF ? adF.height : height}
                            change={(e: any) => {
                                setHeight(e.target.value);
                            }}
                        />
                    </Col>
                </Row>
                { !adF ? 
                    (<div className="flex justify-center">
                        <CapBtn
                            label="newFormatAd"
                            variant="success"
                            iconType="bs"
                            icon="BsFillFileEarmarkImageFill" /* iconType="md" icon="MdOutlineLogin" */
                        />
                    </div>)
                : 
                    (<div className="flex justify-center">
                        <CapBtn
                            label="editFormatAd"
                            variant="success"
                            iconType="bs"
                            icon="BsFileEarmarkImage" /* iconType="md" icon="MdOutlineLogin" */
                        />
                    </div>) }
                {/* <CapBtn
                    label="erase"
                    click={() =>
                        alert(
                            name +
                                " " +
                                description +
                                " " +
                                price +
                                " " +
                                width +
                                " " +
                                height
                        )
                    }
                /> */}
                {/* <Button className="!rounded-none" variant="primary" /* type="submit" / onClick={() => alert(name + ' ' + description + ' ' + price + ' ' + width + ' ' + height)}>
                    Signin
                </Button> */}
            </Form>
        </>
    );
}
