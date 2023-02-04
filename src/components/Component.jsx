import React, { useState, useEffect } from 'react';
import cn from "classnames";

const Component = (props) =>{
  const btnCN = cn('btn btn-outline-')
  const [value, setValue] = useState(null);

  useEffect(() =>{
    setValue(JSON.parse(window.localStorage.getItem('value')))
  }, [])

  useEffect(() =>{
   window.localStorage.setItem('value', value)
  }, [value])

  const handleClickLeft = (e) => {
    e.preventDefault();
    return setValue('2')
  }

  const handleClickRight = (e) => {
    e.preventDefault();
    return setValue('1')
  }

  const renderStringOfCode = () => {
    return (
      <button type="button" className="list-group-item list-group-item-action">{value}</button>
    )
  }

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button onClick={handleClickLeft} type="button" className={btnCN +'success'}>+</button>
        <button onClick={handleClickRight} type="button" className={btnCN +'danger'}>-</button>
      </div>
      <div className="list-group">
        {renderStringOfCode()}
      </div>
    </div>
  )

}

    // Каждое нажатие кнопки добавляет в лог новую строчку сверху.
    // После нажатия последовательности +, +, -, +:
    // <div>
    //   <div className="btn-group font-monospace" role="group">
    //     <button type="button" className="btn btn-outline-success">+</button>
    //     <button type="button" className="btn btn-outline-danger">-</button>
    //   </div>
    //   <div className="list-group">
    //     <button type="button" className="list-group-item list-group-item-action">2</button>
    //     <button type="button" className="list-group-item list-group-item-action">1</button>
    //     <button type="button" className="list-group-item list-group-item-action">2</button>
    //     <button type="button" className="list-group-item list-group-item-action">1</button>
    //   </div>
    // </div>



export default Component;
