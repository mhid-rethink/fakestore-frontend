import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
  getProductByName,
} from "../../services/products";
import Card from "../../components/Card/Card";
import { BsSearch } from "react-icons/bs";

const Products = () => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [inputText, setInputText] = useState();

  useEffect(() => {
    getCategories()
      .then((resp) => {
        // console.log("resp effect categories", resp);
        setCategories(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const handleValueChange = (event) => {
    console.log(event.target.value);

    if (event.target.value) {
      getProductsByCategory(event.target.value)
        .then((resp) => {
          setProducts(resp);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      getProducts()
        .then((resp) => {
          setProducts(resp);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const handleProductSearchByName = () => {
    if (inputText === "") {
      getProducts()
        .then((resp) => {
          setProducts(resp);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      getProductByName(inputText)
        .then((resp) => {
          setProducts(resp);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <>
      <div className="searchArea">
        <div className="searchContainer">
          <input
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleProductSearchByName();
            }}
            type="text"
            name="searchProduct"
            id="searchProduct"
            placeholder="Procurando por algum produto?"
            className="searchBar"
          />
          <button
            className="labelForSearchBar"
            onClick={handleProductSearchByName}
          >
            <BsSearch />
          </button>
        </div>
        <div className="searchContainer searchBySelect">
          <select
            name="selectSearch"
            id="selectSearch"
            defaultValue=""
            onChange={handleValueChange}
            className="searchBar selectBar"
          >
            <option value="">Selecione a categoria</option>
            {categories?.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
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
