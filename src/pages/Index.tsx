import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Shield, Users, Car, Phone, AlertTriangle, FileText, Calendar, Award, ChevronRight, Building } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lssdHQ from "@/assets/lssd-headquarters.jpg";
import sheriffPortrait from "@/assets/sheriff-portrait.jpg";
import patrolFleet from "@/assets/patrol-fleet.jpg";

const Index = () => {
  const announcements = [
    {
      date: "2024-01-15",
      title: "New Community Policing Initiative Launched",
      description: "LSSD announces expanded community outreach programs in partnership with local organizations.",
      priority: "high"
    },
    {
      date: "2024-01-12",
      title: "Traffic Safety Campaign - School Zones",
      description: "Increased enforcement in school zones during morning and afternoon hours.",
      priority: "medium"
    },
    {
      date: "2024-01-10",
      title: "K9 Unit Welcomes New Partner",
      description: "Officer Rex joins our K9 division after completing specialized training.",
      priority: "low"
    }
  ];

  const quickStats = [
    { icon: Shield, label: "Officers Serving", value: "450+" },
    { icon: Users, label: "Community Members Protected", value: "2.1M" },
    { icon: Car, label: "Patrol Vehicles", value: "85" },
    { icon: Building, label: "Precincts", value: "12" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lssdHQ})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Los Santos Sheriff's Department
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Serving our community with integrity, professionalism, and dedication.
            Protecting and serving Los Santos County for over 150 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Emergency: 911
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Non-Emergency: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Sheriff's Welcome Message */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={sheriffPortrait}
                  alt="Sheriff Williams"
                  className="w-full max-w-md mx-auto rounded-lg professional-shadow"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4">Welcome Message</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    A Message from Sheriff Williams
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    "Welcome to the Los Santos Sheriff's Department website. As your Sheriff,
                    I am honored to lead this exceptional team of dedicated professionals who
                    work tirelessly to keep our community safe."
                  </p>
                  <p>
                    "Our department is built on the foundations of integrity, respect, and
                    accountability. We are committed to building strong partnerships with
                    the communities we serve and ensuring that every citizen feels protected
                    and valued."
                  </p>
                  <p>
                    "I encourage you to explore our website to learn more about our services,
                    programs, and the outstanding men and women who make up the LSSD family."
                  </p>
                </div>
                <div className="pt-4">
                  <p className="font-semibold text-primary">Sheriff Robert Williams</p>
                  <p className="text-sm text-muted-foreground">Los Santos County Sheriff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Announcements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Community Updates</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Recent Announcements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay informed about the latest news, initiatives, and important
                information from the Los Santos Sheriff's Department.
              </p>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge
                            variant={announcement.priority === "high" ? "destructive" :
                              announcement.priority === "medium" ? "default" : "secondary"}
                          >
                            {announcement.priority === "high" ? "Priority" :
                              announcement.priority === "medium" ? "Important" : "Update"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(announcement.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {announcement.description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View All Announcements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Department Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Access
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the resources and information you need quickly and easily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Join Our Team</CardTitle>
                <CardDescription>
                  Explore career opportunities and learn about our recruitment process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavLink to="/recruitment">
                  <Button className="w-full">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Community Programs</CardTitle>
                <CardDescription>
                  Discover our community outreach initiatives and programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavLink to="/community">
                  <Button className="w-full">
                    Get Involved
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Divisions</CardTitle>
                <CardDescription>
                  Learn about our specialized units and their responsibilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavLink to="/divisions">
                  <Button className="w-full">
                    Explore Divisions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4">Our Fleet</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Modern Equipment & Vehicles
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Los Santos Sheriff's Department maintains a modern fleet of
                    patrol vehicles and specialized equipment to ensure our officers
                    can respond effectively to any situation.
                  </p>
                  <p>
                    Our fleet includes patrol cars, motorcycles, helicopters, and
                    specialized vehicles for our SWAT, K9, and Traffic Enforcement units.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Fleet Specifications
                  </Button>
                  <NavLink to="/media">
                    <Button>
                      View Gallery
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div>
                <img
                  src={patrolFleet}
                  alt="LSSD Patrol Fleet"
                  className="w-full rounded-lg professional-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
