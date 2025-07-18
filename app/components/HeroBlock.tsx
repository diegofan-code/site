import Image from 'next/image'

export function HeroBlock() {
  return (
    <section className="flex flex-col items-center text-center gap-8 px-4 py-12 md:py-20">
      {/* Logo */}
      <Image
        src='/images/general/logo.png'
        alt='logo'
        width={200}
        height={200}
        className='h-fit'
      />

      {/* Text Content */}
      <div className="max-w-3xl w-full mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          🤖 Welcome to the Future of AI — Where Code Meets Thought.
        </h1>

        {/* Body Text */}
        <div className="text-lg sm:text-xl md:text-2xl leading-relaxed">
          <p className="mb-6">
            I&apos;m your guide in the world of AI, where building smart tools starts with thinking clearly, not just dragging and dropping. Whether you&apos;re a curious beginner, an ambitious creator, or a builder tired of surface-level solutions, I&apos;m here to help you bring your projects, ideas, and big questions to life with clarity, purpose, and a little brainpower.
          </p>

          <p className="font-semibold tracking-wide">
            Let&apos;s build the future not by skipping the thinking, but by mastering the how.
          </p>
        </div>
      </div>
    </section>
  )
}