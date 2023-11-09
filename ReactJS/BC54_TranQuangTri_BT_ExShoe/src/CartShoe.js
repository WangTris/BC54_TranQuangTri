import React, { Component } from "react";
import { connect } from "react-redux";

class CartShoe extends Component {
  render() {
    let { cart } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{
                      width: 50,
                    }}
                    src={item.image}
                    alt=""
                  />
                </td>

                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      this.props.addQuantity(item.id, 1);
                    }}>
                    +
                  </button>
                  <span className="mx-3">{item.cartQuantity}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.addQuantity(item.id, -1);
                    }}>
                    -
                  </button>
                </td>

                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.removeItem(item.id);
                    }}
                    className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (shoe, quantity) => {
      let action = {
        type: "CART_QUANTITY",
        payload: { shoe, quantity },
      };
      dispatch(action);
    },
    removeItem: (shoe) => {
      let action = {
        type: "REMOVE_ITEM",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
