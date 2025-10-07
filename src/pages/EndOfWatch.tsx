import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Medal, Calendar } from "lucide-react";

// Deceased colleagues with date of death and memorial quote
const deceasedStaff = [
  {
    name: "Raffael Jeter",
    title: "Commander",
    experience: "20 let, 15 let v detektivních týmech",
    image: "/images/Jeter.png",      
    description: "Aktuálně společně s celým vedením vede sbor LSSD k lepším zítřkům a svými schopnostmi přispívá k disciplíně sboru.",
    achievements: ["Ocenění za policejní služby", "Odhalení a vyšetření nelegálních buněk"],
    status: "dead",
    dateOfDeath: "2025-09-30",
    memorialQuote: "I když si byl přísný, vždy jsi nám pomáhal stát se lepšími důstojníky. Odpočívej v pokoji.",
  },
  {
    name: "Jake Sinns",
    title: "Lieutenant",
    experience: "10 let",
    image: "/images/Jake Sinns.png",
    description: "Celý svůj život zasvětil práci u šerifů a snažil se být nápomocný ostatním kolegům i občanům.",
    achievements: ["Medaile za vynikající službu"],
    status: "dead",
    dateOfDeath: "2025-08-28",
    memorialQuote: "I když si nám zničil tolik aut, nikdy nezapomeneme na tvou službu a oddanost.",
  },
  // Add more deceased colleagues here as needed
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const EndOfWatch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">
            End of Watch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Vzpomínka na zesnulé kolegy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tato stránka je věnována památce kolegů, kteří odešli, ale jejich služba a odkaz zůstávají navždy v našich srdcích.
          </p>
          <p className="mt-6 text-center text-base italic text-gray-400">
            “Odpočívejte v pokoji. Odteď to tu přebíráme my!”
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deceasedStaff.map((officer, index) => (
              <Card
                key={index}
                className="transition-shadow relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border border-gray-700 shadow-none"
                style={{ filter: "grayscale(1)" }}
              >
                {/* Memorial Ribbon */}
                <div className="absolute top-6 left-[-40px] rotate-[-20deg] z-20">
                  <span className="flex items-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white px-6 py-2 rounded-lg shadow font-bold text-sm tracking-wide border-2 border-white">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2">
                      <path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7s7 3.14 7 7c0 3.86-3.14 7-7 7zm-1-7V7h2v4h-2zm0 2h2v2h-2v-2z" fill="currentColor" />
                    </svg>
                    End of Watch
                  </span>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="p-5 rounded-2xl flex items-center justify-center min-w-[160px] min-h-[160px] relative bg-black/40">
                      <img
                        src={officer.image}
                        alt={officer.name}
                        className="h-40 w-40 object-cover rounded-full border-4 shadow-lg border-gray-700 grayscale brightness-90 blur-[1px]"
                      />
                      {/* Candle icon at bottom */}
                      <span className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                          <path d="M12 2v2m0 0c-1.1 0-2 .9-2 2v2h4V6c0-1.1-.9-2-2-2zm-4 6v10a2 2 0 002 2h4a2 2 0 002-2V8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-white drop-shadow">
                        {officer.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-300">
                        {officer.title}
                      </CardDescription>
                      <div className="mt-2 text-sm text-gray-400 font-semibold">
                        EOW: {formatDate(officer.dateOfDeath)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-300">
                      Praxe: {officer.experience}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-300 italic">
                    {officer.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <Medal className="h-4 w-4 mr-2 text-gray-400" />
                      Klíčové úspěchy
                    </h4>
                    <ul className="space-y-2">
                      {officer.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gray-500" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {officer.memorialQuote && (
                    <div className="mt-6 text-center text-base italic text-gray-400">
                      “{officer.memorialQuote}”
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EndOfWatch;
