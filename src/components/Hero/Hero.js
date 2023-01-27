import './Hero.scss';


const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__content'> 
            <h1 className='hero__title'> Welcome! </h1>
            <h1 className='hero__title-tablet'> Welcome to 
                <span className='hero__title--main'> Main Build Investment Inc! </span> 
            </h1>
        </div>
    </section>

  )
}

export default Hero