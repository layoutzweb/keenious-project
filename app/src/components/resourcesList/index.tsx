import React, { useEffect } from 'react';
import { Button, Dialog, Heading, Pane, Text } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { resourceSelector, resourcesSelector } from '../../selectors';
import { clearResource, deleteResource, getResources, toggleResourceForm } from '../../actions';
import { useParams } from 'react-router-dom';
import { NoRecords } from '../noRecords';
import { ResourceItem } from '../resourceItem';

export const ResourcesList = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { resources, loading, loaded } = useSelector(resourcesSelector);
    const { resource, deleting } = useSelector(resourceSelector);

    useEffect(() => {
        if (!loaded && !loading) {
            dispatch(getResources(id));
        }
    }, [id, loading, dispatch, loaded]);

    const handleResourceToDelete = (): void => {
        dispatch(deleteResource(resource));
    };

    const handleOpenResourceForm = () => {
        dispatch(toggleResourceForm(true));
    };

    return (
        <Pane
            position="relative"
            display="flex"
            flexDirection="column"
            flexBasis={360}
            maxWidth={360}
            minWidth={360}
            maxHeight="100%"
            overflow="hidden"
            flexShrink={0}
            flexGrow={0}
        >
            <Heading size={600} color="white" paddingBottom={12}>
                Document Resources
            </Heading>
            <Pane overflowY="scroll" paddingRight={6} marginRight={-20}>
                {resources.length > 0 &&
                    resources.map((resource) => <ResourceItem key={resource._id} resource={resource} />)}
                {resources.length === 0 && (
                    <NoRecords color="white">
                        <Pane>
                            <Text onClick={handleOpenResourceForm} color="white">
                                Click to create your first resource
                            </Text>
                        </Pane>
                    </NoRecords>
                )}
            </Pane>
            {resources.length > 0 && (
                <Pane textAlign="right" paddingY={16} position="static" bottom={0}>
                    <Button onClick={() => dispatch(toggleResourceForm(true))}>Add Resource</Button>
                </Pane>
            )}
            <Dialog
                isShown={resource && deleting}
                title="Delete Resource?"
                confirmLabel="Yes, Delete"
                onCloseComplete={clearResource}
                onConfirm={() => handleResourceToDelete()}
            >
                <Text>Are you sure you want to delete resource "{resource?.title}"?</Text>
            </Dialog>
        </Pane>
    );
};
