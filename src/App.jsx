import React from "react";

import TodoPage from "./pages/TodoPage";

import "./App.css";
import {Route, Routes} from "react-router-dom";
import Calendar from "./pages/Calendar"
import Homepage from "./pages/Homepage";
import Todaypage from "./pages/Todaypage";
function App(){
    return (
        // <div className="App">
        //     {/* <div className="home">
        //         <Home />
        //     </div>
        //     <div className="todo">
        //         <Todo/>
        //     </div> */}
          
        // </div>
        // <TodoPage/>
        <Routes>
            <Route exect path="/" element={<Homepage />}/>
            <Route path = "/todo" element ={<TodoPage/>} />
            <Route path = "/today" element ={<Todaypage/>} />
            <Route path = "/calendar" element ={<Calendar/>} />
        </Routes>
    )
}
export default App;