import { FC } from "react";
import styles from "./ResumeReaderPopUp.module.css";

interface ResumeReaderPopUpProps {
  onClose: () => void;
}

const ResumeReaderPopUp: FC<ResumeReaderPopUpProps> = ({ onClose }) => {
  
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <span
          className="
          w-full
         text-white
          flex
          justify-end 
          py-3
          px-4
          "
        >
          <svg
            onClick={onClose}
            className="cursor-pointer"
            fill="#fff"
            width="15px"
            height="15px"
            viewBox="-28 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>cancel</title>
            <path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z" />
          </svg>
        </span>
        <iframe
          className="rounded-[10px] h-full w-full"
          src="/assets/documents/fullstack.pdf"
        >
          <p className="text-black">
            Unable to display PDF file. <a href="sample.pdf">Download</a>{" "}
            instead.
          </p>
        </iframe>
      </div>
    </div>
  );
};

export default ResumeReaderPopUp;
