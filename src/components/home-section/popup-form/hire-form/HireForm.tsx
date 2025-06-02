import React, {FC, useState} from 'react';
import styles from "./HireForm.module.css";

interface HireFormProps {
    setShowHireForm: (value: boolean) => void;
}

const HireForm: FC<HireFormProps> = ({setShowHireForm}) => {
    const email = "mgabin348@gmail.com";
    const [Title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const handleSend = () => {
        console.log(Title, message);
        window.open(`mailto:${email}?subject=${Title}&body=${message}`);
    }
    return (
        <form className={styles.form}>
            <div className={styles.form_header}>Hire me</div>
            <div className={styles.form_body}>
            <div className={styles.form_block}>
            <span className={styles.form_label}>Title:</span>
            <input type="text" placeholder="Title" value={Title} onChange={(event) => setTitle(event.target.value)} className={styles.form_input}/>
            </div>
            <div className={styles.form_block}>
            <span className={styles.form_label}>Message:</span>
            <textarea placeholder="Message" className={styles.form_textarea} value={message} onChange={(event) => setMessage(event.target.value)}/>
            </div>
            </div>
            <div className={styles.form_footer}>
                <div className={styles.form_buttons}>
                    <button className={styles.form_button} onClick={(event) => {
                        handleSend();
                        event.preventDefault();
                    }}
                    >Send</button>
                <button className={styles.form_button} onClick={(event) => {
                    event.preventDefault();
                    setShowHireForm(false)
                }}>Close</button>
                </div>
            </div>
        </form>
    );
};

export default HireForm;