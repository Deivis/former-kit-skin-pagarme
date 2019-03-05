import React from 'react'
import { ThemeProvider, Typeset } from 'former-kit'
import { storiesOf, addDecorator } from '@storybook/react'
import theme from '../src'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <Typeset>
      {storyFn()}
    </Typeset>
  </ThemeProvider>
)

addDecorator(ThemeDecorator)