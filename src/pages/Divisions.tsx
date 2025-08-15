import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  Search, 
  Shield, 
  Plane, 
  Dog, 
  AlertTriangle,
  Users,
  Clock,
  MapPin
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Divisions = () => {
  const divisions = [
    {
      icon: Car,
      name: "Patrol Unit",
      description: "Naši šerifové v první linii zajišťují nepřetržitou ochranu komunity a pohotovostní zásahy.",
      responsibilities: [
        "Tísňové zásahy a první pomoc",
        "Dopravní dohled a vyšetřování nehod",
        "Prevence kriminality a komunitní policejní práce",
        "Prvotní vyšetřování nahlášených trestných činů",
        "Veřejná bezpečnost a udržování pořádku"
      ],
      coverage: "Celý okres",
      personnel: "40+ šerifů",
      vehicles: "20+ hlídkových vozidel"
    },
    {
      icon: AlertTriangle,
      name: "Traffic Unit",
      description: "Specializovaní šerifové zaměření na bezpečnost silničního provozu a vymáhání dopravních předpisů.",
      responsibilities: [
        "Dohled na dálnicích a hlavních komunikacích",
        "Vyšetřování závažných dopravních nehod",
        "Kontrola nákladních vozidel",
        "Kontrola rychlosti a alkoholu za volantem",
        "Vzdělávací programy pro bezpečnost silničního provozu"
      ],
      coverage: "Hlavní silnice a dálnice",
      personnel: "45 policistů",
      vehicles: "15 motocyklů, 8 hlídkových vozů"
    },
    {
      icon: Search,
      name: "Detective Bureau",
      description: "Zkušení vyšetřovatelé řeší složité trestní případy a následná šetření.",
      responsibilities: [
        "Vyšetřování závažných trestných činů",
        "Sběr a analýza důkazů",
        "Výslechy svědků a příprava případů",
        "Spolupráce se státním zastupitelstvím",
        "Vyšetřování nevyřešených případů"
      ],
      coverage: "Vyšetřování v celém okrese",
      personnel: "35 vyšetřovatelů",
      vehicles: "12 neoznačených vozidel"
    },
    {
      icon: Shield,
      name: "Special Weapons and Tactics (SWAT)",
      description: "Elitní taktická jednotka pro vysoce rizikové operace a mimořádné situace.",
      responsibilities: [
        "Zajištění vysoce rizikových zatykačů",
        "Záchrana rukojmí",
        "Protiteroristické aktivity",
        "Ochrana významných osob",
        "Krizová intervence a vyjednávání"
      ],
      coverage: "Taktická podpora v celém okrese",
      personnel: "20 taktických policistů",
      vehicles: "3 obrněná vozidla, 2 velitelské vozy"
    },
    {
      icon: Plane,
      name: "Air Support Unit",
      description: "Vrtulníkové operace poskytující vzdušnou podporu pozemním jednotkám a záchranným službám.",
      responsibilities: [
        "Vzdušné hlídky a sledování",
        "Pátrací a záchranné operace",
        "Letecká evakuace",
        "Dohled nad dopravou",
        "Koordinace tísňových zásahů"
      ],
      coverage: "Celý vzdušný prostor okresu",
      personnel: "12 pilotů a členů posádky",
      vehicles: "4 vrtulníky"
    },
    {
      icon: Dog,
      name: "K-9 Unit",
      description: "Speciálně vycvičené týmy psovodů pro detekci a zadržení.",
      responsibilities: [
        "Detekce drog a omamných látek",
        "Vyhledávání výbušnin",
        "Sledování a zadržení podezřelých",
        "Sběr důkazů",
        "Vzdělávání veřejnosti a ukázky"
      ],
      coverage: "Nasazení v celém okrese",
      personnel: "8 týmů K9",
      vehicles: "8 speciálních vozidel K9"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Specializované jednotky</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Naše divize
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Los Santos Sheriff's Department provozuje několik specializovaných jednotek, 
            které jsou odborně vyškoleny pro konkrétní oblasti policejní práce a služby veřejnosti.
          </p>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <division.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{division.name}</CardTitle>
                      <CardDescription className="text-base">{division.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Hlavní činnosti</h4>
                    <ul className="space-y-2">
                      {division.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Division Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Působnost</p>
                        <p className="text-sm font-medium">{division.coverage}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Personál</p>
                        <p className="text-sm font-medium">{division.personnel}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Vozový park</p>
                        <p className="text-sm font-medium">{division.vehicles}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Division Coordination */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Koordinace</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Jednotné velení
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Všechny jednotky spolupracují v rámci jednotné struktury velení pro efektivní využití zdrojů, 
              plynulou komunikaci a účinnou reakci na události vyžadující více specializací.
            </p>
            
            <Card className="text-left">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Mezioddělová spolupráce</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Společné výcvikové cvičení a scénáře</li>
                      <li>• Sdílené zpravodajské a informační systémy</li>
                      <li>• Koordinované reakční protokoly</li>
                      <li>• Příležitosti k vzájemnému školení</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Operační středisko 24/7</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Centrální dispečink a koordinace</li>
                      <li>• Sledování zdrojů v reálném čase</li>
                      <li>• Řízení pohotovostních zásahů</li>
                      <li>• Komunikační uzel mezi agenturami</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Divisions;