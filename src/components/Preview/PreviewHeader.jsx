import Styles from "./PreviewHeader.module.css";

const PreviewHeader = () => {
  return (
    <div className={Styles.background}>
      <div className={Styles.buttons}>
        <a href="" className={Styles.back_to_editor_btn}>
          Back to Editor
        </a>
        <a href="" className={Styles.share_link_btn}>
          Share Link
        </a>
      </div>
    </div>
  );
};

export default PreviewHeader;
