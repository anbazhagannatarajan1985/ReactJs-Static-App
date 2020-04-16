import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        const rows = [];
        let lastCatogory = null;
        this.props.products.forEach(product => {
            console.log(product);
            if (product.category !== lastCatogory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }

            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCatogory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}