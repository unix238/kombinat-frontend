import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// const link = 'http://localhost:8080/';
const link = 'http://dev.kmbinat.com/';

export default class PaymentApi {
  static async addOrder(orderItems) {
    const req = await axios.post(`${link}payments/new-order`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      userID: JSON.parse(localStorage.getItem('user')),
      items: orderItems,
    });

    return req;
  }
}
