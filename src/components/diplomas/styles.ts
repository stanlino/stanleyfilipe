import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding-left: 8px;
`

interface IAncorProps {
  color: string;
}

export const Ancor = styled.a<IAncorProps>`
  border-color: ${({ color }) => color};
  border-style: solid;
  border-width: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  min-height: 80px;

  transition: all 0.2s;

  img {
    margin: 0 1rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
    transition: all .2s;
    flex: 1;
    text-align: left;
  }

  &:hover {
    span {
      color: ${({ color }) => color};
      filter: brightness(1.2);
    }

    filter: brightness(1.2);
  }
`