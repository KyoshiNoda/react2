import React, {useState} from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/AddUser/UserList';
function App() {
  const [userList,setUserList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    setUserList(prevList =>{
      return [
        ...prevList,
        {name:uName,age:uAge, id: Math.random().toString()}
      ];
    });
  }
  
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users = {userList}/>
    </div>
   
  );
}

export default App;