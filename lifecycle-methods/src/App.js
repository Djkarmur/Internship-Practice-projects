// import ClassComponent from './ClassComponent';
// import Search from './Search';
// import './App.css';
// import LocalStorageHook from './LocalStorageHook';
import Login from './redux/Login';
import {useSelector} from 'react-redux';


function App() {

  const users = useSelector((state)=>state.usersData);
  console.log(users);

  return (
    <div className="App">
      {/* <ClassComponent defaultName="syresh"/> */}
      {/* <Search/> */}
      {/* <LocalStorageHook/> */}
      <Login/>
     
    </div>
  );
}

export default App;
