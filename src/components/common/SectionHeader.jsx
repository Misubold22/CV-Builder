export function SectionHeader({ headerClassName = false, title }) {
  if (headerClassName) {
    return <h2 className={headerClassName}>{title}</h2>;
  }

  return <h2>{title}</h2>;
}
