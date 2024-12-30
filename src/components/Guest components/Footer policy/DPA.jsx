import React, {useEffect, useState} from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import {RiArrowLeftSLine} from "react-icons/ri";

const DPA = () => {
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
              Data Processing Agreement
            </h1>
            <p className="text-white text-sm mb-4">
              <strong>Effective Date:</strong> January 1st, 2025
              <br />
              <strong>Last Updated:</strong> January 1st, 2025
            </p>
            <p className="text-white text-sm mb-6">
              This Data Processing Agreement ("Agreement") is entered into by
              and between NetworkX.ai ("Processor") and the user ("Data
              Controller" or "User") of the NetworkX.ai platform, effective as
              of the date the user agrees to the terms herein. This Agreement
              governs the processing of personal data provided by the User
              through the use of NetworkX.ai’s services.
            </p>
            <p className="text-white text-sm mb-6">
              By using NetworkX.ai, you (the "User") agree to the terms of this
              Agreement.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              1. Definitions
            </h2>
            <p className="text-white text-sm mb-4">
              For the purposes of this Agreement, the following definitions
              apply:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                <span className="font-bold">"Data Controller": </span>
                The party that determines the purposes and means of processing
                Personal Data (the User).
              </li>
              <li>
                <span className="font-bold">"Data Processor": </span>
                The party that processes Personal Data on behalf of the Data
                Controller (NetworkX.ai).
              </li>
              <li>
                <span className="font-bold">"Personal Data":</span>
                Any information relating to an identified or identifiable
                natural person.
              </li>
              <li>
                <span className="font-bold">"Data Subject":</span>
                An individual whose Personal Data is processed under this
                Agreement.
              </li>
              <li>
                <span className="font-bold">"Processing":</span>
                Any operation or set of operations performed on Personal Data,
                including collection, storage, retrieval, use, transmission, or
                deletion.
              </li>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              2. Purpose of Data Processing
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai processes Personal Data solely for the purpose of
              providing its services, which include:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>Direct message (DM) automation.</li>
              <li>AI-generated content for posts and replies.</li>
              <li className="text-nowrap">
                Growth tools for following, unfollowing, liking, unliking
                ,reposting, and unreposting.
              </li>

              <p className="py-2">
                The User, as the Data Controller, determines the specific
                Personal Data that will be processed through the platform, and
                NetworkX.ai will process it only according to the User’s
                instructions. NetworkX.ai may also process additional data as
                necessary to provide the full range of services and for
                legitimate business purposes, such as analytics, support, or
                improving functionality. All such processing will be in
                compliance with applicable data protection laws and the terms of
                this Agreement.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              3. Categories of Data Processed
            </h2>
            <p className="text-white text-sm mb-4">
              In the course of providing its services, NetworkX.ai may process
              the following categories of Personal Data:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                Contact information (e.g., usernames, email addresses,
                passwords).
              </li>
              <li>Generated content (e.g., posts, replies).</li>
              <li>Engagement data (e.g., follows, likes, reposts, DMs).</li>
              <li>Usage data (e.g., activity on the NetworkX.ai platform).</li>
              <p className="py-2">
                Note: NetworkX.ai does not process sensitive personal data, such
                as racial or ethnic origin, political opinions, religious
                beliefs, genetic or biometric data, health-related information,
                or data related to criminal convictions and offenses.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              4. Duration of Processing
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai will process Personal Data for as long as the User
              continues to use the platform. Upon termination of the User’s use
              of the service, NetworkX.ai will retain and securely delete or
              anonymize the Personal Data according to applicable law, unless
              retention is required for compliance with legal obligations.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              3. Categories of Data Processed
            </h2>
            <p className="text-white text-sm mb-4">
              In the course of providing its services, NetworkX.ai may process
              the following categories of Personal Data:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                Contact information (e.g., usernames, email addresses,
                passwords).
              </li>
              <li>Generated content (e.g., posts, replies).</li>
              <li>Engagement data (e.g., follows, likes, reposts, DMs).</li>
              <li>Usage data (e.g., activity on the NetworkX.ai platform).</li>
              <p className="py-2">
                Note: NetworkX.ai does not process sensitive personal data, such
                as racial or ethnic origin, political opinions, religious
                beliefs, genetic or biometric data, health-related information,
                or data related to criminal convictions and offenses.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              4. Duration of Processing
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai will process Personal Data for as long as the User
              continues to use the platform. Upon termination of the User’s use
              of the service, NetworkX.ai will retain and securely delete or
              anonymize the Personal Data according to applicable law, unless
              retention is required for compliance with legal obligations.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              5. Obligations of NetworkX.ai (Processor)
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai, as the Data Processor, agrees to the following:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                Process Personal Data only on documented instructions from the
                Data Controller (the User), unless otherwise required by law.
              </li>
              <li>
                Ensure that personnel authorized to process Personal Data are
                subject to confidentiality obligations.
              </li>
              <li>
                Implement appropriate technical and organizational measures to
                safeguard the security of Personal Data, including preventing
                unauthorized access or disclosure.
              </li>
              <li>
                Assist the Data Controller in complying with its obligations
                under applicable data protection laws, including responding to
                Data Subject requests and reporting any data breaches.
              </li>
              <li>
                <strong className="font-bold">Sub-processors:</strong>
                NetworkX.ai may engage sub-processors to assist with data
                processing. A list of sub-processors is available upon request.
                NetworkX.ai ensures that sub-processors comply with the same
                data protection obligations under this Agreement.
              </li>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              6. Data Controller’s Responsibilities
            </h2>
            <p className="text-white text-sm mb-4">
              As the Data Controller, the User agrees to:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                Provide clear instructions regarding the collection, processing,
                and storage of Personal Data.
              </li>
              <li>
                Ensure the accuracy of Personal Data provided to NetworkX.ai.
              </li>
              <li>
                Comply with applicable data protection laws, including obtaining
                valid consent from Data Subjects where necessary.
              </li>
              <li>
                Ensure that Data Subjects are informed about how their Personal
                Data will be used, including through this Agreement and
                applicable privacy notices.
              </li>
              <li>
                Address any Data Subject requests, including rights of access,
                rectification, erasure, and objection.
              </li>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              7. Security Measures
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai employs robust security measures to protect Personal
              Data against unauthorized access, loss, destruction, or
              alteration. These measures include:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>Encryption of Personal Data in transit and at rest.</li>
              <li>Regular security assessments and audits.</li>
              <li>
                Access control systems to limit the access to data based on user
                roles and permissions.
              </li>
              <li>Incident response protocols in case of a data breach.</li>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              8. Data Breach Notification
            </h2>
            <p className="text-white text-sm mb-4">
              In the event of a data breach affecting Personal Data, NetworkX.ai
              will notify the User without undue delay. The notification will
              include:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>A description of the nature of the breach.</li>
              <li>The categories and number of affected Data Subjects.</li>
              <li>The likely consequences of the breach.</li>
              <li>Measures taken or proposed to mitigate the breach.</li>
              <p className="py-2">
                NetworkX.ai will cooperate with the User in handling the breach
                in accordance with applicable laws and regulations.
              </p>
            </ul>

            <h2 className="text-text text-xl font-semibold mb-3">
              9. Data Subject Rights
            </h2>
            <p className="text-white text-sm mb-4">
              The User retains responsibility for responding to Data Subject
              requests, such as rights of access, rectification, erasure,
              restriction, portability, and objection. NetworkX.ai will assist
              the User in fulfilling these requests, as reasonably necessary and
              consistent with applicable data protection laws.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              10. International Data Transfers
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai operates globally, and may transfer Personal Data to
              countries outside the European Economic Area (EEA) and other
              jurisdictions, subject to the conditions and safeguards required
              by applicable data protection laws. Specifically:
            </p>
            <ul className="list-disc list-inside text-white text-sm mb-4">
              <li>
                <strong className="font-bold">United States (U.S.): </strong>
                As a U.S.-based company, NetworkX.ai adheres to U.S. laws and
                regulations concerning data protection, including export control
                laws and restrictions imposed on specific countries subject to
                U.S. sanctions. Users in such countries may be restricted from
                accessing NetworkX.ai.
              </li>
              <li>
                <strong className="font-bold">European Union (EU):</strong>
                In compliance with the General Data Protection Regulation
                (GDPR), NetworkX.ai will ensure that appropriate safeguards are
                in place when transferring Personal Data from the EU to other
                countries. These safeguards include but are not limited to
                Standard Contractual Clauses (SCCs) and adequacy decisions made
                by the European Commission where applicable.
              </li>
              <li>
                <strong className="font-bold">Other Jurisdictions:</strong>
                NetworkX.ai will comply with local data protection laws,
                including the California Consumer Privacy Act (CCPA), Brazil’s
                General Data Protection Law (LGPD), and other applicable privacy
                regulations in other countries. Users are responsible for
                ensuring that their use of the platform complies with the
                relevant laws in their jurisdiction.
              </li>

              <p className="py-2">
                In all cases, NetworkX.ai ensures that appropriate technical,
                administrative, and legal safeguards are in place to protect
                Personal Data during such transfers, including where necessary,
                data encryption and anonymization.
              </p>
            </ul>
            <h2 className="text-text text-xl font-semibold mb-3">
              11. Termination of Services
            </h2>
            <p className="text-white text-sm mb-4">
              Upon termination of the services provided by NetworkX.ai,
              NetworkX.ai will delete or anonymize all Personal Data associated
              with the User’s account in accordance with applicable laws, unless
              retention is required for legal compliance.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              12. Audits and Inspections
            </h2>
            <p className="text-white text-sm mb-4">
              The Data Controller has the right to audit or request an
              independent audit of NetworkX.ai’s data processing activities to
              verify compliance with this Agreement. Such audits will be
              conducted with reasonable notice and at the User’s expense.
            </p>
            <h2 className="text-text text-xl font-semibold mb-3">
              13. Changes to this Agreement
            </h2>
            <p className="text-white text-sm mb-4">
              NetworkX.ai reserves the right to modify this Data Processing
              Agreement as necessary to comply with legal or regulatory
              requirements or as a result of changes in our business. Any
              updates to this Agreement will be posted on our website, and
              continued use of the platform constitutes acceptance of the
              updated terms.
            </p>

            <h2 className="text-text text-xl font-semibold mb-3">
              14. Contact Information
            </h2>
            <p className="text-white text-sm mb-4">
              If you have any questions or concerns regarding this Data
              Processing Agreement, or if you would like to exercise your
              rights, please contact us at:
            </p>
            <ul>
              <li className="text-white text-sm ">
                <strong className="font-bold ">Email:</strong>{" "}
                support@networkx.ai
              </li>
              <li className="text-white text-sm mb-4">
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

export default DPA;
