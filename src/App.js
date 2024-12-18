

import { Button, Container, FormControl, InputGroup, ListGroup, Row, Col } from 'react-bootstrap';
import './App.css';
import { Component } from 'react';


class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={userInput:"",list:[]};
  }
    updateInput=(value)=>{
      this.setState({userInput:value});
    }
    addItem=()=>{
      if(this.state.userInput!==""){
        const userInput ={
          id:Math.random(),
          value:this.state.userInput,
        };
       const list=[...this.state.list];
       list.push(userInput);

       this.setState({
        list,userInput:"",
      });
      }
    }
    deleteItem = (id) => {
      const updatedList = this.state.list.filter(item => item.id !== id);
      this.setState({ list: updatedList });
    }
  
    // Edit an item (in this case just toggling input)
    editItem = (index) => {
      const newInput = prompt("Edit the task:", this.state.list[index].value);
      if (newInput !== null) {
        const updatedList = [...this.state.list];
        updatedList[index].value = newInput;
        this.setState({ list: updatedList });
      }
    }
    render(){
 return(
  <div className='todolist'>
    <Container>
      <Row>
        <div className='title'>
        TODO LIST
        </div>
      </Row>
      <hr/>
      <div className='inputs'>
      <Row>
        <Col md={{span:5,offset:4}}>
        
        <InputGroup className='mb-3'>
        <FormControl className='inputbox' placeholder="add item....." size='lg' value={this.state.userInput} onChange={(item)=>this.updateInput(item.target.value)} aria-label='add something' aria-describedby='basic-add0n2'/>
          <InputGroup>
          <Button variant='dark' className='addbtn' onClick={()=>this.addItem()}>
            ADD
          </Button>
          
          </InputGroup>
        </InputGroup>
        
        </Col>
      </Row>
      </div>
      <Row>
        <Col md={{span:5,offset:4}}>
        <ListGroup>
          {this.state.list.map((item,index)=>{
            return(
              <div  key={index}>
              <ListGroup.Item  variant="dark"  >
               {item.value}
               <span>
                <Button className="deletebtn"onClick={()=>
                   this.deleteItem(item.id)}>
                  <i id="icon" class="fa-solid fa-trash"></i>
                </Button>
                <Button className='editbtn' variant='light'
                onclick={()=>this.editItem(index)}>
                  <i id="icon"class="fa-solid fa-pen-to-square"></i>
                </Button>
               </span>
              </ListGroup.Item>
              </div>
            );
          
          })}
        </ListGroup>
        </Col>
      </Row>
    </Container>
  </div>
    
 );
   }
  }


 
export default TodoList;
