import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Building,
  Send
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";

const Contact = () => {
  // Neurgentní formulář
  const [nonUrgentFirstName, setNonUrgentFirstName] = useState("");
  const [nonUrgentLastName, setNonUrgentLastName] = useState("");
  const [nonUrgentEmail, setNonUrgentEmail] = useState("");
  const [nonUrgentPhone, setNonUrgentPhone] = useState("");
  const [nonUrgentDiscord, setNonUrgentDiscord] = useState("");
  const [nonUrgentSubject, setNonUrgentSubject] = useState("");
  const [nonUrgentMessage, setNonUrgentMessage] = useState("");
  const [nonUrgentSending, setNonUrgentSending] = useState(false);
  const [nonUrgentSent, setNonUrgentSent] = useState(false);
  const [nonUrgentError, setNonUrgentError] = useState("");

  const handleNonUrgentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNonUrgentSending(true);
    setNonUrgentError("");
    setNonUrgentSent(false);
    try {
      const roleId = "1396927378432721104"; // Replace with actual role ID if needed
      const roleMention = roleId ? `<@&${roleId}> ` : "";
      const content =
        `${roleMention}**Jméno:** ${nonUrgentFirstName} ${nonUrgentLastName}\n` +
        `**E-mail:** ${nonUrgentEmail}\n` +
        `**Telefon:** ${nonUrgentPhone}\n` +
        `**Discord/Discord ID:** ${nonUrgentDiscord}\n` +
        `**Předmět:** ${nonUrgentSubject}\n` +
        `**Zpráva:** ${nonUrgentMessage}`;
      const payload: any = { content };
      if (roleId) {
        payload.allowed_mentions = { parse: [], roles: [roleId] };
      }
      const res = await fetch(
        "https://discord.com/api/webhooks/1424772640853200987/L8nGHZOGEuLmWclq0pBNBjYKcUF9zE-KuelArnKwltYCa6S3M9RVgBSK9a-dfwQ6ydCE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error("Chyba při odesílání na Discord");
      setNonUrgentSent(true);
  setNonUrgentFirstName("");
  setNonUrgentLastName("");
  setNonUrgentEmail("");
  setNonUrgentPhone("");
  setNonUrgentDiscord("");
  setNonUrgentSubject("");
  setNonUrgentMessage("");
    } catch (err: any) {
      setNonUrgentError(err.message || "Chyba při odesílání");
    } finally {
      setNonUrgentSending(false);
    }
  };
  const [anonDiscord, setAnonDiscord] = useState("");
  const [anonSubject, setAnonSubject] = useState("");
  const [anonMessage, setAnonMessage] = useState("");
  const [anonSending, setAnonSending] = useState(false);
  const [anonSent, setAnonSent] = useState(false);
  const [anonError, setAnonError] = useState("");

  const handleAnonymousSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnonSending(true);
    setAnonError("");
    setAnonSent(false);
    try {
      const roleId = "1396927378432721104"; // Replace with actual role ID if needed
      const roleMention = roleId ? `<@&${roleId}> ` : "";
      const content =
        `${roleMention}**Discord/Discord ID:** ${anonDiscord}\n` +
        `**Předmět:** ${anonSubject}\n` +
        `**Zpráva:** ${anonMessage}`;
      const payload: any = { content };
      if (roleId) {
        payload.allowed_mentions = { parse: [], roles: [roleId] };
      }
      const res = await fetch(
        "https://discord.com/api/webhooks/1424771162990444634/chUQdZCfThDtgpGVLBLssXNDaNG2sbJVcvxoKHQ7MG_tv9RvhANrscM1vv6jFOTpjsmb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error("Chyba při odesílání na Discord");
      setAnonSent(true);
  setAnonDiscord("");
  setAnonSubject("");
  setAnonMessage("");
    } catch (err: any) {
      setAnonError(err.message || "Chyba při odesílání");
    } finally {
      setAnonSending(false);
    }
  };
  const [showNonUrgentForm, setShowNonUrgentForm] = useState(false);
  const [showAnonymousForm, setShowAnonymousForm] = useState(false);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const [openMapIndex, setOpenMapIndex] = useState<number | null>(null);
  const [mapImageLoaded, setMapImageLoaded] = useState(false);

  // Listen for navigation click to open the non-urgent form
  useEffect(() => {
    const handler = () => setShowNonUrgentForm(true);
    window.addEventListener("open-nonurgent-form", handler);
    return () => window.removeEventListener("open-nonurgent-form", handler);
  }, []);

  // Focus the first input when the non-urgent form becomes visible
  useEffect(() => {
    if (showNonUrgentForm) {
      // small timeout to ensure DOM is updated
      setTimeout(() => firstNameRef.current?.focus(), 50);
    }
  }, [showNonUrgentForm]);
  const emergencyNumbers = [
    {
      type: "Tísňová linka",
      number: "911",
      description: "Ohrožení života, trestné činy v průběhu",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      type: "Linka pro neurgentní případy",
      number: "(555) 123-4567",
      description: "Obecné dotazy, oznámení, neurgentní záležitosti",
      icon: Phone,
      color: "text-primary"
    },
    {
      type: "Anonymní linka",
      number: "911a",
      description: "Nahlášení trestných činů anonymně",
      icon: Phone,
      color: "text-muted-foreground"
    }
  ];

  const departments = [
    {
      name: "Hlídkové oddělení",
      phone: "(555) 123-4567 kl. 1100",
      email: "patrol@lssd.gov",
      hours: "Provoz 24/7"
    },
    {
      name: "Kriminální oddělení",
      phone: "(555) 123-4567 kl. 1200",
      email: "detectives@lssd.gov",
      hours: "Pondělí – Pátek, 8:00 – 18:00"
    },
    {
      name: "Dopravní oddělení",
      phone: "(555) 123-4567 kl. 1300",
      email: "traffic@lssd.gov",
      hours: "Pondělí – Pátek, 7:00 – 19:00"
    },
    {
      name: "Vztahy s komunitou",
      phone: "(555) 123-4567 kl. 1400",
      email: "community@lssd.gov",
      hours: "Pondělí – Pátek, 9:00 – 17:00"
    },
    {
      name: "Oddělení záznamů",
      phone: "(555) 123-4567 kl. 1500",
      email: "records@lssd.gov",
      hours: "Pondělí – Pátek, 8:00 – 16:00"
    },
    {
      name: "Administrativní služby",
      phone: "(555) 123-4567 kl. 1000",
      email: "admin@lssd.gov",
      hours: "Pondělí – Pátek, 8:00 – 17:00"
    }
  ];

  const locations = [
    {
      name: "Davis Station",
      address: "Innocence Boulevard, Los Santos, SA 9148",
      phone: "(555) 123-4567",
      hours: "Provoz 24/7",
      services: ["Administrativní služby", "Hlídkové operace", "Vztahy s komunitou"]
    },
    {
      name: "Sandy Shores Station",
      address: "Alhambra Drive, Sandy Shores, SA 3004",
      phone: "(555) 123-4568",
      hours: "Provoz 24/7",
      services: ["Administrativní služby", "Hlídkové operace", "Vztahy s komunitou"]
    },
    {
      name: "Paleto Bay Station",
      address: "Paleto Boulevard, Paleto Bay, SA 1038",
      phone: "(555) 123-4569",
      hours: "Provoz 24/7",
      services: ["Park Rangers", "Hunting Permits", "Search and Rescue"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Kontaktujte nás</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Spojte se s námi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jsme tu pro vás a vaši bezpečnost. Kontaktujte nás pro pomoc, informace nebo nahlášení neurgentních situací.
          </p>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Důležitá čísla</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tísňová a kontaktní čísla
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vědět, kdy a jak nás kontaktovat v různých situacích.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {emergencyNumbers.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <contact.icon className={`h-12 w-12 mx-auto mb-4 ${contact.color}`} />
                  <CardTitle className="text-xl">{contact.type}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {contact.number}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{contact.description}</p>
                  {contact.type === "Linka pro neurgentní případy" && (
                    <Button className="mt-4 w-full" onClick={() => setShowNonUrgentForm(v => !v)}>
                      {showNonUrgentForm ? "Skrýt formulář" : "Zobrazit kontaktní formulář"}
                    </Button>
                  )}
                  {contact.type === "Anonymní linka" && (
                    <Button className="mt-4 w-full" onClick={() => setShowAnonymousForm(v => !v)}>
                      {showAnonymousForm ? "Skrýt formulář" : "Zobrazit anonymní formulář"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Linka pro neurgentni pripady */}
      {showNonUrgentForm && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Linka pro neurgentní případy</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Kontaktní formulář
                </h2>
                <p className="text-muted-foreground">
                  Pro neurgentní dotazy, zpětnou vazbu nebo žádosti o informace.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={handleNonUrgentSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Jméno</Label>
                        <Input
                          id="firstName"
                          placeholder="Zadejte své jméno"
                          value={nonUrgentFirstName}
                          onChange={e => setNonUrgentFirstName(e.target.value)}
                          disabled={nonUrgentSending}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Příjmení</Label>
                        <Input
                          id="lastName"
                          placeholder="Zadejte své příjmení"
                          value={nonUrgentLastName}
                          onChange={e => setNonUrgentLastName(e.target.value)}
                          disabled={nonUrgentSending}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Zadejte svůj e-mail"
                          value={nonUrgentEmail}
                          onChange={e => setNonUrgentEmail(e.target.value)}
                          disabled={nonUrgentSending}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Zadejte své telefonní číslo"
                          value={nonUrgentPhone}
                          onChange={e => setNonUrgentPhone(e.target.value)}
                          disabled={nonUrgentSending}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discord">Discord/Discord ID</Label>
                        <Input
                          id="discord"
                          placeholder="Např. uzivatel#1234 nebo ID"
                          value={nonUrgentDiscord}
                          onChange={e => setNonUrgentDiscord(e.target.value)}
                          disabled={nonUrgentSending}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Předmět</Label>
                      <Input
                        id="subject"
                        placeholder="Zadejte předmět zprávy"
                        value={nonUrgentSubject}
                        onChange={e => setNonUrgentSubject(e.target.value)}
                        disabled={nonUrgentSending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Zpráva</Label>
                      <Textarea
                        id="message"
                        placeholder="Zadejte svou zprávu"
                        className="min-h-[120px]"
                        value={nonUrgentMessage}
                        onChange={e => setNonUrgentMessage(e.target.value)}
                        disabled={nonUrgentSending}
                      />
                    </div>
                    <Button
                      className="w-full md:w-auto"
                      type="submit"
                      disabled={nonUrgentSending || !nonUrgentFirstName || !nonUrgentLastName || !nonUrgentEmail || !nonUrgentSubject || !nonUrgentMessage}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {nonUrgentSending ? "Odesílám..." : "Odeslat zprávu"}
                    </Button>
                    {nonUrgentSent && (
                      <div className="text-green-600 text-sm mt-2">Zpráva byla úspěšně odeslána na centrálu Los Santos Sheriff's Department.</div>
                    )}
                    {nonUrgentError && (
                      <div className="text-red-600 text-sm mt-2">{nonUrgentError}</div>
                    )}
                  </form>
                  <div>
                    <a href="https://discord.com/api/webhooks/1424772640853200987/L8nGHZOGEuLmWclq0pBNBjYKcUF9zE-KuelArnKwltYCa6S3M9RVgBSK9a-dfwQ6ydCE" target="_blank" rel="noopener noreferrer" className="underline text-primary"></a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form - Anonymní linka */}
      {showAnonymousForm && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Anonymní linka</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Anonymní kontaktní formulář
                </h2>
                <p className="text-muted-foreground">
                  Nahlaste trestný čin nebo podezření zcela anonymně. Nevyplňujte osobní údaje.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={handleAnonymousSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="discord-anon">Discord/Discord ID</Label>
                      <Input
                        id="discord-anon"
                        placeholder="Např. uzivatel#1234 nebo ID. Pouze kvůli předcházení trollingu"
                        value={anonDiscord}
                        onChange={e => setAnonDiscord(e.target.value)}
                        disabled={anonSending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject-anon">Předmět</Label>
                      <Input
                        id="subject-anon"
                        placeholder="Zadejte předmět zprávy"
                        value={anonSubject}
                        onChange={e => setAnonSubject(e.target.value)}
                        disabled={anonSending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message-anon">Zpráva</Label>
                      <Textarea
                        id="message-anon"
                        placeholder="Popište co nejpřesněji situaci, podezření nebo trestný čin."
                        className="min-h-[120px]"
                        value={anonMessage}
                        onChange={e => setAnonMessage(e.target.value)}
                        disabled={anonSending}
                      />
                    </div>
                    <Button className="w-full md:w-auto" type="submit" disabled={anonSending || !anonSubject || !anonMessage}>
                      <Send className="mr-2 h-4 w-4" />
                      {anonSending ? "Odesílám..." : "Odeslat anonymně"}
                    </Button>
                    {anonSent && (
                      <div className="text-green-600 text-sm mt-2">Zpráva byla úspěšně odeslána na centrálu Los Santos Sheriff's Department.</div>
                    )}
                    {anonError && (
                      <div className="text-red-600 text-sm mt-2">{anonError}</div>
                    )}
                  </form>
                  <div>
                    <a href="https://discord.com/api/webhooks/1424771162990444634/chUQdZCfThDtgpGVLBLssXNDaNG2sbJVcvxoKHQ7MG_tv9RvhANrscM1vv6jFOTpjsmb" target="_blank" rel="noopener noreferrer" className="underline text-primary"></a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Department Contacts */}
      {/*
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Kontakty na oddělení</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specializovaná oddělení
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Přímé kontakty na konkrétní oddělení a služby.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <Building className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{dept.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Locations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Naše pobočky</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lokality úřadu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navštivte nás na kterékoliv z našich poboček v San Andreas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription>{location.address}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Dostupné služby:</h4>
                    <ul className="space-y-1">
                      {location.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <>
                    <button
                      type="button"
                      className="bg-primary text-white px-4 py-2 rounded w-full mt-2 flex items-center justify-center gap-2 hover:bg-primary/80 transition"
                      onClick={() => setOpenMapIndex(index)}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Zobrazit mapu
                    </button>

                    {/* Modal for map images */}
                    <Dialog open={openMapIndex !== null} onOpenChange={(isOpen) => { if (!isOpen) setOpenMapIndex(null); }}>
                      <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{locations[openMapIndex ?? 0].name} - Mapa</DialogTitle>
                            <DialogDescription className="mb-4">Klikněte mimo nebo na křížek pro zavření.</DialogDescription>
                          </DialogHeader>
                          <div className="w-full">
                            <img
                              src={`/images/${['map-davis.png','map-sandy.png','map-paleto.png'][openMapIndex ?? 0]}`}
                              alt={`${locations[openMapIndex ?? 0].name} mapa`}
                              className={`w-full h-auto rounded transition-all duration-500 ${mapImageLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-sm scale-105 opacity-60'}`}
                              loading="lazy"
                              decoding="async"
                              width={1200}
                              height={800}
                              onLoad={() => setMapImageLoaded(true)}
                            />
                          </div>
                        </DialogContent>
                    </Dialog>
                  </>
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

export default Contact;