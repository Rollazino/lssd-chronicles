import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Medal, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Command = () => {
  const commandStaff = [
    {
      name: "Daniel Miller",
      title: "Sheriff",
      experience: "22 let",
      image: "/images/Miller.png",
      description: "Vede své oddělení s odhodláním a profesionalitou, přičemž klade důraz na bezpečnost komunity a rozvoj týmové spolupráce. Jeho přístup kombinuje strategické plánování s lidským vztahem k občanům i kolegům. Výrazně přispěl k rozvoji FTO programu, čímž podpořil vzdělávání a profesní růst nových členů týmu. Je známý svou schopností vést v krizových situacích a motivovat ostatní k dosažení nejlepších výsledků. Díky svému klidnému, ale důraznému přístupu si získal respekt jak v rámci oddělení, tak u široké veřejnosti. Jeho prioritou je nejen efektivní vymáhání práva, ale také budování důvěry a partnerství s komunitami.",
      achievements: ["Ocenění za přínos v rozvoji FTO programu", "Certifikace v oblasti moderních metod výcviku a veden"],
      status: "alive"
    },
    {
      name: "Peter Wellington",
      title: "Undersheriff",
      experience: "32 let",
      image: "/images/Wellington.png",
      description: "Skvělý přítel a spolehlivý kolega, který se vypracoval z oblasti multimédií a fotografování do role odborníka na administrativu a komunikaci. Díky svému citu pro detail a schopnosti navazovat kontakty přirozeně přešel k práci tiskového mluvčího, kde spojuje profesionální prezentaci s lidským a přátelským přístupem.",
      achievements: ["Komunitní policejní medaile", "Pochvala za vynikající komunikaci a vztahy s veřejností"],
      status: "alive"
    },
    {
      name: "Anthony Woods",
      title: "Division Chief",
      experience: "25 let",
      image: "/images/Woods.png",
      description: "Anthony Woods nastoupil do prvního turnusu akademie Los Santos Police Department, kde se postupně vypracoval z řadového policisty na hodnost Sergeanta, kde vedl tým policistů a zaměřoval se na posilování vztahů mezi složkami i komunitou. Postupně se stal Sergeantem druhé třídy a byl povýšen i na poručíka. Na této hodnosti strávil největší část kariéry u LSPD. Soustředil se na interní záležitosti, rozvoj oddělení a zlepšování služeb veřejnosti. V červenci roku 2025 po přestupu k Los Santos County Sheriff’s Department byl jmenován kapitánem. Za své zásluhy, profesionální vedení a přínos společnosti obdržel Medaili za vynikající službu a byl povýšen do hodnosti Division Chiefa, kde dnes dohlíží na chod divizí, podporuje komunitní projekty a zajišťuje, aby department plnil nejvyšší standardy bezpečnosti a služeb veřejnosti.",
      achievements: ["Absolvent úplně prvního turnusu policejní akademie", "Čestná uznání za přínos komunitě a vedení týmu", "Medaile za vynikající službu a povýšení do hodnosti Division Chiefa"],
      status: "alive"
    },
    {
      name: "Jayden Sinns",
      title: "Commander",
      experience: "30 let",
      image: "/images/Jayden Sinns.png",
      description: "Jako administrativní lídr s velkými vizemi a smyslem pro dlouhodobé plánování se šerif Sinns zaměřuje na budování přátelského a otevřeného prostředí podporujícího spolupráci a vzájemnou důvěru. Začínal jako zkušený zástupce šerifa a FTO (školící důstojník v terénu), pod jehož vedením prošla řada nováčků – z nichž někteří dnes patří mezi nejlepší. Díky svým schopnostem se stal uznávaným seržantem, který si vytrvale šel za svým snem postoupit do vyššího vedení. To se mu podařilo – nejprve na pozici poručíka, následně Commander pro administrativní činnost, a nakonec byl zvolen šerifem. Jeho cílem je neustále zlepšovat služby a vztahy s komunitou, přičemž se zaměřuje na transparentnost, otevřenou komunikaci a inovace v oblasti bezpečnosti.",
      achievements: ["Absolvent státní policejní akademie s vyznamenáním", "Policejní medaile za záchranu života", "Pochvala za vynikající vedení a přínos k rozvoji oddělení"],
      status: "alive"
    },
    {
      name: "Raffael Jeter",
      title: "Commander",
      experience: "20 let, 15 let v detektivních týmech",
      image: "/images/Jeter.png",
      description: "Aktuálně společně s celým vedením vede sbor LSSD k lepším zítřkům a svými schopnostmi přispívá k disciplíně sboru.",
      achievements: ["Ocenění za policejní služby", "Odhalení a vyšetření nelegálních buněk"],
      status: "dead"
    },
    {
      name: "Jacob Cage",
      title: "Captain",
      experience: "32 let",
      image: "/images/Cage.png",
      description: "Spolupráce s detektivním oddělením vedoucí k rozbití celé nelegální organizace. Dopadení pachatele plánujícího únos policejního kolegy. Dlouhodobá služba s prokazatelnými výsledky v ochraně veřejné bezpečnosti",
      achievements: ["Pochvaly od občanů za profesionální a lidský přístup k veřejnosti", "Pochvaly od kolegů z řad policie za týmovou spolupráci a odhodlání při zásazích","Policejní medaile za vynikající službu"],
      status: "alive"
    },
    {
      name: "William Greenwood",
      title: "Lieutenant",
      experience: "",
      image: "/images/Greenwood.png",
      description: "",
      achievements: [""],
      status: "alive"
    }
  ];
      {/*
      name: "Sean Fell",
      title: "Captain",
      experience: "15 let",
      image: "/images/Fell.png",
      description: "Zodpovědný, klidný pod tlakem, vede s respektem, věří v tým, disciplínu, spravedlnost a rychlá rozhodnutí.",
      achievements: ["Významný Instruktor HSIU Divize"],
      status: "alive"
    */}

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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

      {/* Command Staff */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
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