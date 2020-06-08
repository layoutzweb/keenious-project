import React from 'react';
import { defaultTheme, Pane, SideSheet } from 'evergreen-ui';
import { ResourcesList } from '../resourcesList';
import { ResourceForm } from '../resourcesForm';
import { useSelector } from 'react-redux';
import { resourceSelector } from '../../selectors';

export const ResourcePanel = () => {
    const { form } = useSelector(resourceSelector);
    const {
        scales: {
            neutral: { N8A },
        },
    } = defaultTheme;

    return (
        <Pane
            position="absolute"
            right={0}
            top={60}
            backgroundColor={N8A}
            bottom={0}
            padding={16}
            display="flex"
            alignItems="flex-start"
        >
            <ResourcesList />
            <SideSheet isShown={form} onCloseComplete={() => null}>
                <ResourceForm />
            </SideSheet>
        </Pane>
    );
};
