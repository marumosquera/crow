import React from "react";
import illustration from "../assets/homeIllustration.svg";
import "../styles/Home.scss";
import create from "../assets/create.svg";
import deposit from "../assets/deposit.svg";
import execute from "../assets/execute.svg";
import dots from "../assets/dots.svg";
import banner from "../assets/imagebanner.svg";
import candado from "../assets/candado.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home-section">
      <div className="flex justify-between home-first">
        <div className="home">
          <h1>Create your own escrow smart contract</h1>
          <h3>
            At Crow, we provide cutting-edge escrow smart contract services that
            leverage the power of blockchain technology to ensure the security
            of your cryptocurrency and NFT deposits.
          </h3>
          <div className="flex">
            <a href="https://crow-app-l3ru.vercel.app/create">
              {" "}
              <button>Launch App</button>
            </a>

            <Link to="/tutorial">
              <button>Tutorial</button>
            </Link>
          </div>
        </div>
        <div>
          <img src={illustration} alt="home illustration crow" />
        </div>
      </div>

      <div className="three-section flex justify-between">
        <div className="three-box">
          <img src={create} alt="create" />
          <p className="box-title">Create</p>
          <p>
            Define the terms and conditions of your transaction. Customize the
            escrow agreement according to your specific needs, both parties must
            agree to the terms.
          </p>
        </div>
        <div className="three-box">
          <img src={deposit} alt="deposit" />
          <p>Deposit</p>
          <p>
            Safely deposit your cryptocurrency or NFTs into the escrow smart
            contract. Your assets are held securely until the conditions of the
            agreement are met.
          </p>
        </div>
        <div className="three-box">
          <img src={execute} alt="execute" />
          <p>Execute</p>
          <p>
            Crow's smart contract automatically executes the transaction. Funds
            and assets are released to the respective parties, ensuring a
            seamless and secure process on conditions fullfilment.
          </p>
        </div>
      </div>

      <div className="flex secure-section">
        <div className="secure-tx">Make Secure Transactions</div>
        <div className="secure-tx-two">
          <p>
            Our platform leverages the power of blockchain technology and smart
            contracts to ensure the security and transparency of your digital
            assets.
          </p>
          <div className="learn-more flex">
            <img src={dots} alt="learn more" />
            <p>Learn more</p>
          </div>
        </div>
      </div>
      <div className="banner">
        <p>Ready to Secure Your Transactions?</p>
        <p> Get Started with Crow Today! </p>
      </div>
      <div className="detail-section flex justify-between">
        <div className="detail-box">
          <span>Unparalleled Security</span>
          <p>
            We eliminate the need for intermediaries and the risk of fraud or
            mismanagement.
          </p>
        </div>
        <div className="detail-box">
          <span>Simplified User Experience</span>
          <p>
            Whether you're a seasoned cryptocurrency investor or new to the
            world of blockchain, our platform is designed to cater to your
            needs.
          </p>
        </div>
        <div className="detail-box">
          <span>Efficiency and Speed</span>
          <p>
            With Crow, transactions are streamlined, reducing the time and
            effort required for secure asset transfers.
          </p>
        </div>
        <div className="detail-box">
          <span>Trust and Transparency</span>
          <p>
            We eliminate the need for intermediaries and the risk of fraud or
            mismanagement.
          </p>
        </div>
      </div>
      <div className="flex join-crow w-full">
        <div className="w-1/3">
          <img src={candado} alt="candado" className="candado" />
        </div>
        <div className="w-2/3">
          <span>Join Crow and Experience the Future of Escrow Services</span>
          <p>
            Say goodbye to outdated and insecure escrow systems. With Crow, your
            transactions are protected by the immutability and transparency of
            blockchain technology. Experience secure, efficient, and transparent
            escrow services, revolutionizing the way you handle your digital
            asset transactions.
          </p>
        </div>
      </div>
    </section>
  );
};
