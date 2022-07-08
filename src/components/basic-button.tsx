import Button from "@mui/material/Button";

export default function BasicButton({ children, color }:any) {
  return (
    <Button variant="contained" color={color} style={{width: "250px", height: "45px", fontWeight: '600', fontSize: '16px'}}>
      {children}
    </Button>
  );
}
