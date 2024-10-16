# Fast React App Template with Docker

This project is a fast and efficient template for building React applications with Docker. It provides a streamlined setup for both development and production environments, making it ideal for busy developers looking to get started quickly.

## Features

- **Dockerized**: Easily run your React app in Docker containers.
- **Nginx for Production**: Serves the built application using Nginx for optimal performance.
- **Development Support**: Easily switch between development and production modes.
- **Basic Project Structure**: Follows best practices for React application development.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) must be installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/ProgrammingWithOsku/react-webpack-template-dockerize
cd react-webpack-template-dockerize
```

### Install Dependencies

In the project directory, run:

```bash
npm install
```

### Run the Application

#### Development Mode

To run the application in development mode, use Docker Compose:

```bash
docker-compose up
```

This will start the application on [http://localhost:3000](http://localhost:3000).

#### Production Mode

To build and run the application in production mode, uncomment the production service in the `docker-compose.yml` file and run:

```bash
docker-compose up --build
```

### Directory Structure

```
your-project/
├── src/
│   ├── components/
│   │   ├── Header.js      # Header component
│   │   ├── Footer.js      # Footer component
│   │   └── Button.js      # Button component
│   │
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point for React application
│   └── styles/
│       └── App.scss       # Styles for the application
│
├── public/
│   └── index.html         # HTML file for the app
│
├── .eslintrc.js           # ESLint configuration file
├── jest.config.js         # Jest configuration file
├── package.json           # Project metadata and dependencies
└── webpack.config.js      # Webpack configuration file
```

## Running Tests

You can run tests using Jest with the following command:

```bash
npm test
```

## Conclusion

This template is designed to help developers quickly set up a React application using Docker, allowing them to focus on building features rather than spending time on configuration.

For any questions or feedback, feel free to reach out!

---

Created by Osku
```