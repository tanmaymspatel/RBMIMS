import Link from 'next/link'
import IntegrationAnimation from './IntegrationAnimation'

const Integration = () => {
  return (
    <section className="bg-white pb-150  dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="section-tagline">Top Integration</p>

          <h2 className="mb-8">Seamless Integration with Existing Tools</h2>
          <p className="mb-10">
            RBMIMS connects with GIS tools, document repositories, government APIs, and more — simplifying your digital
            transformation.
          </p>

          <Link href="/contact" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
        <IntegrationAnimation />
      </div>
    </section>
  )
}

export default Integration
