import React, { useEffect, useState } from 'react';
import { Button, Pane, TextareaField, TextInputField } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { documentSelector } from '../../selectors';
import { deleteDocument, updateDocument } from '../../actions';
import { KNDocument } from '../../interfaces';

export const DocumentForm = () => {
    const dispatch = useDispatch();
    const { document, loading } = useSelector(documentSelector);
    const [form, updateForm] = useState<KNDocument>({
        _id: null,
        title: '',
        body: '',
    });

    useEffect(() => {
        if (document) {
            updateForm(document);
        }
    }, [document]);

    const handleChange = (field: string, value: string) => {
        updateForm({
            ...form,
            [field]: value,
        });
    };

    const handleDeleteDocument = () => {
        dispatch(deleteDocument(document._id));
    };

    const handleDocumentSave = () => dispatch(updateDocument(form));

    return (
        <>
            <Pane padding={16}>
                <TextInputField
                    disabled={loading}
                    inputHeight={42}
                    label="Title"
                    placeholder="Document title"
                    value={form.title}
                    onChange={(event) => handleChange('title', event.target.value)}
                />
                <TextareaField
                    disabled={loading}
                    label="Body"
                    placeholder="Body text"
                    inputHeight={360}
                    value={form.body}
                    onChange={(event) => handleChange('body', event.target.value)}
                />
            </Pane>
            <Pane display="flex" alignItems="center" justifyContent="flex-end" padding={16}>
                <Button intent="danger" onClick={handleDeleteDocument}>
                    Delete Document
                </Button>
                <Pane flex={1} />
                <Button appearance="primary" onClick={handleDocumentSave}>
                    Save Document
                </Button>
            </Pane>
        </>
    );
};
