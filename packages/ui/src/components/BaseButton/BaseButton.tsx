import React from 'react'
import classnames from 'classnames'
import { BaseButtonProps, BaseButtonVariants } from './types'
import './styles.scss'

const BaseButton = (props: BaseButtonProps) => {
  const { variant = BaseButtonVariants.SOLID, children, ...rest } = props
  const className = classnames('kui-button', props.className, {
    [`kui-button--${variant}`]: variant,
  })
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

export default BaseButton
