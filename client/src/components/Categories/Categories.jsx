import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
//import { getFetchCategoriesAC } from '../../redux/actionCreators/categoriesAC';
import Category from '../Category/Category';

import './Categories.css';


function Categories(props) {
      // const categories = [{parik: 'parik', id: '1'}, {manik: 'manik', id: '2'}, {strig: 'strig', id: '3'}]
    const categories = useSelector((state) => state.categoriesReducer.categories)
    const dispatch = useDispatch()

    useEffect(() => {dispatch({ type: 'GET_FETCH_CATEGORIES' })}, [dispatch])

    return (
        <div className="categories-block">
            <h2>Наши услуги</h2>
            <div className="categories-main-page">
                {categories.length ? categories.map((category) => <Category key={uuidv4()} category={category} />) : <p>No categories</p>}
            </div>
        </div>
    );
}

export default Categories;
