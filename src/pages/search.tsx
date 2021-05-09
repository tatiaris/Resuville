import React, { useState, useEffect } from 'react';
import { Mheader } from '../components/Mheader';
import { Mnavbar } from '../components/Mnavbar';
import { MFooter } from '../components/MFooter';
import { Page, Badge, Button, Divider } from '@geist-ui/react';
import { hasNoCommon, isSubset, loadAllDBTemplateData } from '../components/Helper';
import { useRouter } from 'next/router';
import { allTags } from '../components/Constants';
import { Check, Download, HeartFill, X } from '@geist-ui/react-icons';

/**
 * Browse page container
 * @returns {ReactNode} Browse page
 */
const Search = (): React.ReactNode => {
  const router = useRouter();
  const [allTemplateDBInfo, setAllTemplateDBInfo] = useState([]);
  const [yesTags, setYesTags] = useState(new Set());
  const [noTags, setNoTags] = useState(new Set());

  const updateYesNoTags = (tag, c = 0) => {
    const yesTagsCopy = new Set(yesTags);
    const noTagsCopy = new Set(noTags);
    if (c == 1) {
      yesTagsCopy.add(tag);
      noTagsCopy.delete(tag);
    } else if (c == 2) {
      yesTagsCopy.delete(tag);
      noTagsCopy.add(tag);
    } else {
      yesTagsCopy.delete(tag);
      noTagsCopy.delete(tag);
    }
    setYesTags(yesTagsCopy);
    setNoTags(noTagsCopy);
  };

  useEffect(() => {
    loadAllDBTemplateData(setAllTemplateDBInfo);
  }, []);

  useEffect(() => {
    if (router.query.yes) setYesTags(new Set(router.query.yes.toString().split(',')));
    if (router.query.no) setNoTags(new Set(router.query.no.toString().split(',')));
  }, [router]);

  const filteredTemplates = allTemplateDBInfo.filter((templateInfo) => isSubset(templateInfo.tags, yesTags) && hasNoCommon(templateInfo.tags, noTags));
  let templateCollection = [];
  if (filteredTemplates.length > 0) {
    templateCollection = filteredTemplates.map((tp, i) => (
      <div key={`tp-card-${i}`} className="tp-thumbnail-container">
        <div>
          <a href={`/t/${tp.templateId}`}>
            <img className="tp-thumbnail-img" alt="" src={tp.thumbnail} width={250} />
          </a>
        </div>
        <div className="tp-stats-container">
          <Badge.Anchor placement="bottomRight">
            <Badge size="mini">{tp.likes}</Badge>
            <HeartFill color="red" />
          </Badge.Anchor>
          <br />
          <br />
          <Badge.Anchor placement="bottomRight">
            <Badge size="mini">{tp.downloads}</Badge>
            <Download color="black" />
          </Badge.Anchor>
        </div>
      </div>
    ));
  }

  return (
    <>
      <Mheader title="Search" />
      <Mnavbar theme="light" page="Search" />
      <Page>
        <div className="filtered-tags-container">
          {allTags.map((tag, i) => {
            if (yesTags.has(tag)) {
              return (
                <div key={`filter-tag-${i}`} style={{ display: 'flex' }} className="">
                  <Button
                    onClick={() => updateYesNoTags(tag, 1)}
                    size="small"
                    auto
                    className="big-icon"
                    style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                    iconRight={<Check />}
                    type="success"></Button>
                  <Button onClick={() => updateYesNoTags(tag)} size="small" type="success" style={{ borderRadius: '0' }}>
                    {tag}
                  </Button>
                  <Button onClick={() => updateYesNoTags(tag, 2)} size="small" auto className="big-icon" style={{ borderRadius: '0' }} iconRight={<X />} type="error"></Button>
                </div>
              );
            } else if (noTags.has(tag)) {
              return (
                <div key={`filter-tag-${i}`} style={{ display: 'flex' }} className="">
                  <Button
                    onClick={() => updateYesNoTags(tag, 1)}
                    size="small"
                    auto
                    className="big-icon"
                    style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                    iconRight={<Check />}
                    type="success"></Button>
                  <Button onClick={() => updateYesNoTags(tag)} size="small" type="error" style={{ borderRadius: '0' }}>
                    {tag}
                  </Button>
                  <Button onClick={() => updateYesNoTags(tag, 2)} size="small" auto className="big-icon" style={{ borderRadius: '0' }} iconRight={<X />} type="error"></Button>
                </div>
              );
            }
            return (
              <div key={`filter-tag-${i}`} style={{ display: 'flex' }} className="">
                <Button
                  onClick={() => updateYesNoTags(tag, 1)}
                  size="small"
                  auto
                  className="big-icon"
                  style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                  iconRight={<Check />}
                  type="success"></Button>
                <Button onClick={() => updateYesNoTags(tag)} size="small" style={{ borderRadius: '0', border: '1px solid white' }}>
                  {tag}
                </Button>
                <Button onClick={() => updateYesNoTags(tag, 2)} size="small" auto className="big-icon" style={{ borderRadius: '0' }} iconRight={<X />} type="error"></Button>
              </div>
            );
          })}
        </div>
        <br />
        <Divider align="start">RESULTS</Divider>
        <div className="template-collection-container">{templateCollection}</div>
      </Page>
      <MFooter />
    </>
  );
};

export default Search;
