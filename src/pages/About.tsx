import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lssdHQ from "@/assets/lssd-headquarters.jpg";

const About = () => {
  const timeline = [
    {
      year: "1872",
      title: "Department Founded",
      description: "Los Santos Sheriff's Department established to serve the growing county population."
    },
    {
      year: "1923",
      title: "First Motor Patrol Unit",
      description: "Introduction of motorized patrol vehicles revolutionizes law enforcement capabilities."
    },
    {
      year: "1965",
      title: "Communications Center",
      description: "State-of-the-art 911 emergency communication center opens, improving response times."
    },
    {
      year: "1987",
      title: "SWAT Team Formation",
      description: "Specialized tactical unit formed to handle high-risk situations and protect our community."
    },
    {
      year: "1998",
      title: "K9 Unit Expansion",
      description: "Canine unit expanded to include drug detection, tracking, and explosive detection capabilities."
    },
    {
      year: "2010",
      title: "Air Support Unit",
      description: "Helicopter unit established to provide aerial support for patrol operations and emergency response."
    },
    {
      year: "2020",
      title: "Community Policing Initiative",
      description: "Launch of comprehensive community outreach programs to strengthen police-community relations."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Accreditation Excellence",
      description: "Maintaining state accreditation for over 15 consecutive years, demonstrating our commitment to professional standards."
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Achieving a 92% community satisfaction rating through transparent and respectful policing practices."
    },
    {
      icon: TrendingUp,
      title: "Crime Reduction",
      description: "35% reduction in major crimes over the past decade through proactive community policing strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${lssdHQ})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About the Los Santos Sheriff's Department
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 150 years, we have proudly served the citizens of Los Santos County with 
            unwavering dedication, professionalism, and integrity.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To protect and serve the people of Los Santos County with professionalism, 
                    integrity, and respect while maintaining the highest standards of law enforcement. 
                    We are committed to building partnerships with our community to enhance public 
                    safety and improve quality of life for all residents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Integrity</h4>
                      <p className="text-sm text-muted-foreground">Upholding the highest ethical standards in all our actions.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Respect</h4>
                      <p className="text-sm text-muted-foreground">Treating every individual with dignity and fairness.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Accountability</h4>
                      <p className="text-sm text-muted-foreground">Taking responsibility for our actions and decisions.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Excellence</h4>
                      <p className="text-sm text-muted-foreground">Striving for the highest quality in everything we do.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Heritage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Department History
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped the Los Santos Sheriff's Department 
              into the professional organization it is today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="secondary" className="font-bold">{event.year}</Badge>
                        <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Recognition</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take pride in our accomplishments and continuous efforts to 
              serve our community with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <achievement.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Legacy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Leadership</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Notable Former Sheriffs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Honoring the dedicated leaders who have shaped our department's legacy 
                of service and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Sheriff John Martinez (1985-2010)</h3>
                  <p className="text-muted-foreground mb-4">
                    Led the department through significant modernization, including the implementation 
                    of advanced technology and the establishment of specialized units.
                  </p>
                  <Badge variant="outline">25 Years of Service</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Sheriff Patricia Davis (2010-2020)</h3>
                  <p className="text-muted-foreground mb-4">
                    Pioneered community policing initiatives and diversity programs that strengthened 
                    relationships between the department and the community.
                  </p>
                  <Badge variant="outline">10 Years of Service</Badge>
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

export default About;