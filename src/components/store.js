import { observable, reaction, computed, autorun } from 'mobx';

const calculator=observable({
    a:1,
    b:2,
});

//값 변경시 수행할 연산(상태가 변경될 값, 변경된 뒤 이벤트)
reaction(
    ()=>calculator.a,
    (value, reaction)=>{
        console.log("reacted");
    }
)

reaction(
  () => calculator.b,
  (value, reaction) => {
    console.log("reacted");
  }
);

const sum=computed(()=>{
    console.log("계산중");
    return calculator.a+calculator.b;
})

sum.observe(()=>calculator.a);
sum.observe(()=>calculator.b);

calculator.a=10;
calculator.b=20;






