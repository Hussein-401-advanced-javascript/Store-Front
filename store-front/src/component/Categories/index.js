import React from 'react';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { active } from '../../store/reducers/products';

import './style.scss';


function Categories(props) {
    return (
        <section>
            <Typography variant="h3" component="h1" >
                Browes Our Categories
            </Typography>
            <ul>
                {
                    props.categories.categories.map(category => {
                        return (
                            <li className="{category.name} linkStyle" key={category.name} onClick={() => props.active(category.name)}>
                                {category.displayName}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) => {
    return { categories: state.Categories }
}
const mapDispatchToProps = { active }
export default connect(mapStateToProps, mapDispatchToProps)(Categories);



