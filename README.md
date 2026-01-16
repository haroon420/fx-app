# FX Currency Converter
https://github.com/haroon420/fx-app

This is a web-based currency converter built as part of the Software Engineering Summative Assignment 1.  
Created by Haroon Rashid

---

## 1. Product Proposal

The FX Currency Converter is a web application that allows users to convert an amount from one currency to another.

FX Currency Converters are used by finance professionals who need to complete high-frequency, time-sensitive tasks where usability, accuracy, and trust are critical. 
In professional and business contexts, users often need to check exchange rates repeatedly throughout the day and under time pressure, where even small numerical errors can undermine confidence or lead to costly mistakes. 
Users place a strong emphasis on accuracy, authority, and professionalism, and are less tolerant of cluttered interfaces, excessive steps, or designs that do not inspire confidence. 
Existing solutions frequently overload users with financial jargon or unnecessary features, creating friction. 
This project therefore aims to explore how a minimal interface that can deliver instant FX conversion with simple interactions so users can obtain and share results quickly and confidently. 
By prioritising ease of use and reliability, the application reflects real-world business expectations where time is money.

The application is intended as a lightweight, efficient utility. It is to do one task and do it well.

---
Figma Prototype Link: https://www.figma.com/design/MxXzLLQUenyJLwfXAXWYIZ/FX-Converter-%E2%80%93-Prototype?t=BvJdJ2mh7Qn5JKh5-1

Figma Brainstorming Link: https://www.figma.com/board/juXFun67iailrwz4HHo9Tp/UI_UX_Layout?t=BvJdJ2mh7Qn5JKh5-1

---

## 2. Design & Prototype
The initial design and prototyping phase was undertaken using Figma to explore the problem space, understand user needs, and validate early design assumptions before development began. This phase followed a user-centred design approach, drawing on empathy mapping, personas, user stories, and iterative ideation to ensure that the solution addressed real user concerns rather than purely technical requirements.

### Problem Definition
The design process began with a clear problem statement: users require a simple and reliable way to convert currencies using up-to-date exchange rates, without unnecessary complexity or unclear results. Existing solutions were identified as problematic due to excessive features, financial jargon, advertising, or a lack of transparency around rate sources and update timing, which collectively reduce user trust in the result.
This framing established simplicity, clarity, and trust as the primary design goals.

![Problem statement defining the core user need](docs/figma/problem_statement.png)
*Figure 1: Problem statement identifying key user needs and limitations of existing solutions*

### Empathy Mapping and User Insights
An empathy map was created to explore how a typical user experiences currency conversion tasks across multiple dimensions.
Key insights from the empathy map included:
•	Users operate in time-pressured contexts, frequently checking rates throughout the day.
•	Accuracy is critical, particularly for users who stress that there must be “no mistakes on numbers”.
•	Users are exposed to noisy financial environments and must navigate dense trading interfaces and information overload.
•	Frustrations include too many steps to complete a currency conversion and the inability to quickly reuse or share results.
•	Desired gains centre on instant results, visual clarity, professional presentation, and confidence in the authority of the information.
These insights reinforced the need for a minimal interface that prioritises speed, certainty, and visual restraint.

![Empathy map highlighting user thoughts, frustrations, and goals](docs/figma/Empthay_Map.png)
*Figure 2: Empathy map capturing user behaviours, pains, and desired outcomes*


### Personas and User Stories
To contextualise these findings, a primary persona was defined to represent a time-constrained professional user operating in a fast-paced financial environment. This persona values efficiency, organisation, and analytical clarity, and has little tolerance for unnecessary interaction cost or visual clutter.

![Primary user persona used to guide design decisions](docs/figma/User_Personas.png)
*Figure 3: User persona representing a time-constrained professional user*

From this persona, core user stories were derived, including:
•	As a user, I want to enter an amount and select two currencies so that I can see the converted value.
•	As a user, I want to see the exchange rate and when it was last updated so that I can trust the result.
These stories directly informed the functional scope of the MVP and provided a clear baseline against which features could be prioritised or deferred.

![User stories defining core functional requirements](docs/figma/User_Stories.png)
*Figure 4: User stories used to capture core functional requirements*

### Ideation and Feature Scoping
An ideas board was used to explore potential features. Rather than attempting to implement all ideas at once, features were scoped and staged to support incremental delivery. Core conversion functionality was prioritised for the MVP, while enhancements were tracked as future work via GitHub issues.
This approach ensured alignment with Agile principles while maintaining focus on delivering a coherent and usable minimum viable product.

![Initial ideas board exploring potential features](docs/figma/Ideas.png)
*Figure 5: Early ideation board used to explore possible features and enhancements*

### Prototype and Design Validation
Layouts were created in Figma to explore information hierarchy and user flow. Design validation questions were explicitly considered during this stage, including:
•	Can a first-time user understand what the app does within a few seconds?
•	Is it clear where the user should enter the amount?
•	Is the conversion result easy to identify?
•	Is it obvious which currency is being converted from and to?
•	Is exchange-rate information visible and understandable?
These questions informed layout decisions and reinforced the emphasis on clarity and immediate feedback.

![Design questions used to evaluate usability](docs/figma/Questions_Test_Design.png)
*Figure 6: Design validation questions used to assess clarity and usability*


### MVP Design Decisions
Based on the prototyping work, the initial MVP intentionally focused on a clean, accessible HTML structure using semantic elements. Visual complexity and advanced styling were intentionally deferred to prioritise core functionality, testability, and incremental feature delivery. This allowed development effort to concentrate on the logic, input validation, and testing, while preserving a clear design direction for future iterations.
Screenshots of the Figma artefacts and the running application are included in the docs/ directory as supporting evidence of the design process.

![Figma Design](image-1.png)
*Figure 7: Design in Figma based on brainstorming*

---

## 3. Project Planning & Management
The project was planned and managed using an Agile approach rather than following a sprint framework. GitHub Projects was used as the project management tool to capture requirements  and to visualise progress using a simple Kanban-style board with Todo, In progress, and Done columns.

![GitHub issues used to capture and track project requirements](docs/screenshots/Project_Issues.png)
*Figure 8: GitHub Issues capturing individual features and tasks used to plan and track development work*

Each issue represented a single feature or task, enabling dev work to be broken into units that could be implemented individually. When work on a feature began, the issue was moved to the In progress column, providing indication of active development. Once the feature was completed, the issue was marked as Done.

Although GitHub Projects supports assigning issues to multiple team members to facilitate collaborative development, issues were not assigned in this case as the project was completed by just myself.

---

## 4. Requirements Capture
As mentioned, all requirements for the project were captured as GitHub Issues, providing a clear record of planned work. Each issue represented a single feature or task. This approach ensured that requirements were clearly defined before implementation and could be independently developed, reviewed, and tracked through to completion. Some features, such as the integration of live exchange rates and closer alignment with the Figma prototype, have not yet been started, however, these would follow the same issue-to-implementation workflow as the completed features.

---
 
## 5. MVP Development Process

The MVP was developed incrementally with a clear plan to build from the foundation up. Development began with the creation of a static HTML structure to establish the core layout. This initial step allowed the overall user flow to be validated early.

![Static HTML structure of the initial MVP](docs/screenshots/html.png)
*Figure 9: Static HTML structure created as the first step of MVP implementation*

Once the initial structure was created, JavaScript logic was brought in to perform currency conversions using predefined exchange rates. The plan was to get the basics right before bringing greater levels of complexity such as reliance on external API services.

As development progressed, input validation was introduced to handle invalid, missing, or negative values, ensuring predictable application behaviour and clear feedback to users in error scenarios. 

Additional usability improvements were then implemented, including a currency swap feature and a conversion history list. These were all developed as a discrete unit of work. For these enhancements, new feature branches were created from the main branch, changes were implemented and tested locally, and the branches were pushed to the remote repository for review. 

This workflow ensured that new features could be developed in isolation without destabilising the main codebase.

Throughout development, standard Git commands were used to manage this process, including checking out the main branch, creating feature branches (for example using git checkout -b feature-name), staging and committing changes with git add and git commit, and pushing branches to GitHub using git push. 

Completed features were merged back into the main branch via pull requests once changes were verified and automated tests had passed. This approach reinforced incremental delivery and traceability between requirements, code changes, and completed features.

The application was run locally using VS Code Live Server to support JavaScript modules and enable rapid testing of changes in a browser environment. Overall, this development process prioritised testability and controlled change utilising a professional workflow.

## 6. Testing (Test Driven Development)

Test Driven Development (TDD) was applied to the core currency conversion logic. 

This decision ensured that the critical part of the application, the numerical conversion could be validated independently of the user interface or browser environment.
Automated unit tests were written before and alongside implementation to define the expected behaviour of the conversion function. 

The test suite can be executed locally using the following command:

npm test

![Automated unit test validating the core conversion logic](docs/screenshots/tests.png)
*Figure 10: Unit test for the currency conversion function executed using Node.js’ built-in test runner*

Applying TDD at this level provided a feedback loop during development and ensured that core functionality remained stable as additional features were introduced.

## 7. Continuous Integration (CI)

Continuous Integration (CI) was implemented to automatically verify the stability of the code as changes were introduced. CI ensures that new code works correctly with existing functionality by running automated checks whenever changes are pushed to the repository. In this project, CI was implemented using GitHub Actions, which was configured to install dependencies and execute the automated test suite on every push to the main branch and on all pull requests targeting main.

This setup provided immediate feedback on whether recent changes had introduced errors or caused existing tests to fail. The pipeline demonstrates the principle of Continuous Integration, showing how automated testing and version control combine to support throughout the development process.
 
## 8. Incremental Development (Branches & Pull Requests)

Incremental development was supported using a branch-based workflow and pull requests, allowing features to be developed, reviewed, and integrated in a controlled manner. Rather than making all changes directly on the main branch, new functionality was implemented on dedicated feature branches created from main. This approach enabled individual features, such as usability enhancements and testing improvements, to be developed in isolation without affecting the stability of the core application.

Once changes on a feature branch were complete and tested locally, the branch was pushed to the remote repository and a pull request was opened in GitHub. Pull requests provided a clear record of the changes made and ensured that integration into the main branch only occurred after automated tests had passed via the Continuous Integration pipeline. After a successful merge, the corresponding issue was marked as complete on the project board.

Although the project was developed by a single contributor, the use of branches and pull requests mirrors collaborative team workflows and demonstrates an understanding of how larger software projects manage parallel development and reduce integration risk.

## 9. User Documentation
The FX Currency Converter is designed to be simple and intuitive, requiring minimal user interaction or distraction to complete a conversion. To use the application, the user first opens the application in a web browser (at this point, it is recommended to use VS Code Live Server or equivalent). 

The user then enters a numerical amount into the input field and selects the source and target currencies using the provided dropdown menus. Once these values are selected, clicking the Convert button immediately displays the converted amount.

If the user enters an invalid value, such as a non-numeric or negative amount, the application displays a clear error message. Additional usability features are included to support frequent use. The swap currencies button allows users to quickly reverse the selected currencies, and a conversion history list records recent successful conversions so users can easily reference previous results without re-entering values.

The interface is intentionally minimal to reduce cognitive overload and avoid unnecessary distractions. This ensures that users can obtain accurate conversion results quickly and confidently, even when performing repeated checks in time-pressured situations.


## 10. Technical Documentation
This application is intended to be implemented as a client-side web application using standard web technologies. 

### Technology Stack
The project uses:
#### •	HTML to define the structure and semantic layout of the application
#### •	CSS to provide basic styling and support readability
#### •	JavaScript to implement application logic and user interaction
#### •	Node.js to support automated testing
#### •	GitHub Actions to provide Continuous Integration

### Running the Application Locally
The application uses JavaScript modules, which must be served via an HTTP environment to run correctly in modern browsers. During development, the application was run locally using VS Code Live Server. Opening index.html via Live Server ensures that module imports function as expected and allows rapid testing of changes in a browser environment. In a production setting, the same requirement would be satisfied by serving the application from a standard web server. For purposes of the assignment, development stopped short of launching a live service.
### Testing
Automated tests are implemented for the core conversion logic using Node.js’ built-in test runner. Tests are located in the tests/ directory and can be executed from the project root using:
npm test
This approach allows the core logic to be validated independently of the user interface.

### Project Structure
The project is organised as follows:
#### •	index.html – Defines the main user interface and layout
#### •	src/js/app.js – Contains UI logic, event handling, and user interaction
#### •	src/js/converter.js – Contains the core currency conversion logic
#### •	src/css/styles.css – Provides basic styling
#### •	tests/ – Contains automated unit tests
#### •	.github/workflows/ – Contains the CI workflow configuration
#### •	docs/ – Contains design artefacts and screenshots used as evidence

### Continuous Integration
The repository includes a Continuous Integration workflow configured using GitHub Actions. 

## 11. Evaluation
The project is an attempt to demonstrate core software engineering principles through the development of a small but functional web application. The final MVP delivers reliable currency conversion with a clear and minimal interface, while the supporting process artefacts demonstrate structured planning, incremental delivery, automated testing, and Continuous Integration. 

The use of the Agile approach proved effective for managing development in a solo context. Capturing requirements as issues and tracking progress through a project board provided clear visibility of completed, active, and yet to start works. The use of branches and pull requests supported controlled integration of changes and mirrored collaborative workflows commonly used in industry. Automated testing and CI also reinforced development practices.

Not all planned features were implemented within the available time. Enhancements such as integrating live exchange rates and fully aligning the interface with the Figma prototype were unfortunately not able to be effectively delivered. This isn’t a serious concern as the project is considered on-going and reflects realistic software development constraints and demonstrates conscious prioritisation and the skills required to develop and deliver software projects. If the project were extended, these features would form the focus of subsequent development, alongside expanded testing and further user refinements.

The outcome hopefully demonstrates both technical competence and an understanding of software engineering processes.



