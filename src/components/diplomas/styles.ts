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
  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  min-height: 80px;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    transition: all .2s;
  }

  :hover {
    span {
      transform: scale(1.1);
    }
  }
`