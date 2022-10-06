import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modify = ({ boardList, setBoardList }) => {
    const GO = useNavigate();
    const { id } = useParams();
    const V = boardList.find((it) => String(it.id) === id);
    const modifyHandler = () => {
        const modify = boardList.map((it) => (String(it.id) === id ? { ...input, name: input.name, content: input.content, title: input.title } : it));
        setBoardList(modify);
        GO("/View/" + V.id);
    };

    const [input, setInput] = useState({
        name: V.name,
        title: V.title,
        content: V.content,
    });

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id,
        });
    };

    return (
        <div>
            <>hhhh {id}</>
            <input name="name" onChange={inputHandler} value={input.name} />
            <input name="title" onChange={inputHandler} value={input.title} />
            <textarea name="content" onChange={inputHandler} value={input.content} />
            <button onClick={modifyHandler}>MODIFY</button>
        </div>
    );
};

export default Modify;
