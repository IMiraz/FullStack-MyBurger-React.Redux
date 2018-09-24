import React, {Component} from 'react';
import {connect} from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../Store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'
class Orders extends Component {

    componentDidMount() {
this.props.onFetchOrders(this.props.token, this.props.userId)
//  console.log(this.props.userId)
        // axios.get('/orders.json')
        // .then(res =>{
        //     const fetchOrders = [];
        //     for(let key in res.data) {
        //         console.log(key)
        //         console.log(res.data[key])
        //         fetchOrders.push({
        //             ...res.data[key],
        //             id:key
        //         })


        //     }
        //     this.setState({loading:false, orders:fetchOrders})
        //     console.log(this.state.orders)
        // } )
        // .catch(err => {
        //     this.setState({loading:false})
        // })

    }
    render(){
        //console.log(this.props.orders)
         let orders= <Spinner/>
         if(!this.props.loading) {

    orders=  <div>
    <h1 style={{width:'50%',margin:'15px auto'}}>Your All Orders List</h1>
                {this.props.orders.map(order => (
                <Order key={order.id}  ingredients={order.ingredients} price={order.totalprice} />

            ))}
            </div>

            }
            return (
            <div>
             {orders}
            </div>
        )
    }



}

const mapStateToProps = state => {

    return {
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
}

const mapDispatchToprops = dispatch => {

    return {
  onFetchOrders:(token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}


export default connect(mapStateToProps, mapDispatchToprops)(WithErrorHandler(Orders, axios))

