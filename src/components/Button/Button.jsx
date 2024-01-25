function Button({
    label,
    styles,
    type,
}) {
  return (
    <div>
        <button type={type} className={styles}>{label}</button>
    </div>
  )
}

export default Button