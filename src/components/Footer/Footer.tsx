import styles from './Footer.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
            <a href="https://www.linkedin.com/in/ysabella-cristina/">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/ysabeellaa">
              <FaGithub/>
            </a>
      </div>
      <div>
        <p>
          All rights reserved <br />
          Ysabella Cristina © 2023
        </p>
      </div>
    </footer>
  );
}
