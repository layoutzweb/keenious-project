import React from 'react';
import { Pane, TabNavigation, Tab, Heading, Icon } from 'evergreen-ui';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const { pathname: currentRoute } = useLocation();

    const tabs = [
        { path: '/', title: 'Documents' },
        { path: '/resources', title: 'Resources' },
    ];

    return (
        <Pane
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            paddingY={15}
            paddingX={46}
            elevation={2}
            background="white"
        >
            <Pane flex={1} alignItems="center" justifyContent="flex-start" height={30}>
                <Heading size={600}>
                    <Icon icon="flame" color="danger" size={20} height={24} marginRight={10} />
                    Keenious Project
                </Heading>
            </Pane>
            <Pane>
                <TabNavigation>
                    {tabs.map((tab, index) => (
                        <Tab key={tab.path} is="a" href={tab.path} id={tab.path} isSelected={currentRoute === tab.path}>
                            {tab.title}
                        </Tab>
                    ))}
                </TabNavigation>
            </Pane>
            <Pane flex={1}></Pane>
        </Pane>
    );
};
