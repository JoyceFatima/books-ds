import React from 'react';

import AbTag, { AbTagProps } from '../src/components/AbTag';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'Componentes/AbTag',
  component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
  text: "Ab tag prímario",
  tipo: "primario"
} as AbTagProps

export const Secundario = Template.bind({})

Secundario.args = {
  text: "Ab tag secundario",
  tipo: "secundario"
} as AbTagProps
