import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { getCategories, getProducts } from "../../services/products";
import Card from "../../components/Card/Card";
import { BsSearch } from "react-icons/bs";
const Products = () => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories()
      .then((resp) => {
        console.log("resp effect categories", resp);
        setCategories(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        console.log("resp do effect", resp);
        setProducts(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <>
      <div className="searchArea">
        <div className="searchContainer">
          <input
            type="text"
            name="searchProduct"
            id="searchProduct"
            placeholder="Procurando por algum produto?"
            className="searchBar"
          />
          <button className="labelForSearchBar">
            <BsSearch />
          </button>
        </div>
        <div className="searchContainer searchBySelect">
          <select name="" id="" className="searchBar selectBar">
            <option value="" disabled selected hidden>
              Selecione a categoria
            </option>
            {categories?.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <ul className="productsList">
          {products?.map((product) => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Card
                    image={product.image}
                    altText={product.title}
                    title={product.title}
                    description={product.price}
                    imgClass="productsCardImg"
                    cardClass="productsCard"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Products;
