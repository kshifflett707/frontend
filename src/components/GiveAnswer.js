import React from "react"
import styled from "styled-components"
import * as styles from "../components/StyledComponents"

const GiveAnswer = props => {
  return (
    <Div>
      <textarea
        value={props.textInput.answerBody}
        onChange={e => props.addText("answerBody", e.target.value, e)}
      />
      <Button
        onClick={() =>
          props.auth.isAuthenticated
            ? props.postAnswer({
                UserId: props.auth.user.id,
                body: props.textInput.answerBody,
                PostTypeId: 2,
                PostId: props.match.params.id
              })
            : props.openModal('signin', "Please sign in before answering a question!")
        }
      >
        Submit
      </Button>
    </Div>
  )
}

export default GiveAnswer

const Div = styled.div`
  grid-column: 2 / 4;
  display: grid;
  grid-template-rows: 10em auto;
  grid-template-columns: auto;
  margin-bottom: 5em;
`
const Button = styled.button`
  grid-row: 2;
  width: 100px;
  height: 30px;
  justify-self: center;
  margin-top: 2em;
  font-size: 15px;
  &:hover{{
    font-weight: bold;
    background: ${styles.MAIN_COLOR};
    color: ghostwhite;
  }}
`