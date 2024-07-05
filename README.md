# 🌐 Timeline Frontend

Welcome to the Timeline Frontend project! This project is a modern React application built with Vite and styled using Tailwind CSS. It interfaces with the Timeline Backend to provide a user-friendly way to generate and view historical timelines based on user prompts. ✨

## 🚀 Features

- **React**: A powerful library for building user interfaces.
- **Vite**: A next-generation front-end tooling that offers fast build times and a great development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **API Integration**: Seamless integration with the Timeline Backend to fetch and display timelines.

## 📂 Project Structure

```
timeline_frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── TimelineDisplay.jsx
│   │   └── TimelinePrompt.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Timeline.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── public/
│   └── index.html
├── tailwind.config.js
├── package.json
└── vite.config.js
```

## 🛠️ Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/louispaulet/timeline_frontend.git
cd timeline_frontend
```

2. **Install Dependencies**

```bash
npm install
# or if you prefer yarn
# yarn install
```

3. **Run the Development Server**

```bash
npm run dev
# or if you prefer yarn
# yarn dev
```

The application will be available at `http://localhost:3000`.

## 📝 Usage

To use the application, navigate to the Timeline page and enter a prompt to generate a timeline. The application will fetch the timeline from the backend and display it on the page.

## 🌟 Pages and Components

### Pages

- **Home**: Welcome page with a brief introduction.
- **About**: Information about the application.
- **Timeline**: Main page for generating and displaying timelines.

### Components

- **Navbar**: Navigation bar with links to different pages.
- **Footer**: Footer with application information.
- **TimelinePrompt**: Input form for entering timeline prompts.
- **TimelineDisplay**: Displays the timeline events fetched from the backend.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/louispaulet/timeline_frontend/issues).

## 📝 License

This project is licensed under the MIT License.

## 📞 Contact

Louis Paulet - [GitHub](https://github.com/louispaulet)

---

Made with ❤️ by Louis Paulet
