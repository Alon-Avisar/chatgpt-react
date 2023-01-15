import TypeWriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="type-writer main-layout">
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to Story.ai")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Generative storytelling has arrived.")
              .pauseFor(2000)
              .start();
          }}
        />
      </div>
    
        <div className="spline-main">
          <Spline
            className="spline"
            scene="https://prod.spline.design/JIwHfxfUQMYWegwk/scene.splinecode"
          />
        </div>
        <div className="storyai-home main-layout">
        <Link to="/img-generation"> <h2>Try Story.ai</h2></Link>   
      </div>
    </div>
  );
};
