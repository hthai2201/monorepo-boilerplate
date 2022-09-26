export enum BaseButtonVariants {
  SOLID = 'solid',
  OUTLINED = 'outlined',
  TEXT = 'text',
}
export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BaseButtonVariants
  disabled?: boolean
}
