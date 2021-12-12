# ChatApp
## _Fullstack application to messaging_

ChatApp is a fullstack application on Typescript with database on PostgreSQL, backend on Nest.js and frontend on React.js

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="50" /> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="50" /> <img src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" height="50" /> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h5gsbMV4q1P0bdLXEtowCVy_ndc1xPjPXkYJEAYuui7mgmprsk_JVYBC9ixzKTSaOlk&usqp=CAU" height="50" /> <img src="https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png" height="50" /> <img src="https://i1.wp.com/www.lightvesselautomatic.com/wp-content/uploads/2016/03/less-logo.png?fit=423%2C423&ssl=1" height="50" /> <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" height="50" /> <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" height="50" /> <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" height="50" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" height="50" /> <img src="https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc_400x400.png" height="50" /> <img src="https://docs.nestjs.com/assets/logo-small.svg" height="50" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" height="50" /> <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" height="50" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" height="50" /> <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" height="50" /> <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" height="50" />

## Features

- Authorization with sessions or JWT
- Basic REST API
- Graphql API for messages
- Socket API for messages
- Two themes to choose: light and dark

## Tech

This projects uses the following technologies:

- [TypeScript](https://www.typescriptlang.org/ "TypeScript") - Strongly typed programming language that builds on JavaScript.
- [React](https://reactjs.org/ "React.js") - UI framework.
- [Antd](https://ant.design/ "Ant design") - UI design library.
- [Less](https://lesscss.org/ "Less") - CSS preprocessor.
- [Webpack](https://webpack.js.org/ "Webpack") - Module bundler.
- [Node.js](https://nodejs.org/ "Node.js") - JavaScript runtime built.
- [NPM](https://www.npmjs.com/ "NPM") - Package manager for the Node.js.
- [PostgreSQL](https://www.postgresql.org/ "PostgreSQL") - Object-relational database system.
- [Sequelize](https://sequelize.org/ "Sequelize") - Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- [Nest](https://nestjs.com/ "Nest") - Framework for building Node.js server-side applications, based on Express.
- [Express](http://expressjs.com/ "Express") - Minimal and flexible Node.js web application framework.
- [Passport.js](http://www.passportjs.org/ "Passport.js") - Authentication middleware for Node.js.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js "Bcrypt") - Password-hashing library.
- [GraphQL](https://graphql.org/ "GraphQL") - Open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.
- [Apollo](https://www.apollographql.com/ "GraphQL") - Platform for building GraphQL API.

## Folders structure

* src
  * client
    * api
    * assets
      * fonts
      * html
      * img
      * styles
        * components
    * config
    * core
      * classes
      * const
    * lang
      * en
      * ru
    * store
      * actions
      * reducers
      * saga
      * types
    * types
      * aliases
      * interfaces
    * ui
      * components
      * HOCs
      * hooks
      * handlers
      * pages
    * utils
  * server
* test
* shell
* sql

## License

Creative Commons Attribution-NonCommercial License










::: {#swagger-ui}
::: {.section .swagger-ui .swagger-container}
::: {.topbar}
::: {.wrapper}
::: {.topbar-wrapper}
[![Swagger
UI](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDA3IDExNiI+DQogIDxkZWZzPg0KICAgIDxzdHlsZT4NCiAgICAgIC5jbHMtMSB7DQogICAgICAgIGNsaXAtcGF0aDogdXJsKCNjbGlwLVNXX1RNLWxvZ28tb24tZGFyayk7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMiB7DQogICAgICAgIGZpbGw6ICNmZmY7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMyB7DQogICAgICAgIGZpbGw6ICM4NWVhMmQ7DQogICAgICB9DQoNCiAgICAgIC5jbHMtNCB7DQogICAgICAgIGZpbGw6ICMxNzM2NDc7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtU1dfVE0tbG9nby1vbi1kYXJrIj4NCiAgICAgIDxyZWN0IHdpZHRoPSI0MDciIGhlaWdodD0iMTE2Ii8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iU1dfVE0tbG9nby1vbi1kYXJrIiBjbGFzcz0iY2xzLTEiPg0KICAgIDxnIGlkPSJTV19Jbi1Qcm9kdWN0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zMDEpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5MzYiIGRhdGEtbmFtZT0iUGF0aCAyOTM2IiBjbGFzcz0iY2xzLTIiIGQ9Ik0zNTkuMTUsNzAuNjc0aC0uN1Y2Ni45OTJoLTEuMjZ2LS42aDMuMjE5di42SDM1OS4xNVoiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5MzciIGRhdGEtbmFtZT0iUGF0aCAyOTM3IiBjbGFzcz0iY2xzLTIiIGQ9Ik0zNjMuMjE3LDcwLjY3NCwzNjEuOTc1LDY3LjFoLS4wMjNxLjA1LjguMDUsMS40OTR2Mi4wODNoLS42MzZWNjYuMzkxaC45ODdsMS4xOSwzLjQwN2guMDE3bDEuMjI1LTMuNDA3aC45OXY0LjI4M0gzNjUuMVY2OC41NTZjMC0uMjEzLjAwNi0uNDkuMDE2LS44MzJzLjAyLS41NDkuMDI4LS42MjFoLS4wMjNsLTEuMjg2LDMuNTcxWiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjkzOCIgZGF0YS1uYW1lPSJQYXRoIDI5MzgiIGNsYXNzPSJjbHMtMyIgZD0iTTUwLjMyOCw5Ny42NjlBNDcuNjQyLDQ3LjY0MiwwLDEsMSw5Ny45NzEsNTAuMDI3LDQ3LjY0Miw0Ny42NDIsMCwwLDEsNTAuMzI4LDk3LjY2OVoiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5MzkiIGRhdGEtbmFtZT0iUGF0aCAyOTM5IiBjbGFzcz0iY2xzLTMiIGQ9Ik01MC4zMjgsNC43NjlBNDUuMjU4LDQ1LjI1OCwwLDEsMSw1LjA3LDUwLjAyNyw0NS4yNTgsNDUuMjU4LDAsMCwxLDUwLjMyOCw0Ljc2OW0wLTQuNzY5YTUwLjAyNyw1MC4wMjcsMCwxLDAsNTAuMDI3LDUwLjAyN0E1MC4wMjcsNTAuMDI3LDAsMCwwLDUwLjMyOCwwWiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk0MCIgZGF0YS1uYW1lPSJQYXRoIDI5NDAiIGNsYXNzPSJjbHMtNCIgZD0iTTMxLjgsMzMuODU0Yy0uMTU0LDEuNzEyLjA1OCwzLjQ4Mi0uMDU3LDUuMjEzYTQyLjY2NSw0Mi42NjUsMCwwLDEtLjY5Myw1LjE1Niw5LjUzLDkuNTMsMCwwLDEtNC4xLDUuODI5YzQuMDc5LDIuNjU0LDQuNTQsNi43NzEsNC44MSwxMC45NDYuMTM1LDIuMjUuMDc3LDQuNTIuMzA4LDYuNzUyLjE3MywxLjczMS44NDYsMi4xNzQsMi42MzYsMi4yMzEuNzMuMDIsMS40OCwwLDIuMzI3LDBWNzUuMzNjLTUuMjkuOS05LjY1Ny0uNi0xMC43MzQtNS4wNzlhMzAuNzYsMzAuNzYsMCwwLDEtLjY1NC01Yy0uMTE3LTEuNzg5LjA3Ni0zLjU3OC0uMDU4LTUuMzY3LS4zODYtNC45MDYtMS4wMi02LjU2LTUuNzEzLTYuNzkxdi02LjFBOS4xOTEsOS4xOTEsMCwwLDEsMjAuOSw0Ni44MmMyLjU3Ny0uMTM1LDMuNjc0LS45MjQsNC4yMzEtMy40NjNhMjkuMywyOS4zLDAsMCwwLC40ODEtNC4zMjksODIuMSw4Mi4xLDAsMCwxLC42LTguNDA2Yy42NzMtMy45ODIsMy4xMzYtNS45MDYsNy4yMzQtNi4xMzcsMS4xNTQtLjA1NywyLjMyNywwLDMuNjU1LDB2NS40NjRjLS41NTguMDM4LTEuMDM5LjExNS0xLjUzOS4xMTVDMzIuMjI2LDI5Ljk0OSwzMi4wNTIsMzEuMDg0LDMxLjgsMzMuODU0Wm02LjQwNiwxMi42NThoLS4wNzdhMy41MTUsMy41MTUsMCwxLDAtLjM0Niw3LjAyMWguMjMxYTMuNDYxLDMuNDYxLDAsMCwwLDMuNjU1LTMuMjUxVjUwLjA5YTMuNTIzLDMuNTIzLDAsMCwwLTMuNDYxLTMuNTc4Wm0xMi4wNjIsMGEzLjM3MywzLjM3MywwLDAsMC0zLjQ4MiwzLjI1MSwxLjc5LDEuNzksMCwwLDAsLjAyLjMyNywzLjMsMy4zLDAsMCwwLDMuNTc4LDMuNDQzLDMuMjYzLDMuMjYzLDAsMCwwLDMuNDQzLTMuNTU4LDMuMzA4LDMuMzA4LDAsMCwwLTMuNTU3LTMuNDYzWm0xMi4zNTEsMGEzLjU5MiwzLjU5MiwwLDAsMC0zLjY1NSwzLjQ4MkEzLjUyOSwzLjUyOSwwLDAsMCw2Mi41LDUzLjUzM2guMDM5YzEuNzY5LjMwOSwzLjU1OS0xLjQsMy42NzQtMy40NjJhMy41NzEsMy41NzEsMCwwLDAtMy42LTMuNTU5Wm0xNi45NDguMjg4Yy0yLjIzMi0uMS0zLjM0OC0uODQ2LTMuOS0yLjk2MmEyMS40NDcsMjEuNDQ3LDAsMCwxLS42MzUtNC4xMzZjLS4xNTQtMi41NzgtLjEzNS01LjE3NS0uMzA4LTcuNzUzLS40LTYuMTE3LTQuODI4LTguMjUyLTExLjI1NC03LjE5NXY1LjMxYzEuMDE5LDAsMS44MDgsMCwyLjYuMDE5LDEuMzY2LjAxOSwyLjQuNTM5LDIuNTM5LDIuMDU5LjEzNSwxLjM4NS4xMzUsMi43ODkuMjcsNC4xOTMuMjY5LDIuNzkuNDIyLDUuNjE4LjksOC4zNjlBOC43MTUsOC43MTUsMCwwLDAsNzMuNyw1MC4wNTJjLTMuNCwyLjI4OS00LjQwNiw1LjU1OS00LjU3OCw5LjIzNC0uMSwyLjUyLS4xNTQsNS4wNTktLjI4OSw3LjYtLjExNSwyLjMwOC0uOTIzLDMuMDU4LTMuMjUxLDMuMTE2LS42NTQuMDE5LTEuMjg5LjA3Ny0yLjAxOS4xMTV2NS40NDVjMS4zNjUsMCwyLjYxNi4wNzcsMy44NjYsMCwzLjg4Ni0uMjMxLDYuMjMzLTIuMTE3LDctNS44ODdBNDkuMDc5LDQ5LjA3OSwwLDAsMCw3NSw2My40Yy4xMzUtMS45MjMuMTE2LTMuODY2LjMwOC01Ljc3MS4yODktMi45ODIsMS42NTUtNC4yMTMsNC42MzYtNC40YTQuMDM3LDQuMDM3LDAsMCwwLC44MjgtLjE5MnYtNi4xYy0uNS0uMDU4LS44NDMtLjExNS0xLjIwOC0uMTM1WiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk0MSIgZGF0YS1uYW1lPSJQYXRoIDI5NDEiIGNsYXNzPSJjbHMtMiIgZD0iTTE1Mi4yNzMsNTguMTIyYTExLjIyOCwxMS4yMjgsMCwwLDEtNC4zODQsOS40MjRxLTQuMzgzLDMuMzgyLTExLjksMy4zODItOC4xNCwwLTEyLjUyNC0yLjFWNjMuN2EzMi45LDMyLjksMCwwLDAsNi4xMzcsMS44NzksMzIuMywzMi4zLDAsMCwwLDYuNTc1LjY4OXE1LjMyMiwwLDguMDE1LTIuMDJhNi42MjYsNi42MjYsMCwwLDAsMi42OTItNS42Miw3LjIyMiw3LjIyMiwwLDAsMC0uOTU0LTMuOSw4Ljg4NSw4Ljg4NSwwLDAsMC0zLjE5NC0yLjgsNDQuNjM0LDQ0LjYzNCwwLDAsMC02LjgxLTIuOTExcS02LjM4Ny0yLjI4Ni05LjEyNi01LjQxN2ExMS45NTUsMTEuOTU1LDAsMCwxLTIuNzQtOC4xNzJBMTAuMTY0LDEwLjE2NCwwLDAsMSwxMjguMDM5LDI3cTMuOTc3LTMuMTMxLDEwLjUyLTMuMTMxYTMxLDMxLDAsMCwxLDEyLjU1NSwyLjVMMTQ5LjQ1NSwzMWEyOC4zODIsMjguMzgyLDAsMCwwLTExLjAyMS0yLjM4LDEwLjY2OCwxMC42NjgsMCwwLDAtNi42MDYsMS44MTYsNS45ODQsNS45ODQsMCwwLDAtMi4zOCw1LjA0MSw3LjcyMiw3LjcyMiwwLDAsMCwuODc3LDMuOSw4LjI0Miw4LjI0MiwwLDAsMCwyLjk1OSwyLjc4NiwzNi43LDM2LjcsMCwwLDAsNi4zNzEsMi44cTcuMiwyLjU2Niw5LjkxLDUuNTFBMTAuODQsMTAuODQsMCwwLDEsMTUyLjI3Myw1OC4xMjJaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTQyIiBkYXRhLW5hbWU9IlBhdGggMjk0MiIgY2xhc3M9ImNscy0yIiBkPSJNMTg1LjI4OCw3MC4zLDE3OSw1MC4xN3EtLjU5NC0xLjg0OC0yLjIyMi04LjM5MWgtLjI1MXEtMS4yNTIsNS40NzktMi4xOTIsOC40NTNMMTY3Ljg0OSw3MC4zaC02LjAxMWwtOS4zNjEtMzQuMzE1aDUuNDQ3cTMuMzE4LDEyLjkzMSw1LjA1NywxOS42OTNhODAuMTEyLDgwLjExMiwwLDAsMSwxLjk4OCw5LjExMWguMjVxLjM0NS0xLjc4NSwxLjExMi00LjYxOHQxLjMzLTQuNDkzbDYuMjk0LTE5LjY5M2g1LjYzNWw2LjEzNywxOS42OTNhNjYuMzY5LDY2LjM2OSwwLDAsMSwyLjM3OSw5LjA0OGguMjUxYTMzLjE2MywzMy4xNjMsMCwwLDEsLjY3My0zLjQ3NXEuNTQ4LTIuMzQ3LDYuNTI4LTI1LjI2Nmg1LjM4NUwxOTEuNDU2LDcwLjNaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTQzIiBkYXRhLW5hbWU9IlBhdGggMjk0MyIgY2xhc3M9ImNscy0yIiBkPSJNMjI1LjExNSw3MC4zbC0xLjAzMy00Ljg4NWgtLjI1YTE0LjQ0NiwxNC40NDYsMCwwLDEtNS4xMTksNC4zNjgsMTUuNjA4LDE1LjYwOCwwLDAsMS02LjM3MiwxLjE0M3EtNS4xLDAtOC0yLjYzdC0yLjktNy40ODNxMC0xMC40LDE2LjYyNi0xMC45bDUuODIzLS4xODhWNDcuNnEwLTQuMDM4LTEuNzM4LTUuOTY0VDIxNi42LDM5LjcxM2EyMi42MzMsMjIuNjMzLDAsMCwwLTkuNzA2LDIuNjNsLTEuNi0zLjk3N2EyNC40MzcsMjQuNDM3LDAsMCwxLDUuNTU3LTIuMTYsMjQuMDU2LDI0LjA1NiwwLDAsMSw2LjA1OC0uNzgzcTYuMTM2LDAsOS4xLDIuNzI0dDIuOTU5LDguNzM1VjcwLjNabS0xMS43NDEtMy42NjNBMTAuNTQ5LDEwLjU0OSwwLDAsMCwyMjEsNjMuOTc3YTkuODQ1LDkuODQ1LDAsMCwwLDIuNzcxLTcuNDUxdi0zLjFsLTUuMi4yMTlxLTYuMi4yMTktOC45MzksMS45MjZhNS44LDUuOCwwLDAsMC0yLjc0LDUuMzA2LDUuMzU0LDUuMzU0LDAsMCwwLDEuNzA3LDQuMjksNy4wODEsNy4wODEsMCwwLDAsNC43NzUsMS40NzJaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTQ0IiBkYXRhLW5hbWU9IlBhdGggMjk0NCIgY2xhc3M9ImNscy0yIiBkPSJNMjY0LjYsMzUuOTg3djMuMjg3bC02LjM1Ni43NTJhMTEuMTYsMTEuMTYsMCwwLDEsMi4yNTUsNi44NTYsMTAuMTQ4LDEwLjE0OCwwLDAsMS0zLjQ0NCw4LjA0N3EtMy40NDQsMy05LjQ1NiwzYTE1LjczNCwxNS43MzQsMCwwLDEtMi44OC0uMjVRMjQxLjQsNTkuNDM4LDI0MS40LDYyLjFhMi4yNDIsMi4yNDIsMCwwLDAsMS4xNTksMi4wODIsOC40NTYsOC40NTYsMCwwLDAsMy45NzYuNjczaDYuMDc0cTUuNTczLDAsOC41NjMsMi4zNDhhOC4xNTgsOC4xNTgsMCwwLDEsMi45OSw2LjgyNSw5Ljc0Myw5Ljc0MywwLDAsMS00LjU3MSw4LjY4OHEtNC41NzIsMi45ODktMTMuMzM4LDIuOTktNi43MzIsMC0xMC4zNzktMi41YTguMDg3LDguMDg3LDAsMCwxLTMuNjQ3LTcuMDc2LDcuOTQ2LDcuOTQ2LDAsMCwxLDItNS40MTcsMTAuMjExLDEwLjIxMSwwLDAsMSw1LjYzNi0zLjEsNS40MjksNS40MjksMCwwLDEtMi4yMDctMS44NDcsNC44OSw0Ljg5LDAsMCwxLS44OTMtMi45MTIsNS41Myw1LjUzLDAsMCwxLDEtMy4yODgsMTAuNTI5LDEwLjUyOSwwLDAsMSwzLjE2Mi0yLjcyMyw5LjI3NSw5LjI3NSwwLDAsMS00LjMzNi0zLjcyNiwxMC45NDUsMTAuOTQ1LDAsMCwxLTEuNjc1LTYuMDEycTAtNS42MzQsMy4zODItOC42ODh0OS41OC0zLjA1MmExNy40MzksMTcuNDM5LDAsMCwxLDQuODUzLjYyNlpNMjM3LjIzMyw3Ni4wNjJhNC42Niw0LjY2LDAsMCwwLDIuMzQ4LDQuMjI3LDEyLjk3MywxMi45NzMsMCwwLDAsNi43MzIsMS40NHE2LjU0MywwLDkuNjktMS45NTZhNS45OTIsNS45OTIsMCwwLDAsMy4xNDctNS4zMDdxMC0yLjc4Ny0xLjcyMy0zLjg2N3QtNi40ODEtMS4wOGgtNi4yM2E4LjIwNSw4LjIwNSwwLDAsMC01LjUxLDEuNjksNi4wNDMsNi4wNDMsMCwwLDAtMS45NzMsNC44NTNabTIuODE4LTI5LjA4NmE2Ljk4NCw2Ljk4NCwwLDAsMCwyLjAzNSw1LjQ0OCw4LjEyMyw4LjEyMywwLDAsMCw1LjY2NywxLjg0N3E3LjYwOCwwLDcuNjA4LTcuMzg5LDAtNy43MzMtNy43LTcuNzMzYTcuNjI4LDcuNjI4LDAsMCwwLTUuNjM1LDEuOTcycS0xLjk3NiwxLjk3My0xLjk3NSw1Ljg1NVoiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NDUiIGRhdGEtbmFtZT0iUGF0aCAyOTQ1IiBjbGFzcz0iY2xzLTIiIGQ9Ik0yOTkuMTM2LDM1Ljk4N3YzLjI4N2wtNi4zNTYuNzUyYTExLjE2OCwxMS4xNjgsMCwwLDEsMi4yNTQsNi44NTYsMTAuMTQ1LDEwLjE0NSwwLDAsMS0zLjQ0NCw4LjA0N3EtMy40NDQsMy05LjQ1NSwzYTE1LjczNCwxNS43MzQsMCwwLDEtMi44OC0uMjVxLTMuMzIsMS43NTQtMy4zMTksNC40MTVhMi4yNDMsMi4yNDMsMCwwLDAsMS4xNTgsMi4wODIsOC40NTksOC40NTksMCwwLDAsMy45NzYuNjczaDYuMDc0cTUuNTc0LDAsOC41NjMsMi4zNDhhOC4xNTgsOC4xNTgsMCwwLDEsMi45OSw2LjgyNSw5Ljc0Myw5Ljc0MywwLDAsMS00LjU3MSw4LjY4OHEtNC41NywyLjk4OS0xMy4zMzcsMi45OS02LjczMiwwLTEwLjM3OS0yLjVhOC4wODgsOC4wODgsMCwwLDEtMy42NDgtNy4wNzYsNy45NDcsNy45NDcsMCwwLDEsMi01LjQxNywxMC4yMDcsMTAuMjA3LDAsMCwxLDUuNjM2LTMuMSw1LjQzMiw1LjQzMiwwLDAsMS0yLjIwOC0xLjg0Nyw0Ljg4OSw0Ljg4OSwwLDAsMS0uODkyLTIuOTEyLDUuNTMsNS41MywwLDAsMSwxLTMuMjg4LDEwLjUyOSwxMC41MjksMCwwLDEsMy4xNjItMi43MjMsOS4yNzEsOS4yNzEsMCwwLDEtNC4zMzYtMy43MjYsMTAuOTQ1LDEwLjk0NSwwLDAsMS0xLjY3NS02LjAxMnEwLTUuNjM0LDMuMzgxLTguNjg4dDkuNTgxLTMuMDUyYTE3LjQ0NCwxNy40NDQsMCwwLDEsNC44NTMuNjI2Wk0yNzEuNzcyLDc2LjA2MmE0LjY1OCw0LjY1OCwwLDAsMCwyLjM0OCw0LjIyNywxMi45NjksMTIuOTY5LDAsMCwwLDYuNzMxLDEuNDRxNi41NDQsMCw5LjY5MS0xLjk1NmE1Ljk5Myw1Ljk5MywwLDAsMCwzLjE0Ni01LjMwN3EwLTIuNzg3LTEuNzIyLTMuODY3dC02LjQ4MS0xLjA4aC02LjIzYTguMjA4LDguMjA4LDAsMCwwLTUuNTExLDEuNjlBNi4wNDIsNi4wNDIsMCwwLDAsMjcxLjc3Miw3Ni4wNjJabTIuODE4LTI5LjA4NmE2Ljk4NCw2Ljk4NCwwLDAsMCwyLjAzNSw1LjQ0OCw4LjEyMSw4LjEyMSwwLDAsMCw1LjY2NywxLjg0N3E3LjYwNywwLDcuNjA4LTcuMzg5LDAtNy43MzMtNy43LTcuNzMzYTcuNjI5LDcuNjI5LDAsMCwwLTUuNjM1LDEuOTcycS0xLjk3NSwxLjk3My0xLjk3NSw1Ljg1NVoiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NDYiIGRhdGEtbmFtZT0iUGF0aCAyOTQ2IiBjbGFzcz0iY2xzLTIiIGQ9Ik0zMTYuNzc4LDcwLjkyOHEtNy42MDgsMC0xMi4wMDctNC42MzR0LTQuNC0xMi44NjhxMC04LjMsNC4wODYtMTMuMTgxYTEzLjU3MywxMy41NzMsMCwwLDEsMTAuOTc0LTQuODg0QTEyLjkzOCwxMi45MzgsMCwwLDEsMzI1LjYzOCwzOS42cTMuNzYyLDQuMjQ3LDMuNzYyLDExLjJ2My4yODdIMzA1Ljc1N3EuMTU2LDYuMDQ0LDMuMDUzLDkuMTc0dDguMTU2LDMuMTMxYTI3LjYzMywyNy42MzMsMCwwLDAsMTAuOTU4LTIuMzE3djQuNjM0YTI3LjUsMjcuNSwwLDAsMS01LjIxMywxLjcwNiwyOS4yNTEsMjkuMjUxLDAsMCwxLTUuOTMzLjUxM1ptLTEuNDA5LTMxLjIxNWE4LjQ4OSw4LjQ4OSwwLDAsMC02LjU5MSwyLjY5MiwxMi40MTYsMTIuNDE2LDAsMCwwLTIuOSw3LjQ1MmgxNy45NHEwLTQuOTE2LTIuMTkxLTcuNTNhNy43MTQsNy43MTQsMCwwLDAtNi4yNTgtMi42MTRaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTQ3IiBkYXRhLW5hbWU9IlBhdGggMjk0NyIgY2xhc3M9ImNscy0yIiBkPSJNMzUwLjksMzUuMzYxYTIwLjM4LDIwLjM4LDAsMCwxLDQuMS4zNzVsLS43MjEsNC44MjJhMTcuNzEyLDE3LjcxMiwwLDAsMC0zLjc1Ny0uNDdBOS4xNDIsOS4xNDIsMCwwLDAsMzQzLjQsNDMuNDdhMTIuMzI3LDEyLjMyNywwLDAsMC0yLjk1OSw4LjQyMlY3MC4zaC01LjJWMzUuOTg3aDQuMjlsLjYsNi4zNTZoLjI1YTE1LjA3MiwxNS4wNzIsMCwwLDEsNC42LTUuMTY2LDEwLjM1NiwxMC4zNTYsMCwwLDEsNS45MTktMS44MTZaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTQ4IiBkYXRhLW5hbWU9IlBhdGggMjk0OCIgY2xhc3M9ImNscy0yIiBkPSJNMjU1Ljg1Nyw5Ni42MzhzLTMuNDMtLjM5MS00Ljg1LS4zOTFjLTIuMDU4LDAtMy4xMTEuNzM1LTMuMTExLDIuMTgsMCwxLjU2OC44ODIsMS45MzUsMy43NDgsMi43MTksMy41MjcuOTgsNC44LDEuOTExLDQuOCw0Ljc3NywwLDMuNjc1LTIuMyw1LjI2Ny01LjYxLDUuMjY3YTM1LjY4NywzNS42ODcsMCwwLDEtNS40ODctLjY2MmwuMjctMi4xOHMzLjMwNi40NDEsNS4wNDYuNDQxYzIuMDgyLDAsMy4wMzctLjkzMSwzLjAzNy0yLjcsMC0xLjQyMS0uNzU5LTEuOTEtMy4zMzEtMi41MjMtMy42MjYtLjkzLTUuMTkzLTIuMDMzLTUuMTkzLTQuOTQ4LDAtMy4zODEsMi4yMjktNC43NzYsNS41ODUtNC43NzZhMzcuMiwzNy4yLDAsMCwxLDUuMzE1LjU4N1oiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NDkiIGRhdGEtbmFtZT0iUGF0aCAyOTQ5IiBjbGFzcz0iY2xzLTIiIGQ9Ik0yNjIuOTY3LDk0LjE0SDI2Ny43bDMuNzQ4LDEzLjEwNkwyNzUuMiw5NC4xNGg0Ljc1MnYxNi43OEgyNzcuMlY5Ni40MmgtLjE0NWwtNC4xOTEsMTMuODE2aC0yLjg0MkwyNjUuODMxLDk2LjQyaC0uMTQ1djE0LjVoLTIuNzE5WiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk1MCIgZGF0YS1uYW1lPSJQYXRoIDI5NTAiIGNsYXNzPSJjbHMtMiIgZD0iTTMyMi4wNTcsOTQuMTRIMzM0LjN2Mi40MjVoLTQuNzI4VjExMC45MmgtMi43NDNWOTYuNTY1aC00Ljc3N1oiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NTEiIGRhdGEtbmFtZT0iUGF0aCAyOTUxIiBjbGFzcz0iY2xzLTIiIGQ9Ik0zNDYuMTM3LDk0LjE0YzMuMzMyLDAsNS4xMiwxLjI0OSw1LjEyLDQuMzYxLDAsMi4wMzMtLjYzNywzLjAzNy0xLjk4NCwzLjc3MiwxLjQ0NS41NjMsMi40LDEuNTkyLDIuNCwzLjksMCwzLjQzLTIuMDgxLDQuNzUyLTUuMzM5LDQuNzUyaC02LjU2NlY5NC4xNFptLTMuNjUsMi4zNTJ2NC44aDMuNmMxLjY2NiwwLDIuNC0uODMyLDIuNC0yLjQ3NCwwLTEuNjE3LS44MzMtMi4zMjctMi41LTIuMzI3Wm0wLDcuMXY0Ljk3M2gzLjdjMS42ODksMCwyLjY5NC0uNTM5LDIuNjk0LTIuNTQ4LDAtMS45MTEtMS40MjEtMi40MjUtMi43NDQtMi40MjVaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTUyIiBkYXRhLW5hbWU9IlBhdGggMjk1MiIgY2xhc3M9ImNscy0yIiBkPSJNMzU4LjQxNCw5NC4xNEgzNjl2Mi4zNzdoLTcuODY0djQuNzUxaDYuMzk0VjEwMy42aC02LjM5NHY0LjkyNEgzNjl2Mi40SDM1OC40MTRaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTUzIiBkYXRhLW5hbWU9IlBhdGggMjk1MyIgY2xhc3M9ImNscy0yIiBkPSJNMzc4Ljc0Nyw5NC4xNGg1LjQxNGw0LjE2NCwxNi43OGgtMi43NDRMMzg0LjM0MiwxMDZoLTUuNzc3bC0xLjIzOSw0LjkyM2gtMi43MTlabS4zNjEsOS40NTZoNC43MDhsLTEuNzM3LTcuMTc4aC0xLjIyNVoiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NTQiIGRhdGEtbmFtZT0iUGF0aCAyOTU0IiBjbGFzcz0iY2xzLTIiIGQ9Ik0zOTcuMSwxMDUuOTQ3djQuOTczaC0yLjcxOVY5NC4xNGg2LjM3YzMuNywwLDUuNjgzLDIuMTIsNS42ODMsNS44NDMsMCwyLjM3Ni0uOTU2LDQuNTE5LTIuNzQ0LDUuMzUybDIuNzY5LDUuNTg1SDQwMy40N2wtMi40MjYtNC45NzNabTMuNjUxLTkuNDU1SDM5Ny4xdjcuMWgzLjdjMi4wNTcsMCwyLjg0MS0xLjg1LDIuODQxLTMuNTg5LDAtMS45LS45MzQtMy41MTEtMi44OTQtMy41MTFaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTU1IiBkYXRhLW5hbWU9IlBhdGggMjk1NSIgY2xhc3M9ImNscy0yIiBkPSJNMjkwLjAxMyw5NC4xNGg1LjQxM2w0LjE2NCwxNi43OGgtMi43NDNMMjk1LjYwOCwxMDZoLTUuNzc3bC0xLjIzOSw0LjkyM2gtMi43MTlabS4zNjEsOS40NTZoNC43MDdsLTEuNzM3LTcuMTc4aC0xLjIyNVoiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NTYiIGRhdGEtbmFtZT0iUGF0aCAyOTU2IiBjbGFzcz0iY2xzLTIiIGQ9Ik0zMDguMzYyLDEwNS45NDd2NC45NzNoLTIuNzE5Vjk0LjE0aDYuMzY5YzMuNywwLDUuNjgzLDIuMTIsNS42ODMsNS44NDMsMCwyLjM3Ni0uOTU1LDQuNTE5LTIuNzQzLDUuMzUybDIuNzY4LDUuNTg1aC0yLjk4OWwtMi40MjUtNC45NzNabTMuNjUtOS40NTVoLTMuNjV2Ny4xaDMuN2MyLjA1OCwwLDIuODQxLTEuODUsMi44NDEtMy41ODlDMzE0LjksOTguMSwzMTMuOTcyLDk2LjQ5MiwzMTIuMDEyLDk2LjQ5MloiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NTciIGRhdGEtbmFtZT0iUGF0aCAyOTU3IiBjbGFzcz0iY2xzLTIiIGQ9Ik0xMzAuNjA2LDEwNy42NDNhMy4wMiwzLjAyLDAsMCwxLTEuMTgsMi41MzcsNS4xMTMsNS4xMTMsMCwwLDEtMy4yLjkxLDguMDMsOC4wMywwLDAsMS0zLjM3MS0uNTY0di0xLjM4M2E4Ljc5Myw4Ljc5MywwLDAsMCwxLjY1Mi41MDYsOC42NzIsOC42NzIsMCwwLDAsMS43Ny4xODYsMy41NjUsMy41NjUsMCwwLDAsMi4xNTctLjU0NCwxLjc4MywxLjc4MywwLDAsMCwuNzI1LTEuNTEyLDEuOTQ3LDEuOTQ3LDAsMCwwLS4yNTctMS4wNSwyLjM5MywyLjM5MywwLDAsMC0uODYtLjc1NCwxMi4xNzEsMTIuMTcxLDAsMCwwLTEuODMzLS43ODQsNS44NDIsNS44NDIsMCwwLDEtMi40NTYtMS40NTgsMy4yMTMsMy4yMTMsMCwwLDEtLjczOC0yLjIsMi43MzYsMi43MzYsMCwwLDEsMS4wNzEtMi4yNjcsNC40NDQsNC40NDQsMCwwLDEsMi44MzEtLjg0Myw4LjM0MSw4LjM0MSwwLDAsMSwzLjM4LjY3NWwtLjQ0NywxLjI0N2E3LjYzOSw3LjYzOSwwLDAsMC0yLjk2Ni0uNjQxLDIuODc4LDIuODc4LDAsMCwwLTEuNzc5LjQ4OSwxLjYxMiwxLjYxMiwwLDAsMC0uNjQsMS4zNTcsMi4wODEsMi4wODEsMCwwLDAsLjIzNiwxLjA0OSwyLjIzMSwyLjIzMSwwLDAsMCwuOC43NSw5Ljg3OCw5Ljg3OCwwLDAsMCwxLjcxNS43NTQsNi44LDYuOCwwLDAsMSwyLjY2NywxLjQ4MywyLjkxOSwyLjkxOSwwLDAsMSwuNzIzLDIuMDU3WiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk1OCIgZGF0YS1uYW1lPSJQYXRoIDI5NTgiIGNsYXNzPSJjbHMtMiIgZD0iTTEzNC40NDcsMTAxLjY4NnY1Ljk5MWEyLjQxMSwyLjQxMSwwLDAsMCwuNTE1LDEuNjg2LDIuMDksMi4wOSwwLDAsMCwxLjYwOS41NTYsMi42MjksMi42MjksMCwwLDAsMi4xMi0uNzkyLDQsNCwwLDAsMCwuNjctMi41ODd2LTQuODU0aDEuNHY5LjIzNkgxMzkuNmwtLjItMS4yMzloLS4wNzVhMi43OTMsMi43OTMsMCwwLDEtMS4xOTMsMS4wNDUsNCw0LDAsMCwxLTEuNzQuMzYyLDMuNTI5LDMuNTI5LDAsMCwxLTIuNTI0LS44LDMuNDA5LDMuNDA5LDAsMCwxLS44MzktMi41NjJ2LTYuMDQyWiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk1OSIgZGF0YS1uYW1lPSJQYXRoIDI5NTkiIGNsYXNzPSJjbHMtMiIgZD0iTTE0OC4yMDYsMTExLjA5YTMuOTkzLDMuOTkzLDAsMCwxLTEuNjQ3LS4zMzMsMy4xLDMuMSwwLDAsMS0xLjI1Mi0xLjAyM2gtLjFhMTIuMjY1LDEyLjI2NSwwLDAsMSwuMSwxLjUzM3YzLjhoLTEuNFYxMDEuNjg2aDEuMTM3bC4xOTQsMS4yNjRoLjA2N2EzLjI1NywzLjI1NywwLDAsMSwxLjI1Ni0xLjEsMy44MzEsMy44MzEsMCwwLDEsMS42NDMtLjMzNywzLjQxMywzLjQxMywwLDAsMSwyLjgzNiwxLjI1Niw2LjY4Myw2LjY4MywwLDAsMS0uMDE3LDcuMDU3LDMuNDIsMy40MiwwLDAsMS0yLjgxNywxLjI2NFptLS4yLTguMzg1YTIuNDgyLDIuNDgyLDAsMCwwLTIuMDQ4Ljc4NCw0LjA0MSw0LjA0MSwwLDAsMC0uNjQ5LDIuNDk0di4zMTJhNC42MjUsNC42MjUsMCwwLDAsLjY0OSwyLjc4NSwyLjQ2NywyLjQ2NywwLDAsMCwyLjA4Mi44MzksMi4xNjQsMi4xNjQsMCwwLDAsMS44NzUtLjk2OSw0LjYsNC42LDAsMCwwLC42NzgtMi42NzEsNC40MjgsNC40MjgsMCwwLDAtLjY3OC0yLjY1MSwyLjIzMiwyLjIzMiwwLDAsMC0xLjkxNS0uOTIzWiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk2MCIgZGF0YS1uYW1lPSJQYXRoIDI5NjAiIGNsYXNzPSJjbHMtMiIgZD0iTTE1OS4wMzksMTExLjA5YTMuOTkzLDMuOTkzLDAsMCwxLTEuNjQ3LS4zMzMsMy4xLDMuMSwwLDAsMS0xLjI1Mi0xLjAyM2gtLjFhMTIuMjY1LDEyLjI2NSwwLDAsMSwuMSwxLjUzM3YzLjhoLTEuNFYxMDEuNjg2aDEuMTM3bC4xOTQsMS4yNjRoLjA2N2EzLjI1NywzLjI1NywwLDAsMSwxLjI1Ni0xLjEsMy44MzEsMy44MzEsMCwwLDEsMS42NDMtLjMzNywzLjQxMywzLjQxMywwLDAsMSwyLjgzNiwxLjI1Niw2LjY4Myw2LjY4MywwLDAsMS0uMDE3LDcuMDU3LDMuNDIsMy40MiwwLDAsMS0yLjgxNywxLjI2NFptLS4yLTguMzg1YTIuNDgyLDIuNDgyLDAsMCwwLTIuMDQ4Ljc4NCw0LjA0MSw0LjA0MSwwLDAsMC0uNjQ5LDIuNDk0di4zMTJhNC42MjUsNC42MjUsMCwwLDAsLjY0OSwyLjc4NSwyLjQ2NywyLjQ2NywwLDAsMCwyLjA4Mi44MzksMi4xNjQsMi4xNjQsMCwwLDAsMS44NzUtLjk2OSw0LjYsNC42LDAsMCwwLC42NzgtMi42NzEsNC40MjgsNC40MjgsMCwwLDAtLjY3OC0yLjY1MSwyLjIzMiwyLjIzMiwwLDAsMC0xLjkxMS0uOTIzWiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk2MSIgZGF0YS1uYW1lPSJQYXRoIDI5NjEiIGNsYXNzPSJjbHMtMiIgZD0iTTE3My42MTIsMTA2LjNhNS4wOTMsNS4wOTMsMCwwLDEtMS4xMzcsMy41MjcsNC4wMDUsNC4wMDUsMCwwLDEtMy4xNDMsMS4yNjgsNC4xNzIsNC4xNzIsMCwwLDEtMi4yLS41ODEsMy44NCwzLjg0LDAsMCwxLTEuNDgzLTEuNjY5LDUuOCw1LjgsMCwwLDEtLjUyMi0yLjU0NSw1LjA4Nyw1LjA4NywwLDAsMSwxLjEyOS0zLjUxOCwzLjk5MSwzLjk5MSwwLDAsMSwzLjEzNS0xLjI2LDMuOTA3LDMuOTA3LDAsMCwxLDMuMDgsMS4yOSw1LjA3MSw1LjA3MSwwLDAsMSwxLjE0MSwzLjQ4OFptLTcuMDM2LDBhNC4zODQsNC4zODQsMCwwLDAsLjcwOCwyLjcsMi44MDksMi44MDksMCwwLDAsNC4xNjcsMCw0LjM2NSw0LjM2NSwwLDAsMCwuNzEyLTIuNyw0LjI5Myw0LjI5MywwLDAsMC0uNzEyLTIuNjc1LDIuNSwyLjUsMCwwLDAtMi4xLS45MTUsMi40NjEsMi40NjEsMCwwLDAtMi4wNzIuOSw0LjMzNCw0LjMzNCwwLDAsMC0uNywyLjY5WiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk2MiIgZGF0YS1uYW1lPSJQYXRoIDI5NjIiIGNsYXNzPSJjbHMtMiIgZD0iTTE4MC41MjUsMTAxLjUxN2E1LjUwNiw1LjUwNiwwLDAsMSwxLjEuMWwtLjE5NCwxLjNhNC43ODYsNC43ODYsMCwwLDAtMS4wMTEtLjEyNywyLjQ2LDIuNDYsMCwwLDAtMS45MTcuOTExLDMuMzE4LDMuMzE4LDAsMCwwLS44LDIuMjY3djQuOTU1aC0xLjR2LTkuMjM2aDEuMTU0bC4xNiwxLjcxaC4wNjhhNC4wNTQsNC4wNTQsMCwwLDEsMS4yMzgtMS4zOSwyLjc4NywyLjc4NywwLDAsMSwxLjYtLjQ5WiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk2MyIgZGF0YS1uYW1lPSJQYXRoIDI5NjMiIGNsYXNzPSJjbHMtMiIgZD0iTTE4Ny4zNjMsMTA5LjkzNmE0LjUwNiw0LjUwNiwwLDAsMCwuNzE2LS4wNTUsNC4zODcsNC4zODcsMCwwLDAsLjU0OC0uMTE0djEuMDdhMi41LDIuNSwwLDAsMS0uNjcuMTgxLDUsNSwwLDAsMS0uOC4wNzJxLTIuNjgsMC0yLjY4LTIuODIzdi01LjQ5NGgtMS4zMjNWMTAyLjFsMS4zMjMtLjU4Mi41OS0xLjk3MmguODA5djIuMTQxaDIuNjh2MS4wODdoLTIuNjh2NS40MzVhMS44NjksMS44NjksMCwwLDAsLjQsMS4yODFBMS4zNzcsMS4zNzcsMCwwLDAsMTg3LjM2MywxMDkuOTM2WiIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk2NCIgZGF0YS1uYW1lPSJQYXRoIDI5NjQiIGNsYXNzPSJjbHMtMiIgZD0iTTE5NC41MzgsMTExLjA5YTQuMjM5LDQuMjM5LDAsMCwxLTMuMjMxLTEuMjQ3LDQuODI0LDQuODI0LDAsMCwxLTEuMTg0LTMuNDYzLDUuMzU1LDUuMzU1LDAsMCwxLDEuMS0zLjU0OCwzLjY1MiwzLjY1MiwwLDAsMSwyLjk1NC0xLjMxNSwzLjQ4NCwzLjQ4NCwwLDAsMSwyLjc0NywxLjE0Miw0LjM3OCw0LjM3OCwwLDAsMSwxLjAxMSwzLjAxM3YuODg1aC02LjM2MmEzLjY2LDMuNjYsMCwwLDAsLjgyMiwyLjQ2OSwyLjg0MywyLjg0MywwLDAsMCwyLjIuODQzLDcuNDMxLDcuNDMxLDAsMCwwLDIuOTQ5LS42MjR2MS4yNDdhNy4zNzcsNy4zNzcsMCwwLDEtMS40LjQ1OSw3Ljg2Myw3Ljg2MywwLDAsMS0xLjYuMTM5Wm0tLjM3OS04LjRhMi4yODYsMi4yODYsMCwwLDAtMS43NzQuNzI1LDMuMzM3LDMuMzM3LDAsMCwwLS43NzksMi4wMDZoNC44MjhhMy4wNzIsMy4wNzIsMCwwLDAtLjU5LTIuMDI3LDIuMDc2LDIuMDc2LDAsMCwwLTEuNjg1LS43MDZaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTY1IiBkYXRhLW5hbWU9IlBhdGggMjk2NSIgY2xhc3M9ImNscy0yIiBkPSJNMjA2Ljk1MSwxMDkuNjgzaC0uMDc2YTMuMjg3LDMuMjg3LDAsMCwxLTIuOSwxLjQwNywzLjQyNywzLjQyNywwLDAsMS0yLjgxOS0xLjIzOSw1LjQ1Miw1LjQ1MiwwLDAsMS0xLjAwNi0zLjUyMiw1LjU0Miw1LjU0MiwwLDAsMSwxLjAxMS0zLjU0OCwzLjQsMy40LDAsMCwxLDIuODE0LTEuMjY0LDMuMzYxLDMuMzYxLDAsMCwxLDIuODgzLDEuMzY1aC4xMDlsLS4wNTktLjY2NS0uMDM0LS42NDlWOTcuODA5aDEuNHYxMy4xMTNoLTEuMTM4Wm0tMi44LjIzNmEyLjU1MSwyLjU1MSwwLDAsMCwyLjA3OC0uNzc5LDMuOTQ3LDMuOTQ3LDAsMCwwLC42NDQtMi41MTZ2LS4zYTQuNjM4LDQuNjM4LDAsMCwwLS42NTMtMi44LDIuNDgxLDIuNDgxLDAsMCwwLTIuMDg2LS44MzksMi4xNCwyLjE0LDAsMCwwLTEuODgzLjk1Nyw0Ljc2LDQuNzYsMCwwLDAtLjY1MywyLjcsNC41NTQsNC41NTQsMCwwLDAsLjY0OSwyLjY3MSwyLjE5NCwyLjE5NCwwLDAsMCwxLjkwNi45MDZaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTY2IiBkYXRhLW5hbWU9IlBhdGggMjk2NiIgY2xhc3M9ImNscy0yIiBkPSJNMjIwLjcxMiwxMDEuNTM0YTMuNDM1LDMuNDM1LDAsMCwxLDIuODI3LDEuMjQzLDYuNjUzLDYuNjUzLDAsMCwxLS4wMDksNy4wNTMsMy40MTcsMy40MTcsMCwwLDEtMi44MTgsMS4yNiw0LDQsMCwwLDEtMS42NDgtLjMzMywzLjA5NCwzLjA5NCwwLDAsMS0xLjI1MS0xLjAyM2gtLjFsLS4yOTUsMS4xODhoLTFWOTcuODA5aDEuNFYxMDFxMCwxLjA2OS0uMDY4LDEuOTIxaC4wNjhhMy4zMjIsMy4zMjIsMCwwLDEsMi44OTQtMS4zODdabS0uMiwxLjE3MWEyLjQ0LDIuNDQsMCwwLDAtMi4wNjQuODIyLDYuMzM4LDYuMzM4LDAsMCwwLC4wMTcsNS41NTMsMi40NjQsMi40NjQsMCwwLDAsMi4wODEuODM5LDIuMTU4LDIuMTU4LDAsMCwwLDEuOTIyLS45NCw0LjgyOCw0LjgyOCwwLDAsMCwuNjMyLTIuNyw0LjY0NSw0LjY0NSwwLDAsMC0uNjMyLTIuNjg5LDIuMjQyLDIuMjQyLDAsMCwwLTEuOTU5LS44ODVaIi8+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yOTY3IiBkYXRhLW5hbWU9IlBhdGggMjk2NyIgY2xhc3M9ImNscy0yIiBkPSJNMjI1Ljc1OCwxMDEuNjg2aDEuNWwyLjAyMyw1LjI2N2EyMC4xODgsMjAuMTg4LDAsMCwxLC44MjYsMi42aC4wNjdxLjEwOS0uNDMxLjQ1OS0xLjQ3MXQyLjI4OC02LjRoMS41TDIzMC40NTIsMTEyLjJhNS4yNTMsNS4yNTMsMCwwLDEtMS4zNzgsMi4yMTIsMi45MzIsMi45MzIsMCwwLDEtMS45MzQuNjUzLDUuNjU5LDUuNjU5LDAsMCwxLTEuMjY0LS4xNDNWMTEzLjhhNC45LDQuOSwwLDAsMCwxLjAzNy4xLDIuMTM2LDIuMTM2LDAsMCwwLDIuMDU2LTEuNjE4bC41MTQtMS4zMTRaIi8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg==){height="40"}]{.link}

Explore
:::
:::
:::

::: {.swagger-ui}
<div>

</div>

<div>

::: {.information-container .wrapper}
::: {.section .block .col-12}
<div>

::: {.info}
ChatApp[]{.small}

``` {.version}
 1.0.0 
```

[]{.small}

``` {.version}
OAS3
```

::: {.description}
::: {.renderedMarkdown}
ChatApp REST API description
:::
:::
:::

</div>
:::
:::

::: {.scheme-container}
::: {.section .schemes .wrapper .block .col-12}
::: {.auth-wrapper}
Authorize
:::
:::
:::

<div>

</div>

::: {.wrapper}
::: {.section .block .col-12 .block-desktop .col-12-desktop}
<div>

::: {.opblock-tag-section .is-open}
### [Users](http://localhost:3007/api/docs/#/Users){.nostyle}[]{.small} {#operations-tag-Users .opblock-tag .no-desc tag="Users" is-open="true"}

<div>

</div>

::: {.no-margin}
::: {.operation-tag-content}

::: {#operations-Users-UsersController_getAllUsers .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/users](http://localhost:3007/api/docs/#/Users/UsersController_getAllUsers){.nostyle}]{.opblock-summary-path
path="/api/users"}

::: {.opblock-summary-description}
Получение всех пользователей
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Список пользователей  |                       |
|                       | получен               |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#9eY             |                       |
|                       | E3B4= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "Zd8GFPQ=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | []{.model-toggle}     |                       |
|                       |                       |                       |
|                       | \[                    |                       |
|                       |                       |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}\]   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_getUserById .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/users/byId](http://localhost:3007/api/docs/#/Users/UsersController_getUserById){.nostyle}]{.opblock-summary-path
path="/api/users/byId"}

::: {.opblock-summary-description}
Получение пользователя по id
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-1 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#WyYq2D4= aria-hidden="false" aria-labelledby="xiAt7gk=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/UserIdDto]{.model-hint}[UserIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь получен  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#4rp             |                       |
|                       | g1bk= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "25Y21as=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_deleteUser .opblock .opblock-delete .is-open}
::: {.opblock-summary .opblock-summary-delete}
[DELETE]{.opblock-summary-method}[[/api/users/byId](http://localhost:3007/api/docs/#/Users/UsersController_deleteUser){.nostyle}]{.opblock-summary-path
path="/api/users/byId"}

::: {.opblock-summary-description}
Удаление пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-2 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-1 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#sMiTx74= aria-hidden="false" aria-labelledby="uzpJcNc=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/UserIdDto]{.model-hint}[UserIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь удален   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_getUserByEmail .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/users/byEmail](http://localhost:3007/api/docs/#/Users/UsersController_getUserByEmail){.nostyle}]{.opblock-summary-path
path="/api/users/byEmail"}

::: {.opblock-summary-description}
Получение пользователя по email
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-3 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-2 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#t2dggU0= aria-hidden="false" aria-labelledby="ZtcEu28=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/UserEmailDto]{.model-hint}[UserEmailDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| email[\*]{.star}                  | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Email пользователя                |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь получен  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#g88             |                       |
|                       | xChs= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "l44bceU=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_checkUserId .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/users/checkId](http://localhost:3007/api/docs/#/Users/UsersController_checkUserId){.nostyle}]{.opblock-summary-path
path="/api/users/checkId"}

::: {.opblock-summary-description}
Проверка существования пользователя по id
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-4 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-3 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#w82h4Lo= aria-hidden="false" aria-labelledby="LuzYA+0=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/UserIdDto]{.model-hint}[UserIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Ответ получен         |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#U2g             |                       |
|                       | 0gMA= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "/L+DRfg=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[boolean]{.prop-t   |                       |
|                       | ype}]{.prop}]{.model} |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_checkUserEmail .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/users/checkEmail](http://localhost:3007/api/docs/#/Users/UsersController_checkUserEmail){.nostyle}]{.opblock-summary-path
path="/api/users/checkEmail"}

::: {.opblock-summary-description}
Проверка существования пользователя по email
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-5 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-4 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#ZoORcGQ= aria-hidden="false" aria-labelledby="tk5I4xs=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/UserEmailDto]{.model-hint}[UserEmailDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| email[\*]{.star}                  | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Email пользователя                |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Ответ получен         |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#YzG             |                       |
|                       | V+ls= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "8MTsJUw=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[boolean]{.prop-t   |                       |
|                       | ype}]{.prop}]{.model} |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_editUserName .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/users/editUserName](http://localhost:3007/api/docs/#/Users/UsersController_editUserName){.nostyle}]{.opblock-summary-path
path="/api/users/editUserName"}

::: {.opblock-summary-description}
Изменение имени пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-6 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-5 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#W2ENcok= aria-hidden="false" aria-labelledby="kM0esf4=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/EditUserNameDto]{.model-hint}[EditUserNameDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| username[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Новое имя пользователя            |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Имя пользователя      |                       |
|                       | изменено              |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#81p             |                       |
|                       | e6/0= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "q61nxC0=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_editUserEmail .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/users/editUserEmail](http://localhost:3007/api/docs/#/Users/UsersController_editUserEmail){.nostyle}]{.opblock-summary-path
path="/api/users/editUserEmail"}

::: {.opblock-summary-description}
Изменение email пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-7 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-6 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#EhDNFgI= aria-hidden="false" aria-labelledby="X3rhWNE=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/EditUserEmailAuthDto]{.model-hint}[EditUserEmailAuthDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| newEmail[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Новый email пользователя          |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| email[\*]{.star}                  | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Email пользователя                |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| password[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Пароль пользователя               |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Email пользователя    |                       |
|                       | изменен               |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#Z9P             |                       |
|                       | U9rE= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "ya/CvyI=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_editUserPassword .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/users/editUserPassword](http://localhost:3007/api/docs/#/Users/UsersController_editUserPassword){.nostyle}]{.opblock-summary-path
path="/api/users/editUserPassword"}

::: {.opblock-summary-description}
Изменение пароля пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-8 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-7 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#Gn/Q43s= aria-hidden="false" aria-labelledby="gFEr8Zw=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/EditUserPasswordAuthDto]{.model-hint}[EditUserPasswordAuthDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| newPassword[\*]{.star}            | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Новый пароль пользователя         |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| email[\*]{.star}                  | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Email пользователя                |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| password[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Пароль пользователя               |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пароль пользователя   |                       |
|                       | изменен               |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#4Y+             |                       |
|                       | VN8E= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "KDS82P8=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_editUserOnline .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/users/editUserOnline](http://localhost:3007/api/docs/#/Users/UsersController_editUserOnline){.nostyle}]{.opblock-summary-path
path="/api/users/editUserOnline"}

::: {.opblock-summary-description}
Изменение статуса пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-9 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-8 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#eENQrxc= aria-hidden="false" aria-labelledby="fRvg6KY=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/EditUserOnlineDto]{.model-hint}[EditUserOnlineDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| online[\*]{.star}                 | [[[bool                           |
|                                   | ean]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Статус пользователя               |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Статус пользователя   |                       |
|                       | изменен               |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#ua4             |                       |
|                       | ouQQ= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "20y3f38=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_editUserAvatar .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/users/editUserAvatar](http://localhost:3007/api/docs/#/Users/UsersController_editUserAvatar){.nostyle}]{.opblock-summary-path
path="/api/users/editUserAvatar"}

::: {.opblock-summary-description}
Изменение аватара пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-10 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-9 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#Wk0OPIo= aria-hidden="false" aria-labelledby="f4TPOVU=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/EditUserAvatarDto]{.model-hint}[EditUserAvatarDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| avatarSrc[\*]{.star}              | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Ссылка на аватар пользователя     |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Аватар пользователя   |                       |
|                       | изменен               |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#2HR             |                       |
|                       | tf+o= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "XE6M/1M=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Users-UsersController_confirmUser .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/users/confirm](http://localhost:3007/api/docs/#/Users/UsersController_confirmUser){.nostyle}]{.opblock-summary-path
path="/api/users/confirm"}

::: {.opblock-summary-description}
Подтверждение email пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-11 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-10 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#R7rrC8k= aria-hidden="false" aria-labelledby="/fcl9PY=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/UserIdDto]{.model-hint}[UserIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | пользователя                      |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Email пользователя    |                       |
|                       | подтвержден           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#UWe             |                       |
|                       | 3YoI= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "Dd0jQcI=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь не       |                       |
|                       | найден                |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::
:::
:::
:::

::: {.opblock-tag-section .is-open}
### [Auth](http://localhost:3007/api/docs/#/Auth){.nostyle}[]{.small} {#operations-tag-Auth .opblock-tag .no-desc tag="Auth" is-open="true"}

<div>

</div>

::: {.no-margin}
::: {.operation-tag-content}

::: {#operations-Auth-AuthController_login .opblock .opblock-post .is-open}
::: {.opblock-summary .opblock-summary-post}
[POST]{.opblock-summary-method}[[/auth/login](http://localhost:3007/api/docs/#/Auth/AuthController_login){.nostyle}]{.opblock-summary-path
path="/auth/login"}

::: {.opblock-summary-description}
Вход в аккаунт
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-12 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-11 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#6YN/WhA= aria-hidden="false" aria-labelledby="3nrFhvs=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/LoginDto]{.model-hint}[LoginDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| email[\*]{.star}                  | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Email пользователя                |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| password[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Пароль пользователя               |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Вход в аккаунт        |                       |
|                       | выполнен успешно      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#Yq+             |                       |
|                       | REHY= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "5kyb+lY=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Вход в аккаунт        |                       |
|                       | невозможен,           |                       |
|                       | пользователь с таким  |                       |
|                       | email и паролем не    |                       |
|                       | существует            |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Auth-AuthController_logout .opblock .opblock-post .is-open}
::: {.opblock-summary .opblock-summary-post}
[POST]{.opblock-summary-method}[[/auth/logout](http://localhost:3007/api/docs/#/Auth/AuthController_logout){.nostyle}]{.opblock-summary-path
path="/auth/logout"}

::: {.opblock-summary-description}
Выход из аккаунта
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-13 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Выход из аккаунта     |                       |
|                       | выполнен успешно      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#q3s             |                       |
|                       | 56S0= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "/OohSwc=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[string]{.prop-t    |                       |
|                       | ype}]{.prop}]{.model} |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Auth-AuthController_register .opblock .opblock-post .is-open}
::: {.opblock-summary .opblock-summary-post}
[POST]{.opblock-summary-method}[[/auth/register](http://localhost:3007/api/docs/#/Auth/AuthController_register){.nostyle}]{.opblock-summary-path
path="/auth/register"}

::: {.opblock-summary-description}
Регистрация пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-14 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-12 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#+4YVJ1M= aria-hidden="false" aria-labelledby="NAYPJZY=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/CreateUserDto]{.model-hint}[CreateUserDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| username[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Имя пользователя                  |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| email[\*]{.star}                  | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Email пользователя                |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| password[\*]{.star}               | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Пароль пользователя               |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Регистрация выполнена |                       |
|                       | успешно               |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#TlD             |                       |
|                       | Gy/I= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "nwFLwGM=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\#/components/sc   |                       |
|                       | hemas/UserEntity]{.mo |                       |
|                       | del-hint}[UserEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | onlin  | [[[b   |   |                       |
|                       | | e[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | акти   |   |                       |
|                       | |        | вности |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | онлайн |   |                       |
|                       | |        | /      |   |                       |
|                       | |        | оф     |   |                       |
|                       | |        | флайн) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | av     | [[[    |   |                       |
|                       | | atarSr | string |   |                       |
|                       | | c[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Ссылка |   |                       |
|                       | |        | на     |   |                       |
|                       | |        | аватар |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | co     | [[[b   |   |                       |
|                       | | nfirme | oolean |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | у      |   |                       |
|                       | |        | четной |   |                       |
|                       | |        | записи |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | (      |   |                       |
|                       | |        | подтве |   |                       |
|                       | |        | рждена |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | п      |   |                       |
|                       | |        | одтвер |   |                       |
|                       | |        | ждена) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | u      | [[[    |   |                       |
|                       | | sernam | string |   |                       |
|                       | | e[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Имя    |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | emai   | [[[    |   |                       |
|                       | | l[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Email  |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | пользо |   |                       |
|                       | |        | вателя |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Вход уже выполнен под |                       |
|                       | другим email          |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 409                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Пользователь с таким  |                       |
|                       | email уже существует  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::
:::
:::
:::

::: {.opblock-tag-section .is-open}
### [Messages](http://localhost:3007/api/docs/#/Messages){.nostyle}[]{.small} {#operations-tag-Messages .opblock-tag .no-desc tag="Messages" is-open="true"}

<div>

</div>

::: {.no-margin}
::: {.operation-tag-content}

::: {#operations-Messages-MessagesController_createMessage .opblock .opblock-post .is-open}
::: {.opblock-summary .opblock-summary-post}
[POST]{.opblock-summary-method}[[/api/messages](http://localhost:3007/api/docs/#/Messages/MessagesController_createMessage){.nostyle}]{.opblock-summary-path
path="/api/messages"}

::: {.opblock-summary-description}
Создание сообщения
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-15 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-13 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#DJFDR9M= aria-hidden="false" aria-labelledby="0rPHZr4=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/CreateMessageDto]{.model-hint}[CreateMessageDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| toUserId[\*]{.star}               | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | получателя                        |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| text[\*]{.star}                   | [[[str                            |
|                                   | ing]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Текст сообщения                   |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщение создано     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#NAX             |                       |
|                       | 9meQ= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "zo7BND8=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\                  |                       |
|                       | #/components/schemas/ |                       |
|                       | MessageEntity]{.model |                       |
|                       | -hint}[MessageEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | dat    | [[     |   |                       |
|                       | | e[\*]{ | [strin |   |                       |
|                       | | .star} | g]{.pr |   |                       |
|                       | |        | op-typ |   |                       |
|                       | |        | e}[(\$ |   |                       |
|                       | |        | date-t |   |                       |
|                       | |        | ime)]{ |   |                       |
|                       | |        | .prop- |   |                       |
|                       | |        | format |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Дата   |   |                       |
|                       | |        | со     |   |                       |
|                       | |        | здания |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | tex    | [[[    |   |                       |
|                       | | t[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Текст  |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | reade  | [[[b   |   |                       |
|                       | | d[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | (про   |   |                       |
|                       | |        | читано |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | проч   |   |                       |
|                       | |        | итано) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | fro    | [[[    |   |                       |
|                       | | mUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | отпра  |   |                       |
|                       | |        | вителя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | t      | [[[    |   |                       |
|                       | | oUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | полу   |   |                       |
|                       | |        | чателя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Получатель не найден  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Messages-MessagesController_getUserMessages .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/messages](http://localhost:3007/api/docs/#/Messages/MessagesController_getUserMessages){.nostyle}]{.opblock-summary-path
path="/api/messages"}

::: {.opblock-summary-description}
Получение всех сообщений пользователя
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-16 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщения получены    |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#rbD             |                       |
|                       | 5MZM= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "REaHaOE=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | []{.model-toggle}     |                       |
|                       |                       |                       |
|                       | \[                    |                       |
|                       |                       |                       |
|                       | [[[\                  |                       |
|                       | #/components/schemas/ |                       |
|                       | MessageEntity]{.model |                       |
|                       | -hint}[MessageEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | dat    | [[     |   |                       |
|                       | | e[\*]{ | [strin |   |                       |
|                       | | .star} | g]{.pr |   |                       |
|                       | |        | op-typ |   |                       |
|                       | |        | e}[(\$ |   |                       |
|                       | |        | date-t |   |                       |
|                       | |        | ime)]{ |   |                       |
|                       | |        | .prop- |   |                       |
|                       | |        | format |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Дата   |   |                       |
|                       | |        | со     |   |                       |
|                       | |        | здания |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | tex    | [[[    |   |                       |
|                       | | t[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Текст  |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | reade  | [[[b   |   |                       |
|                       | | d[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | (про   |   |                       |
|                       | |        | читано |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | проч   |   |                       |
|                       | |        | итано) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | fro    | [[[    |   |                       |
|                       | | mUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | отпра  |   |                       |
|                       | |        | вителя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | t      | [[[    |   |                       |
|                       | | oUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | полу   |   |                       |
|                       | |        | чателя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}\]   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен по    |                       |
|                       | причине отсутствующей |                       |
|                       | авторизации           |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Messages-MessagesController_getMessageById .opblock .opblock-get .is-open}
::: {.opblock-summary .opblock-summary-get}
[GET]{.opblock-summary-method}[[/api/messages/byId](http://localhost:3007/api/docs/#/Messages/MessagesController_getMessageById){.nostyle}]{.opblock-summary-path
path="/api/messages/byId"}

::: {.opblock-summary-description}
Получение сообщения по идентификатору
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-17 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-14 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#p+kwHxE= aria-hidden="false" aria-labelledby="mKtsN2E=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/MessageIdDto]{.model-hint}[MessageIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | сообщения                         |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщение получено    |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#rbg             |                       |
|                       | m744= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "N9ig8iY=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\                  |                       |
|                       | #/components/schemas/ |                       |
|                       | MessageEntity]{.model |                       |
|                       | -hint}[MessageEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | dat    | [[     |   |                       |
|                       | | e[\*]{ | [strin |   |                       |
|                       | | .star} | g]{.pr |   |                       |
|                       | |        | op-typ |   |                       |
|                       | |        | e}[(\$ |   |                       |
|                       | |        | date-t |   |                       |
|                       | |        | ime)]{ |   |                       |
|                       | |        | .prop- |   |                       |
|                       | |        | format |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Дата   |   |                       |
|                       | |        | со     |   |                       |
|                       | |        | здания |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | tex    | [[[    |   |                       |
|                       | | t[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Текст  |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | reade  | [[[b   |   |                       |
|                       | | d[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | (про   |   |                       |
|                       | |        | читано |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | проч   |   |                       |
|                       | |        | итано) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | fro    | [[[    |   |                       |
|                       | | mUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | отпра  |   |                       |
|                       | |        | вителя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | t      | [[[    |   |                       |
|                       | | oUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | полу   |   |                       |
|                       | |        | чателя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен       |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщение не найдено  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Messages-MessagesController_setReadMessage .opblock .opblock-put .is-open}
::: {.opblock-summary .opblock-summary-put}
[PUT]{.opblock-summary-method}[[/api/messages/byId](http://localhost:3007/api/docs/#/Messages/MessagesController_setReadMessage){.nostyle}]{.opblock-summary-path
path="/api/messages/byId"}

::: {.opblock-summary-description}
Установка сообщению статуса \"прочтено\"
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-18 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-15 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#wY7hQBw= aria-hidden="false" aria-labelledby="koI0zr0=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/MessageIdDto]{.model-hint}[MessageIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | сообщения                         |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Статус установлен     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.sectio          |                       |
|                       | n .response-controls} |                       |
|                       | ::: {.response-cont   |                       |
|                       | rol-media-type .respo |                       |
|                       | nse-control-media-typ |                       |
|                       | e--accept-controller} |                       |
|                       | [Media type]{.small}  |                       |
|                       |                       |                       |
|                       | ::: {.                |                       |
|                       | content-type-wrapper} |                       |
|                       | application/json      |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | [Controls `Accept`    |                       |
|                       | header.]{.small}      |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       |                       |                       |
|                       | ::: {.model-example}  |                       |
|                       | -   Example Value     |                       |
|                       | -   Schema            |                       |
|                       |                       |                       |
|                       | ::: {#hlt             |                       |
|                       | 2zJk= aria-hidden="fa |                       |
|                       | lse" aria-labelledby= |                       |
|                       | "ZxSNrV0=" data-name= |                       |
|                       | "modelPanel" role="ta |                       |
|                       | bpanel" tabindex="0"} |                       |
|                       | ::: {.model-box}      |                       |
|                       | [[[\                  |                       |
|                       | #/components/schemas/ |                       |
|                       | MessageEntity]{.model |                       |
|                       | -hint}[MessageEntity] |                       |
|                       | {.model-title__text}] |                       |
|                       | {.model-title}]{.poin |                       |
|                       | ter}[]{.model-toggle} |                       |
|                       |                       |                       |
|                       | [{]{.brace-open       |                       |
|                       | .objec                |                       |
|                       | t}[]{.model-jump-to-p |                       |
|                       | ath}[]{.inner-object} |                       |
|                       |                       |                       |
|                       | +--------+--------+   |                       |
|                       | | i      | [[[    |   |                       |
|                       | | d[\*]{ | number |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | dat    | [[     |   |                       |
|                       | | e[\*]{ | [strin |   |                       |
|                       | | .star} | g]{.pr |   |                       |
|                       | |        | op-typ |   |                       |
|                       | |        | e}[(\$ |   |                       |
|                       | |        | date-t |   |                       |
|                       | |        | ime)]{ |   |                       |
|                       | |        | .prop- |   |                       |
|                       | |        | format |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Дата   |   |                       |
|                       | |        | со     |   |                       |
|                       | |        | здания |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | tex    | [[[    |   |                       |
|                       | | t[\*]{ | string |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Текст  |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | reade  | [[[b   |   |                       |
|                       | | d[\*]{ | oolean |   |                       |
|                       | | .star} | ]{.pro |   |                       |
|                       | |        | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Статус |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | (про   |   |                       |
|                       | |        | читано |   |                       |
|                       | |        | / не   |   |                       |
|                       | |        | проч   |   |                       |
|                       | |        | итано) |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | fro    | [[[    |   |                       |
|                       | | mUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | отпра  |   |                       |
|                       | |        | вителя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       | | t      | [[[    |   |                       |
|                       | | oUserI | number |   |                       |
|                       | | d[\*]{ | ]{.pro |   |                       |
|                       | | .star} | p-type |   |                       |
|                       | |        | }]{.pr |   |                       |
|                       | |        | op}]{. |   |                       |
|                       | |        | model} |   |                       |
|                       | |        |        |   |                       |
|                       | |        | ::: {  |   |                       |
|                       | |        | .rende |   |                       |
|                       | |        | redMar |   |                       |
|                       | |        | kdown} |   |                       |
|                       | |        | Уник   |   |                       |
|                       | |        | альный |   |                       |
|                       | |        | и      |   |                       |
|                       | |        | дентиф |   |                       |
|                       | |        | икатор |   |                       |
|                       | |        | полу   |   |                       |
|                       | |        | чателя |   |                       |
|                       | |        | соо    |   |                       |
|                       | |        | бщения |   |                       |
|                       | |        | :::    |   |                       |
|                       | +--------+--------+   |                       |
|                       |                       |                       |
|                       | [}]{.brace-close}     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен       |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщение не найдено  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::

::: {#operations-Messages-MessagesController_deleteMessage .opblock .opblock-delete .is-open}
::: {.opblock-summary .opblock-summary-delete}
[DELETE]{.opblock-summary-method}[[/api/messages/byId](http://localhost:3007/api/docs/#/Messages/MessagesController_deleteMessage){.nostyle}]{.opblock-summary-path
path="/api/messages/byId"}

::: {.opblock-summary-description}
Удаление сообщения
:::
:::

::: {.no-margin}
::: {.opblock-body}
::: {.opblock-section}
::: {.opblock-section-header}
::: {.tab-header}
::: {.tab-item .active}
#### Parameters {#parameters-19 .opblock-title}
:::
:::

::: {.try-out}
Try it out
:::
:::

::: {.parameters-container}
::: {.opblock-description-wrapper}
No parameters
:::
:::

::: {.opblock-section .opblock-section-request-body}
::: {.opblock-section-header}
#### Request body {#request-body-16 .opblock-title .parameter__name .required}

::: {.content-type-wrapper .body-param-content-type}
application/json
:::
:::

::: {.opblock-description-wrapper}
<div>

::: {.model-example}
-   Example Value
-   Schema

::: {#9yV0Oog= aria-hidden="false" aria-labelledby="nONzCBU=" data-name="modelPanel" role="tabpanel" tabindex="0"}
::: {.model-box}
[[[\#/components/schemas/MessageIdDto]{.model-hint}[MessageIdDto]{.model-title__text}]{.model-title}]{.pointer}[]{.model-toggle}

[{]{.brace-open .object}[]{.model-jump-to-path}[]{.inner-object}

+-----------------------------------+-----------------------------------+
| id[\*]{.star}                     | [[[num                            |
|                                   | ber]{.prop-type}]{.prop}]{.model} |
|                                   |                                   |
|                                   | ::: {.renderedMarkdown}           |
|                                   | Уникальный идентификатор          |
|                                   | сообщения                         |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+

[}]{.brace-close}
:::
:::
:::

</div>
:::
:::
:::

::: {.execute-wrapper}
:::

::: {.responses-wrapper}
::: {.opblock-section-header}
#### Responses
:::

::: {.responses-inner}
+-----------------------+-----------------------+-----------------------+
| Code                  | Description           | Links                 |
+=======================+=======================+=======================+
| 200                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщение удалено     |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 403                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Доступ запрещен       |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
| 404                   | ::: {.response-co     | *No links*            |
|                       | l_description__inner} |                       |
|                       | ::                    |                       |
|                       | : {.renderedMarkdown} |                       |
|                       | Сообщение не найдено  |                       |
|                       | :::                   |                       |
|                       | :::                   |                       |
+-----------------------+-----------------------+-----------------------+
:::
:::
:::
:::
:::
:::
:::
:::

</div>
:::
:::

::: {.wrapper}
::: {.section .block .col-12 .block-desktop .col-12-desktop}
::: {.section .models .is-open}
#### Schemas

::: {.no-margin}
::: {#model-UserEntity .model-container data-name="UserEntity"}
[]{.models-jump-to-path}

[[[UserEntity]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-UserIdDto .model-container data-name="UserIdDto"}
[]{.models-jump-to-path}

[[[UserIdDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-UserEmailDto .model-container data-name="UserEmailDto"}
[]{.models-jump-to-path}

[[[UserEmailDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-EditUserNameDto .model-container data-name="EditUserNameDto"}
[]{.models-jump-to-path}

[[[EditUserNameDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-EditUserEmailAuthDto .model-container data-name="EditUserEmailAuthDto"}
[]{.models-jump-to-path}

[[[EditUserEmailAuthDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-EditUserPasswordAuthDto .model-container data-name="EditUserPasswordAuthDto"}
[]{.models-jump-to-path}

[[[EditUserPasswordAuthDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-EditUserOnlineDto .model-container data-name="EditUserOnlineDto"}
[]{.models-jump-to-path}

[[[EditUserOnlineDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-EditUserAvatarDto .model-container data-name="EditUserAvatarDto"}
[]{.models-jump-to-path}

[[[EditUserAvatarDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-LoginDto .model-container data-name="LoginDto"}
[]{.models-jump-to-path}

[[[LoginDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-CreateUserDto .model-container data-name="CreateUserDto"}
[]{.models-jump-to-path}

[[[CreateUserDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-CreateMessageDto .model-container data-name="CreateMessageDto"}
[]{.models-jump-to-path}

[[[CreateMessageDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-MessageEntity .model-container data-name="MessageEntity"}
[]{.models-jump-to-path}

[[[MessageEntity]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::

::: {#model-MessageIdDto .model-container data-name="MessageIdDto"}
[]{.models-jump-to-path}

[[[MessageIdDto]{.model
.model-title}]{.model-box}]{.pointer}[]{.model-toggle .collapsed}
:::
:::
:::
:::
:::

</div>
:::

::: {.wrapper}
::: {.section}
:::
:::
:::
:::
