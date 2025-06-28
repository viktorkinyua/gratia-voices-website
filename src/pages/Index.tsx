import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Music, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-start relative overflow-hidden animate-fade-in bg-cover bg-center bg-no-repeat bg-[url('/images/hero.jpeg')]">
        <div className="absolute inset-0 backdrop-blur-sm bg-white/2 p-8 rounded-md"></div>
        <div className="relative z-10 w-full max-w-3xl pl-0 pr-4 md:pl-24 py-4 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-grace-gold">
            Gratia Voices
          </h1>
          <p className="text-3xl md:text-3xl font-dancing text-white/75 mb-8">
            Called by Grace. Gathered in Praise.
          </p>
          <p className="text-lg md:text-xl text-grace-gold mb-12 max-w-2xl mx-auto font-inter">
            "He has saved us and called us to a holy life—not because of
            anything we have done but because of his own purpose and grace." - 2
            Timothy 1:9
          </p>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <Button
              asChild
              size="lg"
              className="bg-grace-gold hover:bg-grace-gold/90 text-white"
            >
              <Link to="/events">Upcoming Events</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
            >
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
              We are a worship ministry dedicated to leading hearts in praise,
              sharing the grace of God through music, and building a community
              centered on faith and spiritual growth.
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
                  Leading congregations in heartfelt worship through
                  contemporary and traditional hymns that glorify God and
                  inspire spiritual connection.
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
                  Bringing hope and faith to local communities through concerts,
                  events, and collaborative worship experiences that unite
                  believers.
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
                  Fostering deeper relationships with God through devotionals,
                  scripture study, and music that speaks to the soul and
                  transforms hearts.
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
                  Grace to Speak
                </h3>
                <p className="text-olive-charcoal/80 mb-6">
                  A powerful worship experience exploring how God's grace empowers
                  us to speak truth, love, and hope into our communities. Join
                  us for an evening of inspiring music and spiritual reflection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal"
                  >
                    <Link to="/events">View All Events</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                  >
                    <Link to="/contact">Book Us</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-grace-gold/20 rounded-lg p-6 text-center">
                <div className="text-4xl font-playfair font-bold text-olive-charcoal mb-2">
                  Next Event
                </div>
                <div className="text-2xl font-semibold text-olive-charcoal mb-2">
                  June 29th, 2025
                </div>
                <div className="text-olive-charcoal/80">2:00 PM - 5:00 PM</div>
                <div className="text-olive-charcoal/80">
                  PCEA Highway Church
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
