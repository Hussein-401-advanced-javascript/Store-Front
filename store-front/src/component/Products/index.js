import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.scss';

function Products(props) {
    return (
        <section>
            <ul >
                {
                    props.products.products.map(product => {
                        return (
                            <Card key={product.name}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.price}$
                                    </Card.Text>
                                    <section >
                                    <Button type="button" class="btn btn-success">ADD TO CART</Button>
                                        {/* <Button variant="light">ADD TO CART</Button> */}
                                        <Button type="button" class="btn btn-info">VIEW DETAILS</Button>
                                        {/* <Button variant="light">VIEW DETAILS</Button> */}
                                    </section>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) => {
    return { products: state.Products }
}
export default connect(mapStateToProps)(Products);