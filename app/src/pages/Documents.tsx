import React, { useEffect } from 'react';
import { PageContainer } from '../components/pageContainer';
import { DocumentsList } from '../components/documentsList';
import { useDispatch, useSelector } from 'react-redux';
import { documentSelector, documentsSelector } from '../selectors';
import { getDocuments, toggleDocumentForm } from '../actions';
import { NoRecords } from '../components/noRecords';
import { ActivityIndicator } from '../components/activityIndicator';
import { Button, Pane, Text } from 'evergreen-ui';
import { DocumentDialog } from '../components/documentDialog';
import { PageHeader } from '../components/paheHeader';
import { ElevatedContainer } from '../components/elevatedContainer';

export const DocumentsPage = () => {
    const dispatch = useDispatch();
    const { documents, loading, loaded } = useSelector(documentsSelector);
    const { form: documentFormOpen } = useSelector(documentSelector);

    useEffect((): void => {
        if (!loaded && !loading) {
            dispatch(getDocuments());
        }
    });

    const openForm = () => dispatch(toggleDocumentForm(true));

    const closeForm = () => dispatch(toggleDocumentForm(false));

    return (
        <PageContainer>
            <>
                <PageHeader title="Documents">
                    <Button marginRight={12} iconBefore="plus" onClick={openForm}>
                        Create New Document
                    </Button>
                </PageHeader>
                <ElevatedContainer>
                    <>
                        {loaded && documents.length > 0 && <DocumentsList />}
                        {loaded && documents.length === 0 && (
                            <NoRecords color="default">
                                <Pane>
                                    <Text onClick={openForm}>Click to create your first document</Text>
                                </Pane>
                            </NoRecords>
                        )}
                        {loading && <ActivityIndicator />}
                        <DocumentDialog active={documentFormOpen} onClose={closeForm} />
                    </>
                </ElevatedContainer>
            </>
        </PageContainer>
    );
};
