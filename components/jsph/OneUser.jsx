import React from 'react';

// Contact information component
const ContactInfo = ({ email, phone, website }) => (
  <span>
    📧<a href={`mailto:${email}`}>{email}</a> 📞<a href={`tel:${phone}`}>{phone}</a> 🌐<a href={`http://${website}`}>{website}</a>
  </span>
);

// Address information component
const AddressInfo = ({ street, suite, city, zipcode, lat, lng }) => (
  <span title={zipcode}>
    <a href={`https://maps.google.com/maps?ll=${lat},${lng}`}>{street}, {suite}, {city}</a>
  </span>
);

// Company information component
const CompanyInfo = ({ name, catchPhrase, bs }) => (
  <span>
    <b>{name}</b><br />
    {catchPhrase}<br />
    {bs}
  </span>
);

const OneUser = ({ user }) => {
  // Destructure user object
  const {
    id,
    name,
    username,
    email,
    address: { street, suite, city, zipcode, geo: { lat, lng } },
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = user;

  return (
    <fieldset className="user-card">
      <legend>#{id} {username}</legend>
      <h3>{name}</h3>
      <ContactInfo email={email} phone={phone} website={website} />
      <AddressInfo street={street} suite={suite} city={city} zipcode={zipcode} lat={lat} lng={lng} />
      <CompanyInfo name={companyName} catchPhrase={catchPhrase} bs={bs} />
    </fieldset>
  );
};

export default OneUser;
