import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { Input, Page, Button, useToasts, Collapse, Tag } from '@geist-ui/react';
import { updateUserDataDB, loadAllUserData, printPDF, downloadHtml, loadDBTemplateData, modifyFavoriteTemplates, loadNewTemplate } from '../components/Helper';
import { allTemplateInfo, getTemplate } from '../components/Templates';
import { useRouter } from 'next/router';
import ConfigInputs from '../components/ConfigInputs';
import { ArrowLeft, ArrowRight, Heart, HeartFill } from '@geist-ui/react-icons';
import { defaultTemplateAbout, defaultTemplateConfig, defaultTemplateDBInfo } from '../components/Constants';
import { DirectEditBtn } from '../components/DirectEditBtn';
import { Mheader } from '../components/Mheader';

export const Template = () => {
  const router = useRouter();
  const { template_id } = router.query;
  const [templateId, setTemplateId] = useState('1');
  const [session, loading] = useSession();
  const [, setToast] = useToasts();
  const [templateDBInfo, setTemplateDBInfo] = useState(defaultTemplateDBInfo);
  const [templateInfo, setTemplateInfo] = useState(defaultTemplateAbout);
  const [resumePageScale, setResumePageScale] = useState(1);

  const [config, setConfig] = useState(defaultTemplateConfig);
  const updateConfig = (key, val) => setConfig({ ...config, [key]: val });

  const [templateEdit, setTemplateEdit] = useState(false);
  const [fieldInputs, setFieldInputs] = useState([]);
  const [allUserData, setAllUserData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const updateUserInfoField = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  /**
   * when the template changes load all data accordingly
   */
  useEffect(() => {
    loadAllUserData(templateInfo, setAllUserData, setUserInfo);
  }, [templateInfo]);

  /**
   * When userInfo is loaded, update all field values
   */
  useEffect(() => {
    setFieldInputs(
      templateInfo.fields.map((fName, i) => (
        <div key={`req-field-inp-key-${i}`} className="req-field-inp-container">
          <Input key={`req-field-${i}`} name={fName} placeholder={fName} initialValue={userInfo[fName]} onChange={(e) => updateUserInfoField(e)} />
          <span className="req-field-title">{fName}</span>
        </div>
      ))
    );
    updateConfig('userInfo', userInfo);
  }, [userInfo]);

  useEffect(() => {
    typeof template_id !== 'undefined' && template_id.toString() in allTemplateInfo ? setTemplateId(template_id.toString()) : setTemplateId('1');
  }, [template_id]);

  useEffect(() => {
    setTemplateInfo(allTemplateInfo[templateId].about);
    setConfig(allTemplateInfo[templateId].defaultConfig);
    loadDBTemplateData(templateId, setTemplateDBInfo);
  }, [templateId]);

  const calculatePageScale = () => {
    typeof document !== 'undefined' && document.getElementsByTagName('html')[0].clientWidth > config.pageWidth + 60
      ? setResumePageScale(1)
      : setResumePageScale((document.getElementsByTagName('html')[0].clientWidth - 60) / config.pageWidth);
  };
  useEffect(() => {
    if (window) window.onresize = calculatePageScale;
    if (document) calculatePageScale();
  }, []);

  return (
    <>
      <Mheader title="Templates" />
      <Mnavbar theme="light" page="Other" />
      <Page className="template-page">
        <div className="all-inputs-container">
          <ConfigInputs config={config} updateConfig={updateConfig} templateId={`1`} />
          <br />
          <Collapse shadow initialVisible={true} title="Your Profile Data" subtitle="Change to update the template">
            {session && (
              <>
                <Button size="small" name="save-profile" type="secondary" onClick={() => updateUserDataDB(allUserData, userInfo, setToast)}>
                  Save Profile
                </Button>
                <br />
                <br />
              </>
            )}
            <div className="field-inputs-container">{fieldInputs}</div>
          </Collapse>
        </div>
        <div style={{ minWidth: '500px', position: 'sticky', minHeight: '200px', background: 'powderblue', alignSelf: 'start', top: '5%', overflow: 'auto' }}></div>
      </Page>
      <MFooter />
    </>
  );
};

export default Template;
