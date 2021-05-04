import React from 'react';
import { FavoriteBtnProps } from '../interfaces';
import PropTypes from 'prop-types';
import { Heart, HeartFill } from '@geist-ui/react-icons';
import { Button } from '@geist-ui/react';

export const FavoriteBtn: React.FC<FavoriteBtnProps> = (props) => {
  const updateUserDataDB = async (updatedUserInfo) => {
    const data = { userInfo: updatedUserInfo };

    await fetch('/api/userinfo', {
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

  const addToFavorites = () => {
    const updatedUserInfo = JSON.parse(JSON.stringify(props.userInfo));
    updatedUserInfo.liked_templates.push(props.templateId);
    props.updateUserFunc(updatedUserInfo);
    updateUserDataDB(updatedUserInfo);
  };

  const removeFromFavorites = () => {
    const updatedUserInfo = JSON.parse(JSON.stringify(props.userInfo));
    updatedUserInfo.liked_templates = updatedUserInfo.liked_templates.filter((e) => e !== props.templateId);
    props.updateUserFunc(updatedUserInfo);
    updateUserDataDB(updatedUserInfo);
  };

  let favBtn = <></>;
  if (Object.keys(props.userInfo).length > 0) {
    if (props.userInfo._id == 'guest') {
      favBtn = (
        <Button auto icon={<HeartFill />} type="error" ghost onClick={props.requestSignInFunc}>
          Add to Favorites
        </Button>
      );
    } else {
      if (props.userInfo.liked_templates.indexOf(props.templateId) >= 0) {
        favBtn = (
          <Button auto icon={<HeartFill />} type="error-light" onClick={removeFromFavorites}>
            Remove from Favorites
          </Button>
        );
      } else {
        favBtn = (
          <Button auto icon={<HeartFill />} type="error" ghost onClick={addToFavorites}>
            Add to Favorites
          </Button>
        );
      }
    }
  }
  return <>{favBtn}</>;
};

FavoriteBtn.propTypes = {
  userInfo: PropTypes.any.isRequired,
  templateId: PropTypes.string.isRequired,
  updateUserFunc: PropTypes.any.isRequired,
  requestSignInFunc: PropTypes.any
};
