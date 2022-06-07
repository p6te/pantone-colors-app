import "./App.css";
import Searcher from "./components/Searcher";
import CustomPaginationActionsTable from "./components/Table";
import { useState, useEffect } from "react";
import DataContext from "./context/DataContext";
import { useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const URL = "https://reqres.in/api/products";

  const getApi = async () => {
    const api = await fetch(URL);
    const dataApi = await api.json();
    setData(dataApi.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };




  return (
    <div className="App">
      <div className="App-container">
      <DataContext.Provider value={{ data, input, handleInput , setCurrentId, currentId , setInput}}>
        <BrowserRouter>
          <Routes>
            <Route path="/:id" element={<Searcher />}></Route>
            <Route path="/" element={<Searcher />}></Route>
          </Routes>

          <CustomPaginationActionsTable />
        </BrowserRouter>
      </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
