import React, { Profiler, useEffect, useState } from 'react'
import { SpinnerRoundFilled } from 'spinners-react';
import toast, { Toaster } from 'react-hot-toast';

const ProductsListComponent = ({products,setProducts}) => {


    //const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        console.log('loading products ...');
        getProducts();

    },[]);


    const getProducts = () => {

        setTimeout( async () => {  // simulamos una request asincrona con un delay de 5 seg.

            try{
            
                const response = await fetch("../backend/data.json")
                const { data } = await response.json();
                setProducts(data);
                setLoading(false);
    
                console.log(`${data.length} loaded products ...`)
    
            }catch(ex){
                console.log(`error from getProducts() : ${ex.message}`)
            }

        },1000);

    }

    const addProductToCart = (id) => {
        

        const productsListUpdate = products.map( product => {

            if(product.id === id) {
                    product.selected = true;
                    console.log(` product with name ${product.name} added to cart.`);
            } 

            return product;

        });

        setProducts(productsListUpdate);
        console.log('product list updated ...');
       
    }

    const notify = () => toast('You can not add more of this product to the cart');


    if(loading){
        return(
            <>
                <div>
                    <SpinnerRoundFilled size='150' speed='100'/>
                    <p>Loading products ...</p>
                </div>
            </>
        )

    }else{

        return(
            <>
                 <Toaster></Toaster>

                {
                    products.map(product => {

                        if(product.selected){

                            return(
                                <>
                                     <Toaster position='top-left'></Toaster>
                                    <div className='disable' key={product.id}> 
                                        <p>{product.name}</p> 
                                        <h3>{product.price} €</h3>
                                        <button onClick={ notify }><img src={require('../assets/icono/add-to-cart.png')}/></button>
                                    </div>
                                </>
                            ) 

                        }else{

                            return(
                                <>
                                    <div key={product.id}> 
                                        <p>{product.name}</p> 
                                        <h3>{product.price} €</h3>
                                        <button onClick= { () => addProductToCart(product.id) }><img src={require('../assets/icono/add-to-cart.png')}/></button>
                                    </div>
                                </>
                            ) 
                        }

                    })
                }
            </>
        )
    }

}

export default ProductsListComponent;