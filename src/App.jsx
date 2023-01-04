import "./App.scss";
import { Route, Routes } from "react-router-dom";

import { AppHeader } from "./cmp/app-header";
import { HomePage } from "./cmp/home";
import { SlideShow } from "./cmp/slideshow";

function App() {
  return (

    
    <div className="App-contianer">
        <AppHeader />
      <div className="main-layout">
      <main className="container">
      <Routes>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/slideshow" element={<SlideShow />}/>
      </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;
