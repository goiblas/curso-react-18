export function Button({ children, onClick}) {
  return <button type="button" style={{background: "green", color: "#fff"}} onClick={onClick}>{children}</button>;
}