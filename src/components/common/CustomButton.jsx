export function CustomButton({ className, label, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {label}
    </button>
  );
}
