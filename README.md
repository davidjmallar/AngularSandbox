Kérlek titeket lehetőség szerint készítsétek elő a fejlesztői környezetet:
1) LTS Nodejs -> ezzel kapsz NPM package managert
https://nodejs.org/en/download/
2) Angular -> reméljük ha nem vagytok proxy-n felmegy ez is. A proxy trükközést az értekezleten megmutatjuk
https://angular.io/guide/setup-local
3) https://material.angular.io/components/categories

Topikok:
- Install NodeJS and Angular CLI
    - Add .npmrc
    - VSCode plugins
        - Angular Language Service
        - TSLint
        - Formatter (e.g.: Prettier)
    - Generate project.
- Project structure.
    - Component - Module
    - HTML Template → TypeScript
    - packages.json and versioning
- TypeScript binding basics
    - One-Way / Event {{}} + (click)
    - Two-Way [()]
- Angular directives
    - ng-if
    - ng-for
    - ng-module, ng-style
- Routing / Navigation
    - Component relationship
    - Router
    - Navigating from script
    - URL parameters
        - query parameter
        - parameters
- Material Theme / Custom Theming → Conti Theme
    - Material docs
    - Modules file
- Environments - Environment loader
- Services
    - example: HttpService 
    - Injectable / Provider
    - Promise vs Observable
- Interceptors (Middlewares)
    - HttpInterceptor
    - AuthGuard (just mock without KC)
- Authentication
    - keycloak-js / keycloak-angular
- Translation / Localization
- Advanced HTML features
    - Flex
    - Grid
- Creating custom components
    - Input/Output
    - Eventing, Behaviour subjects
