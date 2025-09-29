import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Shield, 
  Calendar,
  Heart,
  Building,
  Phone,
  MapPin
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Community = () => {
  const programs = [
    /*{
      icon: Shield,
      title: "Sousedská hlídka",
      description: "Zapojení obyvatel do spolupráce s policií pro prevenci kriminality a budování bezpečnějších komunit.",
      features: ["Měsíční setkání", "Školení v prevenci kriminality", "Přímá komunikace s hlídkovými policisty", "Systém komunitních upozornění"],
      contact: "Policista Martinez"
    },
    {
      icon: GraduationCap,
      title: "Programy pro mládež",
      description: "Zapojení mladých lidí prostřednictvím vzdělávacích a volnočasových aktivit, které podporují pozitivní vztahy s policií.",
      features: ["Programy po škole", "Letní tábory", "Mentorské příležitosti", "Vzdělávací workshopy"],
      contact: "Detektiv Johnson"
    },
    {
      icon: Users,
      title: "Komunitní policie",
      description: "Budování partnerství mezi policií a občany pro řešení problémů a zlepšení kvality života.",
      features: ["Pravidelná komunitní fóra", "Partnerství pro řešení problémů", "Programy pěších hlídek", "Setkání s občany"],
      contact: "Poručík Davis"
    },
    {
      icon: Heart,
      title: "Bezpečí seniorů",
      description: "Speciální programy zaměřené na ochranu a podporu našich seniorů.",
      features: ["Bezpečnostní kontroly domovů", "Vzdělávání o prevenci podvodů", "Programy zdravotních upozornění", "Pravidelné kontroly pohody"],
      contact: "Policista Thompson"
    },
    {
      icon: Building,
      title: "Partnerství s podniky",
      description: "Spolupráce s místními podniky na vytvoření bezpečnějších obchodních oblastí a prevenci kriminality.",
      features: ["Bezpečnostní konzultace", "Školení zaměstnanců", "Rychlé reakční protokoly", "Plánování prevence kriminality"],
      contact: "Seržant Wilson"
    },*/
    {
      icon: Calendar,
      title: "Komunitní akce",
      description: "Organizace a účast na akcích pro posílení vztahů mezi policií a komunitou.",
      features: ["Národní noc venku", "Bezpečnostní veletrhy", "Jízdy s policií", "Káva s policistou"],
      contact: "Policista Garcia"
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-02-15",
      title: "Káva s policistou – stanice centrum",
      time: "8:00 – 10:00",
      location: "Central Café, Hlavní ulice",
      description: "Přijďte na neformální rozhovor u kávy. Bez agendy, jen povídání."
    },
    {
      date: "2024-02-22",
      title: "Finále mládežnické basketbalové ligy",
      time: "18:00 – 20:00",
      location: "Tělocvična komunitního centra",
      description: "Povzbuzujte naše mládežnické týmy a oslavte zapojení komunity."
    },
    {
      date: "2024-03-05",
      title: "Workshop bezpečí seniorů",
      time: "14:00 – 16:00",
      location: "Auditorium centra pro seniory",
      description: "Naučte se o prevenci podvodů a bezpečnosti domova."
    },
    {
      date: "2024-03-15",
      title: "Školení sousedské hlídky",
      time: "19:00 – 21:00",
      location: "Konferenční místnost policejní stanice",
      description: "Školení pro nové i stávající koordinátory sousedské hlídky."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Zapojení komunity</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Programy pro komunitu - WIP
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Budujeme silnější a bezpečnější komunity prostřednictvím partnerství, zapojení a společné odpovědnosti. 
            Společně vytváříme trvalé pozitivní změny.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Naše programy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Komunitní iniciativy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Objevte různé programy, které posilují vztahy mezi policií a komunitou. Programy stále rozšiřujeme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Program Features */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Hlavní prvky programu</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Kontakt: {program.contact}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Více informací
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Kalendář akcí</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nadcházející komunitní akce
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Připojte se k našim akcím a spojte se s komunitou i místní policií.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="text-center md:text-left">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 inline-block">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <p className="font-semibold text-primary mt-2">
                          {new Date(event.date).toLocaleDateString("cs-CZ")}
                        </p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{event.description}</p>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{event.location}</span>
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <Button>
                          Registrovat se
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Zapojte se</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Jak můžete pomoci
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Bezpečnost komunity je společná odpovědnost. Zde jsou způsoby, jak se můžete aktivně zapojit 
              a přispět k bezpečnější a silnější komunitě.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-3">Zapojte se do programu</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Připojte se k některému z našich komunitních programů a ovlivněte dění přímo.
                  </p>
                  <Button variant="outline" size="sm">
                    Najít programy
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-3">Dobrovolnictví</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Věnujte svůj čas a dovednosti na podporu bezpečnostních iniciativ v komunitě.
                  </p>
                  <Button variant="outline" size="sm">
                    Staňte se dobrovolníkem
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-3">Zůstaňte v kontaktu</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sledujte naše aktuality a buďte informováni o bezpečnostních otázkách v komunitě.
                  </p>
                  <Button variant="outline" size="sm">
                    Kontaktujte nás
                  </Button>
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

export default Community;