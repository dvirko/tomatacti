import {useState, createContext, useContext,useEffect} from "react";
import './App.css';
import useFetch from "./useFetch";
const UserContext = createContext()

const App = () => {
  return(
    <>
    <PersonList/>
    </>
  );
}
const PersonList = () => {
    const [data] = useFetch('https://node-js-server.dvirko.repl.co/');
    
    const [imageData, setImageData] = useState('');
    useEffect(() =>{
    fetch('https://node-js-server.dvirko.repl.co/image')
        .then(response => response.blob())
        .then(image => {
            // Create a local URL of that image
            const localUrl = URL.createObjectURL(image);
            setImageData(localUrl);
        });
}, []);
  
  
    const [person,SetPerson] = useState("");

    return (
        <UserContext.Provider value={person}>
        {data &&
          data.map((person,i) => {
             return <button key={i} onClick={()=>SetPerson(person)}>{person.name}</button>;
          })}
          <img alt='img' src={imageData}/>
         <PersonData/>
        </UserContext.Provider>
    );
  };

const PersonData = () => {
  const data = useContext(UserContext);
  return(
    <>
       {Object.keys(data).map((key, index) => {
        return (
          <div key={index}>
              {key}:{data[key]}
          </div>
        );
      })}
    </>
  );
}

export default App