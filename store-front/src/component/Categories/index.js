import { React, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { active } from '../../store/reducers/products';
import { getRemoteData } from '../../store/reducers/actions'

import './style.scss';


function Categories(props) {
    useEffect(() => {
        console.log('I am Working !!!!!!!!!!!!!!!!');
        props.getRemoteData()
    }, []);
    console.log('>>>>>>>', props);
    return (
        <section>
            <Typography variant="h3" component="h3" >
                Browes Our Categories
            </Typography>
            <ul>
                {
                    props.categories.categories.map(category => {
                        console.log('111111111111111111', category);
                        return (
                            <li className="{category.name}, linkStyle" key={category.name} onClick={() => props.active(category.name)}>
                                {category.display_name}
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
const mapDispatchToProps = { active, getRemoteData }
export default connect(mapStateToProps, mapDispatchToProps)(Categories);



