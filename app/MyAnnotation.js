export default function MyAnnotation({ children, data, theme }) {
  return (
    <span
      style={{ textDecoration: "underline dotted", cursor: "pointer" }}
      onClick={() => alert("MyAnnotation says hello")}
    >
      {children}
    </span>
  );
}
