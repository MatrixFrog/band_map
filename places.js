// To add a new place, use an 'address' attribute instead of 'location'. Then get the lat/lng from the GLog and put it in this file.

// TODO add Citywalk

var places = [
  {'name': "Hell's Kitchen",
   'address': '915 N La Brea Ave, Los Angeles, CA', // (?)
   'trip': "A surprise performance for the cast of Hell's Kitchen",
   'dates': ['February 2009']},
   
  {'name': 'Star Wars Convention',
   'location': new GLatLng(34.043174, -118.268838),
   'trip': 'Big convention to celebrate the 30th anniversary of the original Star Wars film',
   'dates': ['May (June?) 2007']},

  {'name': 'Electric Daisy Carnival',
   'location': new GLatLng(34.0138689, -118.2884738),
   'trip': 'A rave in the Coliseum / LA Sports Arena',
   'dates': ['June 2009']},

  {'name': 'Universal Citywalk',
   'address': 'Universal Citywalk',
   'trip': 'Pre-Rose-Bowl rally at the Universal Citywalk',
   'dates': ['December 2006', 'December 2007']},

  {'name': 'Americana',
   'location': new GLatLng(34.144382, -118.2578626),
   'trip': 'Pre-Rose-Bowl rally at the Americana mall',
   'dates': ['December 2008']},

  {'name': 'Los Angeles Memorial Coliseum',
   'location': new GLatLng(34.0138689, -118.2884738),
   'trip': 'Home of Trojan Football. Win forever.',
   'dates': ['2006-2009']},
 
  {'name': 'Galen Center',
   'location': new GLatLng(34.02125, -118.28032),
   'trip': 'Home of Trojan Basketball and Volleyball',
   'dates': ['2006-2009']},
   
  {'name': 'Catalina',
   'location': new GLatLng(33.334992, -118.332089),
   'trip': 'Annual Independence Day parade',
   'dates': ['July 2008', 'July 2009']},

  {'name': "March Madness '07",
   'location': new GLatLng(40.777044, -74.064981),
   'trip': 'NCAA Basketball Tournament, Sweet Sixteen',
   'dates': ['March 2007']},
                   
  {'name': "March Madness '08",
   'location': new GLatLng(41.259751, -95.942363),
   'trip': 'NCAA Basketball Tournament, First Round',
   'dates': ['March 2008']},

  {'name': "March Madness '09",
   'location': new GLatLng(44.977482, -93.264351),
   'trip': 'NCAA Basketball Tournament, First and Second Round',
   'dates': ['March 2009']},
                   
  {'name': 'oregon state trip',
   'location': new GLatLng(44.570191, -123.275127),
   'trip': 'Football game vs. oregon state',
   'dates': ['September 2008']},

  {'name': 'Sophomore trip',
   'location': new GLatLng(44.045555, -123.101276),
   'trip': 'Football game vs. university of oregon',
   'dates': ['October 2007']},
                   
  {'name': 'Junior trip',
   'location': new GLatLng(46.72773, -117.170009),
   'trip': 'Football game vs. washington state',
   'dates': ['October 2008']},
                   
  {'name': 'Senior trip',
   'address': 'Columbus, OH',
   'trip': 'Football game vs. ohio state',
   'dates': ['September 2009']},
 
  {'name': 'Idaho gig',
   'location': new GLatLng(47.700749, -116.791633),
   'trip': 'Rally for Trojan fans in a mall in Idaho, the day before the wsu game.',
   'dates': ['October 2008']},

  {'name': 'Weekender',
   'location': new GLatLng(37.775206, -122.419209),
   'trip': 'Annual full-band trip to the bay area.',
   'dates': ['November 2006', 'November 2007', 'November 2008', 'November 2009']},

  {'name': 'Weekender 06/08',
   'location': new GLatLng(37.440221, -122.163299),
   'trip': 'Football game vs. stanford',
   'dates': ['November 2006', 'November 2008']},
   
  {'name': 'Weekender 07/09',
   'location': new GLatLng(37.872222, -122.268403),
   'trip': 'Football game vs. cal',
   'dates': ['November 2007']},
   
  {'name': 'Brazil trip',
   'location': new GLatLng(-22.9035393, -43.2095869),
   'trip': 'Once-in-a-lifetime trip to Brazil.',
   'dates': ['May 2008']},

  {'name': 'Lake Tahoe',
   'location': new GLatLng(39.099924, -120.028738),
   'trip': 'Annual trip to play for the USC Alumni Club of Northern Nevada\'s "SCend Off"',
   'dates': ['July 2007', 'July 2008']},

  {'name': 'Hollywood Bowl',
   'location': new GLatLng(34.112542, -118.339001),
   'trip': 'Annual concert with the Los Angeles Philharmonic',
   'dates': ['August 2007', 'August 2008']},
   
  {'name': 'Disney gig',
   'location': new GLatLng(34.102768, -118.340454),
   'trip': 'We played the Lone Ranger at the Kodak Theatre for some reason.',
   'dates': ['September 2008']},
   
  {'name': 'Chicago trip',
   'location': new GLatLng(41.879535, -87.624333),
   'trip': "Bi-annual rally at Chicago's Navy Pier before the game at notre dame.",
   'dates': ['October 2007', 'October 2009']},

  {'name': 'notre dame trip',
   'location': new GLatLng(41.694159, -86.250624),
   'trip': 'Bi-annual full band trip to South Bend to beat the irish!',
   'dates': ['October 2007', 'October 2009']},
   
  {'name': "Tonight Show with Conan O'Brien",
   'location': new GLatLng(34.137453, -118.355469),
   'trip': 'First and only marching band ever to play on the Tonight Show with Conan O\'Brien.',
   'dates': ['June 2009']},
   
  {'name': 'Dancing With the Stars',
   'address': 'CBS Studios',
   'trip': 'http://www.youtube.com/watch?v=Qhp1Vgp7XUo',
   'dates': ['September 2009']},
   
  {'name': 'Disneyland',
   'location': new GLatLng(33.81089, -117.918772),
   'trip': 'Pre-Rose Bowl Rally (and Post-Emerald Bowl performance, 2009) for Trojan fans at Disneyland',
   'dates': ['December 2006', 'December 2007', 'December 2008', 'December 2009']},

  {'name': 'Santa Fe Springs Parade',
   'location': new GLatLng(33.93546, -118.063913),
   'trip': 'A parade for this little town called Santa Fe Springs',
   'dates': ['May 2007']},

  {'name': 'Palos Verdes Music Festival',
   'location': new GLatLng(33.792193, -118.404264),
   'trip': 'Palos Verdes Music Festival. Lots of happy children running about.',
   'dates': ['October 2007']},
   
  {'name': 'Rose Bowl',
   'location': new GLatLng(34.161305, -118.167703),
   'trip': "The Rose Bowl -- The granddaddy of them all! Plus there's a parade.",
   'dates': ['January 2007', 'January 2008', 'January 2009']}   
]
