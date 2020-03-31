import React from 'react';
import './App.css';
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import CreatePanel from "../CreatePanel/CreatePanel";

function App() {
    const tasks = [
        {text: 'Something first.', id: Math.random()*100},
        {text: 'Something second.', id: Math.random()*100},
        {text: 'Something third.', id: Math.random()*100},
    ];

  return (
    <div className="App container">
      <SearchPanel />
      <TodoList tasks={tasks}/>
      <CreatePanel />
    </div>
  );
}

export default App;
