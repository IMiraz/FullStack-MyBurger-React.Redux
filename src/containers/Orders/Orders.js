import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
class Orders extends Component {
    state = {
        orders:[],
        loading:true
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then(res =>{
            const fetchOrders = [];
            for(let key in res.data) {
                console.log(key)
                console.log(res.data[key])
                fetchOrders.push({
                    ...res.data[key],
                    id:key
                })


            }
            this.setState({loading:false, orders:fetchOrders})
            console.log(this.state.orders)
        } )
        .catch(err => {
            this.setState({loading:false})
        })

    }
    render(){
        return (
            <div>
            {this.state.orders.map(order => (
                <Order key={order.id} ingrdients={order.ingrdients} price={order.totalprice} />
            )


            )}
            </div>
        )
    }



}
export default WithErrorHandler(Orders, axios)

