import React from 'react';
import styles from './Footer.module.scss';
import ArrowIcon  from 'src/assets/icons/Arrow.svg';
import {TwitterIcon} from 'src/assets/icons/Twitter';
import {InstagramIcon} from 'src/assets/icons/Instagram';
import {FacebookIcon} from 'src/assets/icons/Facebook';
import {LinkedInIcon} from 'src/assets/icons/LinkedIn';

const Footer: React.FC = () => {
    return (
        <footer className={styles.allElementsWrapper}>
            <div className={styles.buttonsWrapper}>
                <div className={styles.emailInputWrapper}>
                    <div className={styles.emailWithArrowWrapper}>
                        <input
                            className={styles.emailInput}
                            type="email"
                            placeholder="Give an email, get the newsletter"
                        />
                        <button className={styles.emailButton}>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
                <div className={styles.checkBoxWrapper}>
                    <input className={styles.checkBox} type="checkbox" />
                    <div className={styles.checkBoxText}>
                        I agree to the website’s terms and conditions
                    </div>
                </div>
                <ul className={styles.buttons}>
                    <li className={styles.button}>CONTACT</li>
                    <li className={styles.button}>TERMS OF SERVICES</li>
                    <li className={styles.button}>SHIPPING AND RETURNS</li>
                </ul>
            </div>
            <div className={styles.contactsWrapper}>
                <div className={styles.iconsWrapper}>
                    <div className={styles.iconsText}>Follow us</div>
                    <hr className={styles.line} />
                    <div className={styles.icon}>
                        <LinkedInIcon />

                    </div>
                    <div className={styles.icon}>
                        <FacebookIcon />

                    </div>
                    <div className={styles.icon}>
                        <InstagramIcon />

                    </div>
                    <div className={styles.icon}>
                        <TwitterIcon/>

                    </div>
                </div>
                <div className={styles.text}>
                    <span>© 2023 Shelly.</span> Terms of use <span>and</span> privacy policy.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
