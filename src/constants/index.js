export const myProjects = [
  {
    id: 12,
    title: "SpendGuardian - Personal Finance Tracker",
    description:
      "A personal finance tracker with a modern UI, allowing users to manage budgets, track expenses, and visualize spending patterns.",
    subDescription: [
      "This website allows users to be able to upload their excel files and it will automatically parse the data and visualize it in a user-friendly way. It is also created with a simple UI which allows any user with any experience level to be able to use." 
    ],
    href: "https://spendguardian.online",
    logo: "/assets/projects/spendguardian.png",
    image: "/assets/projects/spendguardian.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/node.svg" },
    ],
  },
  {
    id: 11,
    title: "ENOTH Website - Startup Fashion Brand Website",
    description:
      "Website made for an upcoming fashion startup brand, showcasing a modern UI and integrated payment processing using Stripe.",
    subDescription: [
      "This is a mock website designed for a fashion startup brand, featuring a modern UI and integrated payment processing using Stripe. The site showcases the full shopping experience, though it is currently a non-functional prototype created for demonstration purposes.",
    ],
    href: "https://enoth.vercel.app",
    logo: "/assets/logos/enoth_logo_no_text.jpeg",
    image: "/ui/enoth.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
  {
    id: 1,
    title: "Cross-Domain Music–Movie Recommendation System",
    description:
      "Links user's music listening habits to movie preferences using multimodal emotion analysis.",
    subDescription: [
      "Lyrics classifier with DistilBERT and a custom audio model (Librosa + MLP).",
      "Fusion/ensemble for higher accuracy and explainable outputs (emotion vectors, similarity).",
      "FastAPI/Flask backend with React/Vite frontend and Spotify OAuth.",
      "User surveys and evaluation demonstrated high personalization and accuracy.",
    ],
    href: "https://moodflix.site/",
    logo: "",
    image: "/assets/projects/moodflix.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.png" },
      { id: 3, name: "FastAPI", path: "/assets/logos/fastapi.png" },
      { id: 4, name: "Librosa", path: "/assets/logos/librosa.png" },
    ],
  },
  {
    id: 10,
    title: "Monster Island - Survivors Game",
    description:
      "Simple survivors style game made on godot",
    subDescription: [
      "",
    ],
    href: "https://orionpax140209.itch.io/monster-island",
    logo: "",
    image: "/assets/projects/mosnter-island.png",
    tags: [
      { id: 1, name: "Godot", path: "/assets/logos/godot.png" },
     
    ],
  },
  {
    id: 2,
    title: "SYOS Supermarket Billing System",
    description:
      "A full-stack supermarket app with real-time cart/billing, stock tracking, and an admin control panel.",
    subDescription: [
      "Implemented role-based login (Admin/Cashier), CRUD, and cashier billing flows.",
      "Added performance testing with Apache JMeter and improved system responsiveness.",
      "Built with JSP/Java backend and a clean, usable front-end.",
      "Focus on reliability and smooth in-store operations.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/syos.png",
    tags: [
      { id: 1, name: "Java", path: "/assets/logos/java.svg" },
      { id: 2, name: "JSP", path: "/assets/logos/jsp-icon.png" },
      { id: 3, name: "JMeter", path: "/assets/logos/jmeter.svg" },
      { id: 4, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },

  {
    id: 3,
    title: "Diagnostic Report Ingestion System",
    description:
      "Production-grade AWS solution for MediSys Diagnostics with secure ingestion and analytics.",
    subDescription: [
      "CSV ingestion via S3 + Lambda with DynamoDB storage and SNS notifications.",
      "Admin dashboard (React + Vite + MUI) for real-time analytics and user management.",
      "Cognito-based auth (Admin/Client), KMS encryption, DLQs, and CloudWatch alarms.",
      "Cost monitoring and fault-tolerant serverless architecture.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/aws.png",
    tags: [
      { id: 1, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 4,
    title: "InterConnect",
    description:
      "Web-based CV management system for students and academic administrators.",
    subDescription: [
      "Designed UI for CV submission and admin review (HTML, CSS, JS).",
      "Built backend for CV storage, status tracking, and assignment workflows.",
      "Collaborated on full-stack design and planning (project in progress).",
      "Gained experience in stakeholder collaboration and delivery planning.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/apiit_final.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 5,
    title: "DriveSelect Auto",
    description:
      "A Laravel-based marketplace where users can post vehicles and bid on listings.",
    subDescription: [
      "Developed a user-friendly UI and implemented core CRUD features.",
      "Focused on clear flows for posting, browsing, and bidding.",
      "Second-year assignment project showcasing full-stack fundamentals.",
      "Clean separation between presentation and data layers.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/driveselect.jpg",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 4, name: "Bootstrap", path: "/assets/logos/bootstrap.svg" },
    ],
  },
  //   {
  //     id: 6,
  //     title: "Kingslake Web Updates",
  //     description:
  //       "Enhancements for Kingslake sites: Blue Line Balancing and EazyPay.",
  //     subDescription: [
  //       "Designed a modern landing page for Kingslake Blue (Adobe XD).",
  //       "Shipped iterative improvements to responsiveness and interactivity.",
  //       "Collaborated with team to align UX with business goals.",
  //     ],
  //     href: "",
  //     logo: "",
  //     image: "/assets/projects/elearning.jpg",
  //     tags: [
  //       { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
  //       { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
  //       { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
  //       { id: 4, name: "Adobe XD", path: "/assets/logos/xd.svg" },
  //     ],
  //   },

  {
    id: 7,
    title: "Music Streaming Dashboard UI",
    description:
      "A modern, dark-themed music app interface with a home feed, category grids, and a persistent mini-player.",
    subDescription: [
      "Designed responsive cards for Now Playing, Playlist of the Day, and For You sections.",
      "Built tabbed carousels (Artists / Playlist / Combined) with smooth hover states and focus rings.",
      "Included a dock-style audio player with timeline, transport controls, and volume slider.",
      "Optimized layout for desktop and large tablets with consistent spacing and typography scale.",
    ],
    href: "",
    logo: "",
    image: "/ui/musicapp.jpg",
    tags: [{ id: 1, name: "Figma", path: "/assets/logos/figma.svg" }],
  },
  {
    id: 8,
    title: "NexaMarket – E-commerce UI",
    description:
      "A clean e-commerce front page concept with best-seller rails, category tiles, and a rich footer.",
    subDescription: [
      "Header with search, account actions, and mega-menu entry points (Today’s Deals, Customer Service, etc.).",
      "Best Seller sections for Electronics and Clothing with rating badges and price chips.",
      "Colorful category tiles (Gaming Merch, Design Your Space, Lifestyle Gifts) with clear CTA links.",
      "Detailed footer with international links, payment methods, QR, and policy navigation.",
    ],
    href: "https://www.linkedin.com/posts/chanka-herath_excited-to-share-my-latest-design-project-ugcPost-7209394545745174531-bXbp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD86VQMBYOhxtoMFxxZKdFOXJNC9aVMWS30",
    logo: "",
    image: "/ui/NexaMarket_thumbnail.jpg",
    tags: [{ id: 1, name: "Figma", path: "/assets/logos/figma.svg" }],
  },
  {
    id: 9,
    title: "Pizzaria – Restaurant Landing UI",
    description:
      "A bold, promo-driven pizza website concept with hero coupon banner, menu grid, and offer cards.",
    subDescription: [
      "Large hero with headline hierarchy, coupon CTA, and promo ribbons (flavor count, combinations).",
      "Menu grid for signature pizzas with add-to-cart buttons and price emphasis.",
      "Promo cards for weekly deals, new items, and discounts to drive conversion.",
      "Consistent brand colors, strong contrast, and accessible type scale for readability.",
    ],
    href: "https://www.linkedin.com/posts/chanka-herath_thrilled-to-share-my-latest-uiux-design-ugcPost-7212044443674165248-ROQv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD86VQMBYOhxtoMFxxZKdFOXJNC9aVMWS30",
    logo: "",
    image: "/ui/Pizzaria poster.jpg",
    tags: [
      //   { id: 1, name: "React", path: "/assets/logos/react.svg" },
      //   { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      //   { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      //   { id: 4, name: "Design", path: "/assets/logos/figma.svg" },
      { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chanka-herath/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "github",
    href: "https://github.com/chanka-herath2001",
    icon: "/assets/logos/git.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_chanka_herath_/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Associate Software Engineer",
    job: "Taurgo Limited (UK)",
    date: "Jan 2025 - Jun 2025",
    contents: [
      "Engineered a modular CRM in React for partner clients to manage leads and auto-generate inspection reports.",
      "Built a job booking interface for tour scheduling; improved mobile ↔ web workflows via REST APIs.",
      "Conducted user testing to refine mobile UX and increase adoption among field agents.",
      "Rebuilt the company site’s frontend with React, improving responsiveness and load times.",
    ],
  },
  {
    title: "Intern Software Engineer",
    job: "Taurgo Limited (UK)",
    date: "Jul 2024 - Jan 2025",
    contents: [
      "Developed a 360° Virtual Tour app (Flutter) with team to explore properties interactively.",
      "Built an Inventory & Inspection Reporting app (Flutter, MongoDB, AWS) with photo uploads and condition/cleanliness selections.",
      "Integrated RESTful APIs across mobile and web; ensured smooth data flow between systems.",
      "Performed QA across Android/iOS to verify performance and usability.",
    ],
  },
  {
    title: "Intern – Web Developer",
    job: "Kingslake (Sri Lanka)",
    date: "Jun 2024 - Jul 2024",
    contents: [
      "Delivered significant website enhancements for Kingslake Blue Line Balancing.",
      "Designed a new landing page in Adobe XD aligned to usability and clarity.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
