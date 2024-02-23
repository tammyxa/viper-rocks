import styles from "./contact.module.css";

const Contact = () => {
  return (
  <div className={styles.contact}>
    <div className={styles.title}>
      <div>
        <h1>CONTACT US</h1>
      </div>
    </div>
    <div className={styles.form}>
      <div className={styles.name}>
        <p>Full Name</p>
        <input />
      </div>
      <div className={styles.email}>
        <p>Email Address</p>
        <input />
      </div>
      <div className={styles.message}>
        <p>Your Message</p>
        <input />
      </div>
      <div className={styles.button}>
        <button className={styles.send}>Send</button>
      </div>
    </div>
  </div>
  );
}

export default Contact;