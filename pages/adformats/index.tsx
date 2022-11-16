//import useUser from "lib/useUser";
import { AdFormatDTO } from "../api/adformats";
import useSWR from "swr";
import AgModalBase from "../../components/agModalBase";
import AgMainAccountAccordion from "../../components/agMainAccountAccordion";
import AgOffcanvasBase from "../../components/agOffcanvasBase";
import AgNavbar from "../../components/agNavbar";
import AgAccountNavbar from "../../components/agAccountNavbar";

export default function Index() {
  //const { user } = useUser({ redirectTo: "/login" });

  const { data: adFormats, error } = useSWR<AdFormatDTO[]>(
      /* user ? */ "/api/adformats" /* : null */
  );

  if (error) return <div>failed to load</div>;
  if (!adFormats) return <div>loading...</div>;

  /* if (!user || user.isLoggedIn == false) {
    return <div>404</div>;
  } */

  return (
    <>
      {/* <CountyList counties={counties}/> */}
      {/* <AgModalBase show={true} onHide={undefined} modalType={"adsFormat"} data={undefined} /> */}
      <div className="bg-black">
          <AgNavbar />
          <AgAccountNavbar />
          <AgMainAccountAccordion />
          <AgOffcanvasBase show={true} onHide={undefined} canvasType={"adsFormat"} aFs={adFormats} />
      </div>
      
    </>
  );
}