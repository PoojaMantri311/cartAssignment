import React , {Component} from 'react';
import '../App.css';
import ProductCart from "./ProductCart.js";
import ProductDetail from "./ProductDetails";
export default class Product extends Component{
    render() {
        return (
            <div className="Product">
                <ProductDetail discount = {this.props.product.discount} imgUrl={this.props.product.img_url}/>
                <ProductCart
                    product = {this.props.product}
                    counter = {this.props.counter}
                    productCounter = {this.props.productCounter}
                />
            </div>
        );
    }
}