import { Link } from "react-router-dom";
import AiImg from '../assets/imgs/ai.png'


export const AppHeader = () => {
return (
  <header className="app-header main-layout">
  <div className="sub-header">
    <Link to="">
     <img src={AiImg} alt="" />
    </Link>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/slideshow"> Try SlideShow</Link>
    </nav>
  </div>
</header>
)


}