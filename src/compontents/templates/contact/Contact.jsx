import React from 'react';
import styles from '../contact/Contact.module.scss'
import AnimatedRoutes from '../../atoms/AnimatedRoutes/AnimatedRoutes'

const Contact = () => {
  return (
    <AnimatedRoutes>
    <section id='contact' className={styles.container}>
      <h2 className={styles.container__tittle}>Let's talk</h2>
      <form action="https://formsubmit.co/2e0d885a557e38ab0bd94f11b9153f70" method="POST" className={styles.container__form}>
        <input type="hidden" name="_next" value="https://iszymborski.pl/thanks.html" />
        <input type="hidden" name="_subject" value="New submission!" />
        <input type="hidden" name="_autoresponse" value="Thanks for your message!" />
        <input type="hidden" name="_captcha" value="false" />
        
        <label className={styles.container__form__name}>Name:</label>
        <input type="text" name="name" placeholder='Enter your name' className={styles.container__form__input} required  />
        <label className={styles.container__form__email}>Email:</label>
        <input type="email" name="email" placeholder='Enter your email address' className={styles.container__form__input} required  />
        <label className={styles.container__form__message}>Message: </label>
        <textarea name="message" type="text" cols="30" rows="10" className={styles.container__form__messageArea} required></textarea>
        <button type='submit' className={styles.container__form__submitBtn}>Submit</button>
      </form>
    </section>
    </AnimatedRoutes>
  );
};


export default Contact;