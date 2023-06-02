import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 5.75rem 0;
  display: flex;
  align-items: flex-start;
  gap: 3.5rem;
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font: ${(props) => props.theme.title.xl};
    color: ${(props) => props.theme.colors.baseTitle};
  }

  p {
    font: ${(props) => props.theme.text.lg};
    color: ${(props) => props.theme.colors.baseSubtitle};
  }
`

export const AdvantagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.25rem;
`

export const Advantage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    border-radius: 999px;
    background-color: ${(props) => props.theme.colors.purple};

    height: 32px;
    width: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font: ${(props) => props.theme.text.md};
    color: ${(props) => props.theme.colors.baseText};
  }
`
