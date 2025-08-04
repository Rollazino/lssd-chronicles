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
      name: "Patrol Division",
      description: "Our frontline officers providing 24/7 community protection and emergency response.",
      responsibilities: [
        "Emergency response and first aid",
        "Traffic enforcement and accident investigation",
        "Crime prevention and community policing",
        "Initial investigation of reported crimes",
        "Public safety and order maintenance"
      ],
      coverage: "County-wide",
      personnel: "280+ Officers",
      vehicles: "65 Patrol Units"
    },
    {
      icon: AlertTriangle,
      name: "Traffic Enforcement Unit",
      description: "Specialized officers focused on road safety and traffic law enforcement.",
      responsibilities: [
        "Highway and arterial road patrol",
        "Major accident investigation",
        "Commercial vehicle enforcement",
        "Speed and DUI enforcement",
        "Traffic safety education programs"
      ],
      coverage: "Major roadways and highways",
      personnel: "45 Officers",
      vehicles: "15 Motorcycles, 8 Patrol Cars"
    },
    {
      icon: Search,
      name: "Detective Bureau",
      description: "Experienced investigators handling complex criminal cases and follow-up investigations.",
      responsibilities: [
        "Felony crime investigation",
        "Evidence collection and analysis",
        "Witness interviews and case preparation",
        "Coordination with prosecutor's office",
        "Cold case investigations"
      ],
      coverage: "County-wide investigations",
      personnel: "35 Detectives",
      vehicles: "12 Unmarked Units"
    },
    {
      icon: Shield,
      name: "Special Weapons and Tactics (SWAT)",
      description: "Elite tactical unit for high-risk operations and emergency situations.",
      responsibilities: [
        "High-risk warrant service",
        "Hostage rescue operations",
        "Counter-terrorism activities",
        "Dignitary protection",
        "Crisis intervention and negotiation"
      ],
      coverage: "County-wide tactical response",
      personnel: "20 Tactical Officers",
      vehicles: "3 Armored Vehicles, 2 Command Units"
    },
    {
      icon: Plane,
      name: "Air Support Unit",
      description: "Helicopter operations providing aerial support for ground units and emergency services.",
      responsibilities: [
        "Aerial patrol and surveillance",
        "Search and rescue operations",
        "Medical evacuation services",
        "Traffic monitoring and enforcement",
        "Emergency response coordination"
      ],
      coverage: "Entire county airspace",
      personnel: "12 Pilots and Crew",
      vehicles: "2 Helicopters"
    },
    {
      icon: Dog,
      name: "K9 Unit",
      description: "Specially trained canine teams for detection and apprehension operations.",
      responsibilities: [
        "Drug and narcotic detection",
        "Explosive device detection",
        "Suspect tracking and apprehension",
        "Evidence recovery operations",
        "Community education and demonstrations"
      ],
      coverage: "County-wide deployment",
      personnel: "8 K9 Teams",
      vehicles: "8 Specialized K9 Units"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Specialized Units</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Divisions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Los Santos Sheriff's Department operates multiple specialized divisions, 
            each expertly trained to handle specific aspects of law enforcement and community service.
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
                    <h4 className="font-semibold text-primary mb-3">Key Responsibilities</h4>
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
                        <p className="text-xs text-muted-foreground">Coverage</p>
                        <p className="text-sm font-medium">{division.coverage}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Personnel</p>
                        <p className="text-sm font-medium">{division.personnel}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Fleet</p>
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
            <Badge variant="outline" className="mb-6">Coordination</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Unified Command Structure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              All divisions work in coordination under a unified command structure to ensure 
              efficient resource allocation, seamless communication, and effective response 
              to incidents requiring multiple specialties.
            </p>
            
            <Card className="text-left">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Inter-Division Collaboration</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Joint training exercises and scenarios</li>
                      <li>• Shared intelligence and information systems</li>
                      <li>• Coordinated response protocols</li>
                      <li>• Cross-training opportunities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-3">24/7 Operations Center</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Central dispatch and coordination</li>
                      <li>• Real-time resource tracking</li>
                      <li>• Emergency response management</li>
                      <li>• Inter-agency communication hub</li>
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