import { Link } from "react-router-dom";
import AiImg from "../assets/imgs/ai.png";

export const AppHeader = () => {
  return (
    <header className="app-header main-layout">
      <div className="sub-header">
        <Link to="/home">
          <img src={AiImg} alt="" />
        </Link>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/slideshow"> Try SlideShow</Link>
        </nav>
       
      </div>
    
    </header>
  );
};



{/* <header className="app-header main-layout">
<div className="sub-header">
  <Link to="/home">
    <img src={AiImg} alt="" />
  </Link>
  <nav>
    {/* <Link to="/home">Home</Link> */}

//     <div className="btn-1">
//       <Link to="/home">
//         <span>Home</span>
//       </Link>
//     </div>

//     <div className="btn-1">
//       <Link to="/slideshow">
//         <span>Try SlideShow</span>
//       </Link>
//     </div>
//   </nav>
// </div>
// </header> 