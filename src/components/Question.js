import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import * as styles from "../components/StyledComponents"
import store from '../store'

class  Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionState: 'payout'
    }
    this.payout = this.payout.bind(this)
  }
  
  async payout(qid) {
    const contract = store.getState().web3.contract
    let confirmed = false
  
    const addresses = await store.getState().web3.web3.eth.getAccounts()
  
    contract.methods.payout(qid).send({from: addresses[0]})
      .on('transactionHash', 
        (hash) => this.setState({transactionState: 'transaction hashed!'})
      )
      .on('confirmation', (confirmation) => {
        if (!confirmed) {
          this.setState({transactionState: `
            Transaction confirmed!
            Funds payed out to account
            ${addresses[0]}
          `})
        }
        confirmed = true
      })
      .on('reciept', console.log)
      .on('error', console.log)
  }


  render() {
    const question = this.props.question
    console.log('Question component: ', question, this.props)
    const qid = question && question.id
    return (
      <Layout>
        <Payout onClick={() => this.payout(qid)}>
          { this.state.transactionState }
        </Payout>
        <Username>{ question.User && question.User.username }</Username>
        <Actions>
          <Upvote onClick={() => this.props.updateQuestionVote({id: question.id, UserId: this.props.auth.user.id})}>▲</Upvote>
          <VoteCount>{question && question.upvoteCount}</VoteCount>
          <Downvote onClick={() => {this.props.downvoteQuestionVote({id: question.id, UserId: this.props.auth.user.id})}}>▼</Downvote>
          <Star>★</Star>
        </Actions>
        <Title>{ question && question.title }</Title>
        <Body>{ question && question.body }</Body>
      </Layout>
    )
  }
}

export default Question

const Layout = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  min-width: 400px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 10% 80% 10%;
`
const Title = styled.h2`
  grid-row: 2;
  grid-column: 1 / 4;
  border-bottom: solid lightgrey 1px;
  margin-bottom: 1em;
`
const Username = styled.h3`
  grid-row: 2;
  grid-column: 3;
  justify-self: right;
  padding: 1em;
`
const Actions = styled.div`
  grid-row: 3;
  grid-column: 1;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  font-size: 28px;
  max-height: 100px;
  margin-top: 1em;
`
const Upvote = styled.div`
  grid-row: 1;
  justify-self: center;
  cursor: pointer;  
`
const VoteCount = styled.div`
  grid-row: 2;
  justify-self: center;
`
const Downvote = styled.div`
  grid-row: 3;
  justify-self: center;
  cursor: pointer;  
`
const Star = styled.div`
  grid-row: 4;
  justify-self: center;
  font-size: 40px;
  cursor: pointer;  
  color: ${styles.MAIN_COLOR};
`
const Body = styled.p`
  grid-row: 3;
  grid-column: 2 / 4;
  background-color: white;
  border: 2px solid ${styles.MAIN_COLOR};
  padding: 25px;
  white-space: pre-wrap;
  font-size: 20px;
  min-height: 200px;
  white-space: pre-wrap;
  overflow: auto;
`
const Payout = styled.button`
  grid-column: 2;
  width: 180px;
  height: 70px;
  justify-self: center;
  margin-top: 2em;
  font-size: 15px;
  &:hover{{
    font-weight: bold;
    background: ${styles.MAIN_COLOR};
    color: ghostwhite;
  }}
`