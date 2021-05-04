import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Page } from '@geist-ui/react';
import { Mnavbar } from '../../components/Mnavbar';
import { MFooter } from '../../components/MFooter';

const User = (): React.ReactNode => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Mnavbar theme="light" page="Other" />
      <Page>
        {username}
      </Page>
      <MFooter />
    </>
  );
};

export default User;