import React from 'react';
import styles from '../contact/Contact.module.scss'

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
      <h2 className={styles.container__tittle}>Let's talk</h2>
      <form action="https://formsubmit.co/hello@iszymborski.pl" method="POST" className={styles.container__form}>

        <input type="hidden" name="_subject" value="New submission!" />
        <input type="hidden" name="_autoresponse" value="Thanks for your message!" />
        <label className={styles.container__form__name}>Name:</label>
        <input type="text" name="name" placeholder='Enter your name' className={styles.container__form__input} />
        <label className={styles.container__form__email}>Email:</label>
        <input type="email" name="email" placeholder='Enter your email address' className={styles.container__form__input} />
        <label className={styles.container__form__message}>Message: </label>
        <textarea name="message" type="text" cols="30" rows="10" className={styles.container__form__messageArea}></textarea>
        <button type='submit' className={styles.container__form__submitBtn}>Submit</button>
      </form>
    </section>
  );
};


export default Contact;