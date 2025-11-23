import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Initialize EmailJS with your public key
emailjs.init('4j129vXVe6-chP89x');

const theme = {
  bg: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
  border: "rgba(255,255,255,0.18)",
  accent: "#3b82f6",
  text: "#fff",
  textSecondary: "#b3b3b3",
};

const countries = [
  { code: "+93", name: "Afghanistan" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1‑684", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+1‑264", name: "Anguilla" },
  { code: "+1‑268", name: "Antigua and Barbuda" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+297", name: "Aruba" },
  { code: "+247", name: "Ascension Island" },
  { code: "+61", name: "Australia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+1‑242", name: "Bahamas" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+1‑246", name: "Barbados" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+501", name: "Belize" },
  { code: "+229", name: "Benin" },
  { code: "+1‑441", name: "Bermuda" },
  { code: "+975", name: "Bhutan" },
  { code: "+591", name: "Bolivia" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+267", name: "Botswana" },
  { code: "+55", name: "Brazil" },
  { code: "+673", name: "Brunei" },
  { code: "+359", name: "Bulgaria" },
  { code: "+226", name: "Burkina Faso" },
  { code: "+257", name: "Burundi" },
  { code: "+855", name: "Cambodia" },
  { code: "+237", name: "Cameroon" },
  { code: "+1", name: "Canada" },
  { code: "+238", name: "Cabo Verde" },
  { code: "+236", name: "Central African Republic" },
  { code: "+235", name: "Chad" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+57", name: "Colombia" },
  { code: "+269", name: "Comoros" },
  { code: "+242", name: "Congo – Brazzaville" },
  { code: "+243", name: "Congo – Kinshasa" },
  { code: "+506", name: "Costa Rica" },
  { code: "+385", name: "Croatia" },
  { code: "+53", name: "Cuba" },
  { code: "+357", name: "Cyprus" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+253", name: "Djibouti" },
  { code: "+1‑767", name: "Dominica" },
  { code: "+1‑809", name: "Dominican Republic" },
  { code: "+1‑829", name: "Dominican Republic (alternate)" },
  { code: "+593", name: "Ecuador" },
  { code: "+20", name: "Egypt" },
  { code: "+503", name: "El Salvador" },
  { code: "+240", name: "Equatorial Guinea" },
  { code: "+291", name: "Eritrea" },
  { code: "+372", name: "Estonia" },
  { code: "+251", name: "Ethiopia" },
  { code: "+1‑664", name: "Montserrat" },
  { code: "+298", name: "Faroe Islands" },
  { code: "+679", name: "Fiji" },
  { code: "+358", name: "Finland" },
  { code: "+33", name: "France" },
  { code: "+241", name: "Gabon" },
  { code: "+220", name: "Gambia" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+233", name: "Ghana" },
  { code: "+350", name: "Gibraltar" },
  { code: "+30", name: "Greece" },
  { code: "+1‑473", name: "Grenada" },
  { code: "+502", name: "Guatemala" },
  { code: "+224", name: "Guinea" },
  { code: "+245", name: "Guinea-Bissau" },
  { code: "+592", name: "Guyana" },
  { code: "+509", name: "Haiti" },
  { code: "+504", name: "Honduras" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" },
  { code: "+62", name: "Indonesia" },
  { code: "+98", name: "Iran" },
  { code: "+964", name: "Iraq" },
  { code: "+353", name: "Ireland" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+1‑876", name: "Jamaica" },
  { code: "+81", name: "Japan" },
  { code: "+962", name: "Jordan" },
  { code: "+7", name: "Kazakhstan / Russia" },
  { code: "+254", name: "Kenya" },
  { code: "+686", name: "Kiribati" },
  { code: "+965", name: "Kuwait" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+856", name: "Laos" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+266", name: "Lesotho" },
  { code: "+231", name: "Liberia" },
  { code: "+218", name: "Libya" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+853", name: "Macau" },
  { code: "+389", name: "North Macedonia" },
  { code: "+261", name: "Madagascar" },
  { code: "+265", name: "Malawi" },
  { code: "+60", name: "Malaysia" },
  { code: "+960", name: "Maldives" },
  { code: "+223", name: "Mali" },
  { code: "+356", name: "Malta" },
  { code: "+692", name: "Marshall Islands" },
  { code: "+222", name: "Mauritania" },
  { code: "+230", name: "Mauritius" },
  { code: "+52", name: "Mexico" },
  { code: "+691", name: "Micronesia" },
  { code: "+373", name: "Moldova" },
  { code: "+377", name: "Monaco" },
  { code: "+976", name: "Mongolia" },
  { code: "+382", name: "Montenegro" },
  { code: "+1‑664", name: "Montserrat" },
  { code: "+212", name: "Morocco" },
  { code: "+258", name: "Mozambique" },
  { code: "+95", name: "Myanmar (Burma)" },
  { code: "+264", name: "Namibia" },
  { code: "+674", name: "Nauru" },
  { code: "+977", name: "Nepal" },
  { code: "+31", name: "Netherlands" },
  { code: "+687", name: "New Caledonia" },
  { code: "+64", name: "New Zealand" },
  { code: "+505", name: "Nicaragua" },
  { code: "+227", name: "Niger" },
  { code: "+234", name: "Nigeria" },
  { code: "+683", name: "Niue" },
  { code: "+672", name: "Norfolk Island" },
  { code: "+850", name: "North Korea" },
  { code: "+47", name: "Norway" },
  { code: "+968", name: "Oman" },
  { code: "+92", name: "Pakistan" },
  { code: "+680", name: "Palau" },
  { code: "+970", name: "Palestine" },
  { code: "+507", name: "Panama" },
  { code: "+675", name: "Papua New Guinea" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Peru" },
  { code: "+63", name: "Philippines" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+1‑787", name: "Puerto Rico" },
  { code: "+974", name: "Qatar" },
  { code: "+262", name: "Réunion" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russia" },
  { code: "+250", name: "Rwanda" },
  { code: "+590", name: "Saint Barthélemy" },
  { code: "+290", name: "Saint Helena" },
  { code: "+1‑869", name: "Saint Kitts and Nevis" },
  { code: "+1‑758", name: "Saint Lucia" },
  { code: "+508", name: "Saint Pierre and Miquelon" },
  { code: "+1‑784", name: "Saint Vincent and the Grenadines" },
  { code: "+685", name: "Samoa" },
  { code: "+378", name: "San Marino" },
  { code: "+239", name: "Sao Tome and Principe" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+221", name: "Senegal" },
  { code: "+381", name: "Serbia" },
  { code: "+248", name: "Seychelles" },
  { code: "+232", name: "Sierra Leone" },
  { code: "+65", name: "Singapore" },
  { code: "+1‑664", name: "Sint Maarten" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+677", name: "Solomon Islands" },
  { code: "+252", name: "Somalia" },
  { code: "+27", name: "South Africa" },
  { code: "+211", name: "South Sudan" },
  { code: "+82", name: "South Korea" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+249", name: "Sudan" },
  { code: "+597", name: "Suriname" },
  { code: "+268", name: "Eswatini (Swaziland)" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+963", name: "Syria" },
  { code: "+886", name: "Taiwan" },
  { code: "+992", name: "Tajikistan" },
  { code: "+255", name: "Tanzania" },
  { code: "+66", name: "Thailand" },
  { code: "+670", name: "Timor-Leste" },
  { code: "+228", name: "Togo" },
  { code: "+690", name: "Tokelau" },
  { code: "+676", name: "Tonga" },
  { code: "+1‑868", name: "Trinidad and Tobago" },
  { code: "+216", name: "Tunisia" },
  { code: "+90", name: "Turkey" },
  { code: "+993", name: "Turkmenistan" },
  { code: "+1‑649", name: "Turks and Caicos Islands" },
  { code: "+688", name: "Tuvalu" },
  { code: "+256", name: "Uganda" },
  { code: "+380", name: "Ukraine" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States" },
  { code: "+598", name: "Uruguay" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+678", name: "Vanuatu" },
  { code: "+379", name: "Vatican City" },
  { code: "+58", name: "Venezuela" },
  { code: "+84", name: "Vietnam" },
  { code: "+681", name: "Wallis and Futuna" },
  { code: "+685", name: "Samoa" }, // (duplicated but territory context)
  { code: "+963", name: "Syria" },
  { code: "+967", name: "Yemen" },
  { code: "+260", name: "Zambia" },
  { code: "+263", name: "Zimbabwe" },
];

const socialLinks = [
  { icon: FaLinkedin, url: "https://linkedin.com/in/ravishjain988" },
  { icon: FaGithub, url: "https://github.com/ravishjain988" },
  { icon: FaFacebook, url: "https://facebook.com/ravishjain988" },
  { icon: FaInstagram, url: "https://instagram.com/ravishjain988" },
  { icon: SiLeetcode, url: "https://leetcode.com/ravishjain988" },
];

const FloatingLabelInput = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "32px" }}>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={e => setFocused(!!e.target.value)}
        style={{
          width: "100%",
          padding: "14px 0 8px 0",
          fontSize: "1rem",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${theme.border}`,
          color: theme.text,
          outline: "none",
          transition: "border-color 0.2s",
        }}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          left: 0,
          top: focused || value ? "-18px" : "12px",
          fontSize: focused || value ? "0.92rem" : "1rem",
          color: theme.textSecondary,
          fontWeight: 500,
          pointerEvents: "none",
          transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
          background: "transparent",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const FloatingLabelTextarea = ({
  label,
  value,
  onChange,
  name,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "32px" }}>
      <textarea
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={e => setFocused(!!e.target.value)}
        style={{
          width: "100%",
          padding: "14px 0 8px 0",
          fontSize: "1rem",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${theme.border}`,
          color: theme.text,
          outline: "none",
          minHeight: "90px",
          resize: "vertical",
        }}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          left: 0,
          top: focused || value ? "-18px" : "12px",
          fontSize: focused || value ? "0.92rem" : "1rem",
          color: theme.textSecondary,
          fontWeight: 500,
          pointerEvents: "none",
          transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
          background: "transparent",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const CountryDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  // Improved filter: trims and lowercases both search and country name/code
  const normalizedSearch = search.trim().toLowerCase();
  const filteredCountries = countries.filter(
    c =>
      c.name.toLowerCase().includes(normalizedSearch) ||
      c.code.replace(/[^+\d]/g, '').includes(normalizedSearch)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", marginBottom: "32px", maxWidth: "250px", width: "220px" }}
    >
      <div
        style={{
          borderBottom: `2px solid ${theme.border}`,
          background: "transparent",
          cursor: "pointer",
          padding: "12px 0",
          color: theme.text,
          fontSize: "1.08rem",
          minHeight: "44px",
          width: "100%",
          textAlign: "left",
          borderRadius: "8px 8px 0 0",
          boxSizing: "border-box",
        }}
        onClick={() => setOpen(!open)}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {value.code}
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#181c20",
            zIndex: 10,
            maxHeight: "260px",
            minWidth: "220px",
            width: "100%",
            overflowY: "auto",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
            border: `1px solid ${theme.border}`,
          }}
          className="country-dropdown-scroll"
        >
          <input
            type="text"
            placeholder="Search country..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "none",
              borderBottom: `1px solid ${theme.border}`,
              background: "#23272b",
              color: theme.text,
              fontSize: "1rem",
              outline: "none",
              marginBottom: "4px",
              borderRadius: "8px 8px 0 0"
            }}
            autoFocus
          />
          {filteredCountries.length === 0 ? (
            <div style={{ padding: "12px 16px", color: theme.textSecondary }}>
              No countries found
            </div>
          ) : (
            filteredCountries.map((c) => (
              <div
                key={c.code + c.name}
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  color: theme.text,
                  background: value.code === c.code ? "#23272b" : "transparent",
                  fontSize: "1rem",
                  borderBottom: `1px solid ${theme.border}`,
                  transition: "background 0.18s",
                }}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                  setSearch("");
                }}
                onMouseDown={e => e.preventDefault()}
                role="option"
                aria-selected={value.code === c.code}
              >
                {c.name} {c.code}
              </div>
            ))
          )}
        </div>
      )}
      <style>{`
        .country-dropdown-scroll::-webkit-scrollbar {
          width: 8px;
          background: #23272b;
          border-radius: 8px;
        }
        .country-dropdown-scroll::-webkit-scrollbar-thumb {
          background: ${theme.border};
          border-radius: 8px;
        }
        .country-dropdown-scroll::-webkit-scrollbar-thumb:hover {
          background: ${theme.accent};
        }
        .country-dropdown-scroll {
          scrollbar-width: thin;
          scrollbar-color: ${theme.border} #23272b;
        }
      `}</style>
    </div>
  );
};

const Contact = () => {
  // Set default country to United States
  const defaultCountry = countries.find(c => c.name === "United States") || countries[0];
  const [form, setForm] = useState({ name: '', email: '', country: defaultCountry, phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  // Validation functions
  const validateName = name => /^[A-Za-z\s]+$/.test(name);
  const validatePhone = phone => /^[0-9]{0,15}$/.test(phone); // allow empty, max 15 digits
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Prevent invalid characters on input
  const handleChange = e => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = newValue.replace(/[^A-Za-z\s]/g, "");
    }
    if (name === "phone") {
      newValue = newValue.replace(/[^0-9]/g, "");
    }
    if (name === "email") {
      // Only allow valid email characters
      newValue = newValue.replace(/[^a-zA-Z0-9@._\-]/g, "");
    }

    setForm({ ...form, [name]: newValue });

    // Validate on change
    let newErrors = { ...errors };
    if (name === "name") {
      newErrors.name = validateName(newValue) ? "" : "";
    }
    if (name === "phone") {
      newErrors.phone = validatePhone(newValue) ? "" : "";
    }
    if (name === "email") {
      newErrors.email = validateEmail(newValue) ? "" : "";
    }
    setErrors(newErrors);
  };

  const handleCountryChange = country => {
    setForm({ ...form, country });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    // Final validation before submit
    const nameValid = validateName(form.name);
    const phoneValid = validatePhone(form.phone);
    const emailValid = validateEmail(form.email);

    setErrors({
      name: nameValid ? "" : "Only letters allowed",
      phone: phoneValid ? "" : "Only numbers allowed (7-15 digits)",
      email: emailValid ? "" : "Invalid email format"
    });

    if (!nameValid || !phoneValid || !emailValid) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        'service_s67phu5',
        'template_kj01tzn',
        formRef.current,
        '4j129vXVe6-chP89x'
      );
      setSubmitStatus('success');
      setForm({ name: '', email: '', country: defaultCountry, phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .contact-section {
            padding: 60px 32px !important; /* Proper spacing for iPad Pro from all sides */
          }
          .contact-container {
            gap: 48px !important;
            padding: 0 !important;
          }
          .contact-heading {
            font-size: 2.2rem !important; /* Reduced for iPad Air/Pro */
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 0 !important;
          }
          .contact-container {
            flex-direction: column !important;
            gap: 48px !important;
            padding: 0 24px !important;
          }
          .contact-left {
            padding-right: 0 !important;
            min-width: auto !important;
          }
          .contact-right {
            padding-left: 0 !important;
            min-width: auto !important;
          }
          .contact-heading {
            font-size: 2.4rem !important;
            margin-bottom: 28px !important;
          }
          .social-links {
            gap: 18px !important;
            margin-top: 32px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 40px 0 !important;
          }
          .contact-container {
            padding: 0 20px !important;
          }
          .contact-heading {
            font-size: 2rem !important;
            margin-bottom: 24px !important;
          }
          .info-title {
            font-size: 1rem !important;
          }
          .info-text {
            font-size: 0.95rem !important;
          }
          .social-links {
            gap: 16px !important;
            margin-top: 28px !important;
          }
          .social-icon {
            font-size: 1.3rem !important;
            padding: 12px !important;
          }
          .submit-button {
            padding: 12px 22px !important;
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 360px) {
          .contact-heading {
            font-size: 1.75rem !important;
          }
          .social-links {
            gap: 12px !important;
          }
          .social-icon {
            font-size: 1.2rem !important;
            padding: 10px !important;
          }
        }
      `}</style>
      <section
        id="contact"
        className="contact-section"
        style={{
          background: theme.bg,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 0",
        }}
      >
        <div
          className="contact-container"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            gap: "64px",
          }}
        >
          {/* LEFT SIDE */}
          <div
            className="contact-left"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "340px",
              paddingRight: "32px",
            }}
          >
            <h1
              className="contact-heading"
              style={{
                fontSize: "3.2rem",
                fontWeight: 700,
                color: theme.text,
                marginBottom: "38px",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
            >
              Let's build what's next, together.
            </h1>
            <div style={{ marginBottom: "32px" }}>
              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Location
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                Based in India · Working Worldwide
              </div>

              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Availability
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                Open for freelance & long-term projects
              </div>

              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Email
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                ravishjain988@gmail.com
              </div>

              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Phone
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                +91 9316572829
              </div>

              <div 
                className="social-links"
                style={{ 
                  display: "flex",
                  justifyContent: "center",
                  gap: "22px",
                  alignItems: "center",
                  marginTop: "40px"
                }}
              >
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                      color: theme.textSecondary,
                      fontSize: "1.5rem",
                      padding: "14px",
                      borderRadius: "10px",
                      background: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(180deg, #222222 0%, #3a3a3a 100%)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.color = theme.textSecondary;
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            ref={formRef}
            className="contact-right"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "340px",
              paddingLeft: "32px",
              position: "relative",
              minHeight: "340px",
            }}
            onSubmit={handleSubmit}
            noValidate
          >
            <FloatingLabelInput
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <div style={{ color: "red", fontSize: "0.92rem", marginBottom: "8px" }}>{errors.name}</div>
            )}
            <FloatingLabelInput
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div style={{ color: "red", fontSize: "0.92rem", marginBottom: "8px" }}>{errors.email}</div>
            )}
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
              <CountryDropdown
                value={form.country}
                onChange={handleCountryChange}
              />
              <div style={{ flex: 1 }}>
                <FloatingLabelInput
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {errors.phone && (
              <div style={{ color: "red", fontSize: "0.92rem", marginBottom: "8px" }}>{errors.phone}</div>
            )}
            <FloatingLabelTextarea
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="submit-button"
              style={{
                padding: "10px 26px",
                background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
                letterSpacing: "0.2px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
                marginTop: "18px",
                opacity: loading ? 0.7 : 1,
              }}
              disabled={loading}
            >
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg className="animate-spin" style={{ height: "20px", width: "20px", marginRight: "8px" }} viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
            {submitStatus === 'success' && (
              <div style={{ color: "green", marginTop: "18px", textAlign: "center" }}>
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div style={{ color: "red", marginTop: "18px", textAlign: "center" }}>
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;