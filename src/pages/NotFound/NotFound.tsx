import React from "react";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router";
import {HOME} from "src/shared/providers/routerProvider/routes.ts";
import Header from "src/components/Header/Header.tsx";
import Footer from "src/components/Footer/Footer.tsx";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.ErrorPageWrapper}>
            <Header />
            <div className={styles.Container}>
                <h1 className={styles.MainText}>
                    404 Error
                </h1>
                <h3 className={styles.MessageText}>
                    This page not found;
                    <br />
                    back to home and start again
                </h3>
                <button className={styles.RedirectButton} onClick={() => navigate(HOME)}>
                    Homepage
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
