import {useState, createContext, useContext} from "react";
import Load from "./Load";
import './App.css';
import useFetch from "./useFetch";

const UserContext = createContext()
const url = 'https://node-js-server.dvirko.repl.co/';

const App = () => {
  const [images] = useFetch(url+'images');

  return(
    <>
      <div>
          {images && 
          images.map((item,i) => {
             return <img alt={i} src={item.image}></img>;
          })}
      </div>
      {images?
      <div class="grid-container">
        <PersonList/>
      </div>
      :<Load/>
      }
    </>
  );
}
const PersonList = () => {
    const [data] = useFetch(url+'person');
    const [person,SetPerson] = useState("");

    return (
        <UserContext.Provider value={person}>
        <div class="PersonList item2 border">
          {data && 
          data.map((person,i) => {
             return <img key={i} src={person.image} alt={person.name}onClick={()=>SetPerson(person)}></img>;
          })}
          </div>
        <PersonData/>
        </UserContext.Provider>
    );
  };

const PersonData = () => {
  const data = useContext(UserContext);
  return(
    <div class="PersonData item1 border">
          <img src={data['image']} alt={data['name']}></img>
          <p>
            <h1>{data['name']} {data['lastName']}</h1>
            <h4>{data['job']}</h4>
            <h5>
              {data['age']} : גיל
              <br />
              {data['address']}
              <br />
              {data['education']}</h5>
          </p>
    </div>
  );
}

export default App