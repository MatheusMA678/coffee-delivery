import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellowDark: string
      yellow: string
      yellowLight: string

      purpleDark: string
      purple: string
      purpleLight: string

      baseTitle: string
      baseSubtitle: string
      baseText: string
      baseLabel: string
      baseHover: string
      baseButton: string
      baseInput: string
      baseCard: string

      background: string
      white: string
    }
    title: {
      xl: string
      lg: string
      md: string
      sm: string
      xs: string
    }
    text: {
      lg: string
      md: string
      sm: string
      xs: string
    }
    extra: {
      tag: string
      buttonG: string
      buttonM: string
    }
  }
}
