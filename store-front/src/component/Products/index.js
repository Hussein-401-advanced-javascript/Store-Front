import { React, useEffect } from 'react';
import { addtoCart } from '../../store/reducers/cart';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { getRemoteProductsData } from '../../store/reducers/actions'


import './style.scss';

function Products(props) {
    useEffect(() => {
        console.log('I am Working !!!!!!!!!!!!!!!!');
        props.getRemoteProductsData()
    }, []);
    const handelAddtoCart = (product) =>{
        
        console.log('line 15', props);
        props.addtoCart(product.name)
        
     }

    return (
        <section className='contaneir'>

            {
                props.products.products.map(product => {
                    console.log('22',`${product.category} == ${props.selectedCat}`);
                    if (product.category == props.selectedCat) {
                        console.log('inside if >>>>>>');
                        return (
                            <Card className='imgCard' key={product.name}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title className='nameCard'>
                                        {product.name}
                                    </Card.Title>
                                    <Card.Text className='priceCard'>
                                        {product.price}
                                    </Card.Text>
                                    <Card.Text className='priceCard'>
                                        in Stock: {product.inStock}
                                    </Card.Text>
                                    <section >
                                        <button onClick={handelAddtoCart} variant="danger" type="button" class="btn btn-success" >ADD TO CART</button>
                                        {/* <Button variant="light">ADD TO CART</Button> */}
                                        <Button type="button" class="btn btn-info">VIEW DETAILS</Button>
                                        {/* <Button variant="light">VIEW DETAILS</Button> */}
                                    </section>
                                </Card.Body>
                            </Card>
                        )
                    }
                })
            }

        </section >
    )
}
const mapStateToProps = (state) => ({

    products: state.Products,
    selectedCat: state.Categories.activeCategory

})
const mapDispatchToProps = { addtoCart, getRemoteProductsData };

export default connect(mapStateToProps, mapDispatchToProps)(Products);