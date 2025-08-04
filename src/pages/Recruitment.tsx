import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  GraduationCap, 
  Heart, 
  DollarSign, 
  Calendar,
  Users,
  CheckCircle,
  Clock
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Recruitment = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Starting salary of $65,000 with regular increases and performance bonuses."
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage for you and your family."
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Tuition reimbursement and continuing education opportunities."
    },
    {
      icon: Calendar,
      title: "Retirement Plan",
      description: "Excellent pension plan with early retirement options after 20 years of service."
    }
  ];

  const requirements = [
    "Must be at least 21 years of age",
    "High school diploma or equivalent required",
    "Valid driver's license with clean driving record",
    "Pass physical fitness and medical examinations",
    "Complete background investigation and psychological evaluation",
    "U.S. citizen or legally authorized to work in the United States",
    "No felony convictions or serious misdemeanors"
  ];

  const process = [
    {
      step: "1",
      title: "Application Submission",
      description: "Submit your online application with all required documents and certificates.",
      timeframe: "1-2 weeks processing"
    },
    {
      step: "2",
      title: "Written Examination",
      description: "Take the POST written examination covering basic skills and knowledge.",
      timeframe: "Scheduled within 30 days"
    },
    {
      step: "3",
      title: "Physical Fitness Test",
      description: "Complete the physical agility test demonstrating required fitness levels.",
      timeframe: "Same day as written exam"
    },
    {
      step: "4",
      title: "Background Investigation",
      description: "Comprehensive background check including interviews and reference verification.",
      timeframe: "4-8 weeks"
    },
    {
      step: "5",
      title: "Medical & Psychological",
      description: "Medical examination and psychological evaluation by certified professionals.",
      timeframe: "2-3 weeks"
    },
    {
      step: "6",
      title: "Final Interview",
      description: "Panel interview with command staff and final hiring decision.",
      timeframe: "1 week"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Join Our Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Start Your Career in Law Enforcement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the Los Santos Sheriff's Department and make a difference in your community. 
            We're looking for dedicated individuals ready to serve and protect.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8">
              <Shield className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Employee Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Benefits Package
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We value our officers and provide excellent benefits to support their career and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Eligibility</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Minimum Requirements
              </h2>
              <p className="text-muted-foreground">
                To become a Los Santos Sheriff's Deputy, candidates must meet the following requirements:
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Application Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How to Apply
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our thorough selection process ensures we hire the best candidates for our team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{step.timeframe}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Serve Your Community?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding career in law enforcement. Join our team and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Shield className="mr-2 h-5 w-5" />
              Apply Online
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Users className="mr-2 h-5 w-5" />
              Attend Info Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruitment;