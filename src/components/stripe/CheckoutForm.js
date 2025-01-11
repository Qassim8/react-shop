import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useContext, useState } from "react";
import { cartContext } from "../../context/CartProvider";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { totalAmount } = useContext(cartContext);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!email) newErrors.email = "Email is required!";
    if (!phone) newErrors.phone = "Phone number is required!";
    if (!country) newErrors.country = "Your contry is required!";

    if (Object.values(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
        if (!stripe || !elements) {
          return;
        }

        const cardElement = elements.getElement(CardElement);
        try {
          const response = await axios.post(
            "https://fake-apis-uomb.onrender.com/create-payment-intent",
            {
              amount: totalAmount, // المبلغ المطلوب بالدولار (مثال)
            }
          );

          const { clientSecret } = await response.data;

          const { error, paymentMethod } = await stripe.createPaymentMethod(
            clientSecret,
            {
              type: "card",
              card: cardElement,
            }
          );

          if (error) {
            setError(error.message);
            setSuccess(false);
          } else {
            setError(null);
            setSuccess(true);
            console.log("Payment method:", paymentMethod);
            // قم بإرسال paymentMethod.id إلى السيرفر لإنشاء PaymentIntent
          }
        } catch (err) {
          setError(err.message);
          setSuccess(false);
        }
    }
  };



  return (
    <>
      <div className="container">
        <h1 className="my-5">Your Information</h1>
        <form onSubmit={handleSubmit} className=" pt-3 pb-4">
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-md-items-center pb-4">
            <div style={{ flex: "1" }}>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="email"
                className="form-control bg-light rounded-2 border-dark-subtle border-1 p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div style={{ flex: "1" }}>
              <input
                type="number"
                name="phone"
                value={phone}
                placeholder="phone"
                className="form-control bg-light rounded-2 border-dark-subtle border-1 p-2"
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.phone}</span>
              )}
            </div>
            <div style={{ flex: "1" }}>
              <select
                className="w-100 bg-light rounded-2 border-dark-subtle border-1 p-2"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="fr">FRANCE</option>
                <option value="sp">SPAIN</option>
                <option value="uae">UAE</option>
              </select>
              {errors.country && (
                <span style={{ color: "red" }}>{errors.country}</span>
              )}
            </div>
          </div>
          <CardElement />
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-md border-1 border-dark py-2 px-5 mt-3"
          >
            Pay
          </button>
          {error && (
            <div style={{ color: "red" }}>your card could be expired!</div>
          )}{" "}
          {success && <div>Payment Successful</div>}
        </form>
      </div>
    </>
  );
}

export default CheckoutForm;
