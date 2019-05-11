const tasks = {
  default: {
    bosses: [
      {
        id: 'boss1',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Gyoubu+Oniwa" target="_blank" rel="noopener noreferrer">Gyoubu Masataka Oniwa</a> - <em>at the very end of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss2',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Lady+Butterfly" target="_blank" rel="noopener noreferrer">Lady Butterfly</a> - <em>Hidden Temple, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estate" target="_blank" rel="noopener noreferrer">Hirata Estate</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss3',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Genichiro+Ashina" target="_blank" rel="noopener noreferrer">Genichiro Ashina</a> - <em>the very top of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss4',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Folding+Screen+Monkeys" target="_blank" rel="noopener noreferrer">Folding Screen Monkeys</a> - <em>Hall of Illusion, accessible through the Main Hall in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Temple,+Mt.+Kongo" target="_blank" rel="noopener noreferrer">Senpou Temple</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss5',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Guardian+Ape" target="_blank" rel="noopener noreferrer">Guardian Ape</a> - <em>in a pool of water near the Bodhisattva Valley Sculptor\'s Idol</em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss6',
        task:
          '<span role="img" aria-label="emoji">⚔️⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Headless+Ape" target="_blank" rel="noopener noreferrer">Headless Ape</a> - <em>after the poison pool guarded by <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Snake+Eyes+Shirahagi" target="_blank" rel="noopener noreferrer">Snake Eyes Shirahagi</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss7',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Corrupted+Monk" target="_blank" rel="noopener noreferrer">Corrupted Monk (Illusion)</a> - <em>at the very end of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mibu+Village" target="_blank" rel="noopener noreferrer">Mibu Village</a>, guarding the entrance to the Wedding Cave</em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss8',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Emma,+the+Gentle+Blade" target="_blank" rel="noopener noreferrer">Emma, the Gentle Blade</a> and <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Isshin+Ashina" target="_blank" rel="noopener noreferrer">Isshin Ashina</a> - <em>top of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss9',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Great+Shinobi+Owl" target="_blank" rel="noopener noreferrer">Great Shinobi Owl</a> - <em>top of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss10',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Owl+(Father)" target="_blank" rel="noopener noreferrer">Owl (Father)</a> - <em>Hidden Temple, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estate" target="_blank" rel="noopener noreferrer">Hirata Estate</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss11',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Corrupted+Monk" target="_blank" rel="noopener noreferrer">Corrupted Monk</a> - <em>starting area of the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fountainhead+Palace" target="_blank" rel="noopener noreferrer">Fountainhead Palace</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss12',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Divine+Dragon" target="_blank" rel="noopener noreferrer">Divine Dragon</a> - <em>can be reach by praying at the altar following the Sanctuary Sculptor\'s Idol, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fountainhead+Palace" target="_blank" rel="noopener noreferrer">Fountainhead Palace</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss13',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Demon+of+Hatred" target="_blank" rel="noopener noreferrer">Demon of Hatred</a> - <em>grapple up the shinobi kite from the rooftop of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a> and make your way through <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a></em>',
        done: false,
        area: 'bosses',
      },
      {
        id: 'boss14',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Genichiro,+Way+of+Tomoe" target="_blank" rel="noopener noreferrer">Genichiro, Way of Tomoe</a> and <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Isshin,+the+Sword+Saint" target="_blank" rel="noopener noreferrer">Isshin, the Sword Saint</a> - <em>after the tunnel near the Secret Passage Sculptor\'s Idol, endgame <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Reservoir" target="_blank" rel="noopener noreferrer">Ashina Reservoir</a></em>',
        done: false,
        area: 'bosses',
      },
    ],

    minibosses: [
      {
        id: 'miniboss1',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Leader+Shigenori+Yamauchi" target="_blank" rel="noopener noreferrer">Leader Shigenori Yamauchi</a> - <em>beginning area at <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Reservoir" target="_blank" rel="noopener noreferrer">Ashina Reservoir</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss2',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/General+Naomori+Kawarada" target="_blank" rel="noopener noreferrer">General Naomori Kawarada</a> - <em>near the Outskirts Wall - Gate Path Sculptor\'s Idol</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss3',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shinobi+Hunter+Enshin+of+Misen" target="_blank" rel="noopener noreferrer">Shinobi Hunter Enshin of Misen</a> - <em>past the bridge guarded by <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Bandit+%28Katana+and+Shield%29" target="_blank" rel="noopener noreferrer">Bandit with Shield</a> in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estate" target="_blank" rel="noopener noreferrer">Hirata Estate</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss4',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Chained+Ogre" target="_blank" rel="noopener noreferrer">Chained Ogre</a> - <em>(1st encounter) after the Outskirts Wall - Stairway Idol, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss5',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/General+Tenzen+Yamauchi" target="_blank" rel="noopener noreferrer">General Tenzen Yamauchi</a> - <em>in the courtyard after the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Chained+Ogre" target="_blank" rel="noopener noreferrer">Chained Ogre</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss6',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Blazing+Bull" target="_blank" rel="noopener noreferrer">Blazing Bull</a> - <em>just before reaching <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss7',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/General+Kuranosuke+Matsumoto" target="_blank" rel="noopener noreferrer">General Kuranosuke Matsumoto</a> - <em>up the stairs of Ashina Castle Sculptor\'s Idol</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss8',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Elite+-+Jinusuke+Saze" target="_blank" rel="noopener noreferrer">Ashina Elite - Jinsuke Saze</a> - <em>found in the Dojo, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss9',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Juzou+the+Drunkard" target="_blank" rel="noopener noreferrer">Juzou the Drunkard</a> - <em>(1st encounter) along the Main Hall Sculptor\'s Idol, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estate" target="_blank" rel="noopener noreferrer">Hirata Estate</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss10',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Seven+Ashina+Spears+-+Shikibu+Toshikatsu+Yamauchi" target="_blank" rel="noopener noreferrer">Seven Ashina Spears - Shikibu Toshikatsu Yamauchi</a> - <em>in front of the Moon-View Tower, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Reservoir" target="_blank" rel="noopener noreferrer">Ashina Reservoir</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss11',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Longswordsman" target="_blank" rel="noopener noreferrer">Lone Shadow Longswordsman</a> - <em>in the well at <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Reservoir" target="_blank" rel="noopener noreferrer">Ashina Reservoir</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss12',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Armored+Warrior" target="_blank" rel="noopener noreferrer">Armored Warrior</a> - <em>enclosed wooden bridge, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Temple,+Mt.+Kongo" target="_blank" rel="noopener noreferrer">Senpou Temple</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss13',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Long+Arm+Centipede+Sen-Un" target="_blank" rel="noopener noreferrer">Long-arm Centipede Sen\'un</a> - <em>temple near a large bonfire around the Temple Grounds Idol at <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Temple,+Mt.+Kongo" target="_blank" rel="noopener noreferrer">Senpou Temple</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss14',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Snake+Eyes+Shirafuji" target="_blank" rel="noopener noreferrer">Snake Eyes Shirafuji</a> - <em>on a platform ahead of the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sunken+Valley" target="_blank" rel="noopener noreferrer">Sunken Valley</a> Sculptor\'s Idol</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss15',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Long-arm+Centipede+Giraffe" target="_blank" rel="noopener noreferrer">Long-arm Centipede Giraffe</a> - <em>right after the Gun Fort Sculptor\'s Idol',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss16',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Great+Serpent" target="_blank" rel="noopener noreferrer">Great Serpent</a> - <em>can be reach by grappling across a valley from <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Temple,+Mt.+Kongo" target="_blank" rel="noopener noreferrer">Senpou Temple</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss17',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Snake+Eyes+Shirahagi" target="_blank" rel="noopener noreferrer">Snake Eyes Shirahagi</a> - <em>poison pool, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Depths" target="_blank" rel="noopener noreferrer">Ashina Depths</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss18',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Tokujiro+the+Glutton" target="_blank" rel="noopener noreferrer">Tokujiro the Glutton</a> - <em>area leading up from branches after the Hidden Forest Idol in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Depths" target="_blank" rel="noopener noreferrer">Ashina Depths</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss19',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mist+Noble" target="_blank" rel="noopener noreferrer">Mist Noble</a> - <em>abandoned temple in the Hidden Forest, accessed by the second floor</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss20',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/O\'rin+of+the+Water" target="_blank" rel="noopener noreferrer">O\'rin of the Water</a> - <em>after the large blossom tree up the path, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mibu+Village" target="_blank" rel="noopener noreferrer">Mibu Village</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss21',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Chained+Ogre" target="_blank" rel="noopener noreferrer">Chained Ogre</a> - <em>(2nd encounter) inside <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss22',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Masanaga+the+Spear-bearer" target="_blank" rel="noopener noreferrer">Lone Shadow Masanaga the Spear-Bearer</a> - <em>(1st encounter) the Serpent Shrine area',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss23',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Vilehand" target="_blank" rel="noopener noreferrer">Lone Shadow Vilehand</a> - <em>in the Ashina Dojo, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss24',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Masanaga+the+Spear-bearer" target="_blank" rel="noopener noreferrer">Lone Shadow Masanaga the Spear-Bearer</a> - <em>(2nd encounter) burning building, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estate" target="_blank" rel="noopener noreferrer">Hirata Estate</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss25',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Juzou+the+Drunkard" target="_blank" rel="noopener noreferrer">Juzou the Drunkard</a> - <em>(2nd encounter) same area as the 1st encounter, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estate" target="_blank" rel="noopener noreferrer">Hirata Estate</a> in a different memory</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss26',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sakura+Bull+of+the+Palace" target="_blank" rel="noopener noreferrer">Sakura Bull of the Palace</a> - <em>Fountainhead Temple area</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss27',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Okami+Leader+Shizu" target="_blank" rel="noopener noreferrer">Okami Leader Shizu</a> - <em>at the end of a branch of a large tree in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fountainhead+Palace" target="_blank" rel="noopener noreferrer">Fountainhead Palace</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss28',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Great+Colored+Carp" target="_blank" rel="noopener noreferrer">Great Colored Carp</a> - <em>underwater at <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fountainhead+Palace" target="_blank" rel="noopener noreferrer">Fountainhead Palace</a> when alive. At Guardian Ape\'s Watering Hole when dead</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss29',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Elite+Ujinari+Mizuo" target="_blank" rel="noopener noreferrer">Ashina Elite - Ujinari Mizuo</a> - <em>hidden dojo below Isshin Ashina\'s watchtower, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss30',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shigekichi+of+the+Red+Guard" target="_blank" rel="noopener noreferrer">Shigekichi of the Red Guard</a> - <em>after the Ashina Outskirts - Stairway Idol after <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a> has been invaded for the second time</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss31',
        task:
          '<span role="img" aria-label="emoji">⚔️</span> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Seven+Ashina+Spears+-+Shume+Masaji+Oniwa" target="_blank" rel="noopener noreferrer">Seven Ashina Spears - Shume Masaji Oniwa</a> - <em>right after the Ashina Reservoir Sculptor\'s Idol</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss32',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Headless" target="_blank" rel="noopener noreferrer">Headless</a> - <em>follow the path after a small shrine with a note, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss33',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Headless" target="_blank" rel="noopener noreferrer">Headless</a> - <em>bottom of the lake near the Old Grave Idol, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss34',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Headless" target="_blank" rel="noopener noreferrer">Headless</a> - <em>from the Under-Shrine Valley Idol at <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sunken+Valley" target="_blank" rel="noopener noreferrer">Sunken Valley</a>, follow the path after the 2 riflemen. Dive into a pool to reach a hidden cave</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss35',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Headless" target="_blank" rel="noopener noreferrer">Headless</a> - <em>hidden in the mist below the Hidden Forest near the Buddha statue</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss36',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Headless" target="_blank" rel="noopener noreferrer">Headless</a> - <em>at the bottom of the Great Carp\'s lake</em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss37',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shichimen+Warrior" target="_blank" rel="noopener noreferrer">Shichimen Warrior</a> - <em><a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Abandoned+Dungeon" target="_blank" rel="noopener noreferrer">Abandoned Dungeon</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss38',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shichimen+Warrior" target="_blank" rel="noopener noreferrer">Shichimen Warrior</a> - <em>Guardian Ape\'s Burrow, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Depths" target="_blank" rel="noopener noreferrer">Ashina Depths</a></em>',
        done: false,
        area: 'minibosses',
      },
      {
        id: 'miniboss39',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shichimen+Warrior" target="_blank" rel="noopener noreferrer">Shichimen Warrior</a> - <em>near the Great Sakura Sculptor\'s Idol, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fountainhead+Palace" target="_blank" rel="noopener noreferrer">Fountainhead Palace</a></em>',
        done: false,
        area: 'minibosses',
      },
    ],

    gourd: [
      {
        id: 'gourd1',
        task:
          'Drop from <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/General+Naomori+Kawarada" target="_blank" rel="noopener noreferrer">General Naomori Kawarada</a>',
        done: false,
        area: 'gourd',
      },
    ],
  },
};

export const sections = [
  {
    id: 'bosses',
    name: 'Main Bosses',
    link: '#bosses',
  },
  {
    id: 'minibosses',
    name: 'Mini-Bosses',
    link: '#minibosses',
  },
  {
    id: 'gourd',
    name: 'Gourd Seeds Location',
    link: '#gourd',
  },
];

export default JSON.stringify(tasks);
