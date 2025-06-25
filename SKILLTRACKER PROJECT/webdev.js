// Course data with 10 questions per level
const courseData = [
    {
        id: 1,
        title: "HTML Foundations",
        description: "Structure the web",
        icon: "fa-code",
        videoId: "qz0aGYrrlhU",
        locked: false,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand HTML document structure",
            "Learn essential HTML tags",
            "Create links and navigation",
            "Build forms for user input",
            "Work with semantic elements",
            "Understand accessibility basics",
            "Create tables for data display",
            "Embed multimedia content",
            "Use meta tags effectively",
            "Validate HTML documents"
        ],
        quiz: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language",
                    "Hyper Text Making Language"
                ],
                answer: 0
            },
            {
                question: "Which tag is used to create a hyperlink?",
                options: [
                    "<link>",
                    "<a>",
                    "<hl>",
                    "<hyperlink>"
                ],
                answer: 1
            },
            {
                question: "What is the correct HTML element for the largest heading?",
                options: [
                    "<h6>",
                    "<heading>",
                    "<h1>",
                    "<head>"
                ],
                answer: 2
            },
            {
                question: "Which HTML element is used to define important text?",
                options: [
                    "<important>",
                    "<b>",
                    "<strong>",
                    "<i>"
                ],
                answer: 2
            },
            {
                question: "Which HTML element defines the title of a document?",
                options: [
                    "<meta>",
                    "<title>",
                    "<head>",
                    "<header>"
                ],
                answer: 1
            },
            {
                question: "What is the correct HTML for creating a checkbox?",
                options: [
                    "<input type='check'>",
                    "<checkbox>",
                    "<input type='checkbox'>",
                    "<check>"
                ],
                answer: 2
            },
            {
                question: "Which HTML element is used to define a table row?",
                options: [
                    "<td>",
                    "<th>",
                    "<tr>",
                    "<table-row>"
                ],
                answer: 2
            },
            {
                question: "Which attribute specifies an alternate text for an image?",
                options: [
                    "src",
                    "alt",
                    "title",
                    "href"
                ],
                answer: 1
            },
            {
                question: "Which HTML5 element is used for sidebar content?",
                options: [
                    "<sidebar>",
                    "<aside>",
                    "<section>",
                    "<div>"
                ],
                answer: 1
            },
            {
                question: "Which HTML element is used to define a list item?",
                options: [
                    "<ul>",
                    "<ol>",
                    "<li>",
                    "<dl>"
                ],
                answer: 2
            }
        ]
    },
    {
        id: 2,
        title: "CSS Styling",
        description: "Make it beautiful",
        icon: "fa-palette",
        videoId: "yfoY53QXEnI",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand CSS selectors",
            "Learn box model fundamentals",
            "Style text and backgrounds",
            "Create basic layouts",
            "Work with flexbox",
            "Understand CSS positioning",
            "Use CSS variables",
            "Create animations",
            "Implement responsive design",
            "Optimize CSS performance"
        ],
        quiz: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                answer: 2
            },
            {
                question: "Which property is used to change the background color?",
                options: [
                    "bgcolor",
                    "color",
                    "background-color",
                    "bg-color"
                ],
                answer: 2
            },
            {
                question: "How do you select an element with id 'demo'?",
                options: [
                    ".demo",
                    "#demo",
                    "*demo",
                    "demo"
                ],
                answer: 1
            },
            {
                question: "Which property is used to change the font of an element?",
                options: [
                    "font-family",
                    "font-style",
                    "text-font",
                    "font"
                ],
                answer: 0
            },
            {
                question: "How do you make each word in a text start with a capital letter?",
                options: [
                    "text-transform: capitalize",
                    "text-transform: uppercase",
                    "text-style: capital",
                    "font-variant: small-caps"
                ],
                answer: 0
            },
            {
                question: "Which property is used to change the left margin of an element?",
                options: [
                    "margin-left",
                    "padding-left",
                    "indent",
                    "left-margin"
                ],
                answer: 0
            },
            {
                question: "How do you display hyperlinks without an underline?",
                options: [
                    "a {text-decoration: none}",
                    "a {underline: none}",
                    "a {decoration: no-underline}",
                    "a {text-style: no-underline}"
                ],
                answer: 0
            },
            {
                question: "Which property controls the space between lines of text?",
                options: [
                    "line-height",
                    "spacing",
                    "text-space",
                    "line-spacing"
                ],
                answer: 0
            },
            {
                question: "How do you make a flexbox container?",
                options: [
                    "display: flexbox",
                    "display: flex",
                    "display: inline-flex",
                    "display: box"
                ],
                answer: 1
            },
            {
                question: "Which property specifies the stack order of elements?",
                options: [
                    "z-index",
                    "stack-order",
                    "element-index",
                    "order"
                ],
                answer: 0
            }
        ]
    },
    {
        id: 3,
        title: "Responsive Design",
        description: "Adapt to all screens",
        icon: "fa-mobile-alt",
        videoId: "srvUrASNj0s",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand media queries",
            "Learn responsive units",
            "Create flexible grids",
            "Implement mobile-first design",
            "Work with viewport settings",
            "Create responsive images",
            "Understand breakpoints",
            "Use CSS Grid for layouts",
            "Implement responsive typography",
            "Test responsive designs"
        ],
        quiz: [
            {
                question: "What is the purpose of media queries in CSS?",
                options: [
                    "To apply styles based on device characteristics",
                    "To create animations",
                    "To define variables",
                    "To import other CSS files"
                ],
                answer: 0
            },
            {
                question: "Which viewport meta tag is essential for responsive design?",
                options: [
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
                    "<meta name='responsive' content='true'>",
                    "<meta name='mobile' content='yes'>",
                    "<meta name='scale' content='1.0'>"
                ],
                answer: 0
            },
            {
                question: "Which CSS unit is most flexible for responsive layouts?",
                options: [
                    "px",
                    "em",
                    "rem",
                    "vw"
                ],
                answer: 3
            },
            {
                question: "What is the mobile-first approach?",
                options: [
                    "Designing for mobile first then enhancing for larger screens",
                    "Making mobile versions of desktop sites",
                    "Creating separate mobile and desktop sites",
                    "Using only mobile-friendly features"
                ],
                answer: 0
            },
            {
                question: "Which CSS property enables flexible box layout?",
                options: [
                    "flex-layout",
                    "box-flex",
                    "display: flex",
                    "flex-display"
                ],
                answer: 2
            },
            {
                question: "What does REM stand for in CSS?",
                options: [
                    "Root Element Measurement",
                    "Relative EM",
                    "Root EM",
                    "Responsive EM"
                ],
                answer: 2
            },
            {
                question: "Which property defines the number of columns in a grid?",
                options: [
                    "grid-columns",
                    "grid-template-columns",
                    "columns",
                    "grid-cols"
                ],
                answer: 1
            },
            {
                question: "What is a common breakpoint for tablets?",
                options: [
                    "480px",
                    "768px",
                    "1024px",
                    "1200px"
                ],
                answer: 1
            },
            {
                question: "Which HTML element is used for responsive images?",
                options: [
                    "<responsive-img>",
                    "<picture>",
                    "<flex-img>",
                    "<img> with srcset"
                ],
                answer: 3
            },
            {
                question: "Which CSS feature helps create fluid typography?",
                options: [
                    "calc()",
                    "clamp()",
                    "min()",
                    "max()"
                ],
                answer: 1
            }
        ]
    },
    {
        id: 4,
        title: "JavaScript Basics",
        description: "Add interactivity",
        icon: "fa-code-branch",
        videoId: "W6NZfCO5SIk",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand JavaScript syntax",
            "Learn variables and data types",
            "Work with functions",
            "Control program flow",
            "Understand scope and hoisting",
            "Work with arrays",
            "Manipulate objects",
            "Handle errors",
            "Use modern ES6+ features",
            "Debug JavaScript code"
        ],
        quiz: [
            {
                question: "Which of the following is NOT a JavaScript data type?",
                options: [
                    "Number",
                    "String",
                    "Boolean",
                    "Float"
                ],
                answer: 3
            },
            {
                question: "How do you declare a variable in JavaScript?",
                options: [
                    "variable x;",
                    "v x;",
                    "let x;",
                    "x = variable;"
                ],
                answer: 2
            },
            {
                question: "Which operator is used for strict equality comparison?",
                options: [
                    "==",
                    "===",
                    "=",
                    "!=="
                ],
                answer: 1
            },
            {
                question: "What will typeof null return?",
                options: [
                    "null",
                    "undefined",
                    "object",
                    "string"
                ],
                answer: 2
            },
            {
                question: "Which method removes the last element from an array?",
                options: [
                    "pop()",
                    "shift()",
                    "remove()",
                    "delete()"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of the 'this' keyword?",
                options: [
                    "Refers to the current function",
                    "Refers to the parent object",
                    "Refers to the global object",
                    "Refers to the current object context"
                ],
                answer: 3
            },
            {
                question: "Which symbol is used for template literals?",
                options: [
                    "''",
                    "\"\"",
                    "``",
                    "()"
                ],
                answer: 2
            },
            {
                question: "What does the Array.map() method do?",
                options: [
                    "Creates a new array with transformed elements",
                    "Filters array elements",
                    "Reduces array to a single value",
                    "Sorts array elements"
                ],
                answer: 0
            },
            {
                question: "Which statement stops a loop iteration?",
                options: [
                    "break",
                    "stop",
                    "continue",
                    "exit"
                ],
                answer: 2
            },
            {
                question: "What is the purpose of the 'use strict' directive?",
                options: [
                    "Enables strict mode for more secure code",
                    "Enforces type checking",
                    "Makes variables immutable",
                    "Disables certain features"
                ],
                answer: 0
            }
        ]
    },
    {
        id: 5,
        title: "DOM Manipulation",
        description: "Control the page",
        icon: "fa-project-diagram",
        videoId: "0ik6X4DJKCc",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand the DOM tree",
            "Select and modify elements",
            "Handle events",
            "Create dynamic content",
            "Work with forms",
            "Understand event delegation",
            "Manipulate styles and classes",
            "Create animations with JavaScript",
            "Work with browser storage",
            "Understand the event loop"
        ],
        quiz: [
            {
                question: "What does DOM stand for?",
                options: [
                    "Document Object Model",
                    "Data Object Model",
                    "Display Object Management",
                    "Document Orientation Model"
                ],
                answer: 0
            },
            {
                question: "Which method selects the first element with a specific class?",
                options: [
                    "document.getElementById()",
                    "document.querySelector()",
                    "document.getElementsByClassName()[0]",
                    "document.findElement()"
                ],
                answer: 1
            },
            {
                question: "How do you change the text content of an element?",
                options: [
                    "element.text = 'new text'",
                    "element.innerHTML = 'new text'",
                    "element.textContent = 'new text'",
                    "element.value = 'new text'"
                ],
                answer: 2
            },
            {
                question: "Which method creates a new element?",
                options: [
                    "document.create()",
                    "document.newElement()",
                    "document.createElement()",
                    "document.addElement()"
                ],
                answer: 2
            },
            {
                question: "What is event bubbling?",
                options: [
                    "Events moving from target to document root",
                    "Multiple events firing simultaneously",
                    "Events triggering other events",
                    "Events moving from document root to target"
                ],
                answer: 0
            },
            {
                question: "Which method adds an event listener?",
                options: [
                    "element.addEventListener()",
                    "element.attachEvent()",
                    "element.onEvent()",
                    "element.listen()"
                ],
                answer: 0
            },
            {
                question: "How do you prevent a form from submitting?",
                options: [
                    "event.stop()",
                    "event.preventDefault()",
                    "form.cancelSubmit()",
                    "return false"
                ],
                answer: 1
            },
            {
                question: "Which property gets the parent of an element?",
                options: [
                    "element.parent",
                    "element.parentElement",
                    "element.parentNode",
                    "element.up()"
                ],
                answer: 2
            },
            {
                question: "What does localStorage do?",
                options: [
                    "Stores data temporarily",
                    "Stores data permanently in the browser",
                    "Stores data on the server",
                    "Stores data in cookies"
                ],
                answer: 1
            },
            {
                question: "Which method is used to make HTTP requests?",
                options: [
                    "window.fetch()",
                    "document.request()",
                    "XMLHttpRequest()",
                    "All of the above"
                ],
                answer: 3
            }
        ]
    },
    {
        id: 6,
        title: "APIs & Fetch",
        description: "Connect to data",
        icon: "fa-exchange-alt",
        videoId: "cuEtnrL9-H0",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand REST APIs",
            "Make GET requests",
            "Handle JSON data",
            "Error handling",
            "Work with authentication",
            "Understand CORS",
            "Use fetch API",
            "Work with async/await",
            "Implement pagination",
            "Optimize API calls"
        ],
        quiz: [
            {
                question: "What does API stand for?",
                options: [
                    "Application Programming Interface",
                    "Automated Programming Interface",
                    "Application Process Integration",
                    "Automated Process Integration"
                ],
                answer: 0
            },
            {
                question: "Which method is used to make a GET request with Fetch API?",
                options: [
                    "fetch.get()",
                    "fetch()",
                    "fetch.GET()",
                    "fetch.request()"
                ],
                answer: 1
            },
            {
                question: "What does the .json() method do on a fetch response?",
                options: [
                    "Converts the response to JSON",
                    "Validates the JSON",
                    "Sends JSON data",
                    "Parses the JSON"
                ],
                answer: 3
            },
            {
                question: "What is CORS?",
                options: [
                    "Cross-Origin Resource Sharing",
                    "Cross-Origin Request Security",
                    "Cross-Origin Response Standard",
                    "Cross-Origin Resource Security"
                ],
                answer: 0
            },
            {
                question: "Which HTTP status code indicates success?",
                options: [
                    "200",
                    "404",
                    "500",
                    "302"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of async/await?",
                options: [
                    "To make synchronous code asynchronous",
                    "To handle asynchronous code synchronously",
                    "To create parallel execution",
                    "To improve performance"
                ],
                answer: 1
            },
            {
                question: "Which header is used for authentication?",
                options: [
                    "Authentication",
                    "Authorization",
                    "Auth-Token",
                    "Token"
                ],
                answer: 1
            },
            {
                question: "What does REST stand for?",
                options: [
                    "Representational State Transfer",
                    "Remote Execution State Transfer",
                    "Representational Endpoint Standard Transfer",
                    "Remote State Transfer"
                ],
                answer: 0
            },
            {
                question: "Which method updates an existing resource?",
                options: [
                    "POST",
                    "PUT",
                    "UPDATE",
                    "PATCH"
                ],
                answer: 1
            },
            {
                question: "What is the purpose of query parameters?",
                options: [
                    "To send data in the URL",
                    "To authenticate requests",
                    "To modify request headers",
                    "To specify response format"
                ],
                answer: 0
            }
        ]
    },
    {
        id: 7,
        title: "React Fundamentals",
        description: "Build modern UIs",
        icon: "fa-react",
        videoId: "w7ejDZ8SWv8",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand React components",
            "Learn JSX syntax",
            "Manage state",
            "Handle props",
            "Work with lifecycle methods",
            "Create forms",
            "Understand hooks",
            "Implement routing",
            "Manage global state",
            "Optimize performance"
        ],
        quiz: [
            {
                question: "What is React?",
                options: [
                    "A programming language",
                    "A JavaScript library for building UIs",
                    "A database management system",
                    "A CSS framework"
                ],
                answer: 1
            },
            {
                question: "What is used to pass data to a component from outside?",
                options: [
                    "state",
                    "props",
                    "setState",
                    "render"
                ],
                answer: 1
            },
            {
                question: "Which hook is used for side effects in function components?",
                options: [
                    "useState",
                    "useEffect",
                    "useContext",
                    "useReducer"
                ],
                answer: 1
            },
            {
                question: "What is JSX?",
                options: [
                    "JavaScript XML",
                    "A templating language",
                    "A state management library",
                    "A build tool"
                ],
                answer: 0
            },
            {
                question: "Which method is called after a component renders?",
                options: [
                    "componentWillMount",
                    "componentDidMount",
                    "componentRendered",
                    "componentUpdated"
                ],
                answer: 1
            },
            {
                question: "How do you update state in a functional component?",
                options: [
                    "this.setState()",
                    "setState()",
                    "useState() updater function",
                    "updateState()"
                ],
                answer: 2
            },
            {
                question: "What is the virtual DOM?",
                options: [
                    "A lightweight copy of the real DOM",
                    "A shadow DOM implementation",
                    "A browser feature",
                    "A performance optimization technique"
                ],
                answer: 0
            },
            {
                question: "Which package is commonly used for routing?",
                options: [
                    "react-router",
                    "react-navigation",
                    "react-route",
                    "react-routes"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of keys in React lists?",
                options: [
                    "To identify elements uniquely",
                    "To improve performance",
                    "To enable sorting",
                    "All of the above"
                ],
                answer: 3
            },
            {
                question: "Which tool is used to create React apps?",
                options: [
                    "create-react-app",
                    "react-cli",
                    "react-init",
                    "react-new"
                ],
                answer: 0
            }
        ]
    },
    {
        id: 8,
        title: "Backend Basics",
        description: "Node.js & Express",
        icon: "fa-server",
        videoId: "Oe421EPjeBE",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand server-side JavaScript",
            "Create basic API endpoints",
            "Handle routes",
            "Middleware concepts",
            "Work with databases",
            "Implement authentication",
            "Handle file uploads",
            "Create RESTful APIs",
            "Implement error handling",
            "Deploy Node.js applications"
        ],
        quiz: [
            {
                question: "What is Node.js?",
                options: [
                    "A frontend JavaScript framework",
                    "A JavaScript runtime built on Chrome's V8 engine",
                    "A database system",
                    "A package manager"
                ],
                answer: 1
            },
            {
                question: "Which command initializes a new Node.js project?",
                options: [
                    "node init",
                    "npm start",
                    "npm init",
                    "node new"
                ],
                answer: 2
            },
            {
                question: "What is Express?",
                options: [
                    "A frontend framework",
                    "A database ORM",
                    "A web application framework for Node.js",
                    "A testing library"
                ],
                answer: 2
            },
            {
                question: "Which method handles GET requests in Express?",
                options: [
                    "app.get()",
                    "app.post()",
                    "app.handleGet()",
                    "app.route()"
                ],
                answer: 0
            },
            {
                question: "What is middleware in Express?",
                options: [
                    "Functions that have access to request and response objects",
                    "Database connection handlers",
                    "Template rendering engines",
                    "Error handling functions"
                ],
                answer: 0
            },
            {
                question: "Which package is commonly used for environment variables?",
                options: [
                    "env",
                    "dotenv",
                    "config",
                    "process-env"
                ],
                answer: 1
            },
            {
                question: "What does req.params contain?",
                options: [
                    "Query parameters",
                    "Route parameters",
                    "Form data",
                    "Request headers"
                ],
                answer: 1
            },
            {
                question: "How do you send a JSON response in Express?",
                options: [
                    "res.json()",
                    "res.sendJSON()",
                    "res.response()",
                    "res.return()"
                ],
                answer: 0
            },
            {
                question: "Which status code indicates 'Not Found'?",
                options: [
                    "200",
                    "404",
                    "500",
                    "302"
                ],
                answer: 1
            },
            {
                question: "What is the purpose of package.json?",
                options: [
                    "To store project metadata and dependencies",
                    "To configure the Node.js runtime",
                    "To define API endpoints",
                    "To store environment variables"
                ],
                answer: 0
            }
        ]
    },
    {
        id: 9,
        title: "Databases",
        description: "Store your data",
        icon: "fa-database",
        videoId: "HXV3zeQKqGY",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Understand relational databases",
            "Learn basic SQL queries",
            "NoSQL concepts",
            "Database design principles",
            "Work with ORMs",
            "Implement migrations",
            "Understand transactions",
            "Optimize queries",
            "Handle database security",
            "Backup and restore data"
        ],
        quiz: [
            {
                question: "Which SQL statement retrieves data from a database?",
                options: [
                    "GET",
                    "SELECT",
                    "RETRIEVE",
                    "FIND"
                ],
                answer: 1
            },
            {
                question: "What is a primary key?",
                options: [
                    "A key that opens the database",
                    "A unique identifier for each record in a table",
                    "The first column in a table",
                    "A password for the database"
                ],
                answer: 1
            },
            {
                question: "Which NoSQL database uses JSON-like documents?",
                options: [
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "SQLite"
                ],
                answer: 2
            },
            {
                question: "What does SQL stand for?",
                options: [
                    "Structured Query Language",
                    "Simple Query Language",
                    "Standard Query Language",
                    "System Query Language"
                ],
                answer: 0
            },
            {
                question: "Which clause filters records in SQL?",
                options: [
                    "FILTER",
                    "WHERE",
                    "HAVING",
                    "CONDITION"
                ],
                answer: 1
            },
            {
                question: "What is an ORM?",
                options: [
                    "Object-Relational Mapping",
                    "Object-Request Model",
                    "Operation-Resource Management",
                    "Object-Record Mapping"
                ],
                answer: 0
            },
            {
                question: "Which command creates a new table?",
                options: [
                    "CREATE TABLE",
                    "NEW TABLE",
                    "ADD TABLE",
                    "DEFINE TABLE"
                ],
                answer: 0
            },
            {
                question: "What is a foreign key?",
                options: [
                    "A key that references another table's primary key",
                    "A key that is not primary",
                    "A key that is encrypted",
                    "A key that is unique"
                ],
                answer: 0
            },
            {
                question: "Which operator combines multiple conditions?",
                options: [
                    "AND",
                    "OR",
                    "NOT",
                    "All of the above"
                ],
                answer: 3
            },
            {
                question: "What is normalization?",
                options: [
                    "The process of organizing data to reduce redundancy",
                    "The process of encrypting data",
                    "The process of backing up data",
                    "The process of optimizing queries"
                ],
                answer: 0
            }
        ]
    },
    {
        id: 10,
        title: "Capstone Project",
        description: "Build a full app",
        icon: "fa-rocket",
        videoId: "GDa8kZLNhJ4",
        locked: true,
        completed: false,
        progress: 0,
        learningPoints: [
            "Plan a full-stack application",
            "Implement frontend and backend",
            "Connect to database",
            "Deploy your project",
            "Implement user authentication",
            "Create responsive UI",
            "Handle form validation",
            "Implement error handling",
            "Optimize performance",
            "Test the application"
        ],
        quiz: [
            {
                question: "What is the first step in planning a web application?",
                options: [
                    "Writing code",
                    "Choosing a color scheme",
                    "Defining requirements",
                    "Setting up the database"
                ],
                answer: 2
            },
            {
                question: "Which is NOT a common project structure?",
                options: [
                    "MVC (Model-View-Controller)",
                    "Client-Server",
                    "Monolithic",
                    "Single-File"
                ],
                answer: 3
            },
            {
                question: "What is version control important for?",
                options: [
                    "Tracking changes and collaborating",
                    "Making the app faster",
                    "Reducing server costs",
                    "Improving SEO"
                ],
                answer: 0
            },
            {
                question: "Which tool is commonly used for version control?",
                options: [
                    "Git",
                    "NPM",
                    "Webpack",
                    "Docker"
                ],
                answer: 0
            },
            {
                question: "What is CI/CD?",
                options: [
                    "Continuous Integration/Continuous Deployment",
                    "Code Inspection/Code Deployment",
                    "Component Integration/Component Development",
                    "Continuous Improvement/Continuous Development"
                ],
                answer: 0
            },
            {
                question: "Which platform is commonly used for deployment?",
                options: [
                    "GitHub",
                    "Heroku",
                    "Netlify",
                    "All of the above"
                ],
                answer: 3
            },
            {
                question: "What is the purpose of unit testing?",
                options: [
                    "To test individual components",
                    "To test the entire application",
                    "To test user interfaces",
                    "To test database connections"
                ],
                answer: 0
            },
            {
                question: "Which is NOT a common authentication method?",
                options: [
                    "JWT",
                    "OAuth",
                    "Session-based",
                    "HTML-based"
                ],
                answer: 3
            },
            {
                question: "What is the purpose of environment variables?",
                options: [
                    "To store sensitive configuration",
                    "To define CSS variables",
                    "To create global JavaScript variables",
                    "To configure the operating system"
                ],
                answer: 0
            },
            {
                question: "Which tool is commonly used for containerization?",
                options: [
                    "Docker",
                    "Webpack",
                    "Babel",
                    "ESLint"
                ],
                answer: 0
            }
        ]
    }
];

// DOM Elements
const levelsContainer = document.querySelector('.levels-container');
const levelModal = document.getElementById('levelModal');
const modalTitle = document.getElementById('modalTitle');
const levelVideo = document.getElementById('levelVideo');
const learningPoints = document.getElementById('learningPoints');
const quizContainer = document.getElementById('quizContainer');
const quizQuestions = document.getElementById('quizQuestions');
const submitQuiz = document.getElementById('submitQuiz');
const quizResult = document.getElementById('quizResult');
const completionMessage = document.getElementById('completionMessage');
const nextLevelBtn = document.getElementById('nextLevel');
const closeModal = document.querySelector('.close-modal');
const backToCourse = document.getElementById('backToCourse');
const startCourseBtn = document.getElementById('startCourse');
const progressCircle = document.querySelector('.progress-circle');
const userProgressText = document.querySelector('.user-progress span:last-child');
const certProgress = document.getElementById('certProgress');

// Current level tracking
let currentLevel = null;
let userAnswers = [];

// Initialize the course
function initCourse() {
    renderLevels();
    
    // Event listeners
    closeModal.addEventListener('click', () => {
        levelModal.style.display = 'none';
    });
    
    backToCourse.addEventListener('click', () => {
        levelModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === levelModal) {
            levelModal.style.display = 'none';
        }
    });
    
    submitQuiz.addEventListener('click', checkQuiz);
    nextLevelBtn.addEventListener('click', completeLevel);
    startCourseBtn.addEventListener('click', startCourse);
}

// Render all levels
function renderLevels() {
    levelsContainer.innerHTML = '';
    
    courseData.forEach(level => {
        const levelCard = document.createElement('div');
        levelCard.className = `level-card ${level.locked ? 'locked' : ''} ${level.completed ? 'completed' : ''}`;
        levelCard.dataset.id = level.id;
        
        levelCard.innerHTML = `
            <div class="level-header">
                <div class="level-icon tooltip">
                    <i class="fas ${level.icon}"></i>
                    <span class="tooltiptext">${level.title}</span>
                </div>
                <div class="level-info">
                    <h3>Level ${level.id}: ${level.title}</h3>
                    <p>${level.description}</p>
                </div>
            </div>
            <div class="level-content">
                <div class="progress-container">
                    <div class="progress-label">
                        <span>Progress</span>
                        <span>${level.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${level.progress}%"></div>
                    </div>
                </div>
                <div class="level-actions">
                    <button class="btn ${level.locked ? 'btn-primary' : 'btn-primary'}" ${level.locked ? 'disabled' : ''}>
                        <i class="fas ${level.locked ? 'fa-lock' : 'fa-play'}"></i> ${level.locked ? 'Locked' : 'Start'}
                    </button>
                </div>
            </div>
        `;
        
        if (!level.locked) {
            levelCard.addEventListener('click', () => openLevel(level.id));
        }
        
        levelsContainer.appendChild(levelCard);
    });
    
    updateOverallProgress();
}

// Open a level modal
function openLevel(levelId) {
    const level = courseData.find(l => l.id === levelId);
    if (!level) return;
    
    currentLevel = level;
    modalTitle.textContent = `Level ${level.id}: ${level.title}`;
    levelVideo.src = `https://www.youtube.com/embed/${level.videoId}?rel=0&enablejsapi=1`;
    
    // Render learning points
    learningPoints.innerHTML = '';
    level.learningPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        learningPoints.appendChild(li);
    });
    
    // Render quiz questions
    quizQuestions.innerHTML = '';
    level.quiz.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, i) => `
                <label class="quiz-option">
                    <input type="radio" name="q${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizQuestions.appendChild(questionDiv);
    });
    
    // Reset quiz state
    userAnswers = [];
    quizResult.style.display = 'none';
    quizResult.innerHTML = '';
    completionMessage.style.display = 'none';
    
    // Show appropriate sections
    quizContainer.style.display = level.completed ? 'none' : 'block';
    
    // Update certification progress
    const completedQuizzes = courseData.filter(l => l.completed).length;
    certProgress.innerHTML = `
        <i class="fas fa-certificate"></i> Certification Progress: ${completedQuizzes}/10 quizzes completed (${Math.round((completedQuizzes/10)*100)}%)
        ${completedQuizzes === 10 ? '<br><i class="fas fa-trophy"></i> Congratulations! You earned your certification!' : ''}
    `;
    
    levelModal.style.display = 'block';
}

// Check quiz answers
function checkQuiz() {
    const level = currentLevel;
    if (!level) return;
    
    // Get user answers
    userAnswers = [];
    let allAnswered = true;
    
    level.quiz.forEach((_, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(parseInt(selectedOption.value));
        } else {
            allAnswered = false;
        }
    });
    
    if (!allAnswered) {
        quizResult.innerHTML = `
            <i class="fas fa-exclamation-circle"></i> Please answer all questions before submitting.
        `;
        quizResult.style.display = 'block';
        quizResult.style.backgroundColor = '#fff3cd';
        quizResult.style.color = '#856404';
        return;
    }
    
    // Calculate score
    let correct = 0;
    level.quiz.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correct++;
        }
    });
    
    const score = Math.round((correct / level.quiz.length) * 100);
    
    // Certification is quiz-based only now (100% required)
    if (score === 100) {
        level.completed = true;
        level.progress = 100;
        
        // Unlock next level if exists
        const nextLevel = courseData.find(l => l.id === level.id + 1);
        if (nextLevel) {
            nextLevel.locked = false;
        }
        
        completionMessage.style.display = 'block';
        quizContainer.style.display = 'none';
        
        // Update certification progress
        const completedQuizzes = courseData.filter(l => l.completed).length;
        certProgress.innerHTML = `
            <i class="fas fa-certificate"></i> Certification Progress: ${completedQuizzes}/10 quizzes completed (${Math.round((completedQuizzes/10)*100)}%)
            ${completedQuizzes === 10 ? '<br><i class="fas fa-trophy"></i> Congratulations! You earned your certification!' : ''}
        `;
    }
    
    // Display result
    quizResult.innerHTML = `
        <i class="fas fa-${score === 100 ? 'check-circle' : 'info-circle'}"></i> 
        You scored ${score}% (${correct} out of ${level.quiz.length} correct)
        ${score === 100 ? '<br><i class="fas fa-star"></i> Perfect score! Level complete!' : '<br><i class="fas fa-redo"></i> Try again to get 100% for certification'}
    `;
    quizResult.style.display = 'block';
    quizResult.style.backgroundColor = score === 100 ? '#d4edda' : '#f8d7da';
    quizResult.style.color = score === 100 ? '#155724' : '#721c24';
    
    // Update UI
    updateOverallProgress();
    renderLevels();
}

// Complete the current level
function completeLevel() {
    levelModal.style.display = 'none';
}

// Update overall progress
function updateOverallProgress() {
    const completedLevels = courseData.filter(level => level.completed).length;
    const totalLevels = courseData.length;
    const overallProgress = Math.round((completedLevels / totalLevels) * 100);
    
    // Update progress circle
    progressCircle.style.background = `conic-gradient(var(--white) ${overallProgress}%, transparent 0%)`;
    progressCircle.querySelector('span').textContent = `${overallProgress}%`;
    
    // Update progress text
    userProgressText.textContent = `Level ${completedLevels} of ${totalLevels}`;
}

// Start the course (unlock first level)
function startCourse() {
    if (courseData[0].locked) {
        courseData[0].locked = false;
        renderLevels();
    }
    openLevel(1);
}

// Initialize the course when DOM is loaded
document.addEventListener('DOMContentLoaded', initCourse);