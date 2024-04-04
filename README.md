# AI-Agent Adviser

<br/>
<p align="center">
  <a href="https://www.openai.com/" >
        <img alt="OpenAI's GPT-3 Turbo (for AI-powered features) - An autoregressive language model that uses deep learning to produce human-like text" src="https://img.shields.io/static/v1.svg?label=OpenAI&message=GPT-4&color=brightgreen" /></a>
    <a href="https://platform.openai.com/docs/assistants/overview" >
        <img alt="OpenAI Assistants API - Leverages GPT to provide conversational and interactive AI experiences" src="https://img.shields.io/static/v1.svg?label=OpenAI&message=Assistants API&color=brightgreen" /></a>
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=lightyellow" /></a>
  <a href="https://expressjs.com/" >
        <img alt="Express.js - Fast, unopinionated, minimalist web framework for Node.js" src="https://img.shields.io/static/v1.svg?label=Express.js&message=Web framework&color=green" /></a>
    <a href="https://www.npmjs.com/" >
        <img alt="Node Package Manager" src="https://img.shields.io/static/v1.svg?label=npm&message=packages&color=lightblue" /></a>
    <a href="https://reactjs.org/" >
        <img alt="React - A JavaScript library for building user interfaces" src="https://img.shields.io/static/v1.svg?label=React&message=UI library&color=blue" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=lightgreen" /></a>
</p>
<br/>

The AI Agent Advisor is an innovative tool designed to assist developers and project managers in streamlining the development planning process. By utilizing OpenAI's Assistants API, this application offers insightful, AI-driven recommendations for technology stacks, tailored to the specific needs of your projects. Say goodbye to the time-consuming trial and error or extensive research typically required in deciding on the right technologies.

## Features

- AI-driven recommendations for technology stacks based on project descriptions.
- Interactive UI for submitting project details and receiving tailored advice.
- Utilizes OpenAI's Assistants API for dynamic and insightful tech stack guidance.

## Installation

1. **Clone the Repository**
Clone the AI Agent Advisor repository to your local machine:

```bash
git clone https://github.com/naturuplift/AI-AgentAdviser.git
```

2. **Navigate to the Project Directory:**

```bash
cd AI-AgentAdviser
```

3. **Install Dependencies**
Install the necessary packages for both the frontend and backend:

```bash
cd server && npm install
cd ../client && npm install
```

## OpenAI API Key

An OpenAI API key is required to access the Assistants API. Sign up at [OpenAI][open-ai], set up billing, and generate an API key. Securely store this key and use it to configure your environment variables.

- Create an `.env` file in the root of the project and add your OpenAI API key:

```bash
OPENAI_API_KEY=your_api_key_here
```

## Usage

Build the application presentation from project directory:

```bash
npm run build
```

**Start the Backend Server**

```bash
cd server
npm start
```

- **Launch the Client Application**
In a new terminal, navigate to the client directory and start the React application:

```bash
cd client
npm run preview
```

Navigate to `http://localhost:3000` in your web browser to start application.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests. If you have suggestions or encounter issues, please open an issue in the repository.

## License

This project is licensed under the [MIT License][mit-license]. See the LICENSE file for details.

[open-ai]: <https://openai.com/>
[mit-license]: <https://github.com/naturuplift/TechStackAdvisor/blob/main/LICENSE>
