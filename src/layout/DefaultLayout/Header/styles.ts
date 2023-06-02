import styled from 'styled-components'

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.yellowLight};

    width: 38px;
    height: 38px;
  }
`

export const LocationButton = styled.div`
  background-color: ${(props) => props.theme.colors.purpleLight};
  border-radius: 0.5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme.colors.purpleDark};
    font: ${(props) => props.theme.text.sm};
  }
`
