// @ts-check
/* eslint-disable no-console */

import '@toast-ui/editor/dist/toastui-editor.css';

import ReactDOM from 'react-dom';
import React from 'react';

import MarkdownEditor from './MarkdownEditor.jsx';

ReactDOM.render(
  <MarkdownEditor onContentChange={console.log} />,
  document.getElementById('container'),
);
