import * as React from 'react';

import './footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a className="github-link" href="https://github.com/SkaymanT">
        <img src="assets/icons/github.svg" alt="github" />
      </a>
      <div className="footer-text">2020</div>
      <a className="school-link" href="https://rs.school/js/">
        <img src="https://rs.school/images/rs_school_js.svg" alt="rs_school" />
      </a>
    </div>
  );
};

export default Footer;
