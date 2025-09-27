import { Phone, Calendar, Car, Wrench, Settings, Wind, CheckCircle, Battery, Workflow, Cog, Zap, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import carServicingImage from '@/assets/car-servicing.jpg';
import diagnosticsImage from '@/assets/diagnostics.jpg';
import brakeRepairImage from '@/assets/brake-repair.jpg';
import batteryReplacementImage from '@/assets/battery-replacement.jpg';

const services = [
  {
    id: 1,
    name: 'Car servicing',
    description: 'Complete vehicle maintenance including oil changes, filter replacements, fluid checks, and comprehensive vehicle inspection to keep your car running at its best.',
    icon: Car,
    image: carServicingImage,
    features: ['Oil & filter change', 'Fluid level checks', 'Visual inspection', 'Safety checks']
  },
  {
    id: 2,
    name: 'Repairs',
    description: 'Professional automotive repair services for all makes and models. From minor fixes to major repairs, we handle it all with expertise and care.',
    icon: Wrench,
    image: brakeRepairImage,
    features: ['Engine repairs', 'Transmission work', 'Suspension fixes', 'Body work referrals']
  },
  {
    id: 3,
    name: 'Diagnostics',
    description: 'Advanced computer diagnostics to identify issues quickly and accurately. We use professional-grade equipment to pinpoint problems and provide solutions.',
    icon: Settings,
    image: diagnosticsImage,
    features: ['OBD scanning', 'Engine diagnostics', 'Electrical testing', 'Performance analysis']
  },
  {
    id: 4,
    name: 'Air conditioning',
    description: 'Complete AC system services including leak detection, refrigerant replacement, compressor repair, and system performance optimization.',
    icon: Wind,
    image: carServicingImage,
    features: ['AC leak detection', 'Gas recharge', 'Compressor repair', 'System cleaning']
  },
  {
    id: 5,
    name: 'Auto brake repair',
    description: 'Comprehensive brake system services including pad replacement, disc machining, brake fluid changes, and complete brake system inspection.',
    icon: CheckCircle,
    image: brakeRepairImage,
    features: ['Brake pad replacement', 'Disc machining', 'Brake fluid change', 'Safety inspection']
  },
  {
    id: 6,
    name: 'Auto battery replacement',
    description: 'Battery testing, replacement, and electrical system checks. We provide quality batteries with warranty and professional installation.',
    icon: Battery,
    image: batteryReplacementImage,
    features: ['Battery testing', 'Professional installation', 'Warranty included', 'Electrical checks']
  },
  {
    id: 7,
    name: 'Exhaust replacement',
    description: 'Complete exhaust system services including silencer replacement, catalytic converter work, and emissions testing.',
    icon: Workflow,
    image: carServicingImage,
    features: ['Silencer replacement', 'Pipe repairs', 'Cat converter service', 'Emissions testing']
  },
  {
    id: 8,
    name: 'Auto maintenance',
    description: 'Regular maintenance services to prevent problems and extend vehicle life. Scheduled services tailored to your vehicle\'s needs.',
    icon: Cog,
    image: diagnosticsImage,
    features: ['Scheduled maintenance', 'Preventive care', 'Multi-point inspection', 'Service records']
  },
  {
    id: 9,
    name: 'Brakes',
    description: 'Specialized brake system services including emergency brake repair, ABS diagnostics, and complete brake system overhauls.',
    icon: CheckCircle,
    image: brakeRepairImage,
    features: ['Emergency repairs', 'ABS diagnostics', 'System overhauls', '24/7 availability']
  },
  {
    id: 10,
    name: 'Electrical repair',
    description: 'Automotive electrical system diagnosis and repair including alternator, starter motor, wiring, and electronic component repairs.',
    icon: Zap,
    image: diagnosticsImage,
    features: ['Alternator repair', 'Starter motor service', 'Wiring repairs', 'Electronic diagnostics']
  },
  {
    id: 11,
    name: 'General repairs and maintenance',
    description: 'Comprehensive automotive care covering all aspects of vehicle maintenance and repair. Your one-stop solution for automotive needs.',
    icon: Hammer,
    image: carServicingImage,
    features: ['All repairs covered', 'Maintenance plans', 'Quality parts', 'Expert service']
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dm-sans">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Car Repair Mobile Mechanic Birmingham offers these services
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="card-3d shadow-card hover:shadow-card-hover">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="relative overflow-hidden rounded-l-lg">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                      </div>
                      
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <service.icon className="w-8 h-8 text-primary" />
                            <h3 className="text-xl font-bold text-foreground font-dm-sans">
                              {service.name}
                            </h3>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            size="default"
                            className="flex-1"
                            asChild
                          >
                            <Link to="/contact">
                              <Calendar className="w-4 h-4 mr-2" />
                              Book
                            </Link>
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="default"
                            className="flex-1"
                            asChild
                          >
                            <a href="tel:+447311345533">
                              <Phone className="w-4 h-4 mr-2" />
                              Call
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-dm-sans">
              Need a Service Not Listed?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We provide comprehensive automotive services. If you don't see what you need, give us a call - we can help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-large bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-large border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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

export default Services;