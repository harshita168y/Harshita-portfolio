// Edit the public portfolio content here.
// Source: https://www.harshitaportfolio.online/ (4 November 2026).

export const portfolio = {
  "profile": {
    "name": "Harshita Ramesh",
    "role": "Software Engineer",
    "location": "Ireland",
    "siteUrl": "https://www.harshitaportfolio.online",
    "email": "harshita01r@gmail.com",
    "phone": "+353 89 225 7224",
    "phoneHref": "tel:+353892257224",
    "linkedin": "https://www.linkedin.com/in/harshita01r",
    "github": "https://github.com/harshita168y",
    "greeting": "Hi, I’m Harshita.",
    "headlineLead": "I build software that",
    "headlineAccent": "makes things easier.",
    "tagline": [
      "Full stack engineer",
      "Cloud systems",
      "AI integrated developer"
    ],
    "professionalYears": 3,
    "handsOnYears": 4,
    "coreStack": [
      "C#",
      ".NET",
      "Java",
      "Angular",
      "React",
      "TypeScript",
      "SQL"
    ],
    "certifications": [
      "Microsoft Azure Fundamentals (AZ-900)",
      "AWS Cloud Practitioner",
      "SAA-C03 learning path — completed"
    ],
    "aiTools": [
      "Python",
      "MediaPipe",
      "OpenAI",
      "Gemini",
      "Claude",
      "Ollama"
    ],
    "availability": {
      "status": "Immediately available",
      "workModes": [
        "On-site",
        "Remote",
        "Hybrid"
      ]
    }
  },
  "outcomes": [
    {
      "value": "5 Million",
      "label": "Maintained applications platform serving over 5 million customer accounts and handling more than 150,000 records daily."
    },
    {
      "value": "50%",
      "label": "Application performance improved by 50% through SQL query optimisation, database indexing and backend improvements."
    },
    {
      "value": "85%",
      "label": "Increased test coverage from 60% to 85% through unit, integration and regression testing using xUnit."
    },
    {
      "value": "<8s",
      "label": "Report generation, reduced from about 45 seconds through SQL tuning."
    },
    {
      "value": "35%",
      "label": "Improved testing reduced production defects by 35%."
    },
    {
      "value": "5+",
      "label": "Enterprise modernisation projects delivered with ASP.NET Core, C#, and SQL."
    }
  ],
  "projects": [
    {
      "id": "chat",
      "title": "AI-Moderated Real-Time Chat",
      "kicker": "REAL-TIME",
      "description": "An event-driven full-stack application combining live messaging, REST APIs, access control, and AI-assisted moderation.",
      "tags": [
        "C# / ASP.NET Core",
        "React / TypeScript",
        "SignalR",
        "Gemini API",
        "Azure"
      ],
      "detailTitle": "Architecture & engineering",
      "detail": "ASP.NET Core, React, SignalR WebSockets, and PostgreSQL support the application. Engineering work includes role-based access, audit logs, Gemini moderation, and automated releases to Azure App Service.",
      "link": {
        "label": "Explore the source",
        "href": "https://github.com/harshita168y/webchat"
      },
      "visual": "chat",
      "wide": false
    },
    {
      "id": "resume",
      "title": "Resume Analyser",
      "kicker": "AI TOOLS ",
      "description": "An AI Chrome extension that compares resumes with job descriptions and ranks skill-gap recommendations.",
      "tags": [
        "JavaScript",
        "Chrome extension",
        "OpenAI / Claude / Gemini",
        "Ollama"
      ],
      "detailTitle": "Integration & privacy",
      "detail": "OpenAI, Anthropic Claude, and Gemini provide hosted analysis. Ollama supports local inference, allowing analysis to stay within the user’s environment.",
      "link": {
          "label": "GitHub",
          "href": "https://github.com/harshita168y/Resume-Analyzer"
        },
      "visual": "resume",
      "wide": false
    },
    {
      "id": "pose",
      "title": "Exercise Monitoring & Pose Estimation",
      "kicker": "COMPUTER VISION ",
      "description": "A real-time Android computer vision application, developed as my MEng capstone project and thesis.",
      "tags": [
        "Kotlin / Python",
        "Android",
        "MediaPipe BlazePose",
        "MEng thesis"
      ],
      "detailTitle": "Implementation & result",
      "detail": "Landmark geometry and heuristic state machines support exercise recognition and repetition detection. The project achieved 95%+ repetition-detection accuracy at approximately 30 FPS.",
      "link": {
        "label": "Explore the source",
        "href": "https://github.com/harshita168y/Exercise-Monitoring-and-Pose-Estimation"
      },
      "visual": "pose",
      "wide": false
    },
    {
      "id": "cloud",
      "title": "VibeMap",
      "kicker": "CLOUD ",
      "description": "A real-time anonymous platform for discovering and sharing location-based posts with live updates.",
      "tags": [
        "Next.js / TypeScript",
        "Supabase / PostgreSQL",
        "Docker",
        "AWS ECS Fargate"
      ],
      "detailTitle": "Architecture & delivery",
      "detail": "Docker containers run on ECS Fargate behind an Application Load Balancer. GitHub Actions, ECR, and Route 53 support releases; CloudWatch and Grafana k6 support monitoring and load testing.",
      "link": {
        "label": "View the live application",
        "href": "https://vibemap.online/"
      },
      "visual": "cloud",
      "wide": false
    },
    {
      "id": "email",
      "title": "AI Email Automation Workflow",
      "kicker": "AI ",
      "description": "A Gmail workflow for drafting, reviewing, and approving replies, with a person involved in the final decision.",
      "tags": [
        "n8n",
        "Gmail API",
        "OpenAI",
        "OAuth 2.0"
      ],
      "detailTitle": "Automation with human review",
      "detail": "The workflow connects Gmail and OpenAI to help prepare email replies while retaining a review and approval step.",
      "link": {
        "label": "Explore the source",
        "href": "https://github.com/harshita168y/AI-Powered-Email-Automation-Workflow-"
      },
      "visual": "workflow",
      "wide": true
    }
  ],
  "about": [
    "A few small projects during lockdown changed the direction of my career.",
    "I was studying Electronics and Communication Engineering when our coursework introduced more opportunities to build with software. I enjoyed figuring things out and seeing something I’d built come to life. Soon, I was learning beyond what the coursework required, simply because I wanted to understand more.",
    "That interest led me to Cognizant’s Digital Nurture programme in 2021. Six months of training in Java and full stack development became an internship, then a full time software engineering role. Working on enterprise applications taught me what it takes to maintain systems people depend on: improving performance, modernising older applications and solving problems in production. Alongside work, I kept making time to learn independently.",

    "My interest in AI gave me another set of questions to explore. I wanted to understand how models learn and how I could build applications with them. That brought me to the University of Limerick for an MEng in Computer Vision and Artificial Intelligence, where I studied machine learning, deep learning and computer vision.",

    "What excites me now is putting those experiences together. I can draw on my software engineering background, my understanding of AI and the curiosity that got me started. I want to keep building applications that people can rely on and feel that something I’ve made has helped make their day easier.",

    "My projects now bring those experiences together through full stack applications, cloud systems and AI integrations. I’m looking to continue growing as a software engineer, using AI thoughtfully to solve practical problems and build software that makes everyday tasks easier."
  ],
  "roles": [
    {
      "date": "AUG 2022 — AUG 2024 · INDIA",
      "title": "Software Engineer",
      "summary": "Cognizant Technology Solutions",
      "highlights": [
        "Built and maintained internal web applications in C#, .NET Framework, .NET MVC, ASP.NET Core, Entity Framework and SQL Server, supporting a platform serving 5M+ customer accounts and 150K+ records daily.",
       "Built responsive UIs with HTML5, CSS3, JavaScript, React and TypeScript, building reusable components for billing, account management and service requests.",
        "Developed secure RESTful Web APIs, documenting 30+ endpoints using OpenAPI/Swagger and implementing JWT authentication, OAuth 2.0 and role based access control [RBAC].",
        "Improved application performance by 50% through SQL query optimisation, database indexing and backend improvements, reducing report generation time from 45 seconds to under 8 seconds.",
        "Contributed to solution design and modernisation across 5+ enterprise applications, supporting legacy migration from .NET Framework and VBA Access to .NET solutions. ",
        "Deployed to Azure PaaS (App Service) and IIS, managing Azure DevOps CI/CD pipelines across development, staging and production by using Git for source control. ",
        "Implemented unit, integration and regression testing using xUnit, increasing test coverage from 60% to 85% and reducing production defects by 35 percent. ",
        "Resolved complex production incidents through debugging, monitoring and root cause analysis, contributing to a 30 percent reduction in mean time to resolution. ",
        "Scoped and estimated work, delivering to agreed timelines in Agile/Scrum teams (sprint planning, stand ups) while mentoring interns."
      ]
    },
    {
      "date": "FEB 2022 — AUG 2022 · INDIA",
      "title": "Software Engineer Intern",
      "summary": "Cognizant Technology Solutions",
      "highlights": [
       "Delivered 12+ bug fixes and 3 features in Java springboot on a live enterprise application, with 80% accepted at first code review. ",
       "Wrote 100 plus jUnit tests, lifting module coverage from 45 percent to 70 percent. ",
       "Automated a release check task with a script, saving the team about 3 hours per week. ",
       "Developed and supported Angular frontend applications using JavaScript, HTML and CSS, integrating frontend workflows with backend APIs, contributing to a 15% reduction in UI rendering issues based on QA regression results."
      ]
    },
    {
      "date": "MAY 2026 — JUL 2026 · IRELAND",
      "title": "B2B Client Operations Executive",
      "summary": "Three Ireland · B2B telecom client operations using Salesforce, with a focus on stakeholder communication, CRM workflows, and client relationships.",
      "highlights": []
    },
    {
      "date": "OCT 2025 — APR 2026 · IRELAND",
      "title": "Operations Specialist — Credit Support Unit",
      "summary": "Covalen (AIB) · Supported lending-product operations and developed familiarity with regulated financial services and credit workflows.",
      "highlights": []
    }
  ],
  "skills": [
    {
      "title": "Backend",
      "items": "C# · .NET Core / .NET 6+ · ASP.NET Core · Web API · REST API design and integration · Microservices · SignalR / WebSockets · Java / Spring Boot · Python · Authentication · RBAC · Swagger / OpenAPI · Postman"
    },
    {
      "title": "Frontend",
      "items": "Angular · React · TypeScript · JavaScript · Next.js · HTML5 · CSS3 · Responsive web development · UI development · REST API integration"
    },
    {
      "title": "Database & data",
      "items": "SQL Server · PostgreSQL · Oracle SQL · Query optimisation · Indexing · Stored procedures · Views and functions · SSIS ETL · Entity Framework · Data migration · Data validation"
    },
    {
      "title": "Cloud & DevOps",
      "items": "Microsoft Azure · AWS · Docker · GitHub Actions · CI/CD · ECS Fargate · ECR · Application Load Balancer · Route 53 · CloudWatch · S3 · IAM · Linux"
    },
    {
      "title": "Engineering practices",
      "items": "Agile / Scrum · Unit and integration testing · Automated quality assurance · Code reviews · Performance optimisation · Root cause analysis · Secure development"
    },
    {
      "title": "AI & development",
      "items": "AI-assisted development · Computer vision · NLP · LLM applications · OpenAI · Gemini · Anthropic Claude · Ollama · MediaPipe · Python"
    }
  ],
  "education": [
    {
      "date": "SEP 2024 — SEP 2025 Limerick, Ireland",
      "degree": "MEng in Computer Vision and Artificial Intelligence",
      "institution": "University of Limerick",
      "grade": "QCA 3.2 / 4.0",
      "description": "Machine learning, computer vision, software engineering, data analytics, information systems, LLM tuning, deep learning, and NLP. Extensive Python work across model development, data analysis, and applied AI."
    },
    {
      "date": "AUG 2018 — MAY 2022 India",
      "degree": "BE in Electronics and Communication Engineering",
      "institution": "St. Joseph’s Institute of Technology",
      "grade": "CGPA 8.48 · First Class",
      "description": null
    }
  ]
} as const;

export type PortfolioProject = (typeof portfolio.projects)[number];
