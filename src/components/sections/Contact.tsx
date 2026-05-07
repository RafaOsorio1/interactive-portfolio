import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    
    // Add Web3Forms Access Key (User will need to replace this with their own free key)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h2 
          className="sectionTitle" 
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p 
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.form 
          className={styles.contactForm}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name">{t.contact.form.name}</label>
            <input type="text" name="name" id="name" required placeholder="Rafael Rodelo" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">{t.contact.form.email}</label>
            <input type="email" name="email" id="email" required placeholder="rafael@example.com" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea name="message" id="message" rows={5} required placeholder="..." />
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
          </button>

          {status === 'success' && (
            <motion.div 
              className={`${styles.statusMsg} ${styles.success}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.contact.form.success}
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div 
              className={`${styles.statusMsg} ${styles.error}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.contact.form.error}
            </motion.div>
          )}
        </motion.form>

        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="mailto:tuemail@ejemplo.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>{t.contact.email}</a>
          <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    </section>
  );
};
