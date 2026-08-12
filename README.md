# TaskPulse - React To-Do List Application

TaskPulse is a lightweight, responsive, and robust To-Do List application built using React and Bootstrap. It helps users manage their daily tasks effortlessly while ensuring complete data persistence across sessions.

---

## 🚀 Key Features

* **Add Tasks**: Capture new items instantly with automated serial numbering (`SNo`).
* **Delete Tasks**: Remove unwanted or old logs quickly with individual delete targets.
* **Update Content**: Edit existing titles and descriptions seamlessly.
* **Status Controls**: Toggle individual item pipelines between **Pending**, **In-Progress**, or **Completed**.
* **Smart Validation Alerts**: Form safety check prevents submission if text titles or content descriptions are left empty.
* **Local Storage Persistence**: Saves your data directly to the browser window so logs remain secure after page refreshes.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework**: React (Functional Components + Hooks)
* **Routing Module**: React Router DOM (v5 Switch & Route)
* **Styling Platform**: Bootstrap CSS Utilities
* **State Management**: `useState` and `useEffect` APIs

### File Structure Map
```text
src/
├── MyComponents/
│   ├── About.js      # Details application features and goals
│   ├── AddTodo.js    # Task entry form handling text validation alerts
│   ├── Footer.js     # Responsive sticky application footer 
│   ├── Header.js     # Bootstrap custom brand navigation header
│   └── Todos.js      # Layout mapping array iterations for item feeds
├── App.js            # Main structural context handler & logic engine
├── App.css           # Project stylesheet overrides
└── index.js          # Core application render engine
```

---

## ⚙️ Installation & Local Setup

Get a local copy of this project running on your computer by executing these sequential blocks:

1. **Clone your remote repository**:
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the application directory**:
   ```bash
   cd todos-list
   ```

3. **Install the project node dependencies**:
   ```bash
   npm install
   ```

4. **Boot up the local web developer engine**:
   ```bash
   npm start
   ```
   *The application will launch automatically on your local port at `http://localhost:3000`.*

---

## 📄 License

Distributed under the MIT License. Feel free to modify and expand this project layout!
