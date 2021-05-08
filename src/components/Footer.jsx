import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="Footer">Copyright © {currentYear}</div>
    </footer>
  );
}
