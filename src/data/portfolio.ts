export type Locale = 'en' | 'es';

type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  name: Localized;
  eyebrow: Localized;
  summary: Localized;
  detail: Localized;
  challenge: Localized;
  outcome: Localized;
  stack: string[];
  category: 'product' | 'infrastructure' | 'ai' | 'engineering';
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  accent: 'cyan' | 'violet' | 'amber' | 'green';
  status: Localized;
};

export const profile = {
  name: 'Eduardo Daniel Urbina Campos',
  shortName: 'Eduardo Urbina',
  role: {
    en: 'AWS Full Stack Developer',
    es: 'AWS Full Stack Developer',
  },
  location: 'Mexico',
  email: 'edurbina2002@hotmail.com',
  github: 'https://github.com/00urbina00',
  linkedin: 'https://www.linkedin.com/in/daniel-00urbina00/',
};

export const experience = [
  {
    company: 'Technology company',
    role: { en: 'Application Developer', es: 'Application Developer' },
    type: { en: 'Full-time · Hybrid', es: 'Tiempo completo · Híbrido' },
    period: { en: 'Oct 2025 — Present', es: 'Oct 2025 — Actualidad' },
    location: 'Mexico',
  },
  {
    company: 'Technology company',
    role: { en: 'Cloud Fullstack Intern', es: 'Cloud Fullstack Intern' },
    type: { en: 'Part-time · Hybrid', es: 'Medio tiempo · Híbrido' },
    period: { en: 'Mar 2025 — Sep 2025', es: 'Mar 2025 — Sep 2025' },
    location: 'Mexico',
  },
];

export const credentials = [
  {
    provider: 'Amazon Web Services',
    name: 'AWS Certified Cloud Practitioner',
    issued: { en: 'Issued Jun 2026', es: 'Expedición Jun 2026' },
    expires: { en: 'Expires Jun 2029', es: 'Vence Jun 2029' },
    url: 'https://www.credly.com/badges/9f2d0cc3-38ff-4f47-81fd-0eb917e23c19/linked_in_profile',
    mark: 'AWS',
  },
  {
    provider: 'Oracle',
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issued: { en: 'Issued Nov 2025', es: 'Expedición Nov 2025' },
    expires: { en: 'Expiration to confirm', es: 'Vencimiento por confirmar' },
    mark: 'OCI',
  },
];

export const projects: Project[] = [
  {
    slug: 'cashflow-finance-manager',
    name: { en: 'Cashflow Finance Manager', es: 'Cashflow Finance Manager' },
    eyebrow: { en: 'Flagship product', es: 'Producto principal' },
    summary: {
      en: 'A production-minded personal finance platform that turns everyday money activity into a clear, secure picture.',
      es: 'Una plataforma de finanzas personales con enfoque de producción que convierte la actividad financiera diaria en una visión clara y segura.',
    },
    detail: {
      en: 'Built end to end: accounts, transactions, transfers, investments, analytics, multilingual UI and Telegram-assisted expense capture. It runs as a containerized full stack application in my homelab.',
      es: 'Construida de principio a fin: cuentas, transacciones, transferencias, inversiones, analítica, interfaz bilingüe y registro de gastos asistido por Telegram. Se ejecuta como aplicación full stack en contenedores dentro de mi homelab.',
    },
    challenge: {
      en: 'Preserve trustworthy financial history while keeping daily data entry fast and intuitive.',
      es: 'Preservar un historial financiero confiable mientras el registro diario se mantiene rápido e intuitivo.',
    },
    outcome: {
      en: 'A live application with secure session authentication, CSRF protection, automated delivery and a guided Telegram onboarding flow.',
      es: 'Una aplicación activa con sesiones seguras, protección CSRF, entrega automatizada y onboarding guiado para Telegram.',
    },
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
    category: 'product',
    featured: true,
    liveUrl: 'https://cashflow.00urbina00.dev',
    accent: 'cyan',
    status: { en: 'Live product', es: 'Producto activo' },
  },
  {
    slug: 'self-hosted-homelab',
    name: { en: 'Self-hosted Homelab', es: 'Homelab autogestionado' },
    eyebrow: { en: 'Infrastructure', es: 'Infraestructura' },
    summary: {
      en: 'A compact Debian server that hosts real applications through a secure, observable container platform.',
      es: 'Un servidor Debian compacto que aloja aplicaciones reales mediante una plataforma de contenedores segura y observable.',
    },
    detail: {
      en: 'A practical environment for Docker workloads, reverse proxying, secure public routing, staging and production services, and lightweight monitoring.',
      es: 'Un entorno práctico para cargas Docker, proxy inverso, acceso público seguro, servicios de staging y producción, y monitoreo ligero.',
    },
    challenge: {
      en: 'Operate useful infrastructure within the CPU and reliability constraints of repurposed hardware.',
      es: 'Operar infraestructura útil respetando los límites de CPU y confiabilidad de hardware reutilizado.',
    },
    outcome: {
      en: 'One shared Cloudflare Tunnel, Caddy as the entry point, containerized services and a minimal monitoring foundation.',
      es: 'Un túnel compartido de Cloudflare, Caddy como punto de entrada, servicios en contenedores y una base de monitoreo mínima.',
    },
    stack: ['Debian', 'Docker Compose', 'Caddy', 'Cloudflare', 'Portainer'],
    category: 'infrastructure',
    accent: 'green',
    status: { en: 'Running', es: 'En operación' },
  },
  {
    slug: 'sargassum-estimator',
    name: { en: 'Sargassum Level Estimator', es: 'Estimador de nivel de sargazo' },
    eyebrow: { en: 'Applied AI', es: 'IA aplicada' },
    summary: {
      en: 'A computer-vision project for estimating sargassum presence on Mexican beaches from imagery.',
      es: 'Un proyecto de visión por computadora para estimar la presencia de sargazo en playas mexicanas a partir de imágenes.',
    },
    detail: {
      en: 'Explored image preparation, model improvement and evaluation for a real environmental detection problem.',
      es: 'Exploró preparación de imágenes, mejora de modelos y evaluación para un problema ambiental real de detección.',
    },
    challenge: {
      en: 'Improve detection performance despite visual variability in coastal scenes.',
      es: 'Mejorar el desempeño de detección ante la variabilidad visual de escenas costeras.',
    },
    outcome: {
      en: 'A stronger deep-learning pipeline and practical experience evaluating model behavior against real imagery.',
      es: 'Un pipeline de deep learning más sólido y experiencia práctica evaluando modelos con imágenes reales.',
    },
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    category: 'ai',
    accent: 'amber',
    status: { en: 'Research project', es: 'Proyecto de investigación' },
  },
  {
    slug: 'interactive-vision-game',
    name: { en: 'Interactive Vision Game', es: 'Juego interactivo con visión' },
    eyebrow: { en: 'Computer vision', es: 'Visión por computadora' },
    summary: {
      en: 'A real-time public-event experience driven by object tracking and image transformations.',
      es: 'Una experiencia en tiempo real para un evento público basada en seguimiento de objetos y transformaciones de imagen.',
    },
    detail: {
      en: 'Combined live camera input, object tracking and game mechanics into a responsive interactive installation.',
      es: 'Combinó video en vivo, seguimiento de objetos y mecánicas de juego en una instalación interactiva responsiva.',
    },
    challenge: {
      en: 'Keep tracking and interaction responsive in a dynamic real-world setting.',
      es: 'Mantener el seguimiento y la interacción fluidos en un entorno real y dinámico.',
    },
    outcome: {
      en: 'A working event experience that connected computer vision with immediate, playful feedback.',
      es: 'Una experiencia funcional que conectó visión por computadora con retroalimentación inmediata y lúdica.',
    },
    stack: ['Python', 'OpenCV', 'Pygame'],
    category: 'ai',
    accent: 'violet',
    status: { en: 'Event experience', es: 'Experiencia para evento' },
  },
  {
    slug: 'facial-recognition-access',
    name: { en: 'Facial Recognition Access', es: 'Acceso por reconocimiento facial' },
    eyebrow: { en: 'Computer vision', es: 'Visión por computadora' },
    summary: {
      en: 'A feature-based recognition system designed to enroll new users without retraining the full model.',
      es: 'Un sistema de reconocimiento basado en características que permite registrar usuarios sin reentrenar todo el modelo.',
    },
    detail: {
      en: 'Focused on the complete recognition flow, from landmark and feature extraction to identity matching and enrollment.',
      es: 'Se enfocó en el flujo completo de reconocimiento, desde extracción de puntos y características hasta identificación y registro.',
    },
    challenge: {
      en: 'Make enrollment practical while keeping the recognition pipeline modular.',
      es: 'Hacer práctico el registro manteniendo modular el pipeline de reconocimiento.',
    },
    outcome: {
      en: 'A flexible prototype where the identity set can grow without a full training cycle.',
      es: 'Un prototipo flexible donde el conjunto de identidades puede crecer sin un ciclo completo de entrenamiento.',
    },
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    category: 'ai',
    accent: 'cyan',
    status: { en: 'Prototype', es: 'Prototipo' },
  },
  {
    slug: 'compiler-analyzer',
    name: { en: 'Language & Compiler Analyzer', es: 'Analizador de lenguajes y compiladores' },
    eyebrow: { en: 'Computer science', es: 'Ciencias de la computación' },
    summary: {
      en: 'An IDE-like visual tool that explores lexical, syntactic and semantic analysis.',
      es: 'Una herramienta visual tipo IDE que explora análisis léxico, sintáctico y semántico.',
    },
    detail: {
      en: 'Uses deterministic finite automata, grammar validation and expression evaluation to make language analysis visible.',
      es: 'Utiliza autómatas finitos deterministas, validación gramatical y evaluación de expresiones para visualizar el análisis de lenguajes.',
    },
    challenge: {
      en: 'Translate compiler theory into a tool whose intermediate states are understandable.',
      es: 'Traducir la teoría de compiladores a una herramienta cuyos estados intermedios sean comprensibles.',
    },
    outcome: {
      en: 'A visual learning and validation environment built around classic compiler stages.',
      es: 'Un entorno visual de aprendizaje y validación construido alrededor de etapas clásicas de compilación.',
    },
    stack: ['C++', 'Qt', 'Automata', 'Compiler Design'],
    category: 'engineering',
    repoUrl: 'https://github.com/00urbina00/Analizador_Lexico_ST2_V1.0',
    accent: 'violet',
    status: { en: 'Academic project', es: 'Proyecto académico' },
  },
  {
    slug: 'process-scheduling-simulators',
    name: { en: 'Process Scheduling Simulators', es: 'Simuladores de planificación' },
    eyebrow: { en: 'Operating systems', es: 'Sistemas operativos' },
    summary: {
      en: 'A sequence of visual simulators for batch processing, FCFS, Round Robin and process state transitions.',
      es: 'Una serie de simuladores visuales de lotes, FCFS, Round Robin y transiciones de estado de procesos.',
    },
    detail: {
      en: 'Models scheduling, blocked and ready states, memory behavior and execution over time in an approachable interface.',
      es: 'Modela planificación, estados bloqueado y listo, comportamiento de memoria y ejecución en el tiempo mediante una interfaz clara.',
    },
    challenge: {
      en: 'Represent concurrent operating-system concepts clearly without hiding their state changes.',
      es: 'Representar conceptos concurrentes de sistemas operativos sin ocultar sus cambios de estado.',
    },
    outcome: {
      en: 'A progressive set of simulators that makes scheduling algorithms observable and testable.',
      es: 'Un conjunto progresivo de simuladores que vuelve observables y comprobables los algoritmos de planificación.',
    },
    stack: ['Python', 'Qt', 'FCFS', 'Round Robin'],
    category: 'engineering',
    repoUrl: 'https://github.com/00urbina00/Algoritmo_de_planificacion_FCFS',
    accent: 'green',
    status: { en: 'Open source', es: 'Código abierto' },
  },
  {
    slug: 'ecommerce-platform',
    name: { en: 'E-commerce Platform', es: 'Plataforma de comercio electrónico' },
    eyebrow: { en: 'Web development', es: 'Desarrollo web' },
    summary: {
      en: 'A role-aware commerce system with products, orders, users and shopping-cart workflows.',
      es: 'Un sistema de comercio con roles, productos, pedidos, usuarios y flujos de carrito de compras.',
    },
    detail: {
      en: 'Covers the essential store and administration journeys for guests, registered users and administrators.',
      es: 'Cubre los recorridos esenciales de tienda y administración para visitantes, usuarios registrados y administradores.',
    },
    challenge: {
      en: 'Coordinate catalog, order and permission logic across the complete application.',
      es: 'Coordinar catálogo, pedidos y permisos a través de toda la aplicación.',
    },
    outcome: {
      en: 'A complete server-rendered web application backed by a relational database.',
      es: 'Una aplicación web completa renderizada en servidor y respaldada por una base de datos relacional.',
    },
    stack: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    category: 'product',
    repoUrl: 'https://github.com/00urbina00/sistema_de_administracion_web',
    accent: 'amber',
    status: { en: 'Open source', es: 'Código abierto' },
  },
];

export const copy = {
  en: {
    lang: 'en',
    locale: 'en_US',
    languageName: 'English',
    switchLanguage: 'ES',
    nav: { about: 'About', work: 'Work', capabilities: 'Capabilities', contact: 'Contact' },
    heroEyebrow: 'Engineer across code, cloud & operations',
    heroTitleA: 'I build software',
    heroTitleB: 'that survives reality.',
    heroCopy: 'AWS Full Stack Developer, Computer Engineer and hands-on systems builder. I turn product ideas into secure applications, automated delivery pipelines and infrastructure I can operate end to end.',
    explore: 'Explore my work',
    downloadCv: 'Download CV',
    locationLabel: 'Based in',
    currentlyLabel: 'Currently',
    currentValue: 'Building resilient cloud-ready products',
    aboutKicker: 'A wider engineering lens',
    aboutTitle: 'From the interface to the server it runs on.',
    aboutP1: 'I am a Computer Engineer based in Mexico. My work sits at the intersection of application engineering, cloud and operational reliability.',
    aboutP2: 'I care about the whole system: how a feature feels, how its data remains trustworthy, how it is delivered, and what happens when it reaches production. That curiosity has taken me through web platforms, applied AI, computer vision, CI/CD and a self-hosted lab.',
    principle: 'My operating principle',
    principleValue: 'Useful software is designed, secured, shipped and observed as one system.',
    journeyKicker: 'Professional journey',
    journeyTitle: 'Growing from cloud engineering foundations into application development.',
    educationLabel: 'Education',
    educationDegree: 'B.Eng. in Computer Engineering',
    educationPeriod: 'University of Guadalajara · Aug 2020 — Dec 2024',
    credentialsKicker: 'Cloud credentials',
    credentialsTitle: 'Certified foundations, applied through real systems.',
    verifyCredential: 'Verify credential',
    workKicker: 'Selected work',
    workTitle: 'Products, infrastructure and experiments.',
    workCopy: 'Each project is a different view of the same approach: understand the problem, build the complete path and learn from the system in use.',
    all: 'All', product: 'Products', infrastructure: 'Infrastructure', ai: 'AI & vision', engineering: 'Engineering',
    quickView: 'Quick view', caseStudy: 'View details', visitLive: 'Open live app', source: 'View source',
    challenge: 'Challenge', outcome: 'Outcome', close: 'Close details',
    capabilitiesKicker: 'Capabilities',
    capabilitiesTitle: 'One engineer, multiple layers.',
    capabilityItems: [
      ['01', 'Product engineering', 'React, TypeScript, accessible interfaces and product flows grounded in real user needs.'],
      ['02', 'Backend systems', 'Node.js, Express, relational data, API design and security-conscious authentication.'],
      ['03', 'AWS & delivery', 'Cloud-native thinking, containers, CI/CD and repeatable release workflows.'],
      ['04', 'Infrastructure', 'Linux, Docker, reverse proxies, secure tunnels and lightweight observability.'],
      ['05', 'Applied intelligence', 'Machine learning, computer vision and pragmatic AI-assisted engineering.'],
    ],
    infraKicker: 'Built, shipped, operated',
    infraTitle: 'This portfolio is part of the work.',
    infraCopy: 'Astro produces a fast static build. GitHub Actions packages it into a container, GHCR stores it, and my Debian homelab serves it through Caddy and Cloudflare Tunnel.',
    pipeline: ['Astro build', 'GitHub Actions', 'Container registry', 'Debian homelab', 'Cloudflare edge'],
    contactKicker: 'Keep the door open',
    contactTitle: 'Not actively looking. Always interested in a thoughtful conversation.',
    contactCopy: 'My focus is on doing excellent work where I am. Still, an interesting technical challenge or a genuine exchange of ideas is always worth a message.',
    emailMe: 'Send an email',
    footer: 'Designed and engineered by Eduardo Urbina.',
    projectBack: 'Back to all projects',
    projectContext: 'Project context',
    projectStack: 'Technology',
    projectNext: 'This case study is ready to grow with architecture decisions, screenshots and a deeper technical retrospective.',
  },
  es: {
    lang: 'es',
    locale: 'es_MX',
    languageName: 'Español',
    switchLanguage: 'EN',
    nav: { about: 'Sobre mí', work: 'Proyectos', capabilities: 'Capacidades', contact: 'Contacto' },
    heroEyebrow: 'Ingeniería entre código, nube y operaciones',
    heroTitleA: 'Construyo software',
    heroTitleB: 'que resiste la realidad.',
    heroCopy: 'AWS Full Stack Developer, Ingeniero en Computación y constructor práctico de sistemas. Convierto ideas de producto en aplicaciones seguras, pipelines automatizados e infraestructura que puedo operar de principio a fin.',
    explore: 'Explorar mi trabajo',
    downloadCv: 'Descargar CV',
    locationLabel: 'Ubicado en',
    currentlyLabel: 'Actualmente',
    currentValue: 'Construyendo productos resilientes para la nube',
    aboutKicker: 'Una visión más amplia',
    aboutTitle: 'Desde la interfaz hasta el servidor que la ejecuta.',
    aboutP1: 'Soy Ingeniero en Computación y desarrollador full stack. Mi trabajo vive en la intersección de aplicaciones, nube y confiabilidad operativa.',
    aboutP2: 'Me importa el sistema completo: cómo se siente una función, cómo sus datos permanecen confiables, cómo se entrega y qué ocurre cuando llega a producción. Esa curiosidad me ha llevado por plataformas web, IA aplicada, visión por computadora, CI/CD y un laboratorio autogestionado.',
    principle: 'Mi principio de trabajo',
    principleValue: 'El software útil se diseña, protege, entrega y observa como un solo sistema.',
    journeyKicker: 'Trayectoria profesional',
    journeyTitle: 'Crecimiento desde fundamentos cloud hacia el desarrollo de aplicaciones.',
    educationLabel: 'Educación',
    educationDegree: 'Ingeniería en Computación',
    educationPeriod: 'Universidad de Guadalajara · Ago 2020 — Dic 2024',
    credentialsKicker: 'Credenciales cloud',
    credentialsTitle: 'Fundamentos certificados, aplicados en sistemas reales.',
    verifyCredential: 'Ver credencial',
    workKicker: 'Trabajo seleccionado',
    workTitle: 'Productos, infraestructura y experimentos.',
    workCopy: 'Cada proyecto muestra un ángulo de la misma forma de trabajar: entender el problema, construir el camino completo y aprender del sistema en uso.',
    all: 'Todos', product: 'Productos', infrastructure: 'Infraestructura', ai: 'IA y visión', engineering: 'Ingeniería',
    quickView: 'Vista rápida', caseStudy: 'Ver detalles', visitLive: 'Abrir aplicación', source: 'Ver código',
    challenge: 'Reto', outcome: 'Resultado', close: 'Cerrar detalles',
    capabilitiesKicker: 'Capacidades',
    capabilitiesTitle: 'Un ingeniero, múltiples capas.',
    capabilityItems: [
      ['01', 'Ingeniería de producto', 'React, TypeScript, interfaces accesibles y flujos basados en necesidades reales.'],
      ['02', 'Sistemas backend', 'Node.js, Express, datos relacionales, APIs y autenticación con enfoque de seguridad.'],
      ['03', 'AWS y entrega', 'Pensamiento cloud-native, contenedores, CI/CD y procesos de publicación repetibles.'],
      ['04', 'Infraestructura', 'Linux, Docker, proxies inversos, túneles seguros y observabilidad ligera.'],
      ['05', 'Inteligencia aplicada', 'Machine learning, visión por computadora e ingeniería asistida por IA con enfoque práctico.'],
    ],
    infraKicker: 'Construido, entregado, operado',
    infraTitle: 'Este portfolio también es parte del trabajo.',
    infraCopy: 'Astro genera un sitio estático rápido. GitHub Actions lo empaqueta en un contenedor, GHCR lo almacena y mi homelab Debian lo sirve mediante Caddy y Cloudflare Tunnel.',
    pipeline: ['Build de Astro', 'GitHub Actions', 'Registro de contenedores', 'Homelab Debian', 'Edge de Cloudflare'],
    contactKicker: 'Mantener la puerta abierta',
    contactTitle: 'No busco activamente. Siempre vale la pena una buena conversación.',
    contactCopy: 'Mi prioridad es hacer un trabajo excelente donde estoy. Aun así, un reto técnico interesante o un intercambio genuino de ideas siempre merece un mensaje.',
    emailMe: 'Enviar un correo',
    footer: 'Diseñado y construido por Eduardo Urbina.',
    projectBack: 'Volver a proyectos',
    projectContext: 'Contexto del proyecto',
    projectStack: 'Tecnología',
    projectNext: 'Este caso de estudio está preparado para crecer con decisiones de arquitectura, capturas y una retrospectiva técnica más profunda.',
  },
} as const;

export function localizedProject(project: Project, locale: Locale) {
  return {
    ...project,
    name: project.name[locale],
    eyebrow: project.eyebrow[locale],
    summary: project.summary[locale],
    detail: project.detail[locale],
    challenge: project.challenge[locale],
    outcome: project.outcome[locale],
    status: project.status[locale],
  };
}
