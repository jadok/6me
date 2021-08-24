import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className="container">
    <header>
      Futur Logo
    </header>
    <nav>Navigation</nav>
    <main>
      {children}
    </main>
    <aside>Related links</aside>
    <footer>Footer</footer>
  </div>
);

export default Layout;
