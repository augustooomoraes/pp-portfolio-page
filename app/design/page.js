import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const aleo = Aleo({ subsets: ["latin"], style: ["normal", "italic"] });
{
  /* Enquanto não tem conteúdo e o título está "leve" e itálico */
}

export const metadata = {
  title: "Design",
};

export default function Page() {
  return (
    <main className={classNames(nunito_sans.className)}>
      <h1 className={classNames(aleo.className, "font-light italic")}>~ Design page ~</h1>
    </main>
  );
}
