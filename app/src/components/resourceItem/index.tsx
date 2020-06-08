import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading, Icon, IconButton, Link, Pane, defaultTheme, Card } from 'evergreen-ui';
import { useDispatch } from 'react-redux';
import { TextTruncated } from '../textTruncated';
import { queueResourceToDelete } from '../../actions';
import { TruncatedPane } from './style';
import { KNResourceType } from '../../interfaces/resources';

/**
 * Displays a single resource item in a list style entry.
 *
 * @param resource The resource to be displayed
 * @param onDelete An callback to handle items
 * @constructor
 */
export const ResourceItem = ({ resource }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleDeleteResource = (): void => {
        dispatch(queueResourceToDelete(resource));
    };

    const handleExpand = () => {
        if (resource.type === KNResourceType.TEXT) {
            setOpen(!open);
        }
    };

    const itemIcon = (() => {
        switch (resource.type) {
            case KNResourceType.URL:
                return 'link';
            case KNResourceType.TEXT:
                return 'annotation';
            default:
                return 'document';
        }
    })();

    return (
        <Card
            background="white"
            display="flex"
            flexDirection="row"
            elevation={open ? 3 : 1}
            paddingY={16}
            marginBottom={8}
            onClick={handleExpand}
        >
            {!open && (
                <Pane
                    flexBasis={70}
                    flexShrink={0}
                    flexGrow={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon icon={itemIcon} size={20} opacity={0.4} />
                </Pane>
            )}
            <TruncatedPane flex={1} display="flex" flexDirection="column" overflow="hidden" padding={open ? 16 : 0}>
                <Pane>
                    <Heading size={400}>{resource.title}</Heading>
                </Pane>
                <Pane maxHeight={380} overflowX="hidden">
                    {resource.type === KNResourceType.URL && (
                        <Link href={resource.body.trim()} color="green" target="_blank">
                            {resource.body}
                        </Link>
                    )}
                    {resource.type === KNResourceType.TEXT && (
                        <TextTruncated text={resource.body} length={90} disable={open} />
                    )}
                </Pane>
            </TruncatedPane>
            {!open && (
                <Pane
                    flexBasis={70}
                    flexShrink={0}
                    flexGrow={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <IconButton
                        icon="trash"
                        appearance="minimal"
                        color="#fff"
                        margin={4}
                        onClick={handleDeleteResource}
                    />
                </Pane>
            )}
        </Card>
    );
};

ResourceItem.propTypes = {
    resource: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string,
        body: PropTypes.string,
        file: PropTypes.object,
    }),
};
