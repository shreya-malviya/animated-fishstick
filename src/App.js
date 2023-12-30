import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Payment from './components/payment/Payment';
import {useSelector } from 'react-redux'
import PaymentStatus from './components/payment status/PaymentStatus';

function App() {

  const {orderItems , paymentMethods , error} = useSelector(state => state.checkout)

  let orderAmount = 0;
  orderItems && orderItems.forEach(product => {
      orderAmount += product.price * product.quantity
  });

  const deliveryFee = orderAmount === 0 ? 0 : orderAmount < 799 ? 40 : 0;
  const discount = (orderAmount > 799 ? orderAmount*0.1 : 0).toFixed(2);

  const totalAmount = (orderAmount + deliveryFee - discount).toFixed(2)

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Checkout products={orderItems} error={error} orderAmount={orderAmount} deliveryFee={deliveryFee} discount={discount} totalAmount={totalAmount} />} />
        <Route path='/payment' element={<Payment paymentMethods={paymentMethods} totalAmount={totalAmount} />} />
        <Route path='/paymentStatus' element={<PaymentStatus />} />
      </Routes>

    </Router>

  );
}

export default App;
