import Image from 'next/image'

export function HeroBlock() {
  return (
    <div className='hero-block'>
      <Image src='/images/general/logo.png' alt='logo' width={200} height={200} className='h-fit' />
      <h1 className='hero-block-title'>Welcome Next Generation AI Code</h1>
      <span className='hero-block-text'>
        I&apos;m enthusiast AI next generation code, I&apos;m here to help you with your projects, ideas and more.
      </span>
    </div>
  )
}