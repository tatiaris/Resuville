import React from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { Button, Display, Image, Link, Divider, Page, Note } from '@geist-ui/react';
import { signIn, useSession } from 'next-auth/client';

const Home = (): React.ReactNode => {
  const [session] = useSession();
  return (
    <>
      <Mheader title="Home" />
      <Mnavbar theme="light" page="Home" />
      <Page>
        <h3>Get Started</h3>
        Simply head over to the{' '}
        <Link href="/browse" color>
          Browse
        </Link>{' '}
        page, and check out all the templates we offer. Once you&apos;ve found a template that you like, start modifying the required relevant information to your satisfaction. Download the reesume
        once ready!
        <br />
        <br />
        <Image.Browser url="https://resuville.com/browse" showFullLink invert>
          <Image width={540} height={246} style={{ objectFit: 'cover' }} src="/img/get_started.png" />
        </Image.Browser>
        <br />
        <br />
        <h3>
          Sign-up / Sign-in{' '}
          {!session && (
            <Button type="success-light" onClick={() => signIn('auth0')} style={{ float: 'right' }}>
              Sign Up
            </Button>
          )}
        </h3>
        If you&apos;d like our system to remember your information, make sure to sign-in when building your resume. This is highly recommended as it makes it easy for you to change templates within
        seconds whenever you&apos;d like.
        <br /><br/>
        <h3>Donate</h3>
        Resuville currently has no ads and is free to use. Any donations would significantly help keep the website running. If you&apos;d like to support this project, I&apos;d be very grateful if you
        could{' '}
        <Link href="/profile" color>
          Buy me a Coffee
        </Link>
        !
      </Page>
      <MFooter />
    </>
  );
};

export default Home;
