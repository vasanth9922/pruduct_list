import React from 'react'
import ReactDOM from 'react-dom'
import Product from './components/product'
import '../node_modules/semantic-ui/dist/semantic.css'
import ProductList from './components/productList';

var position = document.getElementById("mainComponent");

ReactDOM.render(<ProductList />, position);