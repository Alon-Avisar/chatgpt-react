import TypeWriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { MyVideo } from "./into-video";

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
            {/* <div className="spline main-layout">
        <Spline
          // style={{ width: "70%", height: "70%" }}
        scene="https://prod.spline.design/BSdUaRNHSDzUUuPB/scene.splinecode" />
      
      </div> */}
     


  
        </div>
        <MyVideo/>

        </div>
    )
}