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
      description: "Vede oddělení s integritou a vizí, šerif Sinns zasvětil svou kariéru komunitně orientované policii a veřejné bezpečnosti.",
      achievements: ["Absolvent státní policejní akademie s vyznamenáním", "Cena za vedení komunity 2024", "Medaile za excelenci v policejní službě"]
    },
    {
      name: "Peter Wellington",
      title: "Undersheriff",
      experience: "32 let",
      description: "Dozoruje každodenní provoz a strategické plánování. Odbornice na krizové řízení a meziorganizační koordinaci.",
      achievements: ["Certifikace krizového řízení", "Cena za excelenci ve vedení", "Medaile za inovace ve veřejné bezpečnosti"]
    },
    {
      name: "Anthony Woods",
      title: "Division Chief",
      experience: "25 let",
      image: "/images/Woods.png",
      description: "Anthony Woods nastoupil do prvního turnusu akademie Los Santos Police Department, kde se postupně vypracoval z řadového policisty na hodnost Sergeanta, kde vedl tým policistů a zaměřoval se na posilování vztahů mezi složkami i komunitou. Postupně se stal Sergeantem druhé třídy a byl povýšen i na poručíka. Na této hodnosti strávil největší část kariéry u LSPD. Soustředil se na interní záležitosti, rozvoj oddělení a zlepšování služeb veřejnosti. V červenci roku 2025 po přestupu k Los Santos County Sheriff’s Department byl jmenován kapitánem. Za své zásluhy, profesionální vedení a přínos společnosti obdržel Medaili za vynikající službu a byl povýšen do hodnosti Division Chiefa, kde dnes dohlíží na chod divizí, podporuje komunitní projekty a zajišťuje, aby department plnil nejvyšší standardy bezpečnosti a služeb veřejnosti.",
      achievements: ["Absolvent úplně prvního turnusu policejní akademie", "Čestná uznání za přinos komunitě a vední týmu", "Medaile za vynikající službu a povýšení do hodnosti Division Chiefa"]
    },
    {
      name: "Daniel Miller",
      title: "Captain",
      experience: "22 let",
      description: "Vede kriminální oddělení a specializované vyšetřovací jednotky s odborností na závažné trestné činy a forenzní analýzu.",
      achievements: ["Detektiv roku 2019", "Excelence v kriminálním vyšetřování", "Certifikace pokročilé forenzní analýzy"]
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
      experience: "18 let",
      description: "Vyvíjí a realizuje programy pro komunitu a iniciativy pro zapojení veřejnosti.",
      achievements: ["Cena za partnerství s komunitou", "Excelence ve veřejných vztazích", "Vedení v oblasti diverzity a inkluze"]
    },
    {
      name: "Jacob Cage",
      title: "Lieutenant",
      experience: "18 let",
      description: "Vyvíjí a realizuje programy pro komunitu a iniciativy pro zapojení veřejnosti.",
      achievements: ["Cena za partnerství s komunitou", "Excelence ve veřejných vztazích", "Vedení v oblasti diverzity a inkluze"]
    },
    {
      name: "Jake Sinns",
      title: "Lieutenant",
      experience: "18 let",
      description: "Vyvíjí a realizuje programy pro komunitu a iniciativy pro zapojení veřejnosti.",
      achievements: ["Cena za partnerství s komunitou", "Excelence ve veřejných vztazích", "Vedení v oblasti diverzity a inkluze"]
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