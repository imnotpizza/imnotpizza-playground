import React from "react";
import Customer from "./customer-comp/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ProgressUI from "@material-ui/core/CircularProgress";
import axios from "axios";

/**
 * props : 하위컴포넌트로 전달하는 값, vue의 v-bind=props와 동일
 * state : 컴포넌트에서 내부적으로 처리하는 변수 저장, vue 의 data와 동일
 * props : 부모에서 사용된 태그 내의 값을 전달, vue의 slot?? 과 동일
 *
 * 라이프사이클
 * 
 * constructor()
 * 
 * componentWillMount()
 * 
 * render() 
 * 
 * componentDidMount : 컴포넌트의 마운트가 완료되었을때, vue의 mounted훅과 동일
 *
 * shouldComponentUpdate() : props, state 변경시
 */

class App extends React.Component {
  state = {

    completed: 0,
    apidata: null,

    items: [
      {
        id: 1,
        image: "https://placeimg.com/64/64/1",
        name: "name1",
        birthday: "19921218",
        gender: "Male",
        job: "job1"
      },
      {
        id: 2,
        image: "https://placeimg.com/64/64/2",
        name: "name2",
        birthday: "11921218",
        gender: "Male",
        job: "job2"
      }
    ],


  };

  progress=()=>{
    const { completed }=this.state;
    this.setState({ completed: (completed>=100 ? 0 : completed+1) })
  }

  componentDidMount(){
    let _timer=setInterval(this.progress, 20);
    
    console.log(_timer)
    this.callApi()
    .then(response=>{
      this.setState({ apidata: response.data });
    })
  }
  
  callApi = async() =>{
    const response = await axios.get("https://api.hnpwa.com/v0/news/1.json");

    return response
  }

  
  

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.items.map((item, id) => (
              <Customer userInfo={item} key={id}></Customer>
            ))}
          </TableBody>
        </Table>

        <div>
          {(this.state.apidata === null ?
           "...." : 
           this.state.apidata.map(item => <p>{item.id}</p>)
          )}
        </div>
        {this.state.completed}
        <ProgressUI></ProgressUI>
      </div>
    );
  }
}

export default App;
