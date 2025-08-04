import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Medal, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Command = () => {
  const commandStaff = [
    {
      name: "Sheriff Robert Williams",
      title: "Sheriff",
      experience: "32 years",
      description: "Leading the department with integrity and vision, Sheriff Williams has dedicated his career to community-oriented policing and public safety.",
      achievements: ["State Police Academy Honor Graduate", "Community Leadership Award 2020", "Excellence in Law Enforcement Medal"]
    },
    {
      name: "Undersheriff Maria Rodriguez",
      title: "Undersheriff",
      experience: "28 years",
      description: "Oversees daily operations and strategic planning. Expert in emergency management and inter-agency coordination.",
      achievements: ["Crisis Management Certification", "Leadership Excellence Award", "Public Safety Innovation Medal"]
    },
    {
      name: "Assistant Sheriff James Thompson",
      title: "Assistant Sheriff - Operations",
      experience: "25 years",
      description: "Manages patrol operations, traffic enforcement, and field services across all county precincts.",
      achievements: ["Traffic Safety Excellence Award", "Department Merit Medal", "Operations Leadership Certificate"]
    },
    {
      name: "Captain Sarah Mitchell",
      title: "Captain - Investigations",
      experience: "22 years",
      description: "Leads the Detective Bureau and specialized investigation units with expertise in major crimes and forensics.",
      achievements: ["Detective of the Year 2019", "Criminal Investigation Excellence", "Advanced Forensics Certification"]
    },
    {
      name: "Captain Michael Chen",
      title: "Captain - Special Operations",
      experience: "20 years",
      description: "Commands SWAT, K9 Unit, and Air Support operations. Tactical operations specialist and crisis negotiator.",
      achievements: ["Tactical Operations Medal", "Crisis Negotiation Expert", "Special Operations Leadership Award"]
    },
    {
      name: "Lieutenant Lisa Johnson",
      title: "Lieutenant - Community Relations",
      experience: "18 years",
      description: "Develops and implements community outreach programs and public engagement initiatives.",
      achievements: ["Community Partnership Award", "Public Relations Excellence", "Diversity and Inclusion Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Leadership</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Command Staff
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the experienced leadership team guiding the Los Santos Sheriff's Department 
            with dedication, expertise, and unwavering commitment to public safety.
          </p>
        </div>
      </section>

      {/* Command Staff */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commandStaff.map((officer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{officer.name}</CardTitle>
                      <CardDescription className="text-base font-medium">{officer.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Experience */}
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Experience: {officer.experience}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {officer.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Medal className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {officer.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Philosophy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Leadership Principles
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our command staff leads by example, embodying the values of integrity, accountability, 
              and service that define the Los Santos Sheriff's Department.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-primary mb-3">Servant Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Leading through service to our community and supporting our officers in their mission.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-primary mb-3">Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Embracing innovation and best practices to enhance public safety and service delivery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-primary mb-3">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintaining open communication with the community and accountability in all operations.
                  </p>
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

export default Command;