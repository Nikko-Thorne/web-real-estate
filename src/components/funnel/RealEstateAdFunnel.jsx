import React, { useState } from 'react';

const RealEstateAdFunnel = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          <form
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            {/* Hidden input required for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Email:
                <input
                  type="email"
                  name="email"
                  required
                />
              </label>
            </p>
            {/* reCAPTCHA widget */}
            <div data-netlify-recaptcha="true" />
            <p>
              <button type="submit">Sign Up Now</button>
            </p>
          </form>
        )}
      </section>
    </div>
  );
};

export default RealEstateAdFunnel;
