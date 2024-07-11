import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import io from "socket.io-client";

import SearchPage from "./pages/SearchPage";
import AdherencePage from "./pages/AdherencePage";
import AddPatientPage from "./pages/AddPatientPage";
import Text from "./components/text/text";
import NavigationBar from "./components/navbar/navbar";

const socket = io("http://localhost:3000");
socket.on("eventData", (data) => {
  console.log(data);
});

function App() {
  const [data, setData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isAdherent, setIsAdherent] = useState(null);
  const [currentPage, setCurrentPage] = useState("Search");

  useEffect(() => {
    socket.on("eventData", (eventInstance) => {
      setData((currentData) => [...currentData, eventInstance]);
      console.log(data);
    });
  }, []);

  return (
    <div className="website">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Text>
          <NavigationBar
            selectedPatient={selectedPatient}
            currentPage={currentPage}
          />
          <div className="website-container">
            <Routes>
              <Route
                path="/"
                element={
                  <SearchPage
                    data={data}
                    selectedPatient={selectedPatient}
                    setSelectedPatient={setSelectedPatient}
                    setCurrentPage={setCurrentPage}
                  />
                }
              />
              <Route
                path="/demo"
                element={
                  <AdherencePage
                    data={data}
                    selectedPatient={selectedPatient}
                    isAdherent={isAdherent}
                    setIsAdherent={setIsAdherent}
                    setCurrentPage={setCurrentPage}
                  />
                }
              />
              <Route
                path="/newpatient"
                element={<AddPatientPage setCurrentPage={setCurrentPage} />}
              />
            </Routes>
          </div>
        </Text>
      </Router>
    </div>
  );
}

export default App;
