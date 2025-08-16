import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  GraduationCap, 
  Heart, 
  DollarSign, 
  Calendar,
  Users,
  CheckCircle,
  Clock
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import recruitmentBg from "@/assets/uvod.png"; // uprav cestu dle skutečného umístění

const Recruitment = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Konkurenční plat",
      description: "Nástupní plat od 200$ s pravidelným navyšováním a výkonnostními bonusy."
    },
    {
      icon: Heart,
      title: "Zdravotní benefity",
      description: "Komplexní zdravotní, zubní a oční péče pro vás i vaši rodinu."
    },
    {
      icon: GraduationCap,
      title: "Podpora vzdělávání",
      description: "Proplácení školného a možnosti dalšího vzdělávání."
    },
    {
      icon: Calendar,
      title: "Důchodový plán",
      description: "Vynikající penzijní plán s možností předčasného důchodu po 20 letech služby."
    }
  ];

  const requirements = [
    "Minimální věk 21 let, maximální 45 let",
    "Americké občanství",
    "Středoškolské vzdělání nebo ekvivalent",
    "Bez závažných trestných činů nebo přestupků",
    "Platný řidičský průkaz a čistý záznam",
    "Fyzická a psychická schopnost vykonávat práci",
    "Kompletní prověření minulosti a psychologické vyšetření",
    "Mluvit plynule a reprezentativně anglicky",
    "Nesmíte mít žádný další služební poměr (EMS/FD atd.)"
  ];

  const process = [
    {
      step: "1",
      title: "Podání přihlášky",
      description: "Odešlete online přihlášku včetně všech požadovaných dokumentů a certifikátů.",
      timeframe: "Zpracování 1–2 týdny"
    },
    {
      step: "2",
      title: "Prověření minulosti",
      description: "Komplexní prověření včetně pohovorů a ověření referencí.",
      timeframe: "1-2 týdny"
    },
    {
      step: "3",
      title: "Fyzické testy",
      description: "Splňte test fyzické zdatnosti prokazující požadovanou úroveň kondice.",
      timeframe: "Ve stejný den jako nástup do akademie"
    },
    {
      step: "4",
      title: "Výcviky v akademii",
      description: "Intenzivní teoretický i praktický výcvik pod vedením zkušených instruktorů.",
      timeframe: "2–3 týdny"
    },
    {
      step: "5",
      title: "Závěrečný test",
      description: "Písemná a praktická zkouška, po úspěšném absolvování slavnostní ceremonie.",
      timeframe: "1 den"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="py-24 bg-gradient-to-br from-primary/10 to-accent/10 relative"
        style={{
          backgroundImage: `url(${recruitmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="outline" className="mb-6 text-primary-foreground">Přidejte se k nám</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Začněte kariéru u šerifů
          </h1>
          <p className="text-xl text-primary-foreground max-w-3xl mx-auto leading-relaxed">
            Připojte se k Los Santos Sheriff's Department a mějte pozitivní vliv na svou komunitu. 
            Hledáme odhodlané jedince připravené chránit a sloužit.
          </p>
          <div className="mt-8">
            <a href="https://forms.gle/QjbCLukX6KjjKRcv5" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8">
                <Shield className="mr-2 h-5 w-5" />
                Přidejte se k nám
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Zaměstnanecké benefity</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Komplexní balíček výhod
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vážíme si našich šerifů a poskytujeme jim vynikající benefity pro podporu jejich kariéry i rodiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Podmínky přijetí</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Minimální požadavky
              </h2>
              <p className="text-muted-foreground">
                Pro přijetí k Los Santos Sheriff's Department musí uchazeči splnit následující podmínky:
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Průběh přijímacího řízení</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Jak se přihlásit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Důkladný výběrový proces zajišťuje, že do týmu přijímáme ty nejlepší kandidáty.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{step.timeframe}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Připraveni sloužit své komunitě?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Udělejte první krok ke smysluplné kariéře u šerifského sboru. Přidejte se k nám a měňte svět k lepšímu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/QjbCLukX6KjjKRcv5" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8">
              <Shield className="mr-2 h-5 w-5" />
              Přihlásit se online
            </Button>
            </a>

            {/*
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Users className="mr-2 h-5 w-5" />
              Navštívit informační schůzku
            </Button>
            */}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruitment;