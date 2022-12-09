import NavBar from "../JSX/Navbar";
import "../CSS/styles.css";
import Farmer from "../img/farmer.png";
import Video from "../img/video.png";

function Home() {
  return (
    <main>
      <NavBar />
      <section className="mt-3">
        <div className="fm-bg mx-auto d-flex text-white">
          <section className="hero pt-2 d-flex justify-content-center">
            <div className="future">
              <span>
                <h1>The Future of</h1>
              </span>
              <span>
                <h1>Soil Productivity</h1>
              </span>
              <p>
                The simplest system to identify and increase <br /> productivity
                of barren soils through analyses
              </p>
              <button className="btn insight">
                Get Soil Insight for free now
              </button>
              <button className="btn">Sign Back In</button>
            </div>
            <img src={Farmer} alt="Farmer" className="farmer" />
          </section>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <div className="about">
          <h1>About Krup</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rhoncus duis lectus in
            aliquet dapibus varius egestas vulputate. Id tristique phasellus
            volutpat sollicitudin urna venenatis. Elementum scelerisque platea
            est eget donec id sagittis blandit vestibulum. Mauris lorem ultrices
            sed porttitor quis. Odio vitae dictumst a risus ligula semper. Vel
            amet volutpat dui platea amet elit euismod. Read more...
          </p>
        </div>
        <div>
          <img src={Video} alt="Svg" className="video" />
        </div>
      </section>
      <section className="mt-3">
        <div className="d-flex justify-content-center p-5">
          <p className="me-2">core Features</p>
          <hr className="hr" />
        </div>
      </section>
    </main>
  );
}

export default Home;
