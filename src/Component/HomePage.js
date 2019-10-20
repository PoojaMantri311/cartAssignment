import Product from "./Product";
import React,{Component} from "react";
export default class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            error: null,
            productCounter : this.props.productCounter
        }

    }

    productCounter = (product) => {
        this.props.setProductCounter(product);
    };



    fetchData = () => {
        fetch(`https://api.myjson.com/bins/qhnfp`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    data: data,
                    isLoading: false,
                })
            ).catch(error => this.setState({ error, isLoading: false }));
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {history} = this.props;
        return (
            <div>
                <div style={{display:'flex', height:"100px"}}>
                    <div className="column left"> All items</div>
                    <div className="column middle">
                        <div className="column middle" style={{width:'150px', backgroundColor:'green' ,position:"relative" ,left:"50%"}}> {this.state.counter} Item Added into cart</div>
                    </div>
                    <div className="column right">
                        <button onClick={()=> history.push("/cart")}>Go to Cart </button>
                    </div>
                </div>
                <div style={{display:'inline'}}>
                    {this.state.data.map(product => (
                        <div style={{display:"inline"}} key={product.id}>
                            <Product
                                product={product}
                                counter ={this.props.counter}
                                productCounter ={this.productCounter}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}