import React,{Component} from "react";

export default class Cart extends Component{


    constructor(props){
        super(props);
        this.state = {

        }

    }


    render() {

        const productCart = this.props.productCart;
        return (
            <div>
                <div className="basket">
                    <div className="basket-module">

                    </div>
                    <div className="basket-labels">
                        <ul>
                            <li className="item item-heading">Item</li>
                            <li className="price">Price</li>
                            <li className="quantity">Quantity</li>
                            <li className="subtotal">Subtotal</li>
                        </ul>
                    </div>
                    {

                        Object.keys(productCart).map((d, key) => (
                            <div className="basket-product">
                                <div className="item">
                                    <div className="product-image">
                                        <div className="product-frame" style={{
                                            height: "30px",
                                            display: 'flex',
                                            border: "gray 1px solid",
                                            padding: "6px",
                                            fontSize: "25px"
                                        }}>
                                            <div style={{width: "80%"}}>
                                                {productCart[d].name}
                                            </div>
                                            <div style={{
                                                backgroundColor: "white",
                                                display: 'relative',
                                                top: "10px",
                                                right: "5px",
                                                alignContent: "center"
                                            }}>
                                                <button style={{position: "relative", top: "5px"}}>X</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">{productCart[d].price}</div>
                                <div className="quantity">
                                    <input type="number" value={productCart[d].count} min="1" className="quantity-field"/>
                                </div>
                                <div className="subtotal">{productCart[d].price*productCart[d].count}</div>
                                <div className="remove">
                                </div>
                            </div>
                        ))
                    }
                </div>

                <aside>
                    <div className="summary">
                        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag
                        </div>
                        <div>
                            <div className="subtotal-title">Total</div>
                            <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                        </div>
                        <div>
                            <div className="subtotal-title">Discount</div>
                            <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                        </div>
                        <div className="summary-total">
                            <div className="total-title">Total</div>
                            <div className="total-value final-value" id="basket-total">130.00</div>
                        </div>
                        <div className="summary-checkout">
                            <button className="checkout-cta">Go to Secure Checkout</button>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}