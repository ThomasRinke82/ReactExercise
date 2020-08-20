import React from "react";
import "./styles.css";

import ProfileCard from "./ProfileCard";
import AlertButton from "./AlertButton";

export default function App() {
  return (
    <div className="App">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}
