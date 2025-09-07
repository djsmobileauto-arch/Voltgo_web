export default function Services() {
  return (
    <div className="services-page">

      <div className="service-card">
        <h2>Emergency Rescue</h2>
        <p>
          Out of range or stuck roadside? We dispatch mobile DC fast charge ASAP. <br />
          20 kWh delivered (~25 miles of range). <br />
          Supported connectors: CCS1, CHAdeMO, NACS (Tesla). <br />
          ETA: ~45 min. Cold/peak/overnight surcharges may apply.
        </p>
      </div>

      <div className="service-card">
        <h2>On-Demand (Scheduled)</h2>
        <p>
          Book a one-time charge at home, work, or anywhere in our coverage area. <br />
          Options: 20 kWh – $129, 30 kWh – $159, 40 kWh – $189. <br />
          Supported connectors: CCS1, CHAdeMO, NACS (Tesla).
        </p>
      </div>

      <div className="service-card">
        <h2>Subscriptions</h2>
        <p>
          VoltGo Pass – $49/month (flexible) or VoltGo Pro from $119/month. <br />
          Save & get priority response. <br />
          Supported connectors: CCS1, CHAdeMO, NACS (Tesla).
        </p>
      </div>

    </div>
  );
}
