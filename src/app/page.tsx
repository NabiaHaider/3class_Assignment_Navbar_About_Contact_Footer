

import Link from "next/link";
export default function Home() {
  return (
    <div
    style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center',
      minHeight:'100vh',
      backgroundColor:'lightgreen',
      color:'purple'
    }}>
      <h1
      style={{
          textAlign:'center',
          fontSize:'300%',
          marginTop:'20px'
      }}>This is Home Page</h1><br /><br />
      <Link href='./navbar'>Go to Navbar</Link><br />
      <Link href='./about'>Go to About</Link><br />
      <Link href='./contect-us'>Go to Contect us</Link><br />
      <Link href='./footer'>Go to Footer</Link>
   </div>
  )
}