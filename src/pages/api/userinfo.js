import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { getSession } from 'next-auth/client';

const handler = nextConnect();
handler.use(middleware);

const guestData = {
  _id: 'guest',
  email: '',
  is_admin: false,
  is_designer: false,
  liked_templates: [],
  used_templates: [],
  data: {
    first_name: 'Aang',
    last_name: 'Avatar',
    full_name: 'Avatar Aang',
    subtitle: 'Last Airbender',
    personal_url: 'avataraang.com',
    street_name: '101 Avatar St.',
    apt_no: 'A-123',
    city: 'Southern Air Temple',
    state: 'Hankao',
    zip_code: '12345',
    phone_no: '+1-234-567-8901',
    linkedin_url: 'avataraang.com/linkedin',
    github_url: 'avataraang.com/github',
    email_address: 'avataraang@atla.com',
    objective:
      'To obtain an entry-level software engineering/development position that will challenge me and allow me to utilize my past experiences and skills to mutually benefit both myself and my employer while allowing for future growth and advancement.',
    university: 'Southern Air Temple University',
    university_location: 'Tianjin, Southern Rock',
    university_start_day: 'Feb 2005',
    university_end_day: 'July 2008',
    major: 'Masters in Element Bending',
    university_gpa: '4.0',
    highschool: 'Air Temple Public High School',
    highschool_location: 'Tianjin, Southern Rock',
    highschool_gpa: '3.5',
    sample_courses_description:
      'Airbending 101, Waterbending 101, Firebending 101, Earthbending 101, Energybending 101, Koi Fish Riding 101, Fire Dancing, Sky Bison Riding 101, Martial Arts 101, Advanced Monk Stuff',
    relevant_course_name_1: 'Airbending 101',
    relevant_course_name_2: 'Waterbending 202',
    relevant_course_name_3: 'Earthbending 303',
    relevant_course_name_4: 'Firebending 404',
    work_name_1: 'United Rep. of Nations',
    work_url_1: 'atla.com/urn',
    work_location_1: 'Republic City, R.O.N.',
    work_start_day_1: 'Apr 2034',
    work_end_day_1: 'Present',
    work_role_1: 'Co-Founder',
    work_bullet_1_1: 'Created a society where benders and nonbenders from all four nations could live together in peace.',
    work_bullet_1_2: 'Eased tensions between colonies to prevent war and maintain peace.',
    work_bullet_1_3: 'Temporarily resolved the anti-bending revolution.',
    work_bullet_1_4: 'Sed ut unde omnis iste natus error laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    work_name_2: 'Avatar',
    work_url_2: 'avataraang.com',
    work_location_2: 'Every City, The World',
    work_start_day_2: 'Jun 1905',
    work_end_day_2: 'Present',
    work_role_2: 'Master of all 4 Elements',
    work_bullet_2_1: 'Ended the 100 year war by defeating Fire Lord Ozai and taking his bending abilities away.',
    work_bullet_2_2: 'Re-introduced energy bending to the avatar life cycle.',
    work_bullet_2_3: 'Reduced corruption around the world while travelling.',
    work_bullet_2_4: 'Sed ut unde omnis iste natus error laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    work_name_3: "Aang's School",
    work_url_3: 'avataraang.com/learn',
    work_location_3: 'Republic City, R.O.N.',
    work_start_day_3: 'Jun 2022',
    work_end_day_3: 'Present',
    work_role_3: 'Airbending and Nomad Culture Teacher',
    work_bullet_3_1: 'Revived the Air nomads by passing on the culture and abilities.',
    work_bullet_3_2: "Taught anyone willing to learn about a Monk's way of life.",
    work_bullet_3_3: 'Re-populated all the deserted and barren air temples by making them habitable.',
    work_bullet_3_4: 'Sed ut unde omnis iste natus error laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    project_title_1: 'Firebending',
    project_url_1: 'avataraang.com/fire',
    project_start_day_1: 'Feb 2008',
    project_end_day_1: 'May 2008',
    project_role_1: 'Student',
    project_brief_description_1: '',
    project_long_description_1: '',
    project_bullet_1_1: 'Learned and mastered firebending over the course of 3 months from Zuko.',
    project_bullet_1_2: 'Introduced the concept of dancing and freedom to firebending students.',
    project_bullet_1_3: 'Travelled throughout the Earth Kingdom and learned all unique cultures.',
    project_title_2: 'Earthbending',
    project_url_2: 'avataraang.com/earth',
    project_start_day_2: 'Jan 2008',
    project_end_day_2: 'Jul 2006',
    project_role_2: 'Student',
    project_brief_description_2: '',
    project_long_description_2: '',
    project_bullet_2_1: 'Learned and mastered earthbending over the course of 18 months from Toph.',
    project_bullet_2_2: 'Freed Ba Sing Se from the dictatorship under Long Feng.',
    project_bullet_2_3: 'Travelled throughout the Earth Kingdom and learned all unique cultures.',
    project_title_3: 'Waterbending',
    project_url_3: 'avataraang.com/water',
    project_start_day_3: 'May 2005',
    project_end_day_3: 'May 2006',
    project_role_3: 'Student',
    project_brief_description_3: '',
    project_long_description_3: '',
    project_bullet_3_1: 'Learned and mastered earthbending over the course of 18 months from Katara.',
    project_bullet_3_2: 'Met leaders and warriors around the world forming friendships and alliances.',
    project_bullet_3_3: 'Travelled from the South Pole to the North Pole observing how the world had changed.',
    activity_title_1: 'United Council',
    activity_url_1: 'atla.com/unc',
    activity_location_1: 'Republic City, R.O.N.',
    activity_start_day_1: 'Aug 2036',
    activity_end_day_1: 'Present',
    activity_role_1: 'Councilman',
    activity_brief_description_1: 'Councilman',
    activity_long_description_1: '',
    activity_bullet_1_1: 'Represented myself at the council of five nations as the Avatar.',
    activity_bullet_1_2: 'Made descisions regarding Republic city for public welfare and benefit.',
    activity_bullet_1_3: 'Significantly reduced amount of corruption by ruling on individuals along with the court.',
    activity_title_2: 'Koi Riding Club',
    activity_url_2: '',
    activity_location_2: 'Kyoshi Islands, Kyoshi',
    activity_start_day_2: 'Jan 1905',
    activity_end_day_2: 'Present',
    activity_role_2: 'Founder',
    activity_brief_description_2: 'Founder',
    activity_long_description_2: '',
    activity_bullet_2_1: 'Frequently travelled to Kyoshi island to ride the Elephant Koi as a recreational sport.',
    activity_bullet_2_2: 'Set the record for longest time on a Elephant Koi by 32 minutes.',
    activity_bullet_2_3: 'Mastered the art of riding koi fishes around the world.',
    activity_title_3: 'Order of the White Lotus',
    activity_url_3: '',
    activity_location_3: 'Ba Sing Se, Earth Kingdom',
    activity_start_day_3: 'Jan 1905',
    activity_end_day_3: 'Present',
    activity_role_3: 'Member',
    activity_brief_description_3: 'Member of the club.',
    activity_long_description_3: '',
    activity_bullet_3_1: 'Joined the secret society at the age of 14.',
    activity_bullet_3_2: 'Kept the powers of all nations in check.',
    activity_bullet_3_3: 'Spread and shared secret knowledge to the next generation.',
    programming_language_1: 'English',
    programming_language_2: 'Chinese',
    programming_language_3: 'Arabic',
    programming_language_4: 'French',
    programming_language_5: 'Hindi',
    programming_language_6: 'Portuguese',
    programming_language_7: 'Italian',
    programming_language_8: 'Spanish',
    programming_language_9: 'Thai',
    technical_skill_1: 'Fire-bending',
    technical_skill_2: 'Earth-bending',
    technical_skill_3: 'Air-bending',
    technical_skill_4: 'Water-bending',
    technical_skill_5: 'Energy-bending',
    technical_skill_6: 'Speed',
    technical_skill_7: 'Agility',
    technical_skill_8: 'Nimbleness',
    technical_skill_9: 'Power',
    soft_skill_1: 'Patience',
    soft_skill_2: 'Calmness',
    soft_skill_3: 'Diplomaccy',
    soft_skill_4: 'Fun-loving',
    soft_skill_5: 'Adventurous',
    soft_skill_6: 'Decisiveness',
    soft_skill_7: 'Bravery',
    soft_skill_8: 'Confidence',
    soft_skill_9: 'Hardwork',
    certifications_description: 'Air Temple Monk Certification',
    technical_skills_description: 'Firebending, Earthbending, Waterbending, Airbending, Energybending, Speed, Agility',
    spoken_languages_description: 'English, Chinese, Arabic, French, Hindi, Spanish'
  }
};

handler.get(async (req, res) => {
  const session = await getSession({ req });
  let userData = guestData;

  if (session) {
    userData = await req.db.collection('users').findOne({ email: session.user.email });
    if (!userData) {
      await req.db.collection('users').insertOne({ email: session.user.email, is_admin: false, is_designer: false, total_downloads: 0, liked_templates: [], used_templates: [], data: guestData.data });
      userData = await req.db.collection('users').findOne({ email: session.user.email });
    }
  }

  userData.placeholderInfo = guestData.data;
  res.json(userData);
});

handler.post(async (req, res) => {
  let userInfo = req.body.userInfo;

  const session = await getSession({ req });

  if (session) {
    let updatedUser = await req.db.collection('users').findOne({ email: session.user.email });
    updatedUser.data = userInfo;

    await req.db.collection('users').updateOne({ email: session.user.email }, { $set: updatedUser }, { upsert: true });

    res.json({
      success: true,
      message: 'Your data was successfully updated!'
    });
  } else {
    res.json({
      success: false,
      message: 'Sorry! We encountered an unexpected error trying to update your data.'
    });
  }
});

handler.put(async (req, res) => {
  const session = await getSession({ req });
  let updatedUserInfo = req.body.userInfo;
  delete updatedUserInfo['_id'];
  delete updatedUserInfo['placeholderInfo'];

  if (session) {
    await req.db.collection('users').updateOne({ email: session.user.email }, { $set: updatedUserInfo }, { upsert: true });
    res.json({
      success: true,
      message: 'Your data was successfully updated!'
    });
  } else {
    res.json({
      success: false,
      message: 'Sorry! We encountered an unexpected error trying to update your profile.'
    });
  }
});

handler.delete(async (req, res) => {
  const session = await getSession({ req });
  try {
    await req.db.collection('users').removeOne({ email: session.user.email });
    res.json({ success: true, message: 'successfully removed user' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'could not remove user' });
  }
});

export default handler;
