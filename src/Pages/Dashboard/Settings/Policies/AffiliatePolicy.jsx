import React from "react";
import {
  RiArrowGoBackFill,
  RiArrowLeftFill,
  RiArrowLeftSFill,
  RiArrowLeftSLine,
} from "react-icons/ri";
import {Link} from "react-router-dom";

const AffiliatePolicy = () => {
  return (
    <section className="lg:px-8 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <div className=" gap-6 border border-white rounded-lg bg-setting_profile_bg lg:p-5 items-start">
        <div className="bg-setting-profile-bg p-8 rounded-md">
          <Link to="/dashboard/settings/policy">
            <RiArrowLeftSLine size={20} />
          </Link>
          <h1 className="text-text text-2xl font-bold mb-4 text-center">
            Affiliate Program Policy
          </h1>
          <p className="text-white text-sm mb-4">
            <strong>Effective Date:</strong> January 1st, 2025
            <br />
            <strong>Last Updated:</strong> January 1st, 2025
          </p>
          <p className="text-white text-sm mb-6">
            This Affiliate Program Policy ("Policy") governs the terms under
            which affiliates ("Affiliates," "You," or "Your") participate in the
            NetworkX.ai Affiliate Program ("Program") and promote the software
            solutions provided by NetworkX.ai ("Company," "We," "Us," or "Our").
            By participating in this Program, you agree to be bound by the terms
            set forth in this Policy.
          </p>

          <h2 className="text-text text-xl font-semibold mb-3">
            1. Participation in the Affiliate Program
          </h2>
          <p className="text-white text-sm mb-4">
            The NetworkX.ai Affiliate Program is open to all users who wish to
            participate. No formal sign-up or approval process is required. To
            get started:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              Simply use the unique affiliate links provided in the Affiliates
              section of the NetworkX.ai settings page.
            </li>
            <li>
              By using the affiliate links, you agree to the terms and
              conditions outlined in this Affiliate Program Policy.
            </li>
            <p className="py-2">
              NetworkX.ai reserves the right to monitor affiliate activities to
              ensure compliance with this Policy.
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            2. Affiliate Responsibilities
          </h2>
          <p className="text-white text-sm mb-4">
            As an Affiliate, you agree to:
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              Promote NetworkX.ai using only legal and ethical marketing
              methods.
            </li>
            <li>
              Ensure accurate and truthful representation of NetworkX.ai’s
              products and services when advertising or promoting them.
            </li>
            <li className="text-nowrap">
              Follow all applicable laws and regulations, including advertising
              laws, data protection laws, and intellectual property rights.
            </li>
            <li>
              Not engage in deceptive or misleading marketing practices,
              including false claims, spam, or unauthorized use of NetworkX.ai's
              trademarks and branding.
            </li>
            <li>
              Promote the Affiliate Links provided by NetworkX.ai in a manner
              that does not infringe upon the rights of third parties or create
              confusion as to the nature of your relationship with NetworkX.ai.
            </li>
            <p className="py-2 font-bold text-text">
              Avoid certain prohibited practices, such as:
            </p>

            <li>
              Purchasing ads targeting the brand name or related terms (e.g.,
              "NetworkX.ai").
            </li>
            <li>
              Sending unsolicited emails (spam) to promote your affiliate link.
            </li>
            <li>
              Using misleading URLs or attempting to divert traffic using
              non-transparent means.
            </li>
          </ul>
          {/* <ul>
          </ul> */}

          <h2 className="text-text text-xl font-semibold mb-3">
            3. Affiliate Commissions
          </h2>
          <p className="text-white text-sm mb-4">
            Affiliates will receive a commission for each qualifying sale of
            NetworkX.ai's software products and services made through the unique
            affiliate links they promote.
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <strong className="text-text">Commission Structure:</strong>
            <p>
              The commission structure is detailed in the Affiliates section of
              the NetworkX.ai settings page and may vary by product or service.
              Affiliates will earn a percentage of the net sale price (after
              applicable taxes, discounts, and refunds).
            </p>
            <strong className="py-2 block text-text">Payment Terms:</strong>

            <ul className="list-disc list-inside pl-6">
              <li>
                <strong>Payment Schedule:</strong> Commissions will be paid
                within thirty (30) days of the funds being cleared on our end.
              </li>
              <li>
                <strong>Payment Method:</strong> Payments will be processed via
                PayPal. If you do not have a PayPal account, you may request an
                alternative payment method.
              </li>
              <li>
                <strong>Minimum Threshold:</strong> There is no minimum
                threshold for payouts.
              </li>
              <p className="font-bold py-2">
                All commission payments will be made in USD unless otherwise
                agreed upon.
              </p>
            </ul>
            <strong className="block py-2 text-text">
              Affiliate Responsibility for Taxes
            </strong>
            <p>
              Affiliates are responsible for reporting and paying any applicable
              taxes on their commission earnings in accordance with local laws.
              NetworkX.ai does not withhold taxes on behalf of affiliates.
            </p>
            <strong className="block py-2 text-text">
              Disclaimer of Earnings Guarantees
            </strong>
            <p>
              Participation in the Program does not guarantee any specific level
              of income. Earnings depend on your efforts, marketing strategies,
              and external factors.
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            4. Affiliate Link and Tracking
          </h2>
          <p className="text-white text-sm mb-4">
            NetworkX.ai will provide you with unique affiliate links to track
            sales made through your referrals.
          </p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              These affiliate links must be used when promoting NetworkX.ai’s
              products, and any sales made without using the correct affiliate
              links may not be credited to you.
            </li>
            <li>
              Tracking cookies will be used to monitor and credit sales
              originating from your affiliate links.
            </li>
            <li>
              NetworkX.ai reserves the right to modify or terminate tracking
              methods or adjust how sales are tracked, with notice to
              affiliates.
            </li>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            5. Prohibited Activities
          </h2>
          <p className="text-white text-sm mb-4">Affiliates may not:</p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              Engage in deceptive, fraudulent, or unethical activities to
              generate sales or leads, such as click fraud, forced clicks, or
              false advertising.
            </li>
            <li>
              Bid on branded keywords (e.g., "NetworkX.ai" or "NetworkX") in
              paid search ads.
            </li>
            <li>
              Use pop-ups, pop-unders, or other disruptive methods that may
              annoy or trick potential customers into clicking on the affiliate
              link.
            </li>
            <li>
              Use the NetworkX.ai name or logo in a way that may imply a false
              affiliation or endorsement by the Company without prior written
              consent.
            </li>
            <li>
              Participate in or promote illegal activities related to the
              affiliate program or products offered.
            </li>
            <p className="py-2">
              Failure to comply with these terms may result in immediate
              termination of your Affiliate Account and forfeiture of
              commissions.
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            6. Affiliate Obligations Regarding Data Protection and Privacy
          </h2>
          <p className="text-white text-sm mb-4">
            Affiliates must comply with applicable data protection laws,
            including the General Data Protection Regulation (GDPR), California
            Consumer Privacy Act (CCPA), and other relevant privacy laws.
          </p>
          <p className="text-white text-sm mb-4">You agree to:</p>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              Obtain explicit consent from individuals if you collect personal
              data during your affiliate marketing activities.
            </li>
            <li>
              Handle personal data in accordance with the privacy policies of
              both NetworkX.ai and applicable data protection regulations.
            </li>
            <li>
              Not sell, lease, or misuse personal data provided by your
              referrals in any manner.
            </li>
          </ul>

          <h2 className="text-text text-2xl font-semibold mb-3">
            7. Intellectual Property
          </h2>
          <ul className="list-disc list-inside text-white text-sm mb-4">
            <li>
              License to Use Trademarks: By participating in the Affiliate
              Program, you are granted a non-exclusive, non-transferable license
              to use NetworkX.ai’s trademarks, logos, and other marketing
              materials provided by the Company to promote the Program.
            </li>
            <li>
              Ownership: You acknowledge that all intellectual property rights,
              including copyrights and trademarks, in the materials provided by
              NetworkX.ai remain the exclusive property of NetworkX.ai.
            </li>
            <li>
              Restrictions: You may not alter, misuse, or use NetworkX.ai’s
              trademarks, logos, or other materials in a way that implies
              endorsement or partnership beyond the scope of this Program
              without prior written consent.
            </li>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            8. Termination of Affiliate Status
          </h2>

          <ul className="list-disc list-inside text-white text-sm mb-4">
            <p className="text-white text-sm mb-4">
              NetworkX.ai reserves the right to terminate an affiliate’s
              participation in the Program at any time, with or without cause,
              by providing written notice.
            </p>
            <p className="text-white text-sm mb-4">
              Reasons for termination may include, but are not limited to:
            </p>
            <li>Violation of any terms in this Affiliate Program Policy.</li>
            <li>Engagement in fraudulent or illegal activities.</li>
            <li>
              Failure to maintain adequate marketing performance or compliance
              with applicable laws.
            </li>
            <p className="py-2">
              Upon termination, the affiliate will cease using all promotional
              materials, trademarks, and affiliate links provided by
              NetworkX.ai, and all pending commission payments will be processed
              within thirty (30) days in accordance with the Company’s payment
              policies.
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            9. Liability and Indemnification
          </h2>

          <ul className="list-disc list-inside text-white text-sm mb-4">
            <p className="text-white text-sm mb-4">
              NetworkX.ai will not be liable for any indirect, consequential, or
              punitive damages arising from an affiliate’s participation in the
              Program.
            </p>
            <p className="text-white text-sm mb-4">
              Affiliates agree to indemnify, defend, and hold harmless
              NetworkX.ai, its officers, directors, and employees, from and
              against any claims, damages, or legal actions resulting from their
              actions, omissions, or breach of this Agreement, including but not
              limited to:
            </p>
            <li>Violation of any third-party intellectual property rights.</li>
            <li>Breach of any applicable laws or regulations.</li>
            <li>
              Defamation or misrepresentation of NetworkX.ai or its products.
            </li>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            10. Fraud Detection and Audit Rights
          </h2>

          <ul className="list-disc list-inside text-white text-sm mb-4">
            <p className="text-white text-sm mb-4">
              NetworkX.ai reserves the right to monitor affiliate activities and
              conduct audits to detect and prevent fraudulent activity.
              Affiliates agree to cooperate fully with any such investigations
              and provide requested documentation or information.
            </p>
          </ul>
          <h2 className="text-text text-xl font-semibold mb-3">
            11. Modifications to the Affiliate Program Policy
          </h2>

          <ul className="list-disc list-inside text-white text-sm mb-4">
            <p className="text-white text-sm mb-4">
              NetworkX.ai reserves the right to modify or update this Affiliate
              Program Policy at any time. Any changes will be communicated to
              the affiliates, and continued participation in the Program
              constitutes acceptance of the updated terms.
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            12. Governing Law and Dispute Resolution
          </h2>

          <ul className="list-disc list-inside text-white text-sm mb-4">
            <p className="text-white text-sm mb-4">
              This Agreement will be governed by and construed in accordance
              with the laws of New York, United States of America, without
              regard to its conflict of law principles. Any dispute arising from
              this Agreement will be resolved through binding arbitration in New
              York, United States of America or through any other method
              mutually agreed upon.
            </p>
          </ul>

          <h2 className="text-text text-xl font-semibold mb-3">
            13. Contact Information
          </h2>

          <ul className="list-disc list-inside text-white text-sm mb-4">
            <p className="text-white text-sm mb-4">
              If you have any questions regarding the NetworkX.ai Affiliate
              Program or this Affiliate Program Policy, please contact us at:
            </p>
            <p>
              <strong className="font-bold">Email:</strong>
              support@networkx.ai
            </p>
            <p>
              <strong>Address:</strong> PO Box 94, Coopers Plains, NY
              14870-0094, United States
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AffiliatePolicy;
