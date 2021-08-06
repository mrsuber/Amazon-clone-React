import '../../css/Products.css'
import {useStateValue} from '../../StateProvider'
// import product1 from '../../images/product1.jpg'
function Product({id,title,image,price,rating}){
  const[{basket},dispatch] = useStateValue();
    console.log("this is the basket ==>",basket)
  const addToBasket= ()=>{
    //dispactch some action into the data layer

    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })

  }
  return(
    <div className= "product">

        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i)=>(
                  <p>&#11088;</p>
                ))}

            </div>
        </div>

        <img src={image} alt="watch"/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
export default Product
