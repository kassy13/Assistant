import React from "react";
import {Link, Outlet} from "react-router-dom"; // Import for routing

const Policy = () => {
  const policyLinks = [
    {
      title: "Privacy Policy",
      links: "/dashboard/settings/policy/privacy-policy",
    },
    {
      title: "Terms of Service",
      links: "/dashboard/settings/policy/terms-of-service",
    },
    {
      title: "Fulfilment Policy",
      links: "/dashboard/settings/policy/fulfilment-policy",
    },
    {
      title: "Fair Use Policy",
      links: "/dashboard/settings/policy/fair-use-policy",
    },
    {
      title: "Data Processing Agreement",
      links: "/dashboard/settings/policy/data-processing-agreement",
    },
    {
      title: "Affiliate Policy",
      links: "/dashboard/settings/policy/affiliate-policies",
    },
  ];

  return (
    <section className="lg:px-4 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <h2 className="text-center text-2xl font-bold">Policy Pages</h2>
      <p className="text-center text-sm py-2 pb-5 ">
        This section explains how we handle your data, protect your privacy, and
        outline the rules for using our services. Each page details our
        commitment to keeping your information secure and ensuring a safe,
        transparent experience with NetworkX.ai.
      </p>
      <ul className="pt-3">
        {policyLinks.map((policy) => (
          <li
            key={policy.title}
            className="list-disc list-inside pb-12 underline"
          >
            <Link to={policy.links} className="pb-2">
              {policy.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul>
        <li>
          <Link to="/dashboard/settings/policy/affiliate-policies">
            affiliate policy
          </Link>
        </li>
        Add the Outlet component here to render nested routes
        <Outlet />
      </ul> */}
    </section>
  );
};

export default Policy;
