import getIconsByName from "../functions/getIconsByName";

export default function AgAd({
  url,
  title,
  data,
}: {
  url: string;
  title: string;
  data: any;
}) {
  return (
    <>
      <div className="flex flex-column items-center fade-in">
        {data.adFormatId === "611872d13a1f1854a4681008" ? (
          <img className="w-[25vw] mt-[-64px]" src={url} />
        ) : data.adFormatId === "611872d13a1f1854a4681006" ? (
          <img className="w-[25vw] mt-[-64px]" src={url} />
        ) : (
          <img className="w-[50vw] mt-[-64px]" src={url} />
        )}
        <div className="text-center mt-3">
          <div style={{ fontFamily: "Montserrat" }}>
            {data.title !== undefined || data.title !== "" ? (
              data.adFormatId === "611872d13a1f1854a4681008" ? (
                <h3 className="font-bold">{data.title}</h3>
              ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                <h2 className="text-4xl font-bold">{data.title}</h2>
              ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                <h1 className="text-5xl font-bold">{data.title}</h1>
              ) : (
                <h2 className="font-bold">{data.title}</h2>
              )
            ) : null}
            {data.subtitle !== undefined || data.subtitle !== "" ? (
              data.adFormatId === "611872d13a1f1854a4681008" ? (
                <h6
                  style={{ fontFamily: "Playfair Display" }}
                  className="tracking-wider"
                >
                  {data.subtitle}
                </h6>
              ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                <h5
                  style={{ fontFamily: "Playfair Display" }}
                  className="tracking-wider"
                >
                  {data.subtitle}
                </h5>
              ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                <h3
                  style={{ fontFamily: "Playfair Display" }}
                  className="tracking-wider"
                >
                  {data.subtitle}
                </h3>
              ) : (
                <h6
                  style={{ fontFamily: "Playfair Display" }}
                  className="tracking-wider"
                >
                  {data.subtitle}
                </h6>
              )
            ) : null}
            {data.description !== undefined || data.description !== "" ? (
              data.adFormatId === "611872d13a1f1854a4681008" ? (
                <p className="">{data.description}</p>
              ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                <h6 className="">{data.description}</h6>
              ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                <h4 className="">{data.description}</h4>
              ) : (
                <p className="">{data.description}</p>
              )
            ) : null}
          </div>
          <div className="flex justify-evenly items-center content-division">
            {(data.contact !== undefined && data.contact !== "") ||
            (data.phone !== undefined && data.phone !== "") ||
            (data.email !== undefined && data.email !== "") ? (
              <div className="mx-3 flex flex-col items-center">
                {data.contact !== undefined || data.contact !== "" ? (
                  data.adFormatId === "611872d13a1f1854a4681008" ? (
                    <h6
                      style={{
                        fontFamily: "Playfair Display",
                        textTransform: "capitalize",
                      }}
                      className="italic"
                    >
                      {data.contact}
                    </h6>
                  ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                    <h5
                      style={{
                        fontFamily: "Playfair Display",
                        textTransform: "capitalize",
                      }}
                      className="italic"
                    >
                      {data.contact}
                    </h5>
                  ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                    <h4
                      style={{
                        fontFamily: "Playfair Display",
                        textTransform: "capitalize",
                      }}
                      className="italic"
                    >
                      {data.contact}
                    </h4>
                  ) : (
                    <h6
                      style={{
                        fontFamily: "Playfair Display",
                      }}
                      className="italic"
                    >
                      {data.contact}
                    </h6>
                  )
                ) : null}
                {data.phone !== undefined || data.phone !== ""
                  ? data.phone.split("/").map((ph: string) => {
                      let pd: string[] = ph.split(":");
                      return data.adFormatId === "611872d13a1f1854a4681008" ? (
                        // ph.split(":").map((pd: string) => {
                        <h3 className="font-bold flex items-center">
                          {pd[1] !== "" ? (
                            <span
                              style={{ fontFamily: "Playfair Display" }}
                              className="mr-2 italic"
                            >
                              {pd[1]}
                            </span>
                          ) : null}
                          {pd[0] === "wa" ? (
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiWhatsappFill",
                                "20px",
                                "#0DC143"
                              )}
                            </span>
                          ) : null}
                          {pd[3] !== "" ? (
                            <span className="text-base mr-2">{pd[3]}</span>
                          ) : null}
                          <a
                            href={"tel:" + pd[4]}
                            className="whitespace-nowrap"
                          >
                            {pd[4]}
                          </a>
                          {pd[2] !== "" ? (
                            <span className="text-base ml-2">({pd[2]})</span>
                          ) : null}
                        </h3>
                      ) : // })
                      data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                        <h2 className="font-bold flex items-center">
                          {pd[1] !== "" ? (
                            <span
                              style={{ fontFamily: "Playfair Display" }}
                              className="mr-2 text-lg font-normal italic"
                            >
                              {pd[1]}
                            </span>
                          ) : null}
                          {pd[0] === "wa" ? (
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiWhatsappFill",
                                "20px",
                                "#0DC143"
                              )}
                            </span>
                          ) : null}
                          {pd[3] !== "" ? (
                            <span className="text-lg mr-2">{pd[3]}</span>
                          ) : null}
                          <a
                            href={"tel:" + pd[4]}
                            className="whitespace-nowrap"
                          >
                            {pd[4]}
                          </a>
                          {pd[2] !== "" ? (
                            <span className="text-base ml-2">({pd[2]})</span>
                          ) : null}
                        </h2>
                      ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                        <h1 className="font-bold flex items-center">
                          {pd[1] !== "" ? (
                            <span
                              style={{ fontFamily: "Playfair Display" }}
                              className="mr-2 text-lg font-normal italic"
                            >
                              {pd[1]}
                            </span>
                          ) : null}
                          {pd[0] === "wa" ? (
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiWhatsappFill",
                                "28px",
                                "#0DC143"
                              )}
                            </span>
                          ) : null}
                          {pd[3] !== "" ? (
                            <span className="text-xl mr-2">{pd[3]}</span>
                          ) : null}
                          <a
                            href={"tel:" + pd[4]}
                            className="whitespace-nowrap"
                          >
                            {pd[4]}
                          </a>
                          {pd[2] !== "" ? (
                            <span className="text-base ml-2">({pd[2]})</span>
                          ) : null}
                        </h1>
                      ) : (
                        <h2 className="font-bold flex items-center">
                          {pd[1] !== "" ? (
                            <span
                              style={{ fontFamily: "Playfair Display" }}
                              className="mr-2 text-base font-normal italic"
                            >
                              {pd[1]}
                            </span>
                          ) : null}
                          {pd[0] === "wa" ? (
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiWhatsappFill",
                                "24px",
                                "#0DC143"
                              )}
                            </span>
                          ) : null}

                          {pd[3] !== "" ? (
                            <span className="text-lg mr-2">{pd[3]}</span>
                          ) : null}
                          <a
                            href={"tel:" + pd[4]}
                            className="whitespace-nowrap"
                          >
                            {pd[4]}
                          </a>
                          {pd[2] !== "" ? (
                            <span className="text-base ml-2">({pd[2]})</span>
                          ) : null}
                        </h2>
                      );
                    })
                  : null}
                {data.email !== undefined || data.email !== ""
                  ? data.email.split("/").map((sn: string) => {
                      if (data.adFormatId === "611872d13a1f1854a4681008") {
                        let kv = sn.split(":");
                        if (kv[0] === "em")
                          return (
                            <h5 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName("ri", "RiMailFill")}
                              </span>
                              <a href={"mailto:" + kv[1]}>{kv[1]}</a>
                            </h5>
                          );
                        if (kv[0] === "ig")
                          return (
                            <h5 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName(
                                  "ri",
                                  "RiInstagramFill",
                                  "24px",
                                  "#FF0093"
                                )}
                              </span>
                              <a
                                href={
                                  kv[1][0] === "@"
                                    ? "http://instagram.com/_u/" +
                                      kv[1].substring(1)
                                    : "http://instagram.com/_u/" + kv[1]
                                }
                              >
                                {kv[1]}
                              </a>
                            </h5>
                          );
                        if (kv[0] === "fb")
                          return (
                            <h5 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName(
                                  "ri",
                                  "RiFacebookBoxFill",
                                  "24px",
                                  "#0676E8"
                                )}
                              </span>
                              <a href={"https://www.facebook.com/" + kv[1]}>
                                {kv[1]}
                              </a>
                            </h5>
                          );
                      }
                      if (data.adFormatId === "6209b62804dbe50016b07ccc") {
                        let kv = sn.split(":");
                        if (kv[0] === "em")
                          return (
                            <h4 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName("ri", "RiMailFill")}
                              </span>
                              <a href={"mailto:" + kv[1]}>{kv[1]}</a>
                            </h4>
                          );
                        if (kv[0] === "ig")
                          return (
                            <h4 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName(
                                  "ri",
                                  "RiInstagramFill",
                                  "24px",
                                  "#FF0093"
                                )}
                              </span>
                              <a
                                href={
                                  kv[1][0] === "@"
                                    ? "http://instagram.com/_u/" +
                                      kv[1].substring(1)
                                    : "http://instagram.com/_u/" + kv[1]
                                }
                              >
                                {kv[1]}
                              </a>
                            </h4>
                          );
                        if (kv[0] === "fb")
                          return (
                            <h4 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName(
                                  "ri",
                                  "RiFacebookBoxFill",
                                  "24px",
                                  "#0676E8"
                                )}
                              </span>
                              <a href={"https://www.facebook.com/" + kv[1]}>
                                {kv[1]}
                              </a>
                            </h4>
                          );
                      }
                      if (data.adFormatId === "620ad11413589700166baf4c") {
                        let kv = sn.split(":");
                        if (kv[0] === "em")
                          return (
                            <h3 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName("ri", "RiMailFill")}
                              </span>
                              <a href={"mailto:" + kv[1]}>{kv[1]}</a>
                            </h3>
                          );
                        if (kv[0] === "ig")
                          return (
                            <h3 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName(
                                  "ri",
                                  "RiInstagramFill",
                                  "24px",
                                  "#FF0093"
                                )}
                              </span>
                              <a
                                href={
                                  kv[1][0] === "@"
                                    ? "http://instagram.com/_u/" +
                                      kv[1].substring(1)
                                    : "http://instagram.com/_u/" + kv[1]
                                }
                              >
                                {kv[1]}
                              </a>
                            </h3>
                          );
                        if (kv[0] === "fb")
                          return (
                            <h3 className="flex items-center">
                              <span className="mr-2">
                                {getIconsByName(
                                  "ri",
                                  "RiFacebookBoxFill",
                                  "24px",
                                  "#0676E8"
                                )}
                              </span>
                              <a href={"https://www.facebook.com/" + kv[1]}>
                                {kv[1]}
                              </a>
                            </h3>
                          );
                      }
                      // if (data.adFormatId === "611872d13a1f1854a4681008") {
                      let kv = sn.split(":");
                      if (kv[0] === "em")
                        return (
                          <h4 className="flex items-center">
                            <span className="mr-2">
                              {getIconsByName("ri", "RiMailFill")}
                            </span>
                            <a href={"mailto:" + kv[1]}>{kv[1]}</a>
                          </h4>
                        );
                      if (kv[0] === "ig")
                        return (
                          <h4 className="flex items-center">
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiInstagramFill",
                                "24px",
                                "#FF0093"
                              )}
                            </span>
                            <a
                              href={
                                kv[1][0] === "@"
                                  ? "http://instagram.com/_u/" +
                                    kv[1].substring(1)
                                  : "http://instagram.com/_u/" + kv[1]
                              }
                            >
                              {kv[1]}
                            </a>
                          </h4>
                        );
                      if (kv[0] === "fb")
                        return (
                          <h4 className="flex items-center">
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiFacebookBoxFill",
                                "24px",
                                "#0676E8"
                              )}
                            </span>
                            <a href={"https://www.facebook.com/" + kv[1]}>
                              {kv[1]}
                            </a>
                          </h4>
                        );
                      if (kv[0] === "in")
                        return (
                          <h4 className="flex items-center">
                            <span className="mr-2">
                              {getIconsByName(
                                "ri",
                                "RiLinkedinBoxFill",
                                "24px",
                                "#0A66C2"
                              )}
                            </span>
                            <a
                              href={
                                "https://www.linkedin.com/sharing/share-offsite/?url=https://www.linkedin.com/in/" +
                                kv[1]
                              }
                            >
                              {kv[1]}
                            </a>
                          </h4>
                        );
                      // }
                    })
                  : null}

                {/* <h2>{data.phone}</h2>
                <h5>{data.email}</h5> */}
              </div>
            ) : null}
            {(data.link !== undefined && data.link !== "") ||
            (data.address !== undefined && data.address !== "") ||
            (data.city !== undefined && data.city !== "") ? (
              <div className="mx-3">
                {data.link !== undefined || data.link !== "" ? (
                  data.adFormatId === "611872d13a1f1854a4681008" ? (
                    <p className="">
                      <a href={data.link}>{data.link}</a>
                    </p>
                  ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                    <h6 className="">
                      <a href={data.link}>{data.link}</a>
                    </h6>
                  ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                    <h5 className="">
                      <a href={data.link}>{data.link}</a>
                    </h5>
                  ) : (
                    <p className="">
                      <a href={data.link}>{data.link}</a>
                    </p>
                  )
                ) : null}
                {data.address !== undefined && data.address !== "" ? (
                  data.adFormatId === "611872d13a1f1854a4681008" ? (
                    <h5
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic flex items-center"
                    >
                      <span className="mr-2">
                        {getIconsByName("ri", "RiMapPinFill")}
                      </span>
                      {data.address}
                    </h5>
                  ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                    <h4
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic flex items-center"
                    >
                      <span className="mr-2">
                        {getIconsByName("ri", "RiMapPinFill")}
                      </span>
                      {data.address}
                    </h4>
                  ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                    <h3
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic flex items-center"
                    >
                      <span className="mr-2">
                        {getIconsByName("ri", "RiMapPinFill")}
                      </span>
                      {data.address}
                    </h3>
                  ) : (
                    <h5
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic flex items-center"
                    >
                      <span className="mr-2">
                        {getIconsByName("ri", "RiMapPinFill")}
                      </span>
                      {data.address}
                    </h5>
                  )
                ) : null}
                {data.city !== undefined || data.city !== "" ? (
                  data.adFormatId === "611872d13a1f1854a4681008" ? (
                    <p className="">{data.city}</p>
                  ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                    <h6 className="">{data.city}</h6>
                  ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                    <h5 className="">{data.city}</h5>
                  ) : (
                    <p className="">{data.city}</p>
                  )
                ) : null}
                {/* <h6>{data.link}</h6>
                <h5>{data.address}</h5>
                <p>{data.city}</p> */}
              </div>
            ) : null}
          </div>

          {/* <p>{JSON.stringify(data)}</p> */}
        </div>
      </div>
    </>
  );
}
