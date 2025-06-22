
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Grace to Speak - Part 3: Speaking Truth in Love",
      date: "January 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Community Fellowship Hall",
      address: "123 Faith Street, Graceville, TX 75001",
      description: "Join us for the third installment of our Grace to Speak series, where we explore how God's grace empowers us to speak truth with love and compassion. This evening will feature new worship songs and a powerful message on biblical communication.",
      rsvpLink: "https://forms.google.com/rsvp-grace-to-speak-3",
      featured: true
    },
    {
      id: 2,
      title: "Youth Worship Night",
      date: "February 14, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Grace Community Church",
      address: "456 Hope Avenue, Graceville, TX 75002",
      description: "A special evening of contemporary worship designed for teens and young adults. Come experience God's love in a vibrant, energetic atmosphere with music that speaks to the heart of the next generation.",
      rsvpLink: "https://forms.google.com/youth-worship-valentine",
      featured: false
    },
    {
      id: 3,
      title: "Easter Sunrise Service",
      date: "April 20, 2025",
      time: "6:00 AM - 7:30 AM",
      location: "Graceville Community Park",
      address: "789 Resurrection Boulevard, Graceville, TX 75003",
      description: "Celebrate the resurrection of our Lord Jesus Christ with a beautiful outdoor sunrise service. We'll lead worship as the sun rises, symbolizing the light of Christ conquering darkness.",
      rsvpLink: "https://forms.google.com/easter-sunrise-2025",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Grace to Speak - Part 2: Words that Heal",
      date: "December 15, 2024",
      description: "An inspiring evening focused on how our words can bring healing and restoration to broken relationships and hurting hearts."
    },
    {
      title: "Christmas Candlelight Service",
      date: "December 24, 2024",
      description: "A beautiful Christmas Eve service featuring traditional carols and contemporary worship celebrating the birth of our Savior."
    },
    {
      title: "Grace to Speak - Part 1: Finding Your Voice",
      date: "November 20, 2024",
      description: "The launch of our Grace to Speak series, exploring how God calls each of us to use our voice for His glory and kingdom purposes."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-sand via-heavenly-blue/20 to-grace-gold/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-olive-charcoal mb-6 animate-fade-in">
            Worship Events
          </h1>
          <p className="text-2xl font-dancing text-olive-charcoal/80 mb-8">
            Join Us in Praise and Fellowship
          </p>
          <p className="text-lg text-olive-charcoal/70 max-w-3xl mx-auto">
            Experience the power of communal worship and spiritual growth through our 
            carefully planned events and ongoing worship series.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal text-center mb-12">
            Upcoming Events
          </h2>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className={`${event.featured ? 'bg-grace-gold/10 border-grace-gold' : 'bg-white/60'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-playfair text-olive-charcoal mb-2">
                        {event.title}
                        {event.featured && (
                          <span className="ml-3 px-3 py-1 text-sm bg-grace-gold text-olive-charcoal rounded-full font-semibold">
                            Featured
                          </span>
                        )}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-olive-charcoal/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal font-semibold"
                        onClick={() => window.open(event.rsvpLink, '_blank')}
                      >
                        RSVP Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                        onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(event.address)}`, '_blank')}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-olive-charcoal/80 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="bg-white/50 rounded-lg p-4">
                    <p className="text-sm text-olive-charcoal/70">
                      <strong>Address:</strong> {event.address}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-heavenly-blue/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal text-center mb-12">
            Recent Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="bg-white/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-olive-charcoal mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-olive-charcoal/70 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <p className="text-olive-charcoal/80 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dusty-rose/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-lg text-olive-charcoal/80 mb-8">
            Never miss a worship event or special service. Get notifications about 
            new events, series announcements, and ministry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal font-semibold"
            >
              Subscribe to Updates
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
              onClick={() => window.open('https://calendar.google.com', '_blank')}
            >
              Add to Google Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
