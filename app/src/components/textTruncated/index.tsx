import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'evergreen-ui';

/**
 * Simple component that display truncated text with an ellipsis
 * if the string gets cut out.
 *
 * @param text The text to truncate, don't pass children
 * @param length The length to truncate it to
 * @param disable Flag to disable truncation
 * @constructor
 */
export const TextTruncated = ({ text, length, disable }) => {
    if (!disable) {
        return <Text>{text.substring(0, length) + (text.length > length ? '...' : '')}</Text>;
    }
    return <Text>{text}</Text>;
};

TextTruncated.propTypes = {
    text: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    disable: PropTypes.bool,
};
