import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search...."/>
                <p>
                    <input type="checkbox"/> {' '} only show products in stock
                </p>
            </form>
        );
    };
}