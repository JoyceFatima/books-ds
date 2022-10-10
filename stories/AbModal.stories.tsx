import React from 'react';

import {  AbModal, AbModalProps } from '../src/components/AbModal';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'Componentes/AbModal',
  component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args}/>

export const Modal = Template.bind({})

Modal.args = {
  titulo: 'Opa',
} as AbModalProps

