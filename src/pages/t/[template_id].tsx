import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { Mnavbar } from '../../components/Mnavbar';
import { MFooter } from '../../components/MFooter';
import { Input, Page, Button, useToasts, Select } from '@geist-ui/react';
import { updateUserDataDB, loadAllUserData, printPDF, downloadHtml } from '../../components/Helper';
import { allTemplateInfo, fontFamilies, getTemplate } from '../../components/Templates';
import { useRouter } from 'next/router';
import ConfigInputs from '../../components/ConfigInputs';

export const Template = () => {
  const router = useRouter();
  const { template_id } = router.query;
  const [templateId, setTemplateId] = useState('1');
  const [session, loading] = useSession();
  const [, setToast] = useToasts();

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
    listConfig: { display: "list-item", listStyleType: `"\\2014"`, paddingInlineStart: "1ch", marginBottom: "0", lineHeight: "1.5" },
    userInfo: {}
  });
  const updateConfig = (key, val) => setConfig({...config, [key]: val});

  const [templateEdit, setTemplateEdit] = useState(false);
  const [fieldInputs, setFieldInputs] = useState([]);
  const [allUserData, setAllUserData] = useState({});
  const [userInfo, setUserInfo] = useState({})
  const updateUserInfoField = e => setUserInfo({...userInfo, [e.target.name]: e.target.value });

  /**
   * when the page loads
   * fetch the user's info and all templates from the database
   */
  useEffect(() => { loadAllUserData(templateInfo, setAllUserData, setUserInfo); }, []);

  /**
   * When userInfo is loaded, update all field values
   */
  useEffect(() => {
    setFieldInputs(templateInfo.fields.map((fName, i) => <Input key={`req-field-${i}`} name={fName} placeholder={fName} initialValue={userInfo[fName]} onChange={(e) => updateUserInfoField(e)} />));
    updateConfig('userInfo', userInfo);
  }, [userInfo])

  useEffect(() => { if (typeof template_id !== "undefined") setTemplateId(template_id.toString()); }, [template_id])

  return (
    <>
      <Mnavbar theme="light" page="Other" />
      <Page className="template-page">
        <div className="all-inputs-container">
          <h3>Template Settings</h3>
          <Button size="small" type="secondary">Reset Settings</Button>
          <br/><br/>
          <ConfigInputs config={config} updateConfig={updateConfig} />
          <br/>
          <h3>Your Profile Data</h3>
          {session && <Button size="small" type="secondary" onClick={() => updateUserDataDB(allUserData, userInfo, setToast)}>Save Profile</Button>}
          <br/><br/>
          <div className="field-inputs-container">
            {fieldInputs}
          </div>
        </div>
        <div>
          <div style={{ background: 'white', boxShadow: '11px 11px 22px #bfbfbf, -11px -11px 22px #ffffff', width: '1030px', height: 'max-content' }}>
            <div style={{ width: '1030px', maxHeight: '1327px' }} contentEditable={templateEdit}>
              {getTemplate(templateId, config)}
            </div>
          </div>
          <br/>
          <div className="flex-wrap-container" style={{ justifyContent: "right" }}>
            <Button size="small" type="secondary" onClick={printPDF}>Print PDF</Button>
            <Button size="small" type="secondary" onClick={downloadHtml}>Download HTML</Button>
          </div>
        </div>
      </Page>
      <MFooter />
    </>
  );
}

export default Template;
