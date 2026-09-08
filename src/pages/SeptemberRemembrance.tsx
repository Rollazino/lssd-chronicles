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