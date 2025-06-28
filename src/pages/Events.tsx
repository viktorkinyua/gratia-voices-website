import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Grace to Speak",
      date: "June 29, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "PCEA Highway Church",
      address: "QWR7+PVP, D.O's Rd, Githurai",
      description:
        "Join us for 'Grace [to Speak]' worship experience, where we explore how God's grace empowers us to speak truth with love and compassion. This afternoon will feature worship songs and a powerful message on God's GRACE.",
      rsvpLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSez68wjjy___r2djjh1d-GUTRDphBZLGwjkZw0a5X9KxQzDuw/viewform?usp=header",
      youtube:
        "https://youtube.com/playlist?list=PLsWEoNTspo8yoveiAv5ZaPQirOqhWIRLo",
      spotify: "https://open.spotify.com/playlist/4V7YZIouHJkLNJJqTqvcF0",
      featured: true,
    },
  ];

  const pastEvents = [];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black/20 from-warm-sand via-heavenly-blue/20 to-grace-gold/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-olive-charcoal mb-6 animate-fade-in">
            Worship Events
          </h1>
          <p className="text-2xl font-dancing text-olive-charcoal/80 mb-8">
            Join Us in Praise and Fellowship
          </p>
          <p className="text-lg text-olive-charcoal/70 max-w-3xl mx-auto">
            Experience the power of communal worship and spiritual growth
            through our carefully planned events and ongoing worship series.
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
                className={`${
                  event.featured ? "bg-grace-gold/10" : "bg-white/60"
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-3xl md:text-4xl font-playfair text-olive-charcoal mb-2">
                        {event.title}
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
                        onClick={() => window.open(event.rsvpLink, "_blank")}
                      >
                        RSVP Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                        onClick={() =>
                          window.open(
                            `https://maps.app.goo.gl/ymBnHvo2TKUsPmdMA?g_st=aw`,
                            "_blank"
                          )
                        }
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
                  <div>
                    {(event.youtube || event.spotify) && (
                      <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        {event.youtube && (
                          <Button
                            variant="outline"
                            className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                            onClick={() => window.open(event.youtube, "_blank")}
                          >
                            Watch Playlist on YouTube
                          </Button>
                        )}
                        {event.spotify && (
                          <Button
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                            onClick={() => window.open(event.spotify, "_blank")}
                          >
                            Listen on Spotify
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {/* <section className="py-16 bg-heavenly-blue/10">
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
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-dusty-rose/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-lg text-olive-charcoal/80 mb-8">
            Never miss a worship event or special service. Get notifications
            about new events, series announcements, and ministry updates.
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
              onClick={() =>
                window.open("https://calendar.google.com", "_blank")
              }
            >
              Add to Google Calendar
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Events;
