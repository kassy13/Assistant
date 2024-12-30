import React from "react";
import {RiArrowLeftSLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="lg:px-8 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <div className=" gap-6 border border-white rounded-lg bg-setting_profile_bg lg:p-5 items-start ">
        <div
          className="bg-setting-profile-bg  ngpbetddr
        p-8 rounded-md"
        >
          <Link to="/dashboard/settings/policy">
            <RiArrowLeftSLine size={20} />
          </Link>
          <h1 className="text-text text-2xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-white text-sm mb-4">
            <strong>Effective Date:</strong> January 1st, 2025
            <br />
            <strong>Last Updated:</strong> January 1st, 2025
          </p>
          <p className="text-white text-sm mb-6">
            NetworkX.ai ("we," "our," or "us") is committed to safeguarding the
            privacy of our users. This Privacy Policy outlines how we collect,
            use, and protect your information when you use our platform and
            services.
          </p>
          <p className="text-white text-sm mb-6">
            By accessing or using NetworkX.ai, you agree to this Privacy Policy.
            If you do not agree, please discontinue use of our services
          </p>

          <h2 className="text-text text-xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <p className=" font-bold">a. Information You Provide</p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">Account Information:</span> When you
              sign up, we collect information such as your name, email address,
              phone number, username, password, payment information, and any
            </li>
            <li>
              <span className="font-bold">User Content:</span> Data inputted
              into our platform, including messages, posts, replies, prompts and
              automation preferences
            </li>
            <li>
              {" "}
              <span>Support Requests:</span>
              Any details you provide when contacting customer support or
              submitting inquiries.
            </li>
          </ul>

          <p className=" font-bold">b. Information We Collect Automaticallye</p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">Usage Data:</span>Information such as
              IP address, browser type, device information, interaction logs,
              and API requests.
            </li>
            <li>
              <span className="font-bold">Platform Activity:</span> Data on
              actions performed via automation features (e.g., DMs sent, posts
              made, engagement activities).
            </li>
            <li>
              {" "}
              <span>Cookies and Tracking Technologies</span>
              We use cookies, web beacons, and similar technologies to track
              your interaction with our platform.
            </li>
          </ul>

          <p className=" font-bold">c. Information from Third Parties</p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">X API Data:</span>We fetch live data
              from X’s API to provide automation and engagement tools. This may
              include account metrics, posts, follower details, and interactions
              related to your account.
            </li>
            <li>
              <span className="font-bold"> OpenAI Integration:</span> We process
              content using OpenAI’s ChatGPT-4-Turbo to generate posts, replies,
              and other content. OpenAI may process this data in accordance with
              their privacy terms.
            </li>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p className=" py-1 text-sm">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">To Provide Services:</span>To deliver
              core features such as DM automation, AI-generated content, and
              growth tools.
            </li>
            <li>
              <span className="font-bold">To Improve Functionality:</span>To
              analyze usage trends and enhance platform performance.
            </li>
            <li>
              <span className="font-bold">To Communicate with You</span> To
              analyze usage trends and enhance platform performance.
            </li>
            <li>
              {" "}
              <span>For Legal and Security Purposes:</span>
              Any details you provide when contacting customer support or .
            </li>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            3. Sharing Your Information
          </h2>
          <p className=" py-1 text-sm">
            We do not sell your personal data. However, we may share information
            in the following cases:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">Service Providers:</span>With
              third-party vendors (e.g., payment processors, hosting providers,
              OpenAI, X) to facilitate our services.
            </li>
            <li>
              <span className="font-bold">Compliance with Laws:</span>If
              required by law, subpoena, or legal process.
            </li>
            <li>
              <span className="font-bold">Business Transfers</span> In
              connection with a merger, acquisition, or sale of assets.
            </li>
            <li>
              {" "}
              <span>With Your Consent:</span>
              Where you explicitly agree to data sharing for specific purposes.
            </li>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            4. Your Data and Third-Party Platforms
          </h2>
          <p className=" py-1 text-sm">
            We do not sell your personal data. However, we may share information
            in the following cases:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">Integration with X:</span>Your use of
              NetworkX.ai requires integration with X (formerly Twitter). Your
              data may be shared with X as part of their API interactions, and
              their{" "}
              <span className="text-secondary underline">
                <a href="https://x.com/en/privacy">privacy policy</a>
              </span>{" "}
              applies.
            </li>
            <li>
              <span className="font-bold">Integration with OpenAI:</span>
              Integration with OpenAI: Your use of NetworkX.ai may require
              integration with OpenAI. Content processed using OpenAI’s
              GPT-4-Turbo is subject to OpenAI’s{" "}
              <span className="text-secondary underline">
                <a href="https://openai.com/privacy"> privacy policy</a>
              </span>
              .
            </li>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            5. Security of Your Information
          </h2>
          <p className=" py-1 text-sm">
            We implement industry-standard security measures to protect your
            data, including:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              Encryption of sensitive information (e.g., passwords, payment
              details).
            </li>
            <li>Regular security audits and vulnerability scans.</li>
            <li>
              Restricted access to personal data by authorized personnel only.
            </li>
            <p className="py-1">
              However, no method of transmission or storage is completely
              secure. By using our services, you acknowledge and accept these
              risks.
            </p>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            6. Data Retention
          </h2>
          <p className=" py-1 text-sm">
            We retain your data for as long as necessary to:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>Fulfill the purposes outlined in this Privacy Policy.</li>
            <li>Comply with legal obligations.</li>
            <li>Resolve disputes and enforce agreements.</li>
            <p className="py-1">
              You may request deletion of your data at any time (see Section 7).
            </p>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            7. Your Rights
          </h2>
          <p className=" py-1 text-sm">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">Access:</span> Request access to your
              personal data.
            </li>
            <li>
              <span className="font-bold">Correction</span> Request corrections
              to inaccuracies.
            </li>
            <li>
              <span className="font-bold">Deletion:</span> Request deletion of
              your data, subject to legal obligations.
            </li>
            <li>
              <span className="font-bold">Opt-Out: </span> Opt-out of marketing
              communications or data collection practices (e.g., cookies).
            </li>
            <p className="py-1">
              To exercise your rights, contact us at{" "}
              <span className="font-bold">support@networkx.ai. </span>
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            8. Cookies and Tracking Technologies
          </h2>
          <p className=" py-1 text-sm">
            We use cookies to enhance your experience, including:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              <span className="font-bold">Necessary Cookies:</span>For platform
              functionality.
            </li>
            <li>
              <span className="font-bold">Analytics Cookies:</span>To track
              usage patterns and improve services.
            </li>
            <p className="py-1">
              You can manage your cookie preferences in your browser settings.
            </p>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            9. International Data Transfers
          </h2>
          <p className=" py-1 text-sm">
            If you access NetworkX.ai from outside the United States, note that
            your data will be transferred and processed in the United States. We
            take measures to ensure your data is handled securely and in
            compliance with applicable privacy laws.
          </p>

          <h2 className="text-text text-xl font-semibold mb-3">
            10. Changes to this Privacy Policy
          </h2>
          <p className=" py-1 text-sm">
            We may update this Privacy Policy periodically. Any changes will be
            effective upon posting the updated policy on our website. We
            encourage you to review this page regularly. Continued use of the
            Services after updates constitutes your acceptance of the revised
            Privacy Policy.
          </p>

          <h2 className="text-text text-xl font-semibold mb-3">
            11. Contact Us
          </h2>
          <p className="text-white text-sm">
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
          </p>
          <ul>
            <li className="text-white text-sm ">
              <strong className="font-bold ">Email:</strong> support@networkx.ai
            </li>
            <li className="text-white text-sm ">
              <strong className="font-bold">Address:</strong> PO Box 94, Coopers
              Plains, NY 14870-0094, United States
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
