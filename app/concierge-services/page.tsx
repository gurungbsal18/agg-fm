import PageHeader from "@/components/PageHeader";
import ConciergeServiceTabView from "@/components/serviceTabView/ConciergeServiceTabView";
import React from "react";

export default function ConciergeServicesPage() {
  return (
    <div>
      <PageHeader
        title="Concierge Services"
        image="/images/service-conciergerie.webp"
      />

      <div className="container animation-block">
        <h4 className="content-title">Concierge Services</h4>
        <div className="content">
          <p>
            At AGGFM, we provide exceptional concierge services in Malaysia,
            ensuring a warm welcome and professional assistance for residents
            and guests. Our concierges are the first point of contact, and we
            pride ourselves on offering unmatched customer service, security,
            and convenience to elevate your living experience.
          </p>
          <p>
            Our dedicated concierge professionals are meticulously selected for
            their interpersonal skills, proactive approach, and attention to
            detail. Whether greeting residents, managing deliveries, or
            maintaining building security, our team is here to make your life
            easier.
          </p>
        </div>

        <ConciergeServiceTabView />
      </div>
    </div>
  );
}
