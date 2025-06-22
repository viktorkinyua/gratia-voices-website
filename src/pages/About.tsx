
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Lead Vocalist & Worship Leader",
      bio: "Sarah has been leading worship for over 8 years, with a heart for bringing people closer to God through music. She believes in the transformative power of grace and loves seeing how worship can change lives.",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "David Thompson",
      role: "Music Director & Guitarist",
      bio: "David combines his passion for music with his calling to ministry. With a background in both contemporary and traditional worship styles, he helps craft musical experiences that speak to all generations.",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Maria Santos",
      role: "Pianist & Vocalist",
      bio: "Maria brings a gentle spirit and incredible musical talent to our ministry. Her piano arrangements create atmospheric worship moments that help congregations connect with the divine.",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Michael Rodriguez",
      role: "Drummer & Youth Coordinator",
      bio: "Michael's energetic worship style and heart for youth ministry helps bridge generations in worship. He coordinates our outreach programs and youth worship initiatives.",
      image: "/placeholder.svg?height=300&width=300"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-sand via-heavenly-blue/20 to-dusty-rose/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-olive-charcoal mb-6 animate-fade-in">
            About Gratia Voices
          </h1>
          <p className="text-2xl font-dancing text-olive-charcoal/80 mb-8">
            Our Story of Grace and Calling
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-6">
              Our Mission & Calling
            </h2>
            <div className="bg-white/60 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-olive-charcoal/80 mb-6 leading-relaxed">
                Gratia Voices was born from a divine calling to minister through music and worship. 
                We believe that worship is not just singing songs, but creating space for hearts to 
                encounter the living God. Our name "Gratia" comes from the Latin word for grace, 
                reminding us that everything we do flows from God's unmerited favor.
              </p>
              <blockquote className="text-xl font-playfair text-olive-charcoal border-l-4 border-grace-gold pl-6 mb-6 italic">
                "He has saved us and called us to a holy life—not because of anything we have done 
                but because of his own purpose and grace." - 2 Timothy 1:9
              </blockquote>
              <p className="text-lg text-olive-charcoal/80 leading-relaxed">
                We are committed to creating worship experiences that transcend musical preferences 
                and denominational boundaries, focusing instead on the heart of worship: glorifying 
                God and edifying His people. Through our "Grace to Speak" series and community 
                outreach, we aim to be vessels through which God's love and truth flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Foundation */}
      <section className="py-16 bg-heavenly-blue/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal text-center mb-12">
            Our Scripture Foundation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/70 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  2 Timothy 1:9
                </h3>
                <p className="text-lg text-olive-charcoal/80 mb-4 italic">
                  "He has saved us and called us to a holy life—not because of anything we have done 
                  but because of his own purpose and grace."
                </p>
                <p className="text-olive-charcoal/70">
                  This verse reminds us that our calling to ministry comes not from our own merit, 
                  but from God's grace and purpose for our lives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-4">
                  Isaiah 6:8
                </h3>
                <p className="text-lg text-olive-charcoal/80 mb-4 italic">
                  "Then I heard the voice of the Lord saying, 'Whom shall I send? And who will go for us?' 
                  And I said, 'Here am I. Send me!'"
                </p>
                <p className="text-olive-charcoal/70">
                  Like Isaiah, we respond to God's call with willing hearts, ready to serve and 
                  minister wherever He leads us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-olive-charcoal/80 max-w-3xl mx-auto">
              God has brought together a diverse group of musicians and worship leaders, 
              each with their own unique gifts and calling to serve in worship ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-grace-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-playfair font-bold text-olive-charcoal">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold text-olive-charcoal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-grace-gold font-semibold mb-4">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-olive-charcoal/80 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-dusty-rose/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-8">
            Our Vision for the Future
          </h2>
          <div className="bg-white/70 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-olive-charcoal/80 mb-6 leading-relaxed">
              As we look to the future, we envision Gratia Voices growing into a ministry that 
              reaches beyond our local community. We dream of recording worship albums that 
              can bless people around the world, hosting regional worship conferences, and 
              training up the next generation of worship leaders.
            </p>
            <p className="text-lg text-olive-charcoal/80 leading-relaxed">
              But above all, we remain committed to our core calling: creating space for 
              authentic worship where hearts can encounter the transforming grace of God. 
              Whether we're leading a small congregation or a large gathering, our prayer 
              remains the same—that God would be glorified and His people would be blessed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
