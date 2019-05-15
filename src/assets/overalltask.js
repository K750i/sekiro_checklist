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
          'Drop by <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/General+Naomori+Kawarada" target="_blank" rel="noopener noreferrer">General Naomori Kawarada</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd2',
        task:
          'In the building right after the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Chained+Ogre" target="_blank" rel="noopener noreferrer">Chained Ogre</a> in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd3',
        task:
          'Sold by <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Battlefield+Memorial+Mob" target="_blank" rel="noopener noreferrer">Battlefield Memorial Mob</a> in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd4',
        task:
          'In a chest next to the Upper Tower - Antechamber Sculptor\'s Idol, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Castle" target="_blank" rel="noopener noreferrer">Ashina Castle</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd5',
        task:
          'Sold by <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fujioka+the+Info+Broker" target="_blank" rel="noopener noreferrer">Fujioka the Info Broker</a> in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dilapidated+Temple" target="_blank" rel="noopener noreferrer">Dilapidated Temple</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd6',
        task:
          'In front of the immortal monk in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Temple,+Mt.+Kongo" target="_blank" rel="noopener noreferrer">Senpou Temple</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd7',
        task:
          'In a small hut at the beginning of <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sunken+Valley" target="_blank" rel="noopener noreferrer">Sunken Valley</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd8',
        task:
          'By the large tree with white leaves in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mibu+Village" target="_blank" rel="noopener noreferrer">Mibu Village</a>',
        done: false,
        area: 'gourd',
      },
      {
        id: 'gourd9',
        task:
          'In a chest inside a dark room at <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fountainhead+Palace" target="_blank" rel="noopener noreferrer">Fountainhead Palace</a>',
        done: false,
        area: 'gourd',
      },
    ],

    prayerbeads: [
      {
        id: 'prayerbeads1',
        task:
          'In a chest in the attic where you meet <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Tengu+of+Ashina" target="_blank" rel="noopener noreferrer">Tengu of Ashina</a> for the first time',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads2',
        task:
          "Inside the hidden wall near the Hirata Audience Chamber Sculptor's Idol",
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads3',
        task:
          "Inside the hidden wall near the Upper Tower - Antechamber Sculptor's Idol",
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads4',
        task:
          'Sold by <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dungeon+Memorial+Mob" target="_blank" rel="noopener noreferrer">Dungeon Memorial Mob</a>',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads5',
        task:
          "In the pond near the Temple Grounds Sculptor's Idol at Senpou Temple",
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads6',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Outskirts" target="_blank" rel="noopener noreferrer">Ashina Outskirts</a> area accessible through the Under-Shrine Valley Sculptor\'s Idol',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads7',
        task:
          'Chasm with mini-centipedes in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sunken+Valley" target="_blank" rel="noopener noreferrer">Sunken Valley</a>',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads8',
        task:
          'The top of a large Buddha Statue in the Poison Pool, <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Depths" target="_blank" rel="noopener noreferrer">Ashina Depths</a>',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads9',
        task:
          'In the attic above the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Head+Priest+of+Mibu+Village" target="_blank" rel="noopener noreferrer">Head Priest of Mibu Village</a>',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads10',
        task:
          'In a chest at the bottom of the lake in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mibu+Village" target="_blank" rel="noopener noreferrer">Mibu Village</a>',
        done: false,
        area: 'prayerbeads',
      },
      {
        id: 'prayerbeads11',
        task:
          'At the bottom of the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Great+Colored+Carp" target="_blank" rel="noopener noreferrer">Great Colored Carp</a> lake',
        done: false,
        area: 'prayerbeads',
      },
    ],

    questitems: [
      {
        id: 'questitems1',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Anti-air+Deathblow+Text" target="_blank" rel="noopener noreferrer">Anti-air Deathblow Text</a> - <em>unlocks the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Anti-air+Deathblow" target="_blank" rel="noopener noreferrer">Anti-air Deathblow</a> Skill</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems2',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Aromatic+Branch" target="_blank" rel="noopener noreferrer">Aromatic Branch</a> - <em>used in the Immortal Severance Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems3',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Aromatic+Flower" target="_blank" rel="noopener noreferrer">Aromatic Flower</a> - <em>used in the Purification Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems4',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Esoteric+Text" target="_blank" rel="noopener noreferrer">Ashina Esoteric Text</a> - <em>unlocks the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Arts" target="_blank" rel="noopener noreferrer">Ashina Arts</a> Skill Tree</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems5',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Sake" target="_blank" rel="noopener noreferrer">Ashina Sake</a> - <em>can be given to the Sculptor, Emma or Isshin</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems6',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Black+Scroll" target="_blank" rel="noopener noreferrer">Black Scroll</a> - <em>lore reference of the Black Mortal Blade</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems7',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dancing+Dragon+Mask" target="_blank" rel="noopener noreferrer">Dancing Dragon Mask</a> - <em>convert every 5 skill points into Attack Power</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems8',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Divine+Dragon\'s+Tears" target="_blank" rel="noopener noreferrer">Divine Dragon\'s Tears</a> - <em>received from the Divine Dragon</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems9',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dosaku\'s+Note" target="_blank" rel="noopener noreferrer">Dosaku\'s Note</a> - <em>found in the room behind <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Doujun" target="_blank" rel="noopener noreferrer">Doujun</a></em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems10',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dragon\'s+Tally+Board" target="_blank" rel="noopener noreferrer">Dragon\'s Tally Board</a> - <em>increases merchants\' stocks</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems11',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dragonrot+Blood+Sample" target="_blank" rel="noopener noreferrer">Dragonrot Blood Sample</a> - <em>given to Emma to create a cure for Dragonrot</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems12',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dragonspring+Sake" target="_blank" rel="noopener noreferrer">Dragonspring Sake</a> - <em>can be given to Sculptor, Emma or Isshin</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems13',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Dried+Serpent+Viscera" target="_blank" rel="noopener noreferrer">Dried Serpent Viscera</a> - <em>used in the Dragon\'s Homecoming Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems14',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Father\'s+Bell+Charm" target="_blank" rel="noopener noreferrer">Father\'s Bell Charm</a> - <em>used to access Owl\'s memory in Hirata Estate</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems15',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Flame+Barrel+Memo" target="_blank" rel="noopener noreferrer">Flame Barrel Memo</a> - <em>indicates Flame Vent location</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems16',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Floating+Passage+Text" target="_blank" rel="noopener noreferrer">Floating Passage Text</a> - <em>unlocks a combat art</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems17',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fragrant+Flower+Note" target="_blank" rel="noopener noreferrer">Fragrant Flower Note</a> - <em>lore note</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems18',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Fresh+Serpent+Viscera" target="_blank" rel="noopener noreferrer">Fresh Serpent Viscera</a> - <em>used in the Dragon\'s Homecoming Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems19',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Frozen+Tears" target="_blank" rel="noopener noreferrer">Frozen Tears</a> - <em>used to perform the Cradling ritual</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems20',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Gatehouse+Key" target="_blank" rel="noopener noreferrer">Gatehouse Key</a> - <em>unlocks the Samurai Gatehouse in Ashina Reservoir</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems21',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Great+White+Whisker" target="_blank" rel="noopener noreferrer">Great White Whisker</a> - <em>used to free the Great Carp Attendant</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems22',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Gun+Fort+Shrine+Key" target="_blank" rel="noopener noreferrer">Gun Fort Shrine Key</a> - <em>unlocks the shrine within the Gun Fort</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems23',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Herb+Catalogue+Scrap" target="_blank" rel="noopener noreferrer">Herb Catalogue Scrap</a> - <em>lore reference for Snap Seed</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems24',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hidden+Temple+Key" target="_blank" rel="noopener noreferrer">Hidden Temple Key</a> - <em>unlocks the Hidden Temple in Hirata Estates</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems25',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Holy+Chapter:+Dragon\'s+Return" target="_blank" rel="noopener noreferrer">Holy Chapter: Dragon\'s Return</a> - <em>used in the Dragon\'s Homecoming Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems26',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Holy+Chapter:+Infested" target="_blank" rel="noopener noreferrer">Holy Chapter: Infested</a> - <em>used in the Dragon\'s Homecoming Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems27',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Immortal+Severance+Scrap" target="_blank" rel="noopener noreferrer">Immortal Severance Scrap</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems28',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Immortal+Severance+Text" target="_blank" rel="noopener noreferrer">Immortal Severance Text</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems29',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Isshin\'s+Letter" target="_blank" rel="noopener noreferrer">Isshin\'s Letter</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems30',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Kuro\'s+Charm" target="_blank" rel="noopener noreferrer">Kuro\'s Charm</a> - <em>protection against damage</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems31',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Kusabimaru" target="_blank" rel="noopener noreferrer">Kusabimaru</a> - <em>Wolf\'s primary weapon</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems32',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Lotus+of+the+Palace" target="_blank" rel="noopener noreferrer">Lotus of the Palace</a> - <em>used for Immortal Severance</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems33',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Monkey+Booze" target="_blank" rel="noopener noreferrer">Monkey Booze</a> - <em>can be given to the Sculptor, Emma or Isshin</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems34',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mortal+Blade" target="_blank" rel="noopener noreferrer">Mortal Blade</a> - <em>used to kill immortal enemies</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems35',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mushin+Esoteric+Text" target="_blank" rel="noopener noreferrer">Mushin Esoteric Text</a> - <em>unlocks the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mushin+Arts" target="_blank" rel="noopener noreferrer">Mushin Arts</a> Skill Tree</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems36',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Nightjar+Beacon+Memo" target="_blank" rel="noopener noreferrer">Nightjar Beacon Memo</a> - <em>explains how to get to the top of Ashina Castle</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems37',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Okami\'s+Ancient+Text" target="_blank" rel="noopener noreferrer">Okami\'s Ancient Text</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems38',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ornamental+Letter" target="_blank" rel="noopener noreferrer">Ornamental Letter</a> - <em>given by Emma</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems39',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Page\'s+Diary" target="_blank" rel="noopener noreferrer">Page\'s Diary</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems40',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Precious+Bait" target="_blank" rel="noopener noreferrer">Precious Bait</a> - <em>used to feed the Great Carp</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems41',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Prosthetic+Esoteric+Text" target="_blank" rel="noopener noreferrer">Prosthetic Esoteric Text</a> - <em>unlocks the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Prosthetic+Arts" target="_blank" rel="noopener noreferrer">Prosthetic Arts</a> Skill Tree</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems42',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Rat+Description" target="_blank" rel="noopener noreferrer">Rat Description</a> - <em>given by Tengu of Ashina</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems43',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Recovery+Charm" target="_blank" rel="noopener noreferrer">Recovery Charm</a> - <em>cure all afflicted with Dragonrot</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems44',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Red+Carp+Eyes" target="_blank" rel="noopener noreferrer">Red Carp Eyes</a> - <em>used in Doujun\'s quest line</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems45',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Red+and+White+Pinwheel" target="_blank" rel="noopener noreferrer">Red and White Pinwheel</a> - <em>can be given to <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Kotaro" target="_blank" rel="noopener noreferrer">Kotaro</a></em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems46',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Rice+for+Kuro" target="_blank" rel="noopener noreferrer">Rice for Kuro</a> - <em>used for Dragon\'s Homecoming Ending</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems47',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Rotting+Prisoner\'s+Note" target="_blank" rel="noopener noreferrer">Rotting Prisoner\'s Note</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems48',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sabimaru+Memo" target="_blank" rel="noopener noreferrer">Sabimaru Memo</a> - <em>indicates Sabimaru\'s location</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems49',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sakura+Droplet" target="_blank" rel="noopener noreferrer">Sakura Droplet</a> - <em>allow an additional Resurrection Node</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems50',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Secret+Passage+Key" target="_blank" rel="noopener noreferrer">Secret Passage Key</a> - <em>unlocks secret passage at the end of the moat in Ashina Reservoir</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems51',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Esoteric+Text" target="_blank" rel="noopener noreferrer">Senpou Esoteric Text</a> - <em>unlocks the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Temple+Arts" target="_blank" rel="noopener noreferrer">Temple Arts</a> Skill Tree</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems52',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shelter+Stone" target="_blank" rel="noopener noreferrer">Shelter Stone</a> - <em>used for Immortal Severance</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems53',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shinobi+Esoteric+Text" target="_blank" rel="noopener noreferrer">Shinobi Esoteric Text</a> - <em>unlocks the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shinobi+Arts" target="_blank" rel="noopener noreferrer">Shinobi Arts</a> Skill Tree</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems54',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shinobi+Prosthetic" target="_blank" rel="noopener noreferrer">Shinobi Prosthetic</a> - <em>Wolf\'s secondary weapon</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems55',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Surgeon\'s+Bloody+Letter" target="_blank" rel="noopener noreferrer">Surgeon\'s Bloody Letter</a> - <em>given by Doujun</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems56',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Surgeon\'s+Stained+Letter" target="_blank" rel="noopener noreferrer">Surgeon\'s Stained Letter</a> - <em>given by Doujun</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems57',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Three-story+Pagoda+Memo" target="_blank" rel="noopener noreferrer">Three-Story Pagoda Memo</a> - <em>indicates <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mist+Raven" target="_blank" rel="noopener noreferrer">Mist Raven</a>\'s location</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems58',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Truly+Precious+Bait" target="_blank" rel="noopener noreferrer">Truly Precious Bait</a> - <em>used to kill the Great Carp</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems59',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Unrefined+Sake" target="_blank" rel="noopener noreferrer">Unrefined Sake</a> - <em>can be given to Sculptor, Emma or Isshin</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems60',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Valley+Apparitions+Memo" target="_blank" rel="noopener noreferrer">Valley Apparitions Memo</a> - <em>lore reference</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems61',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Water+of+the+Palace" target="_blank" rel="noopener noreferrer">Water of the Palace</a> - <em>can be given to the Noble in Mibu Village</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems62',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/White+Pinwheel" target="_blank" rel="noopener noreferrer">White Pinwheel</a> - <em>can be given to Kotaro</em>',
        done: false,
        area: 'questitems',
      },
      {
        id: 'questitems63',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Young+Lord\'s+Bell+Charm" target="_blank" rel="noopener noreferrer">Young Lord\'s Bell Charm</a> - <em>used to access <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hirata+Estates" target="_blank" rel="noopener noreferrer">Hirata Estates</a></em>',
        done: false,
        area: 'questitems',
      },
    ],

    specialitems: [
      {
        id: 'specialitems1',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Bell+Demon" target="_blank" rel="noopener noreferrer">Bell Demon</a> - <em>remove the curse caused by ringing the Bell in <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Senpou+Temple,+Mt.+Kongo" target="_blank" rel="noopener noreferrer">Senpou Temple</a></em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems2',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ako\'s+Spiritfall" target="_blank" rel="noopener noreferrer">Ako\'s Spiritfall</a> - <em>increase vitality and posture damage</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems3',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Gachiin\'s+Spiritfall" target="_blank" rel="noopener noreferrer">Gachiin\'s Spiritfall</a> - <em>suppresses sound, making the user harder to detect</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems4',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Gokan\'s+Spiritfall" target="_blank" rel="noopener noreferrer">Gokan\'s Spiritfall</a> - <em>reduces posture damage</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems5',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ungo\'s+Spiritfall" target="_blank" rel="noopener noreferrer">Ungo\'s Spiritfall</a> - <em>reduces vitality damage taken from physical attacks</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems6',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Yashariku\'s+Spiritfall" target="_blank" rel="noopener noreferrer">Yashariku\'s Spiritfall</a> - <em>sacrifice vitality & posture to gain a large boost in attack power</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems7',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Green+Mossy+Gourd" target="_blank" rel="noopener noreferrer">Green Mossy Gourd</a> - <em>reduces poison buildup and slightly increases poison resistance</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems8',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mottled+Purple+Gourd" target="_blank" rel="noopener noreferrer">Mottled Purple Gourd</a> - <em>reduces Terror buildup and increases Terror resistance</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems9',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Withered+Red+Gourd" target="_blank" rel="noopener noreferrer">Withered Red Gourd</a> - <em>reduces Burn buildup and slightly increases Burn resistance</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems10',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Five-Color+Rice" target="_blank" rel="noopener noreferrer">Five-Color Rice</a> - <em>leave landmarks for navigating through areas</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems11',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Nightjar+Monocular" target="_blank" rel="noopener noreferrer">Nightjar Monocular</a> - <em>used to see distant objects</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems12',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Ceremonial+Tanto" target="_blank" rel="noopener noreferrer">Ceremonial Tanto</a> - <em>convert vitality into <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Spirit+Emblem" target="_blank" rel="noopener noreferrer">Spirit Emblems</a></em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems13',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Hidden+Tooth" target="_blank" rel="noopener noreferrer">Hidden Tooth</a> - <em>sacrifices current life for another resurrections</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems14',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Taro+Persimmon" target="_blank" rel="noopener noreferrer">Taro Persimmon</a> - <em>can be used to progress a quest for game endings</em>',
        done: false,
        area: 'specialitems',
      },
      {
        id: 'specialitems15',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Illusive+Hall+Bell" target="_blank" rel="noopener noreferrer">Illusion Hall Bell</a> - <em>reset the stage for the <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Folding+Screen+Monkeys" target="_blank" rel="noopener noreferrer">Folding Screen Monkey</a> fight</em>',
        done: false,
        area: 'specialitems',
      },
    ],

    prosthetics: [
      {
        id: 'prosthetics1',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Divine+Abduction" target="_blank" rel="noopener noreferrer">Divine Abduction</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics2',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Finger+Whistle" target="_blank" rel="noopener noreferrer">Finger Whistle</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics3',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Flame+Vent" target="_blank" rel="noopener noreferrer">Flame Vent</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics4',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Loaded+Axe" target="_blank" rel="noopener noreferrer">Loaded Axe</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics5',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Loaded+Shuriken" target="_blank" rel="noopener noreferrer">Loaded Shuriken</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics6',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Loaded+Spear" target="_blank" rel="noopener noreferrer">Loaded Spear</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics7',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Loaded+Umbrella" target="_blank" rel="noopener noreferrer">Loaded Umbrella</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics8',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Mist+Raven" target="_blank" rel="noopener noreferrer">Mist Raven</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics9',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Sabimaru" target="_blank" rel="noopener noreferrer">Sabimaru</a>',
        done: false,
        area: 'prosthetics',
      },
      {
        id: 'prosthetics10',
        task:
          '<a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Shinobi+Firecracker" target="_blank" rel="noopener noreferrer">Shinobi Firecracker</a>',
        done: false,
        area: 'prosthetics',
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
    name: 'Gourd Seeds Locations',
    link: '#gourd',
  },
  {
    id: 'prayerbeads',
    name: 'Lootable Prayer Beads Locations',
    link: '#prayerbeads',
  },
  {
    id: 'questitems',
    name: 'Quest/Key Items',
    link: '#questitems',
  },
  {
    id: 'specialitems',
    name: 'Special Items/Consumables',
    link: '#specialitems',
  },
  {
    id: 'prosthetics',
    name: 'Prosthetic Tools',
    link: '#prosthetics',
  },
];

export default JSON.stringify(tasks);
