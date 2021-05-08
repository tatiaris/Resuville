import { styleText } from "./Helper"
import * as TSC from "./TemplateSrcCodes"

export const fontFamilies = {
  "Oswald": "'Oswald', sans-serif",
  "Roboto": "'Roboto', sans-serif",
  "Times New Roman": "'Times New Roman', serif",
  "Helvetica": "'Helvetica', sans-serif",
  "Courier New": "'Courier New', monospace"
}

export const allTemplateInfo = {
  '1': {
    about: {
      designer: "tatiaris",
      next: '2',
      prev: '2',
      tags: ['usa', 'computer science', 'engineering', 'no-color', 'single-column'],
      fields: ["full_name","subtitle","city","state","phone_no","email_address","university_start_day","university_end_day","university","university_location","major","sample_courses_description","work_1_role","work_1_name","work_1_location","work_1_url","work_1_start_day","work_1_end_day","work_1_bullet_1","work_1_bullet_2","work_1_bullet_3","work_2_role","work_2_name","work_2_location","work_2_url","work_2_start_day","work_2_end_day","work_2_bullet_1","work_2_bullet_2","work_2_bullet_3","work_3_role","work_3_name","work_3_location","work_3_url","work_3_start_day","work_3_end_day","work_3_bullet_1","work_3_bullet_2","work_3_bullet_3","project_1_role","project_1_title","project_1_brief_description","project_1_url","project_1_start_day","project_1_end_day","project_1_bullet_1","project_1_bullet_2","project_1_bullet_3","project_2_role","project_2_title","project_2_brief_description","project_2_url","project_2_start_day","project_2_end_day","project_2_bullet_1","project_2_bullet_2","project_2_bullet_3","project_3_role","project_3_title","project_3_brief_description","project_3_url","project_3_start_day","project_3_end_day","project_3_bullet_1","project_3_bullet_2","project_3_bullet_3","technical_skills_description","spoken_languages_description","hobbies_description", "personal_url","github_url","linkedin_url"],
    },
    defaultConfig: {
      pageHeight: 1327,
      pageWidth: 1030,
      verticalMargin: 48,
      horizontalMargin: 48,
      regularFont: 'Roboto',
      regularFontSize: 12,
      regularFontWeight: '300',
      boldFontWeight: '500',
      headingFont: 'Roboto',
      headingFontSize: 16,
      backgroundColor: '#fff',
      linkColor: '#000',
      headingColor: '#000',
      textColor: '#000',
      listConfig: { display: 'list-item', listStyleType: `"\\2014"`, paddingInlineStart: '1ch', marginBottom: '0', lineHeight: '1.5' },
      userInfo: {}
    },
    getCode: TSC.template1
  },
  '2': {
    about: {
      designer: "tatiaris",
      next: '1',
      prev: '1',
      tags: ['usa', 'computer science', 'engineering', 'single-column'],
      fields: ["full_name","phone_no","email_address","university_start_day","university_end_day","university","university_location", "university_gpa","major","sample_courses_description","work_1_role","work_1_name","work_1_location","work_1_start_day","work_1_end_day","work_1_bullet_1","work_1_bullet_2","work_2_role","work_2_name","work_2_location","work_2_start_day","work_2_end_day","work_2_bullet_1","work_2_bullet_2","work_3_role","work_3_name","work_3_location","work_3_start_day","work_3_end_day","work_3_bullet_1","work_3_bullet_2","project_1_role","project_1_title","project_1_url","project_1_start_day","project_1_end_day","project_1_bullet_1","project_1_bullet_2","project_1_bullet_3","project_2_role","project_2_title","project_2_url","project_2_start_day","project_2_end_day","project_2_bullet_1","project_2_bullet_2","project_2_bullet_3", "activity_1_title", "activity_1_role", "activity_1_start_day", "activity_1_end_day", "activity_1_bullet_1", "activity_1_bullet_2", "activity_1_bullet_3", "award_1_title", "award_1_description", "award_1_day", "award_2_title", "award_2_description", "award_2_day", "award_3_title", "award_3_description", "award_3_day", "award_4_title", "award_4_description", "award_4_day", "technical_skills_description", "personal_url","github_url","linkedin_url"],
    },
    defaultConfig: {
      pageHeight: 1327,
      pageWidth: 1030,
      verticalMargin: 48,
      horizontalMargin: 48,
      regularFont: 'Roboto',
      regularFontSize: 13,
      regularFontWeight: '300',
      boldFontWeight: '500',
      headingFont: 'Roboto',
      headingFontSize: 15,
      backgroundColor: '#fff',
      linkColor: '#000',
      headingColor: '#000',
      textColor: '#000',
      listConfig: { display: 'list-item', paddingInlineStart: '1ch', marginBottom: '0', lineHeight: '1.2' },
      userInfo: {}
    },
    getCode: TSC.template2
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