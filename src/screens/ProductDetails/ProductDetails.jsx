import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

import "./styles.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id)
      .then((resp) => {
        console.log("Produto:", resp);
        setProduct(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);
  return (
    <>
      {product && (
        <div className="productDetails">
          <h1 className="productDetailsTitle">{product.title}</h1>
          <div className="productDetailsContent">
            <img
              src={product.image}
              alt="Produto"
              className="productDetailsMainImage"
            />
            <div className="detailsText">
              <hr />
              <div className="brandAndAvaliation">
                <p>
                  <a href="https://google.com">Marca: Plantinha Verde</a>
                </p>
                <span>{product.rating.rate}</span>
                <span>
                  {" "}
                  {product.rating.count}{" "}
                  <a href="https://google.com">avaliações de clientes</a>
                </span>
              </div>
              <hr />
              <p className="productDetailsDescriptionPrice">
                <strong>R$</strong>
                <span>
                  <strong>{product.price}</strong>
                </span>
              </p>
              <h2 className="productDetailsDescriptionTitle">
                Descrição do produto
              </h2>
              <p className="productDetailsDescriptionText">
                {product.description}
              </p>
              <hr />
              <table className="productInformations">
                <tr>
                  <td>
                    <p>
                      <strong>Marca</strong>
                    </p>
                  </td>
                  <td>
                    <p>Marca</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Material</strong>
                    </p>
                  </td>
                  <td>
                    <p>Material</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Dimensões do produto</strong>
                    </p>
                  </td>
                  <td>
                    <p>Dimensões do produto</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Tipo de montagem</strong>
                    </p>
                  </td>
                  <td>
                    <p>Tipo de montagem</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Tipo de acabamento</strong>
                    </p>
                  </td>
                  <td>
                    <p>Tipo de acabamento</p>
                  </td>
                </tr>
              </table>
              <hr />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
