<h1 align="center">NETApi Template</h1>

## Project Overview
This repository contains a modern REST API template built with Node.js, Express, and TypeScript. The API follows clean architecture principles and best practices for building scalable and maintainable backend services. It includes features like logging and OpenAPI documentation.

## Table of Contents
- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [1. Technologies](#1-technologies)
  - [1.1. TypeScript](#11-typescript)
  - [1.2. Node.js](#12-nodejs)
  - [1.3. Express](#13-express)
  - [1.4. Jest](#14-jest)
  - [1.5. Swagger/OpenAPI](#15-swaggeropenapi)
  - [1.6. i18next](#16-i18next)
  - [1.7. Links](#17-links)
- [2. Development Environment](#2-development-environment)
  - [2.1. Node.js](#21-nodejs)
  - [2.2. Pnpm (optional)](#22-pnpm-optional)
  - [2.3. Links](#23-links)
- [3. Getting Started](#3-getting-started)
  - [3.1. Clone Repository](#31-clone-repository)
  - [3.2. Install Dependencies](#32-install-dependencies)
  - [3.3. Environment Configuration](#33-environment-configuration)
  - [3.4. Running the Application](#34-running-the-application)
    - [3.4.1 Development Mode](#341-development-mode)
    - [3.4.2 Production Build](#342-production-build)
- [4. Documentation](#4-documentation)
  - [4.1. API Documentation](#41-api-documentation)
  - [4.2. Generating Documentation](#42-generating-documentation)
- [5. Testing](#5-testing)
  - [5.1 Testing Branch](#51-testing-branch)
  - [5.2. Running Tests](#52-running-tests)
  - [5.3. Test Coverage](#53-test-coverage)
- [6. Project Structure](#6-project-structure)
- [7. License](#7-license)

## 1. Technologies
This section outlines the core technologies used in this project.

### 1.1. TypeScript
TypeScript is a strongly typed programming language that builds on JavaScript, providing better tooling at any scale. It adds optional static typing to the language, enabling developers to catch errors early and improve code quality.

### 1.2. Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

### 1.3. Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building single-page, multi-page, and hybrid web applications.

### 1.4. Jest
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node, React, Angular, Vue, and more, making it a great choice for testing this project.

### 1.5. Swagger/OpenAPI
Swagger/OpenAPI is a specification for machine-readable interface files for describing, producing, consuming, and visualizing RESTful web services. It's used in this project for API documentation and testing.

### 1.6. i18next
i18next is an internationalization framework for JavaScript/TypeScript that provides a complete solution to localize your product from web to mobile and desktop.

### 1.7. Links
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Swagger/OpenAPI](https://swagger.io/)
- [i18next](https://www.i18next.com/)

## 2. Development Environment

### 2.1. Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

### 2.2. Pnpm (optional)
pnpm is a fast, disk space efficient package manager for JavaScript. It provides a fast and efficient way to install, update, and manage packages in a project. It uses a content-addressable storage to store packages, which allows it to save disk space and speed up installation times.

### 2.3. Links
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## 3. Getting Started

### 3.1. Clone Repository
```bash
git clone https://github.com/KristhDev/NETApi-template.git
cd NETApi-template
```

### 3.2. Install Dependencies
```bash
pnpm install
```

### 3.3. Environment Configuration
Copy the `.env.example` file and rename it to `.env`, then fill in the values. Here is a table explaining each variable:

| Variable                   | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| APP_ENV                    | Application environment (local, development, production) |
| APP_NAME                   | Application name                                         |
| APP_PORT                   | Application port                                         |
| LOGS_DIR                   | Directory for log files                                  |
| LOGS_FILE_NAME             | Name of the log file                                     |
| SWAGGER_CONTACT_EMAIL      | Contact email for Swagger documentation                  |
| SWAGGER_CONTACT_URL        | Contact URL for Swagger documentation                    |
| SWAGGER_LICENSE_URL        | License URL for Swagger documentation                    |
| SWAGGER_OPEN_API_FILE_DIR  | Directory for OpenAPI documentation files                |
| SWAGGER_OPEN_API_FILE_NAME | Name of the OpenAPI documentation file                   |
| SWAGGER_OPEN_API_VERSION   | Version of the OpenAPI documentation                     |

### 3.4. Running the Application

#### 3.4.1 Development Mode
```bash
pnpm dev
```

#### 3.4.2 Production Build
```bash
pnpm build
pnpm start
```

The API will be available at `http://localhost:9000` (or the port configured in `APP_PORT`).

## 4. Documentation

### 4.1. API Documentation
Interactive API documentation is available at:

- Swagger UI: `http://localhost:9000/api/docs/swagger`
- Scalar: `http://localhost:9000/api/docs/scalar`
- OpenAPI Schema: `http://localhost:9000/api/docs/openapi.json`

### 4.2. Generating Documentation
To generate documentation in JSON format:
```bash
pnpm docs:generate-openapi:json
```

To generate documentation in YAML format:
```bash
pnpm docs:generate-openapi:yaml
```

The generated documentation will be saved in the directory specified by the `SWAGGER_OPEN_API_FILE_DIR` environment variable.

## 5. Testing

### 5.1 Testing Branch
The testing branch is used to test the application in a development environment. It is a separate branch from the main branch and is used to test the application in a development environment.

To switch to the testing branch:
```bash
git switch testing
```

### 5.2. Running Tests
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run E2E tests
pnpm test:e2e
```

### 5.3. Test Coverage
To generate a test coverage report:
```bash
pnpm test:coverage
```

## 6. Project Structure

```
src/
├── application/         # Application business logic and use cases
│   ├── constants/       # Application-wide constants
│   └── usecases/        # Application use cases
├── domain/              # Domain layer
│   ├── contracts/       # Interfaces and type definitions
│   ├── dtos/            # Data Transfer Objects
│   └── errors/          # Domain errors
├── infrastructure/      # Infrastructure implementations
│   ├── adapters/        # External service adapters
│   ├── facades/         # Infrastructure facades
│   └── interfaces/      # Infrastructure interfaces
├── presentation/        # Presentation layer
│   ├── locales/         # Localization files
│   ├── modules/         # Presentation modules
│   └── server/          # Presentation server
│       ├── controllers/ # Server controllers
│       ├── middlewares/ # Server middlewares
│       └── utils/       # Server utils
└── scripts/             # Scripts
    └── docs/            # Documentation scripts
```

## 7. License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
