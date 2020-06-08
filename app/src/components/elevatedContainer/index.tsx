import React from 'react';
import { Pane } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { pageSizeMap } from '../../utils';

export const ElevatedContainer = ({ size, children }) => {
    return (
        <Pane
            flex={1}
            display="flex"
            flexDirection="column"
            width={pageSizeMap[size]}
            background="white"
            padding={24}
            elevation={1}
        >
            {children}
        </Pane>
    );
};

ElevatedContainer.propTypes = {
    size: PropTypes.string,
    children: PropTypes.element,
};
ElevatedContainer.defaultProps = {
    size: 'md',
};
