import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ list }) => {
    return (
        <div className="products-grid">
            {list.length ? (
                list.map((prod) => (
                    <Link 
                        to={`/detail/${prod.id}`} 
                        key={prod.id}
                        className="product-link"
                    >
                        <Item {...prod} />
                    </Link>
                ))
            ) : (
                <p className="no-products">No hay productos</p>
            )}
        </div>
    );
};

