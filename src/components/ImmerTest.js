 import React, {useRef, useCallback, useState} from 'react';
 import produce from 'immer';

 const ImmerTest=()=>{
     const nextId=useRef(1);
     const [form, setForm] = useState({name: '', username: ''});
     const [data, setData] = useState({
         array: [],
         uselessValue: null,
     })

    //데이터 처리시 어떻게 해야하는 지를 설명하고 있다.
     const onChange=useCallback(e=>{
        //  //name, value 가져옴
        // //데이터 수정
        //  setForm({ ...form, [name]: [value] });
        
        const {name, value}=e.target;

        setForm(
            //form : 수정하고 싶은 상태, draft=> : 상태를 업데이트하는 로직 
            produce(form, draft=>{
                draft[name]=value;
            })
        )
        

     }, [form])

     //새 데이터 추가시 이벤트
     const onSubmit=useCallback(e=>{
        e.preventDefault();

        const info={
             id: nextId.current,
             name: form.name,
             username: form.username
        }
        //새 데이터 추가
        setData({
            ...data,
            array: data.array.concat(info)
        })

        // setForm({
        //     name: '',
        //     username: ''
        // })

        setData(
            produce(data, draft=>{
                draft.array.push(info);
            })
        )
        nextId.current+=1;
    
    }, [data, form.name, form.username]);

    const onRemove=useCallback(id=>{
        // setData({
        //     ...data,
        //     array: data.array.filter(info=>info.id!==id)
        // });

        setData(
            produce(data, draft=>{
                draft.array.splice(draft.array.findIndex(info=>info.id===id), 1);
            })
        )
    },[data])


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                name="username"
                placeholder="아이디"
                value={form.username}
                onChange={onChange}
                ></input>
                <input
                name="name"
                placeholder="아이디"
                value={form.name}
                onChange={onChange}
                ></input>
                
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map(info=>(

                        <li key={info.id} onClick={()=>onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>

                    ))}
                </ul>
            </div>
        </div>
        
    )


 }

 export default ImmerTest;