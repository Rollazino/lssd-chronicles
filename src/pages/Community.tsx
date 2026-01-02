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
import React, { useState } from "react";
// Formulář pro registraci na akci s webhookem
function EventRegistrationForm({ event, onClose }: { event: { title: string; webhook: string }; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [note, setNote] = useState("");
  const [colleague, setColleague] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Build content and optional role mention
    const roleMention = (event as any).roleId ? `<@&${(event as any).roleId}> ` : "";
    const content = `${roleMention}Nová registrace na akci: ${event.title}\nJméno: ${name}\nEmail: ${email}\nDiscord: ${discord}\nKolega: ${colleague ? colleague : "(nevybráno)"}\nPoznámka: ${note}`;
    const payload: any = { content };
    // If a roleId was provided, add allowed_mentions so Discord will actually ping the role
    if ((event as any).roleId) {
      payload.allowed_mentions = { parse: [], roles: [(event as any).roleId] };
    }
    try {
      await fetch(event.webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setSent(true);
    } catch {
      alert("Nepodařilo se odeslat registraci.");
    }
    setSending(false);
  };
  if (sent) return <div className="p-4 bg-green-100 rounded">Registrace byla úspěšně odeslána!</div>;
  return (
    <form className="space-y-3 mt-4" onSubmit={handleSubmit}>
  <input required className="w-full max-w-lg mx-auto p-3 border rounded text-sm" placeholder="Jméno a příjmení" value={name} onChange={e => setName(e.target.value)} />
  <input required type="email" className="w-full max-w-lg mx-auto p-3 border rounded text-sm" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
  <input className="w-full max-w-lg mx-auto p-3 border rounded text-sm" placeholder="Discord" value={discord} onChange={e => setDiscord(e.target.value)} />
    <textarea rows={2} className="w-full max-w-lg mx-auto p-3 border rounded text-sm placeholder:text-base resize-none" placeholder={"Jméno kolegy,\nkterého byste rád/a (nepovinné)"} value={colleague} onChange={e => setColleague(e.target.value)} />
  <textarea className="w-full max-w-lg mx-auto p-3 border rounded text-sm" placeholder="Poznámka" value={note} onChange={e => setNote(e.target.value)} />
      <div className="flex gap-2">
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded" disabled={sending}>{sending ? "Odesílám..." : "Odeslat"}</button>
        <button type="button" className="bg-muted px-4 py-2 rounded" onClick={onClose}>Zavřít</button>
      </div>
    </form>
  );
}

const Community = () => {
  const [showFormIndex, setShowFormIndex] = useState<number|null>(null);
  const programs = [
  /*{
    icon: Shield,
    title: "Sousedská hlídka",
    description: "Zapojení obyvatel do spolupráce s policií pro prevenci kriminality a budování bezpečnějších komunit.",
    features: ["Měsíční setkání", "Školení v prevenci kriminality", "Přímá komunikace s hlídkovými policisty", "Systém komunitních upozornění"],
    benefits: ["Zvýšení bezpečnosti v sousedství", "Lepší informovanost obyvatel", "Silnější vztahy mezi komunitou a policií", "Rychlejší reakce na podezřelé situace"],
    contact: "Policista Martinez",
    discord: "123456789012345678", // zde zadejte správné Discord ID
    detail: "Sousedská hlídka je program, který umožňuje obyvatelům aktivně se podílet na bezpečnosti své čtvrti. Získáte přístup k informacím, školením a přímé komunikaci s policií."
  },
    {
      icon: GraduationCap,
      title: "Programy pro mládež",
      description: "Zapojení mladých lidí prostřednictvím vzdělávacích a volnočasových aktivit, které podporují pozitivní vztahy s policií.",
      features: ["Programy po škole", "Letní tábory", "Mentorské příležitosti", "Vzdělávací workshopy"],
      benefits: ["Rozvoj dovedností mladých lidí", "Prevence kriminality v mládeži", "Podpora pozitivních vzorů", "Budování důvěry mezi mládeží a policií"],
      contact: "Detektiv Johnson",
      discord: "234567890123456789", // zde zadejte správné Discord ID
      detail: "Programy pro mládež pomáhají mladým lidem rozvíjet dovednosti, budovat pozitivní vztahy a získat nové zkušenosti pod vedením policie."
    },
    {
      icon: Users,
      title: "Komunitní policie",
      description: "Budování partnerství mezi policií a občany pro řešení problémů a zlepšení kvality života.",
      features: ["Pravidelná komunitní fóra", "Partnerství pro řešení problémů", "Programy pěších hlídek", "Setkání s občany"],
      benefits: ["Lepší komunikace mezi policií a občany", "Efektivnější řešení místních problémů", "Zvýšení důvěry v policii", "Zlepšení kvality života v komunitě"],
      contact: "Poručík Davis",
      discord: "345678901234567890", // zde zadejte správné Discord ID
      detail: "Komunitní policie je zaměřena na spolupráci s občany, řešení místních problémů a zlepšení kvality života v komunitě."
    },
    {
      icon: Heart,
      title: "Bezpečí seniorů",
      description: "Speciální programy zaměřené na ochranu a podporu našich seniorů.",
      features: ["Bezpečnostní kontroly domovů", "Vzdělávání o prevenci podvodů", "Programy zdravotních upozornění", "Pravidelné kontroly pohody"],
      benefits: ["Větší bezpečí pro seniory", "Prevence podvodů a nebezpečí", "Podpora zdraví a pohody", "Zvýšení informovanosti seniorů"],
      contact: "Policista Thompson",
      discord: "456789012345678901", // zde zadejte správné Discord ID
      detail: "Program Bezpečí seniorů poskytuje podporu, vzdělávání a pravidelné kontroly pro seniory, aby se cítili bezpečně a informovaně."
    },
    {
      icon: Building,
      title: "Partnerství s podniky",
      description: "Spolupráce s místními podniky na vytvoření bezpečnějších obchodních oblastí a prevenci kriminality.",
      features: ["Bezpečnostní konzultace", "Školení zaměstnanců", "Rychlé reakční protokoly", "Plánování prevence kriminality"],
      benefits: ["Bezpečnější obchodní oblasti", "Lepší připravenost zaměstnanců", "Rychlejší reakce na incidenty", "Snížení kriminality v podnikání"],
      contact: "Seržant Wilson",
      discord: "567890123456789012", // zde zadejte správné Discord ID
    detail: "Partnerství s podniky pomáhá zvyšovat bezpečnost v obchodních oblastech prostřednictvím konzultací, školení a prevence."
  },*/
  {
    icon: Calendar,
    title: "Komunitní akce",
    description: "Organizace a účast na akcích pro posílení vztahů mezi policií a komunitou.",
    features: ["Káva se šerifem"],
    benefits: ["Možnost osobního kontaktu se šerify v přátelské atmosféře", "Rychlejší předávání podnětů a zpětné vazby", "Posílení pocitu bezpečí a důvěry", "Podpora spolupráce mezi občany a policií při řešení lokálních problémů"],
    contact: "Deputy Sheriff - Cunha",
    discord: "444470659226140673", // zde zadejte správné Discord ID
    detail: "Cílem programu je budování důvěry, otevřená komunikace a posílení vzájemného porozumění mezi policií a komunitou. Akce mají neformální charakter, aby lidé mohli policisty poznat i mimo služební rámec."
  }
  ];

  const upcomingEvents = [
    {
      date: "2024-02-15",
      title: "NEPLATNÉ - Káva s policistou – stanice centrum",
      time: "8:00 – 10:00",
      location: "Central Café, Hlavní ulice",
      description: "Přijďte na neformální rozhovor u kávy. Bez agendy, jen povídání.",
      webhook: "https://discord.com/api/webhooks/1456657952932102175/Pn6Ja5w6CA5RHRLOlJdLc2h1pO6i4uBCK1WNnlSQi_exAw-M4I4mdgOJnWcr_53uwVUj", // upravte dle potřeby
      // Optional: Discord Role ID to ping when a new registration is submitted
      roleId: "1429103061384691732"
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

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {programs.map((program, index) => {
              const [showDetail, setShowDetail] = useState(false);
              return (
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
                        {program.discord && (
                          <a
                            href={`https://discord.com/users/${program.discord}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Otevřít Discord chat"
                            className="ml-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-500 hover:text-indigo-700 inline-block align-middle">
                              <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.084.084 0 0 0-.09.042c-.388.676-.822 1.557-1.13 2.25a18.364 18.364 0 0 0-5.29 0c-.308-.693-.742-1.574-1.13-2.25a.084.084 0 0 0-.09-.042A19.736 19.736 0 0 0 3.683 4.369a.078.078 0 0 0-.035.028C.533 8.725-.32 13.01.099 17.255a.082.082 0 0 0 .031.056c2.137 1.57 4.213 2.527 6.29 3.158a.084.084 0 0 0 .091-.027c.484-.662.917-1.36 1.293-2.084a.08.08 0 0 0-.045-.112c-.684-.26-1.334-.577-1.965-.936a.084.084 0 0 1-.008-.139c.132-.099.263-.2.391-.304a.08.08 0 0 1 .086-.01c4.073 1.86 8.457 1.86 12.49 0a.08.08 0 0 1 .087.009c.128.104.259.205.391.304a.084.084 0 0 1-.007.139c-.632.359-1.282.676-1.966.936a.08.08 0 0 0-.044.113c.377.723.81 1.421 1.293 2.083a.084.084 0 0 0 .092.028c2.077-.631 4.153-1.588 6.29-3.158a.082.082 0 0 0 .031-.056c.5-5.177-.838-9.418-3.548-12.858a.067.067 0 0 0-.034-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419z" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setShowDetail(!showDetail)}>
                        {showDetail ? "Méně informací" : "Více informací"}
                      </Button>
                    </div>
                    {showDetail && (
                      <div className="mt-4 p-4 bg-accent/10 rounded space-y-4">
                        <p>{program.detail}</p>
                        {program.features && (
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Hlavní prvky programu</h4>
                            <ul className="list-disc ml-6 text-muted-foreground">
                              {program.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {program.detail && (
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Přínosy pro komunitu</h4>
                            <ul className="list-disc ml-6 text-muted-foreground">
                              {/* Pokud máte pole benefits, použijte program.benefits.map. Jinak upravte zde. */}
                              {program.benefits && program.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
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
                        {showFormIndex === index ? (
                          <EventRegistrationForm event={event} onClose={() => setShowFormIndex(null)} />
                        ) : (
                          <Button onClick={() => setShowFormIndex(index)}>
                            Zúčastnit se
                          </Button>
                        )}
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
      {/*
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
      */}

      <Footer />
    </div>
  );
};

export default Community;