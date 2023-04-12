// Mockup Images
import ConvexWP from "../images/mockup-convex-banner-a.png";
import MovieReact from "../images/mockup-moogle-banner-a.png";
import FetchWP from "../images/mockup-fetch-banner-a.png";
import Portfolio from "../images/mockup-portfolio-banner-a.png";

// Swiper Images
import ConvexMa from "../images/convex-mockup-a.png";
import ConvexMb from "../images/convex-mockup-b.png";
import ConvexMc from "../images/convex-mockup-c.png";
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
    id: "convex",
    bannerImgUrl: ConvexWP,
    title: "Convex Architecture",
    subtitle: "Interior & Exterior Home Design",
    duration: "4 Weeks",
    skills: [
      "Figma",
      ", ",
      "GitHub",
      ", ",
      "HTML5",
      ", ",
      "CSS3",
      ", ",
      "PHP",
      ", ",
      "WordPress",
    ],
    overview:
      "Convex Architecture is a home development company that specializes in customized interior and exterior home design for homeowners who want to renovate or upgrade their homes. Our website uses advanced custom fields and multiple plugins to display our services.",
    team: "Alice Lu & Ben Huang",
    role: "U/I Designer and Website Developer",

    live: "https://aliceilu.ca/convex/",
    gitHub: "https://github.com/AliceLu8/convex",
    design: [
      "The design process for this project was to create a website that showcases both the exterior and interior home design. The website features a modern-styled layout, which employs a dark color scheme to draw attention to the content and create a more impactful presentation.",
      " ",
      "On the about page, we have implemented a transition slider for the images and text to make it more engaging. We have also added a hover effect to the three icons to enhance the CSS effect on the design. To display a variety of existing projects and showcase different home styles, we have used a carousel plugin.",
    ],
    development: [
      "After completing the wireframe and high-fidelity prototype, we began coding the website. We utilized advanced customs fields to organize the content for each project and display them separately on the project page. This allows visitors to click on the 'read more' button and access more information about the home design they are interested in. Since we only included a few interior photos, we used a plugin called Modula to showcase the gallery look.",
      " ",
      "Once we completed the website's wireframe and high-fidelity prototype, we moved on to coding it. We utilized advanced customs fields to organize each project's content, which allows it to be displayed separately on the project page. This way, clients visiting the site can simply click the 'read more' button and access more information about each home design. Additionally, since we only included a few photos of the interior, we employed a plugin called Modula to create a gallery look. In the final step, we decided to go with a dark color scheme to emphasize the content. To add more interest, we designed a line effect using mustard color and placed it behind the project title. Overall, the styling turned out as we had envisioned.",
    ],
    imgSlider: {
      imgs: [ConvexMa, ConvexMb, ConvexMc],
    },
    takeaway:
      "Our goal was to create a modern and functional website for the architectural company. During the process, we faced some technical issues while adding the Modula plugin. Specifically, we were unable to display the photos exactly how we wanted, so we had to choose the best possible layout and ensure it was displayed properly on all devices.",
  },
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
      "Moogle Movie Database is a web application built with React JS that allows users to browse, search, and keep track of their favourite movies. The application is easy to navigate and features various search options such as popular movies, top-rated movies, upcoming movies, and movies currently playing. Using the movie database API, users can access movie ratings, release dates and brief summaries for individual movies.",
    team: "Alice Lu",
    role: "U/I Designer and Website Developer",

    live: "https://aliceilu.ca/moogle/",
    gitHub: "https://github.com/AliceLu8/moogle",
    design:
      "The design process for this website began with the creation of a logo resembling a projecting kinetoscope, which served as the inspiration for determining the color scheme and typography of the Moogle Movie Database. To bring the vision to life, I used Adobe Illustrator to create the logo, Adobe Photoshop to edit images, and Adobe XD to develop high-fidelity mockups and interactive prototypes.",
    development: [
      "After completing the mockup and interactive prototype, I moved on to the ReactJS API process. Since this was my first ReactJS web application, I paid extra attention to ensure a seamless transition between pages. Additionally, I included a favourite icon that enables users to save their preferred movies to the Moogle database.",
      " ",
      "The final product differs slightly from the initial mockup due to some usability changes made during development. For example, the favourite icon and rating button were originally located beside the movie title, but were later relocated over the movie image to avoid longer titles overlapping with the icons.",
    ],
    imgSlider: {
      imgs: [MoogleMa, MoogleMb, MoogleMc],
    },
    takeaway:
      "During the development process, I noticed that some areas of my original design were not functioning properly, so I made some minor adjustments to improve functionality. The primary goal of this movie app project was to provide users with a smooth experience while navigating the entire website.",
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
      "Fetch,a dog walking company,is an E-Commerce website created by a team of four for the Capstone project. The website boasts custom theme, custom post types, advanced custom fields, taxonomies, and several plugins.",
    team: "LRCA: Linus Luo, Randy Gulak, Ciaran McGuigan, Alice Lu",
    role: "Content and Development Planner, U/I Designer, Front-End Developer",
    live: "https://aliceilu.ca/fetch/",
    gitHub: "https://github.com/AliceLu8/fetch-theme",
    design: [
      "The design process for this project was to create a website with a clean and modern layout that would allow customers to purchase both dog walking services and pet merchandise.",
      " ",
      "My team began this project by reviewing the project summary and creating a memorandum of understanding. We held a discovery meeting with the client and drafted a project management and communication plan, a detailed content plan and information architecture layout, wireframes and mockups, and a development plan. Only after completing these steps, did we begin building the functional website.",
    ],

    development: [
      "After thorough planning and several meetings, my team began coding the Fetch website. I was responsible for creating advanced custom fields and output codes for the contact and individual staff pages on the PHP files.",
      " ",
      "We divided the workload and communicated daily via Zoom or Slack channels. We used Trello to set up schedule lists so everyone knew their tasks, and once a task was complete, we moved it to the completed folder. If anyone got stuck on the codes, we helped each other out. After completion, we pushed the work to GitHub and created a new pull request, advising our teammates to check before we FTP to the live site.",
      " ",
      "Our next step was styling the website, and before starting the SASS files, we went over the classes in a team meeting to ensure we targeted the right class instead of using multiple class names in the same area.",
    ],
    imgSlider: {
      imgs: [FetchMa, FetchMb, FetchMc],
    },
    takeaway:
      "The goal of the Fetch Capstone project was to build a functional and visually appealing dog walking service website for users to navigate. As a team, we paid attention to detail and planned ahead for each development stage.",
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
      "The Portfolio Project website showcases my personal design skills, abilities, and completed projects. I am currently working on other projects that will be added to the portfolio section once completed.",
    team: "Alice Lu",
    role: "U/I Designer and Website Developer",
    live: "https://aliceilu.ca/",
    gitHub: "https://github.com/AliceLu8/portfolio",
    design: [
      "Designing my own portfolio website was a challenging process, particularly in terms of deciding on a suitable color scheme, typography, styling, and functionality.",
      " ",
      "Ultimately, I opted for a white background color, light blue and mustard colored tones for the text, and a hover effect for highlighting.",
      " ",
      "My aim was to create a simple, clean, visually appealing, and elegant appearance for the website.",
    ],
    development: [
      "I began the development of my portfolio project by first creating a content plan, a site-map, wireframe, and prototype for my website.",
      " ",
      "Once the initial planning was complete, I moved on to creating the JavaScript files and organizing them in designated folders in React VSCode. With everything set up, I began to hard code the website using ReactJS syntax.",
      " ",
      "The next stage of development involved styling the website using SASS files. I spent a significant amount of time on this stage, as I aimed to create a visually stunning website with great user experience functionality.",
    ],
    imgSlider: {
      imgs: [PortfolioMa, PortfolioMb, PortfolioMc],
    },
    takeaway:
      "My primary goal for this portfolio project was to showcase my technical skills and design creativity as a front-end web developer. I chose ReactJS for my website because of its flexibility and the availability of external libraries, which allowed me to create a more intricate web application design. Overall, the result was phenomenal, and I can now utilize the skills I gained during the intense six-month FWDP program to build my personal website.",
  },
];
