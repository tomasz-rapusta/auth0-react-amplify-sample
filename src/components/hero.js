import React from "react";
import MainNav from "./main-nav";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">

    <h1 className="mb-4">Variable Recurring Payment</h1>
    <p className="lead">
        <div> Total Amount: £100
            Payment Reference: OID5436545767
            Debtor Reference:  Amazon-OID5436545767

        </div>

    ----------------
       <div>
           Payee Name : AMAZON
           SORT Code: 20-40-60
           Account Number: 987643763267</div>


    </p>
      <MainNav />
  </div>

);

export default Hero;
