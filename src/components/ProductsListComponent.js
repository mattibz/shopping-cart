import React from 'react'

const ProductsListComponent = () => {

    return(
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
        <div>
            <p>Cerave ® Crema Hidratante 340ml</p>
            <h3>11,70 €</h3>
            <button><img src={require('../assets/icono/add-to-cart.png')}/></button>
        </div>
        <div>
            <p>Cerave ® Crema Hidratante 340ml</p>
            <h3>11,70 €</h3>
            <button><img src={require('../assets/icono/add-to-cart.png')}/></button>
        </div>

        </>
    )
}

export default ProductsListComponent;