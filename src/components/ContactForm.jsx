import { useState } from "react";
import Input from "./ui/Input";
import Message from "./ui/Message";
import Radio from "./ui/Radio";
import Checkbox from "./ui/Checkbox";
import Button from "./ui/Button";
import Toast from "./ui/Toast";

const initialFields = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
};

const initialErrors = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: "",
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const ContactForm = () => {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState(initialErrors);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFields((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleQueryType = (value) => {
    setFields((prev) => ({ ...prev, queryType: value }));
  };

  const validate = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!fields.firstName.trim()) {
      newErrors.firstName = "This field is required";
      valid = false;
    }

    if (!fields.lastName.trim()) {
      newErrors.lastName = "This field is required";
      valid = false;
    }

    if (!fields.email.trim()) {
      newErrors.email = "This field is required";
      valid = false;
    } else if (!isValidEmail(fields.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!fields.queryType) {
      newErrors.queryType = "Please select a query type";
      valid = false;
    }

    if (!fields.message.trim()) {
      newErrors.message = "This field is required";
      valid = false;
    }

    if (!fields.consent) {
      newErrors.consent =
        "To submit this form, please consent to being contacted";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFields(initialFields);
    setErrors(initialErrors);
    setToastVisible(true);
  };

  return (
    <>
      <Toast visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl font-bold text-grey-900 mb-8">Contact Us</h1>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6"
          >
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                id="firstName"
                label="First Name"
                required
                value={fields.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                id="lastName"
                label="Last Name"
                required
                value={fields.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>

            {/* Email Address */}
            <Input
              id="email"
              label="Email Address"
              type="email"
              required
              value={fields.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Query Type */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-base text-grey-900 mb-1">
                Query Type
                <span className="ml-3 text-green-600" aria-hidden="true">
                  *
                </span>
              </legend>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Radio
                  id="generalEnquiry"
                  label="General Enquiry"
                  name="queryType"
                  value="general"
                  checked={fields.queryType === "general"}
                  onChange={() => handleQueryType("general")}
                />
                <Radio
                  id="supportRequest"
                  label="Support Request"
                  name="queryType"
                  value="support"
                  checked={fields.queryType === "support"}
                  onChange={() => handleQueryType("support")}
                />
              </div>

              {errors.queryType && (
                <p role="alert" className="text-base text-red-error">
                  {errors.queryType}
                </p>
              )}
            </fieldset>

            {/* Message */}
            <Message
              id="message"
              label="Message"
              required
              rows={5}
              value={fields.message}
              onChange={handleChange}
              error={errors.message}
            />

            {/* Consent */}
            <Checkbox
              id="consent"
              label="I consent to being contacted by the team"
              checked={fields.consent}
              onChange={handleChange}
              error={errors.consent}
            />

            {/* Submit */}
            <Button />
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactForm;
