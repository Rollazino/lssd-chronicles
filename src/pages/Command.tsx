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
      image: "/images/Lopez2.png",
      description: "V čele LSSD stavím na pevných základech a hodnotách, které jsem si osvojil v rodině s hlubokou policejní historií. Kráčet ve stopách svého otce pro mě znamená spojit osvědčené principy policejní práce s moderními metodami řízení. Mým cílem je vést sbor tak, aby byl hrdým nástupcem generací, které chránily zákon před námi",
      achievements: ["Krirové řízení a komunikace", "Zavedení certifikací krizového vyjednávání"],
      status: "alive"
    },
    {
      name: "Ned Tanner",
      title: "Captain",
      experience: "15 let",
      image: "/images/Tanner.png",
      description: "Narodil se v Texasu po studiu se přestěhoval do Los Santos, celý život zasvětil práce pro úřad okresního šerifa LS kde vykonává funkci vedení sboru mezi jeho hodnoty patří vymáhaní práva, ctění spravedlnosti a ochrana občanu",
      achievements: ["Úspěšně absolvovaná policejní akademie Los Santos", "Medaile za záslužnou službu", "Medaile za výbornou službu"],
      status: "alive"
    },
    {
      name: "Ruby White",
      title: "Lieutenant",
      experience: "4 roky",
      image: "/images/White.png",
      description: "Vede svou službu s profesionalitou, důrazem na odpovědnost a respekt k pravidlům. Poručík Ruby White je známá svým pevným postojem, spolehlivostí v terénu a schopností rozhodovat se i v náročných situacích.",
      achievements: ["Medaile za záslužnou službu", "Dlouhodobě stabilní výkon ve velení","Prokázané velitelské schopnosti v operařní praxi"],
      status: "alive"
    },
    {
      name: "Nathan Collins",
      title: "Lieutenant",
      experience: "15 let",
      image: "/images/Collins.png",
      description: "Nathan Collins se z absolventa policejní akademie postupně vypracoval až na hodnost Lieutenant u Los Santos Sheriff’s Department. Díky svému nasazení a spolehlivosti se stal členem zásahové jednotky SWAT, kde působí jako flight instructor a věnuje se výcviku pilotů pro letecké operace. Současně zastává funkci Assistant Commandera v Air Support Division, kde se podílí na řízení divize. Preferuje profesionální a slušné vystupování a dokáže zachovat chladnou hlavu i v náročných situacích.",
      achievements: ["Absolvent policejní akademie s vyznamenáním", "Člen SWAT týmu", "Flight Instructor pro letecké operace"],
      status: "alive"
    }/*
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
      name: "Jayden Sinns",
      title: "Sergeant II",
      experience: "35 let",
      image: "/images/Jayden Sinns.png",
      description: "Jako administrativní talent s velkými vizemi a smyslem pro dlouhodobé plánování se Sergeant II Sinns zaměřuje na budování přátelského a otevřeného prostředí podporujícího spolupráci a vzájemnou důvěru. Začínal jako zkušený deputy a FTO, pod jehož vedením prošla řada nováčků, z nichž někteří dnes patří mezi nejlepší. Díky svým schopnostem a vytrvalosti si vybudoval respekt a dosáhl hodnosti Sergeant II. I z této pozice si jde tvrdě za svým snem postoupit jednoho dne do nejvyššího vedení. Jeho aktuálním cílem je neustále zlepšovat služby a vztahy s komunitou, přičemž klade důraz na transparentnost, otevřenou komunikaci a inovace v oblasti bezpečnosti.",
      achievements: ["Absolvent státní policejní akademie s vyznamenáním", "Policejní medaile za záchranu života", "Pochvala za vynikající vedení a přínos k rozvoji oddělení"],
      status: "alive"
    },
    {
      name: "Aiden Pearce",
      title: "Sergeant II",
      experience: "",
      image: "/images/Pearce.png",
      description: "",
      achievements: [""],
      status: "alive"
    },
    {
      name: "Michael Callahan",
      title: "Sergeant",
      experience: "",
      image: "/images/Callahan.png",
      description: "",
      achievements: [""],
      status: "alive"
    },
        {
      name: "Elliot Cage",
      title: "Sergeant",
      experience: "",
      image: "/images/Elliot Cage.png",
      description: "",
      achievements: [""],
      status: "alive"
    },
        {
      name: "Andrew Sinns",
      title: "Sergeant",
      experience: "",
      image: "/images/Andrew Sinns.png",
      description: "",
      achievements: [""],
      status: "alive"
    },
        {
      name: "Ryan Brooks",
      title: "Sergeant",
      experience: "",
      image: "/images/Brooks.png",
      description: "",
      achievements: [""],
      status: "alive"
    },
        {
      name: "Nathan Rivers",
      title: "Sergeant",
      experience: "",
      image: "/images/Rivers.png",
      description: "",
      achievements: [""],
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