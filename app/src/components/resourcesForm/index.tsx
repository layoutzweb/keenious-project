import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    FilePicker,
    Heading,
    Label,
    Pane,
    Text,
    SegmentedControl,
    TextareaField,
    TextInputField,
    IconButton,
} from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createResource, toggleResourceForm, updateResource } from '../../actions';
import { resourceSelector } from '../../selectors';
import { KNDocumentResource, KNResourceType } from '../../interfaces/resources';

export const ResourceForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { resource } = useSelector(resourceSelector);
    const [form, updateForm] = useState<KNDocumentResource>({
        title: '',
        type: null,
        body: '',
    });

    const handleChange = (field: string, value: any) => {
        updateForm({
            ...form,
            [field]: value,
        });
    };

    const handleCloseForm = (state: boolean) => {
        dispatch(toggleResourceForm(state));
    };

    const handleSaveResource = () => {
        dispatch(!resource ? createResource({ ...form, documentId: id }) : updateResource(form));
    };

    return (
        <Pane position="absolute" background="blueTint" top={0} left={0} right={0} bottom={0}>
            <IconButton
                appearance="minimal"
                icon="cross"
                height={40}
                position="absolute"
                top={10}
                left="auto"
                right={10}
                bottom="auto"
                onClick={() => handleCloseForm(false)}
            />
            <Heading marginX={32} marginTop={24}>
                New resource
            </Heading>
            <Pane padding={32}>
                <TextInputField
                    label="Title"
                    placeholder="Document title"
                    value={form.title}
                    inputHeight={38}
                    onChange={(event) => handleChange('title', event.target.value)}
                />
                {!form.type && (
                    <Pane marginBottom={24}>
                        <Label clearfix>Resource Type</Label>
                        <Text clearfix display="block" marginBottom={16}>
                            Resources have different types to save different kinds of data, which type of resource do
                            you want to create?
                        </Text>
                        <SegmentedControl
                            options={['URL', 'Text', 'File'].map((label) => ({
                                label,
                                value: KNResourceType[label.toUpperCase()],
                            }))}
                            value={form.type}
                            defaultValue={false}
                            height={38}
                            onChange={(value) => handleChange('type', value)}
                        />
                    </Pane>
                )}
                {form.type === KNResourceType.URL && (
                    <TextInputField
                        label="Url Resource"
                        type="url"
                        placeholder="Enter a valid url..."
                        value={form.body}
                        inputHeight={38}
                        onChange={(event) => handleChange('body', event.target.value)}
                    />
                )}
                {form.type === KNResourceType.TEXT && (
                    <TextareaField
                        label="Text Resource"
                        placeholder="Body text"
                        value={form.body}
                        inputHeight={168}
                        onChange={(event) => handleChange('body', event.target.value)}
                    />
                )}
                {form.type === KNResourceType.FILE && (
                    <Pane>
                        <Heading size={400}>File Resource</Heading>
                        <FilePicker
                            multiple
                            width={250}
                            marginBottom={32}
                            height={38}
                            onChange={(files: FileList) => handleChange('file', files)}
                            placeholder="Select the file here!"
                        />
                    </Pane>
                )}
                <Pane display="flex" alignItems="center" justifyContent="flex-end">
                    {form.type !== null && (
                        <IconButton
                            icon="refresh"
                            appearance="minimal"
                            height={38}
                            width={38}
                            onClick={() => handleChange('type', null)}
                        />
                    )}
                    <Pane flex={1} />
                    <Button
                        disabled={!form.type || !form.title || !form.body}
                        appearance="primary"
                        height={38}
                        onClick={handleSaveResource}
                    >
                        Save Resource
                    </Button>
                </Pane>
            </Pane>
        </Pane>
    );
};

ResourceForm.propTypes = {
    form: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
    }),
};

ResourceForm.defaultProps = {
    form: {},
};
