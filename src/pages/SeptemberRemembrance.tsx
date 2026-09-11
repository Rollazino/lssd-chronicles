import { ArrowRight, Calendar, Camera, Clock3, Quote, Shield, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const timeline = [
  { time: "08:46", title: "První náraz", text: "Let American Airlines 11 zasáhl severní věž Světového obchodního centra." },
  { time: "09:03", title: "Druhý náraz", text: "Let United Airlines 175 zasáhl jižní věž Světového obchodního centra." },
  { time: "09:37", title: "Pentagon", text: "Let American Airlines 77 narazil do budovy Pentagonu ve Washingtonu." },
  { time: "09:59", title: "Pád jižní věže", text: "Jižní věž Světového obchodního centra se zřítila." },
  { time: "10:03", title: "Let 93", text: "Let United Airlines 93 se zřítil poblíž Shanksville v Pensylvánii." },
  { time: "10:28", title: "Pád severní věže", text: "Zřítila se severní věž Světového obchodního centra." },
];

const gallery = [
  {
    image: "/images/media/2001-09-11/image.jpg",
    alt: "",
    caption: "Odvaha těch, kteří pomáhají v první linii.",
  },
  {
    image: "/images/media/2001-09-11/image2.jpg",
    alt: "",
    caption: "Vzpomínka na kolegy, kteří zasvětili život službě.",
  },
  {
    image: "/images/media/2001-09-11/image3.jpg",
    alt: "",
    caption: "Každý odznak nese příběh a odpovědnost.",
  },
{
    image: "/images/media/2001-09-11/image4.jpg",
    alt: "",
    caption: "Na snímku je vidět unesený stroj letu United Airlines 175 jak míří k dvojici věží WTC krátce před nárazem do jižní věže.",
  },
{
    image: "/images/media/2001-09-11/image5.jpg",
    alt: "",
    caption: "Snímek pořízený už po kolapsu obou věží WTC.",
  },
{
    image: "/images/media/2001-09-11/image6.jpg",
    alt: "",
    caption: "Jižní věž WTC se hroutí.",
  },
];

const memories = [
  {
    name: "Thomas Carter",
    role: "Deputy II",
    quote: "I když sis někdy nevěděl rady, tak jsi nikdy nenechal někoho v problémech.",
    image: "/images/Thomas_Carter.png",
  },
  {
    name: "Raffael Jeter",
    role: "Commander",
    quote: "I když si byl přísný, vždy jsi nám pomáhal stát se lepšími důstojníky.",
    image: "/images/media/2025-09-30/image.png",
  },
  {
    name: "Jake Sinns",
    role: "Lieutenant",
    quote: "Celý svůj život zasvětil práci u šerifů a snažil se být nápomocný ostatním.",
    image: "/images/Jake Sinns.png",
  },
];

const officialMessageSections = [
  {
    title: "Úvodní poselství",
    paragraphs: [
      "Dnes si s hlubokým zármutkem a nejvyšší úctou připomínáme tragické události 11. září 2001 – den, který navždy změnil nejen Spojené státy americké, ale také způsob, jakým celý svět nahlíží na bezpečnost, službu veřejnosti a obětavost těch, kteří každý den chrání životy druhých.",
      "Před pětadvaceti lety přišlo během několika hodin o život téměř tři tisíce nevinných lidí. Byli mezi nimi lidé různých profesí, věku i životních příběhů. Lidé, kteří ráno odešli do práce, cestovali letadlem nebo jednoduše žili svůj běžný den. Nikdo z nich netušil, že se jejich život během několika okamžiků navždy změní.",
      "Dnes však nevzpomínáme pouze na oběti samotného útoku. Vzdáváme hold především těm, kteří ve chvíli největšího nebezpečí běželi opačným směrem, než kam utíkali ostatní.",
    ],
  },
  {
    title: "Hrdinové, kteří se nevrátili",
    paragraphs: [
      "Mezi prvními na místě byli příslušníci policie, hasiči, zdravotníci a další záchranáři. Mnozí z nich věděli, že vstupují do prostředí, ze kterého se nemusí vrátit. Přesto pokračovali dál.",
      "Policisté pomáhali evakuovat lidi z ohrožených budov, hasiči vstupovali do hořících pater, zdravotníci poskytovali pomoc zraněným a další záchranáři se bez váhání zapojili do pátracích a záchranných prací.",
      "Někteří z těchto mužů a žen položili svůj život během samotných útoků. Další se v následujících letech potýkali s následky práce v nebezpečných podmínkách Ground Zero.",
      "Jejich oběť nám připomíná, že skutečná služba veřejnosti není pouze o pravomocích a uniformě. Je o ochotě postavit se nebezpečí ve chvíli, kdy ostatní potřebují pomoc.",
    ],
  },
  {
    title: "Ti, kteří hledali i tam, kde už nikdo nedoufal",
    paragraphs: [
      "Do rozsáhlých pátracích a záchranných operací byli nasazeni také záchranářští psi. Společně se svými psovody prohledávali trosky, procházeli místy, kam se člověk často nemohl bezpečně dostat, a pomáhali hledat známky života i pozůstatky těch, kteří se již domů nevrátili.",
      "Jejich práce byla tichá, vytrvalá a nesmírně náročná. Navzdory únavě, prachu, kouři, hluku a nebezpečnému prostředí pokračovali ve své práci po boku svých psovodů.",
      "Dnes proto vzpomínáme nejen na všechny lidské životy, které byly 11. září ztraceny, ale také na čtyřnohé členy záchranných týmů, kteří společně se svými psovody pomáhali v jednom z největších záchranných nasazení moderní historie.",
    ],
  },
  {
    title: "Společná vzpomínka",
    paragraphs: [
      "Letošní připomínka 11. září se u Los Santos Sheriff's Department nenesla ve znamení samostatné velké akce. Místo toho jsme se rozhodli tento den uctít především společně s našimi kolegy z dalších složek.",
      "Na observatoři jsme se společně sešli s příslušníky Los Santos Police Department, San Andreas Highway Patrol, Emergency Medical Services a Los Santos Fire Department, abychom si společně připomněli všechny oběti a hrdiny událostí 11. září 2001.",
      "Společné setkání pro nás představovalo symbol toho, že bez ohledu na barvu uniformy, odznak nebo konkrétní úkol stojíme jako složky veřejné bezpečnosti vedle sebe se stejným posláním – chránit životy, pomáhat lidem a být připraveni sloužit ve chvílích, kdy nás společnost potřebuje nejvíce.",
      "Tiché uctění památky na observatoři nebylo pouze vzpomínkou na události před pětadvaceti lety. Bylo také připomínkou všech mužů a žen, kteří dodnes každý den nastupují do služby s vědomím, že jejich práce může být nepředvídatelná a někdy i nebezpečná.",
    ],
  },
  {
    title: "Odkaz pro každého, kdo obléká uniformu",
    paragraphs: [
      "Mnozí naši deputies vnímají 11. září jako jeden z okamžiků, který ukazuje skutečný význam služby veřejnosti. Uniforma totiž není pouze symbolem pravomoci. Je především symbolem odpovědnosti, odvahy a závazku chránit ostatní.",
      "Každý den naši deputies nastupují do služby s vědomím, že se mohou dostat do situace, kdy budou muset dát bezpečí druhých před vlastní. Právě 11. září nám připomíná, kam až může taková povinnost vést a jakou cenu jsou někteří lidé ochotni zaplatit za to, aby ochránili ostatní.",
      "Stejně jako si dnes připomínáme policisty, hasiče, zdravotníky a záchranáře, kteří se v roce 2001 nevrátili domů, vzpomínáme také na všechny příslušníky bezpečnostních a záchranných složek, kteří během výkonu služby přišli o život kdykoliv předtím i potom.",
      "Také Los Santos Sheriff's Department s úctou vzpomíná na své padlé kolegy a všechny muže a ženy, kteří položili svůj život při ochraně obyvatel Los Santos County a Blaine County.",
      "Jejich služba skončila. Jejich odkaz však pokračuje.",
    ],
  },
  {
    title: "Nikdy nezapomeneme",
    paragraphs: [
      "Události 11. září nám připomínají, že za každou uniformou stojí člověk. Člověk, který má rodinu, přátele, sny a někoho, kdo na něj čeká doma.",
      "Připomínají nám také, že hrdinství nemusí být vždy hlasité. Někdy má podobu policisty, který zůstane u posledního evakuovaného člověka. Hasiče, který se vrací do hořící budovy. Zdravotníka, který pokračuje v ošetřování zraněných. Psovoda, který vede svého parťáka troskami. Nebo záchranářského psa, který pokračuje v hledání, přestože je unavený a okolí je plné nebezpečí.",
      "Dnes proto na chvíli odkládáme každodenní povinnosti a zastavujeme se v tiché vzpomínce.",
      "Děkujeme všem občanům, kteří si dnes najdou chvíli a věnují tichou myšlenku těm, jejichž životy byly předčasně ukončeny, i těm, kteří v ten den prokázali mimořádnou odvahu. Ať jejich příběhy nikdy nezmizí.",
    ],
  },
];

const SeptemberRemembrance = () => {
  return (
    <div className="min-h-screen bg-[#101311] text-stone-100">
      <Navigation />

      <main>
        <section className="relative overflow-hidden border-b border-amber-200/20 bg-[radial-gradient(circle_at_top_right,_rgba(183,145,63,0.2),_transparent_40%),linear-gradient(135deg,_#101311_0%,_#1b211c_55%,_#0b0d0c_100%)] py-24 md:py-32">
          <div className="absolute inset-y-0 left-0 w-1 bg-amber-400/80" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 border-amber-300/40 bg-amber-100/10 text-amber-200 hover:bg-amber-100/10">
                11/09/2001
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-stone-50 md:text-6xl">
                Vzpomínáme. Sloužíme. Nezapomínáme.
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-300 md:text-xl">
                V tento den se zastavujeme, abychom vzdali úctu obětem, jejich rodinám
                a všem, kteří v nejtěžších chvílích sloužili druhým.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild className="bg-amber-500 text-stone-950 hover:bg-amber-400">
                  <a href="#casova-osa">
                    Prohlédnout časovou osu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-stone-500 bg-transparent text-stone-100 hover:bg-stone-100 hover:text-stone-950">
                  <NavLink to="/endofwatch">
                    End of Watch
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="poselstvi" className="bg-stone-100 py-16 text-stone-900 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Oficiální poselství
                </p>
                <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">
                  Služba má smysl právě tehdy, když chrání druhé.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-stone-600">
                <p>
                  Los Santos Sheriff&apos;s Department si připomíná 11/09/2001 s úctou a pokorou.
                  Myslíme na všechny, kteří přišli o život, na jejich blízké i na záchranáře,
                  policisty a další pracovníky, kteří neváhali pomoci.
                </p>
                <p>
                  Jejich odvaha nám připomíná, že odznak není jen symbolem autority. Je závazkem
                  být připravený, jednat čestně a stát při komunitě, když to potřebuje nejvíce.
                </p>
                <p className="font-semibold text-stone-900">
                  Za všechny, kteří sloužili. Za všechny, na které vzpomínáme.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="oficialni-zprava" className="bg-[#ede9df] py-16 text-stone-900 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl overflow-hidden border border-stone-300 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-[280px] bg-stone-900 lg:min-h-full">
                  <img
                    src="/images/media/2001-09-11/image8.jpg"
                    alt="Vzpomínkový snímek k výročí 11. září"
                    className="absolute inset-0 h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-stone-50">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">11. září 2026</p>
                    <p className="mt-2 text-2xl font-bold">Nikdy nezapomeneme</p>
                  </div>
                </div>
                <article className="p-7 md:p-10">
                  <div className="mb-8 border-b border-stone-200 pb-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Oficiální vzpomínkové poselství</p>
                    <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">Výročí 11. září – nikdy nezapomeneme</h2>
                    <p className="mt-3 text-sm text-stone-500">Los Santos Sheriff's Department | 11. září 2026</p>
                  </div>
                  <div className="space-y-8">
                    {officialMessageSections.map((section) => (
                      <section key={section.title}>
                        <h3 className="mb-3 text-xl font-bold text-stone-950">{section.title}</h3>
                        <div className="space-y-3 text-base leading-relaxed text-stone-600">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph} className={paragraph === "Jejich služba skončila. Jejich odkaz však pokračuje." ? "font-bold text-stone-950" : undefined}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-stone-200 pt-6 text-stone-700">
                    <p className="font-semibold">Na ty, kteří zahynuli.</p>
                    <p className="font-semibold">Na ty, kteří pomáhali.</p>
                    <p className="font-semibold">Na ty, kteří se nevrátili domů.</p>
                    <p className="font-semibold">Na jejich rodiny a blízké.</p>
                    <p className="mt-4 font-semibold">Čest jejich památce.</p>
                    <p className="mt-5 text-sm italic">Los Santos Sheriff's Department<br />"A Tradition of Service"</p>

                  </div>
                  <Button asChild variant="outline" className="mt-8 border-stone-400">
                    <NavLink to="/media">
                      Otevřít tiskovou zprávu v Médiích
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="casova-osa" className="border-y border-stone-700 bg-[#171b18] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Co si připomínáme
              </p>
              <h2 className="text-3xl font-bold text-stone-50 md:text-4xl">Časová osa 11/09/2001</h2>
              <p className="mt-4 text-stone-400">Časy jsou uvedeny v místním čase východního pobřeží Spojených států.</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
              {timeline.map((event) => (
                <div key={event.time} className="border border-stone-700 bg-stone-950/40 p-6">
                  <div className="mb-4 flex items-center gap-3 text-amber-300">
                    <Clock3 className="h-5 w-5" />
                    <span className="font-mono text-lg font-semibold">{event.time}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-stone-50">{event.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-400">{event.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-16 text-stone-900 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 flex max-w-6xl items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Archiv služby</p>
                <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">Obrazy, které připomínají</h2>
              </div>
              <Camera className="hidden h-9 w-9 text-amber-700 md:block" />
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <figure key={item.image} className="overflow-hidden border border-stone-200 bg-white shadow-sm">
                  <img src={item.image} alt={item.alt} className="h-64 w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
                  <figcaption className="p-5 text-sm leading-relaxed text-stone-600">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-6xl text-sm text-stone-500">Výběr z archivu NYPD, FDNY.</p>
          </div>
        </section>

        <section className="bg-[#101311] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Vzpomínky</p>
              <h2 className="text-3xl font-bold text-stone-50 md:text-4xl">Jména, která zůstávají</h2>
              <p className="mt-4 leading-relaxed text-stone-400">Úcta k minulosti se promítá i do toho, jak pečujeme o odkaz vlastních kolegů.</p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {memories.map((memory) => (
                <article key={memory.name} className="border border-stone-700 bg-stone-900/60 p-6">
                  <div className="mb-5 flex items-center gap-4">
                    <img src={memory.image} alt={memory.name} className="h-16 w-16 rounded-full object-cover grayscale" />
                    <div>
                      <h3 className="font-semibold text-stone-50">{memory.name}</h3>
                      <p className="text-sm text-amber-300">{memory.role}</p>
                    </div>
                  </div>
                  <Quote className="mb-3 h-5 w-5 text-amber-300" />
                  <p className="text-sm italic leading-relaxed text-stone-300">„{memory.quote}“</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="border-stone-500 bg-transparent text-stone-100 hover:bg-stone-100 hover:text-stone-950">
                <NavLink to="/endofwatch">
                  Projít celý archiv End of Watch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SeptemberRemembrance;