import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./continue-and-back-button.css";

export default function ContinueAndBackButton({
  children,
  href,
  nav = true,
  onclick = false,
  anchor = false,
}: any) {
  const navigate = useNavigate();

  function hasFunction() {
    if (!onclick) return;
    return onclick();
  }

  function hasNavigate() {
    if (!nav) return;
    return navigate(href);
  }

  const [child, setChild] = useState(
    <Button
      style={{ padding: "10px 30px", fontSize: "14px" }}
      variant="contained"
      data-aos="fade"
      data-aos-delay="1500"
      data-aos-duration="1000"
      data-aos-once={true}
      onClick={() => {
        hasFunction();
        hasNavigate();
      }}
    >
      {children}
    </Button>
  );

  useEffect(() => {
    if (anchor) {
      setChild(<a href={href}>{child}</a>);
    } else return;
  }, [children]);

  return (
    <div className="button-container">
      <div className="back-button">
        <Button variant="outlined" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined icon">arrow_back</span>
        </Button>
      </div>
      <div className="continue-button">{child}</div>
    </div>
  );
}
