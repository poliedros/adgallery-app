//import useUser from "lib/useUser";
import { AdDTO } from "../api/ads";
import useSWR from "swr";
import AgModalBase from "../../components/agModalBase";
import AgMainAccountAccordion from "../../components/agMainAccountAccordion";
import AgOffcanvasBase from "../../components/agOffcanvasBase";
import AgNavbar from "../../components/agNavbar";
import AgAccountNavbar from "../../components/agAccountNavbar";

export default function Index() {
  //const { user } = useUser({ redirectTo: "/login" });

  const { data: ads, error } = useSWR<AdDTO[]>(
      /* user ? */ "/api/ads" /* : null */
  );

  if (error) return <div>failed to load</div>;
  if (!ads) return <div>loading...</div>;

  /* if (!user || user.isLoggedIn == false) {
    return <div>404</div>;
  } */

  return (
    <>
      {/* <CountyList counties={counties}/> */}
      {/* <AgModalBase show={true} onHide={undefined} modalType={"adConfig"} data={undefined} ads={ads} /> */}
      {/* <AgMainAccountAccordion />
      <AgOffcanvasBase show={true} onHide={undefined} canvasType={"ads"} ads={ads} /> */}
      <div className="bg-black">
          <AgNavbar />
          <AgAccountNavbar />
          <AgMainAccountAccordion />
          <AgOffcanvasBase show={true} onHide={undefined} canvasType={"ads"} ads={ads} />
      </div>
    </>
  );
}