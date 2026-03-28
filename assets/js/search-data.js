// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching Assistantships at Manning College of Information and Computer Sciences, UMass Amherst",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-successfully-defended-my-phd-dissertation-teaching-robots-to-learn-from-direct-interaction-and-act-under-uncertainty-and-partial-observability-yes-that-makes-me-dr-doctor",
          title: 'Successfully defended my PhD dissertation. Teaching robots to learn from direct interaction and...',
          description: "",
          section: "News",},{id: "teachings-compsci-187-programming-with-data-structures",
          title: 'COMPSCI 187 - Programming with Data Structures',
          description: "Teaching Assistant for COMPSCI 187 (Fall 2022) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-187-programming-with-data-structures/";
            },},{id: "teachings-compsci-220-programming-methodology",
          title: 'COMPSCI 220 - Programming Methodology',
          description: "Teaching Assistant for COMPSCI 220 (Fall 2017) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-220-programming-methodology/";
            },},{id: "teachings-compsci-240-reasoning-under-uncertainty",
          title: 'COMPSCI 240 - Reasoning Under Uncertainty',
          description: "Teaching Assistant for COMPSCI 240 (Spring 2018) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-240-reasoning-under-uncertainty/";
            },},{id: "teachings-compsci-503-embedded-systems-engineering",
          title: 'COMPSCI 503 - Embedded Systems Engineering',
          description: "Teaching Assistant for COMPSCI 503 (Fall 2018) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-503-embedded-systems-engineering/";
            },},{id: "teachings-compsci-589-machine-learning",
          title: 'COMPSCI 589 - Machine Learning',
          description: "Teaching Assistant for COMPSCI 589 (Spring 2024) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-589-machine-learning/";
            },},{id: "teachings-compsci-603-robotics",
          title: 'COMPSCI 603 - Robotics',
          description: "Teaching Assistant for COMPSCI 603 (Spring 2020) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-603-robotics/";
            },},{id: "teachings-compsci-683-artificial-intelligence",
          title: 'COMPSCI 683 - Artificial Intelligence',
          description: "Teaching Assistant for COMPSCI 683 (Spring 2023) at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/compsci-683-artificial-intelligence/";
            },},{id: "teachings-platform-for-ethical-and-responsible-computing",
          title: 'Platform for Ethical and Responsible Computing',
          description: "Teaching support across Fall 2024, Spring 2025, and Fall 2025 at UMass Amherst.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/pearce-ethical-and-responsible-computing/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Khoshrav_Doctor_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%64%6F%63%74%6F%72@%63%73.%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=aPUvAbAAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/khoshrav", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/khoshrav-doctor", "_blank");
        },
      },{
        id: 'social-bitbucket',
        title: 'Bitbucket',
        section: 'Socials',
        handler: () => {
          window.open("https://bitbucket.org/khoshrav/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
