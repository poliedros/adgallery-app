//import useUser from "lib/useUser";
import { AdDTO } from "../api/ads";
import { useState } from "react";
import AgModalBase from "../../components/agModalBase";
import AgOffcanvasBase from "../../components/agOffcanvasBase";
import AgMainAccountAccordion from "../../components/agMainAccountAccordion";
import AgNavbar from "../../components/agNavbar";
import AgAccountNavbar from "../../components/agAccountNavbar";

export default function Order() {
  //const { user } = useUser({ redirectTo: "/login" });

  const [error, setError] = useState("");

  /* if (!user || user.isLoggedIn == false) {
        return <div>404</div>;
    } */

  const saveAd = async (ad: AdDTO) => {
    const data = await fetch("/api/ads", {
      method: "POST",
      body: JSON.stringify(ad),
    }); //.finally(() => setLoading(false));
    if (data.status === 201) {
      alert("Create Ad");
    } else {
      setError("Create Ad Fault");
    }
  };

  return (
    <>
      {/* <AgModalBase show={true} onHide={undefined} modalType={"adConfig"} data={undefined} /> */}
      {/* <CountyRegistration
                language={"pt"}
                county={undefined}
                onSubmit={saveCounty}
            /> */}
      <div className="bg-black">
        <AgNavbar />
        <AgAccountNavbar />
        <AgMainAccountAccordion />
        <AgOffcanvasBase
          show={true}
          onHide={undefined}
          canvasType={"orderAds"}
        />
        <>{error}</>
      </div>
    </>
  );
}
