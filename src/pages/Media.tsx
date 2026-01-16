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
// Utility funkce pro ikony a barvy typů assetů
function getIcon(type: string) {
  switch (type) {
    case "image":
      return Image;
    case "video":
      return Video;
    case "document":
      return FileText;
    default:
      return FileText;
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "image":
      return "bg-blue-100 text-blue-600";
    case "video":
      return "bg-purple-100 text-purple-600";
    case "document":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

const Media = () => {
  const pressReleases = [
    {
      date: "2026-01-39",
      title: "Více než jen odznak: LSSD si připomíná Národní den ocenění donucovacích orgánů",
      excerpt: "Los Santos Sheriff's Department si každoročně připomíná Národní den ocenění donucovacích orgánů, aby vyjádřil vděčnost a uznání svým členům za jejich neúnavnou službu a obětavost.",
      category: "Ocenění donucovacích orgánů",
      content: "Každý rok 9. ledna si celá země připomíná National Law Enforcement Appreciation Day. Pro Los Santos Sheriff's Department není tento den jen datem v kalendáři, ale příležitostí k zamyšlení nad tím, co služba veřejnosti skutečně znamená. Být šerifem v Los Santos není jen práce od devíti do pěti. Znamená to být připraven reagovat v okamžiku, kdy ostatní utíkají do bezpečí. Znamená to trávit svátky daleko od rodiny, hlídkovat v ulicích za každého počasí a čelit situacím, které vyžadují nejen fyzickou sílu, ale i empatii a rozvahu. \"Naše motto 'A Tradition of Service' bereme vážně,\" uvedlo vedení LSSD ve svém prohlášení. \"Dnešní den patří všem našim šerifům, od těch v hlídkových vozech, přes detektivy řešící složité případy, až po personál ve věznici. Vážíme si jejich obětí a nasazení.\" V tento den LSSD také děkuje komunitě Los Santos County. Důvěra mezi občany a strážci zákona je klíčová pro fungování bezpečné společnosti. Pokud dnes potkáte šerifa, neváhejte mu pokynout nebo poděkovat. I malé gesto podpory může pro ty, kteří nosí hvězdu na hrudi, znamenat mnoho. Děkujeme, že stojíte při nás. Los Santos Sheriff's Deparment\"A Tradition of Service\"",
      images: [
        "/images/media/2026-01-09/image.png"
      ],
      author: "Sergeant II - Jayden Sinns"
    },
    {
      date: "2025-12-31",
      title: "Štastný nový rok od Los Santos Sheriff's Department",
      excerpt: "Přejeme všem občanům bezpečný a šťastný nový rok 2026! Děkujeme za vaši důvěru a podporu - i v novém roce tu budeme pro vás.",
      category: "Přání",
      content: "Los Santos Sheriff's Department přeje všem občanům bezpečný a šťastný nový rok 2026! Děkujeme za vaši důvěru a podporu v uplynulém roce. Vaše bezpečnost je naší nejvyšší prioritou a i v novém roce budeme pokračovat v naší misi chránit a sloužit komunitě s odhodláním a profesionalitou. Společně můžeme čelit výzvám, které přinese nový rok, a zajistit, že Los Santos zůstane bezpečným místem pro všechny jeho obyvatele. Těšíme se na další rok spolupráce a společných úspěchů. Šťastný nový rok 2026!",
      images: [
        "/images/media/2025-12-31/image.png",
        "/images/media/2025-12-31/image2.png"
      ],
      author: "Sergeant II - Jayden Sinns"
    },
    {
      date: "2025-10-12",
      title: "Změna vedení v Los Santos Sheriff's Department",
      excerpt: "Nový Sheriff Daniel Miller přebírá vedení po Jaydenu Sinnsovi",
      category: "Změny v jednotkách",
      content: "K určitým změnám ve vedení LSSD došlo dne 21.9.2025, kde se dosavadní Sheriff Jayden Sinns rozhodl ze svojí pozice rezignovat z časových důvodů. Za jeho působnosti sbor prošel mnoha reformacemi, také přispěl k perfektní spolupráci s ostatními bezpečnostními sbory či s komunitou a fungování sboru bylo perfektní. Za jeho práci mu patří velké poděkování. Dne 22.9.2025 byl zvolen novým Sheriffem Daniel Miller, který se doposud zapojil do fungování sboru. Prošel výběrovým řízením konajícím policejním komisařstvím. Na pozici Sheriffa se hlásilo nespočet jedinců, jak z řad LSSD tak i LSPD.  Pan Miller prokázal jeho dlouholeté zkušenosti a místo zaujmul zaslouženě. Pod vedením Sheriffa Millera se sbor bude nadále zlepšovat a soustředit na zvyšování efektivity služby, komunikaci s občany a spolupráci s ostatními bezpečnostními sbory. Tímto mu patří velká gratulace a hodně úspěchů do budoucna.",
      images: [
        "/images/media/2025-10-12/image.png"
      ],
      author: "Sergeant - Emma Carter"
    },
    {
      date: "2025-09-30",
      title: "Smutná zpráva: Zemřel Commander Raffael Jeter",
      excerpt: "S hlubokým zármutkem oznamujeme úmrtí dlouholetého člena LSSD, Commander Raffaela Jetera.",
      category: "Smuteční oznámení",
      content: "S hlubokým zármutkem oznamujeme, že nás navždy opustil Commander Raffael Jeter, dlouholetý a respektovaný člen Los Santos Sheriff’s Department. Commander Jeter zasvětil svůj profesní život službě veřejnosti, chránil občany našeho města a svým kolegům byl vzorem statečnosti, profesionality a oddanosti službě. Jeho odchod je nenahraditelnou ztrátou nejen pro naše oddělení, ale i pro celou komunitu, kterou s nasazením chránil. Celé vedení LSSD v této těžké chvíli stojí při jeho rodině a vyjadřuje upřímnou soustrast všem blízkým. Čest jeho památce.",
      images: [
        "/images/media/2025-09-30/image.png"
      ],
      author: "Commander - Jayden Sinns"
    },
    {
      date: "2025-09-19",
      title: "Poslední rozloučení s Lieutenant Jake Sinns",
      excerpt: "Smuteční ceremonie za účasti kolegů a přátel",
      category: "Smuteční oznámení",
      content: "V pátek večer, 19. září 2025, se příslušníci Los Santos Police Department, Los Santos Sheriff’s Department a San Andreas Highway Patrol naposledy rozloučili se svým kolegou, Lieutenant Jake Sinns. Smuteční ceremonie se konala za účasti desítek policistů, přátel a blízkých, kteří přišli uctít jeho památku. Rozloučení začalo v 19:30 na stanici Davis, kde proběhla závěrečná instruktáž a příprava čestné jednotky. Všichni příslušníci nastoupili ve slavnostní uniformě a s černou stuhou přes odznak, jako symbol úcty a sounáležitosti. Pohřební obřad následně pokračoval pietním průvodem, během něhož byla vyjádřena hluboká úcta nejen ze strany bezpečnostních složek, ale i široké veřejnosti. Smuteční chvíle doprovázela minuta ticha a závěrečné vzdání pocty. Lieutenant Jake Sinns byl nejen oddaným policistou, ale i kolegem a přítelem, který se nesmazatelně zapsal do srdcí těch, kteří s ním měli možnost sloužit. Jeho odkaz a služba městu i občanům budou navždy připomínány. Odpočívej v pokoji, Lieutenante Sinnsi.",
      images: [
        "/images/media/2025-09-19/image.png",
        "/images/media/2025-09-19/image2.png",
        "/images/media/2025-09-19/image3.png",
        "/images/media/2025-09-19/image4.png",
        "/images/media/2025-09-19/image5.jpg",
        "/images/media/2025-09-19/image6.jpg",
        "/images/media/2025-09-19/image7.jpg",
        "/images/media/2025-09-19/image8.png",
      ],
      author: "Sheriff - Jayden Sinns"
    },
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
      images: [
        "/images/media/2025-08-28/eow_sinns.png"
      ],
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

      {/*
      type: "document",
      title: "Informační list oddělení",
      description: "Klíčové statistiky, kontakty a přehled oddělení.",
      formats: ["PDF", "DOC"],
      size: "850 KB"
    */}
      {/*
      type: "document",
      title: "Výroční zpráva o kriminalitě",
      description: "Komplexní data a analýzy kriminality za uplynulý rok.",
      formats: ["PDF"],
      size: "3,4 MB"
    */}
      {/*
      type: "video",
      title: "Prezentační video oddělení",
      description: "5minutové video představující činnost LSSD a zapojení komunity.",
      formats: ["MP4", "MOV"],
      size: "45,2 MB"
    */}

  const mediaAssets = [
    {
      type: "image",
      title: "LSSD logo ve vysokém rozlišení",
      description: "Oficiální logo oddělení pro mediální využití.",
      formats: ["PNG"],
      size: "1,3 MB"
    },
    {
      type: "image",
      title: "Oficiální portréty šerifa Lopez",
      description: "Profesionální fotografie šerifa Dina Lopez pro mediální účely.",
      formats: ["PNG"],
      size: "1,67 MB"
    },
    {
      type: "image",
      title: "Fotografie vozového parku",
      description: "Sada fotografií služebních vozidel ve vysokém rozlišení.",
      formats: ["JPG"],
      size: "7,55 MB"
    },
    {
      type: "document",
      title: "Směrnice pro přijímání stížností",
      description: "Přijímání a řešení stížností v rámci sboru LSSD.",
      formats: ["PDF"],
      size: "556 KB"
    },
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

      {/* Media Assets */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Ke stažení</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mediální materiály
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fotografie, videa a dokumenty ve vysoké kvalitě ke stažení pro média i veřejnost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAssets.map((asset, index) => {
              const Icon = getIcon(asset.type);
              const highlightId = asset.title === "Fotografie vozového parku" ? "media-vozovy-park" : undefined;
              let downloadUrl = "";
              let downloadName = "";
              if (asset.title === "Fotografie vozového parku") {
                downloadUrl = "/images/auta/Vozový park LSSD.zip";
                downloadName = "fotografie-vozoveho-parku";
              } else if (asset.title === "LSSD logo ve vysokém rozlišení") {
                downloadUrl = "/images/lssd-logo.png";
                downloadName = "lssd-logo";
              } else if (asset.title === "Oficiální portréty šerifa Lopez") {
                downloadUrl = "/images/sheriff/Sheriff - Foto.zip";
                downloadName = "sheriff-lopez";
              } else if (asset.title === "Směrnice pro přijímání stížností") {
                downloadUrl = "/images/stiznosti/směrnice-prijimani-stiznosti-lssd.pdf";
                downloadName = "směrnice-prijimani-stiznosti-lssd";
              }
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow" id={highlightId}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${getTypeColor(asset.type)}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {asset.type === "image" ? "obrázek" : asset.type === "video" ? "video" : "dokument"}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{asset.title}</CardTitle>
                    <CardDescription>{asset.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Formáty:</span>
                        <span className="font-medium">{asset.formats.join(", ")}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Velikost:</span>
                        <span className="font-medium">{asset.size}</span>
                      </div>
                      {downloadUrl ? (
                        <a href={downloadUrl} download={downloadName} className="block">
                          <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Stáhnout
                          </Button>
                        </a>
                      ) : (
                        <Button className="w-full" disabled>
                          <Download className="mr-2 h-4 w-4" />
                          Stáhnout
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                  <CardTitle>Vedoucí tiskového oddělení</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold">Sergeant II - Jayden Sinns</p>
                    <p className="text-sm text-muted-foreground">Vedoucí tiskového oddělení, tiskový mluvčí</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    {/*<p><strong>Telefon:</strong> (555) 123-4567 kl. 2100</p>*/}
                    <p><strong>Email:</strong> media@lssd.gov</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground text-sm">Kontakt:</span>
                      <a
                        href={`https://discord.com/users/${"275335685970460672"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary hover:underline"
                        aria-label="Otevřít Discord profil"
                      >
                        {/* jednoduchá ikona Discord (inline SVG) */}
                        <svg className="h-4 w-4" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M60.104 4.552A58.9 58.9 0 0 0 46.87.5a41.6 41.6 0 0 0-1.984 4.03 55.1 55.1 0 0 0-14.776 0A41.6 41.6 0 0 0 27.128.5 58.9 58.9 0 0 0 11.996 4.552C3.892 19.22-.317 33.63.78 47.88a59.6 59.6 0 0 0 18.28 9.3 43.3 43.3 0 0 0 4.55-7.4 37.6 37.6 0 0 1-6.77-3.2c.57-.4 1.123-.82 1.654-1.26 13.34 6.2 29.32 6.2 42.6 0 .53.44 1.08.86 1.65 1.26a37.6 37.6 0 0 1-6.77 3.2 43.3 43.3 0 0 0 4.55 7.4 59.6 59.6 0 0 0 18.28-9.3c1.148-14.25-3.964-28.66-11.07-43.328z" fill="currentColor" />
                          <path d="M23.5 34.5c-2.2 0-4-2-4-4.5s1.8-4.5 4-4.5 4 2 4 4.5-1.8 4.5-4 4.5zm24 0c-2.2 0-4-2-4-4.5s1.8-4.5 4-4.5 4 2 4 4.5-1.8 4.5-4 4.5z" fill="#fff" />
                        </svg>
                        <span className="text-sm">Jayden Sinns</span>
                      </a>
                    </div>
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">
                       <strong>Hodiny:</strong> Pondělí – Pátek, 16:00 – 20:00
                     </p>
                   </div>
                 </CardContent>
               </Card>
              {/* druhý kontakt */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Media;