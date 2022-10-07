import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import List from "./board/List";
import Modify from "./board/Modify";
import View from "./board/View";
import Write from "./board/Write";
import './reset.css'

const App = () => {
    const [input, setInput] = useState({});
    const [boardList, setBoardList] = useState(
        () => {
        const list = localStorage.getItem("list");
        if (list) {
            return JSON.parse(list);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(boardList));
    }, [boardList]);
    const id = useRef(1);

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/board">board</NavLink>
                        </li>
                        <li>
                            <NavLink to="/View">View</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Write">Write</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* <button onClick={() => localStorage.setItem("list", JSON.stringify(boardList))}>Localstorage Write</button>
                <button onClick={()=> console.log(JSON.parse(localStorage.getItem("list")))}>Localstorage get</button> */}
            </header>
            <Routes>
                <Route path="/" element={<div>HOME</div>} />
                <Route path="/board" element={<List boardList={boardList} />} />
                <Route path="/View/:id" element={<View boardList={boardList} setBoardList={setBoardList} />} />
                <Route path="/Modify/:id" element={<Modify boardList={boardList} setBoardList={setBoardList} />} />
                <Route path="/Write" element={<Write input={input} setInput={setInput} boardList={boardList} setBoardList={setBoardList} id={id} />} />
            </Routes>

            {console.log(input)}
        </div>
    );
};

export default App;
