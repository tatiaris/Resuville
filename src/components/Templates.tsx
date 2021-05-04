import { styleText } from "./Helper"

export const fontFamilies = {
  "Oswald": "'Oswald', sans-serif",
  "Roboto": "'Roboto', sans-serif",
  "Times New Roman": "'Times New Roman', serif",
  "Helvetica": "'Helvetica', sans-serif",
  "Courier New": "'Courier New', monospace"
}

const template1 = (config) => {
  return (
    <div id="resume-container" style={{ width: "max-content", lineHeight: "1.5", padding: "0.5in" }}>
      <div style={{ fontFamily: fontFamilies[config.regularFont], fontSize: config.regularFontSize, width: "calc(1030px - 1in)", height: "calc(1327px - 1in)", 
      display: "flex", flexDirection: "column", justifyContent: "center", fontWeight: config.regularFontWeight }}>
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href={`https://fonts.googleapis.com/css2?family=${config.regularFont}:wght@200;300;400;500;600;700&display=swap`} rel="stylesheet"/> 
        </head>
        <div style={{ textAlign: "center", width: "100%" }}>
          <div>
            <h4 style={{ fontSize: "1.5rem", lineHeight: "1.2", margin: "0px", fontWeight: config.boldFontWeight }}>{config.styledUserInfo['full_name']}</h4>
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", lineHeight: "1.2", margin: "0px", fontWeight: config.boldFontWeight }}>{config.styledUserInfo['subtitle']}</h5>
          </div>
          <span>{config.styledUserInfo['city']}, {config.styledUserInfo['state']} | {config.styledUserInfo['phone_no']} | {config.styledUserInfo['email_address']}</span>
        </div>
        <div style={{ width: "100%", textAlign: "left", paddingTop: "15px" }}>
          <h4 style={{ borderBottom: "2px solid black", fontSize: config.headingFontSize, fontWeight: config.boldFontWeight, lineHeight: "1.2", margin: "0px", marginBottom: "10px" }}>
            Education
          </h4>
          <span style={{ float: "right" }}>
            {config.styledUserInfo['university_start_day']} - {config.styledUserInfo['university_end_day']}
          </span>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['university']}</span> - {config.styledUserInfo['university_location']}<br/>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['major']}</span><br/>
          <span style={{ fontWeight: config.boldFontWeight }}>Sample of Courses Taken:</span> {config.styledUserInfo['sample_courses_description']}<br/><br/>

          <h4 style={{ borderBottom: "2px solid black", fontSize: config.headingFontSize, fontWeight: config.boldFontWeight, lineHeight: "1.2", margin: "0px", marginBottom: "10px" }}>
            Professional Experience
          </h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_role_1']}</span>, {config.styledUserInfo['work_name_1']}, {config.styledUserInfo['work_location_1']} (<a href={`https://${config.styledUserInfo['work_url_1']}`}>{config.styledUserInfo['work_url_1']}</a>)
          <span style={{ float: "right" }}>{config.styledUserInfo['work_start_day_1']} - {config.styledUserInfo['work_end_day_1']}</span>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_1_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_1_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_1_3']}</li>
          </ul><br/>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_role_2']}</span>, {config.styledUserInfo['work_name_2']}, {config.styledUserInfo['work_location_2']} (<a href={`https://${config.styledUserInfo['work_url_2']}`}>{config.styledUserInfo['work_url_2']}</a>)
          <span style={{ float: "right" }}>{config.styledUserInfo['work_start_day_2']} - {config.styledUserInfo['work_end_day_2']}</span>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_2_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_2_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_2_3']}</li>
          </ul><br/>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_role_3']}</span>, {config.styledUserInfo['work_name_3']}, {config.styledUserInfo['work_location_3']} (<a href={`https://${config.styledUserInfo['work_url_3']}`}>{config.styledUserInfo['work_url_3']}</a>)
          <span style={{ float: "right" }}>{config.styledUserInfo['work_start_day_3']} - {config.styledUserInfo['work_end_day_3']}</span>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_3_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_3_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_bullet_3_3']}</li>
          </ul><br/>

          <h4 style={{ borderBottom: "2px solid black", fontSize: config.headingFontSize, fontWeight: config.boldFontWeight, lineHeight: "1.2", margin: "0px", marginBottom: "10px" }}>
            Projects
          </h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_role_1']}</span>, {config.styledUserInfo['project_title_1']}, {config.styledUserInfo['project_brief_description_1']} (<a href={`https://${config.styledUserInfo['project_url_1']}`}>{config.styledUserInfo['project_url_1']}</a>)
          <span style={{ float: "right" }}>{config.styledUserInfo['project_start_day_1']} - {config.styledUserInfo['project_end_day_1']}</span>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_1_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_1_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_1_3']}</li>
          </ul><br/>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_role_2']}</span>, {config.styledUserInfo['project_title_2']}, {config.styledUserInfo['project_brief_description_2']} (<a href={`https://${config.styledUserInfo['project_url_2']}`}>{config.styledUserInfo['project_url_2']}</a>)
          <span style={{ float: "right" }}>{config.styledUserInfo['project_start_day_2']} - {config.styledUserInfo['project_end_day_2']}</span>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_2_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_2_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_2_3']}</li>
          </ul><br/>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_role_3']}</span>, {config.styledUserInfo['project_title_3']}, {config.styledUserInfo['project_brief_description_3']} (<a href={`https://${config.styledUserInfo['project_url_3']}`}>{config.styledUserInfo['project_url_3']}</a>)
          <span style={{ float: "right" }}>{config.styledUserInfo['project_start_day_3']} - {config.styledUserInfo['project_end_day_3']}</span>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_3_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_3_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_bullet_3_3']}</li>
          </ul><br/>

          <h4 style={{ borderBottom: "2px solid black", fontSize: config.headingFontSize, fontWeight: config.boldFontWeight, lineHeight: "1.2", margin: "0px", marginBottom: "10px" }}>
            Profile
          </h4>
          <ul style={{ marginTop: "0", marginBottom: "0" }}>
            <li style={config.listConfig}><span style={{ fontWeight: config.boldFontWeight }}>Technical Skills: </span>{config.styledUserInfo['technical_skills_description']}</li>
            <li style={config.listConfig}><span style={{ fontWeight: config.boldFontWeight }}>Spoken Languages: </span>{config.styledUserInfo['spoken_languages_description']}</li>
            <li style={config.listConfig}><span style={{ fontWeight: config.boldFontWeight }}>Hobbies: </span>{config.styledUserInfo['hobbies_description']}</li>
            <li style={config.listConfig}>
              <span style={{ fontWeight: config.boldFontWeight }}>Links: </span>
              <a href={`https://${config.styledUserInfo['personal_url']}`}>{config.styledUserInfo['personal_url_title']}</a>, <a href={`https://${config.styledUserInfo['github_url']}`}>{config.styledUserInfo['github_url_title']}</a>, <a href={`https://${config.styledUserInfo['linkedin_url']}`}>{config.styledUserInfo['linkedin_url_title']}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const template2 = (config) => {
  return (
    <>
      <div>
        <span style={{ fontWeight: config.boldFontWeight }}>Links: </span>
        <a href={`https://${config.styledUserInfo['personal_url']}`}>{config.styledUserInfo['personal_url_title']}</a>, <a href={`https://${config.styledUserInfo['github_url']}`}>{config.styledUserInfo['github_url_title']}</a>, <a href={`https://${config.styledUserInfo['linkedin_url']}`}>{config.styledUserInfo['linkedin_url_title']}</a>
      </div>
    </>
  )
}

export const allTemplateInfo = {
  '1': {
    about: {
      designer: "tatiaris",
      next: '2',
      prev: '2',
      fields: ["full_name","subtitle","city","state","phone_no","email_address","university_start_day","university_end_day","university","university_location","major","sample_courses_description","work_role_1","work_name_1","work_location_1","work_url_1","work_start_day_1","work_end_day_1","work_bullet_1_1","work_bullet_1_2","work_bullet_1_3","work_role_2","work_name_2","work_location_2","work_url_2","work_start_day_2","work_end_day_2","work_bullet_2_1","work_bullet_2_2","work_bullet_2_3","work_role_3","work_name_3","work_location_3","work_url_3","work_start_day_3","work_end_day_3","work_bullet_3_1","work_bullet_3_2","work_bullet_3_3","project_role_1","project_title_1","project_brief_description_1","project_url_1","project_start_day_1","project_end_day_1","project_bullet_1_1","project_bullet_1_2","project_bullet_1_3","project_role_2","project_title_2","project_brief_description_2","project_url_2","project_start_day_2","project_end_day_2","project_bullet_2_1","project_bullet_2_2","project_bullet_2_3","project_role_3","project_title_3","project_brief_description_3","project_url_3","project_start_day_3","project_end_day_3","project_bullet_3_1","project_bullet_3_2","project_bullet_3_3","technical_skills_description","spoken_languages_description","hobbies_description", "personal_url_title", "personal_url", "github_url_title","github_url", "linkedin_url_title","linkedin_url"],
    },
    getCode: template1
  },
  '2': {
    about: {
      designer: "tatiaris",
      next: '1',
      prev: '1',
      fields: ["personal_url_title", "personal_url", "github_url_title","github_url", "linkedin_url_title", "linkedin_url"],
    },
    getCode: template2
  }
}

export const getTemplate = (id, config) => {
  const styledUserInfo = {};
  Object.keys(config.userInfo).forEach(dataKey => {
    styledUserInfo[dataKey] = styleText(config.userInfo[dataKey], config.boldFontWeight);
  });
  config.styledUserInfo = styledUserInfo;
  return allTemplateInfo[id].getCode(config);
}