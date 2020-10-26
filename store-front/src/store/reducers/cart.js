const initialState = {
    cart : []
    
};

export default (state = initialState ,action) =>{
    const { type , payload } = action;
    let cart = state.cart;
    switch(type){
        case 'ADDTOCART' :
            // let isExist = false
            // cart.forEach(product =>{
            //     if(product.product.name == payload.name){
            //         product.quantity++;
            //         isExist = true;
            //     }
            // })
            // if(!isExist){
            //     cart.push(payload);
            // }
            cart.push(payload)
            return {cart}
        case 'DELETE' :
            const cartProducts = state.cart.filter(item=> item !== payload) ;
            return { cart : cartProducts}
        default :
        return state;
    }
}

export const addtoCart = (product) => {
    return {
        type : 'ADDTOCART',
        payload : product,
    }
}
export const deleteFromCart = (product) => {
    return {
        type : 'DELETE',
        payload : product,
    }
}
