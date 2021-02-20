/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

interface Attributes {
  'new-field': string;
}

interface ExampleProps {
  attrs: Attributes;
  attributes: Attributes;
}

/**
 * An example block component.
 *
 * @param {ExampleProps} props
 * @return {React.ReactElement} An example preview component.
 */
function Example(props: ExampleProps): React.ReactElement {
  const { attrs, attributes } = props;
  const blockAttributes = attrs || attributes;

  return (
    <div>
      <p>{__('This is an alternate preview component', 'headless-blocks')}</p>
      <p>
        {__(
          'Here is the value of the new-field attribute, if it exists:',
          'headless-blocks',
        )}
      </p>
      <p>{blockAttributes['new-field']}</p>
    </div>
  );
}

export default Example;
