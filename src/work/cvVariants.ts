import {
  type CvData,
  type CvExperience,
  type CvProject,
  type CvSkill,
  type LocalizedContent,
} from '@/types/CvTypes'

export const CV_VARIANTS = [
  'standard',
  'fullstack',
  'frontend-product',
  'systems-operations',
] as const

export type CvVariant = (typeof CV_VARIANTS)[number]

const validVariants = new Set<string>(CV_VARIANTS)

const localized = (en: string, sv: string): LocalizedContent => ({ en, sv })

const variantSkill: CvSkill = {
  id: 1001,
  category: localized(
    'Experienced Frameworks/Tools',
    'Erfarenhet av Ramverk/Verktyg',
  ),
  tool: localized(
    'Claude Code, Codex and AI-assisted development',
    'Claude Code, Codex och AI-stödd utveckling',
  ),
  icon: '',
}

const contentDescriptions: Partial<
  Record<CvVariant, { profile: LocalizedContent; intro: LocalizedContent }>
> = {
  fullstack: {
    profile: localized(
      'Java/full-stack developer educated at Yrgo, with experience in Spring Boot, React, TypeScript, SQL/JPA, REST APIs, Git and agile collaboration.',
      'Java/fullstack-utvecklare utbildad vid Yrgo, med erfarenhet av Spring Boot, React, TypeScript, SQL/JPA, REST-API:er, Git och agilt samarbete.',
    ),
    intro: localized(
      'Java/full-stack developer educated at Yrgo (Java Enterprise Developer), with strong interest in backend, frontend and building systems that are useful, maintainable and reliable. I have worked with Java, Spring Boot, SQL/JPA, REST APIs, React, TypeScript, Git and agile methods through education, open-source internship and own full-stack projects. I am early in my career as a developer, but I bring practical experience from system-oriented IT delivery, documentation, troubleshooting and collaboration in secure environments. I enjoy learning from experienced colleagues, sharing knowledge and contributing to solutions that create real value.',
      'Java/fullstack-utvecklare utbildad vid Yrgo (Java Enterprise Developer), med stort intresse för backend, frontend och att bygga system som är användbara, underhållbara och stabila. Jag har arbetat med Java, Spring Boot, SQL/JPA, REST-API:er, React, TypeScript, Git och agila metoder genom utbildning, open source-praktik och egna fullstackprojekt. Jag är i början av min yrkesbana som utvecklare, men har praktisk erfarenhet från systemnära IT-leveranser, dokumentation, felsökning och samarbete i säkerhetskritiska miljöer. Jag tycker om att lära av erfarna kollegor, dela kunskap och bidra till lösningar som skapar verklig nytta.',
    ),
  },
  'frontend-product': {
    profile: localized(
      'Full-stack developer and business owner with experience in React, TypeScript, APIs, serverless solutions, AI-assisted workflows and turning real needs into working products.',
      'Fullstack-utvecklare och egenföretagare med erfarenhet av React, TypeScript, API:er, serverless-lösningar, AI-stödda arbetssätt och att omsätta verkliga behov till fungerande produkter.',
    ),
    intro: localized(
      'Full-stack developer educated at Yrgo (Java Enterprise Developer) and owner of a photography business where I build and maintain my own digital tools. I enjoy working close to real user needs, building quickly enough to learn, and improving solutions as I understand the problem better. I have built projects with React, TypeScript, Java, Spring Boot, PostgreSQL, REST APIs, Cloudflare Workers, R2/KV and GitHub Actions, and I use Claude Code and Codex for prototyping, code-related work, documentation and structured problem solving. I am early in my career as a developer, but I bring initiative, curiosity and practical experience from taking ideas from need to working product.',
      'Fullstack-utvecklare utbildad vid Yrgo (Java Enterprise Developer) och driver en egen fotografverksamhet där jag bygger och förvaltar mina egna digitala verktyg. Jag tycker om att arbeta nära verkliga användarbehov, bygga snabbt nog för att lära mig och förbättra lösningar när jag förstår problemet bättre. Jag har byggt projekt med React, TypeScript, Java, Spring Boot, PostgreSQL, REST-API:er, Cloudflare Workers, R2/KV och GitHub Actions, och använder Claude Code och Codex för prototypning, kodnära arbete, dokumentation och strukturerad problemlösning. Jag är i början av min yrkesbana som utvecklare, men tar egna initiativ, är nyfiken och har praktisk erfarenhet av att ta idéer från behov till fungerande produkt.',
    ),
  },
  'systems-operations': {
    profile: localized(
      'IT consultant and developer with experience in system-oriented IT delivery, Windows environments, troubleshooting, documentation, automation and application-focused stability.',
      'IT-konsult och utvecklare med erfarenhet av systemnära IT-leveranser, Windows-miljöer, felsökning, dokumentation, automatisering och applikationsnära stabilitet.',
    ),
    intro: localized(
      'IT consultant and full-stack developer educated at Yrgo (Java Enterprise Developer), with experience in system-oriented IT delivery, troubleshooting, documentation and automation in Windows environments. I combine practical work in software packaging, PowerShell, MECM, Active Directory and Azure DevOps with a developer background in Java, SQL, APIs, databases and web applications. I enjoy understanding the full chain around an application, identifying root causes and contributing to stable, traceable and well-documented solutions.',
      'IT-konsult och fullstackutvecklare utbildad vid Yrgo (Java Enterprise Developer), med erfarenhet av systemnära IT-leveranser, felsökning, dokumentation och automatisering i Windows-miljöer. Jag kombinerar praktiskt arbete inom mjukvarupaketering, PowerShell, MECM, Active Directory och Azure DevOps med utvecklarbakgrund inom Java, SQL, API:er, databaser och webbapplikationer. Jag trivs med att förstå helheten runt en applikation, identifiera grundorsaker och bidra till stabila, spårbara och väldokumenterade lösningar.',
    ),
  },
}

const experienceDetails: Partial<
  Record<CvVariant, Record<number, LocalizedContent>>
> = {
  fullstack: {
    1: localized(
      "Internship/Open source - Full-stack developer at Alten (for Save the Children). Developed a platform to improve Hjulverkstan's internal workflows and public digital presence.\n        - Built backend APIs with Java and Spring Boot for image upload/deletion and vehicle-related administration.\n        - Developed a mobile-first React/TypeScript interface for image capture and internal administration.\n        - Worked across SQL/data flow, API contracts, frontend behavior and user needs to turn practical requirements into working features.\n        - Used GitHub and agile Scrum/Kanban routines for collaboration, code review, documentation and iterative delivery.\n\n",
      'Praktik/Open source - Fullstackutvecklare på Alten (för Rädda Barnen). Utvecklade en plattform för att förbättra Hjulverkstans interna arbetssätt och publika digitala närvaro.\n        - Byggde backend-API:er med Java och Spring Boot för bilduppladdning/borttagning och fordonsrelaterad administration.\n        - Utvecklade ett mobilt anpassat React/TypeScript-gränssnitt för bildtagning och intern administration.\n        - Arbetade över SQL/dataflöden, API-kontrakt, frontendbeteende och användarbehov för att omsätta praktiska krav till fungerande funktioner.\n        - Använde GitHub och agila Scrum/Kanban-rutiner för samarbete, kodgranskning, dokumentation och iterativ leverans.\n\n',
    ),
  },
  'frontend-product': {
    1: localized(
      "Internship/Open source - Full-stack developer at Alten (for Save the Children). Developed a platform to improve Hjulverkstan's internal workflows and public digital presence.\n        - Built a mobile-first React/TypeScript interface for image capture and vehicle administration.\n        - Implemented backend APIs for image upload/deletion with Java, Spring Boot and AWS S3, including automated cleanup logic.\n        - Worked across frontend, backend, data flow and user needs to turn a practical operational problem into a usable digital solution.\n        - Used GitHub and agile Scrum/Kanban routines for collaboration, documentation and iterative delivery.\n\n",
      'Praktik/Open source - Fullstackutvecklare på Alten (för Rädda Barnen). Utvecklade en plattform för att förbättra Hjulverkstans interna arbetssätt och publika digitala närvaro.\n        - Byggde ett mobilt anpassat React/TypeScript-gränssnitt för bildtagning och fordonsadministration.\n        - Implementerade backend-API:er för bilduppladdning/borttagning med Java, Spring Boot och AWS S3, inklusive automatiserad rensningslogik.\n        - Arbetade över frontend, backend, dataflöde och användarbehov för att omsätta ett praktiskt verksamhetsproblem till en användbar digital lösning.\n        - Använde GitHub och agila Scrum/Kanban-rutiner för samarbete, dokumentation och iterativ leverans.\n\n',
    ),
  },
  'systems-operations': {
    5: localized(
      'Redirect Consulting - IT consultant for Länsstyrelsen:\n- Completed a fixed-term substitute position focused on system-oriented IT delivery, software packaging and automated distribution.\n- Developed, tested and quality-assured installation scripts using PowerShell and the PSADT framework.\n- Managed deployments and software distribution via MECM and Active Directory in high-security Windows environments.\n- Troubleshot delivery and installation issues, followed up flows in Azure DevOps and contributed to stable, traceable deliveries.\n- Worked in an agile ScrumBan team with focus on documentation, quality, prioritization and secure delivery workflows.',
      'Redirect Consulting - IT-konsult för Länsstyrelsen:\n- Fullföljde ett tidsbegränsat vikariat med fokus på systemnära IT-leveranser, mjukvarupaketering och automatiserad distribution.\n- Utvecklade, testade och kvalitetssäkrade installationsskript med PowerShell och ramverket PSADT.\n- Hanterade utrullningar och programvarudistribution via MECM och Active Directory i säkerhetskritiska Windows-miljöer.\n- Felsökte leverans- och installationsproblem, följde upp flöden i Azure DevOps och bidrog till stabila, spårbara leveranser.\n- Arbetade i ett agilt ScrumBan-team med fokus på dokumentation, kvalitet, prioritering och säkra leveransflöden.',
    ),
  },
}

const projectDetails: Partial<
  Record<CvVariant, Record<number, LocalizedContent>>
> = {
  fullstack: {
    2: localized(
      'Developed a full-stack service using Spring Boot 3 and React. Implemented REST API integrations, JSON request/response flows, JWT authentication with Spring Security, Mailgun-based activation and Bucket4j rate limiting. Built with PostgreSQL, JPA, Railway deployment, automated CI/CD and a responsive frontend.',
      'Utvecklade en fullstacktjänst med Spring Boot 3 och React. Implementerade REST-API-integrationer, JSON-baserade request/response-flöden, JWT-autentisering med Spring Security, Mailgun-baserad aktivering och Bucket4j rate limiting. Byggd med PostgreSQL, JPA, Railway-deploy, automatiserade CI/CD-flöden och responsiv frontend.',
    ),
    3: localized(
      'Built a playable full-stack ARPG prototype with React, TypeScript, Phaser, Spring Boot, PostgreSQL and Flyway. The project includes login, saved progression, inventory/shop systems, automated tests, database migrations and roadmap-driven documentation. It demonstrates structured work with Java application logic, persistence, testing, maintainability and iterative development.',
      'Byggde en spelbar fullstack-ARPG-prototyp med React, TypeScript, Phaser, Spring Boot, PostgreSQL och Flyway. Projektet innehåller inloggning, sparad progression, inventory/shop-system, automatiserade tester, databasmigreringar och roadmap-styrd dokumentation. Det demonstrerar strukturerat arbete med Java-applikationslogik, persistens, testning, underhållbarhet och iterativ utveckling.',
    ),
  },
  'frontend-product': {
    1: localized(
      'Built and maintain the website for my photography business and this dynamic CV page using React, Vite and Tailwind CSS. Features include responsive UI, localized content, dynamic PDF generation and CV data from database/JSON. Hosted on Cloudflare Pages with CI/CD via GitHub Actions, giving practical experience in owning a product-like web presence end to end.',
      'Bygger och förvaltar webbplatsen för min fotografverksamhet och denna dynamiska CV-sida med React, Vite och Tailwind CSS. Funktioner inkluderar responsivt UI, lokaliserat innehåll, dynamisk PDF-generering och CV-data från databas/JSON. Hostas på Cloudflare Pages med CI/CD via GitHub Actions, vilket gett praktisk erfarenhet av att äga en produktliknande webbnärvaro från början till slut.',
    ),
    3: localized(
      'Built a playable full-stack ARPG prototype with React, TypeScript, Phaser, Spring Boot, PostgreSQL and Flyway. The project includes login, saved progression, inventory/shop systems, automated tests, database migrations and roadmap-driven documentation. It demonstrates structured AI-assisted development with Claude Code and Codex, architecture guardrails, iterative prototyping and verification-focused workflows.',
      'Byggde en spelbar fullstack-ARPG-prototyp med React, TypeScript, Phaser, Spring Boot, PostgreSQL och Flyway. Projektet innehåller inloggning, sparad progression, inventory/shop-system, automatiserade tester, databasmigreringar och roadmap-styrd dokumentation. Det demonstrerar strukturerad AI-assisterad utveckling med Claude Code och Codex, arkitekturregler, iterativ prototypning och verifieringsfokuserade arbetsflöden.',
    ),
    5: localized(
      'Designed and implemented a serverless gallery management system for my photography business after replacing a paid external service. I researched Cloudflare Workers, R2 and KV and built a system for gallery/image CRUD, uploads, likes and customer-facing views. The project required connecting real customer needs with UI flows, API contracts, metadata, access control, storage keys, error handling and operational edge cases.',
      'Designade och implementerade ett serverlöst gallerihanteringssystem för min fotografverksamhet efter att tidigare ha betalat för en extern tjänst. Jag läste på om Cloudflare Workers, R2 och KV och byggde ett system för CRUD av gallerier/bilder, uppladdning, likes och kundvyer. Projektet krävde att verkliga kundbehov kopplades ihop med UI-flöden, API-kontrakt, metadata, åtkomstkontroll, lagringsnycklar, felhantering och operativa specialfall.',
    ),
  },
  'systems-operations': {
    5: localized(
      'Designed and implemented a serverless admin system for customer photo galleries. The system uses Cloudflare Workers with REST-style API endpoints, auth, R2 image storage and KV metadata for sessions and gallery lists. It includes gallery/image CRUD, uploads, likes and customer-facing views. The project required stable handling of API contracts, storage keys, metadata, access control, error handling and operational edge cases.',
      'Designade och implementerade ett serverlöst admin-system för kundgallerier. Systemet använder Cloudflare Workers med REST-liknande API-endpoints, autentisering, R2 för bildlagring och KV för metadata som sessioner och gallerilistor. Det innehåller CRUD för gallerier/bilder, uppladdning, likes och kundvyer. Projektet krävde stabil hantering av API-kontrakt, lagringsnycklar, metadata, åtkomstkontroll, felhantering och operativa specialfall.',
    ),
  },
}

export const resolveCvVariant = (search: string): CvVariant => {
  const variant = new URLSearchParams(search).get('variant')
  return variant && validVariants.has(variant)
    ? (variant as CvVariant)
    : 'standard'
}

export const applyCvVariant = (data: CvData, variant: CvVariant): CvData => {
  if (variant === 'standard') {
    return { ...data, variant }
  }

  const contentOverride = contentDescriptions[variant]
  const expOverrides = experienceDetails[variant] || {}
  const projectOverrides = projectDetails[variant] || {}
  const shouldAddAiSkill = variant === 'frontend-product'

  const skills = shouldAddAiSkill
    ? [
        ...data.skills.filter((skill) => skill.id !== variantSkill.id),
        variantSkill,
      ]
    : data.skills.filter((skill) => skill.id !== variantSkill.id)

  return {
    ...data,
    variant,
    profile: contentOverride
      ? {
          ...data.profile,
          description: contentOverride.profile,
        }
      : data.profile,
    intro:
      data.intro && contentOverride
        ? {
            ...data.intro,
            description: contentOverride.intro,
          }
        : data.intro,
    skills,
    experience: data.experience.map((exp: CvExperience) =>
      expOverrides[exp.id] ? { ...exp, details: expOverrides[exp.id] } : exp,
    ),
    projects: data.projects.map((project: CvProject) =>
      projectOverrides[project.id]
        ? { ...project, details: projectOverrides[project.id] }
        : project,
    ),
  }
}
