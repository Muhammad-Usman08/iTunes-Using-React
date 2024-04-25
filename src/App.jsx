import './style.css'


function App(){
  return(
    <>
      <nav className='navbar navbar-expand-lg mynavbar'>
        <div className='container flex justify-center pt-3 pb-3'>
          <h4 className='heading1'>myTunes</h4>
          <h4 className='heading1'>Overview</h4>
          <h4 className='heading1'>Music</h4>
          <h4 className='heading1'>Gift Card</h4>
          <h4 className='heading1'>Video</h4>
        </div>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
           
        </div>
      </nav>


      <section className='header bg-cover bg-center'>
        <div className='sec-1 text-center text-white'>
          <h2 className='text-6xl font-bold'>myTunes.</h2>
          <h4 className='text-3xl mt-10 font-semibold'>Your music, movies, and TV shows take center stage</h4>
          <p className='container text-[20px] mt-6 mx-auto'>myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
        </div>
      </section>
           
    </>
  )
}

export default App