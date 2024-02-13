// Default export
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

// Named export
import { CORE_CONCEPTS } from "./data.js";

// React hooks (all React hooks have a "use" prefix)
import { useState } from "react";

function App() {
  // States naming convention
  //     Current Value  Updating function            Initial Value
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  // Naming convention or clickHandler()
  function handleSelect(selectedButton) {
    // selected => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* <TabButton onSelect={handleSelect}>Components</TabButton> */}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id='tab-content'></div>
        </section>
      </main>
    </div>
  );
}

export default App;
