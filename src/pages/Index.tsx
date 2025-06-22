
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Music, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-olive-charcoal mb-6">
            Gratia Voices
          </h1>
          <p className="text-2xl md:text-3xl font-dancing text-olive-charcoal/80 mb-8">
            Called by Grace. Gathered in Praise.
          </p>
          <p className="text-lg md:text-xl text-olive-charcoal/70 mb-12 max-w-2xl mx-auto font-inter">
            "He has saved us and called us to a holy life—not because of anything we have done 
            but because of his own purpose and grace." - 2 Timothy 1:9
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal font-semibold">
              <Link to="/events">Upcoming Events</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand">
              <Link to="/music">Listen to Our Music</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-olive-charcoal mb-6">
              Our Calling
            </h2>
            <p className="text-xl text-olive-charcoal/80 max-w-3xl mx-auto">
              We are a worship ministry dedicated to leading hearts in praise, sharing the grace of God 
              through music, and building a community centered on faith and spiritual growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/50 border-grace-gold/20 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <Music className="h-12 w-12 text-grace-gold mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Worship Ministry
                </h3>
                <p className="text-olive-charcoal/70">
                  Leading congregations in heartfelt worship through contemporary and traditional hymns 
                  that glorify God and inspire spiritual connection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-grace-gold/20 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-grace-gold mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Community Outreach
                </h3>
                <p className="text-olive-charcoal/70">
                  Bringing hope and faith to local communities through concerts, events, and 
                  collaborative worship experiences that unite believers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-grace-gold/20 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-grace-gold mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Spiritual Growth
                </h3>
                <p className="text-olive-charcoal/70">
                  Fostering deeper relationships with God through devotionals, scripture study, 
                  and music that speaks to the soul and transforms hearts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-heavenly-blue/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-4">
              Join Us in Worship
            </h2>
            <p className="text-xl text-olive-charcoal/80">
              Experience the power of communal praise and spiritual fellowship
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Grace to Speak Series
                </h3>
                <p className="text-olive-charcoal/80 mb-6">
                  A powerful worship series exploring how God's grace empowers us to speak truth, 
                  love, and hope into our communities. Join us for an evening of inspiring music 
                  and spiritual reflection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal">
                    <Link to="/events">View All Events</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand">
                    <Link to="/contact">Book Us</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-grace-gold/20 rounded-lg p-6 text-center">
                <div className="text-4xl font-playfair font-bold text-olive-charcoal mb-2">
                  Next Event
                </div>
                <div className="text-2xl font-semibold text-olive-charcoal mb-2">
                  January 28th, 2025
                </div>
                <div className="text-olive-charcoal/80">
                  7:00 PM - 9:00 PM
                </div>
                <div className="text-olive-charcoal/80">
                  Community Fellowship Hall
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
