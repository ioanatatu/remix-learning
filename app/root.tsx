import { LiveReload, Outlet } from '@remix-run/react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

type DocumentProps = {
  title?: string;
  children: React.ReactNode;
};
function Document({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : 'My remix learning app'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
