import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const emailJsConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
        | string
        | undefined,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
    }),
    [],
  );

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error on change
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!/^[A-Za-z\s]{2,50}$/.test(form.name)) {
      newErrors.name = "Enter a valid name (only letters)";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const openMailClientFallback = () => {
    const subject = encodeURIComponent(`Contact Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}`,
    );
    window.location.href = `mailto:kishorefeoffice@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      if (
        emailJsConfig.serviceId &&
        emailJsConfig.templateId &&
        emailJsConfig.publicKey
      ) {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
            to_email: "kishorefeoffice@gmail.com",
            from_name: form.name,
            from_email: form.email,
            phone_number: form.phone,
            message: form.message,
          },
          { publicKey: emailJsConfig.publicKey },
        );
      } else {
        openMailClientFallback();
      }

      setSubmitMessage("Thanks. Your details were submitted successfully.");
      setForm(initialFormState);
    } catch {
      setSubmitMessage("Submit failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="contact-page__form-card">
      <h2>Get In Touch</h2>
      <p>You can reach us at any time</p>

      <form onSubmit={onSubmit} className="contact-page__form">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="Enter your Name"
          required
          value={form.name}
          onChange={(e) => {
            const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
            updateField("name", value);
          }}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="contact-email">Email id</label>
        <input
          id="contact-email"
          type="email"
          placeholder="Enter your email id"
          required
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="+91 00000 00000"
          required
          value={form.phone}
          maxLength={10}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 10);
            updateField("phone", value);
          }}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <label htmlFor="contact-message">How Can We Help</label>
        <textarea
          id="contact-message"
          placeholder="Your Valuable Message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
        />

        <button type="submit" disabled={isSubmitting} className="hover-effect">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {submitMessage && (
        <p className="contact-page__submit-message">{submitMessage}</p>
      )}
    </article>
  );
}
