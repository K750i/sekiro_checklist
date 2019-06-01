import React from 'react';

function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        This checklist started as a side project that I did in my journey to
        learn web development with React. There are similar checklists available
        on the Internet such as Zachary Kjellberg's{' '}
        <a
          href="https://zkjellberg.github.io/bloodborne-cheat-sheet/"
          target="_blank"
          rel="noopener noreferrer">
          Bloodborne Cheat Sheet
        </a>
        , as well as for classics FromSoftware titles like Dark Souls and its
        sequels. I hope someone might find it useful and had fun using it in
        their playthrough of Sekiro.
      </p>
      <p>
        This checklist is hosted on GitHub and for anyone interested, here's the{' '}
        <a
          href="https://github.com/K750i/sekiro_checklist"
          target="_blank"
          rel="noopener noreferrer">
          repo
        </a>
        .
      </p>
    </>
  );
}

export default About;
