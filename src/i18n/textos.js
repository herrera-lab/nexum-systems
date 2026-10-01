// Todos los textos del sitio en español (es) e inglés (en).
// Las listas (soluciones, pasos, etc.) van en el mismo orden que las imágenes de cada página.

const LEMA_ES = '"Datos confiables. Sistemas seguros. Mejores decisiones."'
const LEMA_EN = '"Reliable data. Secure systems. Better decisions."'

const textos = {
  es: {
    navbar: {
      enlaces: ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Equipo', 'Contacto'],
      abrirMenu: 'Abrir menú',
      cerrarMenu: 'Cerrar menú',
      logoAlt: 'Logo de Nexum Systems',
      cambiarIdioma: 'Switch to English',
      otroIdioma: 'EN',
    },
    footer: {
      lema: LEMA_ES,
      ubicacion: 'San Ramón, Alajuela, Costa Rica',
      enlaces: ['Servicios', 'Proyectos', 'Contacto'],
    },
    inicio: {
      lema: LEMA_ES,
      transformacion: {
        titulo: 'Transformación digital mediante sistemas de información confiables',
        texto:
          'Nexum Systems es una consultora de transformación digital enfocada en el diseño e implementación de sistemas de información seguros, trazables y orientados a la toma de decisiones. Integramos calidad de datos, tecnología, automatización operativa y analítica para optimizar procesos empresariales y apoyar la transformación digital.',
        imagenAlt: 'Transformación digital',
      },
      solucionesTitulo: 'Soluciones de información orientadas a la toma de decisiones',
      solucionesIntro:
        'Integramos tecnología, gestión de datos y analítica para simplificar procesos operativos, transformando registros diarios en sistemas de información seguros, trazables y listos para la toma de decisiones.',
      soluciones: [
        {
          titulo: 'Arquitectura y Sistemas de Información',
          texto: 'Diseñamos estructuras relacionales y soluciones que permiten organizar, gestionar y consultar información de manera eficiente.',
        },
        {
          titulo: 'Gestión y automatización',
          texto: 'Desarrollamos prototipos operativos que reducen tareas manuales, garantizando trazabilidad, seguridad por roles y un flujo eficiente.',
        },
        {
          titulo: 'Inteligencia de Negocios y Analítica',
          texto: 'Transformamos registros operativos en información estratégica, para facilitar la toma de decisiones gerenciales.',
        },
      ],
      pasosTitulo: 'De la necesidad a la solución',
      pasosIntro:
        'En Nexum Systems abordamos cada proyecto con un enfoque estructurado y conectado, guiando a la organización desde el diagnóstico de sus procesos operativos hasta la entrega de sistemas de información seguros, trazables y orientados a la toma de decisiones.',
      pasos: [
        { titulo: 'Comprendemos', texto: 'Analizamos los flujos operativos de la empresa para identificar vulnerabilidades y oportunidades de control.' },
        { titulo: 'Diseñamos', texto: 'Diseñamos estructuras de datos sólidas y reglas de validación que aseguran la consistencia de la información desde su captura.' },
        { titulo: 'Integramos', texto: 'Desarrollamos sistemas operativos con permisos por roles y registro trazable de cada movimiento.' },
        { titulo: 'Transformamos', texto: 'Conectamos los datos con herramientas de analítica para brindar visibilidad y apoyar la gestión gerencial.' },
      ],
      ctaTitulo: '¿Listo para transformar tus datos en decisiones estratégicas?',
      ctaTexto:
        'Descubre cómo en Nexum Systems diseñamos e implementamos sistemas de información confiables, seguros y trazables que optimizan la gestión de tu organización.',
      ctaBoton: 'Conoce nuestros servicios',
    },
    nosotros: {
      titulo: 'Sobre Nexum Systems',
      lema: LEMA_ES,
      procesosTitulo: 'Procesos, datos y mejores decisiones',
      procesosTextos: [
        'Nexum Systems es una consultora de ingeniería de la información que integra gestión de procesos, calidad de datos y seguridad para desarrollar soluciones adaptadas a las necesidades de las organizaciones.',
        'Nuestro enfoque combina el análisis operativo con herramientas sencillas que permiten organizar la información, garantizar la trazabilidad de los registros y facilitar la toma de decisiones estratégicas.',
      ],
      procesosImagenAlt: 'Procesos y datos',
      misionVisionTitulo: 'Misión y Visión',
      mision: {
        titulo: 'Misión',
        texto:
          'Diseñar e implementar sistemas de información confiables, seguros y orientados a la toma de decisiones, integrando calidad de datos, trazabilidad y analítica para optimizar procesos operativos y generar valor en las organizaciones.',
      },
      vision: {
        titulo: 'Visión',
        texto:
          'Ser una consultora referente en la estructuración de procesos y datos operativos, ayudando a las organizaciones a contar con sistemas seguros y confiables que faciliten la gestión diaria y la toma de decisiones estratégicas.',
      },
      propuestaTitulo: 'Nuestra propuesta de valor',
      propuestaIntro:
        'Transformamos registros operativos en sistemas de información seguros que garantizan datos confiables, trazabilidad en cada movimiento y visibilidad para tomar mejores decisiones.',
      pilares: [
        {
          titulo: 'Calidad de datos',
          texto: 'Aplicamos reglas de validación y controles de consistencia, validez y exactitud para asegurar que la información ingresada sea siempre confiable',
        },
        {
          titulo: 'Seguridad desde el diseño',
          texto: 'Definimos roles y permisos de acceso para proteger la información sensible, limitar accesos no autorizados y prevenir errores en el sistema.',
        },
        {
          titulo: 'Trazabilidad',
          texto: 'Registramos quién realiza cada acción, cuándo ocurre y qué datos cambian, permitiendo auditar la operación y detectar anomalías a tiempo.',
        },
        {
          titulo: 'Analítica orientada a decisiones',
          texto: 'Conectamos los datos operativos con indicadores y tableros interactivos para facilitar el seguimiento de la gestión y apoyar la toma de decisiones.',
        },
      ],
      enfoqueTitulo: 'Nuestro enfoque en la gestión de la información',
      enfoqueTextos: [
        'En Nexum Systems entendemos la mejora de procesos como la integración efectiva entre operaciones, datos y análisis. No buscamos simplemente reemplazar tareas manuales por herramientas digitales, sino estructurar la forma en que la información se captura, protege, valida y analiza para la toma de decisiones.',
        'Nuestro objetivo es que las organizaciones pasen de almacenar datos desordenados a utilizarlos de forma confiable para detectar ineficiencias, prevenir errores y optimizar sus operaciones.',
      ],
    },
    servicios: {
      titulo: 'Soluciones diseñadas para transformar',
      intro:
        'Diseñamos e implementamos soluciones prácticas para estructurar datos, asegurar registros operativos y facilitar el análisis de información en las organizaciones.',
      serviciosTitulo: 'Nuestros servicios',
      servicios: [
        {
          titulo: 'Sistemas de información empresariales',
          texto: 'Diseñamos sistemas que centralizan y estructuran la información operativa, facilitando su consulta, actualización y control sin depender de registros dispersos.',
        },
        {
          titulo: 'Gestión y automatización de procesos',
          texto: 'Estructuramos y automatizamos flujos operativos para reducir tareas manuales, eliminar errores de captura y asegurar la trazabilidad de cada movimiento.',
        },
        {
          titulo: 'Gestión y calidad de datos',
          texto: 'Definimos reglas de validación y permisos de acceso por roles para garantizar que la información sea exacta, consistente y segura desde el origen.',
        },
        {
          titulo: 'Analítica e inteligencia de negocios',
          texto: 'Convertimos registros operativos en tableros e indicadores clave que facilitan el seguimiento del negocio y apoyan la toma de decisiones estratégicas.',
        },
      ],
      propuestasTitulo: 'Propuestas adaptadas a cada proceso',
      propuestasIntro:
        'Cada organización enfrenta dinámicas operativas distintas. En Nexum Systems partimos del diagnóstico de los procesos para diseñar soluciones que integran gestión, datos y análisis de forma práctica.',
      etapas: [
        {
          titulo: 'Analizamos',
          texto: 'Diagnosticamos el proceso operativo, identificamos ineficiencias o cuellos de botella y definimos los requerimientos reales del sistema.',
        },
        {
          titulo: 'Desarrollamos',
          texto: 'Diseñamos e implementamos la solución estructurando la captura de datos, las reglas de validación y los controles de seguridad necesarios',
        },
        {
          titulo: 'Generamos valor',
          texto: 'Transformamos registros dispersos en información confiable y trazable que facilita el control de la operación y el análisis gerencial.',
        },
      ],
      ctaTitulo: '¿Tienes un proceso que necesita transformarse?',
      ctaTexto: 'Conversemos sobre cómo Nexum Systems puede convertir tus necesidades en una solución digital.',
      ctaBoton: 'Contáctanos',
    },
    proyectos: {
      titulo: 'Proyectos que transforman datos en decisiones',
      intro:
        'Conoce los proyectos en los que se estructuran procesos operativos que garantizan la integridad de los datos y facilitan el análisis para la toma de decisiones para responder a necesidades reales de las organizaciones.',
      lista: [
        {
          numero: 'PROYECTO 01',
          titulo: 'Sistema de gestión de inventarios- TicaMarket',
          texto: 'Distribuidora TicaMarket requiere una solución para mejorar el control y la trazabilidad de su inventario, integrando información sobre productos, movimientos, usuarios y operaciones en un sistema centralizado.',
          etiquetas: ['Sistema de información', 'Gestión de inventarios', 'Base de datos', 'Analítica'],
          estado: 'En desarrollo',
        },
      ],
      estado: 'Estado:',
      boton: 'Ver proyecto',
    },
    ticamarket: {
      subtitulo: 'Sistema integral de gestión de inventarios',
      desafioTitulo: 'El desafío',
      desafioTexto:
        'TicaMarket gestiona parte de sus operaciones de inventario mediante procesos manuales y herramientas dispersas. Esta situación dificulta mantener la información actualizada, garantizar la trazabilidad de los movimientos y disponer de datos oportunos para la toma de decisiones.',
      desafioImagenAlt: 'El desafío de TicaMarket',
      solucionTitulo: 'Nuestra solución',
      solucionTextos: [
        'Nexum Systems propone el desarrollo de un sistema de información para centralizar la gestión del inventario de TicaMarket, integrando productos, movimientos de entrada y salida, usuarios y operaciones dentro de una estructura de datos confiable y trazable.',
        'La solución incorporará controles de acceso, validaciones, reportes y herramientas de análisis que permitan transformar los datos operativos en información útil para la gestión.',
      ],
      solucionImagenAlt: 'La solución propuesta',
      desarrolloTitulo: 'Desarrollo del proyecto',
      desarrolloIntro:
        'El proyecto se desarrolla de manera progresiva, desde la definición de la solución y su arquitectura hasta la implementación del sistema y el análisis de la información.',
      fases: [
        {
          titulo: '01 — Definición y diseño',
          texto: 'Definición de la identidad de la consultora, análisis del problema, arquitectura de datos y diseño inicial de la solución.',
        },
        {
          titulo: '02 — Prototipo funcional',
          texto: 'Desarrollo del prototipo para gestionar productos, usuarios, roles, movimientos de inventario y otras funcionalidades principales.',
        },
        {
          titulo: '03 — Implementación',
          texto: 'Construcción del sistema funcional, incorporación de controles, generación de reportes, documentación y ejecución de pruebas.',
        },
        {
          titulo: '04 — Inteligencia de negocios',
          texto: 'Integración de los datos con Power BI para generar indicadores, visualizaciones e información útil para la toma de decisiones.',
        },
      ],
      entregablesTitulo: 'Entregables del proyecto',
      entregablesIntro: 'Consulta los documentos y recursos desarrollados durante cada etapa del proyecto.',
      entregables: [
        { titulo: 'Fase 1- Definición y diseño', texto: 'Documento de propuesta y diseño inicial.' },
        { titulo: 'Fase 2- Prototipo funcional', texto: 'Prototipo y explicación de sus funciones. (En desarrollo)' },
        { titulo: 'Fase 3 - Implementación', texto: 'Sistema, documentación y pruebas. (En desarrollo)' },
        { titulo: 'Fase 4 - Inteligencia de negocios', texto: 'Tablero e indicadores del inventario. (En desarrollo)' },
      ],
    },
    equipo: {
      titulo: 'Personas que conectan datos, ideas y soluciones',
      intro:
        'Somos un equipo multidisciplinario que integra diferentes conocimientos y perspectivas para diseñar soluciones tecnológicas confiables y adaptadas a las necesidades reales de cada organización.',
      equipoTitulo: 'Nuestro equipo',
      areas: {
        web: 'Diseño y desarrollo web',
        identidad: 'Identidad y estrategia corporativa',
        implementacion: 'Propuesta y estrategia de implementación',
      },
    },
    contacto: {
      titulo: 'Transformemos tus datos en soluciones',
      intro:
        '¿Tienes un proceso por mejorar o una idea por desarrollar? Conversemos sobre cómo los datos, la tecnología y la analítica pueden convertirse en una solución para tu organización.',
      hablemos: 'Hablemos de tu próximo proyecto',
      descripcion: 'Transformamos procesos a través de tecnología, datos e información para apoyar mejores decisiones.',
      correo: 'Correo electrónico:',
      ubicacionTitulo: 'Ubicación:',
      ubicacion: 'San Ramón, Alajuela, Costa Rica',
      ayudarte: '¿En qué podemos ayudarte?',
      formularioTitulo: 'Formulario de contacto de Nexum Systems',
      cargando: 'Cargando…',
      formularioAviso: null,
    },
    accesibilidad: {
      abrir: 'Opciones de accesibilidad',
      titulo: 'Accesibilidad',
      cerrar: 'Cerrar opciones de accesibilidad',
      tamano: 'Tamaño del texto',
      disminuir: 'Disminuir tamaño del texto',
      aumentar: 'Aumentar tamaño del texto',
      nivel: (n, total) => `Nivel ${n} de ${total}`,
      opciones: {
        contraste: 'Alto contraste',
        grises: 'Escala de grises',
        subrayar: 'Subrayar enlaces',
        legible: 'Fuente legible (dislexia)',
        pausar: 'Pausar animaciones',
      },
      restablecer: 'Restablecer',
    },
  },

  en: {
    navbar: {
      enlaces: ['Home', 'About us', 'Services', 'Projects', 'Team', 'Contact'],
      abrirMenu: 'Open menu',
      cerrarMenu: 'Close menu',
      logoAlt: 'Nexum Systems logo',
      cambiarIdioma: 'Cambiar a español',
      otroIdioma: 'ES',
    },
    footer: {
      lema: LEMA_EN,
      ubicacion: 'San Ramón, Alajuela, Costa Rica',
      enlaces: ['Services', 'Projects', 'Contact'],
    },
    inicio: {
      lema: LEMA_EN,
      transformacion: {
        titulo: 'Digital transformation through reliable information systems',
        texto:
          'Nexum Systems is a digital transformation consultancy focused on designing and implementing information systems that are secure, traceable and decision-oriented. We combine data quality, technology, operational automation and analytics to optimize business processes and support digital transformation.',
        imagenAlt: 'Digital transformation',
      },
      solucionesTitulo: 'Decision-oriented information solutions',
      solucionesIntro:
        'We bring together technology, data management and analytics to simplify operational processes, turning daily records into information systems that are secure, traceable and ready for decision-making.',
      soluciones: [
        {
          titulo: 'Information Architecture and Systems',
          texto: 'We design relational structures and solutions that make it possible to organize, manage and query information efficiently.',
        },
        {
          titulo: 'Management and automation',
          texto: 'We build operational prototypes that reduce manual work, ensuring traceability, role-based security and an efficient workflow.',
        },
        {
          titulo: 'Business Intelligence and Analytics',
          texto: 'We turn operational records into strategic information that makes management decision-making easier.',
        },
      ],
      pasosTitulo: 'From need to solution',
      pasosIntro:
        'At Nexum Systems we approach every project with a structured, connected method, guiding the organization from the diagnosis of its operational processes to the delivery of information systems that are secure, traceable and decision-oriented.',
      pasos: [
        { titulo: 'We understand', texto: 'We analyze the company’s operational flows to identify vulnerabilities and opportunities for control.' },
        { titulo: 'We design', texto: 'We design solid data structures and validation rules that keep information consistent from the moment it is captured.' },
        { titulo: 'We integrate', texto: 'We develop operational systems with role-based permissions and a traceable record of every transaction.' },
        { titulo: 'We transform', texto: 'We connect data to analytics tools to provide visibility and support management.' },
      ],
      ctaTitulo: 'Ready to turn your data into strategic decisions?',
      ctaTexto:
        'Discover how Nexum Systems designs and implements reliable, secure and traceable information systems that optimize the management of your organization.',
      ctaBoton: 'Explore our services',
    },
    nosotros: {
      titulo: 'About Nexum Systems',
      lema: LEMA_EN,
      procesosTitulo: 'Processes, data and better decisions',
      procesosTextos: [
        'Nexum Systems is an information engineering consultancy that combines process management, data quality and security to develop solutions tailored to the needs of each organization.',
        'Our approach pairs operational analysis with simple tools that help organize information, guarantee the traceability of records and support strategic decision-making.',
      ],
      procesosImagenAlt: 'Processes and data',
      misionVisionTitulo: 'Mission and Vision',
      mision: {
        titulo: 'Mission',
        texto:
          'To design and implement reliable, secure, decision-oriented information systems, integrating data quality, traceability and analytics to optimize operational processes and create value for organizations.',
      },
      vision: {
        titulo: 'Vision',
        texto:
          'To be a leading consultancy in structuring operational processes and data, helping organizations rely on secure, trustworthy systems that make day-to-day management and strategic decision-making easier.',
      },
      propuestaTitulo: 'Our value proposition',
      propuestaIntro:
        'We turn operational records into secure information systems that guarantee reliable data, traceability in every transaction and the visibility needed to make better decisions.',
      pilares: [
        {
          titulo: 'Data quality',
          texto: 'We apply validation rules and consistency, validity and accuracy checks to make sure the information entered is always reliable.',
        },
        {
          titulo: 'Security by design',
          texto: 'We define roles and access permissions to protect sensitive information, limit unauthorized access and prevent errors in the system.',
        },
        {
          titulo: 'Traceability',
          texto: 'We record who performs each action, when it happens and which data changes, making it possible to audit operations and detect anomalies in time.',
        },
        {
          titulo: 'Decision-oriented analytics',
          texto: 'We connect operational data to indicators and interactive dashboards to make performance tracking easier and support decision-making.',
        },
      ],
      enfoqueTitulo: 'Our approach to information management',
      enfoqueTextos: [
        'At Nexum Systems we see process improvement as the effective integration of operations, data and analysis. We don’t simply replace manual tasks with digital tools; we structure how information is captured, protected, validated and analyzed for decision-making.',
        'Our goal is to help organizations move from storing disorganized data to using it reliably to detect inefficiencies, prevent errors and optimize their operations.',
      ],
    },
    servicios: {
      titulo: 'Solutions designed to transform',
      intro:
        'We design and implement practical solutions to structure data, secure operational records and make information analysis easier for organizations.',
      serviciosTitulo: 'Our services',
      servicios: [
        {
          titulo: 'Business information systems',
          texto: 'We design systems that centralize and structure operational information, making it easy to look up, update and control without relying on scattered records.',
        },
        {
          titulo: 'Process management and automation',
          texto: 'We structure and automate operational workflows to reduce manual work, eliminate data-entry errors and ensure the traceability of every transaction.',
        },
        {
          titulo: 'Data management and quality',
          texto: 'We define validation rules and role-based access permissions to ensure information is accurate, consistent and secure from the source.',
        },
        {
          titulo: 'Analytics and business intelligence',
          texto: 'We turn operational records into dashboards and key indicators that make it easier to track the business and support strategic decisions.',
        },
      ],
      propuestasTitulo: 'Proposals tailored to each process',
      propuestasIntro:
        'Every organization faces different operational dynamics. At Nexum Systems we start by diagnosing processes in order to design practical solutions that bring together management, data and analysis.',
      etapas: [
        {
          titulo: 'We analyze',
          texto: 'We diagnose the operational process, identify inefficiencies or bottlenecks and define the system’s real requirements.',
        },
        {
          titulo: 'We develop',
          texto: 'We design and implement the solution, structuring data capture, validation rules and the necessary security controls.',
        },
        {
          titulo: 'We create value',
          texto: 'We turn scattered records into reliable, traceable information that makes it easier to control operations and support management analysis.',
        },
      ],
      ctaTitulo: 'Do you have a process that needs to be transformed?',
      ctaTexto: 'Let’s talk about how Nexum Systems can turn your needs into a digital solution.',
      ctaBoton: 'Contact us',
    },
    proyectos: {
      titulo: 'Projects that turn data into decisions',
      intro:
        'Explore projects that structure operational processes to guarantee data integrity and make analysis for decision-making easier, responding to the real needs of organizations.',
      lista: [
        {
          numero: 'PROJECT 01',
          titulo: 'Inventory management system - TicaMarket',
          texto: 'The distributor TicaMarket needs a solution to improve the control and traceability of its inventory, bringing together information on products, stock movements, users and operations in a centralized system.',
          etiquetas: ['Information system', 'Inventory management', 'Database', 'Analytics'],
          estado: 'In progress',
        },
      ],
      estado: 'Status:',
      boton: 'View project',
    },
    ticamarket: {
      subtitulo: 'Comprehensive inventory management system',
      desafioTitulo: 'The challenge',
      desafioTexto:
        'TicaMarket manages part of its inventory operations through manual processes and scattered tools. This makes it hard to keep information up to date, guarantee the traceability of stock movements and have timely data for decision-making.',
      desafioImagenAlt: 'TicaMarket’s challenge',
      solucionTitulo: 'Our solution',
      solucionTextos: [
        'Nexum Systems proposes developing an information system to centralize TicaMarket’s inventory management, bringing products, incoming and outgoing movements, users and operations together in a reliable and traceable data structure.',
        'The solution will include access controls, validations, reports and analysis tools that turn operational data into useful information for management.',
      ],
      solucionImagenAlt: 'The proposed solution',
      desarrolloTitulo: 'Project development',
      desarrolloIntro:
        'The project is developed progressively, from defining the solution and its architecture to implementing the system and analyzing the information.',
      fases: [
        {
          titulo: '01 — Definition and design',
          texto: 'Definition of the consultancy’s identity, problem analysis, data architecture and initial design of the solution.',
        },
        {
          titulo: '02 — Working prototype',
          texto: 'Development of the prototype to manage products, users, roles, inventory movements and other core features.',
        },
        {
          titulo: '03 — Implementation',
          texto: 'Construction of the working system, addition of controls, report generation, documentation and testing.',
        },
        {
          titulo: '04 — Business intelligence',
          texto: 'Integration of the data with Power BI to produce indicators, visualizations and useful information for decision-making.',
        },
      ],
      entregablesTitulo: 'Project deliverables',
      entregablesIntro: 'Browse the documents and resources produced during each stage of the project.',
      entregables: [
        { titulo: 'Phase 1 - Definition and design', texto: 'Proposal document and initial design.' },
        { titulo: 'Phase 2 - Working prototype', texto: 'Prototype and explanation of its features. (In progress)' },
        { titulo: 'Phase 3 - Implementation', texto: 'System, documentation and testing. (In progress)' },
        { titulo: 'Phase 4 - Business intelligence', texto: 'Inventory dashboard and indicators. (In progress)' },
      ],
    },
    equipo: {
      titulo: 'People who connect data, ideas and solutions',
      intro:
        'We are a multidisciplinary team that brings together different knowledge and perspectives to design reliable technology solutions tailored to the real needs of each organization.',
      equipoTitulo: 'Our team',
      areas: {
        web: 'Web design and development',
        identidad: 'Corporate identity and strategy',
        implementacion: 'Proposal and implementation strategy',
      },
    },
    contacto: {
      titulo: 'Let’s turn your data into solutions',
      intro:
        'Do you have a process to improve or an idea to develop? Let’s talk about how data, technology and analytics can become a solution for your organization.',
      hablemos: 'Let’s talk about your next project',
      descripcion: 'We transform processes through technology, data and information to support better decisions.',
      correo: 'Email:',
      ubicacionTitulo: 'Location:',
      ubicacion: 'San Ramón, Alajuela, Costa Rica',
      ayudarte: 'How can we help you?',
      formularioTitulo: 'Nexum Systems contact form',
      cargando: 'Loading…',
      formularioAviso: 'The form is in Spanish.',
    },
    accesibilidad: {
      abrir: 'Accessibility options',
      titulo: 'Accessibility',
      cerrar: 'Close accessibility options',
      tamano: 'Text size',
      disminuir: 'Decrease text size',
      aumentar: 'Increase text size',
      nivel: (n, total) => `Level ${n} of ${total}`,
      opciones: {
        contraste: 'High contrast',
        grises: 'Grayscale',
        subrayar: 'Underline links',
        legible: 'Readable font (dyslexia)',
        pausar: 'Pause animations',
      },
      restablecer: 'Reset',
    },
  },
}

export default textos
