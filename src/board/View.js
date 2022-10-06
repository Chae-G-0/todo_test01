import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const View = ({ boardList, setBoardList}) => {
    const GO = useNavigate()
    const {id} = useParams();
    const V = boardList.find(it => String(it.id) === id);
    const deleteHandler = () => {
        const newList = boardList.filter(it => it.id !== V.id)
        setBoardList(newList)
        GO('/board')
    }
    const modifyHandler = () => {
        GO('/Modify/' + V.id)

    }
  return (
    <div>
        <div>{V.name}</div>
        <div>{V.title}</div>
        <div>{V.content}</div>
        <div>{V.date}</div>
        <button onClick={modifyHandler}>MODIFY</button>
        <button onClick={deleteHandler}>DEL</button>
    </div>
  )
}

export default View