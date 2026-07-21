import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function PricingPage() {
  return (
    <>
      <main className='wrap pt-40 text-center max-[860px]:pt-[120px]'>
        <Eyebrow variant='blue' className='mx-auto mb-6 w-fit'>
          Pricing
        </Eyebrow>
        <h1 className='mx-auto mb-6 max-w-[760px] font-satoshi text-[44px] font-normal leading-[1.34] tracking-[-.5px] text-t-primary max-[860px]:text-[30px] max-[430px]:text-[26px]'>
          Pricing is on its way
        </h1>
        <p className='mx-auto mb-10 max-w-[622px] font-geist text-lg leading-[1.22] text-t-primary max-[860px]:text-base'>
          We&apos;re finalizing plans. In the meantime, reach out and we&apos;ll help you
          find the right fit.
        </p>
        <Link href='/'>
          <Button>Back to home</Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
