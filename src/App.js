import './App.css';
import React from 'react';

class App extends React.Component{
    constructor(){
      super()
      this.state={
        todo : [
          {name : "Buy Cig",verif : false, id : Math.random()},
          {name : "Buy sfenerya", verif : false,id : Math.random()},
          {name : "Drink" , verif : false, id : Math.random()}
        ],
        textP : ""
      }
    }

    addTask=()=>{
      if(this.state.textP == ""){
        alert('Manajmch')
      }else{
        this.setState({todo : [...this.state.todo,{name : this.state.textP, verif : false, id : Math.random()}]})
        this.setState({textP : ''})
      }
      
    }
    deleteTask=(a)=> this.setState({todo : this.state.todo.filter(el => el.id != a) })
   
    editTask=(a)=> this.setState({todo : this.state.todo.map(el => el.id == a ? {...el,verif : !el.verif}:el)})
   
    render(){
      return(
        <div>
          <h1>TO DO LIST</h1>

          {
            this.state.todo.map(el=> 
            <>
              <h2 className={el.verif && "islem"}>{el.name}</h2>
              <h3>{el.verif ? "TRUE" : "FALSE"}</h3>
              <button onClick={()=>this.editTask(el.id)}>Verif</button>
              <button onClick={()=> this.deleteTask(el.id)}>Delete</button>
              <hr/>            
            </>)
          }

          <input value={this.state.textP} onChange={(e)=> this.setState({textP : e.target.value})} type="text"/>
          <button onClick={this.addTask}>Add</button>
        </div>
      )
    }
}

export default App;
