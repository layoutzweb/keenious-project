import React from 'react';
import PropTypes from 'prop-types';
import { Heading, IconButton, Pane } from 'evergreen-ui';
import { useHistory } from 'react-router-dom';

export const PageHeader = ({ title, children, backButton }) => {
    const history = useHistory();

    const handleBackClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push(backButton);
    };

    return (
        <Pane display="flex" width="100%" marginTop={50} marginBottom={20}>
            <Pane flex={1} height={40} display="flex" position="relative" alignItems="center">
                {backButton && (
                    <IconButton
                        icon="chevron-left"
                        position="absolute"
                        left="-45px"
                        appearance="minimal"
                        height={38}
                        iconSize={32}
                        onClick={handleBackClick}
                    />
                )}
                <Heading flex={1} size={800} lineHeight="40px">
                    {title}
                </Heading>
            </Pane>
            <Pane>{children}</Pane>
        </Pane>
    );
};

PageHeader.propTypes = {
    backButton: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.element,
};

PageHeader.defaultProps = {
    backButton: null,
    size: 'md',
    title: '',
    children: null,
};
