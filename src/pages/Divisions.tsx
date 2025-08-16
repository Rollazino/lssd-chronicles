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
  Syringe,
  Clock,
  MapPin
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Lucide-style Beaver icon (based on your image)
const BeaverIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Tělo */}
    <path d="M16 32 Q12 48 32 56 Q52 48 48 32 Q48 16 32 16 Q16 16 16 32 Z" />
    {/* Hlava */}
    <ellipse cx="44" cy="24" rx="10" ry="8" />
    {/* Oko */}
    <circle cx="50" cy="22" r="1.5" fill="currentColor" />
    {/* Přední tlapky */}
    <path d="M40 32 Q38 36 42 38" />
    <path d="M44 34 Q46 38 48 36" />
    {/* Zadní tlapky */}
    <path d="M24 48 Q22 52 26 54" />
    {/* Ocas */}
    <path d="M12 48 Q8 60 24 56" />
    {/* Nos */}
    <circle cx="54" cy="26" r="1" fill="currentColor" />
    {/* Linie na těle */}
    <path d="M28 28 Q24 36 32 40" />
    <path d="M36 36 Q40 44 32 48" />
  </svg>
);

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
      personnel: "25+ šerifů",
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
      personnel: "5+ vyšetřovatelů",
      vehicles: "10+ neoznačených vozidel"
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
      personnel: "15 taktických šerifů",
      vehicles: "3 obrněná vozidla, 10+ zásahových vozidel"
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
      personnel: "10+ pilotů a členů posádky",
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
      personnel: "5+ týmů K9",
      vehicles: "10 speciálních vozidel K9"
    },
    {
      icon: Syringe,
      name: "Metro Unit",
      description: "Specializovaná jednotka pro boj s drogovou kriminalitou a zbraněmi.",
      responsibilities: [
        "Detekce drog a omamných látek",
        "Detekce zbraní a střeliva",
        "Sledování a zadržení podezřelých",
        "Sběr důkazů"
      ],
      coverage: "Nasazení v celém okrese",
      personnel: "8+ šerifů",
      vehicles: "15+ speciálních vozidel"
    },
    {
      icon: BeaverIcon,
      name: "Park Rangers",
      description: "Specializovaná jednotka pro ochranu přírody a bezpečnost v přírodních parcích.",
      responsibilities: [
        "Ochrana přírody, životního prostředí a divoké zvěře",
        "Prevence a vyšetřování trestných činů v parcích",
        "Zajištění bezpečnosti návštěvníků",
        "Kontrola dodržování pravidel a předpisů",
      ],
      coverage: "Přírodní parky a chráněné oblasti",
      personnel: "10+ parkových rangerů",
      vehicles: "20+ vozidel",
      huntingInfo: "Pro více informací o hunting licenci, pravidlech lovu a ochraně přírody navštivte naši aplikaci.",
      discord: {
        url: "https://discord.gg/cEWPcT5raS",
        tooltip: "Připojte se na naší aplikace, kde se dozvíte více o národních parcích a jejich ochraně."
      },
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

                  {/* Hunting Info - only for Park Rangers */}
                  {division.huntingInfo && (
                    <div className="mt-4 p-3 bg-muted/40 rounded text-sm text-muted-foreground border-l-4 border-primary">
                      {division.huntingInfo}
                    </div>
                  )}

                  {/* Discord Link - only for Park Rangers */}
                  {division.discord && (
                    <div className="flex items-center space-x-2 mt-4">
                      <a
                        href={division.discord.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/80 transition-colors"
                        title={division.discord.tooltip}
                      >
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                          {/* Discord logo SVG */}
                          <path
                            d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.447.864-.614 1.249a18.508 18.508 0 00-5.487 0 12.683 12.683 0 00-.617-1.249.077.077 0 00-.079-.037A19.736 19.736 0 003.683 4.369a.07.07 0 00-.032.027C.533 8.159-.32 11.87.099 15.539a.082.082 0 00.031.056c2.052 1.507 4.042 2.422 5.993 3.034a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105c-.652-.247-1.272-.547-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.12.099.246.197.372.291a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.892.076.076 0 00-.04.106c.36.699.772 1.364 1.225 1.994a.076.076 0 00.084.027c1.957-.612 3.947-1.527 5.999-3.034a.077.077 0 00.031-.055c.5-4.1-.838-7.783-3.549-11.143a.061.061 0 00-.031-.028zM8.02 14.331c-.789 0-1.438-.724-1.438-1.617 0-.893.637-1.617 1.438-1.617.807 0 1.45.732 1.438 1.617 0 .893-.637 1.617-1.438 1.617zm7.974 0c-.789 0-1.438-.724-1.438-1.617 0-.893.637-1.617 1.438-1.617.807 0 1.45.732 1.438 1.617 0 .893-.631 1.617-1.438 1.617z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="ml-2">Aplikace</span>
                      </a>
                    </div>
                  )}

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