# Tech Blog

A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. This project follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The site is deployed on Render.

## Table of Contents

- [Tech Blog](#tech-blog)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Database Setup](#database-setup)
    - [Running the Application](#running-the-application)
  - [Features](#features)
  - [Usage](#usage)
  - [Contact](#contact)

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/surpritam/tech-blog.git
   cd tech-blog
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your environment variables:
   ```sh
   DB_NAME='your-database-name'
   DB_USER='your-database-username'
   DB_PASSWORD='your-database-password'
   DB_HOST='localhost'
   DB_PORT='5432'
   ```
### Database Setup
   Seed the database
   ```sh
   npm run seed
   ```

### Running the Application
1. Start the server:
   ```sh
   npm run start
   ```
2. Open your browser and visit `http://localhost:3001`.

### Features

   * User registration and authentication with express-session
   * CRUD operations for blog posts
   * Commenting on blog posts
   * Update existing blogs while logged in
   * Delete post

### Usage

   * Navigate to the homepage to view existing blog posts.
   * Sign up or log in to create, edit, and delete your own blog posts.
   * Leave comments on posts when logged in.

### Contact

Pritam Sur - [GitHub](https://github.com/surpritam)

Project Link: https://github.com/surpritam/tech-blog 

