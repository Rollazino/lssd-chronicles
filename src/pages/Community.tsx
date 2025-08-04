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
    {
      icon: Shield,
      title: "Neighborhood Watch",
      description: "Empowering residents to work together with law enforcement to prevent crime and build safer communities.",
      features: ["Monthly meetings", "Crime prevention training", "Direct communication with patrol officers", "Community alert system"],
      contact: "Officer Martinez"
    },
    {
      icon: GraduationCap,
      title: "Youth Programs",
      description: "Engaging young people through educational and recreational activities that promote positive relationships with law enforcement.",
      features: ["After-school programs", "Summer camps", "Mentorship opportunities", "Educational workshops"],
      contact: "Detective Johnson"
    },
    {
      icon: Users,
      title: "Community Policing",
      description: "Building partnerships between police and community members to solve problems and improve quality of life.",
      features: ["Regular community forums", "Problem-solving partnerships", "Foot patrol programs", "Community feedback sessions"],
      contact: "Lieutenant Davis"
    },
    {
      icon: Heart,
      title: "Senior Safety",
      description: "Specialized programs designed to protect and support our senior community members.",
      features: ["Home security assessments", "Fraud prevention education", "Medical alert programs", "Regular wellness checks"],
      contact: "Officer Thompson"
    },
    {
      icon: Building,
      title: "Business Partnership",
      description: "Working with local businesses to create safer commercial districts and prevent crime.",
      features: ["Security consultations", "Employee safety training", "Rapid response protocols", "Crime prevention planning"],
      contact: "Sergeant Wilson"
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Organizing and participating in community events to strengthen police-community relationships.",
      features: ["National Night Out", "Safety fairs", "Police ride-alongs", "Coffee with a Cop"],
      contact: "Officer Garcia"
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-02-15",
      title: "Coffee with a Cop - Downtown Precinct",
      time: "8:00 AM - 10:00 AM",
      location: "Central Café, Main Street",
      description: "Join us for an informal chat over coffee. No agenda, just conversation."
    },
    {
      date: "2024-02-22",
      title: "Youth Basketball League Championship",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center Gym",
      description: "Cheer on our youth basketball teams and celebrate community engagement."
    },
    {
      date: "2024-03-05",
      title: "Senior Safety Workshop",
      time: "2:00 PM - 4:00 PM",
      location: "Senior Center Auditorium",
      description: "Learn about fraud prevention and home security measures."
    },
    {
      date: "2024-03-15",
      title: "Neighborhood Watch Training",
      time: "7:00 PM - 9:00 PM",
      location: "Police Station Conference Room",
      description: "Training session for new and existing neighborhood watch coordinators."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Community Engagement</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Community Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building stronger, safer communities through partnership, engagement, and shared responsibility. 
            Together, we create lasting positive change.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Community Initiatives
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the various programs designed to strengthen the bond between law enforcement and our community.
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
                    <h4 className="font-semibold text-primary mb-3">Program Features</h4>
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
                      <span className="text-sm font-medium">Contact: {program.contact}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
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
            <Badge variant="outline" className="mb-4">Events Calendar</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Upcoming Community Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us at these upcoming events to connect with your community and local law enforcement.
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
                          {new Date(event.date).toLocaleDateString()}
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
                          Register
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
            <Badge variant="outline" className="mb-6">Get Involved</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How You Can Help
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Community safety is a shared responsibility. Here are ways you can actively participate 
              in making our community safer and stronger.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-3">Join a Program</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Participate in one of our community programs and make a direct impact.
                  </p>
                  <Button variant="outline" size="sm">
                    Find Programs
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-3">Volunteer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Donate your time and skills to support community safety initiatives.
                  </p>
                  <Button variant="outline" size="sm">
                    Volunteer Today
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-3">Stay Connected</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow our updates and stay informed about community safety matters.
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Us
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