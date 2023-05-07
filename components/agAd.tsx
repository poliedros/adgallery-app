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
      <div className="flex flex-column items-center">
        {data.adFormatId === "611872d13a1f1854a4681008" ? (
          <img className="w-[25vw] mt-[-64px]" src={url} />
        ) : data.adFormatId === "611872d13a1f1854a4681006" ? (
          <img className="w-[25vw] mt-[-64px]" src={url} />
        ) : (
          <img className="w-[50vw] mt-[-64px]" src={url} />
        )}
        <div className="text-center mt-3">
          <div>
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
          <div className="flex justify-evenly items-center">
            {(data.contact !== undefined && data.contact !== "") ||
            (data.phone !== undefined && data.phone !== "") ||
            (data.email !== undefined && data.email !== "") ? (
              <div className="mx-3">
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
                      return data.adFormatId === "611872d13a1f1854a4681008" ? (
                        <h2 className="font-bold">
                          <a href={"tel:" + ph} className="whitespace-nowrap">
                            {ph}
                          </a>
                        </h2>
                      ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                        <h2 className="font-bold">
                          <a href={"tel:" + ph} className="whitespace-nowrap">
                            {ph}
                          </a>
                        </h2>
                      ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                        <h1 className="font-bold">
                          <a href={"tel:" + ph} className="whitespace-nowrap">
                            {ph}
                          </a>
                        </h1>
                      ) : (
                        <h2 className="font-bold">
                          <a href={"tel:" + ph} className="whitespace-nowrap">
                            {ph}
                          </a>
                        </h2>
                      );
                    })
                  : null}
                {data.email !== undefined || data.email !== "" ? (
                  data.adFormatId === "611872d13a1f1854a4681008" ? (
                    <h5 className="">
                      <a href={"mailto:" + data.email}>{data.email}</a>
                    </h5>
                  ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                    <h4 className="">
                      <a href={"mailto:" + data.email}>{data.email}</a>
                    </h4>
                  ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                    <h3 className="">
                      <a href={"mailto:" + data.email}>{data.email}</a>
                    </h3>
                  ) : (
                    <h4 className="">
                      <a href={"mailto:" + data.email}>{data.email}</a>
                    </h4>
                  )
                ) : null}

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
                {data.address !== undefined || data.address !== "" ? (
                  data.adFormatId === "611872d13a1f1854a4681008" ? (
                    <h5
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic"
                    >
                      {data.address}
                    </h5>
                  ) : data.adFormatId === "6209b62804dbe50016b07ccc" ? (
                    <h4
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic"
                    >
                      {data.address}
                    </h4>
                  ) : data.adFormatId === "620ad11413589700166baf4c" ? (
                    <h3
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic"
                    >
                      {data.address}
                    </h3>
                  ) : (
                    <h5
                      style={{ fontFamily: "Playfair Display" }}
                      className="italic"
                    >
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
