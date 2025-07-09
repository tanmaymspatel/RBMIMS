import ContactInfo from '@/components/contact/ContactInfo'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import ContactForm from '@/components/shared/ContactForm'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact',
}

const page = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="GET IN TOUCH"
          title="Contact our help desk <br/> for assistance"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <ContactInfo />
        <ContactForm />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default page
