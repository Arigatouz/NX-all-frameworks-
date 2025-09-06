import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './qwik.scss?inline';

export const Qwik = component$(() => {
  useStylesScoped$(styles);

  return <>Qwik works!</>;
});
