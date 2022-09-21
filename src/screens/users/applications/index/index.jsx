import React from 'react'
import { Header } from 'semantic-ui-react'
import ApplicationsList from '../../../../components/ApplicationsList'

export const ApplicationsScreen = ({ applications, person, tokenSymbol }) => {
  return (
    <>
      <Header as="h1">Applications</Header>

      <ApplicationsList
        applications={applications}
        person={person}
        tokenSymbol={tokenSymbol}
      />
    </>
  )
}
