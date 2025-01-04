import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
import classNames from "classnames";
import ContactLink, { links } from "../ui/components/contact-link";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "Contato",
};

export default function Page() {

  return (
    <main className={classNames(nunito_sans.className)}>
      <section>
        <h1 className={aleo.className}>Contato</h1>
        <div className="grid gap-y-[6rem] items-center hyphens-manual">
          { links.map( link => { return ContactLink(link)})}
        </div>
      </section>
    </main>
  );
}
