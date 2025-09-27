import { Phone, Mail, MapPin, Star, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-mechanic.jpg';
import carServicingImage from '@/assets/car-servicing.jpg';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Professional automotive service team"
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-dm-sans">
                Car Repair Mobile Mechanic Birmingham
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Top rated independent garage
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Car Repair Mobile Mechanic Birmingham is one of the highest rated independent garages in Birmingham. Book online for an MOT, service or repair now!
                </p>
                <p className="text-xl text-foreground leading-relaxed mb-8">
                  Car Repair Mobile Mechanic Birmingham offers convenient and efficient automotive services right at your doorstep.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Top Rated</h3>
                    <p className="text-sm text-muted-foreground">4.9★ rating from 52+ reviews</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Fast Response</h3>
                    <p className="text-sm text-muted-foreground">Quick response time guaranteed</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Experienced</h3>
                    <p className="text-sm text-muted-foreground">Professional automotive expertise</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Mobile Service</h3>
                    <p className="text-sm text-muted-foreground">We come to your location</p>
                  </CardContent>
                </Card>
              </div>

              {/* Services Detail */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-dm-sans">Our Specialties</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Oil Changes</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Regular oil changes are essential for engine health. We use high-quality oils and filters to keep your vehicle running smoothly.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Mechanic Amenities</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Professional diagnostic equipment, quality parts, and experienced technicians ensure your vehicle receives the best care possible.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Appointments</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Flexible scheduling to fit your busy lifestyle. Same-day and emergency services available throughout Birmingham.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <img 
                    src={carServicingImage} 
                    alt="Professional car servicing"
                    className="w-full h-80 object-cover rounded-xl shadow-card"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Team Section */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center font-dm-sans">Meet Our Team</h2>
                <div className="max-w-2xl mx-auto text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-2xl">A</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Mr. Ade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lead mobile mechanic with years of experience serving the Birmingham area. Known for efficient service, clear communication, and fair pricing. Specializes in diagnostics, repairs, and comprehensive vehicle maintenance.
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold mb-6 font-dm-sans">Ready to Book Your Service?</h2>
                <p className="text-xl mb-8 opacity-90">Contact us today for professional automotive care</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    className="btn-large bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="tel:+447311345533">
                      <Phone className="w-5 h-5 mr-2" />
                      Call to book: +44 7311 345533
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-large border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <a href="mailto:contact@crmmb.co.uk">
                      <Mail className="w-5 h-5 mr-2" />
                      Email: contact@crmmb.co.uk
                    </a>
                  </Button>
                </div>

                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Our Location</h3>
                  <div className="flex items-start gap-3 justify-center">
                    <MapPin className="w-5 h-5 mt-1" />
                    <div className="text-left">
                      4, Southdown Avenue<br />
                      Birmingham B18 5LG<br />
                      United Kingdom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;