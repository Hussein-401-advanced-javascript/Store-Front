const initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'house', displayName: 'Houses' }

    ],
    activeCategory: '',
}


export default (state = initialState, action) => {
    const { type, payload } = action;
    let categories = state.categories;
    switch (type) {
        case 'ACTIVE':
            // categories = state.categories;
            const activeCategory = payload;
            return { categories, activeCategory }
        case 'GET':
            categories = payload.result;
            console.log('>????????????????', payload);
            return { categories }

        default:
            return state;
    }
}

export const active = (categoryName) => {
    return {
        type: 'ACTIVE',
        payload: categoryName
    }
}