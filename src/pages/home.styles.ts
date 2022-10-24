import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;

  nav {
    margin: 1rem 0 0 0;

    display: flex;
    flex-direction: row;

    justify-content: flex-end;

    @media (max-width: 720px) {
      justify-content: center;
    }
  }

  main {
    min-height: 100vh;
    padding: 2rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1200px;
    margin: 0 auto;

    gap: 2rem;
  }
`