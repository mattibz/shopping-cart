import React, { useEffect, useState } from 'react'

const CartComponent = ({products,setProducts}) => {

    const [productsInCart,setProductsInCard] = useState([]);

    useEffect(() => {

        console.log('loading cart products ...');
        getProductsInCart();

    },[products]);

    const getProductsInCart = () => {

        const cartProducts = products.filter( (product) =>{
            if(product.selected){
                return product;
            }
        });
        
        console.log('refresh cart products ...');
        setProductsInCard(cartProducts);

    }

    return(
        <>
        
            <b>MI CESTA:</b>
            <hr/>
            {
                productsInCart.map(product => {
                    
                    return(
                        <>
                            <div>
                                <img src={require(`../assets/${product.image}`)} />
                                <p>{product.name}</p>
                                <h3>{product.price} €</h3>
                            </div>
                            <hr/>
                        </>
                    )
                })
            }
            
            <div>
                <h2>TOTAL</h2>
                <p>(3 productos)</p>
                <h3>27,06 €</h3>
            </div>

        </>
    )
}

export default CartComponent;