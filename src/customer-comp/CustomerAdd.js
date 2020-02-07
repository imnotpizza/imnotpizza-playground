import React from "react";

class CustomerAdd extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            file: null,
            userName: "",
            birthday: "",
            gender: "",
            job: "",
            fileName: ""
            
        }
    }

    render(){
        return(
            <form onSubmit={this.handlerFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지 : 
                <input type="file" name="file"
                file={this.state.file}
                
                ></input>
            </form>
        )
    }
}

