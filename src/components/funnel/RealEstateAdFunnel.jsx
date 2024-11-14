import React, { useState } from 'react';

const RealEstateAdFunnel = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the email submission, for now, we'll just show a success message
    setIsSubmitted(true);
  };

  return (
    <div className="ad-funnel-container">
      <section className="hero-section">
        <h1>Unlock Exclusive Real Estate Opportunities with Ruslan Shmidt</h1>
        <p>
          Are you a buyer looking for a competitive edge in the market? Or a
          seller who values privacy and discretion? With the help of Ruslan
          Shmidt, gain early access to off-market and pre-market listings that
          aren't available to the public—giving you the advantage you need.
        </p>
      </section>

      <section className="for-sellers">
        <h2>For Sellers</h2>
        <p>
          If privacy is your priority, Ruslan's exclusive platform allows you to
          sell your home discreetly. Keep your property off the market while
          still engaging with serious, qualified buyers who value confidentiality—
          especially in the luxury real estate sector.
        </p>
      </section>

      <section className="for-buyers">
        <h2>For Buyers</h2>
        <p>
          Get a head start with listings that aren’t yet available to the general
          public. By connecting with Ruslan, you’ll access exclusive properties
          before they hit the open market—giving you an early opportunity to
          secure your dream home.
        </p>
      </section>

      <section className="app-features">
        <h2>What You’ll Get:</h2>
        <ul>
          <li>Early access to off-market and pre-market listings</li>
          <li>Seamless communication with Ruslan and other top-tier agents</li>
          <li>Private, secure property tours and showings</li>
          <li>A customized property collection tailored to your needs</li>
        </ul>
      </section>

      <section className="email-signup">
        <h2>Ready to Get the Edge You Need?</h2>
        <p>
          Sign up below for more information and receive an exclusive link to
          the platform that gives you access to these hidden real estate
          opportunities.
        </p>

        {isSubmitted ? (
          <p>Thank you for signing up! Check your email for the link to access the app.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Sign Up Now</button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p>
          *Privacy and confidentiality guaranteed. The success of your real
          estate journey depends on your efforts and the expertise of your agent.
        </p>
      </footer>
    </div>
  );
};

export default RealEstateAdFunnel;
