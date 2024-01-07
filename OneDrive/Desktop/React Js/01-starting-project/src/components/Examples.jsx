import {TabButton} from './TabButtons.jsx';
import  {useState}  from 'react';
import  {EXAMPLES}  from '../data.js';
import Section from './section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples(){
    let [selectedTopic, setSelectedTopic] = useState(null);
  function selectHandler(selected) {
    //selectedButtons - 'components' , 'jsx' , 'props' , 'state'
    setSelectedTopic(selected);
    console.log(selected);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
    <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }
    return(
        <Section id='examples' title="Examples">
          <Tabs   
          
          buttons={
            <> 
            <TabButton 
            isSelected={selectedTopic === "components"} 
            onClick={() => selectHandler('components')} >Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'} 
            onClick={() => selectHandler('jsx')} >Jsx
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'} 
            onClick={() => selectHandler('props')} >Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'} 
            onClick={() => selectHandler('state')} >State
            </TabButton>
          </>
          }>{tabContent}</Tabs>
          
          
        </Section>
    );
}