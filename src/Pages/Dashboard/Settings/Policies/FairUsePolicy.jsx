import React from "react";
import {RiArrowLeftSLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const FairUsePolicy = () => {
  return (
    <section className="lg:px-8 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <div className=" gap-6 border border-white rounded-lg bg-setting_profile_bg lg:p-5 items-start">
        <div className="bg-setting-profile-bg p-8 rounded-md">
          <Link to="/dashboard/settings/policy">
            <RiArrowLeftSLine size={20} />
          </Link>
          <h1 className="text-text text-2xl font-bold mb-4 text-center">
            Fair Use Policy
          </h1>
          <p className="text-white text-sm mb-4">
            <strong>Effective Date:</strong> January 1st, 2025
            <br />
            <strong>Last Updated:</strong> January 1st, 2025
          </p>
          <p className="text-white text-sm mb-6">
            At NetworkX.ai, we are committed to providing our users with
            powerful automation and AI tools to optimize their presence on X
            (formerly Twitter). This Fair Use Policy ("Policy") outlines
            acceptable and unacceptable use of our platform to ensure compliance
            with applicable laws, third-party terms of service, and ethical
            standards. By using NetworkX.ai, you agree to abide by this Policy.
          </p>
          <p className="text-white text-sm mb-6">
            By using NetworkX.ai, you (the "User") agree to the terms of this
            Agreement.
          </p>
          <h2 className="text-text text-xl font-semibold mb-3">
            1. Purpose and Scope
          </h2>
          <p className="text-white text-sm mb-4">
            This Policy governs all users of NetworkX.ai and applies to the
            following:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>Direct message (DM) automation.</li>
            <li>AI-generated content, posts, and replies.</li>
            <li>
              Engagement tools such as following, unfollowing, liking, unliking,
              reposting, and unreposting.
            </li>
            <li>
              Any other current or future features, services, or functionalities
              offered through the NetworkX.ai platform.
            </li>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            2. Acceptable Use
          </h2>
          <p className="text-white text-sm mb-4">
            NetworkX.ai processes Personal Data solely for the purpose of
            providing its services, which include:
          </p>
          <ol className="list-decimal list-inside text-white text-sm mb-4">
            <li>
              Networking with professionals and clients using automated DMs.
            </li>
            <li>
              Creating and sharing high-quality, engaging content through
              AI-generated posts.
            </li>
            <li className="text-nowrap">
              Using engagement tools to build genuine connections and
              interactions.
            </li>
            <li>
              Promoting products or services ethically and in compliance with
              X’s{" "}
              <span className="text-secondary underline">
                <a href="https://twitter.com/en/tos">Terms of Service</a>
              </span>
            </li>
            <li>
              Ensuring that all actions on the platform comply with both X’s{" "}
              <span className="text-secondary underline">
                <a href="https://twitter.com/en/tos">Terms of Service</a>
              </span>{" "}
              and OpenAI’s{" "}
              <span className="text-secondary underline">
                <a href="https://openai.com/policies/">Terms & Policies</a>
              </span>
            </li>

            <p className="py-2">
              Users are encouraged to use the platform in ways that foster
              meaningful interactions, respect others’ rights, and comply with
              all applicable laws and platform guidelines.
            </p>
          </ol>
          <h2 className="text-text text-xl font-semibold mb-3">
            3. Prohibited Use
          </h2>
          <p className="text-white text-sm mb-4">
            To protect all parties and maintain platform integrity, the
            following activities are strictly prohibited:
          </p>
          <p className=" font-bold">a. Violations of X’s Terms of Service</p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>
              Spamming, mass unsolicited messaging, or bot-like behavior that
              violates X’s API usage or engagement limits.
            </li>
            <li>
              Misrepresentation, including impersonating others or creating
              misleading content.
            </li>
            <li>
              Manipulating platform metrics, including artificially inflating
              followers, likes, or other engagement statistics.
            </li>
            <li>
              Using automation for harassment, abuse, or spreading hate speech.
            </li>
            <li>
              Automating scripts or bots that disrupt the normal operations of
              X’s platform.
            </li>
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
              Exploiting the platform for fraudulent or illegal activities, such
              as phishing or scams.
            </li>
          </ul>
          <p className=" font-bold">
            c. Misuse of Data and Intellectual Property
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>
              Using data obtained through X’s API or our platform in a way that
              infringes on third-party intellectual property rights.
            </li>
            <li>
              Harvesting or scraping user data in violation of X’s policies or
              applicable data protection laws.
            </li>
          </ul>
          <p className=" font-bold">
            d. Circumvention of Limits and Restrictions
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>
              Attempting to bypass our or X’s technical limits, such as DM caps,
              post limits, or engagement thresholds.
            </li>
            <li>
              Reverse-engineering or tampering with the platform to gain
              unauthorized access to features or data.
            </li>
          </ul>
          <p className=" font-bold">
            e. No Unauthorized Resale or Commercial Use
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>
              Using NetworkX.ai to provide automation services or tools to third
              parties for resale or commercial use without permission.
            </li>
          </ul>
          <p className=" font-bold">f. Other Prohibited Activities</p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>
              Automating accounts in a manner that disrupts normal platform
              operations or harms user experience.
            </li>
            <li>
              Engaging in any activity that violates local, national, or
              international laws.
            </li>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            4. User Responsibilities
          </h2>
          <p className=" font-bold">a. Compliance with Laws and Policies</p>
          <p className="py-2 text-sm">
            You are responsible for ensuring that your use of NetworkX.ai
            complies with:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>Local, state, national, and international laws.</li>
            <li>
              X’s{" "}
              <span className="text-secondary underline">
                <a href="https://help.x.com/en/rules-and-policies">
                  {" "}
                  Rules and Policies.
                </a>
              </span>
            </li>
            <li>
              OpenAI’s{" "}
              <span className="text-secondary underline">
                <a href="https://openai.com/usage-policies"> Usage Policies.</a>
              </span>
            </li>
          </ul>
          <p className=" font-bold">b. Ethical Conduct</p>
          <p className="py-2 text-sm">
            You agree to use NetworkX.ai ethically, respecting the rights and
            privacy of others.
          </p>
          <p className=" font-bold">c. Content Review</p>
          <p className="py-2 text-sm">
            You are solely responsible for the prompts you provide when
            generating content through NetworkX.ai. While NetworkX.ai
            facilitates the creation of AI-generated content, you are
            responsible for ensuring that the input you provide aligns with all
            applicable guidelines and policies. The final decision regarding the
            use of AI-generated content, including its posting and distribution,
            rests with you.
          </p>
          <h2 className="text-text text-xl font-semibold mb-2">
            5. Monitoring and Enforcement
          </h2>
          <p className="text-sm">
            We monitor activity on our platform to ensure compliance with this
            Policy. This includes:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>
              Detecting excessive or suspicious activity (e.g., rapid DM sends
              or engagement spikes).
            </li>
            <li>
              Reviewing flagged content or accounts for potential violations.
            </li>
          </ul>
          <p className="text-sm font-bold">Consequences of Violation</p>
          <p className="text-sm py-1">
            If we determine that your use of NetworkX.ai violates this Policy,
            we may take the following actions:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4 pl-3">
            <li>Issue a warning and request corrective action.</li>
            <li>Suspend or terminate your account.</li>
            <li>Report violations to X or appropriate authorities.</li>
          </ul>
          <p className="text-sm py-1">
            Failure to comply with this Policy may result in suspension or
            termination of your account, and, where necessary, legal action.
          </p>
          <p className="text-sm py-1">
            NetworkX.ai reserves the right to suspend or terminate accounts
            without notice for severe or repeated violations.
          </p>

          <h2 className="text-text text-xl font-semibold mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-white text-sm mb-4">
            NetworkX.ai provides tools for automation and content creation but
            does not guarantee compliance with X’s terms, advertising policies,
            or other third-party rules. By using our platform, you acknowledge
            and accept the following:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              NetworkX.ai is not liable for damages resulting from misuse or
              prohibited activities.
            </li>
            <li>
              Users are solely responsible for any penalties, account
              suspensions, or legal actions resulting from violations of this
              Policy or third-party terms.
            </li>
            <li>
              NetworkX.ai is not responsible for changes to third-party services
              (e.g., X’s API changes or OpenAI’s policies) that affect the
              operation or functionality of our platform.
            </li>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            7. Reporting Violations
          </h2>
          <p className="text-white text-sm mb-4">
            If you become aware of any prohibited activity or misuse of
            NetworkX.ai, please report it immediately to support@networkx.ai.
          </p>
          <h2 className="text-text text-xl font-semibold mb-3">
            8. Changes to this Policy
          </h2>
          <p className="text-white text-sm mb-4">
            NetworkX.ai reserves the right to update this Policy at any time to
            reflect changes in our services, legal requirements, or industry
            standards. Changes will take effect upon posting on our website.
            Continued use of the platform constitutes acceptance of the updated
            Policy.
          </p>
          <h2 className="text-text text-xl font-semibold mb-3">
            9. Contact Information
          </h2>
          <p className="text-white text-sm">
            For questions or concerns about this Policy, please contact us at:
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

export default FairUsePolicy;
