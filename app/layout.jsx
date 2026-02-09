import './globals.css';

export const metadata = {
  title: 'Hacker Portfolio - Full Stack Developer',
  description: 'Full Stack Developer with cybersecurity expertise. Building secure, fast, and scalable applications.',
  keywords: 'developer, hacker, cybersecurity, full-stack, next.js',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
        <meta name="color-scheme" content="dark" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-hacker-darker text-hacker-accent">{children}</body>
    </html>
  );
}
