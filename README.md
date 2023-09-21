# cps490-23f-team7
*Description*: Team 7's Fall 2023 CPS 490  - Group Repository

## About

University of Dayton

Department of Computer Science

CPS 490 -- Capstone I -- Fall 2023

Instructor: Dr. Nick Stiffler

# Case Study: Messenger Application

## Team Members (Individual)

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

## Software Process Management

Include the Trello board with product backlog and sprint cycles in an overview
figure.


Also, include a Gantt chart that reflects the timeline from the Trello board.

### Scrum Process

#### Sprint 0

Duration: 18/09/2023 - 21/09/2023

##### Completed Tasks

1. Research angular.js and react.js for viable technologies
2. Research socket.io and vue.js for viable technologies
3. Use case Diagram and use cases desciptions created.
4. Modify README.md to fulfil requirements for Team assignment 1.

##### Contributions:

1.  Jonathan Pieroni, x hours, contributed in xxx
2.  Daniel Lambert,   x hours, contributed in xxx
3.  Joseph Johnson,   x hours, contributed in xxx
4.  Aaron McClellan,  x hours, contributed in xxx

##### Sprint Retrospective

_Working through the sprints is a continuous improvement process. Discussing
the sprint that has just completed can provide insight/retrospection that will 
make future sprints more efficient. Sprint retrospection is done once a sprint is finished and the
team is ready to start another sprint planning meeting. This discussion can
take up to 1 hour depending on the team size.  Discussing
good things happened during the sprint can improve the team's morale, good
team-collaboration, appreciating someone who did a fantastic job to solve a
blocker issue, work well-organized, helping someone in need. This is to improve
the team's confidence and keep them motivated.  As a team, we can discuss what
has gone wrong during the sprint and come-up with improvement points for the
next sprints. Few points can be like, need to manage time well, need to
prioritize the tasks properly and finish a task in time, incorrect design lead
to multiple reviews and that wasted time during the sprint, team meetings were
too long which consumed most of the effective work hours. We can mention every
problem is in the sprint which is hindering the progress.  Finally, this
meeting should improve your next sprint drastically and understand the team
dynamics well. Mention the bullet points and discuss how to solve it.)_

| Good     |   Could have been better    |  How to improve?  |
|----------|:---------------------------:|------------------:|
|          |                             |                   |

## User Guide/Demo

_(Coming Soon)_
