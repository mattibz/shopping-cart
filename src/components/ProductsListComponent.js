import React, { Profiler, useEffect, useState } from 'react'
import { SpinnerRoundFilled } from 'spinners-react';
import toast, { Toaster } from 'react-hot-toast';
import Helper from '../helpers/helper';

const ProductsListComponent = ({products,setProducts}) => {


    const [loading,setLoading] = useState(true);

    useEffect(() => {

        console.log('loading products ...');
        getProducts();

    },[]);


    const getProducts = () => {

        setTimeout( async () => { 

            try{
            
                const response = await fetch("../backend/data.json")
                const { data } = await response.json();
                setProducts(data);
                setLoading(false);
    
                console.log(`${data.length} loaded products ...`)
    
            }catch(ex){
                console.log(`error from getProducts() : ${ex.message}`)
            }

        },5000);
    
        /* ======== FORMA ALTERNATIVA SIN async/await ======== */
        /*const helper = new Helper();

        helper.getData()
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(err => {
            console.log('error al obtener la data ... ');
        });*/
        /* ======== END FORMA ALTERNATIVA SIN async/await ======== */
        
        
        /* ======== FORMA ALTERNATIVA CON AXIOS ======== */
        /*setTimeout( async () => {

            const helper = new Helper();
            const { data } = await helper.getDataWithAxios();
            setProducts(data);
            setLoading(false);

        },5000);*/
        /* ======== END FORMA ALTERNATIVA CON AXIOS ======== */

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



    const notify = () => toast('You can not add more this product to the cart.');



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
                    products.map((product,index) => {


                        if(product.selected){

                            return(
                                <>
                                    <div className='disable'>  
                                        <p>{product.name}</p> 
                                        <h3>{product.price} €</h3>
                                        <button onClick={ notify }><img src={require('../assets/icono/add-to-cart.png')}/></button>
                                    </div>
                                </>
                            ) 

                        }else{

                            return(
                                <>
                                    <div data-testid="product-item"> 
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