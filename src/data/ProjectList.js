// Mockup Images
import MovieReact from "../images/mockup-moogle-banner-a.png";
import FetchWP from "../images/mockup-fetch-banner-a.png";
import Portfolio from "../images/mockup-portfolio-banner-a.png";

// Swiper Images
import MoogleMa from "../images/moogle-mockup-a.png";
import MoogleMb from "../images/moogle-mockup-b.png";
import MoogleMc from "../images/moogle-mockup-c.png";
import FetchMa from "../images/fetch-mockup-a.png";
import FetchMb from "../images/fetch-mockup-b.png";
import FetchMc from "../images/fetch-mockup-c.png";
import PortfolioMa from "../images/portfolio-mockup-a.png";
import PortfolioMb from "../images/portfolio-mockup-b.png";
import PortfolioMc from "../images/portfolio-mockup-c.png";

export const ProjectList = [
  {
    id: "moogle",
    bannerImgUrl: MovieReact,
    title: "Moogle",
    subtitle: "React Movie Database",
    duration: "5 Weeks",
    skills: [
      "Adobe XD",
      ", ",
      "Adobe Photoshop",
      ", ",
      "GitHub",
      ", ",
      "HTML5",
      ", ",
      "CSS3/SASS",
      ", ",
      "JavaScript",
      ", ",
      "React",
    ],
    overview:
      "Moogle movie database is a React JS web application that lets users browse, find, and keep track of their favourite movies. Easy to navigate and search for movies by popularity, top rated, coming soon, and now playing. The movie database API allows users to output movie ratings, release dates, and brief summaries for individual movies.",
    team: "Alice Lu",
    role: "U/I Designer and Website Developer",

    live: "https://aliceilu.ca/moogle/",
    gitHub: "https://github.com/AliceLu8/moogle",
    design:
      "The design process of this website started with the logo design which looks like the Projecting Kinetoscope (movie projector). Also, by brainstorming the ideas through the color scheme and typography to determine the design for the content of the Moogle movie database website. I used Adobe Illustrator for creating my logo, Adobe Photoshop for editing images, and Adobe XD for high fidelity mockups and interactive prototypes.",
    development: [
      "After I finished my mockup and interactive prototype, I started the ReactJS API process. Since this is the first ReactJS web application I developed, I ensured that the transition is smooth on all pages. The favourite icon was added for users to store their movies in the Moogle database.",
      " ",
      "The final product is a bit different from what I first created in my mockup because some changes were made for better usability during the development process. For example, the fav icon and the rating button were originally designed beside the movie title. During the coding period, I changed the location to be over the movie image. This is to prevent the title being longer than usual and it would overlap with the icons.",
    ],
    imgSlider: {
      imgs: [MoogleMa, MoogleMb, MoogleMc],
    },
    takeaway:
      "However, I had to modify my original design, as when I started the development process, I noticed some areas were not working properly. Therefore, I had to make some tiny changes in order to improve the functionality. The goal for this movie app project was to enable users to have a smooth user experience while navigating through the whole website.",
  },

  {
    id: "fetch",
    bannerImgUrl: FetchWP,
    title: "Fetch",
    subtitle: "WordPress & WooCommerce Website",
    duration: "5 Weeks",
    skills: [
      "Adobe XD",
      ", ",
      "Adobe Photoshop",
      ", ",
      "GitHub",
      ", ",
      "Trello",
      ", ",
      "HTML5",
      ", ",
      "CSS3/SASS",
      ", ",
      "Gulp",
      ", ",
      "JavaScript",
      ", ",
      "PHP",
      ", ",
      "WordPress",
      ", ",
      "WooCommerce",
    ],
    overview:
      "Fetch, the dog walking company, is an E-Commerce website for the Capstone project and it was built by a team of four. This site featured customized theme designs and we used custom post types, advanced custom fields, taxonomies, and multiple plugins.",
    team: "LRCA: Linus Luo, Randy Gulak, Ciaran McGuigan, Alice Lu",
    role: "Content and Development Planner, U/I Designer, Front-End Developer",
    live: "https://aliceilu.ca/fetch/",
    gitHub: "https://github.com/AliceLu8/fetch-theme",
    design: [
      "The design process for this project was to create a website that sells both dog walking services and pet merchandise. The site presents a clean and modern-styled layout.",
      " ",
      "The design process for this project was to create a website that sells both dog walking services and pet merchandise. The site presents a clean and modern-styled layout.",
      " ",
      "My team started this project by reviewing the project summary, creating a memo of understanding, a discovery meeting with the client, drafting the project management and communication plan, detailed content plan and information architecture layout, a development plan with wireframing and mockups, and a development plan before building the functional website.",
    ],

    development: [
      "After several meetings and thorough planning, my team began to code the site. I was in charge of creating the advanced custom fields and output codes in the contact and individual staff pages on the PHP files.",
      " ",
      "Each one of us divided the work load and we communicated on a daily basis via Zoom or Slack channels. We set up the schedule lists in Trello, so everyone was aware of what their tasks were. Once each task was done, we then moved it to the completed folder. However, when one of us got stuck on the codes, we helped each other out if needed. After the work is completed, we then pushed it to GitHub. We would make a new pull request and advise in Slack for our teammates to check before we FTP to the live site.",
      " ",
      "Once we fill out the contents, our next step is styling the website. My team had a meeting and we went over the classes before we started the SASS files. This step is critical as we all need to make sure we target the right class rather than writing multiple class names in the same area.",
    ],
    imgSlider: {
      imgs: [FetchMa, FetchMb, FetchMc],
    },
    takeaway:
      "The goal for the Fetch Capstone project was to build a functional and beautiful dog walking service website for users to navigate. This is a big collaborative project that I worked on and my team were attention to details and we planned ahead for each development stages.",
  },

  {
    id: "portfolio",
    bannerImgUrl: Portfolio,
    title: "Portfolio",
    subtitle: "React Portfolio Website",
    duration: "4 Weeks",
    skills: [
      "Adobe XD",
      ", ",
      "Adobe Photoshop",
      ", ",
      "GitHub",
      ", ",
      "HTML5",
      ", ",
      "CSS3/SASS",
      ", ",
      "JavaScript",
      ", ",
      "React",
    ],
    overview:
      "Portfolio project is a website where I showcase my personal design skills, abilities, and the projects that I have completed. I am still working on other projects and will upload them to my portfolio work section once I am finished.",
    team: "Alice Lu",
    role: "U/I Designer and Website Developer",
    live: "https://aliceilu.ca/",
    gitHub: "https://github.com/AliceLu8/portfolio",
    design: [
      "When it comes to designing my own portfolio website, it took me a long time to figure out what I wanted to use for my color scheme, typography, styling, and functionality.",
      " ",
      "In the end, I decided to use a dark color scheme for my background and a light blue tone for my text and a hover effect for the highlights.",
    ],
    development: [
      "I started with my content plan, a detailed site-map, created a wireframe, and a prototype on my website.",
      " ",
      "After the preliminary planning, I began to create JavaScript files and organized them in the designated folders in React VSCode. Once everything was ready, I started hard coding the site with ReactJS syntax.",
      " ",
      "Following the codes that are written, I moved to the SASS files for my styling. This stage is where I spent most of my time because I wanted my website to look amazing yet with U/X functionality.",
    ],
    imgSlider: {
      imgs: [PortfolioMa, PortfolioMb, PortfolioMc],
    },
    takeaway:
      "The goal for this portfolio project is to showcase my technical skills and design creativity as a front-end web developer. I used ReactJS for my website because I liked hard coding the website. It allows more complete flexibility for developers. Also, it provided lots of external libraries for me to construct a more complicated web application design. The outcome turns out phenomenal as I now can use what I learned in this intense six-month FWDP program to build my personal website.",
  },
];
