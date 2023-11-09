import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Country/Region');
  const navigate = useNavigate();
  const countries = [ "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini ",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia (formerly Macedonia)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"];

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleClose = () => {
    navigate('/'); 
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  }

  const handleSignupClick = async () => {
    const apiUrl = 'https://academics.newtonschool.co/api/v1/user/signup';

    const requestBody = {
      name: name,
      email: email,
      password: password,
      appType: 'music'
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'projectID': 'yourProjectID' // Replace with your actual project ID
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        const token = data.token;

        if (token) {
          localStorage.setItem('token', token);
          navigate('/browse');
          console.log('Token received:', token); // Add this console log
        } else {
          console.error('No token received from the API');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: "700px",
      boxShadow: '0px 0px 10px white',
      height: "600px",
      margin: "0 auto",
      fontFamily: "Arial",
      marginTop: '53px',
      position: 'fixed',
      zIndex: 1000,
      background: 'rgb(255, 255, 255)',
      color:"rgb(29, 29, 31)",
      border: '1px solid black',
      top: '40%',
      left: '50%',
      borderRadius: '10px',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
    }}>
     <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '20px',
          left: '30px',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '5px',
          color: 'black',
          transition:'background .1s linear',
          backgroundColor: 'lightgray',
          borderRadius: '50%', 
          zIndex: 1,
        }}
      >
        X 
      </button>
      <h1 style={{ marginBottom: '20px' }}>Create an Account</h1>
      <label style={{ marginBottom: '20px' }}>
        <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Full Name"
          style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '9px' }} />
      </label>
      <label style={{ marginBottom: '20px' }}>
        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email"
          style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '9px' }} />
      </label>
      <label style={{ marginBottom: '20px' }}>
        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password"
          style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
      </label>
      <label style={{ marginBottom: '20px' }}>
        <select style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} onChange={handleCountryChange}>
          <option value="Country/Region" disabled selected>{selectedCountry}</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </label>

      <Link to="/signin" style={{ marginBottom: '20px' }}>Already have an account? Sign In</Link>
      <button onClick={handleSignupClick} style={{ backgroundColor: 'darkpink', width: '300px', height: "45px", borderRadius: '9px', fontSize: '18px' }}>Sign Up</button>
    </div>
  );
}

export default Signup;