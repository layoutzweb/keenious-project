import React from 'react';
import { IconButton, Pane, Table } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { documentsSelector } from '../../selectors';
import { queueDocumentToDelete } from '../../actions';
import { ActivityIndicator } from '../activityIndicator';
import { KNDocument } from '../../interfaces';
import { ConfirmDocumentDelete } from '../confirmDocumentDelete';

export const DocumentsList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { documents, loading } = useSelector(documentsSelector);

    const handleDeleteDocument = (document: KNDocument) => {
        console.log('handleDeleteDocument', document);
        dispatch(queueDocumentToDelete(document));
    };

    const viewDocument = (id: string): void => history.push(`/document/${id}`);

    return (
        <Table>
            <Table.Head height={48}>
                <Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0}>
                    #
                </Table.TextHeaderCell>
                <Table.TextHeaderCell flex={1}>Title</Table.TextHeaderCell>
                <Table.TextHeaderCell>Body</Table.TextHeaderCell>
                <Table.TextHeaderCell flexBasis={70} flexShrink={0} flexGrow={0}>
                    Actions
                </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body>
                {documents.map((document, index) => (
                    <Table.Row key={document._id} height={58}>
                        <Table.TextCell textProps={{ size: 500 }} flexBasis={50} flexShrink={0} flexGrow={0}>
                            {index + 1}
                        </Table.TextCell>
                        <Table.TextCell textProps={{ size: 500 }}>{document.title}</Table.TextCell>
                        <Table.TextCell textProps={{ size: 500 }}>{document.body}</Table.TextCell>
                        <Table.TextCell textProps={{ size: 500 }} flexBasis={100} flexShrink={0} flexGrow={0}>
                            <Pane display="flex">
                                <IconButton
                                    icon="eye-open"
                                    appearance="minimal"
                                    iconSize={18}
                                    height={30}
                                    margin={4}
                                    onClick={() => viewDocument(document._id)}
                                />
                                <IconButton
                                    icon="trash"
                                    appearance="minimal"
                                    iconSize={16}
                                    height={30}
                                    margin={4}
                                    onClick={() => handleDeleteDocument(document)}
                                />
                            </Pane>
                        </Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
            {loading && <ActivityIndicator />}
            <ConfirmDocumentDelete />
        </Table>
    );
};
