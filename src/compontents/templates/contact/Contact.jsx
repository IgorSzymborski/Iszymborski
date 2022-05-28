import React from 'react';
import styles from '../contact/Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.container__tittle}>Let's talk</h2>
      <form className={styles.container__form}>
        <label className={styles.container__form__name}>Name:</label>
        <input type="text" placeholder='Enter your name' className={styles.container__form__input} />
        <label className={styles.container__form__email}>Email:</label>
        <input type="email" placeholder='Enter your email address' className={styles.container__form__input} />
        <label className={styles.container__form__message}>Message: </label>
        <textarea name="" id="" cols="30" rows="10" className={styles.container__form__messageArea}></textarea>
        <button className={styles.container__form__submitBtn}>Submit</button>
      </form>
    </section>
  );
};


export default Contact;