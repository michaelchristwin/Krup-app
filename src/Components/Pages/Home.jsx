import NavBar from "../JSX/Navbar";
import "../CSS/styles.css";
import Farmer from "../img/farmer.png";
import Video from "../img/video.png";
import Garden from "../img/gardening.png";
import Search from "../img/search.png";
import Plant from "../img/plant.png";

function Home() {
  return (
    <main>
      <NavBar />
      <section className="mt-3">
        <div className="fm-bg mx-auto d-flex text-white mb-3">
          <section className="hero pt-2 d-flex justify-content-between">
            <div className="future">
              <span className="d-block future-s">The Future of</span>
              <span className="d-block future-s">
                <b className="soil">Soil</b> Productivity
              </span>
              <p className="future-p">
                The simplest system to identify and increase <br /> productivity
                of barren soils through analyses
              </p>
              <button className="btn insight">
                Get Soil Insight for free now
              </button>
              <button className="btn sign ms-2">Sign Back In</button>
            </div>
            <img src={Farmer} alt="Farmer" className="farmer" />
          </section>
        </div>
      </section>
      <section className="d-flex justify-content-center py-5">
        <div className="about mt-4 me-4">
          <h1>About Krup</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rhoncus duis lectus in
            aliquet dapibus varius egestas vulputate. Id tristique phasellus
            volutpat sollicitudin urna venenatis. Elementum scelerisque platea
            est eget donec id sagittis blandit vestibulum. Mauris lorem ultrices
            sed porttitor quis. Odio vitae dictumst a risus ligula semper. Vel
            amet volutpat dui platea amet elit euismod.
            <span className="more">Read more...</span>
          </p>
        </div>
        <img src={Video} alt="Svg" className="ms-4 video" />
      </section>
      <section className="mt-3 core">
        <div className="d-flex justify-content-center pt-3">
          <p className="me-2">Core Features</p>
          <hr className="hr" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="features me-3 py-5">
            <span>
              <img src={Search} alt="seacrch icon" className="svg" />
              Discover and explore ariable farm lands nearby
            </span>
          </div>
          <div className="features py-5">
            <span className="pt-5">
              <img src={Garden} alt="garden" className="svg" />
              Study farm soil and choose therb right soil core
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="features me-3 py-5">
            <span>
              <img src={Plant} alt="plant" className="svg" />
              Predict high crop yield before planting/farming.
            </span>
          </div>
          <div className="features py-5">
            <span>
              <img src={Search} alt="search" className="svg" />
              Discover and explore ariable farm lands nearby
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
