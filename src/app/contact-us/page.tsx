'use client'
import { useRouter } from 'next/navigation'
function Contact() {
    const route = useRouter()
    return(
        <div 
        style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center',
          minHeight:'100vh',
          backgroundColor:'skyblue',
          color:'purple',
        }}>
            <h1
            style={{
                textAlign:'center',
                fontSize:'300%',
                marginTop:'20px'
            }}>Thanks for Contacting Us!</h1><br /><br />
            <button onClick={() => route.push('./')}>Go to Home Page</button><br />
            <button onClick={() => route.push('./navbar')}>Go to Navbar</button><br />
            <button onClick={() => route.push('./about')}>Go to About</button><br />
            <button onClick={() => route.push('./footer')}>Go to Footer</button>
     </div>
    );
}
export default Contact