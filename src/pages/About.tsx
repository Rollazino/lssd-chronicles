import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lssdHQ from "@/assets/sbor.png";

const About = () => {
  const timeline = [
    {
      year: "1872",
      title: "Založení oddělení",
      description: "Los Santos Sheriff's Department byl založen pro službu rostoucí populaci okresu."
    },
    {
      year: "1923",
      title: "První motorizovaná hlídka",
      description: "Zavedení motorizovaných hlídkových vozidel revolucionalizovalo možnosti oddělení."
    },
    {
      year: "1965",
      title: "Komunikační centrum",
      description: "Otevření moderního centra tísňové komunikace 911 zlepšilo dobu reakce."
    },
    {
      year: "1987",
      title: "Vznik týmu SWAT",
      description: "Vznik specializované taktické jednotky pro řešení rizikových situací a ochranu komunity."
    },
    {
      year: "1998",
      title: "Rozšíření K9 jednotky",
      description: "Kynologická jednotka rozšířena o detekci drog, sledování a vyhledávání výbušnin."
    },
    {
      year: "2010",
      title: "Letecká podpora",
      description: "Vznik vrtulníkové jednotky pro podporu hlídek a tísňové reakce."
    },
    {
      year: "2020",
      title: "Iniciativa komunitní policie",
      description: "Zahájení komplexních programů pro posílení vztahů s veřejností."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excelentní akreditace",
      description: "Udržení státní akreditace více než 15 let v řadě, což dokládá náš závazek k profesionalitě."
    },
    {
      icon: Users,
      title: "Důvěra komunity",
      description: "92% spokojenost obyvatel díky transparentnímu a respektujícímu přístupu."
    },
    {
      icon: TrendingUp,
      title: "Snížení kriminality",
      description: "Snížení závažné kriminality o 35 % za poslední dekádu díky aktivní komunitní práci."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${lssdHQ})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Náš příběh</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            O Los Santos Sheriff's Department
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Již více než 150 let hrdě sloužíme občanům okresu San Andreas s neochvějným nasazením, profesionalitou a integritou.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Naše mise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Chráníme a sloužíme obyvatelům okresu Los Santos s profesionalitou, integritou a respektem při zachování nejvyšších standardů policejní práce. Zavazujeme se budovat partnerství s komunitou pro zvýšení bezpečnosti a kvality života všech obyvatel.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Naše hodnoty</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Integrita</h4>
                      <p className="text-sm text-muted-foreground">Dodržujeme nejvyšší etické standardy ve všech našich činnostech.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Respekt</h4>
                      <p className="text-sm text-muted-foreground">Jednáme s každým jednotlivcem důstojně a spravedlivě.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Odpovědnost</h4>
                      <p className="text-sm text-muted-foreground">Neseme odpovědnost za naše činy a rozhodnutí.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Excelence</h4>
                      <p className="text-sm text-muted-foreground">Usilujeme o nejvyšší kvalitu ve všem, co děláme.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Naše dědictví</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Historie oddělení
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Klíčové milníky, které formovaly Los Santos Sheriff's Department v profesionální organizaci, jakou je dnes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="secondary" className="font-bold">{event.year}</Badge>
                        <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Ocenění</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Naše úspěchy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jsme hrdí na naše dosažené výsledky a neustálou snahu sloužit komunitě s excelencí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <achievement.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Legacy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Vedení</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Významní bývalí šerifové
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ocenění pro oddané vůdce, kteří formovali tradici služby a excelence našeho oddělení.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Šerif Jack Hill (1985–2010)</h3>
                  <p className="text-muted-foreground mb-4">
                    Vedl oddělení během významné modernizace, včetně zavedení pokročilých technologií a vzniku specializovaných jednotek.
                  </p>
                  <Badge variant="outline">25 let služby</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Šerif Charlie McAvoy (2010–2020)</h3>
                  <p className="text-muted-foreground mb-4">
                    Prosadil komunitní policejní iniciativy a programy diverzity, které posílily vztahy mezi oddělením a komunitou.
                  </p>
                  <Badge variant="outline">10 let služby</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Šerif Danny Miller (2020–2024)</h3>
                  <p className="text-muted-foreground mb-4">
                    Pokračoval v odkazu svých předchůdců a zároveň zlepšil přístup k řešení náročných situací, čímž posílil efektivitu a důvěru v práci LSSD.
                  </p>
                  <Badge variant="outline">10 let služby, 4 roky ve funkci</Badge>
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

export default About;