import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  getCategories,
  getProducts,
  getProductsByCategory,
  getProductByName,
} from "../../services/products";

import Card from "../../components/Card/Card";
import { BsSearch } from "react-icons/bs";

import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [inputText, setInputText] = useState();

  let { categoryParam } = useParams();

  useEffect(() => {
    getCategories()
      .then((resp) => {
        setCategories(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    if (categoryParam) {
      categoryParam = categoryParam.replace("-", " ");
      getProductsByCategory(categoryParam)
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
  }, [categoryParam]);

  const handleValueChange = (event) => {

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
            placeholder="Looking for some product?"
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
            <option value="">Select category</option>
            {categories?.map((category) => {
              return (
                <option
                  key={category.name}
                  value={category.name}
                  style={{ textTransform: "capitalize" }}
                >
                  {category.name}
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
                    description={product.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
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
