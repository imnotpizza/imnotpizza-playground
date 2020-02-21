import React from "react";
import { Fragment, Component } from "react";
import PropTypes from "prop-types";

// const StudyChild=(props)=>{

//     const {name, children}=props;

// return <div>안녕하세요....{name}, {children}</div>
// }

// //props의 타입 지정
// StudyChild.propTypes={
//     name: PropTypes.string
// }

// //
// StudyChild.defaultProps={
//     name: "default  적용"
// }

class StudyChild extends Component{

    //props의 초기값 지정
    static defaultProps={
        name: "기본"
    };
    //props의 타입 지정
    static propTypes={
        name: PropTypes.string
    }

    render(){
        const { name, children } = this.props;// props의 데이터 할당

        return (
          <div>
            안녕하세요....{name}, {children}
          </div>
        );
    }
}

export default StudyChild;