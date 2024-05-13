import Link from "next/link";

export default function Layout({ children }) {
  return (
    // <html lang="en">
    //   <body>
        <div className="flex justify-between px-4 mx-auto ">
          <card className="mx-auto w-full">
              <nav>
                  <Link href={'/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded">Posts List</Link>
              </nav>
            

            {children}
          </card>
        </div>
    //   </body>
    // </html>
  );
}
