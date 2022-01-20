import styled from 'styled-components'

export const CharactersCard = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 15px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    text-align: center;
    cursor: default;
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
    cursor: pointer;
    min-width: 200px;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`
