import './App.css'
import Header from "./components/Header/Header"
import AddKeeper from "./components/AddKeeper/AddKeeper"
import ShowKeeper from "./components/ShowKeeper/ShowKeeper"
import { useState, useEffect  } from "react"
import axios from "axios"

function App() {

  const [ keeperList, setKeeperList ] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4500/api/getAll")
    .then(res => setKeeperList(res.data))
  }, [])

  return (
    <div className="App">
      <Header />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    </div>
  );
}

export default App;
