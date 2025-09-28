import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using Supabase edge function
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
        },
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dm-sans">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Get in touch for professional automotive services
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-dm-sans flex items-center gap-3">
                    <MessageCircle className="w-8 h-8 text-primary" />
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate" className="text-sm font-medium text-foreground">
                          Preferred Date
                        </Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime" className="text-sm font-medium text-foreground">
                          Preferred Time
                        </Label>
                        <Input
                          id="preferredTime"
                          name="preferredTime"
                          type="time"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 min-h-[120px]"
                        placeholder="Describe your vehicle issue or service requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full btn-large"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 p-6 bg-primary rounded-xl text-primary-foreground text-center">
                    <h3 className="font-semibold text-lg mb-3">Need immediate assistance?</h3>
                    <Button
                      size="lg"
                      className="btn-large bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href="tel:+447311345533">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now: +44 7311 345533
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-dm-sans">
                      Contact Information
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Phone</h4>
                          <a 
                            href="tel:+447311345533"
                            className="text-primary hover:text-primary-hover transition-colors"
                          >
                            +44 7311 345533
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Email</h4>
                          <a 
                            href="mailto:semiosho111@gmail.com"
                            className="text-primary hover:text-primary-hover transition-colors"
                          >
                            semiosho111@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Opening Hours</h4>
                          <p className="text-muted-foreground">
                            Mon-Fri: 8:30am – 11:00pm
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-dm-sans">
                      Frequently Asked Questions
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">How much do you charge?</h4>
                        <p className="text-muted-foreground text-sm">
                          Our prices are competitive and transparent. We provide quotes before starting work and charge fairly for quality service.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">What's your travel radius?</h4>
                        <p className="text-muted-foreground text-sm">
                          We serve Birmingham and surrounding areas. Call us to confirm if we can reach your location.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">What payments do you accept?</h4>
                        <p className="text-muted-foreground text-sm">
                          We accept cash, bank transfers, and most major payment methods for your convenience.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;