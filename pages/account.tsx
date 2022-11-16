import AgAccountNavbar from "../components/agAccountNavbar";
import AgMainAccountAccordion from "../components/agMainAccountAccordion";
import AgNavbar from "../components/agNavbar";

export default function Account() {
    return (
        <>
            <div className="bg-black">
                <AgNavbar />
                <AgAccountNavbar />
                <AgMainAccountAccordion />
            </div>
        </>
    );
}