import React from "react";
import ReactGA from "react-ga";
import "./styles.css";

const trackingId = "UA-2283173-1"; // Replace with your Google Analytics tracking ID

export default function App() {
  React.useEffect(() => {
    ReactGA.initialize(trackingId);
  }, []);

  return (
    <div className="App">
      <h1>Teamleader</h1>
      <h2>For sale!</h2>
      <h3>
        Contact: <a href="mailto:sales@teamleader.se">sales@teamleader.se</a>
      </h3>
    </div>
  );
}
