import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./button.css";

export default function BasicButton({ children, href, onclick = false }: any) {
  const navigate = useNavigate();

  function hasFunction() {
    if (!onclick) return;
    return onclick();
  }

  return (
    <div className="button-container">
      <div className="back-button">
        <Button variant="outlined" onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined icon">arrow_back</span>
        </Button>
      </div>
      <div className="continue-button">
        <Button
          style={{ padding: "10px 30px", fontSize: "14px" }}
          variant="contained"
          data-aos="fade"
          data-aos-delay="1500"
          data-aos-duration="1000"
          data-aos-once={true}
          onClick={() => {
            hasFunction();
            navigate(href);
          }}
        >
          {children}
        </Button>
      </div>
    </div>
  );
}
