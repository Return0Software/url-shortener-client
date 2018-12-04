import React from "react";
import "./Button.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Button({ onClick, hash }) {
  return (
    <div className="button-space">
      <a className="face-button" href="#">
        {hash === "" ? (
          <div className="face-primary" onClick={onClick}>
            <span className="icon fa fa-cloud" />
            Shorten
          </div>
        ) : (
          <CopyToClipboard text={`r0s.io/s/${hash}`}>
            <div className="face-secondary">
              <span className="icon fa fa-hdd-o" />
              {`r0s.io/s/${hash}`}
            </div>
          </CopyToClipboard>
        )}
      </a>
    </div>
  );
}

export default Button;
