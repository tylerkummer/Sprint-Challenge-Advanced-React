import React, { useState, useEffect } from 'react';
import axios from "axios";
import Players from "./components/Players";
import { useLocalStorage } from './components/useLocalStorage';

function App() {
  const [value, setValue] = useState([]);
  const [players, setPlayers] = useLocalStorage('players', value);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res =>{
        setValue(res.data)
        setPlayers(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="App">
      <Players value={players}/>
    </div>
  );
}

// class App extends React.Component {
//   state={
//     value: [],
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/api/players')
//     .then(response => {
//       this.setState({
//         value: response.data
//       })
//     })
//     .catch(error => console.log(error.message))
//   }


//   render(){
//     return(
//       <div className="App">
//         <Players value={this.state.value} />
//       </div>
//     )
//   }
// }

export default App;
