import React, { useEffect, useState } from 'react'

const ProductsListComponent = () => {


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        console.log('loading products ...');
        getProducts();

    },[]);

    const getProducts = () => {

        setTimeout( async () => {  // simulamos una request asincrona con un delay de 3 seg.

            try{
            
                const response = await fetch("../backend/data.json")
                const { data } = await response.json();
                setProducts(data);
                setLoading(false);
    
                console.log(`${data.length} loaded products ...`)
    
            }catch(ex){
                console.log(`error from getProducts() : ${ex.message}`)
            }

        },3000);

    }

    if(loading){
        return(
            <>
                <p>Loading products ...</p>
            </>
        )

    }else{

        return(
            <>
                {
                    products.map(product => {
                        return (
                            <>
                            <div key={product.id}> 
                                <p>{product.name}</p> 
                                <h3>{product.price} €</h3>
                                <button><img src={require('../assets/icono/add-to-cart.png')}/></button>
                            </div>
                            </>
                        )
                    })
                }
            </>
        )

    }

    /*return(
        <>
        <div>
            <p>Cerave ® Crema Hidratante 340ml</p>
            <h3>11,70 €</h3>
            <button><img src={require('../assets/icono/add-to-cart.png')}/></button>
        </div>

        <div className="disable">
            <p>Cerave ® Crema Hidratante 340ml</p>
            <h3>11,70 €</h3>
            <button><img src={require('../assets/icono/add-to-cart.png')}/></button>
        </div>
        </>
    )*/


}

export default ProductsListComponent;