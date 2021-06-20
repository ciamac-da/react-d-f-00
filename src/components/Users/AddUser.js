import React, {useState}  from 'react';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import Button from '../UI/Button';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge     ,      setEnteredAge] = useState("")



    const AddUserHandler = (e) => {
        e.preventDefault()
        console.log(enteredUsername, enteredAge)
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    return ( 
        <Card className={classes.input}>
        <form  onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={usernameChangeHandler}/>
        <label htmlFor="age" >Age(Years)</label>
        <input type="number" id="age" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
        </form>
        </Card>
     );
}
 
export default AddUser;