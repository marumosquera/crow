import React from "react";
import { Roadmap } from "../components/Roadmap";
import "../styles/About.scss";
import coin from "../assets/coin.svg";
import clock from "../assets/clock.svg";

export const About = () => {
  return (
    <section className="about-section">
      <img src={coin} alt="coin" className="coin" />
      <div>
        <h2 className="about-title">
          Learn more about what an escrow smart contract is
        </h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <p className="box-title-about">What is a escrow smart contract?</p>
            <p>
              An escrow smart contract is a self-executing agreement that
              securely and transparently holds funds until specific conditions
              are met.
            </p>
          </div>
          <div className="w-1/2">
            <p className="box-title-about">How does it work?</p>
            <p>
              Upon the fulfillment of these conditions, the funds are
              automatically disbursed to the recipient, thereby eliminating the
              requirement for a trusted third party to manage the funds and
              eliminating the possibility of fraud.
            </p>
          </div>
        </div>
      </div>
      <div className="BAC-title">
        <h2>The Blockchain Arbitration and Commerce Society</h2>
        <span>
          crow is affiliated with The Blockchain Arbitration and Commerce
          Society (BACS)
        </span>
      </div>
      <div className="w-full flex">
        <div className="w-1/2">
          <img src={clock} alt="" className="clock"/>
        </div>
        <div className="w-1/2 BAC-text">
          <div>
            <p>Affiliation with BACS</p>
            <p>
              As an innovative startup, we are proud to be affiliated with the
              Blockchain Arbitration and Commerce Society (BACS), offering an
              unprecedented level of dispute resolution for our clients. Our
              affiliation with BACS brings a unique advantage to our customers.
            </p>
          </div>
          <div>
            <p>Disputes resolution</p>
            <p>
              In the event of dissatisfaction or disputes arising from a
              transaction, both parties have the option to agree beforehand to
              have their case resolved by the world's first specialized court in
              blockchain arbitration.
            </p>
          </div>
          <div>
            <p>Partnership</p>
            <p>
              This exceptional partnership ensures that any conflicts can be
              efficiently resolved in a matter of days, providing swift and fair
              solutions.
            </p>
          </div>
        </div>
      </div>
      <Roadmap/>
      <div>
        <button></button>
      </div>
    </section>
  );
};
