import {useState, createContext, useContext} from "react";
import './App.css';
import Load from "./Load";
import useFetch from "./useFetch";

const UserContext = createContext()
const url = 'https://node-js-server.dvirko.repl.co/';

const App = () => {
  return(
    <>
      <div class="PersonList">
        <PersonList/>
      </div>
    </>
  );
}
const PersonList = () => {
    const [data] = useFetch(url);
    const [person,SetPerson] = useState("");

    return (
        <UserContext.Provider value={person}>
        <ul>
        {data && 
          data.map((person,i) => {
             return <li key={i} onClick={()=>SetPerson(person)}>{person.name}</li>;
          })}
          </ul>
          {data?<div class="PersonData"><PersonData/></div>:<Load/>}
        </UserContext.Provider>
    );
  };

const PersonData = () => {
  const data = useContext(UserContext);
  return(
    <div>
       {data && Object.keys(data).map((key, index) => {
        return (
          <p key={index}>
              {key}:{data[key]}
          </p>
        );
      })}
    </div>
  );
}

export default App