import './style.css'


  function App(){
  return(
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='flex justify-center pt-3 pb-3 bg-[#333333]'>
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


      <section>
        <div className='bg-[#252529] text-white text-center px-10 pt-10'> 
          <h2 className='text-5xl font-bold'> <img src="" alt="" /> Music</h2>
          <h3 className='text-[30px] mt-10 font-semibold'>50 million songs.Zero ads.</h3>
          <p className='text-[20px] mt-10 font-semibold'>Stream over 50 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.</p>
          <button className='bg-[#b90415] px-4 py-4 hover:bg-red-600 mt-10'>Start Your Trial Now</button>
          <p className='mt-10'>Orange Music is available in myTunes, and for iOS and Android devices.</p>
          <img className='music-image mt-16' src="https://thomasmartin86.github.io/mytuneslanding/img/mockup1.png" alt="" />
        </div>
      </section>
           
    </>
  )
}

export default App