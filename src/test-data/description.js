const Description = {
  androidLint: {
    label: "androidLint",
    id: "androidLint",
    description:
      "Android Lint is a new tool introduced in ADT 16 (and Tools 16) which scans Android project sources for potential bugs.",
    why: "This is the de facto standard for Android development.",
    url: "",
  },
  androidProfiler: {
    label: "androidprofiler",
    id: "androidprofiler",
    description:
      "The Android Profiler tools provide real-time data to help you to understand how your app uses CPU, memory, network, and battery resources.",
    why:
      "Useful for manual exploratory as it provides a good proxy for network calls as well as to be able to identify memory leaks.",
    url: "https://developer.android.com/studio/profile/android-profiler",
  },
  appium: {
    label: "Appium",
    id: "appium",
    description:
      "Appium is an open source test automation framework for use with native, hybrid and mobile web apps. It drives iOS, Android, and Windows apps using the WebDriver protocol.",
    logo: "appium.png",
    why:
      "Emulates user experience on TestNG, Gradle and Browserstack and is also used for smoke tests",
    url: "https://appium.io/",
  },
  "axe-core": {
    label: "Axe",
    id: "axe",
    description:
      "Built on the world’s most popular accessibility testing library, axe-core. Deque’s suite of axe tools offers full coverage for your testing and compliance needs.",
    logo: "Axe.png",
    why:
      "Axe is used to find WCAG accessiblity violation in the page and has good configurability options and can also be run in the pipeline. Axe can also be used as a Chrome Browser Plug in for Exploratory Testing.",
    url: "https://www.deque.com/axe/",
  },
  BrowserStack: {
    label: "BrowserStack",
    id: "browserStack",
    description:
      "Browserstack allows us to test on 3000+ real devices, browsers and Operating Systems through a web interface.",
    logo: "browserstack.jpeg",
    why:
      "Market leading compatibility tool allowing for testing against multiple browser and device configurations, reducing the need for costly set up and maintenance costs.",
    url: "https://www.browserstack.com/",
  },
  charles: {
    label: "Charles",
    id: "charles",
    logo: "charles.svg",
    why:
      "Used to provide a test double for manual testing, as well as simulating network conditions and also improved observability of responses. Whilst it is considered a go to tool for mobile testing, it can also be useful for web debugging too.",
    description:
      "Charles is an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information).",

    url: "https://www.charlesproxy.com/",
  },
  Codecept: {
    label: "Codecept",
    id: "codecept",
    description:
      "CodeceptJS is a modern end to end testing framework with a special BDD-style syntax. The tests are written as a linear scenario of the user's action on a site.",
    logo: "codecept.svg",
    why: "",
    url: "https://codecept.io/",
  },
  contrast: {
    label: "Contrast",
    id: "contrast",
    description:
      "Contrast assess is a revolutionary application security testing solution that infuses software with vulnerability assessment capabilities so that security flaws are automatically identified.",
    logo: "contrast.png",
    why:
      "Contrast Security as an IAST option for teams to take up. It integrates with their build process, detecting security issues through crawling of their applications as part of their CI/CD pipeline - and boasts strong coverage with minimal false-positives. Its support for Kotlin was its main differentiator. It is one of the few non-GCP commercial services, with analysis and presentation of results a SaaS platform",
    url: "https://www.contrastsecurity.com/en-gb/",
  },
  CrowdTesting: {
    label: "Crowd testing",
    id: "crowd",
    description:
      "Crowd Testing allows teams to get real people test their digital products in real-world conditions. This helps teams get valuable feedback on areas such as functionality, usability, behaviour over real world network conditions and device compatibility.",
  },
  cucumber: {
    label: "Cucumber",
    id: "cucumber",
    description:
      "Cucumber is a software tool that supports behavior-driven development.",
    logo: "cucumber.png",
    why:
      "Cucumber allows for less technical members of the team to read and write BDD style tests and is specifically well supported by the IDE(s).",
    url: "https://cucumber.io/",
  },
  Cypress: {
    description:
      "Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications. It makes it possible to set up, write, run and debug tests",
    label: "Cypress",
    id: "cypress",
    logo: "cypress.svg",
    why:
      "Cypress is a JavaScript only testing tool which is simpler for teams to use compared to other similar tools. Cypress enables you to write several types of tests: including E2E and Acceptance tests. It is recommended for testing your own application, with tools like WebdriverIO being better for Journey tests across other applications.  Cypress easier to set up as it comes with testrunner, mocking capabilities and lots of validation rules; all of which are geared towards testing front ends.Cypress has good debugging capabilities as it has access to every object.  Finally Cypress tests are also fast as the test code runs itself in the browser rather than running out of process of the browser.  Cypress is also good for compatibility testing as any browser (other than Safari) that is stored on your local machine can be used for testing with Cypress; and it has integration with BrowserStack. The integration with Browserstack may not be as good as WebdriverIO's Browserstack integration.",
    url: "https://www.cypress.io/",
  },
  Eslint: {
    label: "Eslint",
    id: "eslint",
    description:
      "ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.",
    logo: "eslint.svg",
    why: "ESLint is the standard linting tool for JavaScript projects.",
    url: "https://eslint.org/",
  },
  espresso: {
    label: "Espresso",
    id: "espresso",
    logo: "android.svg",
    description:
      "Use Espresso to write concise, beautiful, and reliable Android UI tests. The core API is small, predictable, and easy to learn and yet remains open for customization.",
    why:
      "De facto standard for Android developers. Android developers prefer using Espresso to other tools such as Appium as it is written in Java, as well as allowing for more thorough tesitng.",
    url: "https://developer.android.com/training/testing/espresso",
  },
  express: {
    label: "Express",
    id: "express",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.",
    why:
      "Express was the original choice for a web framework for Node.js for a long time and is still the default choice due to its simple API, community support and speed. Other frameworks, such as Hapi, Koa, Fastify and Nest are good alternatives, all with different pros and cons, but Express is .",
    logo: "express.png",

    url: "https://expressjs.com/",
  },
  gatling: {
    label: "Gatling",
    id: "gatling",
    logo: "gatling.png",
    description:
      "Gatling is an open-source load- and performance-testing framework based on Scala, Akka and Netty.",
    why:
      "Very powerful performance testing tool widely used across CI/CD teams.  However the Gatling DSL can be quite difficult to understand. This can make the exact purpose of the test difficult to understand. Starting from version 3.7, gatling supports writing tests in Java, Kotlin and Scala.Mobile teams use Gatling to test server-side components like BFFs.",

    url: "https://gatling.io/",
  },
  gradle: {
    label: "Gradle",
    id: "gradle",
    description:
      "Gradle is a build automation tool for multi-language software development. It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing.	",
    why:
      "Gradle is a build automation tool for multi-language software development. It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing.",
    logo: "gradle.png",
    url: "https://gradle.org/",
  },
  grafana: {
    label: "Grafana",
    id: "grafana",
    description:
      "Grafana is open source visualization and analytics software. It allows you to query, visualize, alert on, and explore your metrics no matter where they are stored.",
    logo: "grafana.png",
    why:
      "Grafana is a flexible, automatable, open source dashboarding technology that fits very well with a Prometheus-based time-series database (our primary telemetry tool). This was an easy choice to make, as the GCP-native tooling is not nearly as capable when operating at scaleGrafana can be adopted when moving into Kubernetes, as AWS CloudWatch didn't support this. CloudWatch was retired so that there was a single place to go to.",
    url: "https://grafana.com/",
  },
  httpie: {
    label: "httpio",
    id: "httpio",
    description: "API Testing tool",
    logo: "httpie.png",
    why:
      "A good alternative to Postman if you prefer working on the command line.",
    url: "https://httpie.io/",
  },
  jacoco: {
    label: "Jacoco",
    id: "jacoco",
    description: "JaCoCo is a free code coverage library for Java.",
    why: "JaCoCo is the defacto standard code coverage library for Java",
    logo: "jacoco.png",
    url: "https://www.eclemma.org/jacoco/",
  },
  JestTest: {
    description:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more.Jest brings together features like test running, mocking, and snapshots in one package, which means you don't have to wire up lots of different dependencies. ",
    why:
      "Jest has quickly become the defacto standard testing library for Front-end projects because of its speed, ease of use and friendly user interface",
    label: "Jest",
    id: "jest",
    logo: "jest.png",
    url: "https://jestjs.io/",
  },
  jMeter: {
    label: "jMeter",
    id: "jMeter",
    description:
      "jMeter application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.",
    logo: "jmeter.svg",
    why:
      "Performance regression suite of backend journey tests on the AWS platform are instrumented in jMeter.",
    url: "https://jmeter.apache.org/",
  },
  junit: {
    label: "JUnit",
    id: "junit",
    logo: "junit.png",
    description:
      "JUnit is a unit testing framework for the Java programming language. JUnit has been important in the development of test-driven development, and is one of a family of unit testing frameworks which is collectively known as xUnit that originated with SUnit. JUnit is linked as a JAR at compile-time",
    why:
      "jUnit is the de facto standard for Java and Kotlin TDD and unit testing.  It also allows Product Engineers who are already familiar in creating unit tests in JUnit, to extend test coverage in their CI pipeline to include component and integration tests by extending their framework to include a DSL.",
    url: "https://junit.org/junit5/",
  },
  k6: {
    id: "k6",
    label: "k6",
    description:
      "k6 is an open-source load testing tool and cloud service providing API performance testing.",
    why: "k6 gives us good performance testing capabilities",
    logo: "k6.svg",
    url: "https://k6.io/",
  },
  karate: {
    label: "Karate",
    id: "karate",
    description:
      "Karate is the only open-source tool to combine API test-automation, mocks, performance-testing and even UI automation into a single, unified framework.",
    logo: "karate.png",
    why:
      "A BDD testing framework which is simpler to use than alternatives such as Newman and Rest Assured. It has the added benefit that you can re-use functional tests as performance tests, and then delegate their execution to Gatling. However, one note of caution it is difficult to refactor so probably suitable for a small API, so it may be better to write test in code using DSL.",
    url: "https://github.com/karatelabs/karate",
  },
  kibana: {
    label: "Kibana",
    id: "kibana",
    logo: "kibana.png",
    description:
      "Kibana is a data visualization dashboard for Elasticsearch. It provides visualization capabilities on top of the content indexed on an Elasticsearch cluster. Users can create bar, line and scatter plots, or pie charts and maps on top of large volumes of data.",
    why:
      "The default choice for analysis of data held within Elasticsearch, where we store our active logs",
    url: "https://www.elastic.co/kibana",
  },
  Lighthouseci: {
    label: "LighthouseCI",
    id: "lighthouseci",
    description:
      "Automate running Lighthouse for every commit, viewing the changes, and preventing regressions.",
    logo: "lighthouse.jpeg",
    why:
      "Lighthouse CI is a suite of free tools that facilitate using Lighthouse for performance monitoring. A single Lighthouse report provides a snapshot of a web page's performance at the time that it is run; Lighthouse CI shows how these findings have changed over time. This can be used to identify the impact of particular code changes or ensure that performance thresholds are met during continuous integration processes. Although performance monitoring is the most common use case for Lighthouse CI, it can be used to monitor other aspects of the Lighthouse report - for example, SEO or accessibility.",

    url: "https://github.com/GoogleChrome/lighthouse-ci",
  },
  mockito: {
    label: "Mockito",
    id: "mockito",
    description: "Mocking framework for unit tests in Java.",
    logo: "mockito.png",
    why:
      "Mockito is an open source testing framework for Java released under the MIT License. The framework allows the creation of test double objects in automated unit tests for the purpose of test-driven development or behavior-driven development.",
    url: "https://site.mockito.org/",
  },
  mockk: {
    id: "mockk",
    label: "MockK",
    description: "Kotlin mocking library",
    why:
      "Kotlin equivalent to Mockito to provide test doubles (aka Mocklibrary)",
    logo: "mockk.png",
    url: "https://mockk.io/",
  },
  mockoon: {
    label: "Mockoon",
    id: "mockoon",
    description:
      "Mockoon is the easiest and quickest way to design and run mock REST APIs.",
    logo: "mockoon.svg",
    why:
      "Mockoon.com this is an integration testing tool that Apps use to stub a web server or API when developing our BFFs.",
    url: "https://mockoon.com/",
  },
  newmanPostman: {
    label: "NewmanPostman",
    id: "newmanpostman",
    description:
      "Newman is a command-line Collection Runner for Postman. It enables you to run and test a Postman Collection directly from the command line. It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems.",
    logo: "postman.png",
    why: "Used to test BFF API responses in CI in iOS Apps team",
    url:
      "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/#:~:text=Newman%20is%20a%20command%2Dline,directly%20from%20the%20command%20line.&text=Newman%20maintains%20feature%20parity%20with,the%20collection%20runner%20in%20Postman.",
  },
  newrelic: {
    label: "New Relic",
    description:
      "New Relic One is an observability platform built to help engineers create more perfect software. From monoliths to serverless, you can instrument everything, then analyze, troubleshoot, and optimize your entire software stack. All from one place.",
    id: "new-relic",
    logo: "nr.svg",
    why:
      "New Relic is a very popular tool amongst Frontend engineers, and its 'Browser' tool provides client-side 'real user monitoring' metrics to help us improve customer experience. It is also used for error reporting and analytics as a natural extension of this",
    url: "https://newrelic.com/",
  },
  owaspDependencyChecker: {
    label: "OWASP Dependency Checker",
    id: "owaspDependencyChecker",
    description:
      "Dependency-Check is a Software Composition Analysis (SCA) tool that attempts to detect publicly disclosed vulnerabilities contained within a project’s dependencies. It does this by determining if there is a Common Platform Enumeration (CPE) identifier for a given dependency. If found, it will generate a report linking to the associated CVE entries.",
    logo: "owaspDepend.jpeg",
    why:
      "Waitrose Digital teams using SonarQube, currently recommend using the OWASP Dependency Check Gradle plugin. This tooling may be replaced by Contrast at some point in the future, however it is currently the only recommended method for analysing vulnerable dependencies in our AWS Lambda projects. This may change in future if Contrast supports the Lambda runtime.  ",
    url: "https://owasp.org/www-project-dependency-check/",
  },
  Pact: {
    label: "Pact",
    id: "pact",
    description:
      "Pact is a code-first tool for testing HTTP and message integrations using contract tests. Contract tests assert that inter-application messages conform to a shared understanding that is documented in a contract. Without contract testing, the only way to ensure that applications will work correctly together is by using expensive and brittle integration tests.Another critical difference from traditional integration tests is that it gives the provider visibility of who is consuming their APIs, and how. This allows the provider to confidently manage enhancements and breaking changes if required.",
    logo: "pact-broker.png",
    why:
      "Pact Broker an open source software. There are not many alternatives in the market in practice",
    url: "https://docs.pact.io/",
  },
  Percy: {
    label: "Percy",
    id: "percy",
    description:
      "Percy is a visual testing tool. Visual testing is the automated process of detecting and reviewing visual UI changes. Teams are replacing manual testing with automation to ensure their websites and applications always look exactly as intended.",
    logo: "percy.jpeg",
    why: "Percy is a market leading visual regression tool.",
    url: "https://percy.io/",
  },
  pitest: {
    label: "Pitest",
    id: "pitest",
    description:
      "Pitest is a mutation testing system, providing test coverage for Java and the jvm. It's fast, scalable and integrates with modern test and build tooling.",
    why: "Pitest is the defacto standard mutation testing library for Java",
    logo: "pitest.png",

    url: "https://pitest.org/",
  },
  postman: {
    label: "Postman",
    id: "postman",
    logo: "postman.png",
    description:
      "Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.",
    why:
      "For tesitng purposes it is a commonly used API Exploratory testing tool. Teams can also use Postman for testing GraphQL.",
    url: "https://www.postman.com/",
  },
  httpie: {
    label: "httpie",
    id: "httpie",
    description: "API Testing tool",
    logo: "httpie.png",
    why:
      "A good alternative to Postman if you prefer working on the command line.",
    url: "https://httpie.io/",
  },
  prometheus: {
    label: "Prometheus",
    id: "prometheus",
    description:
      "Prometheus is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database built using a HTTP pull model, with flexible queries and real-time alerting.",
    logo: "prometheus.png",
    why:
      "Prometheus has established itself as a capable tool for dealing with highly distributed cloud-native services, with a powerful querying language and useful extensions, with great tool integration.",

    url: "https://prometheus.io/",
  },
  Protractor: {
    label: "Protractor",
    id: "protractor",
    description:
      "Protractor is an end-to-end test framework which runs tests against your application running in a real browser, interacting with it as a user would.",
    logo: "protractor.jpeg",
    why:
      "Used for testing Event Tracking for Google Analytics as Protractor has a powerful Google Analytics libraries.",

    url: "https://www.protractortest.org/#/",
  },
  Puppeteer: {
    label: "Puppeteer",
    id: "pupeteer",
    description:
      "Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.",
    why:
      "Pupeteer lets us automate the testing of our front-end applications as a user would.",
    logo: "puppeteer.png",
    url: "https://pptr.dev/",
  },
  pushhero: {
    label: "Push Hero",
    id: "pushhero",
    description:
      "Push Hero is a native macOS application written in pure Swift that allows us to easily test push notifications.",
    logo: "Push_hero.png",
    why:
      "This test harness helps accelerate testing of iOS App Push Notification functionality by avoiding the need for time consuming Salesforce Marketing Cloud test environment usage.",
    url:
      "https://apps.apple.com/us/app/push-hero-test-notifications/id1499227284?mt=12",
  },
  ReactTestingLib: {
    label: "React Testing library",
    id: "testing-lib",
    description:
      "The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is:  The more your tests resemble the way your software is used, the more confidence they can give you.",
    why:
      "With a move towards testing software the way it is used by users, instead of testing implentation details, React Testing Library (RTL) offers us a more robust way of testing our components and their interactions and is more resiliant to change.RTL replaces the need for Enzyme, which promotes a different testing paradigm.",
    logo: "react-testing-lib.png",
    url: "https://testing-library.com/docs/react-testing-library/intro",
  },
  ResembleJS: {
    label: "ResembleJS",
    id: "ResembleJS",
    description:
      "ResembleJS is a visual testing tool. Visual testing is the automated process of detecting and reviewing visual UI changes. Teams are replacing manual testing with automation to ensure their websites and applications always look exactly as intended.",
    logo: "ResembleJS.jpeg",
    why: "ResembleJS is a market leading visual regression tool.",
    url: "https://www.npmjs.com/package/resemblejs",
  },
  restassured: {
    label: "Restassured",
    id: "restassured",
    description: "Testing and validation of REST services in Java",
    logo: "restassured.png",
    why:
      "Testing and validation of REST services in Java is harder than in dynamic languages such as Ruby and Groovy. REST Assured brings the simplicity of using these languages into the Java domain.",
    url: "",
  },
  sentry: {
    id: "sentry",
    label: "Sentry",
    description:
      "Open-source error tracking that helps developers monitor and fix crashes in real time. Debug your application and prevent crashes across your entire stack",
    logo: "sentry.svg",
    why: "Sentry is used to highlight client-side errors",
    url: "https://sentry.io/welcome",
  },
  Sitespeed: {
    description:
      "Sitespeed.io is a set of Open Source tools that makes it easy to monitor and measure the performance of your web site.",
    why:
      "Sitespeed is a very common, feature rich performance monitoring tool which allows us to retrieve metrics to use in our monitoring stack",
    label: "Sitespeed",
    id: "sitespeed",
    logo: "sitespeed.png",

    url: "https://www.sitespeed.io/",
  },
  sonarQube: {
    label: "SonarQube",
    id: "sonarQube",
    logo: "sonarqube.svg",
    description:
      "SonarQube is an open-source platform developed by SonarSource for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.",
    why:
      "The platform makes available SonarQube to help engineering teams with a variety of code analysis practices - code coverage/quality checks, as well as where applicable security analysis tools",

    url: "https://www.sonarqube.org/",
  },
  springCloudDataFlow: {
    label: "Spring Cloud Data Flow",
    id: "spring-cloud-data-flow",
    description:
      "Spring Cloud Data Flow provides tools to create complex topologies for streaming and batch data pipelines.",
    why:
      "Spring Cloud Data Flow is a Microservice-based Streaming and Batch data processing for Kubernetes. Testing complex technologies for streaming and batch data pipelines. The data pipelines consist of apps/streams built using the Spring Cloud Stream.",
    logo: "spring-cloud-dataflow.png",
    url: "https://spring.io/projects/spring-cloud-dataflow",
  },
  Storybook: {
    description:
      "Storybook is an open source tool for developing UI components in isolation. It offers a rich set of features to help you build better components.",
    why:
      "We use Storybook because it is the standard platform across the Front-end landscape. It has a huge array of plugins for automating such things as accessibility checks, Figma integration. Storybook allows us to display our Front-end components in a consistent way so that engineers can quickly and easily understand how a component is supposed to look and behave, and the flexibility it offers through Props. ",
    label: "Storybook",
    id: "storybook",
    logo: "storybook.png",
    url: "https://storybook.js.org/",
  },
  testContainers: {
    label: "TestContainers",
    id: "testContainers",
    description:
      "Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.",
    logo: "testcontained.svg",
    why:
      "A Java library that supports JUnit tests, providing lightweight, throwaway instances of anything that can run in a Docker container.",

    url: "https://www.testcontainers.org/",
  },
  testRestTemplate: {
    label: "testRestTemplate",
    id: "testRestTemplate",
    description:
      "Convenient alternative of RestTemplate that is suitable for integration tests.",
    logo: "spring.png",
    why:
      "Integration tests form part of the code base repo for REST services are developed using Springboot. This has allowed some Waitrose Digital teams to move from RestAssured to TestRestTemplate which is part of Spring’s Test Framework which comes bundled with the ‘spring-boot-starter-test’ dependency.",

    url:
      "https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/test/web/client/TestRestTemplate.html",
  },
  Typescript: {
    label: "TypeScript",
    id: "typescript",
    description:
      "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly. Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.",
    why:
      "TypeScript is becoming more and more popular across the Front-end landscape, especially in frameworks and OSS libraries. It provides an additional level of type safety and documentation which some people prefer, but this does come at the cost of complexity and more time spent writing code. TypeScript is now the default choice for all new front-end applications. It will be retro-actively added to existing projects in an incremental way.",
    logo: "typescript.png",
    url: "https://www.typescriptlang.org",
  },
  unirest: {
    label: "unirest",
    id: "unirest",
    description: "Unirest is a lightweight HTTP client library from Mashape",
    logo: "unirest.png",
    why:
      "Unirest is available in multiple languages. Unirest-java is used to develop Integration BE automated tests inside Springboot and lambda application codebase.The beauty of Unirest is support for 8 different programming language and and capabilities of inbuilt and configurable methods to handle runtime code, Async request, error handling etc.",
    url: "http://kong.github.io/unirest-java/",
  },
  victoriaMetrics: {
    label: "Victoria Metrics AlertManager",
    id: "victoria-metrics-alertmanager",
    description:
      "VictoriaMetrics release an equivalent to Prometheus' own AlertManager component, which provides rich alerting rules / receivers",
    logo: "victoria.png",
    why:
      "Team should adopt a position of consolidating all its alerting through a dedicated alerts rules engine, for testability primarily ('Alerts as Code')",
    url: "https://victoriametrics.com/",
  },
  Wave: {
    label: "Wave",
    id: "wave",
    description:
      "The WAVE Chrome, Firefox, and Edge extensions allows you to evaluate web content for accessibility issues directly within your browser.",
    logo: "wave.jpeg",
    why:
      "Chrome extension for A11y. Can be confusing but good for checking Page Structure.",

    url: "https://wave.webaim.org/",
  },
  WebDeveloperTools: {
    label: "Web Developer Tools",
    id: "webDeveloperTools",
    description:
      "These tools provide good inbrowser observability for Exploratory testing in both test layers and production. Chrome Dev Tools is probably the best known of these tools but #comm-testing maintains a Confluence page with a good overview of other options.",
    logo: "chromedevtools.jpeg",
    why:
      "To see what's happening in real time on our website What experiments are triggering? Who owns a pdp (product page)? To allow us to experiment and see the results How does this look on mobile?What happens if customer loses connection at this point ?To be able to help investigate why something is behaving as it does and resolve bugs or problemsIs the page performing well?Does a page meet accessibility measures?  ",

    url: "https://developer.chrome.com/docs/devtools/",
  },
  Webdriver: {
    label: "WebdriverIO",
    id: "webdriver",
    description:
      "WebdriverIO allows you to automate any application written with modern web frameworks such as React, Angular, Polymeror Vue.js as well as native mobile applications for Android and iOS",
    logo: "webdriver.png",
    why:
      "WebdriverIO (not to be confused with Webdriver) is simple to use and the code syntax is easily understandable. WebdriverIO is good for Journey Tests across multiple applications. All members of Front End teams are encouraged to contribute to the tests and WebdriverIO. It provides all the essential features of Selenium alongside with additional features and works great for web applications such as the John Lewis website. It is also has better compatibility with Browserstack than most other tools. Finally it has a good community with great support and enthusiastic developers that keep adding to the test framework.",
    url: "https://webdriver.io/",
  },
  wiremock: {
    id: "wireMock",
    label: "WireMock",
    description:
      "WireMock is a simulator for HTTP-based APIs. Some might consider it a service virtualization tool or a mock server. ",
    why:
      "A simulator for HTTP-based APIs. Some might consider it a service virtualization tool or a mock server. For teams using http4k it's very easy to create mock servers in tests using the library itself, and is much lighter weight/easier. There may be equivalents in other frameworks.",
    logo: "wiremock.png",
    url: "http://wiremock.org/",
  },
  xcode: {
    label: "Xcode",
    id: "xcode",
    description:
      "Xcode includes everything developers need to create great applications for Mac, iPhone, iPad, Apple TV, and Apple Watch. Xcode provides developers a unified workflow for user interface design, coding, testing, and debugging. The Xcode IDE combined with the Swift programming language make developing apps easy and fun.",
    logo: "xcode.png",
    why:
      "De facto standard for iOS development. From a testing perspective xCode Accessibility uses the same APIs accessibility clients use to get information from the accessibility objects it encounters. xCode can also used to debug crashes that are reported in tools such as New Relic.",

    url: "https://developer.apple.com/xcode/",
  },
  xCodeInstruments: {
    label: "Xcode Instruments",
    id: "xCodeInstruments",
    description:
      "The Instruments app, which is included with Xcode, gathers data from your running app and presents it in a graphical timeline.",
    logo: "",
    why:
      "Instruments is a powerful and flexible performance-analysis and testing tool that’s part of the Xcode tool set",

    url:
      "https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/MeasuringPerformance.html",
  },
  xcTest: {
    label: "XCtest",
    id: "xctest",
    description:
      "Create and run unit tests, performance tests, and UI tests for your Xcode project.",
    logo: "xctest.jpeg",
    why:
      "De facto standard for iOS development allowing for automation of a wide range of test types",

    url: "https://developer.apple.com/documentation/xctest",
  },
  xcUItest: {
    label: "XCUITest",
    id: "xcUItest",
    description:
      "XCUITest is a UI testing framework launched by Apple in 2015. With XCUITest, we can create automated tests for iOS apps using Swift.",
    logo: "xctest.jpeg",
    why:
      "XCUITest allow teams to run journey tests. This can include running them against production APIs as well as exercise real network conditions (with prior agreement). XCUITests also uses your app’s accessibility tree, meaning that any well-written XCUITest also acts as an accessibility test. This includes when you’re finding an element on screen you should always use the element’s label. Compatibility tests can also be written in XCUITest",

    url:
      "https://medium.com/xcuitest/whats-xcuitest-and-why-is-it-so-important-47ad9502365c",
  },
  zap: {
    label: "ZAP",
    id: "zap",
    description:
      "OWASP ZAP is an open-source web application security scanner. It is intended to be used by both those new to application security as well as professional penetration testers. It is one of the most active Open Web Application Security Project projects and has been given Flagship status.",
    logo: "zapproxy.jpeg",
    why:
      "Contrast is good security testing tool of choice. However ZAP may offer some functionality that Contrast does not yet support. This may include use cases such as DAST.",
    url: "https://www.zaproxy.org/getting-started/",
  },
};

export default Description;
