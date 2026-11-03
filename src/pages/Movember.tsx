import { ArrowRight, Brain, HeartHandshake, ShieldPlus, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    icon: Stethoscope,
    title: "Prevence rakoviny prostaty",
    text: "Věnujte pozornost svému zdraví a preventivní prohlídky neodkládejte. S lékařem můžete probrat osobní rizika i to, jaká vyšetření jsou pro vás vhodná.",
  },
  {
    icon: ShieldPlus,
    title: "Zdraví varlat",
    text: "Znalost vlastního těla pomáhá všímat si změn. Pokud zaznamenáte něco neobvyklého nebo máte obavy, obraťte se na zdravotnického odborníka.",
  },
  {
    icon: Brain,
    title: "Duševní pohoda",
    text: "O stresu, náročných zážitcích nebo pocitu osamělosti má smysl mluvit. Sdílet, co prožíváte, a vyhledat podporu je projev odvahy, ne slabosti.",
  },
];

const Movember = () => (
  <main className="bg-[#10151c] text-slate-100">
    <section className="relative overflow-hidden border-b border-sky-200/20 bg-[radial-gradient(circle_at_top_right,_rgba(65,118,166,0.28),_transparent_42%),linear-gradient(135deg,_#10151c_0%,_#1b2633_55%,_#0b0e12_100%)] py-20 md:py-28">
      <div className="absolute inset-y-0 left-0 w-1 bg-sky-400/80" />
      <div className="container relative mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Badge className="mb-6 border-sky-300/40 bg-sky-100/10 text-sky-200 hover:bg-sky-100/10">
            Listopad · Měsíc mužského zdraví
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Movember: pečujme o své zdraví
          </h1>
          <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
            Zdraví se týká těla i mysli. Movember připomíná, že prevence, otevřený rozhovor
            a včasné vyhledání odborné pomoci mohou být důležitým krokem pro nás i naše blízké.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-sky-500 text-slate-950 hover:bg-sky-400">
              <a href="#temata">
                Témata Movemberu
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-100 hover:text-slate-950">
              <NavLink to="/media">Mediální centrum</NavLink>
            </Button>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-3xl overflow-hidden border border-slate-600/70 bg-slate-950 shadow-2xl">
          <img
            src="/images/media/2026-11-01/image.png"
            alt="Kampaň Movember připomíná prevenci rakoviny prostaty a varlat i péči o duševní zdraví"
            className="h-auto w-full"
          />
          <figcaption className="px-5 py-3 text-sm text-slate-400">
            Los Santos Sheriff's Department · Movember
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="bg-slate-100 py-16 text-slate-900 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">
              Poselství LSSD
            </p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              O zdraví je v pořádku mluvit.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Los Santos Sheriff's Department se připojuje k iniciativě Movember a připomíná,
              že starat se o sebe není slabost. Je to důležitá součást odpovědnosti vůči sobě
              i lidem, kterým na nás záleží.
            </p>
            <p>
              Mužské zdraví zahrnuje prevenci rakoviny prostaty a varlat, ale také duševní
              pohodu. Každý člověk může prožívat náročné období a nemusí na něj zůstávat sám.
              Rozhovor s blízkým člověkem nebo odborníkem může být začátkem hledání podpory.
            </p>
            <p className="font-semibold text-slate-900">
              Pečujme o své zdraví. Mluvme otevřeně. Podporujme se navzájem.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="temata" className="border-y border-slate-700 bg-[#171e27] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Tři důležitá témata
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Zájem o zdraví může začít rozhovorem
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Každý má jiné potřeby. O individuálních otázkách a vhodné prevenci se poraďte
            se zdravotnickým odborníkem.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border border-slate-700 bg-slate-950/50 p-7">
              <Icon className="mb-5 h-8 w-8 text-sky-300" aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#10151c] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl border border-sky-200/20 bg-slate-900/70 p-7 md:p-10">
          <HeartHandshake className="mb-5 h-9 w-9 text-sky-300" aria-hidden="true" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Podpora je důležitá
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Nemusíme na to být sami
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Příslušníci bezpečnostních a záchranných složek se mohou setkávat se stresem
            a náročnými situacemi. Péče o duševní zdraví je stejně důležitá jako péče o zdraví
            fyzické. Zkusme se zajímat o své okolí, naslouchat bez odsuzování a povzbudit
            druhého, aby vyhledal podporu, kterou potřebuje.
          </p>
          <p className="mt-5 border-l-2 border-sky-400 pl-4 font-medium text-slate-100">
            Požádat o pomoc vyžaduje odvahu. Nabídnout naslouchání může znamenat mnoho.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            Tato stránka má pouze osvětový charakter a nenahrazuje lékařské vyšetření,
            diagnózu ani individuální doporučení zdravotnického odborníka.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-100 hover:text-slate-950">
            <NavLink to="/media">
              Přečíst tiskovou zprávu v Médiích
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default Movember;
