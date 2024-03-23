import MensClothing from "../assets/img/men-clothe.png";
import WomensClothing from "../assets/img/women-clothe.png";
import Hero from "../components/hero";
import CategoryCard from "../components/categoryCard";
import "./styles.css";

const Home = ({ categoryRef }) => {
  return (
    <div>
      <Hero />
      <hr />
      <h2>Categories</h2>
      <div className="cat-cont" ref={categoryRef}>
        <CategoryCard imgSrc={MensClothing} title={"Men's"} />
        <CategoryCard imgSrc={WomensClothing} title={"Women's"} />
      </div>
    </div>
  );
};
export default Home;
