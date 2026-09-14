import { Link } from 'react-router-dom'

const variants = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  external = false,
  whatsapp = false,
  className = '',
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim()

  if (href) {
    const sharedProps = {
      className: classes,
      ...props,
    }

    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
          {children}
        </a>
      )
    }

    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
