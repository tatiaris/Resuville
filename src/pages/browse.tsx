import React, { useState, useEffect } from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { FavoriteBtn } from '../components/FavoriteBtn';
import { Page, Tag, Badge } from '@geist-ui/react';
import { Download, HeartFill } from '@geist-ui/react-icons';
import { loadAllDBTemplateData } from '../components/Helper';

/**
 * Browse page container
 * @returns {ReactNode} Browse page
 */
const Browse = (): React.ReactNode => {
  const [allTemplateDBInfo, setAllTemplateDBInfo] = useState([]);
  let templateCollection = [];
  if (allTemplateDBInfo.length > 0) {
    templateCollection = allTemplateDBInfo.map((tp, i) => (
      <div key={`tp-card-${i}`} className="tp-thumbnail-container">
        <div><a href={`/t/${tp.templateId}`}><img className="tp-thumbnail-img" src={tp.thumbnail} width={250}/></a></div>
        <div className="tp-stats-container">
          <Badge.Anchor placement="bottomRight">
            <Badge size="mini">{tp.likes}</Badge>
            <HeartFill color="red" />
          </Badge.Anchor>
          <br/><br/>
          <Badge.Anchor placement="bottomRight">
            <Badge size="mini">{tp.downloads}</Badge>
            <Download color="black" />
          </Badge.Anchor>
        </div>
      </div>
    ));
  }
  
  useEffect(() => {loadAllDBTemplateData(setAllTemplateDBInfo);}, [])

  return (
    <>
      <Mheader title="Browse" />
      <Mnavbar theme="light" page="Browse" />
      <Page>
        <h2>Templates</h2>
        <div className="template-collection-container">
          {templateCollection}
        </div>
      </Page>
      <MFooter />
    </>
  );
};

export default Browse;
