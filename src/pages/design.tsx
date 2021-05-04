import React, { useState, useEffect } from 'react';
import { Button, Note, Page, Row, Col, Snippet, Textarea } from '@geist-ui/react';
import { MFooter } from '../components/MFooter';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { Errpage } from '../components/Errpage';
import { useSession } from 'next-auth/client';

const Design = (): React.ReactNode => {
  const [session, loading] = useSession();
  const [user, setUser] = useState({});
  const [defaultTemplate, setDefaultTemplate] = useState(``);
  const [code, setCode] = useState(``);

  /**
   * loads a sample template code into the editor
   */
  const loadSampleCode = () => {
    document.getElementsByTagName('textarea')[0].value = defaultTemplate;
    setCode(defaultTemplate);
  };

  /**
   * if a user's info is a link, modifies it to make it a valid link
   * @param {string} property user's property
   */
  const checkAndModify = (property) => {
    const e = document.getElementById(property);
    if (e) {
      e.innerHTML = user[property];
      if (e.tagName == 'A') {
        if (property == 'email_address') e['href'] = `mailto:${user[property]}`;
        else e['href'] = `https://${user[property]}`;
      }
    }
  };

  /**
   * when the template code is changed
   * update the template in the resume container
   */
  useEffect(() => {
    if (document && session) {
      document.getElementById('code-output').innerHTML = code;
      const properties = Object.keys(user);
      properties.forEach((p) => {
        checkAndModify(p);
      });
    }
  }, [code]);

  /**
   * when the page loads
   * fetch the user's info and templates
   */
  useEffect(() => {
    const fetchData = async () => {
      const userInfoRes = await fetch('/api/userinfo');
      const userInfoJson = await userInfoRes.json();

      const templates = await fetch('/api/templates');
      const templatesJson = await templates.json();

      if (userInfoJson) {
        setUser(userInfoJson.placeholderInfo);
        setDefaultTemplate(templatesJson.templates[0].code);
      }
    };
    if (document) fetchData();
  }, []);

  /**
   * sends a user a positive/negative notification
   * @param  {bool} intent good or bad
   * @param {string} msg message to send as a notification
   */
  const sendNotification = (intent, msg) => {
    console.log(intent, msg);
  };

  /**
   * submit the currently created template
   */
  const submitNewTemplate = () => {
    fetch('/api/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        templateCode: encodeURIComponent(code)
      })
    })
      .then((response) => response.json())
      .then((data) => {
        sendNotification(data.success, data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // if user is not logged in, show the error page
  if (!loading && !session) return <Errpage />;

  // jsx for the page
  return (
    <>
      <Mheader title="Design" />
      <Mnavbar theme="light" page="Design" />
      <Page className="browse-page-container">
        <Note label={false} style={{ margin: '40px 0' }}>
          <h4>Resubae would not be possible without all the contributors who took the time and effort to design all our unique templates for free.</h4>
          On this page, we provide you with sample data and a code area where you can design your own template using html and css. You can view your designed template right below filled with the
          sample data. Once you are satisfied with the looks of the template, please feel free to submit it so others can use it!
        </Note>
        <Row className="browse-row-container" style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Col className="sample-data-col" span={5}>
            <Note label={false}>
              <h3 style={{ margin: '0' }}>Sample Data</h3>
            </Note>
            <Snippet type="dark" symbol="" text={JSON.stringify(user, null, 2)} style={{ maxHeight: '1600px', overflow: 'scroll' }} />
          </Col>
          <Col className="resume-col">
            <Row style={{ justifyContent: 'space-between' }}>
              <Button type="secondary-light" onClick={loadSampleCode}>
                Load Sample Template
              </Button>
              <Button type="warning-light" onClick={submitNewTemplate}>
                Submit Template
              </Button>
            </Row>
            <br />
            <Textarea width="100%" minHeight="250px" resize="vertical" onChange={(e) => setCode(e.target.value)} placeholder={`<h1>Start writing code here:</h1> <h2 id="full_name"></h2>`} />
            <br />
            <br />
            <div style={{ background: 'white', boxShadow: '11px 11px 22px #bfbfbf, -11px -11px 22px #ffffff', width: '1030px' }}>
              <div id={`code-output`} style={{ width: '1030px', height: '1327px' }}></div>
            </div>
          </Col>
        </Row>
      </Page>
      <MFooter />
    </>
  );
};

export default Design;
