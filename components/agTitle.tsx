import Container from "react-bootstrap/Container";

export default function AgTitle() {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;
  const first = new Date("1/10/2001");
  const efirst = new Date("1/10/2021");
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var month = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();

  function monthDiff(d1: any, d2: any) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  function romanize(num: number) {
    if (isNaN(num)) return NaN;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;
    while (i--) {
      let vl = digits.pop();
      if (vl) roman = (key[+vl + i * 10] || "") + roman;
    }
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  return (
    <>
      <Container className="text-center align-middle">
        <div className="h-screen flex justify-center flex-column">
          <h3>O seu guia de compras</h3>
          {/* <h1 className="font-[Jost] unselectable text-[10rem]">
            <span className="font-thin">G</span>
            <span className="font-extralight">A</span>
            <span className="font-light">L</span>
            <span className="font-normal">E</span>
            <span className="font-light">R</span>
            <span className="font-extralight">I</span>
            <span className="font-thin">A</span>
          </h1> */}
          <h1
            style={{ fontFamily: "Playfair Display" }}
            className="font-bold unselectable text-[10rem] tracking-tight uppercase"
          >
            Opção
          </h1>
          <h5>
            {monthDiff(efirst, today)}ª Edição <b>· {month}</b> de {yyyy}{" "}
            <span style={{ fontFamily: "Playfair Display" }} className="italic">
              versão virtual
            </span>{" "}
            <br />
          </h5>
          <h5>
            <span style={{ fontFamily: "Playfair Display" }} className="italic">
              Rosa Maria ·
            </span>
            {/* <email> */} informativoopcao@gmail.com{/* </email> */}{" "}
            <b>· 98898-6305</b>{" "}
            <span style={{ fontFamily: "Playfair Display" }} className="italic">
              oi
            </span>{" "}
            <b>· 99920-3720</b>{" "}
            <span style={{ fontFamily: "Playfair Display" }} className="italic">
              vivo
            </span>
          </h5>
        </div>
        <h5>
          <sub>
            <b className="font-[Playfair] uppercase">Opção</b>
          </sub>
        </h5>
        <h3>
          {month} de 20<b>{yyyy.toString().slice(2)}</b>
        </h3>
        <hr /* size="2" width="5%" color="greenyellow" */ />
        <h6>
          Informativo - Ano{" "}
          {romanize(today.getFullYear() - first.getFullYear())} - <b>{month}</b>{" "}
          de {yyyy} - Nº {romanize(monthDiff(first, today))} <br />
          São João Nepomuceno e Região - Minas Gerais <br />
        </h6>
      </Container>
    </>
  );
}
