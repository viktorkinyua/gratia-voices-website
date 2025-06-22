
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music as MusicIcon } from 'lucide-react';

const Music = () => {
  const musicSets = [
    {
      title: "Grace to Speak - Worship Set",
      description: "A collection of original and contemporary worship songs from our ongoing Grace to Speak series, focusing on how God's grace empowers us to speak truth, love, and hope.",
      songs: [
        "Grace to Speak (Original)",
        "Words of Life",
        "Truth in Love",
        "Called by Grace",
        "Speak Through Me"
      ],
      youtubeId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      spotifyLink: "https://open.spotify.com/playlist/gratia-voices-grace-to-speak",
      featured: true
    },
    {
      title: "Sunday Morning Worship",
      description: "Our regular Sunday worship set featuring a blend of contemporary worship songs and classic hymns that create an atmosphere of reverence and praise.",
      songs: [
        "How Great Thou Art",
        "Oceans (Where Feet May Fail)",
        "Amazing Grace (My Chains Are Gone)",
        "What A Beautiful Name",
        "Holy Spirit"
      ],
      youtubeId: "dQw4w9WgXcQ", // Placeholder
      spotifyLink: "https://open.spotify.com/playlist/gratia-voices-sunday-worship",
      featured: false
    },
    {
      title: "Christmas Celebration",
      description: "A special collection of Christmas carols and contemporary holiday worship songs that celebrate the birth of our Savior Jesus Christ.",
      songs: [
        "O Holy Night",
        "Mary Did You Know",
        "Silent Night",
        "Joy to the World",
        "Emmanuel (God With Us)"
      ],
      youtubeId: "dQw4w9WgXcQ", // Placeholder
      spotifyLink: "https://open.spotify.com/playlist/gratia-voices-christmas",
      featured: false
    }
  ];

  const originalSongs = [
    {
      title: "Grace to Speak",
      lyrics: `Verse 1:
In the silence of my heart
You whispered hope anew
Called me from the shadows
Into Your perfect truth
Now I stand before Your throne
With nothing left to hide
Your grace has found my voice
And placed You by my side

Chorus:
Grace to speak Your love
Grace to share Your light
Grace to be Your voice
In a world that's lost its sight
You've given me the words
You've set my spirit free
Grace to speak, grace to speak
Your love through me

Verse 2:
When the world grows dark and cold
And fear begins to rise
I remember who I am
Reflected in Your eyes
Not by might or power
But by Your Spirit's call
Your grace becomes my strength
When I feel so very small

(Repeat Chorus)

Bridge:
Let my life be a testimony
Let my words bring hope and peace
Let Your love flow through me
Until all the world believes

(Repeat Chorus)`,
      story: "This song was born during a time of personal struggle when our lead vocalist Sarah felt called to step into a larger ministry role but battled with feelings of inadequacy. Through prayer and reflection on 2 Timothy 1:9, she realized that our calling comes not from our own abilities but from God's grace. The song became the foundation for our entire 'Grace to Speak' series."
    },
    {
      title: "Called by Grace",
      lyrics: `Verse 1:
Not because of what I've done
Not because I'm worthy
You called my name, You chose my heart
Your love pursuing me
From the depths of sin and shame
You lifted up my soul
Now I live to praise Your name
You've made this broken whole

Chorus:
Called by grace, saved by love
Nothing I could ever do
Would earn the gift You freely give
My life belongs to You
Called by grace, held by faith
In Your arms I'm finally home
Called by grace, called by grace
No longer on my own

Verse 2:
Every morning mercy new
Every breath a gift from You
In the struggle and the pain
Your faithfulness remains
You have plans I cannot see
Hope beyond my wildest dreams
In Your purpose I will stand
Safe within Your mighty hands

(Repeat Chorus)`,
      story: "Inspired by Ephesians 2:8-9, this song reminds us that our salvation and calling are entirely based on God's grace, not our works. It was written during a worship retreat where our team spent time reflecting on God's unmerited favor and how it transforms our identity and purpose."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-sand via-dusty-rose/20 to-grace-gold/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-olive-charcoal mb-6 animate-fade-in">
            Our Music
          </h1>
          <p className="text-2xl font-dancing text-olive-charcoal/80 mb-8">
            Worship Songs That Touch the Heart
          </p>
          <p className="text-lg text-olive-charcoal/70 max-w-3xl mx-auto">
            Experience our collection of worship music designed to draw hearts closer to God, 
            featuring both original compositions and carefully arranged contemporary and traditional hymns.
          </p>
        </div>
      </section>

      {/* Music Sets */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal text-center mb-12">
            Worship Sets & Albums
          </h2>

          <div className="space-y-8">
            {musicSets.map((set, index) => (
              <Card 
                key={index} 
                className={`${set.featured ? 'bg-grace-gold/10 border-grace-gold' : 'bg-white/60'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-playfair text-olive-charcoal mb-2">
                    {set.title}
                    {set.featured && (
                      <span className="ml-3 px-3 py-1 text-sm bg-grace-gold text-olive-charcoal rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </CardTitle>
                  <p className="text-olive-charcoal/80 leading-relaxed">
                    {set.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Video Player */}
                    <div>
                      <div className="aspect-video bg-olive-charcoal/10 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <MusicIcon className="h-16 w-16 text-olive-charcoal/40 mx-auto mb-4" />
                          <p className="text-olive-charcoal/60">
                            YouTube Player
                          </p>
                          <p className="text-sm text-olive-charcoal/40">
                            Video ID: {set.youtubeId}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button 
                          className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal font-semibold flex-1"
                          onClick={() => window.open(`https://youtube.com/watch?v=${set.youtubeId}`, '_blank')}
                        >
                          Watch on YouTube
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand flex-1"
                          onClick={() => window.open(set.spotifyLink, '_blank')}
                        >
                          Listen on Spotify
                        </Button>
                      </div>
                    </div>

                    {/* Song List */}
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-olive-charcoal mb-4">
                        Songs in This Set:
                      </h4>
                      <ul className="space-y-2">
                        {set.songs.map((song, songIndex) => (
                          <li 
                            key={songIndex} 
                            className="flex items-center gap-3 text-olive-charcoal/80"
                          >
                            <MusicIcon className="h-4 w-4 text-grace-gold" />
                            <span>{song}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Original Songs */}
      <section className="py-16 bg-heavenly-blue/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal text-center mb-12">
            Original Compositions
          </h2>

          <div className="space-y-12">
            {originalSongs.map((song, index) => (
              <Card key={index} className="bg-white/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-playfair text-olive-charcoal mb-4">
                    {song.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Lyrics */}
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-olive-charcoal mb-4">
                        Lyrics:
                      </h4>
                      <div className="bg-warm-sand/50 rounded-lg p-6">
                        <pre className="text-olive-charcoal/80 whitespace-pre-wrap font-inter text-sm leading-relaxed">
                          {song.lyrics}
                        </pre>
                      </div>
                    </div>

                    {/* Story Behind the Song */}
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-olive-charcoal mb-4">
                        Story Behind the Song:
                      </h4>
                      <div className="bg-dusty-rose/20 rounded-lg p-6">
                        <p className="text-olive-charcoal/80 leading-relaxed">
                          {song.story}
                        </p>
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button className="bg-grace-gold hover:bg-grace-gold/90 text-olive-charcoal font-semibold">
                          Download Sheet Music
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
                        >
                          Listen to Recording
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

      {/* Music Platforms */}
      <section className="py-16 bg-dusty-rose/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-olive-charcoal mb-8">
            Find Our Music Online
          </h2>
          <p className="text-lg text-olive-charcoal/80 mb-8">
            Stream our worship music on your favorite platforms and add our songs 
            to your personal worship playlists.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-16 border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
              onClick={() => window.open('https://youtube.com/@gratiavvoices', '_blank')}
            >
              YouTube
            </Button>
            <Button 
              variant="outline" 
              className="h-16 border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
              onClick={() => window.open('https://open.spotify.com/artist/gratiavvoices', '_blank')}
            >
              Spotify
            </Button>
            <Button 
              variant="outline" 
              className="h-16 border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
              onClick={() => window.open('https://soundcloud.com/gratiavvoices', '_blank')}
            >
              SoundCloud
            </Button>
            <Button 
              variant="outline" 
              className="h-16 border-olive-charcoal text-olive-charcoal hover:bg-olive-charcoal hover:text-warm-sand"
              onClick={() => window.open('https://music.apple.com/artist/gratiavvoices', '_blank')}
            >
              Apple Music
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
