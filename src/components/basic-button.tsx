import Button from "@mui/material/Button";

export default function BasicButton({ children, color, variant, href, size = { width: "250px", height: "45px", fontWeight: '600', fontSize: '16px' } }: any) {
  return (
    <a href={href}>
      <Button variant={variant} color={color} style={size}>
        {children}
      </Button>
    </a>
  );
}
