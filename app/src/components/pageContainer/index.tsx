import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from 'evergreen-ui';
import { pageSizeMap } from '../../utils';

export interface PageContainerProps {
    size: string;
    children: any;
}

export const PageContainer = ({ size, children }: PageContainerProps) => {
    return (
        <Pane width={pageSizeMap[size]} display="flex" flexDirection="column">
            {children}
        </Pane>
    );
};

PageContainer.propTypes = {
    size: PropTypes.string,
    children: PropTypes.element,
};

PageContainer.defaultProps = {
    size: 'md',
};
