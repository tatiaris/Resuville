import React from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { Button, Display, Image, Link, Divider, Page } from '@geist-ui/react';
import { signIn, useSession } from 'next-auth/client';

const Home = (): React.ReactNode => {
  const [session] = useSession();
  return (
    <>
      <Mheader title="Home" />
      <Mnavbar theme="light" page="Home" />
      <Page>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
            <Image className="logo-img" style={{ margin: '0px' }} src="/logo.svg" width={200} alt=""></Image>
            <div style={{ margin: '0', paddingLeft: '30px', fontSize: '34px', lineHeight: '34px', fontWeight: 'bolder', textAlign: 'center', fontFamily: `"Times New Roman", Times, monospaced` }}>
              <div>E</div>
              <div>S</div>
              <div>U</div>
              <div>V</div>
              <div>I</div>
              <div>L</div>
              <div>L</div>
              <div>E</div>
            </div>
          </div>
          <div className="logo-about-section">
            <h3>About</h3> Resuville is a passion project created to make the process of building resumes as easy as possible, while providing the user with a large variety of elegant templates that
            can be heavily customized.
          </div>
        </div>
        <br />
        <br />
        <div className="content-about-section">
          <Divider />
          <h3>About</h3>
          Resuville is a passion project created to make the process of building resumes as easy as possible, while providing the user with a large variety of elegant templates that can be heavily
          customized.
          <br />
          <br />
        </div>
        <Divider />
        <h3>Get Started</h3>
        Simply head over to the{' '}
        <Link href="/browse" color>
          Browse
        </Link>{' '}
        page, and check out all the templates we offer. Once you&apos;ve found a template that you like, start modifying the required relevant information to your satisfaction. Download the resume
        once ready!
        <br />
        <br />
        <Image.Browser url="https://resuville.com/t/1" showFullLink invert>
          <Image width={540} height={260} style={{ objectFit: 'cover' }} src="/img/get_started.png" alt="" />
        </Image.Browser>
        <br />
        <br />
        <Divider />
        <h3>Sign-up / Sign-in</h3>
        If you&apos;d like our system to remember your information, make sure to sign-in when building your resume. This is highly recommended as it makes it easy for you to change templates within
        seconds whenever you&apos;d like.
        <br />
        <br />
        {!session && (
          <>
            <Button type="success-light" onClick={() => signIn('auth0')}>
              Sign Up
            </Button>
            <br />
            <br />
          </>
        )}
        <Divider />
        <h3>Donate</h3>
        Resuville currently has no ads and is free to use. Any donations would significantly help keep the website running. If you&apos;d like to support this project, please{' '}
        <Link href="https://buymeacoffee.com/tatiaris" target="_blank" rel="noopener noreferrer" color>
          buy me a coffee
        </Link>
        !
      </Page>
      <MFooter />
    </>
  );
};

export default Home;
