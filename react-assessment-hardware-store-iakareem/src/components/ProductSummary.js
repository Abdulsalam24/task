import { Link } from "react-router-dom"

const ProductSummary = (props) => {
  return (
    <Link to={`/detail/${props.product.id}`}>
      <div className="productSummary">
        {props.product.name} - ${props.product.price}{" "}
        <span className="productArrow">&gt;</span>
      </div>
    </Link>

  );
};

export default ProductSummary;
