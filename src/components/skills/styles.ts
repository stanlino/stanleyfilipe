import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  strong {
    line-height: 1.5;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .stacks {
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image_container {
    margin: 8px;
    width: 2.25rem;
    height: 2.25rem;

    @media (max-width: 720px) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`