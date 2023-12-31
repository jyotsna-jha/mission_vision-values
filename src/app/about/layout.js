import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mission Vision and values",
  description:
    "Description of Mission vision and values available at Thapathali Campus IOE",
};
export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        
        <main>{children}</main>
      </body>
    </>
  );
}
