import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Image,
  Video,
  Calendar,
  Download,
  Eye,
  Users
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Media = () => {
  const pressReleases = [
    {
      date: "2025-09-09",
      title: "LSSD zavádí možnost hlídkování na kole – bezpečnost i zdraví ruku v ruce",
      excerpt: "Los Santos Sheriff’s Department rozšiřuje své možnosti výkonu služby a nabízí členům jednotky příležitost hlídkovat také na jízdních kolech.",
      category: "Novinky z oddělení",
      content: "Los Santos Sheriff’s Department rozšiřuje své možnosti výkonu služby a nabízí členům příležitost hlídkovat také na jízdních kolech. Tento způsob patrolování přináší nejen efektivnější pohyb v hustě osídlených částech města a parcích, ale zároveň podporuje fyzickou kondici samotných příslušníků. Cyklohlídky umožňují šerifům rychle reagovat tam, kde by se vozidla obtížně dostávala – pěší zóny, úzké ulice nebo veřejné prostranství plná lidí. Zároveň jde o přístup, který přibližuje šerify komunitě a posiluje osobní kontakt s občany. Nejde však jen o výkon služby – LSSD tímto krokem podporuje také zdravý životní styl svých členů. Pohyb na kole prospívá kondici, psychické pohodě a celkové odolnosti, což se odráží i v kvalitě každodenní práce. Los Santos tak získává nejen bezpečnější ulice, ale i šerify, kteří dělají něco pro své zdraví a zároveň pro svou komunitu.",
      author: "Sheriff - Jayden Sinns"
    },
      {
      date: "2025-08-28",
      title: "Smutná zpráva: Zemřel Lieutenant Jake Sinns",
      excerpt: "S hlubokým zármutkem oznamujeme úmrtí dlouholetého člena LSSD, Lieutenant Jake Sinnse.",
      category: "Smuteční oznámení",
      content: "S hlubokým zármutkem oznamujeme, že nás navždy opustil Lieutenant Jake Sinns, dlouholetý a respektovaný člen Los Santos Sheriff’s Department. Lieutenant Sinns zasvětil svůj profesní život službě veřejnosti, chránil občany našeho města a svým kolegům byl vzorem statečnosti, profesionality a oddanosti službě. Jeho odchod je nenahraditelnou ztrátou nejen pro naše oddělení, ale i pro celou komunitu, kterou s nasazením chránil. Jake Sinns byl také bratrancem současného šerifa Jaydena Sinnse. Celé vedení LSSD v této těžké chvíli stojí při jeho rodině a vyjadřuje upřímnou soustrast všem blízkým. Čest jeho památce.",
      author: "Undersheriff - Peter Wellington"
    },
      {
      date: "2025-08-19",
      title: "Oficiální vyjádření LSSD k anonymnímu příspěvku",
      excerpt: "Oficiální vyjádření Los Santos Sheriff's Department k anonymnímu příspěvku",
      category: "Oficiální vyjádření",
      content: "Ozbrojené složky San Andreas a hlavně LSSD vnímají obsah anonymního příspěvku, který se šíří na internetu, jako mimořádně závažnou a nepřijatelnou formu vyhrožování našim příslušníkům. Takovéto texty nejsou projevem svobody slova, ale pokusem šířit strach, zastrašovat šerify, policisty a ohrožovat jejich rodiny. Každý útok na bezpečnostní složky je zároveň útokem na bezpečnost občanů a na fungování státu jako celku. Chceme jasně sdělit: Nenecháme se zastrašit a nikdy neustoupíme před anonymními výhrůžkami. Naši příslušníci denně riskují své životy, aby chránili společnost před kriminalitou a nebezpečím. Tento závazek zůstává pevný a neměnný. Vyšetřovací orgány již podnikají potřebné kroky k identifikaci původce tohoto příspěvku. Každý, kdo se bude pokoušet ohrožovat ozbrojené složky nebo jejich členy, musí počítat s tím, že bude brán k odpovědnosti v plném rozsahu zákona. Zároveň děkujeme veřejnosti za podporu a důvěru. Jsme si vědomi, že drtivá většina občanů stojí na straně zákona, pořádku a bezpečnosti. Bezpečnost a důvěra jsou základními pilíři společnosti. A tyto pilíře budeme bránit vždy a za všech okolností.",
      author: "Sheriff - Jayden Sinns"
    },
    {
      date: "2025-08-03",
      title: "Vyjádření LSSD ke změně ve vedení San Andreas Highway Patrol",
      excerpt: "LSSD vítá nové vedení SAHP a očekává zlepšení spolupráce.",
      category: "Změny v jednotkách",
      content: "Los Santos Sheriff's Department bere na vědomí změny ve vedení San Andreas Highway Patrol, které byly v uplynulých dnech oznámeny. Přestože LSSD nebylo přímým účastníkem tohoto rozhodovacího procesu, pokládáme za důležité se k situaci vyjádřit vzhledem k dosavadní zkušenosti se spoluprací mezi našimi složkami. Jako LSSD jsme se v minulosti i přes veškerou snahu setkávali s komplikovanou komunikací s vedením SAHP. Ačkoliv existovali jednotlivci, se kterými byla spolupráce možná a kteří byli ochotni konzultovat a hledat řešení napříč složkami, celkový přístup většiny vedení i některých řadových příslušníků byl často vnímán jako arogantní, v některých případech až konfrontační. Domníváme se, že právě tento přístup mohl být jedním z důvodů, proč se u části veřejnosti vytvořil negativní obraz o SAHP. S jmenováním pana Martina Wiessnera do čela San Andreas Highway Patrol vnímáme možnost obratu k lepší kultuře spolupráce, otevřené komunikace a profesionálního vystupování navenek i dovnitř systému. Jsme přesvědčeni, že nový velitel má předpoklady k tomu, aby vrátil důvěru veřejnosti a napravil reputaci, kterou utrpěla činností jednotlivců. LSSD bude nové vedení SAHP v tomto procesu plně podporovat. Věříme, že vzájemná spolupráce mezi složkami může být silnější než kdy dřív, pokud bude založena na respektu, otevřenosti a společném cíli – bezpečnosti občanů San Andreas.",
      author: "Sheriff - Jayden Sinns"
    },
    {
      date: "2025-07-09",
      title: "Protest proti policejní brutalitě v Los Santos",
      excerpt: "Demonstrace občanů proti údajným případům policejní brutality a požadavek na transparentnost.",
      category: "Bezpečnostní opatření",
      content: "Dne 9. 7. 2025 došlo v oblasti Southside, konkrétně na parkovišti před provozovnou YouTool, k neohlášenému shromáždění občanů reagujících na veřejně šířenou výzvu. Výzva, která se šířila prostřednictvím soukromých zpráv a sociálních sítí, vyzývala k otevřenému odporu vůči příslušníkům bezpečnostních složek a vyjadřovala nenávist k jejich práci a přítomnosti. Shromáždění nebylo nahlášeno podle zákona, a na místo proto preventivně vyrazili příslušníci Los Santos Sheriff Department, Los Santos Police Department a San Andreas Highway Patrol. Všechny nasazené jednotky byly vybaveny kompletní výstrojí pro potlačení nepokojů, přičemž na místo byla vyslána i dvě vodní děla, připravená v případě potřeby použít tlakové vodní prostředky k rozptýlení davu. Počet osob na místě byl odhadován na více než 30, přičemž podle zjištění se většina účastníků rekrutovala z problémových částí Downtown LS. Situace krátce po příjezdu jednotek eskalovala. Několik jednotlivců vytáhlo kovové baseballové pálky, někteří použili tasery proti příslušníkům bezpečnostních složek. Následně došlo k hození Molotovova koktejlu na policejní linii, přičemž zasáhl zem v blízkosti jednoho z vozidel hasičského sboru. V reakci na tuto hrozbu, která mohla mít za následek těžké zranění nebo smrt, byla vůči útočníkovi použita služební zbraň. Krátce nato další osoba, která se pokusila uniknout z místa incidentu, vytáhla střelnou zbraň a zahájila palbu na šerifa, což vyústilo v přímý střet, během něhož byla osoba zasažena a zadržena. Celkově byly při zákroku použity standardní donucovací prostředky – štíty, teleskopické obušky, vodní děla a v případě bezprostředního ohrožení i střelné zbraně – vše v souladu s platnou legislativou a taktickými předpisy. Na místě působil také připravený lékařský tým z Los Santos Fire Department, který měl dočasný medic point na hasičské stanici v Downtown LS. Poskytl ošetření několika osobám, včetně civilistů a zraněných příslušníků. Po stabilizaci situace bylo zadrženo 20 osob, které čelí obviněním z útoku na příslušníky bezpečnostních složek, výtržnictví a v některých případech i z pokusu o ublížení na zdraví. Policie zdůrazňuje, že právo na shromažďování musí být uplatňováno zákonným způsobem a bez násilí. K násilným incidentům, útokům na bezpečnostní složky či pokusům o poškození veřejného nebo soukromého majetku bude přistupováno s nulovou tolerancí. Bezpečnostní složky jsou připraveny i nadále chránit bezpečnost obyvatel a garantovat pořádek ve městě Los Santos.",
      images: [
        "/images/media/2025-07-09/image.png",
      ],
      author: "Sergeant - Miguel Wilder"
    },
    {
      date: "2025-05-11",
      title: "Nový Sheriff přivítal nováčky s odznakem Sheriff’s Department",
      excerpt: "Nový šerif Jayden Sinns přivítal nové členy sboru a předal jim odznaky.",
      category: "Příběhy z oddělení",
      content: "Úřad šerifa si v posledních dnech prošel významnou administrativní změnou, která se nejvíce dotkla samotného vedení. Do pozice Sheriffa nastoupil Jayden Sinns, zkušený a respektovaný deputy s dlouholetou praxí ve veřejné službě. Jedním z jeho prvních oficiálních aktů ve funkci byla slavnostní ceremonie přijetí nových členů do řad Sheriff’s Department. Čerství absolventi policejní akademie během slavnostního aktu veřejně složili přísahu, ve které se zavázali chránit občany, dodržovat zákony a jednat čestně ve všech ohledech své služby. Každému nováčkovi byl poté předán symbol jejich nově nabyté odpovědnosti – oficiální odznak Sheriff’s Department, zhotovený ze zlata a stříbra. Ten představuje nejen čest a autoritu, ale také závazek k bezúhonné službě. Celý ceremoniál byl doprovázen hymnou státu a sboru, které umocnily slavnostní atmosféru. Událost se konala za účasti rodinných příslušníků nových strážců pořádku, kolegů z řad veteránů a několika zástupců městské rady. Sheriff Sinns ve svém projevu vyzdvihl důležitost týmové spolupráce, důvěry mezi občany a policií a potřebu neustálého vzdělávání i sebereflexe. „Být šerifem není jen titul – je to služba. A stejně tak být součástí našeho sboru není jen práce – je to poslání,“ uvedl na závěr svého vystoupení. S příchodem nového vedení a nadšených nováčků tak Sheriff’s Department vykročil do nové kapitoly – s cílem posílit bezpečnost, transparentnost a respekt k právu v celé oblasti.",
      images: [
        "/images/media/2025-05-11/Sheriff.png",
        "/images/media/2025-05-11/image.png",
        "/images/media/2025-05-11/image2.png"
      ],
      author: "Undersheriff - Peter Wellington"
    },
    {
      date: "2020-03-05",
      title: "Los Santos Sheriff's Department má nové vedení",
      excerpt: "Nové vedení LSSD představilo své plány a cíle pro zlepšení bezpečnosti a služeb.",
      category: "Změny v jednotkách",
      content: "Po odchodu bývalého šerifa Charlieho McAvoye bylo zahájeno výběrové řízení na pozici Šerifa, přihlásit se mohli členové na hodnosti poručík a výše. Vzhledem k závažnosti pozice probíhalo výběrové řízení 48 hodin od uvolnění dané kanceláře. Výběrové řízení vyhrál tehdejší Commander Danny Miller. Do postu byl usazen po boku Undersheriffa Petera Wellingtona. Společně doplnili užší vedení sboru o kolegy Jayden Sinns na pozici Commandera, a Daniel Miller na pozici Captain. Společně budou pokračovat v odkazu pana McAvoye, čestně a spravedlivě reprezentovat stát San Andreas a odznak LSSD.",
      images: [
        "/images/media/novy serif.png"
      ],
      author: "Undersheriff - Peter Wellington"
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Zobrazit pouze první 3 nebo všechny podle stavu
  const visibleReleases = showAll ? pressReleases : pressReleases.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Mediální centrum</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Mediální zdroje
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Získejte tiskové zprávy, fotografie, videa a další mediální materiály pro zpravodajství
            a informace o Los Santos Sheriff's Department.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Nejnovější zprávy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tiskové zprávy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sledujte aktuální zprávy a novinky Los Santos Sheriff's Department.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {visibleReleases.map((release, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="secondary">{release.category}</Badge>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(release.date).toLocaleDateString("cs-CZ")}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {release.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {release.excerpt}
                        </p>
                        {expandedIndex === index && (
                          <div className="mt-4 text-muted-foreground">
                            {release.content}
                            {release.images && release.images.length > 0 && (
                              <div className="flex flex-wrap gap-4 mt-6">
                                {release.images.map((img, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex-1 ${
                                      release.images.length === 2
                                        ? "basis-1/2"
                                        : release.images.length > 2 && idx < 2
                                        ? "basis-1/2"
                                        : "basis-full"
                                    }`}
                                    style={{ minWidth: release.images.length > 1 && idx < 2 ? "300px" : "100%" }}
                                  >
                                    <img
                                      src={img}
                                      alt={`Obrázek k článku ${release.title}`}
                                      className="w-full h-auto rounded-lg border"
                                      style={{ objectFit: "contain", maxHeight: "500px" }}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            {/* Podpis autora */}
                            <div className="mt-6 text-right text-sm italic text-primary">
                              {release.author && <>Autor: {release.author}</>}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Button
                          variant="outline"
                          onClick={() =>
                            expandedIndex === index
                              ? setExpandedIndex(null)
                              : setExpandedIndex(index)
                          }
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          {expandedIndex === index ? "Skrýt článek" : "Zobrazit více"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  setShowAll((prev) => !prev);
                  setExpandedIndex(null);
                }}
              >
                <FileText className="mr-2 h-4 w-4" />
                {showAll ? "Zobrazit méně" : "Zobrazit všechny tiskové zprávy"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Dotazy médií</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Kontaktní informace
              </h2>
              <p className="text-muted-foreground">
                Pro mediální dotazy, žádosti o rozhovor nebo další informace kontaktujte našeho tiskového mluvčího.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Tiskový mluvčí</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold">Sheriff - Jayden Sinns</p>
                    <p className="text-sm text-muted-foreground">Tiskový mluvčí</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    {/*<p><strong>Telefon:</strong> (555) 123-4567 kl. 2100</p>*/}
                    <p><strong>Email:</strong> media@lssd.gov</p>
                    <p className="text-sm text-muted-foreground">DC: freezik</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Hodiny:</strong> Pondělí – Pátek, 16:00 – 20:00
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;