import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddCash } from '../actions/add-cash';
import {GetCash} from '../actions/get-cash';
import {AddCustomer} from '../actions/add-customer'
import {RemoveCustomer} from '../actions/remove-customer';
import { ADD_CUSTOMER } from '../tools/constants';

export default function Counter() {
    const output = useSelector((state) => state.CashReducer.cash);
    const customers_output = useSelector((state) => state.CustomerReducer.customers);
    const dispatch = useDispatch();
    

    const AddnewCustomer = (name) => {

        const newCustomer = {
            name,
            id: Math.floor(Math.random() * 100)
        }

        dispatch({type: ADD_CUSTOMER, customers: newCustomer})
    }

    // console.log(AddnewCustomer('asdasd'));
    return (
        <div className="container">
            <h2>Pick your actions</h2>
            <p>{output}</p>
            <button onClick={() => dispatch(AddCash(Number(prompt())))} className="btn btn-primary">Add cash</button>
            <button onClick={() => dispatch(GetCash(Number(prompt())))} className="btn btn-primary">Get cash</button>
            <button onClick={() => AddnewCustomer(prompt())} className="btn btn-primary">Add customer</button>
            <button className="btn btn-primary">Remove customer</button>
            {(customers_output.length > 0) ? (
            
            <div className="card">
                <ul className="list-group list-group-flush">
                    {customers_output.map((item)=> {
                        // console.log(id)
                        return <li onClick={() => dispatch(RemoveCustomer(item))} className="list-group-item" key={item}>{item}</li>
                    })}
                </ul>
            </div>)
            : 
            null
            }
        </div>
    )
}
