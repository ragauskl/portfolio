export enum SkillLevel {
  Master = 10,
  Expert = 7.5,
  Intermediate = 5,
  Beginner = 1.5
}

export enum SkillSetType {
  Application,
  Service,
  Host,
  DataStorage,
  Testing,
  Other,
  Monitoring,
  CiCd,
  Native,
  Payment
}

export enum BubbleType {
  FullStack,
  DevOps
}

export interface Skill {
  title: string
  src: string
  level: SkillLevel
}

export interface SkillMetadata {
  title: string
  src: string
  sprite: string
  level: SkillLevel
  set?: SkillSetType
  bubble: BubbleType
}

export interface SkillSet {
  title: string
  summary: string
  type: SkillSetType
}

export interface Article {
  title: string
  type: 'default' | 'project'
  subtitle?: string
  article: string
  summary: string
  startDate: string
  featured: boolean
  endDate?: string
  hidden?: string
  links?: Link[]
}

export namespace Experience {
  export type Branch = 'master' | string
  export interface History {
    branches: BranchElement[]
    commits: Commit[]
  }

  export interface BranchElement {
    branch: Branch
    origin?: Branch
    color: string
    x?: number
  }

  export interface Commit {
    date: string
    branch: Branch
    comment: string
    description?: string
    closed?: boolean
    x?: number
    y?: number
    color?: string
    focused?: boolean
    el?: SVGGElement
    links?: {
      href: string
      icon: 'git' | 'youtube' | 'web' | string
      name?: string
    }[]
    article?: string
  }
}

export interface Link {
  href: string
  icon: 'git' | 'youtube' | 'web' | string
  name?: string
}

export namespace Content {
  export const SkillSets: SkillSet[] = [{
    type: SkillSetType.Service,
    title: 'JavaScript/TypeScript APIs and Microservices',
    summary: 'Highly experienced and enjoy building TypeScript APIs and writing smaller scripts in JavaScript.' +
    ' Mostly I have worked with RESTful APIs with certain worker services separated for performance reasons, but lately I have been expanding my experience by working with Microservice architecture on my own time' +
    ' as well as learning GraphQL. Worked with automating PDF report generation on demand.'
  }, {
    type: SkillSetType.Host,
    title: `Hosting Scalable Applications and Services`,
    summary: 'Mostly I work with various services of Google Cloud Platform to host APIs and Web applications, but am looking to expand experience with' +
    ' Cloud Platforms to AWS in near future. I have setup and managed small to medium size Kubernetes cluster with auto-scaling and auto-updating wildcard SSL certificates,' +
    ' as well as dealt with serverless scripts hosting which can be scheduled or triggered by Pub/Sub messaging service.' +
    ' Have 2+ years of experience with containerizing web applications and services in Docker for local development and remote production environments as well as' +
    ' automated testing and deployments.'
  }, {
    type: SkillSetType.Application,
    title: 'Web and Mobile Applications',
    summary: 'Years of experience working with building responsive and complex Web applications and lightweight Mobile applications.' +
    ' Previously deployed Ionic applications to Google App Store and Apple App Store.' +
    ' Have fully white labeled user interfaces, email and domain, all customizable for every customer of the application.'
  }, {
    type: SkillSetType.Payment,
    title: 'Payment Systems',
    summary: 'Know how to monetize software and web applications by introducing licensing both for online and offline use and ' +
    'collecting single time and reoccurring payments through trusted 3rd party solutions.'
  }, {
    type: SkillSetType.DataStorage,
    title: 'Data Storage',
    summary: 'Have worked with file storing on buckets, GIS data storage on Geoserver and PostGIS and data storage on both SQL and NoSQL databases.' +
    ' Good with building complex and performant SQL queries for 100s of thousands data points from multiple tables.'
  }, {
    type: SkillSetType.CiCd,
    title: 'Continuous Integration and Deployment',
    summary: 'Know how to use multiple CI/CD tools to run automated testing and deployment pipelines.' +
    ' Mostly I prefer to stick with developing scripts with TypeScript to handle all the hard work, and utilise CI/CD tool to just execute the code, this' +
    ' way I have better and more granular control of what is happening, also this allows to almost seamlessly switch between CI/CD tools if there' +
    ' would be a need to.'
  }, {
    type: SkillSetType.Monitoring,
    title: 'System Uptime and Issue Monitoring',
    summary: 'Have worked with monitoring logs and setting up system issue alerts, creating additional logs and system reports to provide better insight' +
    ' into systems performance and help with locating problems. Lately started learning to utilise ELK stack for improved monitoring.'
  }, {
    type: SkillSetType.Native,
    title: 'Native Addon Development for Node.js',
    summary: 'Experienced with developing native solution and addons for Node.js with Node-API, C++ and Objective-C, understanding and applying existing solutions from any other native language like C, Swift or other,s as well as using native APIs and libraries in Windows, Linux and macOS in order to implement required native functionality.'
  }, {
    type: SkillSetType.Testing,
    title: 'Testing',
    summary: 'Some experience with writing unit, integration and e2e tests. Mocking and stubbing services.'
  }, {
    type: SkillSetType.Other,
    title: 'Other Packages and APIs',
    summary: 'Experience with wide range of JavaScript packages which help to write more readable and extensible code, document it.' +
    ' Also packages and APIs for using 3rd party services. Here\'s a list of few, more popular, ones.'
  }]

  export const ToolSet: SkillMetadata[] = [{
    title: 'Angular',
    src: 'angular.jpg',
    sprite: 'angular',
    level: SkillLevel.Master,
    set: SkillSetType.Application,
    bubble: BubbleType.FullStack
  }, {
    title: 'Ionic',
    src: 'ionic.jpg',
    sprite: 'ionic',
    level: SkillLevel.Master,
    set: SkillSetType.Application,
    bubble: BubbleType.FullStack
  }, {
    title: 'Electron',
    src: 'electron.jpg',
    sprite: 'electron',
    level: SkillLevel.Expert,
    set: SkillSetType.Application,
    bubble: BubbleType.FullStack
  }, {
    title: 'Three.js',
    src: 'threejs.jpg',
    sprite: 'threejs',
    level: SkillLevel.Beginner,
    set: SkillSetType.Application,
    bubble: BubbleType.FullStack
  }, {
    title: 'TypeScript',
    src: 'typescript.jpg',
    sprite: 'typescript',
    level: SkillLevel.Master,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'JavaScript',
    src: 'javascript.jpg',
    sprite: 'javascript',
    level: SkillLevel.Expert,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'Node.js',
    src: 'nodejs.jpg',
    sprite: 'nodejs',
    level: SkillLevel.Expert,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'Go Lang',
    src: 'gopher.jpg',
    sprite: 'gopher',
    level: SkillLevel.Beginner,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'Stripe',
    src: 'stripe.jpg',
    sprite: 'stripe',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Payment,
    bubble: BubbleType.FullStack
  }, {
    title: 'GraphQL',
    src: 'graphql.jpg',
    sprite: 'graphql',
    level: SkillLevel.Beginner,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'NestJS',
    src: 'nestjs.jpg',
    sprite: 'nestjs',
    level: SkillLevel.Expert,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'Python',
    src: 'python.jpg',
    sprite: 'python',
    level: SkillLevel.Intermediate,
    bubble: BubbleType.FullStack
  }, {
    title: 'Puppeteer',
    src: 'puppeteer.jpg',
    sprite: 'puppeteer',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'Docker',
    src: 'docker.jpg',
    sprite: 'docker',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'Kubernetes',
    src: 'kubernetes-logo.jpg',
    sprite: 'kubernetes-logo',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'GC Functions',
    src: 'cloud-functions.jpg',
    sprite: 'cloud-functions',
    level: SkillLevel.Master,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'Google Cloud Run',
    src: 'cloud-run.jpg',
    sprite: 'cloud-run',
    level: SkillLevel.Master,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'Cloudflare',
    src: 'cloudflare.jpg',
    sprite: 'cloudflare',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'GC Compute',
    src: 'compute-engine.jpg',
    sprite: 'compute-engine',
    level: SkillLevel.Expert,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'Postgres SQL',
    src: 'postgresql.jpg',
    sprite: 'postgresql',
    level: SkillLevel.Expert,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.FullStack
  }, {
    title: 'GC SQL',
    src: 'cloud-sql.jpg',
    sprite: 'cloud-sql',
    level: SkillLevel.Expert,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.DevOps
  }, {
    title: 'MongoDB',
    src: 'mongodb.jpg',
    sprite: 'mongodb',
    level: SkillLevel.Intermediate,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.FullStack
  }, {
    title: 'GC Datastore',
    src: 'cloud-datastore.jpg',
    sprite: 'cloud-datastore',
    level: SkillLevel.Intermediate,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.DevOps
  }, {
    title: 'Elasticsearch',
    src: 'elasticsearch.jpg',
    sprite: 'elasticsearch',
    level: SkillLevel.Beginner,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.DevOps
  }, {
    title: 'Mocha',
    src: 'mocha.jpg',
    sprite: 'mocha',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Testing,
    bubble: BubbleType.FullStack
  }, {
    title: 'Jasmine',
    src: 'jasmine.jpg',
    sprite: 'jasmine',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Testing,
    bubble: BubbleType.FullStack
  }, {
    title: 'Karma',
    src: 'karma.jpg',
    sprite: 'karma',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Testing,
    bubble: BubbleType.FullStack
  }, {
    title: 'RxJS',
    src: 'reactivex.jpg',
    sprite: 'reactivex',
    level: SkillLevel.Master,
    set: SkillSetType.Other,
    bubble: BubbleType.FullStack
  }, {
    title: 'Mailgun',
    src: 'mailgun.jpg',
    sprite: 'mailgun',
    level: SkillLevel.Expert,
    set: SkillSetType.Other,
    bubble: BubbleType.FullStack
  }, {
    title: 'Swagger',
    src: 'swagger.jpg',
    sprite: 'swagger',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Other,
    bubble: BubbleType.FullStack
  }, {
    title: 'Verdaccio',
    src: 'verdaccio.jpg',
    sprite: 'verdaccio',
    level: SkillLevel.Intermediate,
    set: SkillSetType.Other,
    bubble: BubbleType.DevOps
  }, {
    title: 'Google Cloud Platform',
    src: 'google-cloud.jpg',
    sprite: 'google-cloud',
    level: SkillLevel.Intermediate,
    bubble: BubbleType.DevOps
  }, {
    title: 'Heroku',
    src: 'heroku.jpg',
    sprite: 'heroku',
    level: SkillLevel.Intermediate,
    bubble: BubbleType.DevOps
  }, {
    title: 'GC Stackdriver',
    src: 'stackdriver.jpg',
    sprite: 'stackdriver',
    level: SkillLevel.Expert,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Beats',
    src: 'beats.jpg',
    sprite: 'beats',
    level: SkillLevel.Beginner,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Logstash',
    src: 'logstash.jpg',
    sprite: 'logstash',
    level: SkillLevel.Beginner,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Kibana',
    src: 'kibana.jpg',
    sprite: 'kibana',
    level: SkillLevel.Beginner,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Git',
    src: 'git-icon.jpg',
    sprite: 'git-icon',
    level: SkillLevel.Expert,
    bubble: BubbleType.DevOps
  }, {
    title: 'Gitlab CI',
    src: 'gitlab.jpg',
    sprite: 'gitlab',
    level: SkillLevel.Expert,
    set: SkillSetType.CiCd,
    bubble: BubbleType.DevOps
  }, {
    title: 'Travis CI',
    src: 'travis-ci.jpg',
    sprite: 'travis-ci',
    level: SkillLevel.Intermediate,
    set: SkillSetType.CiCd,
    bubble: BubbleType.DevOps
  }, {
    title: 'GC Container Registry',
    src: 'container-registry.jpg',
    sprite: 'container-registry',
    level: SkillLevel.Master,
    bubble: BubbleType.DevOps
  }, {
    title: 'Google Cloud Tasks',
    src: 'cloud-tasks.jpg',
    sprite: 'cloud-tasks',
    level: SkillLevel.Expert,
    bubble: BubbleType.DevOps
  }, {
    title: 'C++',
    src: 'c++.jpg',
    sprite: 'c++',
    level: SkillLevel.Intermediate,
    bubble: BubbleType.FullStack,
    set: SkillSetType.Native
  }, {
    title: 'Objective-C',
    src: 'obj-c.jpg',
    sprite: 'obj-c',
    level: SkillLevel.Beginner,
    bubble: BubbleType.FullStack,
    set: SkillSetType.Native
  }]

  export const ExperienceHistory: Experience.History = {
    branches: [
      {
        branch: 'master',
        color: 'rgb(27, 29, 31)'
      },
      {
        branch: 'uni',
        origin: 'master',
        color: 'rgb(51, 186, 204)'
      }, {
        branch: 'sorion',
        origin: 'uni',
        color: 'rgb(226, 198, 96)'
      }, {
        branch: 'gsi',
        origin: 'master',
        color: 'rgb(51, 204, 189)'
      }, {
        branch: 'bitgapp',
        origin: 'master',
        color: 'rgb(152, 83, 201)'
      }
    ],
    commits: [
      {
        date: '2011-Oct',
        branch: 'master',
        comment: 'C++',
        description: 'Started learning C++ as part of programming course in 10th grade.'
      }, {
        date: '2014-Sep',
        branch: 'uni',
        comment: 'Started University',
        description: "Joined Coventry University to study 'Computing BSc'. Subjects studied: Full-stack development, algorithms, data structures, intelligent agents, computer architecture, networks, interactive pervasive computing, UX/UI, agile development and enterprise information systems."
      }, {
        date: '2014-Sep',
        branch: 'uni',
        comment: 'Python',
        description: "Started learning Python as part of 'Programming, algorithms and data structures' subject at University."
      }, {
        date: '2014-Sep',
        branch: 'uni',
        comment: 'SQL',
        description: 'Started learning SQL as part of University course.'
      }, {
        date: '2014-Sep',
        branch: 'uni',
        comment: 'Git',
        description: 'Started learning SQL as part of University course.'
      }, {
        date: '2016-Jul',
        branch: 'sorion',
        comment: 'Jr Software Engineer at Sorion Ltd',
        description: "Joined Sorion Ltd in Birmingham as a Junior Software Engineer. Was responsible for development and maintenance of new features for the company's core product - Sextans-Rt. Some of the projects I have worked on include a <b>Pick-To-Light System</b> (a light-directed aid for the production line), a <b>Multi-Language Support Tool</b> for the Sextans-RT and a <b>Layered Image Editor</b>."
      }, {
        date: '2016-Jul',
        branch: 'sorion',
        comment: 'C#/.Net',
        description: 'Started learning C# and .Net framework in which was used for latest development at Sorion Ltd. This also included learning a bit of VB6 as part of rewriting legacy code.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'JavaScript',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'Node.js',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'Angular',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'Ionic',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'Datastore (Google Cloud)',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'Heroku',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Nov',
        branch: 'master',
        comment: 'Cloudflare',
        description: 'On my free time I started to pick up interest in web/mobile development and started working on a mobile app as a personal project. Application user interface was built with <b>Angular</b>(Initially v1, later switched to v2+) and <b>Ionic</b> and for server I chose <b>Node.js</b>, therefore I also started learning <b>JavaScript</b>. In order to store data I chose to learn <b>Datastore (Google Cloud Platform)</b>. As for hosting I went with <b>Heroku</b> for setting up live server and <b>Github pages</b> with <b>Cloudflare</b> in order to make mobile application accessible on the internet without having to install it.'
      }, {
        date: '2016-Dec',
        branch: 'master',
        comment: 'TypeScript',
        description: 'After some time of working on a mobile application personal project, I decided to learn latest Angular 2, which meant I had to rewriting codebase from Angular.js and start learning <b>TypeScript</b>.'
      }, {
        date: '2016-Dec',
        branch: 'master',
        comment: 'MongoDB',
        description: "As I've learned more about NoSQL solutions, I chose to change data storage for my personal project from Datastore on Google Cloud Platform to <b>MongoDB</b>, which I hosted on Heroku."
      }, {
        date: '2017-Oct',
        branch: 'sorion',
        comment: 'Left Sorion Ltd',
        description: 'After working at Sorion Ltd for 1 year and 3 months I left the position in order to finish my last year at university.',
        closed: true
      }, {
        date: '2018-May',
        branch: 'uni',
        comment: 'Graduated University with 1st',
        closed: true
      }, {
        date: '2018-Jun',
        branch: 'gsi',
        article: 'gsi',
        comment: 'Full-stack JS Developer at Geospatial Insight Ltd',
        description: 'Working as part of the team developing tools used to display and manipulate a wide range of geospatial data collected from satellites, plane and drone imagery which is analysed by GSI Machine Learning team to produce insight into the collected data. Most of my work included <b>developing, testing, deploying and maintaining</b> main project <b>Visual Intelligence Platform</b> as well as couple other smaller projects and <b>automating development processes</b>.\n\nOther responsibilities include code quality reviews, project scope planning and review meetings, keeping planned tasks up-to-date in Jira and writing documentation.'
      }, {
        date: '2018-Jun',
        branch: 'gsi',
        comment: 'PostgreSQL',
        description: "During work at GSI I've been learning everything about <b>PostgreSQL</b> and Geospatial Data storage using <b>PostGIS</b> as this was most suitable database solution due to the nature of the projects."
      }, {
        date: '2018-Jun',
        branch: 'gsi',
        comment: 'Expanding skills of Google Cloud Platform',
        description: "I've started from learning more about <b>Google Cloud Compute</b> as projects were initially hosted on raw VMs. Later, with my initiative, we started to use wider variety of Google Cloud Platform service and tools in order to create more scalable and performant system, separate live and staging environments for projects as well as improve system monitoring to ease debugging. Tools used over the years: <b>Kubernetes Engine, Google SQL, Container Registry, Stackdriver, Cloud Functions, Pub/Sub, Cloud Run, Cloud Scheduler and Cloud Tasks</b>."
      }, {
        date: '2018-Nov',
        branch: 'master',
        comment: 'Go',
        description: 'During my free time I was looking for a new, lower level language, to learn and <b>Go</b> grabbed my attention. Therefore I started working on small projects with Go.'
      }, {
        date: '2018-Dec',
        branch: 'gsi',
        comment: 'Kubernetes',
        description: 'As initially projects were hosted on single VMs at work, I started to look into more scalable solutions and took interest in Kubernetes, which I started to learn on my own time, and later applied learnt material at work to migrate servers to a more scalable and performant solution.'
      }, {
        date: '2018-Dec',
        branch: 'gsi',
        comment: 'Serverless deployment',
        description: "As I've learned about Serverless on my free time, I started applying it at work for tasks that did not require much resources for computation and/or needed to be scheduled such as database backups. Mostly using Google Cloud Scheduler and Functions."
      }, {
        date: '2018-Dec',
        branch: 'gsi',
        comment: 'CI pipeline automation',
        description: "With usage of Kubernetes and deployment becoming increasingly more complex, I've suggested to also find time for automating deployments at work and took on task of automating CI pipeline using Gitlab CI which allowed any person with access to the Gitlab repository to easily trigger any part of the deployment as well as allowing them to run a CI pipeline locally in case Gitlab was down."
      }, {
        date: '2018-Dec',
        branch: 'gsi',
        comment: 'Docker',
        description: 'As part of automating CI pipeline and working with Kubernetes I had to learn how to use Docker. At work we also applied Docker in order to create a local development environment which would be platform agnostic allowing developers to work from any operating system supporting Docker.'
      }, {
        date: '2019-Jun',
        branch: 'master',
        comment: 'NestJS',
        description: "During my search for new and interesting technologies I've heard about NestJS as a solution for servers, which took my interest as I already had experience with Angular. Therefore I chose to learn it by using it to build a server for this portfolio web page."
      }, {
        date: '2019-Jun',
        branch: 'master',
        comment: 'GraphQL',
        description: "GraphQL and has been in my 'to-learn' list for a while therefore I started to use it for sandbox applications to get experience working with it."
      }, {
        date: '2020-Nov',
        branch: 'master',
        comment: 'ELK stack',
        description: 'Created mock API which is monitored with Elasticsearch, Logstash, Metricbeat and Kibana on a Kubernetes cluster in order to gain better understanding of ELK stack and how to work with it.',
        links: [{
          href: 'https://github.com/ragauskl/elk-on-minikube',
          icon: 'git'
        }]
      }, {
        date: '2020-Dec',
        branch: 'gsi',
        article: 'gsi',
        comment: 'Left Geospatial Insight Ltd',
        description: 'After working at GSI Ltd for 2 year and 7 months I left the position in order to take a break in official work and focus on personal projects, spend some time catching up with latest tech and spend some time for self-improvement and learning new tech/skills for which I did not have time before.',
        closed: true
      }, {
        date: '2021-Apr',
        branch: 'bitgapp',
        comment: 'Co-owner of Bitgapp Ltd',
        description: 'Director and co-owner of Bitgapp Limited, a small independent software company based in UK.'
      }, {
        date: '2021-Apr',
        branch: 'bitgapp',
        article: 'cursr',
        comment: 'Cursr - Utility tool to customize mouse transitions between screens',
        description: 'Project started in order to solve annoyances when moving mouse between different resolution screens, without having to sacrifice screen resolution and later expanded to further optimize mouse and keyboard usage. Cursr is a <b>cross-platform Electron</b> application for Windows, Mac and list of Linux distributions.',
        focused: true
      }
    ]
  }

  export const Articles: Article[] = [{
    title: 'Cursr',
    type: 'project',
    article: 'cursr',
    summary: 'Cross-platform software for customizing 🖱️ mouse movement between multiple displays 🖥️ (and soon between multiple Computers) to help optimise workflow and smooth out cursor movement between different resolution screens.',
    startDate: '2021.04',
    endDate: 'Present',
    featured: true,
    links: [{
      name: 'Webpage',
      icon: 'assets/articles/cursr/logo.png',
      href: 'https://cursr.app'
    }]
  }, {
    title: 'RouteFox (Dissertation)',
    type: 'project',
    article: 'route-fox',
    summary: 'A mobile 🗺️ travel recommender system, that generates route suggestions between 🏞️ 2+ points of interests, based on the user preferences such as visit length for every place, arrival and departure preferences, the priority of each place as well as preferred 🚈 transport type. The mobile application also has a feature to live-track a saved route and warn the user if wandering off too far away from the selected path.',
    startDate: '2018.01',
    endDate: '2018.04',
    featured: true,
    links: [{
      name: 'Demo',
      icon: 'youtube',
      href: 'https://www.youtube.com/watch?v=9NwdTCJON8U&feature=youtu.be'
    }]
  }, {
    title: 'Full-stack JavaScript Developer at Geospatial Insight Ltd',
    type: 'default',
    article: 'gsi',
    summary: '',
    startDate: '2018.06',
    endDate: '2020.12',
    featured: false
  }]

}
