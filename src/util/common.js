export default {
    //쿼리객체를 이용하여 쿼리파라미터 문자열 생성
    makeQueryStr(queryObj){

        let path = '';
        const keys = Object.keys(queryObj);

        //쿼리객체 키 배열 순환 
        for (let key of keys) {
            let _title = key;
            let _value = queryObj[key];

            if (_value === '' || _value === null) { continue; }// 입력되지 않은경우 pass

            //첫번째 파라미터인경우 : ?추가 , 아니면 &추가
            if (path.length === 0) {
                path += `?${_title}=${_value}`;

            } else {
                path += `&${_title}=${_value}`;

            }

        }

        return path;

    }
}