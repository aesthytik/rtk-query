/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import '@testing-library/jest-dom';
import React from 'react';

import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('Feature component', () => {
  it('should render Feature component correctly', () => {
    render(<Title />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
