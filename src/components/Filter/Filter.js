import React from "react";
import PropTypes from "prop-types";
import {FilterLabel} from "./Filter.styled"
import { useSelector, useDispatch } from "react-redux";
import { setValueFilter } from "redux/filterSlice";
import { getValueFilter } from "redux/selectors"




const Filter = () =>  {    
    const dispatch = useDispatch(); 
    const handlerFilterChanch = (evt) => { 
        const value = evt.target.value.toLowerCase();
        console.log(value)
        dispatch(setValueFilter(value));
    };
    const valueFilter = useSelector(getValueFilter);
    return (
    
        <FilterLabel>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Find contacts by name"
                required
                value={valueFilter}
                onChange={handlerFilterChanch}
            />
        </FilterLabel>
    )
}

export default Filter;


PropTypes.Filter = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,  
}