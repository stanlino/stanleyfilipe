import styled from "styled-components";

export const Text = styled.h1`
  line-height: 2rem;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;

  strong {
    :nth-child(1) {
      color: #e67224;
    }

    color: #0070f3;
  }

  @media (min-width: 720px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`