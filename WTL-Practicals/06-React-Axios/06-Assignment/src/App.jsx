import React from 'react'
import { useState } from "react"


// Components
import Todos from './components/Todos'
import News from './components/News'
import Images from './components/Images'

//CSS
import './App.css'

const App = () => {
  const [activeTab, setactiveTab] = useState("todos");
  return (
    <div>
      <h1 className='colour-pink'>Axios in React</h1>
      <div className="btns">
        <button onClick={() => setactiveTab("todos")}>Todos</button>
        <button onClick={() => setactiveTab("news")}>News</button>
        <button onClick={() => setactiveTab("images")}>Images</button>
      </div>
      <div className="content">
        {activeTab === "todos" && <Todos />}
        {activeTab === "news" && <News />}
        {activeTab === "images" && <Images />}
      </div>

    </div>
  )
}

export default App
