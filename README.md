# Mindful Ocean

Mindful Ocean is an interactive full-stack application focused on environmental awareness and ocean pollution visualization.  
The project combines a React frontend, ASP.NET backend, MySQL database and Unreal Engine 3D environment to provide users with immersive access to environmental pollution data.

---

# Overview

The application was developed in an interdisciplinary international team environment during an academic project.  
It combines software engineering, data visualization and immersive technologies to create an interactive underwater experience driven by real pollution datasets.

Users can:
- explore underwater environments,
- retrieve pollution information for ocean regions,
- interact with immersive 3D scenes,
- and access environmental datasets through RESTful APIs.

---

# Features

- RESTful backend API with ASP.NET
- Interactive React frontend
- MySQL-based environmental dataset management
- Ocean pollution data visualization
- Unreal Engine underwater exploration environment
- Swagger API testing interface
- Interactive geospatial pollution queries
- Responsive frontend animations

---

# Tech Stack

## Frontend
- React
- TypeScript
- HTML5 / CSS3

## Backend
- ASP.NET
- C#
- REST APIs
- Swagger

## Database
- MySQL

## 3D / Immersive Environment
- Unreal Engine 5
- Blueprints

## Tooling
- Git
- npm
- MAMP

---

# System Architecture

The system follows a modular client-server architecture:

- The React frontend communicates with the ASP.NET backend through REST APIs.
- The backend processes environmental queries and retrieves pollution data from MySQL.
- Swagger is used for API testing and endpoint validation.
- Unreal Engine provides an immersive visualization layer for interacting with environmental information.

---

# API Example

Example request for retrieving pollution data:

```http
GET /api/pollution?location=Brisbane
```

The API returns ocean pollution information for specific coastal regions and harbours.

---

# Local Development Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Frontend Setup

```bash
cd client
npm install
npm start
```

Recommended browsers:
- Chrome
- Firefox

---

## Backend Setup

### Requirements
- MAMP
- MySQL Workbench

### Database Setup

1. Start MAMP
2. Ensure MySQL runs on port `3306`
3. Import the provided SQL dataset into MySQL Workbench
4. Configure database credentials in:

```txt
appsettings.Development.json
```

### Start Backend

Navigate to:

```txt
Properties/launchSettings.json
```

and select the HTTP launch configuration.

Swagger can then be used to test API endpoints.

---

# Unreal Engine Environment

The Unreal Engine prototype provides an immersive underwater exploration experience.

## Controls

| Action | Key |
|---|---|
| Move Forward | W |
| Move Backward | S |
| Move Left | A |
| Move Right | D |
| Move Up | Space |
| Move Down | CTRL |

Interactive light markers guide users through areas containing environmental information and polluted zones.

---

# Project Goals

The project explores:
- environmental data visualization,
- immersive storytelling,
- interactive educational experiences,
- and API-driven software systems.

The goal was to combine immersive technologies with environmental awareness and modern full-stack software engineering practices.

---

# Responsibilities

My primary contributions included:

- Full-stack development with React and TypeScript for the Frontend and C# for the Backend
- API integration
- Database interaction
- Integration of environmental data into the frontend experience

---

# Future Improvements

Potential future extensions include:

- Dockerized deployment
- Cloud hosting
- Real-time environmental datasets
- Authentication and user profiles
- Advanced geospatial visualization
- Performance optimization for large datasets

---

# Contributors

Developed collaboratively by:

- Janniella Heimig
- Maria Guerreiro
- Lisa Kohls
