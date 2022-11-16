import { Accordion } from "react-bootstrap"
import translantions from "../translations.json"
import AgSignin from "./agSignin";
import AgSignup from "./agSignup";

export default function AgPreAccountAccordion() {
    return <>
        <div className="h-screen flex justify-center items-center">
            <Accordion className="flex flex-column items-center" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{ translantions.signup['pt'] } &nbsp;</Accordion.Header>
                    <Accordion.Body>
                        <AgSignup />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{ translantions.signin['pt'] } &nbsp;</Accordion.Header>
                    <Accordion.Body>
                        <AgSignin />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </>;
}