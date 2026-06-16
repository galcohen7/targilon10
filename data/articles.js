// NOTE: On slide 30 the `content` strings run off the right edge of the
// screenshot and article #5 is cut off at the bottom. Article #1's full text
// is visible on the detail view (slide 35); the rest are completed to match
// the visible opening words. Replace with the exact slide text if you have it.
export const articlesList = [
  {
    id: '1',
    author: 'ALEX RIVERA',
    title: 'The Rise of AI Agents',
    content:
      'Autonomous software agents are now handling 40% of corporate scheduling and email workflows in 2026.',
    image: require('../assets/foo.jpg'),
    trending: true,
  },
  {
    id: '2',
    author: 'HELENA ZHAO',
    title: 'Solid-State Battery Breakthrough',
    content:
      'The first commercial electric vehicle featuring a 1,000km range battery officially entered mass production this quarter.',
    image: require('../assets/foo2.jpg'),
    trending: true,
  },
  {
    id: '3',
    author: 'MARCUS THAL',
    title: 'Metaverse Productivity Trends',
    content:
      'Hybrid offices are shifting to spatial computing headsets, leading to a 20% rise in remote collaboration productivity.',
    image: require('../assets/foo3.jpg'),
    trending: false,
  },
  {
    id: '4',
    author: 'SOPHIA MULLER',
    title: 'Sustainable Smart Cities',
    content:
      'New modular urban housing projects in Tokyo are utilizing self-healing concrete to cut long-term maintenance costs.',
    image: require('../assets/foo4.jpg'),
    trending: false,
  },
  {
    id: '5',
    author: 'JORDAN SMYTHE',
    title: 'Space Tourism Milestone',
    content:
      'The first fully orbital tourism flight completed its journey this week, opening a new era of commercial space travel.',
    image: require('../assets/foo.jpg'),
    trending: false,
  },
];
