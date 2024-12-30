import React, {useEffect, useState} from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import {RiArrowLeftSLine} from "react-icons/ri";
const Fullfilment = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        // Apply solid styles when scrolled
        setIsSolid(true);
        setIsBlurred(false);
      } else {
        // Reset to transparent when at the top
        setIsSolid(false);
        setIsBlurred(false);
      }
    };

    // Check scroll position on mount to apply accurate styles
    handleScroll();

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup scroll listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation Variants
  const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
  };

  const slideIn = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
  };
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 p-4 transition duration-300 ${
          isBlurred ? "bg-[rgba(1,12,30,0.6)] backdrop-blur-sm" : ""
        } ${isSolid ? "bg-[#010C1E]" : ""}`}
      >
        <Nav />
      </div>
      <section className="lg:px-24 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-12 md:mt-36">
        <div className=" gap-6 border border-white rounded-lg bg-setting_profile_bg lg:p-5 items-start">
          <div className="bg-setting-profile-bg p-8 rounded-md ">
            <Link to="/dashboard/settings/policy">
              <RiArrowLeftSLine size={20} />
            </Link>
            <h1 className="text-text text-2xl font-bold mb-4 text-center">
              Fulfillment Policy
            </h1>
            <p className="text-white text-sm mb-4">
              <strong>Effective Date:</strong> January 1st, 2025
              <br />
              <strong>Last Updated:</strong> January 1st, 2025
            </p>
            <p className="text-white text-sm mb-6">
              At NetworkX.ai, we are committed to providing our customers with
              reliable and efficient services. This Fulfillment Policy outlines
              our processes for service delivery, customer support, and refunds.
              By using our platform, you agree to this Fulfillment Policy.
            </p>
            <p className="text-white text-sm mb-6">
              By using NetworkX.ai, you (the "User") agree to the terms of this
              Agreement.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              1. Service Delivery
            </h2>
            <p className=" font-bold font-sm">a. Services Plans</p>
            <p className="py-1 font-sm">
              NetworkX.ai provides the following service options to meet your
              needs:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li className="pb-1">
                <span className="font-bold">Monthly Subscription Plan:</span>{" "}
                {""}
                Grants access to a predefined number of credits and features for
                managing accounts on X (formerly Twitter). Credits are allocated
                at the start of each billing cycle and can be used within that
                period. Additional credits can be purchased separately as
                needed.
              </li>
              <li className="pb-1">
                <span className="font-bold">Pay-Per-Credit Plan:</span> {""}
                Credits are added to your account upon successful payment and
                can be used to access specific features or services as outlined
                in your plan.
              </li>
              <li className="pb-1">
                <span className="font-bold">
                  Customized 'Done-for-You' Plans:
                </span>{" "}
                {""}
                Tailored packages designed to meet your unique requirements.
                Details, delivery timelines, and onboarding support are
                established during the consultation process.
              </li>
              <li className="pb-1">
                <span className="font-bold">Add-Ons:</span> {""}
                Additional features or services available for purchase to
                enhance your plan. These are activated immediately after
                successful payment unless otherwise specified.
              </li>
            </ul>
            <p className=" font-bold font-sm">b. Delivery of Features</p>
            <p className="py-1 text-sm">
              Our platform operates entirely online, and all features—such as DM
              Automation, AI Smart Content, and Growth Tools—are accessible via
              your NetworkX.ai account. No physical products will be shipped.
            </p>

            <p className=" font-bold font-sm">
              c. Dependencies on Third-Party Platforms
            </p>
            <p className="py-1 text-sm">
              Our services rely on third-party platforms, including X (formerly
              Twitter) and OpenAI. While we strive to maintain uninterrupted
              service, functionality may be affected by changes or disruptions
              in third-party APIs. We are not responsible for downtime or
              limitations caused by third-party services.
            </p>

            <p className=" font-bold font-sm">d. Force Majeure</p>
            <p className="py-1 text-sm">
              NetworkX.ai shall not be held liable for delays or failures in
              performance resulting from events beyond our reasonable control,
              including but not limited to natural disasters, government
              actions, cyberattacks, technical failures of third-party
              platforms, or any other unforeseen events.
            </p>

            <p className=" font-bold font-sm">d. Force Majeure</p>
            <p className="py-1 text-sm">
              We periodically perform maintenance to ensure the quality of our
              services. During maintenance windows, access to certain features
              may be temporarily unavailable.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              2. Account Activation
            </h2>
            <p className=" font-bold font-sm">a. Account Setup</p>
            <p className="py-1 text-sm">
              Upon successful registration and subscription payment, your
              account will be activated, and you can start using NetworkX.ai
              immediately. You are responsible for providing accurate
              information during registration.
            </p>
            <p className=" font-bold font-sm">b. Onboarding Assistance</p>
            <p className="py-1 text-sm">
              We provide guides and customer support to help you get started
              with our platform. For assistance, contact{" "}
              <span className="font-bold">support@networkx.ai.</span>
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              3. Subscription and Renewal
            </h2>
            <p className=" font-bold font-sm">a. Billing Cycle</p>
            <p className="py-1 text-sm">
              NetworkX.ai operates on a recurring subscription model. The
              billing frequency (monthly, annually, etc.) is determined by the
              plan you select during purchase.
            </p>
            <p className=" font-bold font-sm">b. Auto-Renewal</p>
            <p className="py-1 text-sm">
              Your subscription will automatically renew at the end of each
              billing cycle unless you cancel. You can manage your subscription
              in your account’s settings section.
              <span className="font-bold">support@networkx.ai.</span>
            </p>
            <p className=" font-bold font-sm">c. Failed Payments</p>
            <p className="py-1 text-sm">
              If a payment fails, we will attempt to process it again. If
              unsuccessful, your account may be temporarily suspended until
              payment is resolved.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              4. Refunds and Cancellations
            </h2>
            <p className=" font-bold font-sm">a. Refund Policy</p>
            <p className="py-1 font-sm">
              All payments made to NetworkX.ai are final and non-refundable due
              to the digital nature of our services. Refunds may be issued
              solely at NetworkX.ai's discretion in exceptional circumstances.
              These include, but are not limited to:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li className="">
                Proven technical issues entirely attributable to NetworkX.ai
                that prevented service usage.
              </li>
              <li className="">Errors in billing or duplicate charges.</li>
              <p className="py-1 font-sm">
                Refund requests must be submitted within 7 days of the billing
                date by contacting support@networkx.ai. NetworkX.ai reserves the
                right to approve or deny refund requests on a case-by-case
                basis, and all decisions are final.
              </p>
            </ul>
            <p className=" font-bold font-sm">b. Cancellation Policy</p>
            <p className="py-1 font-sm">
              You may cancel your subscription at any time in your account’s
              settings section. Cancellation will prevent future billing, but no
              refunds or credits will be issued for any unused portion of the
              current billing cycle.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              5. Service Limitations
            </h2>
            <p className=" font-bold font-sm">
              a. Compliance with X’s Policies
            </p>
            <p className="py-1 font-sm">
              NetworkX.ai software is designed without hard usage caps, allowing
              users to set their own limits. However, users are responsible for
              adhering to X’s policies and platform rules regarding safe usage.
              Exceeding X’s guidelines—such as sending excessive direct
              messages, posts, or performing high volumes of actions—may lead to
              account restrictions, suspensions, or other penalties imposed by
              X.
            </p>
            <p className=" font-bold font-sm">b. User Responsibility</p>
            <p className="py-1 font-sm">
              By using NetworkX.ai, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li className="">
                It is your responsibility to stay informed about X’s policies
                and ensure your usage remains compliant.
              </li>
              <li className="">
                NetworkX.ai is not liable for any consequences resulting from
                misuse or overuse of the platform that violates X’s spam
                policies or usage guidelines.
              </li>
            </ul>
            <p className=" font-bold font-sm">c. External Factors</p>
            <p className="py-1 font-sm">
              Service functionality is contingent on the availability and
              performance of third-party platforms. NetworkX.ai is not liable
              for disruptions caused by changes or outages in these services.
            </p>
            <p className=" font-bold font-sm">
              d. Service Suspension and Termination
            </p>
            <p className="py-1 font-sm">
              NetworkX.ai reserves the right to suspend or terminate accounts
              that engage in activities violating our terms of service or
              applicable laws. Accounts may also be suspended for unresolved
              payment issues after multiple attempts.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              6. Dispute Resolution
            </h2>
            <p className="py-1 font-sm">
              If you experience any issues with service delivery or billing, we
              encourage you to contact us at support@networkx.ai to resolve the
              matter promptly.
            </p>
            <p className="py-1 font-sm">
              In the event a dispute cannot be resolved amicably, you agree to
              resolve it through arbitration in accordance with the laws of New
              York, United States of America.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              7. Modifications to Services
            </h2>
            <p className="py-1 font-sm">
              We reserve the right to modify, suspend, or discontinue any part
              of our Services, including features and pricing, at any time with
              prior notice. These changes will not affect your subscription for
              the remainder of the current billing cycle.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              8. Contact Information
            </h2>
            <p className="text-white text-sm">
              For questions or concerns about this Policy, please contact us at:
            </p>
            <ul>
              <li className="text-white text-sm ">
                <strong className="font-bold ">Email:</strong>{" "}
                support@networkx.ai
              </li>
              <li className="text-white text-sm ">
                <strong className="font-bold">Address:</strong> PO Box 94,
                Coopers Plains, NY 14870-0094, United States
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Fullfilment;
