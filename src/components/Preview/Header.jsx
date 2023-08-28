import Styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.buttons}>
          <button className={Styles.back_to_editor_btn}>Back to Editor</button>
          <button className={Styles.share_link_btn}>Share Link</button>
        </div>
      </header>
    </>
  );
};

export default Header;
