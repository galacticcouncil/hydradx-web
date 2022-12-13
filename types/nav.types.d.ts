import { ReactHTMLElement } from "react"

export interface INavItem {
  label: string
  href: string
  hasIcon?: boolean
  rel?: string
  target?: string
}
