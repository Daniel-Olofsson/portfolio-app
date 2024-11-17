"use client";
import styles from "../../styles/contact.module.css"; // Import your CSS file for styling

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Use FormData to get the form values reliably
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Create a mailto link with the values from the form
    const mailtoLink = `mailto:daniel-olofsson@hotmail.se?subject=Contact%20Form%20Message&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact Me</h1>
        <form
          className={styles.contactForm}
          onSubmit={handleSubmit} // Handle form submission through onSubmit
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" name="message" required></input>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}
