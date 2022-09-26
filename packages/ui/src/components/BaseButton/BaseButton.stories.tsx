import { Meta, Story } from '@storybook/react'
import BaseButton from './BaseButton'
import { BaseButtonProps, BaseButtonVariants } from './types'

export default {
  title: 'components/BaseButton',
  component: BaseButton,
} as Meta<BaseButtonProps>

const Template: Story<BaseButtonProps> = (args) => {
  return <BaseButton {...args} />
}

export const SolidButton = Template.bind({})
SolidButton.args = {
  children: 'Solid Button',
  variant: BaseButtonVariants.SOLID,
  disabled: false,
}

export const TextButton = Template.bind({})
TextButton.args = {
  children: 'Text Button',
  variant: BaseButtonVariants.TEXT,
  disabled: false,
}
export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
  children: 'Outlined Button',
  variant: BaseButtonVariants.OUTLINED,
  disabled: false,
}
