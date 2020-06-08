import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

export const ActivityIndicator = () => {
    return (
        <Pane position="absolute" top={0} left={0} right={0} bottom={0}>
            <Spinner position="absolute" width={50} height={50} top={0} left={0} right={0} bottom={0} margin="auto" />
        </Pane>
    );
};
