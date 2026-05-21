// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research and software projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-chess-web-game",
          title: 'Chess Web Game',
          description: "Browser-based chess game with self-made game engine and WebSockets for multiplayer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chess-web-game/";
            },},{id: "projects-chip-8-emulator",
          title: 'CHIP-8 Emulator',
          description: "CHIP-8 emulator and disassembler in C++.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chip-8-emulator/";
            },},{id: "projects-c-ray-tracer",
          title: 'C++ Ray Tracer',
          description: "Rendering project with depth of field, motion blur, mipmapping, textures, and soft shadows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cpp-ray-tracer/";
            },},{id: "projects-dino-game-neural",
          title: 'Dino Game Neural',
          description: "Chrome dinosaur game implementation with a neural network that learns to play. Fully in Processing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dinogame-neural/";
            },},{id: "projects-fair-transaction-ordering-on-dags",
          title: 'Fair Transaction Ordering on DAGs',
          description: "Master&#39;s thesis work on transaction order fairness in DAG-based distributed systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fair-transaction-ordering/";
            },},{id: "projects-jamie",
          title: 'Jamie',
          description: "Local-first voice assistant Discord bot with wake-word activation, speech recognition, LLM intent routing, and plugins.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jamie/";
            },},{id: "projects-optimal-decision-trees-for-algorithm-selection",
          title: 'Optimal Decision Trees for Algorithm Selection',
          description: "Research on dynamic-programming methods for learning optimal decision trees.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optimal-decision-trees/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gsegalini", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%75%6C%69%6F%73%65%67%61%6C%69%6E%69@%70%72%6F%74%6F%6E%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DoN-jpkAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-2960-9946", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/giulio-segalini-8065b7236", "_blank");
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
