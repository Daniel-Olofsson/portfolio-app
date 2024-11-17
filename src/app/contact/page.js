'use client';
import { useState } from 'react';
import styles from '../../styles/contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const mailtoLink = `mailto:daniel-olofsson@hotmail.se?subject=Contact%20Form%20Message&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact Me</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}
