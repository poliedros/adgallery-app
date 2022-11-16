import AgNavbar from "../components/agNavbar";
import AgPreAccountAccordion from "../components/agPreAccountAccordion";

export default function preAccount() {
    return(
        <>
            <div className="bg-black">
                <AgNavbar />
                <AgPreAccountAccordion />
            </div>
        </>
    );
}