import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = (props) => {

  const params = useParams()

  const [product, setProduct] = useState(null);

  const filtered = props.productList?.find((x) => x.id === +params.productId)

  useEffect(() => {
    setProduct(filtered)
  }, [props])

  // When this component loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product

  return (
    <>
      {
        product !== null && product !== undefined ?
          (
            <div>
              <h3>{product.name}</h3>
              <div>Price: ${product.price}</div>
              <p>{product.description}</p>
              <Link to="/products">
                Go Back
              </Link>
            </div>
          ) : ""
      }
    </>
  );
}

export default ProductDetail;
