import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function ProductPage() {
  return (
    <>
      <main className='wrap pt-40 text-center max-[860px]:pt-[120px]'>
        <Eyebrow variant='blue' className='mx-auto mb-6 w-fit'>
          Product
        </Eyebrow>
        <h1 className='mx-auto mb-6 max-w-[760px] font-satoshi text-[44px] font-normal leading-[1.34] tracking-[-.5px] text-t-primary max-[860px]:text-[30px] max-[430px]:text-[26px]'>
          This page is coming soon
        </h1>
        <p className='mx-auto mb-10 max-w-[622px] font-geist text-lg leading-[1.22] text-t-primary max-[860px]:text-base'>
          We&apos;re putting together a deeper look at the product. Check back soon.
        </p>
        <Link href='/'>
          <Button>Back to home</Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
