import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane, Text } from 'evergreen-ui';

export interface NoRecordsProps {
    color: string;
    children?: any;
}

export const NoRecords: FunctionComponent<NoRecordsProps> = ({ color, children }) => {
    return (
        <Pane flex={1} height={450} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Text color={color}>No Records Found</Text>
            {children && <Pane>{children}</Pane>}
        </Pane>
    );
};

NoRecords.propTypes = {
    color: PropTypes.string,
    children: PropTypes.element,
};

NoRecords.defaultProps = {
    color: 'default',
    children: null,
};
