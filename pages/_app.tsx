import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SWRConfig } from "swr";
import fetchJson from "./../lib/fetchJson";
import AgLayout from "../components/agLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher: fetchJson,
                onError: (err) => {
                    console.log(err);
                },
            }}
        >
            <div /* className={styles.container} */>
                <AgLayout>
                    <Component {...pageProps} />
                </AgLayout>
            </div>
        </SWRConfig>
    );
}

export default MyApp;
