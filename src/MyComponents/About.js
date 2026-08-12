import React from "react";

export const About = () => {
  const appName = "TaskPulse"; 

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About {appName}</h1>
        <p style={styles.subtitle}>Your ultimate companion for daily productivity.</p>
      </header>

      <section style={styles.section}>
        <p style={styles.description}>
          Welcome to <strong>{appName}</strong>, a lightweight and intuitive to-do list application 
          designed to clear your mind and streamline your day. We believe that managing your 
          daily tasks should be effortless, allowing you to focus on what truly matters.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Core Features</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>➕ Quick Add:</strong> Capture tasks and ideas instantly the moment they strike.
          </li>
          <li style={styles.listItem}>
            <strong>🗑️ Easy Delete:</strong> Remove unwanted items or old plans with a single click.
          </li>
          <li style={styles.listItem}>
            <strong>🔄 Status Updates:</strong> Track your progress by shifting tasks from pending to completed.
          </li>
          <li style={styles.listItem}>
            <strong>🔔 Smart Validation Alerts:</strong> Prevents empty entries by alerting you if a task is missing a title, description, or set time.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Use {appName}?</h2>
        <p style={styles.description}>
          Built using modern web technologies, this tool eliminates clutter and mistakes. 
          With built-in smart check alerts, you can ensure every task you create has all the 
          necessary details like titles and deadlines before saving.
        </p>
      </section>
    </div>
  );
};

// Simple inline styling for clean presentation
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    borderBottom: "2px solid #eaeaea",
    paddingBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    margin: 0,
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#2c3e50",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1.1rem",
    color: "#555",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "1.1rem",
    marginBottom: "12px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    borderLeft: "4px solid #e74c3c", // Changed to red to visually represent validation/alerts
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    paddingTop: "20px",
    borderTop: "1px solid #eaeaea",
    color: "#999",
    fontSize: "0.9rem",
  },
};
