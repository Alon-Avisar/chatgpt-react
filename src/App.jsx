import "./App.scss";
import { Route, Routes } from "react-router-dom";

import { AppHeader } from "./cmp/app-header";
import { HomePage } from "./cmp/home";

function App() {
  return (

    
    <div className="App-contianer">
        <AppHeader />
      <div className="main-layout">
      <main className="container">
      <Routes>
      <Route path="/slideshow" element={<HomePage />}/>
      </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;
