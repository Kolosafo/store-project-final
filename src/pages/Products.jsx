import { useEffect, useState } from "react";
import { fetchProducts, fetchCategoryProducts } from "../utils";
import { ALLOWED_CATEGORIES } from "../routes";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";

const Products = ({ setCartItems }) => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("All");

  const handleFilterProducts = (productCategory = null) => {
    if (productCategory) {
      const filterProducts = allProducts.filter(
        (product) => product.category === productCategory
      );
      setProducts(filterProducts);
    } else {
      setProducts(allProducts);
    }
  };
  useEffect(() => {
    if (!category) {
      const getProducts = async () => {
        const response = await fetchProducts();
        setProducts(response);
        setAllProducts(response);
      };
      getProducts().catch((e) => console.error("we have an error", e));
    } else {
      const getCategoryProducts = async () => {
        const response = await fetchCategoryProducts(category);
        setProducts(response);
      };
      getCategoryProducts().catch((e) => console.error("we have an error", e));
    }
  }, [category]);
  return (
    <div className="products-cont">
      {!category ? (
        <div className="category-select">
          <span
            className={`select-cat-span ${
              activeCat === "All" ? "cat-active" : ""
            }`}
            onClick={() => {
              handleFilterProducts();
              setActiveCat("All");
            }}
          >
            All
          </span>
          <span
            className={`select-cat-span ${
              activeCat === "women's" ? "cat-active" : ""
            }`}
            onClick={() => {
              handleFilterProducts(ALLOWED_CATEGORIES.WOMENS);
              setActiveCat("women's");
            }}
          >
            Women's
          </span>
          <span
            className={`select-cat-span ${
              activeCat === "men's" ? "cat-active" : ""
            }`}
            onClick={() => {
              handleFilterProducts(ALLOWED_CATEGORIES.MENS);
              setActiveCat("men's");
            }}
          >
            Men's
          </span>
        </div>
      ) : (
        <div className="category-select">
          <span className="cat-active">{category}</span>
        </div>
      )}

      <div className="product-card-cont">
        {products.length > 0 &&
          products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard
                  id={product.id}
                  rating={product.rating}
                  img={product.image}
                  categoryName={product.category}
                  productName={product.title}
                  description={product.description}
                  price={product.price}
                  setCartItems={setCartItems}
                />
              )
          )}
      </div>
    </div>
  );
};
export default Products;
