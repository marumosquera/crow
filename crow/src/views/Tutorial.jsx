import React from "react";
import "../styles/Tutorial.scss";

export const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>Step-by-Step Tutorial</h1>
      <h3>How to Use Crow for Secure Escrow Services</h3>

      <div className="instx-section">
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">00</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Prerequisites</span>

            <li>Install the MetaMask wallet extension in your browser.</li>
            <li>
              Create a MetaMask account and ensure it is funded with the
              necessary cryptocurrency for the transaction.
            </li>
            <li>Create a user account on Crow platform.</li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">01</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Connect MetaMask to Crow</span>
            <li>
              Open the Crow website and click on the "Connect MetaMask" button.
            </li>
            <li>
              MetaMask will prompt you to connect your wallet. Select the
              appropriate MetaMask account to connect.
            </li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">02</div>
          <div className="w-3/4 instx">
            <span className="instx-title"> Create an Escrow Agreement</span>

            <li>Log in to your Crow user account.</li>
            <li>Navigate to the "Create" tab.</li>
            <li>
              Fill in the necessary details, including the transaction amount,
              description, and any specific conditions or requirements for the
              escrow.
            </li>
            <li>
              Follow the instructions provided to deposit the required funds or
              NFTs into the escrow smart contract.
            </li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">03</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Deposit Funds or NFTs</span>
            <li>
              MetaMask will prompt you to confirm the transaction. Review the
              details and click "Confirm" to proceed.
            </li>
            <li>
              Once the deposit is successful, the escrow smart contract will
              freeze the funds until the other party agrees to begin the escrow.
            </li>
            <li>Click on the "Activate Escrow" button.</li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">04</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Verification by the Other Party</span>
            <li>
              Crow will contact the other party (email provided by their Login)
              involved in the transaction and provide them with the agreement
              details.
            </li>
            <li>
              They will then log in to their Crow user account and navigate to
              the "My Contracts" tab.
            </li>
            <li>
              They will find the pending agreement and review the terms and
              conditions.
            </li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">05</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Other Party Agreement and Activation</span>
            <li>
              If they agree to proceed, and deposit their funds (Step 2.4 and
              2.4.a) they click on the "Agree" button to activate the escrow.
            </li>
            <li>
              The escrow smart contract is now active, and both parties are
              bound by the agreed-upon conditions.
            </li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">06</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Escrow Execution and Completion</span>
            <li>
              Once all conditions are met, the escrow smart contract will
              automatically execute the transaction.
            </li>
            <li>
              The funds or NFTs will be released to the respective parties as
              per the agreement.
            </li>
            <li>
              Both parties will receive notifications confirming the successful
              completion of the escrow transaction.
            </li>
          </div>
        </div>
        <div className="flex w-full instx-box">
          <div className="w-1/4 instx-num">07</div>
          <div className="w-3/4 instx">
            <span className="instx-title">Dispute Resolution (Optional)</span>
            <li>
              In case of dissatisfaction or disputes, either party can choose to
              initiate the dispute resolution process.
            </li>
            <li>
              Both parties can agree to involve the Blockchain Arbitration and
              Commerce Society (BACS) for a fair and efficient resolution.
            </li>
            <li>
              Contact Crow support or follow the provided instructions to
              initiate the dispute resolution process with BACS.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
