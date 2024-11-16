import React from "react";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Task Manager</h2>
      <div className="about-content">
        <p>
          Task Manager is a powerful and intuitive application designed to streamline your productivity and help you stay organized in your daily life. With our user-friendly interface, you can easily manage your tasks and boost your efficiency.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>Create and organize tasks with ease</li>
          <li>Set priority levels to focus on what's important</li>
          <li>Mark tasks as complete to track your progress</li>
          <li>Filter tasks to view completed or pending items</li>
          <li>Responsive design for seamless use on any device</li>
        </ul>
        <p>
          Whether you're a busy professional, a student, or anyone looking to improve their task management, our Task Manager is here to help you achieve your goals and make the most of your time.
        </p>
      </div>
    </div>
  );
}

export default About;
