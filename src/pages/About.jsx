import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sub-cont">
        <div className="about-header">
          <h1 className="header-h1">
            An About Us Page, so you can <br /> <br /> know about us!
          </h1>
        </div>
        <div className="content-cont">
          <div className="left-span">
            Welcome to Tee-Store, your ultimate destination for all the trendy
            Tee's
            <br />
            <br />
            <br />
            <button onClick={() => navigate("/products")}>
              Shop With Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
