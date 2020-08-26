import React from "react";
import ReactGA from "react-ga";
import "./styles.css";

const trackingId = "UA-2283173-1"; // Replace with your Google Analytics tracking ID

export default function App() {
  React.useEffect(() => {
    ReactGA.initialize(trackingId);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="App">
      <h1>Teamleader</h1>
      <h2>For sale!</h2>
      <h3>
        Contact: <a href="mailto:sales@teamleader.se">sales@teamleader.se</a>
      </h3>
      <div className="GoogleAdSense">
        <ins
          className={`adsbygoogle TeamleaderGoogleAd`}
          style={{ display: "block" }}
          data-ad-client="ca-pub-8789294109483772"
          data-ad-slot="1234567890"
        ></ins>
      </div>
    </div>
  );
}
