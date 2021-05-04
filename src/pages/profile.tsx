import React, { useState, useEffect } from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { Errpage } from '../components/Errpage';
import { TemplateCard } from '../components/TemplateCard';
import { useSession } from 'next-auth/client';
import { signOut } from 'next-auth/client';
import { Page, Tabs, Button, Input, Row, Note } from '@geist-ui/react';
import { Database, Settings, Heart } from '@geist-ui/react-icons';

const formatFieldName = (f) => {
  f = f.split('_');
  for (let i = 0; i < f.length; i++) {
    f[i] = f[i][0].toUpperCase() + f[i].substr(1);
  }
  return f.join(' ');
};

const Profile = (): React.ReactNode => {
  const [session, loading] = useSession();
  const [completeUserData, setCompleteUserData] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [placeholderInfo, setPlaceholderInfo] = useState({});
  const [favTemplates, setFavTemplates] = useState([]);

  /**
   * get info about the user from the DB
   */
  const updateUserDataDB = () => {
    const data = { userInfo: userInfo };

    fetch('/api/userinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('updated user', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  /**
   * delete the currently logged in user's resubae account
   */
  const deleteAccount = () => {
    fetch('/api/userinfo', {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('deleted user', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    signOut();
  };

  /**
   * update the field according to user's input
   * @param e field to be updated
   */
  const updateField = (e) => {
    const field = e.target.name;
    const updatedUserInfo = JSON.parse(JSON.stringify(userInfo));
    updatedUserInfo[field] = e.target.value;
    setUserInfo(updatedUserInfo);
  };

  /**
   *
   * @param templateList fetch info regarding the user's liked templates
   */
  const loadFavoriteTemplates = async (templateList) => {
    fetch(`/api/template/data?ids=${templateList.join(',')}`, {
      method: 'get'
    })
      .then((response) => response.json())
      .then((data) => {
        setFavTemplates(data);
      })
      .catch((e) => console.log(e));
  };

  /**
   * when the page loads
   * fetch the user's info and set all variables
   */
  useEffect(() => {
    const fetchData = async () => {
      const userInfoRes = await fetch('/api/userinfo');
      const userInfoJson = await userInfoRes.json();

      if (userInfoJson) {
        setCompleteUserData(userInfoJson);
        setUserInfo(userInfoJson.data);
        setPlaceholderInfo(userInfoJson.placeholderInfo);
        loadFavoriteTemplates(userInfoJson.liked_templates);
      }
    };
    if (document) fetchData();
  }, []);

  useEffect(updateUserDataDB, [userInfo]);

  if (typeof window !== 'undefined' && loading) return null;

  // if user is not logged in, display error page
  if (!loading && !session) return <Errpage />;

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
            <Row style={{ flexWrap: 'wrap', gap: '10px 30px' }}>
              {Object.keys(userInfo).map((f, i) => (
                <Input
                  style={{ margin: 'auto 10px' }}
                  key={`req-field-${f}-${i}`}
                  label={f}
                  name={f}
                  placeholder={placeholderInfo[f]}
                  initialValue={userInfo[f]}
                  onChange={(e) => updateField(e)}
                  className="user-data-field"
                />
              ))}
            </Row>
          </Tabs.Item>
          <Tabs.Item
            label={
              <>
                <Heart /> Favorite Templates{' '}
              </>
            }
            value="2">
            {favTemplates.length == 0 && (
              <Note label={false} type="error" filled style={{ margin: '10px 0' }}>
                You have no favorite templates yet.
              </Note>
            )}
            {favTemplates.length > 0 && (
              <div style={{ margin: '10px 0' }}>
                {favTemplates.map((ft, i) => (
                  <TemplateCard key={`template-card-${i}`} info={ft} userInfo={completeUserData} updateUserFunc={setCompleteUserData} />
                ))}
              </div>
            )}
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
            <Button onClick={deleteAccount} type="error-light">
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
