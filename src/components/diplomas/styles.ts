import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  div {
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 2rem;

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }
`

interface IAncorProps {
  color: string;
}

export const Ancor = styled.a<IAncorProps>`
  width: 200px;
  height: 100px;
  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  @media (max-width: 720px) {
    width: 100%;
  }

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