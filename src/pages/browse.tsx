import React, { useState, useEffect } from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { FavoriteBtn } from '../components/FavoriteBtn';
import { signIn, useSession } from 'next-auth/client';
import { Button, Note, Page, Row, Col, Input, Divider, Toggle, Modal, useToasts, useModal } from '@geist-ui/react';
import { ArrowLeft, ArrowRight } from '@geist-ui/react-icons';
import axios from 'axios';

/**
 * formats the field name so it's not written like a variable
 * @param {string} f the field name, ex: 'full_name'
 * @returns {string} broken down and formatted filed name, ex: 'Full Name'
 */
// const formatFieldName = (f) => {
//   f = f.split('_');
//   for (let i = 0; i < f.length; i++) {
//     f[i] = f[i][0].toUpperCase() + f[i].substr(1);
//   }
//   return f.join(' ');
// };

/**
 * Browse page container
 * @returns {ReactNode} Browse page
 */
const Browse = (): React.ReactNode => {
  // session info containing info about the signed in user
  const [session, loading] = useSession();
  if (loading) return <></>;
  const [completeUserData, setCompleteUserData] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [placeholderInfo, setPlaceholderInfo] = useState({});
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState({ _id: '', code: '', designer: '', downloads: 0, requiredFields: [] });
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(-1);
  const { setVisible: setSignInModalVisible, bindings: signInModalVisiblebindings } = useModal();
  const activateSignInModal = () => setSignInModalVisible(true);
  const [templateEdit, setTemplateEdit] = useState(false);
  const [, setToast] = useToasts();
  const launchSuccessToast = (msg) => setToast({ text: msg, type: 'success', delay: 3000 });
  const launchFailToast = (msg) => setToast({ text: msg, type: 'error', delay: 3000 });
  const launchBasicToast = (msg) => setToast({ text: msg, type: 'default', delay: 5000 });

  /**
   * updates the template by the increment value
   * i == 1 will load the next template
   * i == -1 will load the previous template
   * @param {int} i increment value
   */
  const changeTemplate = (i) => {
    if (i == -1 && currentTemplateIndex == 0) setCurrentTemplateIndex(templates.length - 1);
    else if (i == 1 && currentTemplateIndex == templates.length - 1) setCurrentTemplateIndex(0);
    else setCurrentTemplateIndex(currentTemplateIndex + i);
  };

  /**
   * updates the user's info based on the variable changed
   * @param {event} e event variable
   */
  const updateField = (e) => {
    const field = e.target.name;
    const updatedUserInfo = JSON.parse(JSON.stringify(userInfo));
    updatedUserInfo[field] = e.target.value;
    setUserInfo(updatedUserInfo);
  };

  /**
   * if a user's info is a link, modifies it to make it a valid link
   * @param {string} property user's property
   */
  const checkAndModify = (property) => {
    const e = document.getElementById(property);
    if (e) {
      e.innerHTML = userInfo[property];
      if (e.tagName == 'A') {
        e['rel'] = 'noopener';
        if (property == 'email_address') e['href'] = `mailto:${userInfo[property]}`;
        else e['href'] = `https://${userInfo[property]}`;
      }
    }
  };

  /**
   * sends a user a positive/negative notification
   * @param  {bool} intent good or bad
   * @param {string} msg message to send as a notification
   */
  const sendNotification = (intent, msg) => {
    if (intent) launchSuccessToast(msg);
    else launchFailToast(msg);
  };

  /**
   * increments the template download count of the current template by 1
   */
  const incrementTemplateDownloadCount = () => {
    fetch('/api/templates', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ template: currentTemplate })
    })
      .then((response) => response.json())
      .then((data) => {
        sendNotification(data.success, data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  /**
   * updates the user's info in the database
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
        sendNotification(data.success, data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  /**
   * creates a html file containing the resume's source code and downloads it for the user
   */
  function download_html() {
    const filename = 'resume_html.html';
    const html_content = document.getElementById('code-output').innerHTML;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html_content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  /**
   * allows the user to print/download their resume through the browser
   */
  const printPDF = () => {
    const resumeElement = document.getElementById('code-output');
    incrementTemplateDownloadCount();

    // method 1: no api, just let the browser print
    const raw_html = resumeElement.innerHTML;
    const w = window.open();
    w.document.write(raw_html);
    w.window.print();
    w.document.close();
  };

  /**
   * Generates and downloads the pdf created using the template output
   * multiple ways to do this, but currently just sending a request
   * to my own html2pdf api comtaining the code to be converted.
   */
  const generatePDF = async () => {
    launchBasicToast('Generating PDF...');
    if (document) {
      const resumeElement = document.getElementById('code-output');

      // method 2: use html-pdf-node to generate pdf
      try {
        const data = await axios({
          method: 'POST',
          url: 'https://html2pdfapi.herokuapp.com/',
          // url: 'http://localhost:8000/',
          headers: {
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*'
          },
          data: {
            raw_html: encodeURIComponent(resumeElement.innerHTML),
            pageHeight: resumeElement.offsetHeight
          },
          responseType: 'blob'
        });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(data.data);
        link.download = 'resuville.pdf';
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(link.href), 7000);
        incrementTemplateDownloadCount();
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * when the page loads
   * fetch the user's info and all templates from the database
   */
  useEffect(() => {
    const fetchData = async () => {
      const userInfoRes = await fetch('/api/userinfo');
      const userData = await userInfoRes.json();

      const templates = await fetch('/api/templates');
      const templatesJson = await templates.json();

      if (userData) {
        setCompleteUserData(userData);
        setUserInfo(userData.data);
        setPlaceholderInfo(userData.placeholderInfo);
        setTemplates(templatesJson.templates);
      }
    };
    if (document) fetchData();
  }, []);

  /**
   * when the templates load
   * set the template at index 0 as the first template
   */
  useEffect(() => {
    if (templates.length > 0) {
      setCurrentTemplateIndex(0);
    }
  }, [templates]);

  /**
   * when the template index is changed
   * update the template being used
   */
  useEffect(() => {
    if (currentTemplateIndex > -1) setCurrentTemplate(templates[currentTemplateIndex]);
  }, [currentTemplateIndex]);

  /**
   * when the current template or the user info is changed
   * update the visible template accordingly
   */
  useEffect(() => {
    if (document.getElementById('code-output')) {
      document.getElementById('code-output').innerHTML = currentTemplate['code'];
      Object.keys(userInfo).forEach((p) => {
        checkAndModify(p);
      });
    }
  }, [currentTemplate, userInfo]);

  return (
    <>
      <Mheader title="Browse" />
      <Mnavbar theme="light" page="Browse" />
      <Page className="browse-page-container">
        <Note label={false} style={{ margin: '40px 0' }}>
          <h4>Resubae offers several unique templates for users to use for FREE.</h4>
          On this page, you can browse through our collection of templates with your information on them. You may choose to temporarily edit your information or create an account with us to save it
          permaently! Turning on template edit allows you to further customize any part of the template just by clicking on it. When downloading your resume, please try the different options in case
          one doesn&apos;t work.
        </Note>
        <Row className="browse-row-container" style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Col className="user-data-col" span={5}>
            <h3>
              Your data:
              {session && (
                <Button size="small" type="secondary" onClick={updateUserDataDB} style={{ float: 'right' }}>
                  Save Profile
                </Button>
              )}
            </h3>
            <Divider></Divider>
            <div className="data-inputs-container">
              {currentTemplate.requiredFields.map((f, i) => (
                <Input key={`req-field-${f}-${i}`} label={f} name={f} placeholder={placeholderInfo[f]} initialValue={userInfo[f]} onChange={(e) => updateField(e)} className="user-data-field" />
              ))}
            </div>
          </Col>
          <Col className="resume-col">
            <Row style={{ justifyContent: 'space-between' }}>
              <Col>
                Designer: <b>@{currentTemplate.designer}</b>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                Downloads: <b>{currentTemplate.downloads}</b>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'space-between', margin: '15px 0' }}>
              <Col style={{ display: 'flex', alignItems: 'center' }}>
                <Toggle size="large" style={{ padding: '0', marginRight: '5px' }} onChange={() => setTemplateEdit(!templateEdit)} /> Template Edit
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <div>
                  <Button auto type="secondary" ghost style={{ marginRight: '5px' }} onClick={() => changeTemplate(-1)} icon={<ArrowLeft />}></Button>
                  <Button auto type="secondary" ghost style={{ marginLeft: '5px' }} onClick={() => changeTemplate(1)} icon={<ArrowRight />}></Button>
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <FavoriteBtn
                  userInfo={typeof completeUserData != 'undefined' ? completeUserData : {}}
                  templateId={currentTemplate._id}
                  updateUserFunc={setCompleteUserData}
                  requestSignInFunc={activateSignInModal}
                />
              </Col>
            </Row>
            <div style={{ background: 'white', boxShadow: '11px 11px 22px #bfbfbf, -11px -11px 22px #ffffff', width: '1030px' }}>
              <div id={`code-output`} style={{ width: '1030px', maxHeight: '1327px' }} contentEditable={templateEdit}></div>
            </div>
            <Row style={{ margin: '25px 0', justifyContent: 'space-between' }}>
              <Button type="secondary" auto onClick={() => generatePDF()}>
                Download PDF
              </Button>
              <Button type="secondary" auto onClick={() => printPDF()}>
                Print PDF
              </Button>
              <Button type="secondary" auto onClick={() => download_html()}>
                Download HTML
              </Button>
            </Row>
          </Col>
        </Row>
        <Modal {...signInModalVisiblebindings}>
          <Modal.Title>Sign in</Modal.Title>
          <Modal.Subtitle>Please sign up to favorite templates</Modal.Subtitle>
          <Modal.Action passive onClick={() => setSignInModalVisible(false)}>
            Cancel
          </Modal.Action>
          <Modal.Action onClick={() => signIn('auth0')}>Sign in</Modal.Action>
        </Modal>
      </Page>
      <MFooter />
    </>
  );
};

export default Browse;
