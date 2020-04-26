export enum SkillLevel {
  Master = 10,
  Expert = 7.5,
  Proficient = 5,
  Familiar = 2.5,
  Beginner = 0
}

export enum SkillSetType {
  Application,
  Service,
  Host,
  DataStorage,
  Testing,
  JsLibrary,
  Monitoring,
  CiCd
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

export namespace Content {
  export const SkillSets: {
    title: string
    summary: string
    type: SkillSetType
  }[] = [{
    type: SkillSetType.Service,
    title: 'JavaScript/TypeScript APIs and Microservices',
    summary: `Highly experienced and enjoy building TypeScript APIs and writing smaller scripts in JavaScript.' +
    ' Mostly I have worked with RESTful APIs with certain worker services separated for performance reasons, but lately I have been expanding my experience by working with Microservice architecture on my own time` +
    ' as well as learning GraphQL.'
  }, {
    type: SkillSetType.Host,
    title: `Hosting scalable applications and services`,
    summary: 'Mostly I work with various services of Google Cloud Platform to host APIs and Web applications, but am looking to expand experience with' +
    ' Cloud Platforms to AWS in near future. I have setup and managed small to medium size Kubernetes cluster with auto-scaling and auto-updating wildcard SSL certificates,' +
    ' as well as dealt with serverless scripts hosting which can be scheduled or triggered by Pub/Sub messaging service.'
  }, {
    type: SkillSetType.Application,
    title: 'Web and Mobile Applications',
    summary: 'Worked 3+ years with building responsive and complex Web applications and lightweight Mobile applications.' +
    ' Previously deployed Ionic applications to Google App Store and Apple App Store.' +
    ' Have fully white labeled user interface, email and domain, all customisable for every customer of the application.'
  }, {
    type: SkillSetType.DataStorage,
    title: 'Data Storage',
    summary: 'Have worked with file storing on buckets, GIS data storage on Geoserver and Postgis and data storage on both SQL and NoSQL databases.' +
    ' Good with building complex and performant SQL queries for 100s of thousands data points from multiple tables.'
  }, {
    type: SkillSetType.CiCd,
    title: 'Continuous Integration and deployment',
    summary: 'Know how to use multiple CI/CD tools to run automated testing and deployment pipelines.' +
    ' Mostly I prefer to stick with developing scripts with TypeScript to handle all the hard work, and utilise CI/CD tool to just execute the code, this' +
    ' way I have better and more granular control of what is happening, also this allows to almost seamlessly switch between CI/CD tools if there' +
    ' would be a need to.'
  }, {
    type: SkillSetType.Monitoring,
    title: 'System uptime and issue monitoring',
    summary: 'Have worked with monitoring logs and setting up system issue alerts, creating additional logs and system reports to provide better insight' +
    ' into systems performance and help with locating problems.'
  }, {
    type: SkillSetType.Testing,
    title: 'Testing',
    summary: 'Some experience with writing unit, integration and e2e tests.'
  }, {
    type: SkillSetType.JsLibrary,
    title: 'Popular JavaScript Libraries',
    summary: 'Experience with wide range of JavaScript libraries for various purposes, here\'s a list of few more popular ones.'
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
    level: SkillLevel.Familiar,
    set: SkillSetType.Application,
    bubble: BubbleType.FullStack
  }, {
    title: 'JavaScript',
    src: 'javascript.jpg',
    sprite: 'javascript',
    level: SkillLevel.Expert,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'TypeScript',
    src: 'typescript.jpg',
    sprite: 'typescript',
    level: SkillLevel.Master,
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
    level: SkillLevel.Familiar,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'GraphQL',
    src: 'graphql.jpg',
    sprite: 'graphql',
    level: SkillLevel.Familiar,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'NestJS',
    src: 'nestjs.jpg',
    sprite: 'nestjs',
    level: SkillLevel.Proficient,
    set: SkillSetType.Service,
    bubble: BubbleType.FullStack
  }, {
    title: 'Docker',
    src: 'docker.jpg',
    sprite: 'docker',
    level: SkillLevel.Proficient,
    set: SkillSetType.Host,
    bubble: BubbleType.DevOps
  }, {
    title: 'Kubernetes',
    src: 'kubernetes-logo.jpg',
    sprite: 'kubernetes-logo',
    level: SkillLevel.Proficient,
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
    level: SkillLevel.Proficient,
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
    level: SkillLevel.Master,
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
    level: SkillLevel.Proficient,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.FullStack
  }, {
    title: 'GC Datastore',
    src: 'cloud-datastore.jpg',
    sprite: 'cloud-datastore',
    level: SkillLevel.Proficient,
    set: SkillSetType.DataStorage,
    bubble: BubbleType.DevOps
  }, {
    title: 'Mocha',
    src: 'mocha.jpg',
    sprite: 'mocha',
    level: SkillLevel.Proficient,
    set: SkillSetType.Testing,
    bubble: BubbleType.FullStack
  }, {
    title: 'Jasmine',
    src: 'jasmine.jpg',
    sprite: 'jasmine',
    level: SkillLevel.Proficient,
    set: SkillSetType.Testing,
    bubble: BubbleType.FullStack
  }, {
    title: 'RxJS',
    src: 'reactivex.jpg',
    sprite: 'reactivex',
    level: SkillLevel.Master,
    set: SkillSetType.JsLibrary,
    bubble: BubbleType.FullStack
  }, {
    title: 'Swagger',
    src: 'swagger.jpg',
    sprite: 'swagger',
    level: SkillLevel.Proficient,
    set: SkillSetType.JsLibrary,
    bubble: BubbleType.FullStack
  }, {
    title: 'Google Cloud Platform',
    src: 'google-cloud.jpg',
    sprite: 'google-cloud',
    level: SkillLevel.Proficient,
    bubble: BubbleType.DevOps
  }, {
    title: 'Heroku',
    src: 'heroku.jpg',
    sprite: 'heroku',
    level: SkillLevel.Proficient,
    bubble: BubbleType.DevOps
  }, {
    title: 'GC Stackdriver',
    src: 'stackdriver.jpg',
    sprite: 'stackdriver',
    level: SkillLevel.Expert,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Elasticsearch',
    src: 'elasticsearch.jpg',
    sprite: 'elasticsearch',
    level: SkillLevel.Familiar,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Beats',
    src: 'beats.jpg',
    sprite: 'beats',
    level: SkillLevel.Familiar,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Logstash',
    src: 'logstash.jpg',
    sprite: 'logstash',
    level: SkillLevel.Familiar,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Kibana',
    src: 'kibana.jpg',
    sprite: 'kibana',
    level: SkillLevel.Familiar,
    set: SkillSetType.Monitoring,
    bubble: BubbleType.DevOps
  }, {
    title: 'Git',
    src: 'git-icon.jpg',
    sprite: 'git-icon',
    level: SkillLevel.Expert,
    set: SkillSetType.CiCd,
    bubble: BubbleType.DevOps
  }, {
    title: 'Gitlab CI',
    src: 'gitlab.jpg',
    sprite: 'gitlab',
    level: SkillLevel.Proficient,
    set: SkillSetType.CiCd,
    bubble: BubbleType.DevOps
  }, {
    title: 'Travis CI',
    src: 'travis-ci.jpg',
    sprite: 'travis-ci',
    level: SkillLevel.Proficient,
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
  }]
}
