import React from "react";


const History=({history})=>{
    
    const handleGoBack=()=>{
        history.goBack();
    }

    const handleGoHome=()=>{
        history.push('/');
    }

    const historyWithBlock=()=>{
        history.unblock=history.block('정말 떠나시겠습니까?')
    }

    return(
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
            <button onClick={historyWithBlock}>홈으로2</button>
        </div>
    )


}

export default History;

