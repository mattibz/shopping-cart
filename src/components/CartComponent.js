import React from 'react'

const CartComponent = () => {

    return(
        <>
        
        <b>MI CESTA:</b>
        <hr/>
        <div>
            <img src={require('../assets/xhekpon-crema.jpg')} />
            <p>Xhekpon® crema facial 40ml</p>
            <h3>6,49 €</h3>
        </div>
        <hr/>
        <div>
            <img src={require('../assets/cerave-crema.jpg')}/>
            <p>Cerave ® Crema Hidratante 340ml</p>
            <h3>11,70 €</h3>
        </div>
        <hr/>
        <div>
            <img src={require('../assets/hyabak-solucion.jpg')}/>
            <p>Hyabak Solución 10ml</p>
            <h3>9,48 €</h3>
        </div>
        <hr/>
        <div>
            <h2>TOTAL</h2>
            <p>(3 productos)</p>
            <h3>27,06 €</h3>
        </div>

        </>
    )
}

export default CartComponent;