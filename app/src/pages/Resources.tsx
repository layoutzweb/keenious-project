import React from 'react';
import { PageHeader } from '../components/paheHeader';
import { PageContainer } from '../components/pageContainer';
import { ElevatedContainer } from '../components/elevatedContainer';
import { Heading } from 'evergreen-ui';

export const ResourcesPage = () => {
    return (
        <PageContainer size="md">
            <>
                <PageHeader title="Resources" />
                <ElevatedContainer>
                    <Heading>Sorry, out of time!</Heading>
                </ElevatedContainer>
            </>
        </PageContainer>
    );
};
