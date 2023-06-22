import Image from "next/image";

import { useState } from "react";
import AgModalBase from "./agModalBase";

export default function AgAdElement({ ad }: { ad: any }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/*<Image loader={() => ad.urls[0]} src={ad.urls[0]} width={500} height={500} objectFit="contain"
            /* style={{ width: "100%" }}
            className='unique'
            src={ ad.urls[0] }
            title={ ad.description } /
            alt={ ad.description }
            onClick={
                () => setOpenModal(true)
            }
        />*/}
      <img
        className="w-[100%]"
        // width={900}
        // height={900}
        src={ad.urls[0]}
        alt={ad.description}
        onClick={() => setOpenModal(true)}
        onLoad={() => {
          <>
            <div className="flex items-center justify-center">
              <h2 className="animate-pulse">Carregando</h2>
            </div>
          </>;
        }}
      />
      <AgModalBase
        show={openModal}
        onHide={() => setOpenModal(false)}
        modalType="ad"
        data={{
          url: ad.urls[0],
          description: ad.description,
          title: ad.title,
          subtitle: ad.subtitle,
          contact: ad.contact,
          phone: ad.phone,
          email: ad.email,
          address: ad.address,
          city: ad.city,
          link: ad.link,
          qrCode: ad.qrCode,
          adFormatId: ad.adFormatId,
        }}
      />
    </>
  );
}
