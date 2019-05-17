import React from 'react';

function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        This checklist started as a little project of mine in my journey to
        learn web developement with React. There are similar checklists in the
        wild such as Zachary Kjellberg's{' '}
        <a
          href="https://zkjellberg.github.io/bloodborne-cheat-sheet/"
          target="_blank"
          rel="noopener noreferrer">
          Bloodborne Cheat Sheet
        </a>
        , though I found none for Sekiro so I decided to make one. I hope
        someone might find it useful in their playthrough of Sekiro.
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
