import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Medal, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Adjusted z-index of the overlay to ensure Navigation is clickable
/*const UnderConstructionOverlay = () => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-yellow-400 mb-4">Ve výstavbě</h1>
      <p className="text-lg text-white">Proběhla změna vedení, na aktualizaci tvrdě pracujeme.</p>
    </div>
  </div>
);*/

const Command = () => {
  const commandStaff = [
    {
      name: "Dino Lopez",
      title: "Sheriff",
      experience: "33 let",
      image: "/images/Lopez3.png",
      description: "V čele LSSD stavím na pevných základech a hodnotách, které jsem si osvojil v rodině s hlubokou policejní historií. Kráčet ve stopách svého otce pro mě znamená spojit osvědčené principy policejní práce s moderními metodami řízení. Mým cílem je vést sbor tak, aby byl hrdým nástupcem generací, které chránily zákon před námi",
      achievements: ["Krirové řízení a komunikace", "Zavedení certifikací krizového vyjednávání"],
      status: "alive"
    },
    {
      name: "Ned Tanner",
      title: "Undersheriff",
      experience: "15 let",
      image: "/images/Tanner.jpg",
      description: "Narodil se v Texasu po studiu se přestěhoval do Los Santos, celý život zasvětil práce pro úřad okresního šerifa LS kde vykonává funkci vedení sboru mezi jeho hodnoty patří vymáhaní práva, ctění spravedlnosti a ochrana občanu",
      achievements: ["Úspěšně absolvovaná policejní akademie Los Santos", "Medaile za záslužnou službu", "Medaile za výbornou službu"],
      status: "alive"
    },
    {
      name: "Ruby White",
      title: "Assistant Sheriff",
      experience: "10 let",
      image: "/images/White.png",
      description: "Vede svou službu s profesionalitou, důrazem na odpovědnost a respekt k pravidlům. Poručík Ruby White je známá svým pevným postojem, spolehlivostí v terénu a schopností rozhodovat se i v náročných situacích.",
      achievements: ["Medaile za záslužnou službu", "Dlouhodobě stabilní výkon ve velení","Prokázané velitelské schopnosti v operařní praxi", "Captain of Academy"],
      status: "alive"
    },
    {
      name: "Elliot Cage",
      title: "Commander",
      experience: "5 let",
      image: "/images/Elliot Cage.png",
      description: "Elliot Cage je dlhoročným pilierom LSSD, ktorý si svoju povesť vybudoval na nekompromisnom dodržiavaní zákona a chladnej hlave v tých najvypätejších situáciách. Od svojho nástupu do zboru preukazoval výnimočný inštinkt pre prácu v teréne, čo ho prirodzene doviedlo až k hodnosti Sergeant. Medzi kolegami je známy ako priamy a čestný líder, ktorý sa nebojí prevziať zodpovednosť v momentoch, kedy ide o sekundy. Jeho prítomnosť v službe je pre mladších deputy zárukou bezpečia a odborného vedenia.",
      achievements: ["Medaila za vynikíjúcu službu"],
      status: "alive"
    }, 
    {
      name: "Michael Callahan",
      title: "Captain",
      experience: "5 let",
      image: "/images/Callahan.png",
      description: "Během služby u LSSD prošel akademií s nadprůměrnými praktickými výsledky a následně se podílel na desítkách zásahů, při kterých přispěl k záchraně lidských životů. Je známý klidným rozhodováním v krizových situacích a spolehlivým výkonem v terénu. Kromě operativní činnosti se aktivně zapojil do interního rozvoje oddělení, kdy navrhl úpravy služební aplikace zjednodušující administrativu a každodenní práci deputies. Díky kombinaci zkušeností, technického přehledu a schopnosti vést ostatní byl jmenován do hodnosti Sergeant.",
      achievements: ["Iniciativa pro zlepšení služební aplikace"],
      status: "alive"
    },
    {
      name: "Jayden Sinns",
      title: "Lieutenant",
      experience: "38 let",
      image: "/images/Jayden Sinns.png",
      description: "Jako administrativní talent s velkými vizemi a smyslem pro dlouhodobé plánování se Lieutenant Sinns zaměřuje na budování přátelského a otevřeného prostředí podporujícího spolupráci a vzájemnou důvěru. Svou kariéru zahájil jako zkušený deputy a FTO, pod jehož vedením prošla řada nováčků, z nichž někteří dnes patří mezi nejlepší členy sboru. Díky svým schopnostem, vytrvalosti a profesionálnímu přístupu si postupně vybudoval respekt napříč oddělením a dosáhl hodnosti Lieutenant. V této roli se nyní především soustředí na PR a mediální prezentaci LSSD, posilování vztahů s veřejností a budování pozitivního obrazu sboru. Klade důraz na transparentnost, otevřenou komunikaci a moderní přístup k informování komunity, přičemž aktivně podporuje inovace v oblasti bezpečnosti a práce s médii.",
      achievements: ["Absolvent státní policejní akademie s vyznamenáním", "Policejní medaile za záchranu života", "Pochvala za vynikající vedení a přínos k rozvoji oddělení"],
      status: "alive"
    },
    {
      name: "Aiden Pearce",
      title: "Lieutenant",
      experience: "",
      image: "/images/Pearce.png",
      description: "",
      achievements: [""],
      status: "alive"
    },
    {
      name: "Bryan Walker",
      title: "Lieutenant",
      experience: "",
      image: "/images/Walker.jpg",
      description: "",
      achievements: [""],
      status: "alive"
    },
    /*
    {
      name: "Jayden Sinns",
      title: "Commander",
      experience: "30 let",
      image: "/images/Jayden Sinns.png",
      description: "Jako administrativní lídr s velkými vizemi a smyslem pro dlouhodobé plánování se šerif Sinns zaměřuje na budování přátelského a otevřeného prostředí podporujícího spolupráci a vzájemnou důvěru. Začínal jako zkušený zástupce šerifa a FTO (školící důstojník v terénu), pod jehož vedením prošla řada nováčků – z nichž někteří dnes patří mezi nejlepší. Díky svým schopnostem se stal uznávaným seržantem, který si vytrvale šel za svým snem postoupit do vyššího vedení. To se mu podařilo – nejprve na pozici poručíka, následně Commander pro administrativní činnost, a nakonec byl zvolen šerifem. Jeho cílem je neustále zlepšovat služby a vztahy s komunitou, přičemž se zaměřuje na transparentnost, otevřenou komunikaci a inovace v oblasti bezpečnosti.",
      achievements: ["Absolvent státní policejní akademie s vyznamenáním", "Policejní medaile za záchranu života", "Pochvala za vynikající vedení a přínos k rozvoji oddělení"],
      status: "alive"
    }
      */
  ];
  
  const supervisorStaff = [
    {
      name: "James Hathron",
      title: "Sergeant II",
      experience: "31 let",
      image: "/images/Hathron.jpg",
      description: "James Hathron začal jako klasický Officer u LSPD a následně se za brzkou dobu stal vedením jednotky K-9 Unit ktrerá v té době teprve začínala u policie působit. Díky jeho vedení a zkušenosti u SAR týmu ve Washingtonu pomohl divizi začít fungovat a dnes operuje policie s více než 16 K-9 jednotky. Při službě u K-9 Unit pomalu budoval kariéru u detektivního oddělení kde se za několik let později stal i Cmd. Detective Bureau V součastnosti stále vede jednotku K-9 ale nyní už není zazařen u Detective Bureau ale u Los Santos Sheriff Department kde slouží jako Sergeant. Zkušenosti které nabral u Detective Bureau se snaží využít i u LSSD převážně u prvních momentů místa činu a provádění odborných výslechů a prvních kroků.",
      achievements: ["Vedení detektivního oddělení na pozici Commander", "Zodpovědné řízení a rozvoj K-9 jednotky", "Medaile za vynikajicí službu", "Vyšetření vraždy a zkorumpovaného přislušníka policie"],
      status: "alive"
    },
    {
      name: "Bruno Cunha",
      title: "Sergeant II",
      experience: "15 let",
      image: "/images/Cunha.png",
      description: "",
      achievements: ["Člen jednotky SWAT", "MBU instruktor"],
      status: "alive"
    },
    /*
    {
      name: "Mason Cooper",
      title: "Sergeant",
      experience: "15 let",
      image: "/images/Cooper.jpg",
      description: "Jmenuju se Mason Cooper a jsem seržant u Los Santos County Sheriff's Department. Ve službě jsem patnáct let. Když jsem nastupoval, byl jsem mladej kluk, co si myslel, že ví, co je správný a co špatný. Dneska už vím, že svět takhle jednoduchej není. Začínal jsem v patrolách v částech Los Sabtis, kde se člověk rychle naučí dávat pozor. První roky mě změnily nejvíc. Viděl jsem věci, na který se nedá připravit – gangy, domácí násilí, nehody, u kterých bys nejradši zavřel oči a dělal, že to není skutečný. Ale taky jsem zažil chvíle, kdy jsem někomu fakt pomohl. A právě ty tě drží nad vodou. Postupně jsem si vybudoval respekt. Ne tím, že bych byl nejtvrdší, ale tím, že jsem byl spolehlivej. Když jsem na směně, lidi ví, že udělám všechno pro to, aby se situace zvládla. Dneska vedu vlastní tým. Už to není jen o mně – nesu odpovědnost za každýho z nich. Rozhoduju vteřiny před tím, než se něco pokazí, a učím nový kluky, jak přežít první roky ve službě. Protože to je ta nejtěžší část. Nejsem žádnej hrdina. Mám za sebou rozvod, pár nocí, kdy jsem nespal, a vzpomínky, který se občas vrací. Naučíš se s tím žít, ale nikdy to úplně nezmizí. Můj přístup je jednoduchej: „Nechci hrdiny. Chci, aby se všichni vrátili domů živí.“ Po patnácti letech už nehledám uznání ani postup. Vím, že tahle práce není o slávě. Je o tom být tam, když to ostatní nezvládnou. A i když jsem už párkrát přemýšlel, že s tím skončím… vždycky si tu uniformu oblíknu znovu.",
      achievements: [""],
      status: "alive"
    },
    */
    {
      name: "Kenji Kiroshi",
      title: "Sergeant",
      experience: "",
      image: "/images/Kiroshi.jpg",
      description: "",
      achievements: [],
      status: "alive"
    },
    {
      name: "Noah Cromwell",
      title: "Sergeant",
      experience: "",
      image: "/images/Cromwell.jpg",
      description: "",
      achievements: [],
      status: "alive"
    },
    {
      name: "Theodore Kinsley",
      title: "Sergeant",
      experience: "",
      image: "/images/Kinsley.jpg",
      description: "",
      achievements: [],
      status: "alive"
    },
    {
      name: "Glenn Hawkins",
      title: "Sergeant",
      experience: "",
      image: "/images/Hawkins.jpg",
      description: "",
      achievements: [],
      status: "alive"
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation className="relative z-50" />


      {/* Overlay */}
      {/*<UnderConstructionOverlay />*/}

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Vedení</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Vedení oddělení
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seznamte se se zkušeným vedením, které řídí Los Santos Sheriff's Department s oddaností, odborností a neochvějným závazkem k veřejné bezpečnosti.
          </p>
        </div>
      </section>

      {/* Command Staff Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Command Staff
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commandStaff.map((officer, index) => {
              const isDead = officer.status === "dead";
              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow relative overflow-hidden ${
                    isDead ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border border-gray-700" : ""
                  }`}
                  style={isDead ? { filter: "grayscale(1)" } : {}}
                >
                  {/* RIP Ribbon */}
                  {isDead && (
                    <div className="absolute top-6 left-[-40px] rotate-[-20deg] z-20">
                      <span className="flex items-center bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white px-6 py-2 rounded-lg shadow-lg font-bold text-sm tracking-wide border-2 border-white">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2">
                          <path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7s7 3.14 7 7c0 3.86-3.14 7-7 7zm-1-7V7h2v4h-2zm0 2h2v2h-2v-2z" fill="currentColor"/>
                        </svg>
                        RIP
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-6 mb-4">
                      <div className={`p-5 rounded-2xl flex items-center justify-center min-w-[160px] min-h-[160px] relative ${isDead ? "bg-black/40" : "bg-primary/10"}`}>
                        <img
                          src={officer.image}
                          alt={officer.name}
                          className={`h-40 w-40 object-cover rounded-full border-4 shadow-lg transition-all duration-300 ${
                            isDead
                              ? "border-gray-700 grayscale brightness-90 blur-[1px]"
                              : "border-primary"
                          }`}
                        />
                        {/* Optional: candle icon at bottom for dead */}
                        {isDead && (
                          <span className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path d="M12 2v2m0 0c-1.1 0-2 .9-2 2v2h4V6c0-1.1-.9-2-2-2zm-4 6v10a2 2 0 002 2h4a2 2 0 002-2V8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </div>
                      <div>
                        <CardTitle className={`text-3xl ${isDead ? "text-white drop-shadow" : "text-primary"}`}>
                          {officer.name}
                        </CardTitle>
                        <CardDescription className={`text-lg font-medium ${isDead ? "text-gray-300" : ""}`}>
                          {officer.title}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className={`h-4 w-4 ${isDead ? "text-gray-400" : "text-accent"}`} />
                      <span className={`text-sm font-medium ${isDead ? "text-gray-300" : ""}`}>
                        Praxe: {officer.experience}
                      </span>
                    </div>
                    <p className={`leading-relaxed ${isDead ? "text-gray-300 italic" : "text-muted-foreground"}`}>
                      {officer.description}
                    </p>
                    <div>
                      <h4 className={`font-semibold mb-3 flex items-center ${isDead ? "text-white" : "text-primary"}`}>
                        <Medal className={`h-4 w-4 mr-2 ${isDead ? "text-gray-400" : ""}`} />
                        Klíčové úspěchy
                      </h4>
                      <ul className="space-y-2">
                        {officer.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDead ? "bg-gray-500" : "bg-primary"}`} />
                            <span className={`text-sm ${isDead ? "text-gray-300" : "text-muted-foreground"}`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supervisor Staff Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Supervisor Staff
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supervisorStaff.map((officer, index) => {
              const isDead = officer.status === "dead";
              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow relative overflow-hidden ${
                    isDead ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border border-gray-700" : ""
                  }`}
                  style={isDead ? { filter: "grayscale(1)" } : {}}
                >
                  {/* RIP Ribbon */}
                  {isDead && (
                    <div className="absolute top-6 left-[-40px] rotate-[-20deg] z-20">
                      <span className="flex items-center bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white px-6 py-2 rounded-lg shadow-lg font-bold text-sm tracking-wide border-2 border-white">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2">
                          <path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7s7 3.14 7 7c0 3.86-3.14 7-7 7zm-1-7V7h2v4h-2zm0 2h2v2h-2v-2z" fill="currentColor"/>
                        </svg>
                        RIP
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-6 mb-4">
                      <div className={`p-5 rounded-2xl flex items-center justify-center min-w-[160px] min-h-[160px] relative ${isDead ? "bg-black/40" : "bg-primary/10"}`}>
                        <img
                          src={officer.image}
                          alt={officer.name}
                          className={`h-40 w-40 object-cover rounded-full border-4 shadow-lg transition-all duration-300 ${
                            isDead
                              ? "border-gray-700 grayscale brightness-90 blur-[1px]"
                              : "border-primary"
                          }`}
                        />
                        {/* Optional: candle icon at bottom for dead */}
                        {isDead && (
                          <span className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path d="M12 2v2m0 0c-1.1 0-2 .9-2 2v2h4V6c0-1.1-.9-2-2-2zm-4 6v10a2 2 0 002 2h4a2 2 0 002-2V8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </div>
                      <div>
                        <CardTitle className={`text-3xl ${isDead ? "text-white drop-shadow" : "text-primary"}`}>
                          {officer.name}
                        </CardTitle>
                        <CardDescription className={`text-lg font-medium ${isDead ? "text-gray-300" : ""}`}>
                          {officer.title}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className={`h-4 w-4 ${isDead ? "text-gray-400" : "text-accent"}`} />
                      <span className={`text-sm font-medium ${isDead ? "text-gray-300" : ""}`}>
                        Praxe: {officer.experience}
                      </span>
                    </div>
                    <p className={`leading-relaxed ${isDead ? "text-gray-300 italic" : "text-muted-foreground"}`}>
                      {officer.description}
                    </p>
                    <div>
                      <h4 className={`font-semibold mb-3 flex items-center ${isDead ? "text-white" : "text-primary"}`}>
                        <Medal className={`h-4 w-4 mr-2 ${isDead ? "text-gray-400" : ""}`} />
                        Klíčové úspěchy
                      </h4>
                      <ul className="space-y-2">
                        {officer.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDead ? "bg-gray-500" : "bg-primary"}`} />
                            <span className={`text-sm ${isDead ? "text-gray-300" : "text-muted-foreground"}`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
     
      {/* Leadership Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Filosofie</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Principy vedení
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Naše vedení jde příkladem a ztělesňuje hodnoty integrity, odpovědnosti a služby, které definují šerifský úřad Los Santos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-primary mb-3">Služebné vedení</h3>
                  <p className="text-sm text-muted-foreground">
                    Vedení prostřednictvím služby komunitě a podpory našich policistů v jejich poslání.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-primary mb-3">Nepřetržité zlepšování</h3>
                  <p className="text-sm text-muted-foreground">
                    Přijímání inovací a osvědčených praktik pro zvýšení bezpečnosti a kvality služeb.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-primary mb-3">Transparentnost</h3>
                  <p className="text-sm text-muted-foreground">
                    Udržování otevřené komunikace s komunitou a odpovědnosti ve všech operacích.
                  </p>
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

export default Command;