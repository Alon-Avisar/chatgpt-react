import TypeWriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { MyVideo } from "./intro-video";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="type-writer main-layout">
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              // .typeString("Welcome to SlideShow.")
              // .pauseFor(2000)
              // .deleteAll()
              .typeString("Generative storytelling has arrived.")
              .pauseFor(2000)
              // .deleteAll()
              // .typeString("Enjoy (:")
              .start();
          }}
        />
        <div className="spline">
          {/* <Spline
          style={{ width: "70%", height: "70%" }}
        scene="https://prod.spline.design/BSdUaRNHSDzUUuPB/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/1OMioU0tWbaPbbUQ/scene.splinecode" /> */}

          {/* <Spline  className="spline"   scene="https://prod.spline.design/1OMioU0tWbaPbbUQ/scene.splinecode" /> */}
        </div>
      </div>
      {/* <Spline  className="spline" scene="https://prod.spline.design/qL7GvtdfgitppLTA/scene.splinecode" /> */}

      {/* <Spline   scene="https://prod.spline.design/qL7GvtdfgitppLTA/scene.splinecode" /> */}



      {/* <div className="spline-moblie">
      <Spline scene="https://prod.spline.design/1OMioU0tWbaPbbUQ/scene.splinecode" />

      </div> */}
      {/* <MyVideo/> */}
      
    </div>
  );
};
