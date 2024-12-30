import React, {useEffect, useState} from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import {RiArrowLeftSLine} from "react-icons/ri";

const Terms = () => {
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
          <div className="bg-setting-profile-bg p-8 rounded-md">
            <Link to="/dashboard/settings/policy">
              <RiArrowLeftSLine size={20} />
            </Link>
            <h1 className="text-text text-2xl font-bold mb-4 text-center">
              Terms of Service
            </h1>
            <p className="text-white text-sm mb-4">
              <strong>Effective Date:</strong> January 1st, 2025
              <br />
              <strong>Last Updated:</strong> January 1st, 2025
            </p>
            <p className="text-white text-sm mb-6">
              Welcome to NetworkX.ai! These Terms of Service ("Terms") govern
              your access to and use of our website, platform, and services
              (collectively, the "Services"). By accessing or using the
              Services, you agree to be bound by these Terms. If you do not
              agree, do not use the Services
            </p>
            <p className="text-white text-sm mb-6">
              By using NetworkX.ai, you (the "User") agree to the terms of this
              Agreement.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-white text-sm mb-4">
              By registering for, accessing, or using the Services, you:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                Confirm you are at least 18 years old (or the legal age of
                majority in your jurisdiction).
              </li>
              <li>
                Agree to comply with these Terms, our Privacy Policy, and all
                applicable laws and regulations.
              </li>
              <p className="py-1">
                If you use the Services on behalf of an organization, you
                represent and warrant that you have authority to bind the
                organization to these Terms.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              2. Description of Services
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai provides tools and automation for managing accounts on
              X (formerly Twitter), including:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                <span className="font-bold">AI Smart Content:</span>
                Utilizes AI to generate, schedule, and post tailored content and
                replies.
              </li>
              <li>
                <span className="font-bold">Growth Tools:</span>
                Automates engagement activities, including follows, unfollows,
                likes, unlikes, reposts, unreposts, and more.
              </li>
            </ul>
            <h2 className="text-text text-xl font-semibold mb-3">
              3. Account Registration and Responsibilities
            </h2>
            <p className=" font-bold">a. Account Creation</p>
            <p className="text-white text-sm mb-4">
              To access our Services, you must create an account by providing
              accurate and up-to-date information. You are responsible for
              maintaining the confidentiality of your login credentials.
            </p>
            <p className=" font-bold">b. Account Responsibilities</p>
            <p className="text-white text-sm mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>Use the Services only for lawful purposes.</li>
              <li>
                Comply with X's{" "}
                <span>
                  <a href="https://twitter.com/en/tos">Terms of Service</a>
                </span>{" "}
                and policies.
              </li>
              <li>
                Comply with OpenAI’s{" "}
                <span>
                  <a href="https://openai.com/policies/terms-of-use/">
                    {" "}
                    Terms of Service{" "}
                  </a>
                </span>{" "}
                and policies.
              </li>
              <li>
                Accept responsibility for all activity conducted under your
                account.
              </li>
              <p className="text-white text-sm mb-4">
                NetworkX.ai is not responsible for unauthorized access to your
                account or any resulting damages.
              </p>
            </ul>
            <p className=" font-bold">b. Unethical and Harmful Conduct</p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>
                Sending unsolicited or irrelevant DMs in bulk to individuals who
                have not opted to receive such communication.
              </li>
              <li>
                Using AI-generated content to harass, bully, defame, or spread
                misinformation.
              </li>
              <li>
                Exploiting the platform for fraudulent or illegal activities,
                such as phishing or scams.
              </li>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              4. Prohibited Activities
            </h2>

            <p className="text-white text-sm mb-4">You agree not to:</p>

            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>
                Use the Services to spam, harass, or violate the rights of
                others.
              </li>
              <li>Circumvent rate limits or violate X's API usage policies.</li>
              <li>
                Reverse-engineer, copy, or distribute any part of the Services
                without permission.
              </li>
              <li>
                Introduce viruses, malware, or other harmful technologies.
              </li>
              <p className="text-white text-sm mb-4">
                Engage in activities that violate applicable laws or
                regulations.
              </p>
              <li>
                Engage in any other activities that NetworkX.ai, in its sole
                discretion, deems harmful, abusive, or inappropriate, and which
                may result in the suspension or termination of your account.
              </li>
              <p>
                NetworkX.ai reserves the right to suspend or terminate accounts
                engaging in prohibited activities.
              </p>
            </ul>
            <h2 className="text-text text-xl font-semibold mb-3">
              5. Third-Party Services and Data Usage
            </h2>
            <p className=" font-bold">a. Integration with X</p>
            <p className="text-white text-sm mb-4">
              The Services rely on integration with X’s API. Your use of the
              platform must comply with X’s terms, and we are not responsible
              for any changes X may implement that affect the functionality of
              our Services. Users acknowledge that changes to X's API or its
              rate limits may restrict the functionality of the Services.
            </p>
            <p className=" font-bold">b. Use of OpenAI</p>
            <p className="text-white text-sm mb-4">
              Content generation and AI functionality leverage OpenAI’s
              GPT-4-Turbo. By using these features, you acknowledge that OpenAI
              may process data in accordance with its{" "}
              <span className="font-bold underline">
                {" "}
                <a href="https://openai.com/privacy">privacy terms</a>
              </span>
              .
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              6. Payments and Subscriptions
            </h2>
            <p className=" font-bold">a. Fees</p>
            <p className="text-white text-sm mb-4">
              Access to certain features of the Services requires a
              subscription. Fees are detailed on our pricing page and are
              subject to change with notice.
            </p>
            <p className=" font-bold">b. Payment Terms</p>
            <p className="text-white text-sm mb-4">
              By purchasing a subscription, you agree to:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>Provide accurate payment information.</li>
              <li>
                Authorize us to charge your payment method on a recurring basis.
              </li>
              <li>
                Reverse-engineer, copy, or distribute any part of the Services
                without permission.
              </li>
            </ul>
            <p className=" font-bold">c. Refund Policy</p>
            <p className="text-white text-sm mb-4">
              All payments are non-refundable, except as required by law. If you
              believe there is an issue with your subscription, please contact{" "}
              <span className="font-bold">support@networkx.ai.</span>
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              7. Intellectual Property
            </h2>

            <p className="text-white text-sm mb-4">
              All intellectual property rights in the Services, including
              software, logos, trademarks, and content, are owned by NetworkX.ai
              or our licensors. You are granted a limited, non-exclusive,
              non-transferable license to use the Services as intended.
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 ">
              <p className="font-sm">
                You may not copy, modify, distribute, or create derivative works
                from our intellectual property without prior written consent.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              8. Disclaimer of Warranties
            </h2>

            <p className="text-white text-sm mb-4">
              The Services are provided "AS IS" and "AS AVAILABLE" without
              warranties of any kind, express or implied, including but not
              limited to merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="font-sm">We do not guarantee:</p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>Continuous or error-free operation of the Services.</li>
              <li>Specific outcomes or success in using the Services</li>
              <li>
                Compatibility with all devices, browsers, or operating systems.
              </li>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              9. Limitation of Liability
            </h2>

            <p className="text-white text-sm mb-4">
              To the fullest extent permitted by law, NetworkX.ai and its
              affiliates are not liable for:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>Indirect, incidental, punitive, or consequential damages.</li>
              <li>Loss of profits, data, or business opportunities.</li>
              <li>Unauthorized access to your account or data breaches.</li>
              <p className="font-sm py-1">
                To the maximum extent permitted by law, in no event will
                NetworkX.ai or its affiliates be liable for any indirect,
                special, incidental, or consequential damages, including loss of
                profits, data, or business opportunities, arising out of or in
                connection with the use or inability to use the services,
                regardless of whether NetworkX.ai has been advised of the
                possibility of such damages. NetworkX.ai’s liability under these
                Terms shall be limited to the amount you have paid for the
                services during the six (6) months preceding the claim.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              10. Indemnification
            </h2>

            <p className="text-white text-sm mb-4">
              You agree to indemnify and hold NetworkX.ai, its affiliates, and
              employees harmless from claims, damages, losses, or expenses
              arising from:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>Your use of the Services.</li>
              <li>Violation of these Terms or applicable laws.</li>
              <li>Infringement of third-party rights.</li>
            </ul>
            <h2 className="text-text text-xl font-semibold mb-3">
              11. Termination
            </h2>

            <p className="text-white text-sm mb-4">
              We may suspend or terminate your account at any time for any
              reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
              <li>Breach of these Terms.</li>
              <li>Failure to pay subscription fees.</li>
              <li>Misuse of the Services.</li>
              <p className="py-1">
                Upon termination, you must cease all use of the Services, and
                any outstanding fees will remain payable.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              12. Force Majeure
            </h2>

            <p className="text-white text-sm mb-4">
              NetworkX.ai shall not be held liable for failure to perform due to
              causes beyond its reasonable control, including but not limited to
              acts of God, government actions, network outages, or third-party
              service disruptions.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              13. Governing Law
            </h2>

            <p className="text-white text-sm mb-4">
              These Terms are governed by and construed in accordance with the
              laws of New York, United States of America. Any disputes will be
              resolved in the courts of New York, United States of America, and
              you consent to their exclusive jurisdiction.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              14. Changes to These Terms
            </h2>

            <p className="text-white text-sm mb-4">
              We reserve the right to update these Terms at any time. Changes
              will take effect upon posting on our website. Continued use of the
              Services after updates constitutes your acceptance of the revised
              Terms.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              15. Contact Information
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

export default Terms;
