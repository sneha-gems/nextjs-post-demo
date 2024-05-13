'use client'
export default function Layout({ children }) {
    return (
        <html>
            <body>
        <div class="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
        <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
              
  
              {children}
            </div>
            </body>
          </html>
    );
  }