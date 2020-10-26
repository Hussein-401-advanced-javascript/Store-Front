import React from 'react';
import { addtoCart } from '../../store/reducers/cart';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';

import './style.scss';

function Products(props) {
    return (
        <section className='contaneir'>

            {
                props.products.products.map(product => {
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
                                    <button onClick={() => props.addtoCart(product.name)} variant="danger" type="button" class="btn btn-success" >ADD TO CART</button>
                                    {/* <Button variant="light">ADD TO CART</Button> */}
                                    <Button type="button" class="btn btn-info">VIEW DETAILS</Button>
                                    {/* <Button variant="light">VIEW DETAILS</Button> */}
                                </section>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </section >
    )
}
const mapStateToProps = (state) => {
    return { products: state.Products }
}
const mapDispatchToProps = { addtoCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);