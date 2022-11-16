import Image from 'next/image';

import { useState } from "react";
import AgModalBase from './agModalBase';

export default function AgAdElement({ad}: {ad: any}) {
    const [openModal, setOpenModal] = useState(false);
    
    return <>
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
        <img className="w-[100%]" src={ad.urls[0]}
            alt={ ad.description }
            onClick={
                () => setOpenModal(true)
            }
        />
        <AgModalBase show={openModal} onHide={() => setOpenModal(false)} modalType="ad" data={ { url: ad.urls[0], title: ad.description } } />
    </>;
}