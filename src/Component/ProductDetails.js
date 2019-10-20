import React,{Component} from "react";

export default  class ProductDetails extends Component{
    render() {
        return (
            <div className="cartBox">
                <div className="left" style={{position:"relative", backgroundColor:'#00cc00',width:'15%',height:'20px',margin:"0px "}}> {this.props.discount}%</div>
                <div className="productImage"><img src={this.props.imgUrl} alt="Book Cover Not available"/></div>
            </div>
        );
    }
}