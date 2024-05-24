import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';

const App = () => {
 
  return (
   <BrowserRouter>
   <div className='relativez-0 bg-primary min-h-screen'>
      <div className=' relative bg-backdrop-banner bg-cover bg-no-repeat bg-bottom-25'>
        <Navbar/>
        <Hero/>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
   </div>
   <ToastContainer />
   </BrowserRouter>
  )
}

export default App
