import TabButton from "./TabButton/TabButton.jsx";
// Named export
import { EXAMPLES } from "../data.js";
// React hook (all React hooks have a "use" prefix)
import { useState } from "react";

export default function Examples() {
  // States naming convention
  //     Current Value  Updating function     Initial Value
  const [selectedTopic, setSelectedTopic] = useState();

  // Naming convention or clickHandler()
  function handleSelect(selectedButton) {
    // selected => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  /* ----------------------------------------- 
  Third solution for conditionall rendering (and below) 
   ----------------------------------------- */

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {/* ----------------------------------------- */}
      {/* First solution for conditionall rendering */}
      {/* ----------------------------------------- */}

      {/* {!selectedTopic ? <p>Please select a topic.</p> : null}
    {selectedTopic ? (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) : null} */}

      {/* ----------------------------------------- */}
      {/* Second solution for conditionall rendering */}
      {/* ----------------------------------------- */}

      {/* {!selectedTopic && <p>Please select a topic.</p>}
    {selectedTopic && (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}

      {/* ----------------------------------------- */}
      {/* Third solution for conditionall rendering (and above) */}
      {/* ----------------------------------------- */}

      {tabContent}
    </section>
  );
}
