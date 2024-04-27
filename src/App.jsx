import './style.css'


function App() {
  return (
    <>
  
      {/* My tunes section */}
      <section className='header bg-cover bg-center'>
        <div className='sec-1 text-center text-white'>
          <h2 className='text-6xl font-bold'>myTunes.</h2>
          <h4 className='text-3xl mt-10 font-semibold'>Your music, movies, and TV shows take center stage</h4>
          <p className='container text-[20px] mt-6 mx-auto'>myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
        </div>
      </section>




      {/* music section */}
      <section>
        <div className='bg-[#252529] text-white text-center px-10 pt-10 pb-10'>
          <h2 className='text-5xl font-bold'> <img src="" alt="" /> Music</h2>
          <h3 className='text-[30px] mt-10 font-semibold'>50 million songs.Zero ads.</h3>
          <p className='text-[20px] mt-10 font-semibold sec-2'>Stream over 50 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.</p>
          <button className='bg-[#b90415] px-4 py-4 hover:bg-red-600 mt-10'>Start Your Trial Now</button>
          <p className='mt-10'>Orange Music is available in myTunes, and for iOS and Android devices.</p>
          <img className='music-image mt-16' src="https://thomasmartin86.github.io/mytuneslanding/img/mockup1.png" alt="" />
        </div>
      </section>




      {/* TV collection section */}
      <section>
        <div className='text-center py-[5rem]'>
          <h3 className='text-4xl font-semibold'>The movie and TV collection you always wished for. Granted.</h3>
          <p className='mt-10 text-[18px] font-medium sec-2 sec-4'>With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes.1 And if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.</p>
          <button className='mt-10 px-5 py-5 text-white bg-[#103063] hover:bg-[#08357e]'>Learn More</button>
          <img className='mt-10 mx-auto' src="https://thomasmartin86.github.io/mytuneslanding/img/mockup2.png" alt="image" />
        </div>
      </section>




      {/* world entertainment section */}
      <section>
        <div className='text-center text-white sec-5 py-32'>
          <h4 className='font-bold text-4xl sec-4'>A world of entertainment. Available wherever you are.</h4>
          <p className='text-[20px] mt-10 sec-2 sec-4'>The myTunes Store is available on all your devices, which means you can buy that catchy song you just heard or rent that movie you’ve been meaning to see, anytime you want. And since your entire library of music, movies, and TV shows lives in myCloud, everything you buy is immediately available, no matter how you want to play it.</p>
        </div>
      </section>



      {/* card section */}
      <section>
        <div className='card-main py-16'>
          <img src="https://thomasmartin86.github.io/mytuneslanding/img/cards.png" alt="image" />
          <div>
            <h4 className='text-4xl mx-8'>Gift Card</h4>
            <p className='mt-10 text-[15px] mx-8'>Give friends and family an App Store & myTunes Gift Card and they can choose anything from the App Store, the myTunes Store, and Orange Books,2 or put it toward Orange Music subscriptions and myCloud storage plans. You can also give them an Orange Store Gift Card that can be used to buy Orange hardware and accessories at any Orange Store or at www.orange.com.

              Already have an App Store & myTunes or Orange Store Gift Card?
            </p>

          </div>
        </div>
      </section>




      {/* footer */}
      <footer className='footer'>
        <div class="text-white bg-[#252529] flex justify-evenly items-center py-10">
          <div class="">
            <h4 class="">Shop & Learn</h4>
            <ul class="mt-5"><hr />
              <li>Music</li>
              <li>Movies</li>
              <li>Shows</li>
              <li>Apps</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div class="">
            <h4 class="">Orange Store</h4>
            <ul class="mt-5"><hr />
              <li>Find a Store</li>
              <li>Today at Orange</li>
              <li>Orange Camp</li>
              <li>Financing</li>
              <li>Order Status</li>
            </ul>
          </div>

          <div class="">
            <h4 class="">Education & Business</h4>
            <ul class="mt-5"><hr />
              <li>Orange & Education</li>
              <li>Shop For College</li>
              <li>Orange & Business</li>
              <li>Shop For Business</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div class="">
            <h4 class="">About Orange</h4>
            <ul class="mt-5"><hr />
              <li>Newsroom</li>
              <li>Orange Leadership</li>
              <li>Investors</li>
              <li>Events</li>
              <li>Contact Orange</li>
            </ul>
          </div>
        </div>
      </footer>

      

      {/* ending */}
      <div>
          <p className='text-center text-white py-2 bg-[#555555]'>Copyright © 2018 Orange myTunes</p>
        </div>


      

    </>
  )
}

export default App