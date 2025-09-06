import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Qwik } from './qwik';

test(`[Qwik Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Qwik />);
  expect(screen.innerHTML).toContain('Qwik works!');
});
