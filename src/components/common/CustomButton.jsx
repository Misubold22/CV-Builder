export function CustomButton({ className, label, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
