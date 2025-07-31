import "../Style/Home.css"

const Home = () => {
  return (
    <>
      <div className="homediv">
        <div className="homediv2">
          <h1 className="grow1">We are best it Team Welcome to Coders </h1>
          <p>
            Are you ready to take buseness to next level with cutting edge it
            solutions?Look no furthur ! At corder we specialised in providing
            innovation It service and solution tailored to meet your unique need{" "}
          </p>
          <div>
            <button>Connect Now </button>
            <button>Learn now</button>
          </div>
        </div>
        <div>
          <img
            src="../src/assets/—Pngtree—program code layers depicted on_9508991.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="techdiv">
        <ul>
          <li>
            <h1>50+</h1>
            <h3>Registered companies </h3>
          </li>
          <li>
            <h1>500+</h1>
            <h3>Happy clients </h3>
          </li>
          <li>
            <h1>110+</h1>
            <h3>Well known Developer </h3>
          </li>
          <li>
            <h1>24/7</h1>
            <h3>Services </h3>
          </li>
        </ul>
      </div>

      <div className="helpdiv">
        <div className="imgdiv">
          <img
            src="../src/assets/pexels-divinetechygirl-1181263.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="helpdiv2">
          <h1>We are Here to help u </h1>
          <p>
            Ready to take the first step towear a more effective and secure it
            infrastructure ? Contact us today for a free consulatation and let's
            discuss how Coders can help your bsiness and thrive into digital age
          </p>
          <div>
          
            <button>Contact Now </button>
            <button>Learn more </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
