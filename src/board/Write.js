import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Write = ({ input, setInput, boardList, setBoardList, id }) => {
    const GO = useNavigate();
    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id.current,
        });
    };
    const submitHandler = () => {
        if (!input.title) {
            alert("내용을 입력해주세요");
            return;
        }
        if (input.title.length < 5) {
            alert("더 입력해주세요");
            return;
        }

        setBoardList([...boardList, input]);

        id.current++;
        setInput({
            name: "",
            title: "",
            content: "",
        });

        GO("/board");
    };
    return (
        <div className="BoardList">
            <table className="BoardTable">
                <thead>
                    <tr>
                        <td colSpan={2}>
                            <h3>WRITE</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td className="tit">
                            <input name="name" onChange={inputHandler} value={input.name || ""} />
                        </td>
                    </tr>
                    <tr>
                        <td className="tit">title</td>
                        <td>
                            <input name="title" onChange={inputHandler} value={input.title || ""} />
                        </td>
                    </tr>
                    <tr>
                        <td className="tit">content</td>
                        <td>
                            <textarea name="content" onChange={inputHandler} value={input.content || ""} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="BtnGroup">
                <Link to="/Write">
                    <button onClick={submitHandler}>WRITE</button>
                </Link>
            </div>
        </div>
    );
};

export default Write;
