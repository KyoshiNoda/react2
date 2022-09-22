import React,{useState} from 'react';
import './AddUser.module.css';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = props =>{
    const [username,setUsername] = useState();
    const [age,setAge] = useState();

    const formSubmitHandler = event =>{
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            return;
        }
        if(age < 0){ return;}
        props.onAddUser(username,age);
        setUsername('');
        setAge('');
    }

    const userNameHandler = (event) => { setUsername(event.target.value); }
    const ageHandler = (event) =>{ setAge(event.target.value); }

    return(
        <Card className = {classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor = "username">Username</label>
                <input type = "text" id  = "username" onChange={userNameHandler} value = {username}></input>
                <label htmlFor = "Age">Age (Years)</label>
                <input type = "text" id = "age" onChange={ageHandler} value = {age}></input>
               <Button type ="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;