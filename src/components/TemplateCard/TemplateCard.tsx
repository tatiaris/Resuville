import React, { useState } from 'react';
import { TemplateCardProps } from '../interfaces';
import PropTypes from 'prop-types';
import { Card, Button, Text, Image } from '@geist-ui/react';
import { Trash2, Star } from '@geist-ui/react-icons';

/**
 * Template Card component
 */
export const TemplateCard: React.FC<TemplateCardProps> = (props) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const updateUserDataDB = (updatedUserInfo) => {
    const data = { userInfo: updatedUserInfo };

    fetch('/api/userinfo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const removeFromFavorites = () => {
    const updatedUserInfo = JSON.parse(JSON.stringify(props.userInfo));
    updatedUserInfo.liked_templates = updatedUserInfo.liked_templates.filter((e) => e !== props.info._id);
    updateUserDataDB(updatedUserInfo);
    props.updateUserFunc(updatedUserInfo);
    setIsFavorite(false);
  };

  if (!isFavorite) return <></>;
  return (
    <Card style={{ width: 'max-content', position: 'relative' }}>
      <Image width={250} height={300} src={props.info.thumbnail} style={{ objectFit: 'cover' }} />
      <Text h4 style={{ marginBottom: '0' }}>
        ID: #{props.info._id.substring(18)}
      </Text>
      <Text type="secondary" small>
        Designer: <b>@{props.info.designer}</b> <br />
        Downloads: <b>{props.info.downloads}</b>
      </Text>
      <Button auto icon={<Trash2 />} style={{ margin: '0 1em', position: 'absolute', top: '10px', right: '0px', padding: '0 0.75rem' }} onClick={removeFromFavorites} type="error-light"></Button>
      {/* <Button auto icon={<Star color="white" fill={'white'} />} style={{ margin: '0 1em', position: 'absolute', top: "10px", left: "0px", padding: "0 0.75rem" }} type="warning-light"></Button> */}
    </Card>
  );
};

TemplateCard.propTypes = {
  info: PropTypes.any.isRequired,
  userInfo: PropTypes.any.isRequired,
  updateUserFunc: PropTypes.any.isRequired
};
