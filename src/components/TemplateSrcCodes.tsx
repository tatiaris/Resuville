import { fontFamilies } from './Templates';

export const template1 = (config) => {
  return (
    <div
      id="resume-container"
      style={{
        width: 'max-content',
        lineHeight: '1.5',
        padding: `${config.verticalMargin}px ${config.horizontalMargin}px`,
        background: config.backgroundColor,
        fontFamily: fontFamilies[config.regularFont],
        fontSize: `${config.regularFontSize}pt`,
        fontWeight: config.regularFontWeight,
        color: config.textColor
      }}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={`https://fonts.googleapis.com/css2?family=${config.regularFont}:wght@200;300;400;500;600;700&display=swap`} rel="stylesheet" />
      </head>
      <div
        style={{
          width: `${config.pageWidth - config.horizontalMargin * 2}px`,
          height: `${config.pageHeight - config.verticalMargin * 2}px`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div>
            <h4 style={{ fontSize: '1.5rem', lineHeight: '1.2', margin: '0px', fontWeight: config.boldFontWeight, color: config.headingColor }}>{config.styledUserInfo['full_name']}</h4>
          </div>
          <div>
            <h5 style={{ fontSize: '1rem', lineHeight: '1.2', margin: '0px', fontWeight: config.boldFontWeight }}>{config.styledUserInfo['subtitle']}</h5>
          </div>
          <span>
            {config.styledUserInfo['city']}, {config.styledUserInfo['state']} | {config.styledUserInfo['phone_no']} | {config.styledUserInfo['email_address']}
          </span>
        </div>
        <div style={{ width: '100%', textAlign: 'left', paddingTop: '15px' }}>
          <h4
            style={{
              borderBottom: '2px solid black',
              fontSize: `${config.headingFontSize}pt`,
              fontWeight: config.boldFontWeight,
              lineHeight: '1.2',
              margin: '0px',
              marginBottom: '10px',
              color: config.headingColor
            }}>
            Education
          </h4>
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['university_start_day']} - {config.styledUserInfo['university_end_day']}
          </span>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['university']}</span> - {config.styledUserInfo['university_location']}
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['major']}</span>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>Sample of Courses Taken:</span> {config.styledUserInfo['sample_courses_description']}
          <br />
          <br />
          <h4
            style={{
              borderBottom: '2px solid black',
              fontSize: `${config.headingFontSize}pt`,
              fontWeight: config.boldFontWeight,
              lineHeight: '1.2',
              margin: '0px',
              marginBottom: '10px',
              color: config.headingColor
            }}>
            Professional Experience
          </h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_1_role']}</span>, {config.styledUserInfo['work_1_name']}, {config.styledUserInfo['work_1_location']} (
          <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['work_1_url']}`}>
            {config.styledUserInfo['work_1_url']}
          </a>
          )
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_1_start_day']} - {config.styledUserInfo['work_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_2_role']}</span>, {config.styledUserInfo['work_2_name']}, {config.styledUserInfo['work_2_location']} (
          <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['work_2_url']}`}>
            {config.styledUserInfo['work_2_url']}
          </a>
          )
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_2_start_day']} - {config.styledUserInfo['work_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_3_role']}</span>, {config.styledUserInfo['work_3_name']}, {config.styledUserInfo['work_3_location']} (
          <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['work_3_url']}`}>
            {config.styledUserInfo['work_3_url']}
          </a>
          )
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_3_start_day']} - {config.styledUserInfo['work_3_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_3']}</li>
          </ul>
          <br />
          <h4
            style={{
              borderBottom: '2px solid black',
              fontSize: `${config.headingFontSize}pt`,
              fontWeight: config.boldFontWeight,
              lineHeight: '1.2',
              margin: '0px',
              marginBottom: '10px',
              color: config.headingColor
            }}>
            Projects
          </h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_1_role']}</span>, {config.styledUserInfo['project_1_title']},{' '}
          {config.styledUserInfo['project_1_brief_description']} (
          <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_1_url']}`}>
            {config.styledUserInfo['project_1_url']}
          </a>
          )
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_1_start_day']} - {config.styledUserInfo['project_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_2_role']}</span>, {config.styledUserInfo['project_2_title']},{' '}
          {config.styledUserInfo['project_2_brief_description']} (
          <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_2_url']}`}>
            {config.styledUserInfo['project_2_url']}
          </a>
          )
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_2_start_day']} - {config.styledUserInfo['project_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_3_role']}</span>, {config.styledUserInfo['project_3_title']},{' '}
          {config.styledUserInfo['project_3_brief_description']} (
          <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_3_url']}`}>
            {config.styledUserInfo['project_3_url']}
          </a>
          )
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_3_start_day']} - {config.styledUserInfo['project_3_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_3_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_3_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_3_bullet_3']}</li>
          </ul>
          <br />
          <h4
            style={{
              borderBottom: '2px solid black',
              fontSize: `${config.headingFontSize}pt`,
              fontWeight: config.boldFontWeight,
              lineHeight: '1.2',
              margin: '0px',
              marginBottom: '10px',
              color: config.headingColor
            }}>
            Profile
          </h4>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>
              <span style={{ fontWeight: config.boldFontWeight }}>Technical Skills: </span>
              {config.styledUserInfo['technical_skills_description']}
            </li>
            <li style={config.listConfig}>
              <span style={{ fontWeight: config.boldFontWeight }}>Spoken Languages: </span>
              {config.styledUserInfo['spoken_languages_description']}
            </li>
            <li style={config.listConfig}>
              <span style={{ fontWeight: config.boldFontWeight }}>Hobbies: </span>
              {config.styledUserInfo['hobbies_description']}
            </li>
            <li style={config.listConfig}>
              <span style={{ fontWeight: config.boldFontWeight }}>Links: </span>
              <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['personal_url']}`}>
                {config.styledUserInfo['personal_url']}
              </a>
              ,{' '}
              <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['github_url']}`}>
                {config.styledUserInfo['github_url']}
              </a>
              ,{' '}
              <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['linkedin_url']}`}>
                {config.styledUserInfo['linkedin_url']}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const template2 = (config) => {
  return (
    <div
      id="resume-container"
      style={{
        width: 'max-content',
        padding: `${config.verticalMargin}px ${config.horizontalMargin}px`,
        background: config.backgroundColor,
        fontFamily: fontFamilies[config.regularFont],
        fontSize: `${config.regularFontSize}pt`,
        fontWeight: config.regularFontWeight,
        color: config.textColor
      }}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={`https://fonts.googleapis.com/css2?family=${config.regularFont}:wght@200;300;400;500;600;700&display=swap`} rel="stylesheet" />
      </head>
      <div
        style={{
          lineHeight: '1.4',
          width: `${config.pageWidth - config.horizontalMargin * 2}px`,
          height: `${config.pageHeight - config.verticalMargin * 2}px`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <div style={{ float: 'right', textAlign: 'right' }}>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['github_url']}`}>
              {config.styledUserInfo['github_url']}
            </a>
            <br />
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['linkedin_url']}`}>
              {config.styledUserInfo['linkedin_url']}
            </a>
          </div>
          <div>
            <h3 style={{ margin: '0px', fontWeight: config.boldFontWeight, color: config.headingColor }}>{config.styledUserInfo['full_name']}</h3>
          </div>
          <span>
            {config.styledUserInfo['email_address']} / {config.styledUserInfo['phone_no']}
          </span>
        </div>
        <div style={{ width: '100%', textAlign: 'left', paddingTop: '15px' }}>
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>EDUCATION</h4>
          <div style={{ float: 'right', textAlign: 'right' }}>
            {config.styledUserInfo['university_start_day']} - {config.styledUserInfo['university_end_day']}
            <br />
            GPA: <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['university_gpa']}</span>
          </div>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['university']}</span> / {config.styledUserInfo['university_location']}
          <br />
          <span>{config.styledUserInfo['major']}</span>
          <br />
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>Technical Skills:</span> {config.styledUserInfo['technical_skills_description']}
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>Relevant Coursework:</span> {config.styledUserInfo['sample_courses_description']}
          <br />
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>WORK EXPERIENCE</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_1_name']}</span> / {config.styledUserInfo['work_1_role']} / {config.styledUserInfo['work_1_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_1_start_day']} - {config.styledUserInfo['work_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_2_name']}</span> / {config.styledUserInfo['work_2_role']} / {config.styledUserInfo['work_2_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_2_start_day']} - {config.styledUserInfo['work_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_3_name']}</span> / {config.styledUserInfo['work_3_role']} / {config.styledUserInfo['work_3_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_3_start_day']} - {config.styledUserInfo['work_3_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_3']}</li>
          </ul>
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>PERSONAL PROJECTS</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_1_title']}</span> / {config.styledUserInfo['project_1_role']} /{' '}
          <i>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_1_url']}`}>
              {config.styledUserInfo['project_1_url']}
            </a>
          </i>
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_1_start_day']} - {config.styledUserInfo['project_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_2_title']}</span> / {config.styledUserInfo['project_2_role']} /{' '}
          <i>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_2_url']}`}>
              {config.styledUserInfo['project_2_url']}
            </a>
          </i>
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_2_start_day']} - {config.styledUserInfo['project_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_3']}</li>
          </ul>
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>ORGANIZATIONS</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['activity_1_title']}</span> / {config.styledUserInfo['activity_1_role']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['activity_1_start_day']} - {config.styledUserInfo['activity_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['activity_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['activity_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['activity_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['activity_2_title']}</span> / {config.styledUserInfo['activity_2_role']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['activity_2_start_day']} - {config.styledUserInfo['activity_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['activity_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['activity_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['activity_2_bullet_3']}</li>
          </ul>
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>AWARDS</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['award_1_title']}</span> / {config.styledUserInfo['award_1_description']}
          <span style={{ float: 'right' }}>{config.styledUserInfo['award_1_day']}</span>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['award_2_title']}</span> / {config.styledUserInfo['award_2_description']}
          <span style={{ float: 'right' }}>{config.styledUserInfo['award_2_day']}</span>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['award_3_title']}</span> / {config.styledUserInfo['award_3_description']}
          <span style={{ float: 'right' }}>{config.styledUserInfo['award_3_day']}</span>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['award_4_title']}</span> / {config.styledUserInfo['award_4_description']}
          <span style={{ float: 'right' }}>{config.styledUserInfo['award_4_day']}</span>
          <br />
        </div>
      </div>
    </div>
  );
};

export const template3 = (config) => {
  return (
    <div
      id="resume-container"
      style={{
        width: 'max-content',
        padding: `${config.verticalMargin}px ${config.horizontalMargin}px`,
        background: config.backgroundColor,
        fontFamily: fontFamilies[config.regularFont],
        fontSize: `${config.regularFontSize}pt`,
        fontWeight: config.regularFontWeight,
        color: config.textColor
      }}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={`https://fonts.googleapis.com/css2?family=${config.regularFont}:wght@200;300;400;500;600;700&display=swap`} rel="stylesheet" />
      </head>
      <div
        style={{
          lineHeight: '1.4',
          width: `${config.pageWidth - config.horizontalMargin * 2}px`,
          height: `${config.pageHeight - config.verticalMargin * 2}px`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <div style={{ float: 'right', textAlign: 'right' }}>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['github_url']}`}>
              {config.styledUserInfo['github_url']}
            </a>
            <br />
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['linkedin_url']}`}>
              {config.styledUserInfo['linkedin_url']}
            </a>
          </div>
          <div>
            <h3 style={{ margin: '0px', fontWeight: config.boldFontWeight, color: config.headingColor }}>{config.styledUserInfo['full_name']}</h3>
          </div>
          <span>
            {config.styledUserInfo['email_address']} / {config.styledUserInfo['phone_no']} /{' '}
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['personal_url']}`}>
              {config.styledUserInfo['personal_url']}
            </a>
          </span>
        </div>
        <div style={{ width: '100%', textAlign: 'left', paddingTop: '15px' }}>
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>EDUCATION</h4>
          <div style={{ float: 'right', textAlign: 'right' }}>
            {config.styledUserInfo['university_start_day']} - {config.styledUserInfo['university_end_day']}
            <br />
            GPA: <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['university_gpa']}</span>
          </div>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['university']}</span> / {config.styledUserInfo['university_location']}
          <br />
          <span>{config.styledUserInfo['major']}</span>
          <br />
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>Technical Skills:</span> {config.styledUserInfo['technical_skills_description']}
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>Relevant Coursework:</span> {config.styledUserInfo['sample_courses_description']}
          <br />
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>RELEVANT EXPERIENCE</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_1_name']}</span> / {config.styledUserInfo['work_1_role']} / {config.styledUserInfo['work_1_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_1_start_day']} - {config.styledUserInfo['work_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_2_name']}</span> / {config.styledUserInfo['work_2_role']} / {config.styledUserInfo['work_2_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_2_start_day']} - {config.styledUserInfo['work_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_2_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_3_name']}</span> / {config.styledUserInfo['work_3_role']} / {config.styledUserInfo['work_3_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_3_start_day']} - {config.styledUserInfo['work_3_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_3_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['work_4_name']}</span> / {config.styledUserInfo['work_4_role']} / {config.styledUserInfo['work_4_location']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['work_4_start_day']} - {config.styledUserInfo['work_4_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['work_4_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_4_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['work_4_bullet_3']}</li>
          </ul>
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>PROJECTS</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_1_title']}</span> / {config.styledUserInfo['project_1_role']} /{' '}
          <i>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_1_url']}`}>
              {config.styledUserInfo['project_1_url']}
            </a>
          </i>
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_1_start_day']} - {config.styledUserInfo['project_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_1_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_2_title']}</span> / {config.styledUserInfo['project_2_role']} /{' '}
          <i>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_2_url']}`}>
              {config.styledUserInfo['project_2_url']}
            </a>
          </i>
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_2_start_day']} - {config.styledUserInfo['project_2_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_2_bullet_3']}</li>
          </ul>
          <br />
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['project_3_title']}</span> / {config.styledUserInfo['project_3_role']} /{' '}
          <i>
            <a style={{ color: config.linkColor }} target="_blank" rel="noopener noreferrer" href={`https://${config.userInfo['project_2_url']}`}>
              {config.styledUserInfo['project_3_url']}
            </a>
          </i>
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['project_3_start_day']} - {config.styledUserInfo['project_3_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['project_3_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_3_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['project_3_bullet_3']}</li>
          </ul>
          <br />
          <h4 style={{ fontSize: `${config.headingFontSize}pt`, fontWeight: config.boldFontWeight, margin: '0px', marginBottom: '0px', color: config.headingColor }}>ORGANIZATIONS</h4>
          <span style={{ fontWeight: config.boldFontWeight }}>{config.styledUserInfo['activity_1_title']}</span> / {config.styledUserInfo['activity_1_role']}
          <span style={{ float: 'right' }}>
            {config.styledUserInfo['activity_1_start_day']} - {config.styledUserInfo['activity_1_end_day']}
          </span>
          <ul style={{ marginTop: '0', marginBottom: '0', color: config.textColor }}>
            <li style={config.listConfig}>{config.styledUserInfo['activity_1_bullet_1']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['activity_1_bullet_2']}</li>
            <li style={config.listConfig}>{config.styledUserInfo['activity_1_bullet_3']}</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};
