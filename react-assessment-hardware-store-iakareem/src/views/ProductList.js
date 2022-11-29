import { useEffect, useState } from "react";
import { ProductSummary } from "../components/index";

const ProductList = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(props.productList)
  }, [props])

  const onChange = (department) => {
    let filteredDepartment = props.productList?.filter((product) => product.department === department)
    setProducts(filteredDepartment)
  }

  return (
    <div className="productList">
      <div className="flex">
        <button onClick={() => onChange('tool')}>tool</button>
        <button onClick={() => onChange('garden')}>garden</button>
        <button onClick={() => onChange('hardware')}>hardware</button>
      </div>
      <h2>Our Products</h2>
      <ul>
        {
          products?.map((product) => (
            <ProductSummary key={product.id} product={product} />
          ))
        }
      </ul>
    </div>
  );
};

export default ProductList;
