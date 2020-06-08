import React, { useEffect } from 'react';
import { Pane } from 'evergreen-ui';
import { PageHeader } from '../components/paheHeader';
import { useDispatch, useSelector } from 'react-redux';
import { documentSelector } from '../selectors';
import { PageContainer } from '../components/pageContainer';
import { getDocument } from '../actions';
import { useParams } from 'react-router-dom';
import { DocumentForm } from '../components/documentForm';
import { ResourcePanel } from '../components/resourcePanel';
import { ElevatedContainer } from '../components/elevatedContainer';

export const DocumentPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { document, loaded, loading } = useSelector(documentSelector);

    useEffect(() => {
        if (id !== (document || {})._id || (!loaded && !loading)) {
            dispatch(getDocument(id));
        }
    });

    return (
        <>
            <PageContainer size="md">
                <>
                    <PageHeader title={`Updating Document`} backButton="/documents" />
                    <Pane display="flex" alignItems="flex-start" justifyContent="center">
                        <ElevatedContainer>
                            <DocumentForm />
                        </ElevatedContainer>
                    </Pane>
                </>
            </PageContainer>
            {document && <ResourcePanel />}
        </>
    );
};
