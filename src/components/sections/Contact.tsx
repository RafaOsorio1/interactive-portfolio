import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const contactEmail =
    import.meta.env.VITE_CONTACT_EMAIL || "tuemail@ejemplo.com";
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "#";
  const githubUrl = import.meta.env.VITE_GITHUB_URL || "#";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container" style={{ textAlign: "center" }}>
        <motion.h2
          className="sectionTitle"
          style={{ textAlign: "center" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className={styles.inputGroup}>
            <label htmlFor="name">{t.contact.form.name}</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Rafael Rodelo"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">{t.contact.form.email}</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="rafael@example.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              placeholder="..."
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "sending"}
          >
            {status === "sending"
              ? t.contact.form.sending
              : t.contact.form.send}
          </button>

          {status === "success" && (
            <motion.div
              className={`${styles.statusMsg} ${styles.success}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.contact.form.success}
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              className={`${styles.statusMsg} ${styles.error}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.contact.form.error}
            </motion.div>
          )}
        </motion.form>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <a
            href={`mailto:${contactEmail}`}
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            {t.contact.email}
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
