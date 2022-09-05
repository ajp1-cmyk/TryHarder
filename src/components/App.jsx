import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(content) {
  return (
    <Card
      id={content.id}
      emoji={content.emoji}
      name={content.name}
      meaning={content.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
