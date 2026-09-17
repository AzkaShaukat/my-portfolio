export const projects = [
  {
    title: 'Aegis AI',
    slug: 'aegis-ai',
    tagline: 'Multi-channel microservices cybersecurity platform for real-time threat detection.',
    overview:
      'Aegis AI is an enterprise-grade threat intelligence orchestrator built to protect users from sophisticated cyber fraud. Architected as a complex 6-microservice ecosystem, it leverages a dual API-Gateway (FastAPI/React) to route inputs to independent threat analyzers. It utilizes asynchronous OSINT gathering, Random Forest classifiers, and PyTorch deep learning ensembles to analyze deepfakes, phishing links, compromised credentials, and QR payload threats in real-time.',
    features: [
      'Fully containerized 6-microservice ecosystem with isolated Docker bridging and REST API orchestration.',
      'PyTorch Deepfake Ensemble running a 6-model pipeline across spatial/temporal domains with custom algorithmic confidence enhancement.',
      'Privacy-preserving Tier 1 Credential Analyzer featuring SHA-1 k-anonymity (HIBP), local regex heuristics, and GDPR-compliant auto-masking.',
      'Advanced 11-Layer URL Threat Intel and Random Forest classifier for deep phishing link analysis.',
      'WebSocket-driven React 18 / Zustand frontend and a dedicated WhatsApp Business API webhook integration for multi-channel threat alerting.',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'React 18',
      'PyTorch',
      'scikit-learn',
      'Docker',
      'PostgreSQL',
      'Redis',
      'Ollama (LLaMA 3.2)',
    ],
    challenges: [
      'Designing an intelligent traffic orchestrator to parse ambiguous human inputs, manage conversational state via Redis, and asynchronously dispatch to 5 independent microservices.',
      'Balancing synchronous OSINT network polling (e.g., VirusTotal/URLScan) with non-blocking WebSockets and mobile timeout constraints.',
      'Integrating a Local LLM (Llama 3.2) to dynamically translate raw JSON threat intelligence into actionable, plain-English Explainable AI (XAI) summaries.',
    ],
    learnings: [
      'Mastered the design and orchestration of microservices using Docker Compose and FastAPI asynchronous routing.',
      'Deepened expertise in applying Machine Learning in production—from Computer Vision (PyTorch) to Tabular data models (Random Forests).',
      'Implemented strict Zero-Trust architectural patterns including HMAC validation, JWT rotation, and cryptographic hashing (k-anonymity) for sensitive data handling.',
    ],
    feedback: true,
    links: {
      github: 'https://github.com/AzkaShaukat/aegis-ai',
    },
  },
  {
    title: 'LESCO Meter Data Analyzer',
    slug: 'lesco-meter-data-analyzer',
    tagline: 'Automated analysis and anomaly detection for smart meter data.',
    overview:
      'A full-stack web application designed for electrical grid analysts to automate the auditing of smart meter data. Successfully deployed to production, it replaces manual spreadsheet inspection with intelligent algorithms that ingest messy Excel exports, detect missing intervals, correlate gaps with outage events, and flag suspiciously low consumption.',
    features: [
      'Advanced Data Normalization Pipeline featuring auto-detection of Multiplication Factor scaling across highly irregular Excel exports.',
      'Outage Correlator that joins distinct time-series datasets (Load Profile vs Events) to differentiate simple power outages from potential meter tampering.',
      'Dynamic anomaly detection for missing interval readings and sudden historical consumption drops.',
      'In-memory asynchronous job queue for processing massive smart meter datasets without blocking the UI.',
      'Peak Load analysis engine that automatically corrects un-scaled kW/kWh values using median ratio heuristics.',
    ],
    techStack: [
      'React 19',
      'Vite',
      'Python 3.11+',
      'FastAPI',
      'Pandas',
      'Recharts',
    ],
    challenges: [
      'Architecting robust, fault-tolerant parsers that dynamically adjust to unpredictable and messy vendor Excel formats.',
      'Designing an intelligent heuristic to detect if a meter\'s Multiplication Factor was already applied to raw consumption data.',
      'Implementing an asynchronous, non-blocking job queue and server-side pagination for ~15,000-row datasets using Python threading.',
    ],
    learnings: [
      'Mastered advanced time-series data manipulation and anomaly detection using Pandas dataframes.',
      'Deepened expertise in system design concepts including client-server architecture, async job processing, and JSON serialization.',
      'Gained practical experience in handling inconsistent, un-scaled values in real-world production datasets.',
    ],
    feedback: true,
    links: {
      live: 'https://lesco-meter-analyzer.vercel.app/',
      github: 'https://github.com/AzkaShaukat/lesco-meter-analyzer',
    },
  },
  {
    title: 'GPA Genie Web',
    slug: 'gpa-genie-web',
    tagline: 'A web-based suite of calculators for semester and cumulative GPAs.',
    overview:
      'GPA Genie is a responsive frontend web application designed to help students calculate and convert their academic grades. It provides tools for Semester Grade Point Average (SGPA), Cumulative Grade Point Average (CGPA), grade conversions, and percentage conversions.',
    features: [
      'Responsive design tailored for mobile and desktop viewing.',
      'Custom client-side search engine for rapid navigation between calculators.',
      'UI layouts for calculating SGPA, CGPA, Percentages, and Grade conversions.',
      'Clean separation of concerns in styling with global and page-specific CSS.',
      'Simulated authentication workflows using localStorage.',
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'Bootstrap 3.3.7',
      'Vanilla JavaScript',
      'jQuery',
    ],
    challenges: [
      'Maintaining visual consistency across multiple distinct calculator interfaces without a component-based framework.',
      'Ensuring responsive behavior across a wide range of devices using Bootstrap utility classes.',
      'Implementing a client-side search routing mechanism without relying on a backend index.',
    ],
    learnings: [
      'Deepened understanding of traditional multi-page application (MPA) architectures and static asset management.',
      'Gained experience in DOM manipulation and event handling using Vanilla JavaScript.',
      'Mastered CSS flexbox and grid concepts through extensive use of the Bootstrap grid system.',
    ],
    feedback: true,
    links: {
      live: 'https://gpagenie.vercel.app/',
      github: 'https://github.com/AzkaShaukat/GPAGenie_Web',
    },
  },
  {
    title: 'GPA Genie Desktop',
    slug: 'gpa-genie-desktop',
    tagline: 'A comprehensive desktop application for academic performance tracking.',
    overview:
      'GPA Genie is a Python-based desktop application built with Tkinter, designed to help students manage their academic records. It replaces manual spreadsheet tracking with a centralized, database-backed platform, allowing for secure login, multi-semester tracking, and visual performance analytics.',
    features: [
      'Secure user authentication with encrypted passwords and individual academic profiles.',
      'Comprehensive semester management including adding, editing, and deleting course records.',
      'Automated CGPA calculations tracking performance across the entire degree.',
      'Interactive data visualizations (bar charts, line graphs) generated dynamically with Matplotlib.',
      'Robust data persistence using a local MySQL database.',
    ],
    techStack: [
      'Python',
      'Tkinter',
      'CustomTkinter',
      'MySQL',
      'Matplotlib',
      'bcrypt',
    ],
    challenges: [
      'Designing an intuitive GUI using Tkinter and CustomTkinter while maintaining responsive layout principles.',
      'Establishing secure and reliable connections to a local MySQL database for data persistence.',
      'Integrating Matplotlib charts seamlessly within the Tkinter event loop without blocking the UI.',
    ],
    learnings: [
      'Implemented MVC (Model-View-Controller) design patterns to separate business logic from the presentation layer.',
      'Gained hands-on experience in relational database design, SQL querying, and security best practices (password hashing).',
      'Improved skills in building complex desktop user interfaces with a focus on usability and error handling.',
    ],
    feedback: true,
    links: {
      github: 'https://github.com/AzkaShaukat/GPAGenie_DekstopApp',
    },
  },
  {
    title: 'Library Management System',
    slug: 'library-management-system',
    tagline: 'A robust desktop system for automating core library operations.',
    overview:
      'A desktop application built with Python and Tkinter, featuring a complete MVC architecture that interacts directly with a local MySQL database. It facilitates essential library tasks including inventory management, member registration, loan lifecycles, and automated fine calculation.',
    features: [
      'Centralized librarian dashboard for managing books, members, and active loans.',
      'Transactional loan engine ensuring data integrity when issuing and returning books.',
      'Automated fine calculation based on dynamically computed overdue days.',
      'Comprehensive inventory tracking with real-time updates to available copies.',
      'Clean, modern UI utilizing custom ttk styles and grid-based navigation.',
    ],
    techStack: ['Python', 'Tkinter', 'MySQL', 'mysql-connector-python'],
    challenges: [
      'Ensuring data integrity across multiple dependent SQL queries (e.g., creating a loan and decrementing inventory) during operations.',
      'Separating GUI code from database logic to maintain a clean and maintainable codebase.',
      'Designing a user-friendly interface that efficiently handles complex data entry and retrieval tasks.',
    ],
    learnings: [
      'Mastered transaction management in SQL to enforce ACID properties during multi-step operations.',
      'Deepened understanding of the MVC design pattern and its application in desktop software development.',
      'Gained proficiency in raw SQL querying and relational database design principles.',
    ],
    feedback: true,
    links: {
      github: 'https://github.com/AzkaShaukat/Library-Management-System',
    },
  },
  {
    title: 'Personal Portfolio',
    slug: 'personal-portfolio',
    tagline: 'A modern, performant portfolio showcasing my projects and skills.',
    overview:
      'This very portfolio! A Next.js application designed to provide a professional, responsive, and accessible presentation of my software engineering journey. It features dynamic routing for project details, optimized asset delivery, and a clean, minimalist aesthetic.',
    features: [
      'Dynamic, data-driven project routing allowing for seamless addition of new portfolio pieces.',
      'Highly responsive and accessible UI built with Tailwind CSS and shadcn/ui components.',
      'Optimized performance using Next.js App Router and static site generation techniques.',
      'Interactive elements and smooth transitions utilizing Framer Motion.',
      'Minimalist design system focusing on typography, content readability, and user experience.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
    ],
    challenges: [
      'Architecting a maintainable content management approach without relying on an external CMS.',
      'Ensuring consistently high performance and SEO scores across all devices and network conditions.',
      'Customizing and integrating various UI components to create a cohesive design language.',
    ],
    learnings: [
      'Deepened expertise in modern React patterns and the Next.js App Router ecosystem.',
      'Refined skills in responsive design and utility-first styling with Tailwind CSS.',
      'Explored advanced deployment strategies and performance optimization techniques for web applications.',
    ],
    feedback: true,
    links: {},
  },
];
