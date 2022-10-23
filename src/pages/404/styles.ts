import styled from 'styled-components'

export const Container = styled.main`

  display: flex;
  align-items: center;
  justify-content: center;
  
  min-height: 100vh;

  flex-direction: column;

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }

  div {
    width: 300px;
    margin: 2rem 0;

    @media (max-width: 720px) {
      width: 200px;
    }
  }

`