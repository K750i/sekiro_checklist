const tasks = {
  default: {
    bosses: [
      {
        id: 'a3.2.7',
        task: 'Gyoubu Masataka Oniwa',
        done: false,
        area: 'bosses',
      },
      {
        id: 'a4.2.4',
        task: 'Lady Butterfly',
        done: false,
        area: 'bosses',
      },
    ],
    minibosses: [
      {
        id: 'a1.1.3',
        task: 'Leader Shigenori Yamauchi',
        done: false,
        area: 'minibosses',
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
    name: 'Mini Bosses',
    link: '#minibosses',
  },
];

export default JSON.stringify(tasks);
