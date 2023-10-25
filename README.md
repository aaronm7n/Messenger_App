# cps490-23f-team7
*Description*: Team 7's Fall 2023 CPS 490  - Group Repository

## About

University of Dayton

Department of Computer Science

CPS 490 -- Capstone I -- Fall 2023

Instructor: Dr. Nick Stiffler

## Table of Contents
- [Team Members](#team-members)
- [Project Management Information](#project-management-information)
- [Revision History](#revision-history)
- [Overview](#overview)
- [System Analysis](#system-analysis)
- [System Design](#system-design)
- [Implementation](#implementation)
- [Viable Technologies](#viable-technologies)
- [Software Process Managment](#software-process-management)
- [User Guide/Demo](#user-guidedemo)

# Case Study: Messenger Application

## Team Members

1. Jonathan Pieroni | pieronij2@udayton.edu
2. Daniel Lambert   | lambertd4@udayton.edu
3. Joseph Johnson   | johnsonj73@udayton.edu
4. Aaron McClellan  | mcclellana4@udayton.edu

## Project Management Information

Management board (private access will update to correct course number in future): <https://trello.com/b/txjCjXfN/capstone-1-project>

Source code repository (private access): <https://github.com/lambertd4/Capstone1>

## Revision History

| Date     |   Version     |  Description    |
|----------|:-------------:|----------------:|
|09/12/2023|  0.01         | Initial draft   |

## Overview

Currently working on the basis of our project by creating use case diagrams based on our user requirments and doing research on viable web development stacks to use for our messanger application.


## System Analysis

### User Requirements

List user requirements of the project that the team will develop into use cases in later steps.

- A user can register for access 
- A user can login 
- A user can logout
- A logged in user can send a message
- A logged in user can recieve a message
- An unregistered user cannot send or recieve messages

### Use Cases

<p align="center">
    <img  
        style="padding: 0px 0px 0px 20px" 
        width="450" 
        height="450"
        src= "https://i.imgur.com/9AZyuaW.png" />
</p>

Draw the overview use case diagram, and define brief use case description for each use case.

### Use Case Description

- An unregistered user will be able to register and become a registered user but will not be able to send or receive messages while unregistered.

- Once a user is registered they will be able to login, logout, send, and receive messages.

### Overview diagram

_(Coming Soon)_

## System Design

_(Coming Soon)_

### Use-Case Realization

_(Coming soon)_

### Database 

_(Coming soon)_

### User Interface

_(Coming soon)_

## Implementation

For each new sprint cycle, update the implementation of your system (break it
down into subsections). It is helpful if you can include some code snippets to
illustrate the implementation.

Specify the development approach of your team, including programming languages,
database, development, testing, and deployment environments. 

### Deployment

Describe how to deploy your system in a specific platform.

_(Coming soon)_

## Viable Technologies
### Socket.io

#### Core Features
* Reliability (fallback to HTTP long-polling in case the WebSocket connection cannot be established)
* Automatic Reconnection
* Packet Buffering (By default, any event emitted while the Socket is not connected will be buffered until reconnection.) (Can change if needed)
*  Acknowledgments (Events are great, but in some cases you may want a more classic request-response API. In Socket.IO, this feature is named acknowledgements.)
* Broadcasting to all clients or to a subset of clients
* Namespaces (A Namespace is a communication channel that allows you to split the logic of your application over a single shared connection) (Multiplexing)
* Cross-Browser Compatibility
* Error Handling and Connection Resilience

#### Popularity
* 16th most popular in the United States in JavaScript Library category
* 10th most popular in the Top 1 Million sites in JavaScript Library category

#### Learning Curve
* For this we will need to have some basic knowledge of HTML, JavaScript and Node.js
* There are many resources to help us learn this relatively easy and quickly. I've listed a few of them below:
	* https://socket.io/get-started/ 
	* https://github.com/socketio/socket.io
	* https://www.tutorialspoint.com/socket.io/index.htm
	* https://www.tutorialspoint.com/html/index.htm
	* https://www.tutorialspoint.com/javascript/index.htm
	* https://www.tutorialspoint.com/nodejs/index.htm

#### Ease of Integration
* Socket.IO is composed of two parts:
	*  A server that integrates with (or mounts on) the Node.JS HTTP Server  [socket.io](https://github.com/socketio/socket.io)
	*  A client library that loads on the browser side  [socket.io-client](https://github.com/socketio/socket.io-client)

* It supports integration with popular JavaScript frameworks and libraries, such as:
	* React
	* Flutter
	* Backbone.js
	* Angular
	* Gatsby

#### Companies that reportedly use Socket.io:
* Tech Stack
* Patreon
* TradingView
* Trello

#### Future Support 
With six total updates in the year of 2023 alone it is safe to say that this framework still has long-term support and that security, compatibility, and other issues such as bugs are still being taken care of.

#### Cons
* Websocket cons:
    *  Unlike HTTP, WebSocket is stateful. This can be tricky to handle, especially at scale, because it requires the server layer to keep track of each individual WebSocket connection and maintain state information.
    * WebSockets do not automatically recover when connections are terminated, this is something you need to implement yourself, and is part of the reason why there are many WebSocket client-side libraries in existence.
    * Certain environments (such as corporate networks with proxy servers) will block WebSocket connections.
* Scoket.io cons:
    * Socket.IO comes with limited native security features. For example, it doesn't provide end-to-end encryption, and it doesn't offer a mechanism to generate and renew tokens for authentication.
    * Socket.IO is not compatible with any other WebSocket implementation. For example, you can't use a plain WebSocket client with a Socket.IO server; a Socket.IO client will not be able to connect to a plain WebSocket server either.
    * Socket.IO is designed to work in a single region, rather than a multi-region architecture. This can lead to issues such as increased latency (if your users are in different regions), and even system downtime - what happens if the datacenter where you have your Socket.IO servers goes through an outage?

### [vue.js](https://vuejs.org/)

#### Core Features
* **Declarative Rendering**: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.
* **Reactivity**: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.
* **Virtual DOM**: VueJS makes the use of virtual DOM, which is also used by other frameworks such as React, Ember, etc. The changes are not made to the DOM, instead a replica of the DOM is created which is present in the form of JavaScript data structures
* **Data Binding**: The data binding feature helps manipulate or assign values to HTML attributes, change the style, assign classes with the help of binding directive called v-bind available with VueJS.
* **Components**: Components are one of the important features of VueJS that helps create custom elements, which can be reused in HTML.
* **Event Handling**: v-on is the attribute added to the DOM elements to listen to the events in VueJS.
* **Animation/Transition**: VueJS has a built-in transition component that needs to be wrapped around the element for transition effect.
* **Computed Properties**: This is one of the important features of VueJS. It helps to listen to the changes made to the UI elements and performs the necessary calculations. There is no need of additional coding for this.
* **Templates**: VueJS provides HTML-based templates that bind the DOM with the Vue instance data. Vue compiles the templates into virtual DOM Render functions. We can make use of the template of the render functions and to do so we have to replace the template with the render function.
* **Directives**: VueJS has built-in directives such as v-if, v-else, v-show, v-on, v-bind, and v-model, which are used to perform various actions on the frontend.
* **Watchers**: Watchers are applied to data that changes. For example, form input elements. Here, we don’t have to add any additional events. Watcher takes care of handling any data changes making the code simple and fast.
* **Routing**: Navigation between pages is performed with the help of vue-router.
* **Lightweight**: VueJS script is very lightweight and the performance is also very fast.

#### Popularity
* In a survey conducted by stack overflow, vue.js ranked 3rd within the top 5 frameworks developers want to work with in 2022
* In a Jet Brains Survey of 183 countries/regions titled "Top 10 Most-used Web Frameworks in 2021", vue.js won 2nd only falling behind react
* These are the results of two stack overflow surveys based on the popularity of various frameworks over the past 5 years![](https://user-images.githubusercontent.com/643434/175095906-c37bbd04-3493-47aa-abf9-50f047033225.png)
#### Learning Curve
* Requires a somewhat basic understanding of HTML and JavaScript
* vue.js is regarded as a great beginners framework with a lot of power and most say that the learning process is about two weeks for a rudimentary understanding and a month for a more advanced understanding.
* Below I have provided some resources to get started with vue.js:
	* https://vuejs.org/guide/introduction.html
	* https://www.tutorialspoint.com/vuejs/vuejs_quick_guide.htm
	* https://www.vuemastery.com/pricing/?coupon=Elevate40 (Create a free account)
	* https://www.w3schools.com/vue/
#### Ease of Integration
* Vue.js is popular because it lets you integrate it into other frameworks such as React, allowing you to customize the project to suit your needs and requirements.
* May be integrated within any JavaScript project to handle interface design and development while another framework handles more complex task.

#### Companies that reportedly use vue.js:
* Companies using vue.js:
	* Trivago
	* Nintendo
	* Adobe
	* Alibaba
* Applications made with vue.js
	* Netflix
	* Chess.com
	* GitLab
	* Grammarly
	* VICE Video

#### Future Support 
With the overall popularity and the amount of companies using vue.js it is not surprise that they are constantly updating and preparing vue.js for the future, it is safe to say that we do not have to worry about a lack of updates causing us problems.

#### Security Capabilities
* Whether using templates or render functions, content is automatically escaped. Thus preventing the script injection. This escaping is done using native browser APIs, like `textContent`, so a vulnerability can only exist if the browser itself is vulnerable.
* Similarly, dynamic attribute bindings are also automatically escaped. Thus preventing the close of the `title` attribute to inject new, arbitrary HTML. This escaping is done using native browser APIs, like `setAttribute`, so a vulnerability can only exist if the browser itself is vulnerable.

#### Cons
*  Many elements of the framework are only available in Chinese.
* Vues community and development team size is still incomparable with more mature Angular or React. Neither does it enjoy financial support from large enterprises. This makes it hard to produce larger products
* While the ecosystem is pretty wide, and there are all the required tools to start developing with Vue, its still not as big as React or Angular.
* Vue.js is a relatively young technology that just started gaining popularity. But it seems we have to wait a couple of years until its mass adoption with the labor market filled with experienced Vue.js developers.

### Angular

Angular is a MVC(model view controller) architecture. It's primary framework is written in TypeScript, which is very similar to JavaScript. Popular websites that use Angular include: Gmail, Microsoft office applications, and many Samsung built applications. Angular's use in Gmail, and many other Google projects, could be beneficial to know due to it's similarities with the goals of the messenger project.

#### Features
- **Document Object Model(DOM)** Angular's DOM treats an XML or HTML document as a tree structure, with nodes representing parts of the document
- **TypeScript** TypeScript defines a set of types to JavaScript, and is very similar. It is meant to be easier to understand than JavaScript. Angular can run without use of TypeScript, but it is highly recommended to use it
- **Data Binding** Angular uses two way binding, allowing the model state to reflect changes made in their corresponding UI elements, and the UI reflects changes to the model state
- **Jasmine Testing Framework** This framework aims to ease testing with different and effective test cases
- **Components** Every component in an Angular application defines a class that holds the application's logic and data, and defines part of the UI
- **Templates** Angular's template combines markup and HTML in order to modify HTML elements before they are displayed
- **Metadata** Metadata tells angular how to process classes and is used to decorate the class and configure the expected behavior of that class
- **Dependency Injection** Instead of fetching data from the server or logging directly to the console, Angular delegates tasks among it's service classes, which it creates for data that isn't associated with the view but also has to be shared across components

#### Pros
- Uses Typescript, a similar language to JavaScript that aids the maintainability of code
- Familiar with MVC architecture
- Easy unit testing
- Reusable components

#### Cons
- Typescript can be difficult to learn 
- Complicated component management and Angular specific 3rd party libraries 
- Hard learning curve

#### Useful Material
- https://angular.io/tutorial/first-app
- https://www.w3schools.com/angular/
- https://www.simplilearn.com/tutorials/angular-tutorial/what-is-angular

#### Overall
-- Angular is said to have a steeper learning curve than React. It may be good for small to mid sized projects, which our application would fit into, however with the learning curve presented through research of Angular it seems as if maybe for a application meant for gaining an understanding of the development process that maybe Angular is not the right tool for us. 

### React

React is a popular open source JavaScript library.  It is a MVC model and is known for it's improved speed of applications. React is used in several applications, including: Facebook, Netflix, and Yahoo. Similar to Angular's use in Gmail, React's use in Facebook may show that React is suitable for applications like the messenger project.

#### Features
- **Virtual DOM** React's virtual DOM aims to be faster than traditional DOM by only updating objects modified instead of the entire DOM
- **JSX** JSX is a JavaScript syntax extension that allows you to write HTML structures in the same files as JavaScript code
- **Extensions** React contains a very significant database of UI framework that can expand your tools used to program
- **Data Binding** React uses one-way binding, providing a simple undirected dataflow for it's users.
- **Debugging** React is a very popular web development tool, which means that there is a large database of knowledge by the community that supports React. Meta provides a browser extension for simplified debugging in React.
- **Components** Components are React's building blocks for it's UI. React components are built for reusability, nested components, it's render method, and it's passing of properties. Props and State help to aid the dynamic use of it's components
- **Props** Props allow the user to pass arguments or data to components, helping to make them more dynamic. They can only be read, and not changed
- **State** A State is an object that stores property values for those attributed to a component that would change overtime

#### Pros
- Easier to learn and use
- Team experienced with JavaScript language
- Rich JavaScript library
- Virtual DOM, which fixes problems with DOM API updates
- Reusable components


#### Cons
- ReactJS covers only UI layers of app. Need for additional technologies for additional tools
- Use of JSX syntax extension, which is reportedly difficult for developers to learn

#### Useful Material
- https://react.dev/learn/tutorial-tic-tac-toe
- https://www.w3schools.com/REACT/DEFAULT.ASP
- https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs


## Software Process Management

Include the Trello board with product backlog and sprint cycles in an overview
figure.


Also, include a Gantt chart that reflects the timeline from the Trello board.

## Scrum Process

### Scrum Meetings

**Phase 0**
1. Meeting on 9/19/23
	Discussed who Researched and who did work on read me.
	- Danny- Use Case Diagram and README
	- Joe- Angular and React
	- Aaron- Socket and View
	- Jon- Trello Board and some README

**Phase 1**
1. Meeting on 10/24/23
	Discussed who developes each use case. WOrked out work distribution for this phase.
	- Danny- Use Case Diagrams/Descriptions
	- Joe- Login
	- Aaron- Registration
	- Jon- Registration

### Sprint 0

Duration: 18/09/2023 - 21/09/2023

Trello for Sprint 0.


<img  
    style="padding: 0px 0px 0px 20px" 
    src= "https://i.imgur.com/pMLtd9P.png" />

Commits for Sprint 0.
<img  
style="padding: 0px 0px 0px 20px"
src= "https://i.imgur.com/iyQVzya.png" />    

### Sprint 1

Trello for Sprint 1.
Insert Image

Commits for Sprint 1.
Insert Image

#### Completed Tasks

1. Research angular.js and react.js for viable technologies
2. Research socket.io and vue.js for viable technologies
3. Use case Diagram and use cases desciptions created.
4. Modify README.md to fulfil requirements for Team assignment 1.

#### Contributions:

1.  Jonathan Pieroni, x hours, contributed in xxx
2.  Daniel Lambert,   x hours, contributed in xxx
3.  Joseph Johnson,   5 hours, contributed in reasearch of Angular and React, pushed changes to READ.ME
4.  Aaron McClellan,  6 hours, contributed in Socket.io and vue.js research, Modify README.md to meet assignment 1 requirments

#### Sprint Retrospective


| Good     |   Could have been better    |  How to improve?  |
|----------|:---------------------------:|------------------:|
| Once goals were evventually established we excelled at our goals | Initial Goal Orientation  |Establish specific goals between eachother more efficiently|
| Once we had an efficient way of comunicating we had great communication | Meeting planning | Establish a more routine time to meet with the team |
| Met in person at library and capstone room | Library room was very small, Capstone room is other side of campus for all members | Establish meeting place at appropriate sized library room or house |

## User Guide/Demo

_(Coming Soon)_
