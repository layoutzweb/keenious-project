import React from 'react';
import { Dialog, Text } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { documentSelector } from '../../selectors';
import { clearDocument, deleteDocument } from '../../actions';

export const ConfirmDocumentDelete = () => {
    const dispatch = useDispatch();
    const { document, deleting } = useSelector(documentSelector);

    const clearDocumentFromQueue = () => {
        dispatch(clearDocument());
    };

    const handleDocumentToDelete = (event): void => {
        event.stopPropagation();
        dispatch(deleteDocument(document._id));
    };

    return (
        <Dialog
            isShown={document && deleting}
            title="Delete Document?"
            confirmLabel="Yes, Delete"
            onCloseComplete={clearDocumentFromQueue}
            onConfirm={handleDocumentToDelete}
        >
            <Text>Are you sure you want to delete document "{document?.title}"?</Text>
        </Dialog>
    );
};
