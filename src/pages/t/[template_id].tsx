import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { Mnavbar } from '../../components/Mnavbar';
import { MFooter } from '../../components/MFooter';
import { Input, Page, Button, useToasts, Collapse, Tag } from '@geist-ui/react';
import { updateUserDataDB, loadAllUserData, printPDF, downloadHtml, loadDBTemplateData, modifyFavoriteTemplates } from '../../components/Helper';
import { allTemplateInfo, getTemplate } from '../../components/Templates';
import { useRouter } from 'next/router';
import ConfigInputs from '../../components/ConfigInputs';
import { Heart, HeartFill } from '@geist-ui/react-icons';

export const Template = () => {
  const router = useRouter();
  const { template_id } = router.query;
  const [templateId, setTemplateId] = useState('1');
  const [session, loading] = useSession();
  const [, setToast] = useToasts();
  const [templateDBInfo, setTemplateDBInfo] = useState({});

  const templateInfo = allTemplateInfo[templateId].about;

  const [config, setConfig] = useState({
    pageHeight: '',
    pageWidth: '',
    verticalMargin: '',
    horizontalMargin: '',
    regularFont: 'Roboto',
    regularFontSize: '12pt',
    regularFontWeight: '300',
    boldFontWeight: '500',
    headingFont: 'Roboto',
    headingFontSize: '16pt',
    listConfig: { display: 'list-item', listStyleType: `"\\2014"`, paddingInlineStart: '1ch', marginBottom: '0', lineHeight: '1.5' },
    userInfo: {}
  });
  const updateConfig = (key, val) => setConfig({ ...config, [key]: val });

  const [templateEdit, setTemplateEdit] = useState(false);
  const [fieldInputs, setFieldInputs] = useState([]);
  const [allUserData, setAllUserData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const updateUserInfoField = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  /**
   * when the page loads
   * fetch the user's info and all templates from the database
   */
  useEffect(() => {
    loadAllUserData(templateInfo, setAllUserData, setUserInfo);
  }, []);

  /**
   * When userInfo is loaded, update all field values
   */
  useEffect(() => {
    setFieldInputs(templateInfo.fields.map((fName, i) => <Input key={`req-field-${i}`} name={fName} placeholder={fName} initialValue={userInfo[fName]} onChange={(e) => updateUserInfoField(e)} />));
    updateConfig('userInfo', userInfo);
  }, [userInfo]);

  useEffect(() => {
    typeof template_id !== 'undefined' && template_id.toString() in allTemplateInfo ? setTemplateId(template_id.toString()) : setTemplateId('1');
  }, [template_id]);

  useEffect(() => {
    loadDBTemplateData(templateId, setTemplateDBInfo);
  }, [templateId]);

  return (
    <>
      <Mnavbar theme="light" page="Other" />
      <Page className="template-page">
        <div className="all-inputs-container">
          <ConfigInputs config={config} updateConfig={updateConfig} />
          <br />
          <Collapse shadow title="Your Profile Data" subtitle="Change to update the template">
            {session && (
              <Button size="small" type="secondary" onClick={() => updateUserDataDB(allUserData, userInfo, setToast)}>
                Save Profile
              </Button>
            )}
            <br />
            <br />
            <div className="field-inputs-container">{fieldInputs}</div>
          </Collapse>
        </div>
        <div>
          <div className="flex-wrap-container">
            {Object.keys(allUserData).length > 0 && templateId in allUserData['liked_templates'] ? (
              <Button
                onClick={() => modifyFavoriteTemplates(false, templateId, allUserData, setAllUserData, templateDBInfo, setTemplateDBInfo, setToast)}
                iconRight={<HeartFill color="red" />}
                auto
                size="small">
                {templateDBInfo['likes']}
              </Button>
            ) : (
              <Button onClick={() => modifyFavoriteTemplates(true, templateId, allUserData, setAllUserData, templateDBInfo, setTemplateDBInfo, setToast)} iconRight={<Heart />} auto size="small">
                {templateDBInfo['likes']}
              </Button>
            )}
            <Tag type="lite" style={{ height: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0.9rem' }}>
              Downloads: {templateDBInfo['downloads']}
            </Tag>
          </div>
          <br />
          <div style={{ background: 'white', boxShadow: '11px 11px 22px #bfbfbf, -11px -11px 22px #ffffff', width: '1030px', height: 'max-content' }}>
            <div style={{ width: '1030px', maxHeight: '1327px' }} contentEditable={templateEdit}>
              {getTemplate(templateId, config)}
            </div>
          </div>
          <br />
          <div className="flex-wrap-container" style={{ justifyContent: 'right' }}>
            <Button size="small" type="secondary" onClick={() => printPDF(templateDBInfo, setTemplateDBInfo, setToast)}>
              Print PDF
            </Button>
            <Button size="small" type="secondary" onClick={downloadHtml}>
              Download HTML
            </Button>
          </div>
        </div>
      </Page>
      <MFooter />
    </>
  );
};

export default Template;
