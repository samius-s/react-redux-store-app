import React from 'react'
import { connect } from 'react-redux'
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
} from '../../actions'
import './shopping-cart-table.css'

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {
        const { id, title, count, total } = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total} руб.</td>
                <td>
                    <button
                        onClick={() => onDecrease(id)}
                        className='btn btm-outline-warning btn-secondary'>
                        <i className='fa fa-minus-circle' />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className='btn btm-outline-success btn-secondary'>
                        <i className='fa fa-plus-circle' />
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btm-outline-danger btn-secondary'>
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className='total'>
                Total: {total} руб.
            </div>
        </div>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)