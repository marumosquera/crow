import React from "react";
import "../styles/Roadmap.scss";

export const Roadmap = () => {
  return (
    <div>
      <h2>Roadmap</h2>
      <h1>Initial launch dates of crow</h1>

      <div className="timeline">
        <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">2Q 2023</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">MVP Development and Launch:</div>
            <div className="timeline__event__description">
              <li>Development of the MVP of the escrow platform.</li>
              <li>Conduct rigorous testing and quality assurance to ensure the stability and reliability of the MVP.</li>
              <li>Prepare for the launch by setting up the necessary infrastructure and security measures.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">2Q 2023</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Enhancements and Feature Expansion:</div>
            <div className="timeline__event__description">
              <li>Improve functionality and user interface based on user feedback.</li>
              <li>Expand customizable terms and conditions.</li>
              <li>Enhance security measures to protect against potential threats.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">2Q 2023</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Marketing and User Acquisition:</div>
            <div className="timeline__event__description">
              <li>Implement a comprehensive marketing strategy to attract more users.</li>
              <li>Utilize social media, partnerships, and content marketing for user acquisition.</li>
              <li>Introduce referral programs to incentivize user growth.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">3Q 2023:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Regulatory Compliance:</div>
            <div className="timeline__event__description">
              <li>Ensure compliance with escrow service regulations.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">3Q 2023:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Collaborate with legal experts for legal requirements.Integration and Partnerships:</div>
            <div className="timeline__event__description">
              <li>Form partnerships for interoperability and wider adoption.</li>
              <li>Integrate the escrow service into third-party Dapps and platforms.</li>
              <li>Explore collaborations with DeFi projects for enhanced financial transactions.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">3Q 2023:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Scalability and Performance Optimization:</div>
            <div className="timeline__event__description">
              <li>Improve infrastructure to handle increased user activity.</li>
              <li>Implement scaling solutions for faster and more efficient transactions.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">4Q 2023:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Regulatory Compliance:</div>
            <div className="timeline__event__description">
              <li>Ensure compliance with escrow service regulations.</li>
              <li>Collaborate with legal experts for legal requirements.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">4Q 2023:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Continuous Improvement and Innovation:</div>
            <div className="timeline__event__description">
              <li>Gather user feedback and enhance the platform accordingly.</li>
              <li>Introduce new features and innovations.</li>
              <li>Explore emerging technologies for further improvements.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">1Q 2024:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Advanced Analytics and Reporting:</div>
            <div className="timeline__event__description">
              <li>Provide users with comprehensive transaction analytics and insights.</li>
              <li>Utilize data analytics for platform optimization.</li>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-sport"></i>
          </div>
          <div className="timeline__event__date">1Q 2024:</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Ecosystem Integration and Interoperability:</div>
            <div className="timeline__event__description">
              <li>Enhance integration capabilities for seamless cross-platform functionality.</li>
              <li>Explore collaborations with DeFi projects for enhanced financial transactions.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
