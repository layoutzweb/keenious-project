import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, TextInputField } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { documentSelector } from '../../selectors';
import { clearDocument, createDocument } from '../../actions';
import { KNDocument } from '../../interfaces';

export interface DocumentFormProps {
    /**
     * Flag that displays and hides the dialog
     */
    active: boolean;
    /**
     * OnClose callback, called when the dialog is fully closed
     */
    onClose: () => void;
}

export const DocumentDialog = ({ active, onClose }: DocumentFormProps) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading } = useSelector(documentSelector);
    const [form, updateForm] = useState<KNDocument>({
        title: '',
    });

    const handleChange = (field: string, value: string) => {
        updateForm({
            ...form,
            [field]: value,
        });
    };

    const handleClose = () => {
        dispatch(clearDocument());
        onClose();
    };

    const redirectOnNewDocument = (newDocument: KNDocument) => history.push(`/document/${newDocument._id}`);

    const handleCreateDocument = () => {
        dispatch(createDocument(form, redirectOnNewDocument));
    };

    return (
        <Dialog
            isShown={active}
            title={'New Document'}
            confirmLabel={'Create Document'}
            isConfirmLoading={loading}
            onCloseComplete={handleClose}
            onConfirm={handleCreateDocument}
        >
            <TextInputField
                inputHeight={42}
                label="Give your new document a title"
                placeholder="Document title"
                value={form.title}
                onChange={(event) => handleChange('title', event.target.value)}
            />
        </Dialog>
    );
};

DocumentDialog.propTypes = {
    active: PropTypes.bool,
    onClose: PropTypes.func,
};

DocumentDialog.defaultProps = {
    onClose: () => null,
};
