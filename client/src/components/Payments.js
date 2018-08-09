import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import * as actions from "../actions/index";

class Payments extends Component {
  //   onToken = token => {
  //     fetch("/save-stripe-token", {
  //       method: "POST",
  //       body: JSON.stringify(token)
  //     }).then(response => {
  //       response.json().then(data => {
  //         alert(`We are in business, ${data.email}`);
  //       });
  //     });
  //   };

  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for emaily"
        amount={500}
        token={token => this.props.onHandleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHandleToken: token => dispatch(actions.handleToken(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Payments);
