import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Chang | UBC CS', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Andrew Chang', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, world! My name is',
  name: 'Andrew',
  subtitle: "Thanks for visiting my profile",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne: "I'm an undergraduate student studying Computer Science at the University of British Columbia. I enjoy learning new ways to solve problems, and am eager to use my skillset to create software solutions.",
  paragraphTwo: "Currently, I'm a part-time tutoring assistant and piano teacher. I love being able to use my knowledge to help others!",
  paragraphThree: 'In my spare time, I enjoy drawing, playing video games with friends, and going to the movies.',
  resume: 'https://drive.google.com/file/d/1bdv3UpavanpC5EmFWZ6iknP2DG6-rGGZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'go.jpg',
    title: 'BuddyGo',
    info: "A browser-based implementation of the board game Go, one of my favourite strategy games to play.",
    info2: 'Uses Socket.IO and Node.js to facilitate multiplayer gameplay.',
    url: '',
    repo: 'https://github.com/dumbapple/Go', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'pic1.jpg',
  //   title: 'FaceFinder',
  //   info: 'A web application that accepts a web image and uses the Clarifai API to detect faces.',
  //   info2: 'Created with React.js, Node.js, Express.js, and PostgreSQL',
  //   url: '',
  //   repo: 'https://github.com/dumbapple/react-playground', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'event.jpg',
    title: 'EventFinder',
    info: 'Worked with a partner to create a web application that allows users to create and manage events. Users may also find and attend events created by other users.',
    info2: 'My role was to implement the back-end, which I did using Node.js, Express.js, and MySQL.',
    url: '',
    repo: 'https://github.com/dumbapple/EventFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pic4.jpg',
    title: 'Club Website',
    info: "Made a static website for my university's cooking club as a place for them to share information about their events.",
    info2: 'Created to learn the basics of front-end development.',
    url: '',
    repo: 'https://github.com/dumbapple/ubc-cooking-club-website', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrew-wc-chang/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dumbapple',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
