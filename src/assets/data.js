const dataObject = {
  default: {
    Area1_1: [
      {
        id: 'a1.1.1',
        task: 'Get to the Moon-view Tower',
        done: false,
        area: 'Area1_1',
      },
      {
        id: 'a1.1.2',
        task:
          'Acquire <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Kusabimaru" target="_blank">Kusabimaru</a> and <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Healing+Gourd" target="_blank">Healing Gourd</a>',
        done: false,
        area: 'Area1_1',
      },
      {
        id: 'a1.1.3',
        task: 'Face Genichiro Ashina',
        done: false,
        area: 'Area1_1',
      },
    ],
    Area2_1: [
      {
        id: 'a2.1.1',
        task: 'Talk to the Sculptor',
        done: false,
        area: 'Area2_1',
      },
      {id: 'a2.1.2', task: 'Talk to Emma', done: false, area: 'Area2_1'},
      {
        id: 'a2.1.3',
        task: "Rest at the Sculptor's Idol",
        done: false,
        area: 'Area2_1',
      },
      {
        id: 'a2.1.4',
        task: 'Talk to Hanbei the Undying',
        done: false,
        area: 'Area2_1',
      },
    ],
    Area3_1: [
      {
        id: 'a3.1.1',
        task: "Unlock Sculptor's Idol Travel",
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.2',
        task: 'Find Loaded Shuriken materials',
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.3',
        task: 'Defeat General Naomori Kawarada',
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.4',
        task: 'Get Prayer Bead and Gourd Seed',
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.5',
        task: 'Obtain Bundled Jizo Statue',
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.6',
        task: "Obtain Young Lord's Bell Charm",
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.7',
        task: "Find Crow's Bed Memorial Mob",
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.8',
        task: 'Find your first Recollection (phantom conversation)',
        done: false,
        area: 'Area3_1',
      },
      {
        id: 'a3.1.9',
        task: 'Find Anayama the Peddler',
        done: false,
        area: 'Area3_1',
      },
    ],
    Area4_1: [
      {
        id: 'a4.1.1',
        task: 'Talk to the NPC to learn more about your lost memory',
        done: false,
        area: 'Area4_1',
      },
      {
        id: 'a4.1.2',
        task: 'Find your first Treasure Carp',
        done: false,
        area: 'Area4_1',
      },
      {
        id: 'a4.1.3',
        task: 'Meet Pot Noble Harunaga',
        done: false,
        area: 'Area4_1',
      },
    ],
  },
};

export const areas = [
  {
    id: 'Area1_1',
    name: 'Ashina Reservoir',
    link: '#ashinares',
  },
  {
    id: 'Area2_1',
    name: 'Dilapidated Temple',
    link: '#temple',
  },
  {
    id: 'Area3_1',
    name: 'Ashina Outskirts',
    link: '#ashinaout',
  },
  {
    id: 'Area4_1',
    name: 'Hirata Estate',
    link: '#hirataestate',
  },
];

export default JSON.stringify(dataObject);
