
import { Link } from 'react-router-dom';

export const ProductsList = ({ products }) => (
  <ul className="products">
    {products.map(product => (
      <li className="products-item" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="product">
            <img className="product-image" src={product.image} alt={product.title} />
            <span className="product-title">{product.title}</span>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);
