const getMinGreaterThanZero = lst => {
  let mgz = 10000000;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] > -1 && lst[i] < mgz) {
      mgz = lst[i];
    }
  }
  return mgz;
}

/**
 * Style text based on identifiers:
 * some *bolded* text is *here*
 *    ==> <>some <span style={{ fontWeight: boldWeight }}>bolded</span> text is <span style={{ fontWeight: boldWeight }}>here</span></>
 * some _italic_ text is _here_
 *    ==> <>some <i>italic</i> text is <i>here</i></>
 * some _*fancy*_ text is _*here*_
 *    ==> <>some <span style={{ fontWeight: boldWeight }}><i>fancy</i></span> text is <span style={{ fontWeight: boldWeight }}><i>here</i></span></>
 * 
 * @param text {string}
 * @param boldWeight {int}
 */
export const styleText = (text, boldWeight) => {
  let jsxElements = [];
  let c = 0;
  try {
    while (text.indexOf('_') > -1 || text.indexOf('*') > -1) {
      c++;
      const italicStartIndex = text.indexOf('_')
      const boldStartIndex = text.indexOf('*')
      let plainTextEndIndex = 0;
      let styleType = '';

      if (italicStartIndex > -1 && boldStartIndex > -1) {
        if (italicStartIndex < boldStartIndex) {
          plainTextEndIndex = italicStartIndex;
          styleType = '_';
        } else {
          plainTextEndIndex = boldStartIndex;
          styleType = '*';
        }
      } else {
        if (italicStartIndex > boldStartIndex) {
          plainTextEndIndex = italicStartIndex;
          styleType = '_';
        } else {
          plainTextEndIndex = boldStartIndex;
          styleType = '*';
        }
      }

      const plainText = text.substr(0, plainTextEndIndex);
      text = text.substr(plainTextEndIndex + 1);
      const fancyTextEndIndex = text.indexOf(styleType);
      let fancyText = text.substr(0, fancyTextEndIndex);
      text = text.substr(fancyTextEndIndex + 1);
      
      jsxElements.push(<span key={`plain-text-${c}`}>{plainText}</span>);
      if (styleType == '*') jsxElements.push(<span key={`fancy-text-${c}`} style={{ fontWeight: boldWeight }}>{fancyText}</span>);
      else if (styleType == '_') jsxElements.push(<i key={`fancy-text-${c}`}>{styleText(fancyText, boldWeight)}</i>);
    }
    jsxElements.push(<span key={`plain-text-${c + 1}`}>{text}</span>);
  } catch (error) {
    console.log(error);
    jsxElements.push(text);
  }

  return jsxElements;
}

const launchSuccessToast = (setToast, msg) => setToast({ text: msg, type: 'success', delay: 3000 });
const launchFailToast = (setToast, msg) => setToast({ text: msg, type: 'error', delay: 3000 });
/**
 * sends a user a positive/negative notification
 * @param  {bool} intent good or bad
 * @param {string} msg message to send as a notification
 */
const sendNotification = (setToast, intent, msg) => {
  console.log('sending notification');
  
  if (intent) launchSuccessToast(setToast, msg);
  else launchFailToast(setToast, msg);
};

/**
 * updates the user's info in the database
 */
export const updateUserDataDB = (allUserData, userInfo, setToast) => {
  allUserData.data = userInfo;
  const data = { userInfo: allUserData };

  fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    sendNotification(setToast, data.success, data.message);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

/**
 * Modifies user's data according to the template and sets variables to be used on the page
 * @param templateInfo {string[]}
 * @param setAllUserData {function}
 * @param setUserInfo {function}
 */
export const loadAllUserData = async (templateInfo, setAllUserData, setUserInfo) => {
  const userInfoRes = await fetch('/api/users?type=self');
  const userData = await userInfoRes.json();
  if (userData) {
    for (let i = 0; i < templateInfo.fields.length; i++) {
      const f = templateInfo.fields[i];
      if (!(f in userData.data)) userData.data[f] = "";
    }
    setAllUserData(userData);
    setUserInfo(userData.data);
  }
};

/**
 * allows the user to print/download their resume through the browser
 */
export const printPDF = () => {
  const resumeElement = document.getElementById('resume-container');
  // incrementTemplateDownloadCount();

  // method 1: no api, just let the browser print
  const raw_html = resumeElement.outerHTML;
  const w = window.open();
  w.document.write(raw_html);
  w.focus();
  w.print();
  w.close();
};

/**
 * creates a html file containing the resume's source code and downloads it for the user
 */
export const downloadHtml = () => {
  const filename = 'resume_html.html';
  const html_content = document.getElementById('resume-container').outerHTML;
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html_content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}