

export const Policies = () => {
  return (
    <div className="bg-white text-zinc-800 py-24 px-6 md:px-12 max-w-3xl mx-auto space-y-12 font-serif leading-relaxed tracking-wide">
      
      {/* Header */}
      <div className="space-y-4 border-b-2 border-zinc-900 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-zinc-900">
          Terms, Conditions & Copyright Policy
        </h1>
        <p className="text-xs text-zinc-500 tracking-wider uppercase">
          Effective Date: June 14, 2026
        </p>
      </div>

      {/* Introduction */}
      <section className="space-y-4 text-justify first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
        <p>
          Welcome to <strong>Novelty Works LTD</strong>. By engaging our services, visiting our website, or utilizing any bespoke software and technology solutions we provide, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
        </p>
      </section>

      {/* 1. Governing Law */}
      <section className="space-y-3 border-t border-zinc-100 pt-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900">
          1. Governing Jurisdiction & Law
        </h2>
        <p>
          These Terms and Conditions, alongside all service level agreements (SLAs) and contracts, shall be governed by, construed, and enforced in accordance with the laws of the <strong>Republic of Rwanda</strong>. Any legal disputes, claims, or controversies arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in the Republic of Rwanda.
        </p>
      </section>

      {/* 2. Intellectual Property & Copyright */}
      <section className="space-y-3 border-t border-zinc-100 pt-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900">
          2. Intellectual Property Rights & Copyright
        </h2>
        <p>
          All proprietary software, custom code, digital marketing strategies, infrastructure architecture, designs, text, graphics, and logos developed, authored, or implemented by Novelty Works LTD remain the intellectual property of Novelty Works LTD until fully paid for and explicitly transferred via a formal licensing or assignment agreement.
        </p>
        <p>
          Our intellectual property is protected under the Rwandan Law No. 031/2009 of 26/10/2009 on the Protection of Intellectual Property and international treaties. Unauthorized reproduction, distribution, reverse engineering, modification, or commercial exploitation of our proprietary assets or source code without explicit written consent from Novelty Works LTD will be strictly prosecuted to the full extent of the law.
        </p>
      </section>

      {/* 3. Client Responsibilities & Data Privacy */}
      <section className="space-y-3 border-t border-zinc-100 pt-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900">
          3. Client Data & Privacy
        </h2>
        <p>
          We respect the privacy of our clients and adhere strictly to data protection regulations within Rwanda, including Law No. 058/2021 of 13/10/2021 relating to the protection of personal data and privacy. Any sensitive operational data, credentials, or proprietary information provided to us for the purpose of cloud management, IT consultancy, or software integration will be handled with utmost confidentiality and used strictly for the agreed-upon project scope.
        </p>
      </section>

      {/* 4. Limitation of Liability */}
      <section className="space-y-3 border-t border-zinc-100 pt-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900">
          4. Limitation of Liability
        </h2>
        <p>
          Novelty Works LTD provides custom IT and digital solutions on an "as is" and "as available" basis. We shall not be held liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our delivered tools, third-party cloud outages, or unauthorized external breaches. Our total liability shall not exceed the total financial amount paid by the client for the specific service or module in question.
        </p>
      </section>

      {/* 5. Cancellations & Refunds */}
      <section className="space-y-3 border-t border-zinc-100 pt-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900">
          5. Project Cancellations & Payments
        </h2>
        <p>
          All custom software, development milestones, and consulting engagements require adherence to the agreed-upon invoicing and payment schedules. Deposits or upfront payments for software development and cloud setups are non-refundable once work has officially commenced. Cancellations must be submitted in writing, and clients will be billed for work completed up to the date of cancellation.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-zinc-50 p-8 rounded-sm border border-zinc-200 space-y-3 mt-12 text-center font-sans">
        <h3 className="font-bold text-zinc-900 uppercase tracking-wide text-sm">Questions or Clarifications?</h3>
        <p className="text-zinc-600 text-xs">
          If you have any questions regarding our copyright policies, terms of service, or legal alignment, please do not hesitate to reach out to us directly through our <a href="/reach-us" className="text-zinc-900 underline font-medium hover:text-zinc-600">Reach Us</a> page.
        </p>
      </section>

      {/* Home Link */}
      <div className="text-center pt-8 border-t border-zinc-100 font-sans">
        <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors tracking-widest uppercase">
          &larr; Return to Home
        </a>
      </div>

    </div>
  );
};