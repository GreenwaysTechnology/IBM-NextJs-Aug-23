


//meta data:
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// export default function AppLayout(props) {
//   //jsx
//   return <html lang="en">
//       <body>{props.children}</body>
//   </html>
// }
const RootLayout = ({ children }) => {
  return <html lang="en">
    <body>{children}</body>
  </html>
}
export default RootLayout;