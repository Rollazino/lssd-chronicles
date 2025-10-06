import { Badge } from "@/components/ui/badge";
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

const Contact = () => {
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
      number: "(555) 123-TIPS, 911a",
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
            Spojte se s námi - WIP
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Odeslat zprávu</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Kontaktní formulář
              </h2>
              <p className="text-muted-foreground">
                Pro neurgentní dotazy, zpětnou vazbu nebo žádosti o informace.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Jméno</Label>
                      <Input id="firstName" placeholder="Zadejte své jméno" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Příjmení</Label>
                      <Input id="lastName" placeholder="Zadejte své příjmení" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="Zadejte svůj e-mail" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" type="tel" placeholder="Zadejte své telefonní číslo" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Předmět</Label>
                    <Input id="subject" placeholder="Zadejte předmět zprávy" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Zadejte svou zprávu"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Odeslat zprávu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
      <section className="py-16 bg-background">
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
                  
                  <button
                    type="button"
                    className="bg-primary text-white px-4 py-2 rounded w-full mt-2 flex items-center justify-center gap-2 hover:bg-primary/80 transition"
                    onClick={() => {
                      const mapImages = [
                        '/public/images/map-davis.png',
                        '/public/images/map-sandy.jpg',
                        '/public/images/map-paleto.jpg'
                      ];
                      window.open(mapImages[index] || mapImages[0], '_blank');
                    }}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Zobrazit mapu
                  </button>
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