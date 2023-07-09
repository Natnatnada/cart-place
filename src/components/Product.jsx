import './product.css'
import { AddToCartIcon } from './Icons'
// renderizado de los productos desde el json con un map 
export function Products({ products }) {
    return (
        <main className='products'>
            <ul>
                {/* reducimos los productos que muestra a 10 */}
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title} - $ {product.price} </strong>
                        </div>
                        <div>
                            <button><AddToCartIcon /> </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}