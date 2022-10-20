import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 0.5rem;

  output {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 300;
  }

  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    input:checked + .slider:before {
      transform: translateX(1.5em);
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: black;
      transition: .4s;
      border-radius: 30px;

      ::before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 20px;
        left: 0.3em;
        bottom: 0.3em;
        background-color: #121212;
        transition: .4s;
      }
    }
  }
`