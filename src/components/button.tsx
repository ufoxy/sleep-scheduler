import Button from "@mui/material/Button";
import './button.css'

export default function BasicButton({ children }: any) {
  return (
    <div className="button-container">
        <Button
            style={{padding: '10px 30px', fontSize: '14px'}}
          variant="contained"
          data-aos="fade"
          data-aos-delay="1500"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          {children}
        </Button>
    </div>
  );
}
