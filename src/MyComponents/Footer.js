import React from "react";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-3"
    >
      <p className="text-center">&copy; {new Date().getFullYear()} {"TaskPulse"}. Built for efficiency.</p>
    </footer>
  );
};
