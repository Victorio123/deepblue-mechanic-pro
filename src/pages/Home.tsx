import { Star, Phone, Calendar, Wrench, Settings, Zap, Wind, Car, Battery, Workflow, Cog, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReviewsSection from '@/components/ReviewsSection';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-mechanic-black.jpg';
import carServicingImage from '@/assets/car-servicing-black.jpg';
import diagnosticsImage from '@/assets/diagnostics-black.jpg';
import brakeRepairImage from '@/assets/brake-repair-black.jpg';
import batteryReplacementImage from '@/assets/battery-replacement-black.jpg';

const services = [
  {
    id: 1,
    name: 'Car servicing',
    description: 'Complete vehicle maintenance and servicing',
    icon: Car,
    image: carServicingImage
  },
  {
    id: 2,
    name: 'Repairs',
    description: 'Professional automotive repair services',
    icon: Wrench,
    image: brakeRepairImage
  },
  {
    id: 3,
    name: 'Diagnostics',
    description: 'Advanced vehicle diagnostic testing',
    icon: Settings,
    image: diagnosticsImage
  },
  {
    id: 4,
    name: 'Air conditioning',
    description: 'AC system repair and maintenance',
    icon: Wind,
    image: carServicingImage
  },
  {
    id: 5,
    name: 'Auto brake repair',
    description: 'Brake system inspection and repair',
    icon: CheckCircle,
    image: brakeRepairImage
  },
  {
    id: 6,
    name: 'Auto battery replacement',
    description: 'Battery testing and replacement service',
    icon: Battery,
    image: batteryReplacementImage
  },
  {
    id: 7,
    name: 'Exhaust replacement',
    description: 'Exhaust system repair and replacement',
    icon: Workflow,
    image: carServicingImage
  },
  {
    id: 8,
    name: 'Auto maintenance',
    description: 'Regular maintenance and tune-ups',
    icon: Cog,
    image: diagnosticsImage
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen">{/* Remove pt-16 lg:pt-20 since Layout handles it */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional mobile mechanic working on car in Birmingham"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="text-primary-foreground font-semibold">4.9</span>
              </div>
              <span className="text-primary-foreground/80">(52 reviews)</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 font-dm-sans leading-tight">
              Car Repair Mobile Mechanic Birmingham
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Car Repair Mobile Mechanic Birmingham offers convenient and efficient automotive services right at your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-large bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
              className="btn-large border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="tel:+447311345533">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-dm-sans">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional automotive services delivered to your location
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.slice(0, 8).map((service) => (
              <Card key={service.id} className="card-3d shadow-card hover:shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="btn-large" asChild>
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-dm-sans">
              Why Choose CRMMB?
            </h2>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              Car Repair Mobile Mechanic Birmingham is one of the highest rated independent garages in Birmingham. Book online for an MOT, service or repair now!
            </p>
            <Button variant="outline" size="lg" className="btn-large" asChild>
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-dm-sans">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional automotive service at your doorstep today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-large bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-large border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground bg-transparent"
              asChild
            >
                <a href="tel:+447311345533">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Home;