// Default export
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

// Named export
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";

// React hooks (all React hooks have a "use" prefix)
import { useState, Fragment } from "react";

function App() {
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
    /* Fragment is built-in component to pack the others created components
     or you can use <> for opening or </> for closing */
    <Fragment>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* Better show solution => dynamically */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

            {/* Example show solution => static */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
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
      </main>
    </Fragment>
  );
}

export default App;
