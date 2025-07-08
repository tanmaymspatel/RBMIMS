import Link from 'next/link'
import HeroLine1 from '../icons/HeroLine1'
import HeroLine2 from '../icons/HeroLine2'
import HeroLine3 from '../icons/HeroLine3'
import Image from 'next/image'
import ccsstpLogo from '@/public/images/hero/ccsstp-logo.webp'

const Cta = () => {
  return (
    <section className="relative overflow-hidden bg-gray pb-[145px] pt-[135px] dark:bg-dark max-md:py-20">
      <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 max-md:hidden">
        <HeroLine1 />
      </div>
      <div className="absolute bottom-0 left-0 w-full max-md:hidden">
        <HeroLine2 />
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 md:hidden">
        <HeroLine3 />
      </div>
      <div className="container relative z-10">
        <div className="mx-auto text-center">
          <h2 className="mb-5 text-[48px] font-semibold max-lg:text-[32px]">
            Powered by <br />
            Cad Consultants and Services
          </h2>
          <p className="mx-auto mb-12 max-w-[800px] max-lg:mt-6">
            RBMIMS is an innovative digital platform developed by Cad Consultants and Services. Specialized in
            infrastructure and GIS solutions, the company brings deep domain expertise to streamline project management
            for public sector and government use.
          </p>
          <Link href="#" className="">
            <Image src={ccsstpLogo} alt="ccsstp Logo" className="w-full dark:hidden" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
