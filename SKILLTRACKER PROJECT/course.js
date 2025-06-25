// Course data
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
                    "link tag",
                    "a tag",
                    "hl tag",
                    "hyperlink tag"
                ],
                answer: 1
            },
            {
                question: "What is the correct HTML element for the largest heading?",
                options: [
                    "h6 tag",
                    "heading tag",
                    "h1 tag",
                    "head tag"
                ],
                answer: 2
            },
            {
                question: "Which tag is used to define an unordered list?",
                options: [
                    "ol tag",
                    "list tag",
                    "ul tag",
                    "dl tag"
                ],
                answer: 2
            },
            {
                question: "What is the correct HTML for inserting an image?",
                options: [
                    "img tag with src attribute",
                    "image tag with src attribute",
                    "img tag with href attribute",
                    "picture tag with src attribute"
                ],
                answer: 0
            },
            {
                question: "Which attribute specifies an alternate text for an image?",
                options: [
                    "title",
                    "src",
                    "alt",
                    "longdesc"
                ],
                answer: 2
            },
            {
                question: "Which tag is used to define a table row?",
                options: [
                    "tr tag",
                    "td tag",
                    "th tag",
                    "table-row tag"
                ],
                answer: 0
            },
            {
                question: "Which character is used to indicate an end tag?",
                options: [
                    "*",
                    "/",
                    "less than symbol",
                    "greater than symbol"
                ],
                answer: 1
            },
            {
                question: "Which tag is used to define a paragraph?",
                options: [
                    "para tag",
                    "p tag",
                    "paragraph tag",
                    "pg tag"
                ],
                answer: 1
            },
            {
                question: "Which tag is used to create a line break?",
                options: [
                    "lb tag",
                    "break tag",
                    "br tag",
                    "newline tag"
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
                    "using .demo",
                    "using #demo",
                    "using *demo",
                    "using demo"
                ],
                answer: 1
            },
            {
                question: "Which property is used to change the font of an element?",
                options: [
                    "font-family",
                    "font-style",
                    "font-weight",
                    "text-font"
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
                question: "How do you select all p elements inside a div element?",
                options: [
                    "div.p",
                    "div + p",
                    "div p",
                    "div > p"
                ],
                answer: 2
            },
            {
                question: "Which property is used to change the text color of an element?",
                options: [
                    "text-color",
                    "font-color",
                    "color",
                    "text-style"
                ],
                answer: 2
            },
            {
                question: "How do you display hyperlinks without an underline?",
                options: [
                    "a {text-decoration: no-underline}",
                    "a {underline: none}",
                    "a {text-decoration: none}",
                    "a {decoration: no-underline}"
                ],
                answer: 2
            },
            {
                question: "Which property controls the text size?",
                options: [
                    "text-size",
                    "font-size",
                    "text-style",
                    "size"
                ],
                answer: 1
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
                    "meta name='viewport' content='width=device-width, initial-scale=1.0'",
                    "meta name='responsive' content='true'",
                    "meta name='mobile' content='yes'",
                    "meta name='scale' content='1.0'"
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
                question: "What is a mobile-first approach in responsive design?",
                options: [
                    "Designing for mobile devices first, then scaling up",
                    "Making mobile versions of existing desktop sites",
                    "Using only mobile-friendly colors",
                    "Creating separate sites for mobile and desktop"
                ],
                answer: 0
            },
            {
                question: "Which CSS feature allows flexible box layouts?",
                options: [
                    "Flexbox",
                    "Grid",
                    "Float",
                    "Position"
                ],
                answer: 0
            },
            {
                question: "What does 'em' unit represent in CSS?",
                options: [
                    "Equal to the root element's font size",
                    "Equal to the current element's font size",
                    "Equal to the viewport width",
                    "Equal to 16 pixels"
                ],
                answer: 1
            },
            {
                question: "Which property enables CSS Grid layout?",
                options: [
                    "display: grid",
                    "layout: grid",
                    "display: flex-grid",
                    "grid: true"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of the CSS calc() function?",
                options: [
                    "To perform calculations in property values",
                    "To calculate element positions",
                    "To compute color values",
                    "To determine font sizes"
                ],
                answer: 0
            },
            {
                question: "Which media feature tests for device orientation?",
                options: [
                    "device-orientation",
                    "screen-orientation",
                    "orientation",
                    "device-rotation"
                ],
                answer: 2
            },
            {
                question: "What is the purpose of CSS breakpoints?",
                options: [
                    "Points where the website layout changes",
                    "Points where scripts pause execution",
                    "Points where animations stop",
                    "Points where fonts change size"
                ],
                answer: 0
            }
        ]
    },
    
    {
        id: 4,
        title: "JavaScript Basics",
        description: "Add interactivity",
        icon: "fa-code-branch",
        videoId: "W6NZfCO5SIk", // JavaScript Basics
        locked: true,
        completed: false,
        progress: 0,
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
                    "number"
                ],
                answer: 2
            },
            {
                question: "Which method joins array elements into a string?",
                options: [
                    "join()",
                    "concat()",
                    "merge()",
                    "combine()"
                ],
                answer: 0
            },
            {
                question: "What is the correct way to write a JavaScript array?",
                options: [
                    "var colors = (1:'red', 2:'green', 3:'blue')",
                    "var colors = ['red', 'green', 'blue']",
                    "var colors = 'red', 'green', 'blue'",
                    "var colors = {1:'red', 2:'green', 3:'blue'}"
                ],
                answer: 1
            },
            {
                question: "Which function is used to parse a string to an integer?",
                options: [
                    "parseInteger()",
                    "intParse()",
                    "parseInt()",
                    "toInteger()"
                ],
                answer: 2
            },
            {
                question: "What is the correct syntax for a JavaScript for loop?",
                options: [
                    "for (i = 0; i < 5; i++)",
                    "for (i = 0; i < 5)",
                    "for i = 1 to 5",
                    "for (i <= 5; i++)"
                ],
                answer: 0
            },
            {
                question: "How do you create a function in JavaScript?",
                options: [
                    "function = myFunction()",
                    "function myFunction()",
                    "create myFunction()",
                    "new function myFunction()"
                ],
                answer: 1
            },
            {
                question: "Which event occurs when the user clicks on an HTML element?",
                options: [
                    "onchange",
                    "onclick",
                    "onmouseover",
                    "onmouseclick"
                ],
                answer: 1
            }
        ]
    },
    {
        id: 5,
        title: "DOM Manipulation",
        description: "Control the page",
        icon: "fa-project-diagram",
        videoId: "0ik6X4DJKCc", // DOM Manipulation
        locked: true,
        completed: false,
        progress: 0,
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
                    "document.createElement()",
                    "document.newElement()",
                    "document.addElement()",
                    "document.makeElement()"
                ],
                answer: 0
            },
            {
                question: "How do you add a class to an element?",
                options: [
                    "element.addClass()",
                    "element.className = 'newClass'",
                    "element.classList.add('newClass')",
                    "element.add('newClass')"
                ],
                answer: 2
            },
            {
                question: "Which property returns the parent element of a node?",
                options: [
                    "parentNode",
                    "parentElement",
                    "parent",
                    "both parentNode and parentElement"
                ],
                answer: 3
            },
            {
                question: "What does event.preventDefault() do?",
                options: [
                    "Stops event bubbling",
                    "Prevents the default action of an event",
                    "Stops all events on the page",
                    "Prevents events from being attached"
                ],
                answer: 1
            },
            {
                question: "Which method adds an event listener to an element?",
                options: [
                    "element.addEventListener()",
                    "element.attachEvent()",
                    "element.onEvent()",
                    "element.addListener()"
                ],
                answer: 0
            },
            {
                question: "What does document.readyState indicate?",
                options: [
                    "Whether the document is loaded",
                    "Whether scripts are loaded",
                    "Whether images are loaded",
                    "Whether styles are applied"
                ],
                answer: 0
            },
            {
                question: "How do you get the value of an input element?",
                options: [
                    "input.content",
                    "input.innerHTML",
                    "input.value",
                    "input.text"
                ],
                answer: 2
            }
        ]
    },
    {
        id: 6,
        title: "APIs & Fetch",
        description: "Connect to data",
        icon: "fa-exchange-alt",
        videoId: "cuEtnrL9-H0", // Fetch API
        locked: true,
        completed: false,
        progress: 0,
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
                question: "What is the purpose of CORS in web APIs?",
                options: [
                    "To restrict cross-origin requests",
                    "To enable secure cross-origin requests",
                    "To compress API responses",
                    "To cache API responses"
                ],
                answer: 1
            },
            {
                question: "Which header is commonly used for authentication in APIs?",
                options: [
                    "Authentication",
                    "Authorization",
                    "Auth-Token",
                    "API-Key"
                ],
                answer: 1
            },
            {
                question: "What does REST stand for in REST API?",
                options: [
                    "Representational State Transfer",
                    "Remote Execution State Transfer",
                    "Representational Standard Transfer",
                    "Remote State Transfer"
                ],
                answer: 0
            },
            {
                question: "Which HTTP method is used to update data in a REST API?",
                options: [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                ],
                answer: 2
            },
            {
                question: "What is the purpose of query parameters in API requests?",
                options: [
                    "To filter or modify the response",
                    "To authenticate the request",
                    "To specify the response format",
                    "To encrypt the request"
                ],
                answer: 0
            },
            {
                question: "Which method is used to handle errors in a fetch request?",
                options: [
                    ".error()",
                    ".catch()",
                    ".fail()",
                    ".then() with error checking"
                ],
                answer: 1
            }
        ]
    },
    {
        id: 7,
        title: "React Fundamentals",
        description: "Build modern UIs",
        icon: "fa-react",
        videoId: "w7ejDZ8SWv8", // React Basics
        locked: true,
        completed: false,
        progress: 0,
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
                    "A JavaScript extension that allows HTML-like syntax",
                    "A templating language",
                    "A state management library",
                    "A build tool"
                ],
                answer: 0
            },
            {
                question: "How do you create a state variable in a functional component?",
                options: [
                    "const [state, setState] = useState(initialValue)",
                    "this.state = {value: initialValue}",
                    "let state = createState(initialValue)",
                    "const state = useVariable(initialValue)"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of keys in React lists?",
                options: [
                    "To uniquely identify elements",
                    "To encrypt component data",
                    "To style list items",
                    "To define list order"
                ],
                answer: 0
            },
            {
                question: "Which method is called after a component renders?",
                options: [
                    "componentDidMount",
                    "componentWillMount",
                    "componentRendered",
                    "useEffect with empty dependency array"
                ],
                answer: 3
            },
            {
                question: "What is the virtual DOM?",
                options: [
                    "A lightweight copy of the real DOM",
                    "A 3D representation of components",
                    "A DOM manipulation library",
                    "A testing environment"
                ],
                answer: 0
            },
            {
                question: "How do you conditionally render in React?",
                options: [
                    "Using if statements inside JSX",
                    "Using ternary operators or logical && in JSX",
                    "Using switch statements",
                    "Using #if directives"
                ],
                answer: 1
            },
            {
                question: "What is the purpose of React Router?",
                options: [
                    "To manage application state",
                    "To handle client-side routing",
                    "To connect to APIs",
                    "To optimize performance"
                ],
                answer: 1
            }
        ]
    },
    {
        id: 8,
        title: "Backend Basics",
        description: "Node.js & Express",
        icon: "fa-server",
        videoId: "Oe421EPjeBE", // Node.js Basics
        locked: true,
        completed: false,
        progress: 0,
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
                question: "What is the purpose of package.json?",
                options: [
                    "To define project metadata and dependencies",
                    "To configure the Node.js runtime",
                    "To store application data",
                    "To define database schemas"
                ],
                answer: 0
            },
            {
                question: "How do you install a package locally using npm?",
                options: [
                    "npm install -g package-name",
                    "npm add package-name",
                    "npm install package-name",
                    "npm get package-name"
                ],
                answer: 2
            },
            {
                question: "What is middleware in Express?",
                options: [
                    "Functions that have access to request and response objects",
                    "Database connection handlers",
                    "Template rendering engines",
                    "Error handling utilities"
                ],
                answer: 0
            },
            {
                question: "Which method is used to handle GET requests in Express?",
                options: [
                    "app.post()",
                    "app.get()",
                    "app.handle()",
                    "app.request()"
                ],
                answer: 1
            },
            {
                question: "What does req.params contain in Express?",
                options: [
                    "Query parameters from the URL",
                    "Route parameters from the URL",
                    "POST request body data",
                    "HTTP headers"
                ],
                answer: 1
            },
            {
                question: "How do you start a Node.js server?",
                options: [
                    "node start server.js",
                    "npm run server.js",
                    "node server.js",
                    "npm start server.js"
                ],
                answer: 2
            },
            {
                question: "What is the purpose of the .env file?",
                options: [
                    "To store environment variables",
                    "To define routes",
                    "To configure the database",
                    "To store user data"
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
        videoId: "HXV3zeQKqGY", // SQL Basics
        locked: true,
        completed: false,
        progress: 0,
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
                    "Sequential Query Language"
                ],
                answer: 0
            },
            {
                question: "Which clause is used to filter records in SQL?",
                options: [
                    "FILTER",
                    "WHERE",
                    "HAVING",
                    "CHECK"
                ],
                answer: 1
            },
            {
                question: "What is the purpose of an index in a database?",
                options: [
                    "To improve query performance",
                    "To encrypt data",
                    "To compress data",
                    "To format data"
                ],
                answer: 0
            },
            {
                question: "Which SQL statement updates data in a database?",
                options: [
                    "MODIFY",
                    "CHANGE",
                    "UPDATE",
                    "ALTER"
                ],
                answer: 2
            },
            {
                question: "What is a foreign key?",
                options: [
                    "A key that references a primary key in another table",
                    "A key that is not used",
                    "A backup key",
                    "An encrypted key"
                ],
                answer: 0
            },
            {
                question: "Which SQL statement inserts new data into a database?",
                options: [
                    "ADD",
                    "CREATE",
                    "INSERT",
                    "NEW"
                ],
                answer: 2
            },
            {
                question: "What is normalization in databases?",
                options: [
                    "The process of organizing data to minimize redundancy",
                    "The process of encrypting data",
                    "The process of backing up data",
                    "The process of compressing data"
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
        videoId: "GDa8kZLNhJ4", // Full Stack Project
        locked: true,
        completed: false,
        progress: 0,
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
                    "npm",
                    "Webpack",
                    "Babel"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of a README file?",
                options: [
                    "To document the project",
                    "To store configuration",
                    "To run the application",
                    "To test the application"
                ],
                answer: 0
            },
            {
                question: "Which file typically lists project dependencies?",
                options: [
                    "README.md",
                    "package.json",
                    ".gitignore",
                    "index.html"
                ],
                answer: 1
            },
            {
                question: "What is continuous integration?",
                options: [
                    "Automatically testing and merging code changes",
                    "Connecting frontend and backend",
                    "Integrating third-party APIs",
                    "Merging databases"
                ],
                answer: 0
            },
            {
                question: "Which is NOT a common deployment platform?",
                options: [
                    "Heroku",
                    "Netlify",
                    "Vercel",
                    "Photoshop"
                ],
                answer: 3
            },
            {
                question: "What is the purpose of error tracking?",
                options: [
                    "To monitor and fix application errors",
                    "To track user behavior",
                    "To measure performance",
                    "To analyze traffic"
                ],
                answer: 0
            },
            {
                question: "What is a common final step in a project?",
                options: [
                    "Writing documentation",
                    "Testing",
                    "Deployment",
                    "All of the above"
                ],
                answer: 3
            }
        ]
    }
];

// Rest of the JavaScript code remains the same...

// DOM Elements
const levelsContainer = document.querySelector('.levels-container');
const levelModal = document.getElementById('levelModal');
const modalTitle = document.getElementById('modalTitle');
const levelVideo = document.getElementById('levelVideo');
const quizContainer = document.getElementById('quizContainer');
const quizQuestions = document.getElementById('quizQuestions');
const submitQuiz = document.getElementById('submitQuiz');
const quizResult = document.getElementById('quizResult');
const completionMessage = document.getElementById('completionMessage');
const nextLevelBtn = document.getElementById('nextLevel');
const closeModal = document.querySelector('.close-modal');
const startCourseBtn = document.getElementById('startCourse');
const progressCircle = document.querySelector('.progress-circle');
const userProgressText = document.querySelector('.user-progress span:last-child');

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
        quizResult.textContent = 'Please answer all questions before submitting.';
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
    
    // Display result
    quizResult.innerHTML = `
        You scored ${score}% (${correct} out of ${level.quiz.length} correct)
        ${score >= 80 ? '🎉 Great job!' : 'Keep practicing!'}
    `;
    quizResult.style.display = 'block';
    quizResult.style.backgroundColor = score >= 80 ? '#d4edda' : '#f8d7da';
    quizResult.style.color = score >= 80 ? '#155724' : '#721c24';
    
    // Update level progress (80% video, 20% quiz)
    const videoProgress = 80; // Assuming user watched the full video
    const quizWeight = 0.2 * score;
    const newProgress = Math.min(100, videoProgress + quizWeight);
    
    level.progress = newProgress;
    
    // If progress reaches 100%, mark as completed
    if (newProgress >= 100) {
        level.completed = true;
        completionMessage.style.display = 'block';
        quizContainer.style.display = 'none';
        
        // Unlock next level if exists
        const nextLevel = courseData.find(l => l.id === level.id + 1);
        if (nextLevel) {
            nextLevel.locked = false;
        }
    }
    
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