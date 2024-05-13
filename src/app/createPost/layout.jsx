'use client'
import styles from  './form.css'

export default function Layout({ children }) {
    return (
        <html>
            <body>
        <div className="heading text-center font-bold text-2xl m-5 text-gray-300">New Post</div>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
              
  
              {children}
            </div>
            </body>
          </html>
    );
  }