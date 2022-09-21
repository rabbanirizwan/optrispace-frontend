import React from 'react'
import Link from 'next/link'
import { Grid, Container, Divider, Button, Header } from 'semantic-ui-react'
import JobsList from '../../../../components/JobsList'
import { Sidebar } from '../../../../components/Sidebar'
import { ProfileIsNotConfigured } from '../../../../components/ProfileIsNotConfigured'
import { isEmptyString } from '../../../../lib/validators'

export const JobsScreen = ({ jobs, person, tokenSymbol }) => {
  return (
    <>
      <Header as="h1">Find a Job. Find a Pro.</Header>

      {person && (
        <>
          {isEmptyString(person.ethereum_address) ? (
            <ProfileIsNotConfigured />
          ) : (
            <Container textAlign="right">
              <Link href="/jobs/new" passHref>
                <Button primary content="Add New Job" />
              </Link>
            </Container>
          )}
        </>
      )}

      <Divider hidden />

      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={11}>
            <JobsList jobs={jobs} tokenSymbol={tokenSymbol} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Sidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}
