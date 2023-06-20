import { AdFormatDTO } from "../pages/api/adformats";
import { AdDTO } from "../pages/api/ads";
import AgAdElement from "./agAdElement";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function RenderGallery(
  ads: AdDTO[] | undefined,
  adFormats: AdFormatDTO[] | undefined,
  layout: any
) {
  return (
    <>
      {/* {JSON.stringify(adFormats)}
      <p>---</p>
      {JSON.stringify(layout)} */}
      {ads ? (
        <ResponsiveReactGridLayout
          isDraggable={false}
          isResizable={false}
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 0 }}
          cols={{ lg: 12 }}
          rowHeight={235}
          width={0}
          style={{ zIndex: -1 }}
        >
          {ads.map((ad) =>
            ad.urls[0] ? (
              <div key={ad._id ?? ""}>
                <AgAdElement ad={ad} />
              </div>
            ) : (
              <></>
            )
          )}
        </ResponsiveReactGridLayout>
      ) : (
        <></>
      )}
    </>
  );
}
