
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    church: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      church: '',
      eventDate: '',
      eventType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-sand via-heavenly-blue/20 to-dusty-rose/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-olive-charcoal mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-2xl font-dancing text-olive-charcoal/80 mb-8">
            Let's Connect and Worship Together
          </p>
          <p className="text-lg text-olive-charcoal/70 max-w-3xl mx-auto">
            Whether you're interested in booking us for an event, collaborating on ministry, 
            or simply want to connect, we'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/70 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-playfair text-olive-charcoal mb-4">
                Book Us for Your Event
              </CardTitle>
              <p className="text-olive-charcoal/80">
                We'd be honored to lead worship at your church, conference, retreat, or special event. 
                Fill out the form below and we'll get back to you soon.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-olive-charcoal mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-olive-charcoal/20 focus:border-grace-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-olive-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-olive-charcoal/20 focus:border-grace-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="church" className="block text-sm font-medium text-olive-charcoal mb-2">
                    Church/Organization Name
                  </label>
                  <Input
                    id="church"
                    name="church"
                    type="text"
                    value={formData.church}
                    onChange={handleChange}
                    className="border-olive-charcoal/20 focus:border-grace-gold"
                    placeholder="Grace Community Church"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-olive-charcoal mb-2">
                      Preferred Event Date
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="border-olive-charcoal/20 focus:border-grace-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-olive-charcoal mb-2">
                      Event Type
                    </label>
                    <Input
                      id="eventType"
                      name="eventType"
                      type="text"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="border-olive-charcoal/20 focus:border-grace-gold"
                      placeholder="Sunday Service, Conference, Retreat, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-olive-charcoal mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-olive-charcoal/20 focus:border-grace-gold min-h-[120px]"
                    placeholder="Tell us about your event, the style of worship you're looking for, expected attendance, and any special requests..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal font-semibold text-lg py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/70 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-grace-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-olive-charcoal mb-1">Email Us</h4>
                      <p className="text-olive-charcoal/80">ministry@gratiavvoices.org</p>
                      <p className="text-olive-charcoal/80">booking@gratiavvoices.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-grace-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-olive-charcoal mb-1">Home Base</h4>
                      <p className="text-olive-charcoal/80">
                        Grace Community Church<br />
                        456 Hope Avenue<br />
                        Graceville, TX 75002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-grace-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-olive-charcoal mb-1">Response Time</h4>
                      <p className="text-olive-charcoal/80">
                        We typically respond to booking inquiries within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-grace-gold/10 border-grace-gold shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Ministry Opportunities
                </h3>
                <p className="text-olive-charcoal/80 mb-6">
                  We're always looking for opportunities to serve and collaborate with other ministries. 
                  Here are some ways we can serve together:
                </p>
                
                <ul className="space-y-3 text-olive-charcoal/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-grace-gold rounded-full"></div>
                    Sunday morning worship services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-grace-gold rounded-full"></div>
                    Church conferences and retreats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-grace-gold rounded-full"></div>
                    Youth and young adult events
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-grace-gold rounded-full"></div>
                    Community outreach events
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-grace-gold rounded-full"></div>
                    Worship leader training workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-grace-gold rounded-full"></div>
                    Special holiday services
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/70 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Follow Us
                </h3>
                <p className="text-olive-charcoal/80 mb-6">
                  Stay connected with our ministry and get updates on new music, events, and devotionals.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                    onClick={() => window.open('https://facebook.com/gratiavvoices', '_blank')}
                  >
                    Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                    onClick={() => window.open('https://instagram.com/gratiavvoices', '_blank')}
                  >
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                    onClick={() => window.open('https://youtube.com/@gratiavvoices', '_blank')}
                  >
                    YouTube
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                    onClick={() => window.open('mailto:ministry@gratiavvoices.org', '_blank')}
                  >
                    Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
