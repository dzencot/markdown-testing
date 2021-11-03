// @ts-check

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import MarkdownEditor from '../src/MarkdownEditor.jsx';

beforeAll(() => {
  // window.jQuery = jQuery;
  document.body.innerHTML = '<div id="container"></div>';
});

test('MarkdownEditor', () => {
  let value;
  const onContentChange = (v) => {
    value = v;
  };

  const container = document.getElementById('container');

  render(<div><MarkdownEditor onContentChange={onContentChange} /></div>, { container });
  const textarea = screen.getByRole('textbox');
  expect(textarea).toBeInTheDocument();
  const boldButton = screen.getByRole('button', { name: /bold/i });
  expect(boldButton).toBeInTheDocument();

  userEvent.click(boldButton);
  userEvent.type(textarea, 'l');
  expect(value).toBe('l');

  // userEvent.type(textarea, 'some text');
  // expect(value).toBe('lsome text');

  // userEvent.type(textarea, '1');
  // expect(value).toBe('lsome text1');
});
