import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Medal, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Command = () => {
  const commandStaff = [
    {
      name: "Jayden Sinns",
      title: "Sheriff",
      experience: "30 let",
      image: "/images/Jayden Sinns.png",
      description: "Jako administrativní lídr s velkými vizemi a smyslem pro dlouhodobé plánování se šerif Sinns zaměřuje na budování přátelského a otevřeného prostředí podporujícího spolupráci a vzájemnou důvěru. Začínal jako zkušený zástupce šerifa a FTO (školící důstojník v terénu), pod jehož vedením prošla řada nováčků – z nichž někteří dnes patří mezi nejlepší. Díky svým schopnostem se stal uznávaným seržantem, který si vytrvale šel za svým snem postoupit do vyššího vedení. To se mu podařilo – nejprve na pozici poručíka, následně Commander pro administrativní činnost, a nakonec byl zvolen šerifem. Jeho cílem je neustále zlepšovat služby a vztahy s komunitou, přičemž se zaměřuje na transparentnost, otevřenou komunikaci a inovace v oblasti bezpečnosti.",
      achievements: ["Absolvent státní policejní akademie s vyznamenáním", "Policejní medaile za záchranu života", "Pochvala za vynikající vedení a přínos k rozvoji oddělení"]
    },
    {
      name: "Peter Wellington",
      title: "Undersheriff",
      experience: "32 let",
      image: "/images/Wellington.png",
      description: "Skvělý přítel a spolehlivý kolega, který se vypracoval z oblasti multimédií a fotografování do role odborníka na administrativu a komunikaci. Díky svému citu pro detail a schopnosti navazovat kontakty přirozeně přešel k práci tiskového mluvčího, kde spojuje profesionální prezentaci s lidským a přátelským přístupem.",
      achievements: ["Komunitní policejní medaile", "Pochvala za vynikající komunikaci a vztahy s veřejností"]
    },
    {
      name: "Anthony Woods",
      title: "Division Chief",
      experience: "25 let",
      image: "/images/Woods.png",
      description: "Anthony Woods nastoupil do prvního turnusu akademie Los Santos Police Department, kde se postupně vypracoval z řadového policisty na hodnost Sergeanta, kde vedl tým policistů a zaměřoval se na posilování vztahů mezi složkami i komunitou. Postupně se stal Sergeantem druhé třídy a byl povýšen i na poručíka. Na této hodnosti strávil největší část kariéry u LSPD. Soustředil se na interní záležitosti, rozvoj oddělení a zlepšování služeb veřejnosti. V červenci roku 2025 po přestupu k Los Santos County Sheriff’s Department byl jmenován kapitánem. Za své zásluhy, profesionální vedení a přínos společnosti obdržel Medaili za vynikající službu a byl povýšen do hodnosti Division Chiefa, kde dnes dohlíží na chod divizí, podporuje komunitní projekty a zajišťuje, aby department plnil nejvyšší standardy bezpečnosti a služeb veřejnosti.",
      achievements: ["Absolvent úplně prvního turnusu policejní akademie", "Čestná uznání za přínos komunitě a vedení týmu", "Medaile za vynikající službu a povýšení do hodnosti Division Chiefa"]
    },
    {
      name: "Daniel Miller",
      title: "Captain",
      experience: "22 let",
      image: "/images/Miller.png",
      description: "Vede své oddělení s odhodláním a profesionalitou, přičemž klade důraz na bezpečnost komunity a rozvoj týmové spolupráce. Jeho přístup kombinuje strategické plánování s lidským vztahem k občanům i kolegům.",
      achievements: ["Ocenění za přínos v rozvoji FTO programu", "Certifikace v oblasti moderních metod výcviku a veden"]
    },
    {
      name: "Raffael Jeter",
      title: "Captain",
      experience: "20 let, 15 let v detektivních týmech",
      image: "/images/Jeter.png",
      description: "Aktuálně společně s celým vedením vede sbor LSSD k lepším zítřkům a svými schopnostmi přispívá k disciplíně sboru.",
      achievements: ["Ocenění z policejní služby", "Odhalení a vyšetření nelegálních buněk"]
    },
    {
      name: "Sean Fell",
      title: "Lieutenant",
      experience: "15 let",
      image: "/images/Fell.png",
      description: "Zodpovědný, klidný pod tlakem, vede s respektem, věří v tým, disciplínu, spravedlnost a rychlá rozhodnutí.",
      achievements: ["Významný Instruktor HSIU Divize"]
    },
    {
      name: "Jacob Cage",
      title: "Lieutenant",
      experience: "32 let",
      image: "/images/Cage.png",
      description: "Spolupráce s detektivním oddělením vedoucí k rozbití celé nelegální organizace. Dopadení pachatele plánujícího únos policejního kolegy. Dlouhodobá služba s prokazatelnými výsledky v ochraně veřejné bezpečnosti",
      achievements: ["Pochvaly od občanů za profesionální a lidský přístup k veřejnosti", "Pochvaly od kolegů z řad policie za týmovou spolupráci a odhodlání při zásazích","Policejní medaile za vynikající službu"]
    },
    {
      name: "Jake Sinns",
      title: "Lieutenant",
      experience: "10 let",
      image: "/images/Jake Sinns.png",
      description: "Celý svůj život zasvětil práci u šerifů a snaží sa byť nápomocný ostatním kolegům i občanům.",
      achievements: ["Medaile za vynikající službu"]
    }
  ];

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
            {commandStaff.map((officer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center min-w-[160px] min-h-[160px]">
                      <img
                        src={officer.image}
                        alt={officer.name}
                        className="h-40 w-40 object-cover rounded-full border-4 border-primary shadow-lg"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-primary">{officer.name}</CardTitle>
                      <CardDescription className="text-lg font-medium">{officer.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Experience */}
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Praxe: {officer.experience}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {officer.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Medal className="h-4 w-4 mr-2" />
                      Klíčové úspěchy
                    </h4>
                    <ul className="space-y-2">
                      {officer.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                    Přijímání inovací a osvědčených postupů pro zvýšení bezpečnosti a kvality služeb.
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