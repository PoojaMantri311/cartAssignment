import React, {Component} from 'react';
import '../App.css';

export default class ProductCart extends Component{

    onClick = () => {
        this.props.counter();
        this.props.productCounter(this.props.product);
    };

    render() {
        const product = this.props.product;
        let cost =(parseInt(product.price)) - (parseInt(product.price))*(parseInt(product.discount))/100;

        return (
            <div style={{height:"20%",borderTop: "solid black 1px", position:"relative"}}>
                <div className="left" style={{position:"absolute", top:"3px"}}>{product.name}</div>
                <div style={{display:"flex"}}>
                    <div className="left" style={{textDecoration: "line-through" , position:"absolute", bottom:"3px"}}>${product.price}</div>
                    <div className="left" style={{position:"absolute",left : "40px" ,bottom:"3px"}}>${cost}</div>
                </div>
                <div className="column right" style={{position:"absolute", right:"5px"}}>
                    <button style={{height:"40px"}} onClick={this.onClick}>Add to Cart</button>
                </div>
            </div>
        );
    }
}

