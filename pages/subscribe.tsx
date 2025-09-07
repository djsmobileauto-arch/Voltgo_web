export default function Subscribe() {
  return (
    <div className="subscribe-page">
      <h2>VoltGo Subscriptions</h2>
      <p>
        Tell us about your vehicle and connector — we’ll follow up ASAP.
      </p>

      <form className="subscribe-form">
        <label>
          Full Name:
          <input type="text" name="fullname" required />
        </label>

        <label>
          Email Address:
          <input type="email" name="email" required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" required />
        </label>

        <label>
          City / Area:
          <input type="text" name="city" required />
        </label>

        <label>
          Vehicle Make & Model:
          <input type="text" name="vehicle" />
        </label>

        <label>
          Vehicle Color:
          <input type="text" name="color" />
        </label>

        <label>
          Connector Type:
          <select name="connector" required>
            <option value="CCS1">CCS1</option>
            <option value="CHAdeMO">CHAdeMO</option>
            <option value="NACS">NACS (Tesla)</option>
          </select>
        </label>

        <label>
          Subscription Plan:
          <select name="plan" required>
            <option value="pass">VoltGo Pass – $49/month</option>
            <option value="pro">VoltGo Pro – from $119/month</option>
          </select>
        </label>

        <label>
          Notes (parking spot access, preferred times):
          <textarea name="notes"></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
