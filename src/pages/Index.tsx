import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Shield, Users, Car, Phone, AlertTriangle, FileText, Calendar, Award, ChevronRight, Building, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lssdHQ from "@/assets/sbor.png";
import sheriffPortrait from "@/assets/Sheriff.png";
import patrolFleet from "@/assets/auata.png";

//low - aktualizace, medium - důležité, high - priorita

const Index = () => {
  const announcements = [
    {
      date: "2025-08-15",
      title: "Zvýšení bezpečnostních opatření v Los Santos",
      description: "Z důvodu zvýšené kriminality v oblasti.",
      content: "Vzhledem k aktuální bezpečnostní situaci přechází Los Santos Sheriff's Department do stavu střední stupeň ohrožení. Tento krok byl přijat v reakci na zvýšené riziko ohrožení bezpečnosti občanů a majetku. Veškeré kroky a opatření jsou směřovány k ochraně veřejnosti a zajištění pořádku v ulicích. Žádáme obyvatele, aby dbali pokynů šerifů a zachovali klid.",
      author: "Undersheriff - Peter Wellington",
      priority: "high"
    },
    {
      date: "2024-08-13",
      title: "Dočasné uzavření stanice LSSD - Davis",
      description: "V důsledku požáru na stanici - Davis.",
      content: "V souvislosti s nedávným požárem na stanici Sheriff’s Department v Davis byla budova vážně poškozena a je dočasně mimo provoz. V současné době již na místě pracují demoliční služby a zároveň byly zahájeny přípravné práce na výstavbě nové stanice. Prosíme veřejnost, aby respektovala omezení pohybu v okolí objektu. Veškeré služby pro občany zůstávají zajištěny prostřednictvím ostatních stanovišť.",
      images: [
        "/images/info/2025-08-13/image.jpg",
        "/images/info/2025-08-13/image2.jpg",
      ],
      author: "Sheriff - Jayden Sinns",
      priority: "medium"
    },
  ];

  const quickStats = [
    { icon: Shield, label: "Počet sloužících šerifů", value: "40+" },
    { icon: Users, label: "Obyvatel chráněných", value: "2,1M" },
    { icon: Car, label: "Typů služebních vozidel", value: "30+" },
    { icon: Building, label: "Stanice", value: "3" }
  ];

  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const visibleAnnouncements = showAll ? announcements : announcements.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lssdHQ})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Los Santos Sheriff's Department
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Sloužíme naší komunitě s integritou, profesionalitou a odhodláním.
            Chráníme a sloužíme okresu San Andreas již více než 150 let.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Tísňová linka: 911
            </Button>
            {/*
            <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Linka pro neurgentní případy: (555) 123-4567
            </Button>
            */}
          </div>
        </div>
      </section>

      {/* Sheriff's Welcome Message */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={sheriffPortrait}
                  alt="Sheriff Jayden Sinns"
                  className="w-full max-w-md mx-auto rounded-lg professional-shadow"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4">Uvítací zpráva</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Zpráva od šerifa Sinnse
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    „Vítejte na webových stránkách Los Santos Sheriff's Department. Jako váš šerif
                    mám tu čest vést tento výjimečný tým oddaných profesionálů, kteří
                    neúnavně pracují na bezpečnosti naší komunity.“
                  </p>
                  <p>
                    „Náš úřad je postaven na základech integrity, respektu a odpovědnosti.
                    Zavazujeme se budovat silná partnerství s komunitami, kterým sloužíme,
                    a zajistit, aby se každý občan cítil chráněný a vážený.“
                  </p>
                  <p>
                    „Doporučuji vám prozkoumat naše stránky a dozvědět se více o našich službách,
                    programech a vynikajících mužích a ženách, kteří tvoří rodinu LSSD.“
                  </p>
                </div>
                <div className="pt-4">
                  <p className="font-semibold text-primary">Jayden Sinns</p>
                  <p className="text-sm text-muted-foreground">Sheriff of LSSD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Announcements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Aktuality z komunity</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nejnovější oznámení
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sledujte nejnovější zprávy, iniciativy a důležité informace z Los Santos Sheriff's Department.
              </p>
            </div>

            <div className="space-y-6">
              {visibleAnnouncements.map((announcement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge
                            variant={announcement.priority === "high" ? "destructive" :
                              announcement.priority === "medium" ? "default" : "secondary"}
                          >
                            {announcement.priority === "high" ? "Priorita" :
                              announcement.priority === "medium" ? "Důležité" : "Aktualizace"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(announcement.date).toLocaleDateString("cs-CZ")}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {announcement.description}
                        </p>
                        {expandedIndex === index && (
                          <div className="mt-4 text-muted-foreground">
                            {announcement.content}
                            {announcement.images && announcement.images.length > 0 && (
                              <div className="flex flex-wrap gap-4 mt-6">
                                {announcement.images.map((img, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex-1 ${
                                      announcement.images.length === 2
                                        ? "basis-1/2"
                                        : announcement.images.length > 2 && idx < 2
                                        ? "basis-1/2"
                                        : "basis-full"
                                    }`}
                                    style={{ minWidth: announcement.images.length > 1 && idx < 2 ? "300px" : "100%" }}
                                  >
                                    <img
                                      src={img}
                                      alt={`Obrázek k oznámení ${announcement.title}`}
                                      className="w-full h-auto rounded-lg border"
                                      style={{ objectFit: "contain", maxHeight: "500px" }}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="mt-6 text-right text-sm italic text-primary">
                              {announcement.author && <>Autor: {announcement.author}</>}
                            </div>
                          </div>
                        )}
                      </div>
                      <button
                        className="ml-4 p-2 rounded-full hover:bg-accent transition-colors"
                        onClick={() =>
                          expandedIndex === index
                            ? setExpandedIndex(null)
                            : setExpandedIndex(index)
                        }
                        aria-label={expandedIndex === index ? "Skrýt oznámení" : "Zobrazit celé oznámení"}
                      >
                        <ChevronRight
                          className={`h-5 w-5 text-muted-foreground transition-transform ${expandedIndex === index ? "rotate-90" : ""}`}
                        />
                      </button>
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
                {showAll ? "Zobrazit méně" : "Zobrazit všechna oznámení"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Služby oddělení</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Rychlý přístup
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Najděte rychle a snadno potřebné zdroje a informace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Přidejte se k nám</CardTitle>
                <CardDescription>
                  Prozkoumejte kariérní příležitosti a zjistěte více o našem náboru.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavLink to="/recruitment">
                  <Button className="w-full">
                    Více informací
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            {/*
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Komunitní programy</CardTitle>
                <CardDescription>
                  Objevte naše komunitní iniciativy a programy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavLink to="/community">
                  <Button className="w-full">
                    Zapojte se
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
            */}

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Naše oddělení</CardTitle>
                <CardDescription>
                  Seznamte se s našimi specializovanými jednotkami a jejich odpovědnostmi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavLink to="/divisions">
                  <Button className="w-full">
                    Prozkoumat oddělení
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4">Náš vozový park</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Moderní vybavení a vozidla
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Los Santos Sheriff's Department udržuje moderní vozový park a specializované vybavení,
                    aby naši šerifové mohli efektivně reagovat na jakoukoli situaci.
                  </p>
                  <p>
                    Náš vozový park zahrnuje hlídková auta, motocykly, vrtulníky a
                    specializovaná vozidla pro jednotky SWAT, K9, dopravní dohled a mnoho dalšího.
                  </p>
                </div>

                {/*
                <div className="flex space-x-4">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Specifikace vozového parku
                  </Button>
                  <NavLink to="/media">
                    <Button>
                      Zobrazit galerii
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </NavLink>
                </div>
                */}

              </div>
              <div>
                <img
                  src={patrolFleet}
                  alt="Vozový park LSSD"
                  className="w-full rounded-lg professional-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
