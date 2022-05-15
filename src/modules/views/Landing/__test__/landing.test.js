import React from 'react';
import { render, screen } from 'testing-library/react';
import Landing from '../index';

test('renders landing component without crashing', () => {
    const div = document.createElement('div');
    render(<Landing />, div);
});
