import React, { useEffect } from "react";
import { useState, Fragment, Component, useMemo, useCallback } from "react";
import StudyChild from "./StudyChild";

const getAverage = numbers => {
  console.log("평균값 계산중");

  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);

  return sum / numbers.length;
};

const Study = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // //입력 값 바인딩
  // const onChange=e=>{
  //   setNumber(e.target.value);
  // }

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);


  // //리스트에 값 추가
  // const onInsert=e=>{
  //   const nextList=list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber('');
  // }

  const getList = () => {
    return list.map((value, id) => <li key={id}>{value}</li>);
  };

  const avg = useMemo(() => getAverage(list), [list]); //list의 값이 수정될 때만 getAverage()로직 수행

  return (
    <div>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <br></br>
      <br></br>
      <ul>
        {list.map((value, id) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <b>평균값 : </b>
      {avg}
    </div>
  );
};

export default Study;
