import React from 'react';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../store/reducers/cart';


function Cart (props){

    return (
        <section>
            <ul>
                {
                    props.cart.cart.map(product=>{
                        return(
                            <li>
                                <span>{product}</span>
                                <button onClick={()=> props.deleteFromCart(product)}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

const mapStateToProps = (state) =>{
  return {cart : state.Cart}
} 
const mapDispatchToProps = { deleteFromCart } 

export default connect(mapStateToProps , mapDispatchToProps  )(Cart);