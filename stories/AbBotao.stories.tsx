import React from 'react';

import AbBotao, { AbBotaoProps } from '../src/components/AbBotao';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Template.bind({})

Primario.args = {
  text: "Ab botão prímario",
  tipo: "primario"
} as AbBotaoProps

export const Secundario = Template.bind({})

Secundario.args = {
  text: "Ab botão prímario",
  tipo: "secundario"
} as AbBotaoProps
