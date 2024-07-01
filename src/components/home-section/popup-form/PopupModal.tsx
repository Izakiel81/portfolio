import React, {FC} from 'react';
import styles from "./PopupModal.module.css";
import HireForm from "@/components/home-section/popup-form/hire-form/HireForm";

interface PopupModalProps {
    children: React.ReactNode;
}

const PopupModal: FC<PopupModalProps> = ({children}) => {
    return (
        <div className={styles.popupModal}>
            {children}
        </div>
    );
};

export default PopupModal;