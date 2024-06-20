import styles from './Footer.module.scss'
import InstagramIcon from '../../../assets/icons/instagram.svg'
import TwitterIcon from '../../../assets/icons/twitter.svg'
import LinkedInIcon from '../../../assets/icons/linkedin.svg'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import Input from "src/components/shared/Input/Input.tsx";

interface FooterProps {
}


export const Footer = (props: FooterProps) => {
    const {} = props
    return (
        <>
            <div className={styles.footer_container}>
                <div className={styles.top}>
                    <div className={styles.links}>
                        <div className={styles.contact}>CONTACTS</div>
                        <div className={styles.terms}>TERMS OF SERVICES</div>
                        <div className={styles.shipping}>SHIPPING AND RETURNS</div>
                    </div>
                    <div className={styles.email}>
                        <Input placeholder={"Give an email, get the newsletter."} />
                        {/*<button className={styles.email_send}>*/}
                        {/*    &gt;*/}
                        {/*</button>*/}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        @ 2023 Shelly. Terms of use <strong>and</strong> privacy policy.
                    </div>
                    <div className={styles.social_media_links}>
                        <InstagramIcon />
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                    </div>
                </div>


            </div>

        </>
    );
};
