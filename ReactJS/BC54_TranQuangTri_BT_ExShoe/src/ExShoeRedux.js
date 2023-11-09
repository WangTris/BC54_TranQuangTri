import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "./data";

export default class ExShoeRedux extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: [],
  };
  handleRemove = (idShoe) => {
    let newCart = this.state.cart.filter((item) => {
      return item.id !== idShoe;
    });
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <CartShoe
            handleRemove={this.handleRemove}
          />
        </div>
        <div className="col-6">
          <ListShoe />
        </div>
        <div className="col-12">
          <DetailShoe />
        </div>
      </div>
    );
  }
}
