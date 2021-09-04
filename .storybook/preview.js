import GlobalStyle from '../src/GlobalStyle'
import StorybookStyle from './StorybookStyle'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle/>
        <StorybookStyle/>
        <Story/>
      </>
    )
  }
]