import XpaddingWrapper from "@/components/XpaddingWrapper";
import React from "react";

const Privacy:React.FC = () => {

    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <XpaddingWrapper className="pb-24">

    <div className="p-6 space-y-6 text-base leading-relaxed">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p>
        This Privacy Policy applies to OM Enterprises and all its subsidiaries and/or branch offices in India. It outlines the practices and policies applicable to OM Enterprises (including its employees, interns, contractors, consultants, clients, customers, or any other party directly or indirectly engaged for business purposes or otherwise) in handling Personal Information, including Sensitive Personal Data or Information, lawfully collected by OM Enterprises.
      </p>
      <p>
        OM Enterprises values your right to privacy and is committed to protecting your personal data. We ensure your information is handled securely, in line with applicable laws and our internal policies. Technical and organizational measures are maintained to guard against unauthorized processing, loss, or destruction of data.
      </p>

      <h2 className="text-xl font-semibold">General Definitions</h2>
      <ul className="list-disc list-inside">
        <li><strong>You / Your:</strong> Refers to any natural person (including employees of OM Enterprises) providing any information described in Appendix 1.</li>
        <li><strong>Act:</strong> Refers to the Information Technology Act, 2000 and its amendments.</li>
        <li><strong>Information:</strong> Includes Personal Information and Sensitive Personal Data or Information collected by OM Enterprises.</li>
        <li><strong>Personal Information (PI):</strong> As defined under Rule 2(i) of the IT Rules, 2011. See Appendix 1.</li>
        <li><strong>Rules:</strong> The IT (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011.</li>
        <li><strong>Registered User:</strong> A user whose registration is accepted by OM Enterprises.</li>
        <li><strong>Sensitive Personal Data and Information (SPDI):</strong> Defined under Rule 3 of the IT Rules, 2011. See Schedule 1.</li>
      </ul>

      <h2 className="text-xl font-semibold">Collection of Information</h2>
      <p>
        You may access OM Enterprises' website without providing PI/SPDI. However, certain services require registration and provision of data, including via email, phone, post, or in-person.
      </p>
      <p>
      We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and marketing communications (with your consent) via different channels, including but not limited to SMS, Email, RCS, WhatsApp, and Voice."
      </p>
      <p>
        You may opt out of providing data at any time by contacting <a className="text-blue-600" href="mailto:info@omenterprisesgroup.in">info@omenterprisesgroup.in</a> or visiting our website.
      </p>

      <h2 className="text-xl font-semibold">Use of Information Collected</h2>
      <p>
        Collected information is used for purposes communicated at the time of collection. OM Enterprises will not use your data for unrelated purposes without your consent, except where legally required or in emergencies.
      </p>

      <h2 className="text-xl font-semibold">Sharing of Information</h2>
      <ul className="list-disc list-inside">
        <li>Shared based on your consent or as required by law.</li>
        <li>With employees or consultants under NDA.</li>
        <li>With government authorities when required by law.</li>
        <li>During legal proceedings upon valid request.</li>
      </ul>

      <h2 className="text-xl font-semibold">Security of Information</h2>
      <p>
        OM Enterprises uses stringent security measures to protect PI/SPDI, allowing access only to authorized personnel on a need-to-know basis. We regularly audit and update security policies. PI/SPDI deemed inaccurate can be corrected on request.
      </p>

      <h2 className="text-xl font-semibold">Employee/Individual Obligations</h2>
      <p>
        Employees and relevant individuals must:
      </p>
      <ul className="list-disc list-inside">
        <li>Prevent unauthorized data access.</li>
        <li>Follow OM Enterprises’ security policies.</li>
        <li>Log and report any breaches.</li>
        <li>Participate in privacy and security trainings.</li>
      </ul>
      <p>
        Violations may result in disciplinary actions including termination.
      </p>

      <h2 className="text-xl font-semibold">Retention & Revocation of Information</h2>
      <p>
        OM Enterprises retains personal data only as long as needed for business or legal reasons. Once no longer required, it is securely destroyed or anonymized.
      </p>

      <h2 className="text-xl font-semibold">Employee Rights</h2>
      <ul className="list-disc list-inside">
        <li>Request access, correction, or erasure of data.</li>
        <li>Object to or restrict data processing.</li>
        <li>Request data portability.</li>
      </ul>

      <h2 className="text-xl font-semibold">Appendix 1: Rule 2(i) - Personal Information</h2>
      <p>
        Personal information is any data related to a natural person that can directly or indirectly identify them.
      </p>

      <h2 className="text-xl font-semibold">Rule 3 - Sensitive Personal Data</h2>
      <ul className="list-disc list-inside">
        <li>Password</li>
        <li>Financial details</li>
        <li>Health condition</li>
        <li>Sexual orientation</li>
        <li>Medical history</li>
        <li>Biometric data</li>
        <li>Any data shared for service provision or received lawfully</li>
      </ul>

      <h2 className="text-xl font-semibold">Registered Users Information</h2>
      <ul className="list-disc list-inside">
        <li>Name, DOB, Address, Email ID, Gender, Phone</li>
        <li>Transaction details (e.g., mobile, email, message text)</li>
      </ul>

      <h2 className="text-xl font-semibold">Appendix 2: Employment Information</h2>
      <ul className="list-disc list-inside">
        <li>Personal Details (e.g., Name, DOB, Contact Info, Passport)</li>
        <li>Employment History & References</li>
        <li>Professional Qualifications</li>
        <li>Background Information (legal, travel, relatives)</li>
        <li>Signed documents (compliance forms, NDAs, etc.)</li>
      </ul>
    </div>
    </XpaddingWrapper>
  );
};

export default Privacy;