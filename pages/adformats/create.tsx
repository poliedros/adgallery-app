//import useUser from "lib/useUser";
import { AdFormatDTO } from "../api/adformats";
import { useState } from "react";
import AgModalBase from "../../components/agModalBase";
import AgMainAccountAccordion from "../../components/agMainAccountAccordion";
import AgOffcanvasBase from "../../components/agOffcanvasBase";
import AgAccountNavbar from "../../components/agAccountNavbar";
import AgNavbar from "../../components/agNavbar";

export default function Create() {
  //const { user } = useUser({ redirectTo: "/login" });

  const [error, setError] = useState("");

  /* if (!user || user.isLoggedIn == false) {
        return <div>404</div>;
    } */

  const saveAd = async (adFormat: AdFormatDTO) => {
    const data = await fetch("/api/adformats", {
      method: "POST",
      body: JSON.stringify(adFormat),
    }); //.finally(() => setLoading(false));
    if (data.status === 201) {
      alert("Create AdFormat");
    } else {
      setError("Create AdFormat Fault");
    }
  };

  return (
    <>
      {/* <AgModalBase show={true} onHide={undefined} modalType={"adsFormat"} data={undefined} /> */}
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
          canvasType={"adFormat"}
        />
      </div>
      <>{error}</>
    </>
  );
}
