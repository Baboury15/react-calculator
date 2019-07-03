import React,{Component} from 'react';
import './App.css';

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    value1 : 0,
    value2 :0,
    result : 0,
   };
   this.updateInputValue1 = this.updateInputValue1.bind(this);
   this.updateInputValue2 = this.updateInputValue2.bind(this);

  }
  // updateInputValue = evt => {
  //   const { name, value } = evt.target;
  //   this.setState({
  //     [name]: parseInt(value)
   
  //   });
  
    
  // };
  updateInputValue1(event){
    console.log(event.target.value);
    this.setState({value1 : Number (event.target.value)})
     }
     updateInputValue2(event){
      console.log(event.target.value);
     this.setState({value2 : Number (event.target.value)})
     }
  Add = (event) => {
    // let { value1 ,value2, result } = this.state;

    //  result= (value1 + value2+ result);
   
      let y = this.state.value1 + this.state.value2;
      this.setState({result: y})
};

Subs = () => {
  let { value1 ,value2, result } = this.state;

   result= (value1 - value2 + result);
 
    console.log(result);
    this.setState({result})
}

Mult = () => {
  let { value1 ,value2, result } = this.state;

   result= (value1 * value2+ result);
 
    console.log(result);
    this.setState({result})
}

Div = () => {
  let { value1 ,value2, result } = this.state;

   result= (value1 / value2+ result);
 
    console.log(result);
    this.setState({result})
}


   render () {
    
    
    return (
 

    <div className= "main ">
   
    <div className ="container ">
      
    <h1 className=" header ">Calculate with React !</h1>

    <input  className=" input1 " placeholder =" "  value={this.state.inputValue} name ="value1" onChange={evt => this.updateInputValue1(evt)}/>   
  

    <input  className=" input2 " placeholder =" " value={this.state.inputValue} name = "value2"  onChange={evt => this.updateInputValue2(evt)}/>

   <div className =' output'>
    <button className ="Getvalue" onClick = {this.Add}>Add</button>

    <button className ="Div" onClick = {this.Div }>Div</button>

    <button className ="Mult" onClick = {this.Mult}>Mult</button>

    <button className ="Subs" onClick = {this.Subs}>Subs</button>



    <input  className =" abc"  type ='text'   value = {this.state.result} readOnly></input>

    </div>
    
    
   
   
   

  </div>
  

   </div>
);
   

  }


}



export default App;


// import {useState} from 'react'
// import './App.css';


// const App = props =>{

//   const [calculatorState , setcalculatorState] = useState ({

//     calculator : [{value1 : 0,}, {value2 : 0} ,{result: 0}]

    
//   });
//   console.log(calculatorState);
  


// }
// export default App;

// updateInputValue1(event){
//       //console.log(event.target.value);
//       this.setState({
//         calculator :[{value1 : Number (event.target.value)}]
//        }
// }
// updateInputValue2 (event){
//   //console.log(event.target.value);
//   this.setState({
//     calculator :[{value2 : Number (event.target.value)}]
//    }
// }
      
//       //  updateInputValue2(event){
//       //   console.log(event.target.value);
//       //  this.setState({value2 : Number (event.target.value)})
      //  }