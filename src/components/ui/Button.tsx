import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0'
const styles: Record<Variant, string> = {
  primary: 'border-accent bg-accent text-accent-ink',
  outline: 'border-fg bg-transparent text-fg',
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type Props = (AnchorProps | NativeProps) & { variant?: Variant; children: ReactNode }

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`
  if ('href' in rest && rest.href) {
    return <a className={cls} {...(rest as AnchorProps)}>{children}</a>
  }
  return <button className={cls} {...(rest as NativeProps)}>{children}</button>
}
