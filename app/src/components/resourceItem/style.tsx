import styled from 'styled-components';
import { Pane, defaultTheme } from 'evergreen-ui';
const {
    scales: {
        neutral: { N7A },
    },
} = defaultTheme;

export const TruncatedPane = styled(Pane)`
    position: relative;
    overflow: hidden;

    &:after {
        content: ' ';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: auto;
        width: 36px;
        background-image: linear-gradient(to left, white, transparent);
        overflow: hidden;
    }
`;
