import React from 'react';

const ContactInfo = ({ email, phone, website }) => (
  <>
    <td>📧<a href={`mailto:${email}`}>{email}</a></td>
    <td>📞<a href={`tel:${phone}`}>{phone}</a></td>
    <td>🌐<a href={`http://${website}`}>{website}</a></td>
  </>
);

const AddressInfo = ({ street, suite, city, zipcode, lat, lng }) => (
  <td>
    <a href={`https://maps.google.com/maps?ll=${lat},${lng}`}>
      {street}, {suite}, {city}
    </a>
  </td>
);

const CompanyInfo = ({ name, catchPhrase, bs }) => (
  <td>
    <b>{name}</b><br />
    {catchPhrase}<br />
    {bs}
  </td>
);

const OneUser = ({ id, user, onDelete }) => { // Pass onDelete as a prop
  const {
    username,
    name,
    email,
    phone,
    website,
    address: { street, suite, city, zipcode, geo: { lat, lng } },
    company: { name: companyName, catchPhrase, bs },
  } = user;

  return (
    <tr>
      <td>ID: {id}</td>
      <td>Username: {username}</td>
      <td>Name: {name}</td>
      <ContactInfo email={email} phone={phone} website={website} />
      <AddressInfo street={street} suite={suite} city={city} zipcode={zipcode} lat={lat} lng={lng} />
      <CompanyInfo name={companyName} catchPhrase={catchPhrase} bs={bs} />
      <td>
        <button onClick={() => onDelete(id)}>X</button>
      </td>
    </tr>
  );
};

export default OneUser;
