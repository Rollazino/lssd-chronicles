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
      type: "Emergency",
      number: "911",
      description: "Life-threatening emergencies, crimes in progress",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      type: "Non-Emergency",
      number: "(555) 123-4567",
      description: "General questions, reports, non-urgent matters",
      icon: Phone,
      color: "text-primary"
    },
    {
      type: "Anonymous Tip Line",
      number: "(555) 123-TIPS",
      description: "Report crimes anonymously",
      icon: Phone,
      color: "text-muted-foreground"
    }
  ];

  const departments = [
    {
      name: "Patrol Division",
      phone: "(555) 123-4567 ext. 1100",
      email: "patrol@lssd.gov",
      hours: "24/7 Operations"
    },
    {
      name: "Detective Bureau",
      phone: "(555) 123-4567 ext. 1200",
      email: "detectives@lssd.gov",
      hours: "Monday - Friday, 8:00 AM - 6:00 PM"
    },
    {
      name: "Traffic Enforcement",
      phone: "(555) 123-4567 ext. 1300",
      email: "traffic@lssd.gov",
      hours: "Monday - Friday, 7:00 AM - 7:00 PM"
    },
    {
      name: "Community Relations",
      phone: "(555) 123-4567 ext. 1400",
      email: "community@lssd.gov",
      hours: "Monday - Friday, 9:00 AM - 5:00 PM"
    },
    {
      name: "Records Department",
      phone: "(555) 123-4567 ext. 1500",
      email: "records@lssd.gov",
      hours: "Monday - Friday, 8:00 AM - 4:00 PM"
    },
    {
      name: "Administrative Services",
      phone: "(555) 123-4567 ext. 1000",
      email: "admin@lssd.gov",
      hours: "Monday - Friday, 8:00 AM - 5:00 PM"
    }
  ];

  const locations = [
    {
      name: "Main Headquarters",
      address: "1234 Justice Drive, Los Santos, CA 90210",
      phone: "(555) 123-4567",
      hours: "24/7",
      services: ["Administrative Services", "Records", "Detective Bureau", "Patrol Dispatch"]
    },
    {
      name: "North Precinct",
      address: "5678 Oak Street, North Los Santos, CA 90211",
      phone: "(555) 123-4568",
      hours: "24/7",
      services: ["Patrol Operations", "Community Relations", "Traffic Enforcement"]
    },
    {
      name: "South Precinct",
      address: "9101 Pine Avenue, South Los Santos, CA 90212",
      phone: "(555) 123-4569",
      hours: "24/7",
      services: ["Patrol Operations", "K9 Unit", "Special Operations"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Get in Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to serve and protect our community. Reach out to us for assistance, 
            information, or to report non-emergency situations.
          </p>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Important Numbers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency & Contact Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Know when and how to contact us for different types of situations.
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
              <Badge variant="outline" className="mb-4">Send a Message</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Contact Form
              </h2>
              <p className="text-muted-foreground">
                For non-emergency inquiries, feedback, or general information requests.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject of your message" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Department Contacts</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialized Departments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Direct contact information for specific departments and services.
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

      {/* Locations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Locations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Office Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our locations throughout Los Santos County.
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
                    <h4 className="font-semibold text-primary mb-2">Services Available:</h4>
                    <ul className="space-y-1">
                      {location.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
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