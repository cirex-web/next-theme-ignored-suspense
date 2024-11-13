import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider publishableKey="pk_test_YmVsb3ZlZC1jaGFtb2lzLTQzLmNsZXJrLmFjY291bnRzLmRldiQ">
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
