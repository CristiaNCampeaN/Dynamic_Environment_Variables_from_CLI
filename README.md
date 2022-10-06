
## Commands in CLI for change the `environment variables`
`cypress open --env ENV='production'` <--> This CLI navigate to 'https://www.emag.ro'

`cypress open --env ENV='dev'` <--> This CLI navigate to 'https://www.emag.ro/laptopuri/c?ref=hp_menu_quick-nav_1_1&type=category'

`cypress open --env ENV='qa'` <--> This CLI navigate to 'https://www.emag.ro/console-hardware/brand/sony/c?ref=hp_menu_quick-nav_463_1&type=link'


## Tools install
Cypress with command: `npm install -D cypress`

Cucumber with command: `npm install @badeball/cypress-cucumber-preprocessor`

Esbuild with command: `npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild`


## Project structure
```
project root/test
├── cypress
│      ├── e2e
│      │    ├── features
│      │    └── step_definitions
│      │            ├── action.js  --> all action steps(move mouse to element, click on element...)
│      │            ├── background.js --> step for navigate to page
│      │            └── validation.js --> all validation steps(element is visible, element is not visible..)
│      │ 
│      ├── fixtures
│      └── support
│            ├── commands.js
│            ├── e2e.js
│            ├── environment.js --> class with a function for can change environment variable from CLI
│            └── helpingMethods.js --> function for convert the text from scenario in camel case
├── .cypress-cucumber-preprocessorrc.json
└── cypress.config.js
```
