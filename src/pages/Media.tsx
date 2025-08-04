import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Image, 
  Video, 
  Calendar,
  Download,
  Eye,
  Users
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Media = () => {
  const pressReleases = [
    {
      date: "2024-01-20",
      title: "LSSD Announces New Community Policing Initiative",
      excerpt: "Department launches comprehensive program to strengthen community relationships and enhance public safety.",
      category: "Community Relations"
    },
    {
      date: "2024-01-18",
      title: "Major Drug Operation Nets Significant Arrests",
      excerpt: "Multi-agency operation results in seizure of illegal narcotics and arrest of suspected dealers.",
      category: "Operations"
    },
    {
      date: "2024-01-15",
      title: "Sheriff Williams Receives State Recognition",
      excerpt: "Sheriff honored for leadership in law enforcement innovation and community engagement.",
      category: "Awards"
    },
    {
      date: "2024-01-12",
      title: "K9 Unit Graduates New Detection Dogs",
      excerpt: "Three new canine officers complete specialized training and join the department's K9 unit.",
      category: "Training"
    }
  ];

  const mediaAssets = [
    {
      type: "image",
      title: "LSSD Badge High Resolution",
      description: "Official department badge in various formats for media use.",
      formats: ["PNG", "SVG", "EPS"],
      size: "2.1 MB"
    },
    {
      type: "image",
      title: "Sheriff Williams Official Portrait",
      description: "Professional headshot of Sheriff Robert Williams for media purposes.",
      formats: ["JPG", "PNG"],
      size: "1.8 MB"
    },
    {
      type: "video",
      title: "Department Overview Video",
      description: "5-minute video showcasing LSSD operations and community engagement.",
      formats: ["MP4", "MOV"],
      size: "45.2 MB"
    },
    {
      type: "document",
      title: "Annual Crime Statistics Report",
      description: "Comprehensive crime data and analysis for the previous year.",
      formats: ["PDF"],
      size: "3.4 MB"
    },
    {
      type: "image",
      title: "Patrol Fleet Photos",
      description: "Collection of high-resolution photos of department vehicles.",
      formats: ["JPG", "PNG"],
      size: "12.5 MB"
    },
    {
      type: "document",
      title: "Department Fact Sheet",
      description: "Key statistics, contact information, and department overview.",
      formats: ["PDF", "DOC"],
      size: "850 KB"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "image":
        return Image;
      case "video":
        return Video;
      case "document":
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "image":
        return "bg-blue-500/10 text-blue-600";
      case "video":
        return "bg-purple-500/10 text-purple-600";
      case "document":
        return "bg-green-500/10 text-green-600";
      default:
        return "bg-gray-500/10 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Media Center</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Media Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access press releases, photos, videos, and other media resources for news coverage 
            and community information about the Los Santos Sheriff's Department.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Latest News</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Press Releases
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest news and updates from the Los Santos Sheriff's Department.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="secondary">{release.category}</Badge>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(release.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {release.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {release.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Button variant="outline">
                          <Eye className="mr-2 h-4 w-4" />
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View All Press Releases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Download Center</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Media Assets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-quality photos, videos, and documents available for download by media professionals and community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAssets.map((asset, index) => {
              const Icon = getIcon(asset.type);
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${getTypeColor(asset.type)}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {asset.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{asset.title}</CardTitle>
                    <CardDescription>{asset.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Formats:</span>
                        <span className="font-medium">{asset.formats.join(", ")}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">{asset.size}</span>
                      </div>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Media Inquiries</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                For media inquiries, interview requests, or additional information, please contact our Public Information Officer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Public Information Officer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold">Lieutenant Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">Public Information Officer</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Phone:</strong> (555) 123-4567 ext. 2100</p>
                    <p><strong>Email:</strong> media@lssd.gov</p>
                    <p><strong>Emergency:</strong> (555) 123-4567 ext. 9999</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Media Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All media requests should be directed to the PIO</li>
                    <li>• Interview requests require 24-hour advance notice</li>
                    <li>• Press conferences are announced via email alerts</li>
                    <li>• Crime scene access follows established protocols</li>
                    <li>• Social media guidelines apply to all content</li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Guidelines
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

export default Media;