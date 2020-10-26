const initialState = {
    categories : [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' }, 
        { name: 'house', displayName: 'Houses' }
        
    ],
    activeCategory : '',
}


export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            const categories = state.categories;
            const activeCategory = payload;
            return {categories , activeCategory}
        default :
        return state;
    }
}

export const active = (categoryName) =>{
    return {
        type : 'ACTIVE',
        payload : categoryName
    }
}