import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import GlobalApi from "../../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { CartContext } from "../../_context/CartContext";

function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    createOrder();

    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json();
    // console.log("client_secret", clientSecret);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      console.log("Payment Confirm");
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder = () => {
    let productIds = [];
    cart.forEach((element) => {
      productIds.push(element?.product?.id);
      // console.log(first);
    });

    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        userName: user.fullName,
        amount: amount,
        products: productIds,
      },
    };
    GlobalApi.createOrder(data).then((resp) => {
      if (resp) {
        cart.forEach((element) => {
          GlobalApi.deleteCartItem(element.id).then((result) => {});
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="px-32 
        md:mx-[250px] mt-12"
      >
        <PaymentElement />
        <button
          className="bg-primary
    p-2 text-white rounded-md w-full
    mt-6 hover:bg-blue-700
    disabled:bg-gray-500"
          type="submit"
          disabled={!stripe}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
