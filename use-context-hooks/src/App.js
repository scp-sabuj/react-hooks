import React from 'react';
import ComponentA from './components/ComponentA';

//declare context
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function App() {
  return (
    <div className="App">
      
      <UserContext.Provider value={'Sabuj Paul'}>
        <ChannelContext.Provider value={"Sayan"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
