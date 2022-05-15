import React, { useEffect, useState } from 'react'

const CartComponent = ({products,setProducts}) => {

    const [productsInCart,setProductsInCard] = useState([]);
    const [total,setTotal] = useState(0);
    const [totalProducts,setTotalProducts] = useState(0);
    

    useEffect(() => {

        console.log('loading cart products ...');
        getProductsInCart();

    },[products]);



    const getProductsInCart = () => {

        let acum = 0;

        const cartProducts = products.filter( (product) =>{
            if(product.selected){
                acum += parseFloat(product.price.replace(',', '.'));
                return product;
            }
        });
        
        console.log('refresh cart products ...');
        setProductsInCard(cartProducts);

        console.log('set new total amount to cart ...');
        setTotal(acum.toFixed(2));

        console.log('set total items to cart ...');
        setTotalProducts(cartProducts.length);

    }



    const deleteProduct = (id) => {
        
        const currentItems = products.map((product) => {

            if(product.id === id){
                product.selected = false;
                console.log(` product with name ${product.name} was removed from the cart.`);
            }

            return product;
        });

        setProducts(currentItems);
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
                                <button onClick = { () => deleteProduct(product.id) }><i className="bi bi-trash"></i></button>
                            </div>
                            <hr/>
                        </>
                    )
                })
            }

            <div>
                <h2>TOTAL</h2>
                <p>({totalProducts} productos)</p>
                <h3>{total} €</h3>
            </div>

        </>
    )

}

export default CartComponent;