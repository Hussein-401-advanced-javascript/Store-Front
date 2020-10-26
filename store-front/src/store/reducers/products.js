const initialState = {
    products : [
        { name: 'PS5', category: 'electronics', price: 'from 399.99$ to 499.99$', inStock: 10 ,img:'https://blog.playstation.com/tachyon/2020/09/50349535038_42fa72f759_k.jpg?resize=1088,612&crop_strategy=smart'},
        { name: 'Xbox Series X', category: 'electronics', price: 'from 299.99$ to 499.99$', inStock: 10 ,img:'https://cdn.vox-cdn.com/thumbor/UPucga77lT8tqHkB0kW2FavgtFY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19526256/xboxseriesxconsole.jpg' },
        { name: 'gaming pc', category: 'electronics', price: '1500$', inStock: 3 ,img:'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { name: 'Apples', category: 'food', price: '0.99$/kg', inStock: 5 ,img: 'https://images.unsplash.com/photo-1553664290-3d1856933047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        { name: 'tomato', category: 'food', price: '1.5$/kg', inStock: 5  ,img: 'https://images.unsplash.com/photo-1559740509-3998170dd8a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { name: 'strawberry', category: 'food', price: '2.39/box', inStock: 9 ,img:'https://images.unsplash.com/photo-1600261100972-05d0ed3c3efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { name: 'Italian house', category: 'house', price: '5,000,000$', inStock: 1 ,img:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { name: 'Turkish house', category: 'house', price: '3,000,000$', inStock: 1 ,img:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { name: 'Norway House', category: 'house', price: '7,000,000$', inStock: 1 ,img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    ],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            const products = initialState.products.filter(product=> product.category === payload) ;
            return {products}
        default :
        return state;
    }
}
export const active = (categoryName) => {
    return {
        type : 'ACTIVE',
        payload : categoryName,
    }
}