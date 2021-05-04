import React, { useState, useEffect } from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { Errpage } from '../components/Errpage';
import { useSession } from 'next-auth/client';
import { signOut } from 'next-auth/client';
import { Page, Tabs, Button, Input, Row, Note } from '@geist-ui/react';
import { Database, Settings, Heart } from '@geist-ui/react-icons';

const Profile = (): React.ReactNode => {
  // jsx element returned
  return (
    <>
      <Mheader title="Profile" />
      <Mnavbar theme="light" page="Profile" />
      <Page style={{ margin: '25px auto' }}>
        <Tabs initialValue="1">
          <Tabs.Item
            label={
              <>
                <Database /> My Data
              </>
            }
            value="1">
            <Note label={false} type="secondary" filled style={{ margin: '10px 0' }}>
              Your data is automatically saved on this page.
            </Note>
          </Tabs.Item>
          <Tabs.Item
            label={
              <>
                <Settings /> Settings{' '}
              </>
            }
            value="3">
            <Note type="warning" filled style={{ margin: '10px 0' }}>
              This action is irreversible. You will be deleting your account and all your saved data on Resubae servers.
            </Note>
            <Button type="error-light">
              Delete my Account
            </Button>
          </Tabs.Item>
        </Tabs>
      </Page>
      <MFooter />
    </>
  );
};

export default Profile;
