import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';
import QuestionMarkIcon from '../../icons/QuestionMarkIcon';
import LinkIcon from '../../icons/LinkIcon';
import WebIcon from '../../icons/WebIcon';
import UserWidget from '../userWidget/UserWidget';
import {
  Widget,
  WidgetHeader,
  WidgetBody,
  WidgetFooter,
  InviteBox,
  Links,
  InviteText,
  InviteSubText,
} from '../../style/Style';
import InvitedUser from './InvitedUser';

const ShareWidget = forwardRef((props, ref) => {
  const [showUserSelectModal, setShowUserSelectModal] = useState(false);
  const [invitedUsersOrGroups, setInvitedUsersOrGroups] = useState([]);

  const getInvitedUsersOrGrops = (selectedUsers) => {
    const editInvitedUsersOrGroups = [...invitedUsersOrGroups];
    selectedUsers.forEach((user) => {
      const editUserIndex = editInvitedUsersOrGroups.findIndex(
        (val) => val.id === user.id,
      );
      if (editUserIndex === -1) {
        editInvitedUsersOrGroups.push(user);
      } else {
        editInvitedUsersOrGroups[editUserIndex].accessType = user.accessType;
      }
    });

    editInvitedUsersOrGroups.sort((a, b) => {
      if (a.type < b.type) {
        return -1;
      }
      if (b.type < a.type) {
        return 1;
      }
      return 0;
    });

    setInvitedUsersOrGroups(editInvitedUsersOrGroups);
    setShowUserSelectModal(false);
  };

  const copyLink = () => {
    props.closeWidget(false);
    // eslint-disable-next-line no-restricted-globals
    navigator.clipboard.writeText(location.href);
  };

  return (
    <Box ref={ref} sx={{ position: 'relative' }}>
      <Widget>
        <WidgetHeader>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0 16px',
            }}
          >
            <WebIcon />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 16px',
              }}
            >
              <span className="share-title">Share to web</span>
              <span className="share-sub-title">
                Publish and share link with anyone
              </span>
            </Box>
          </Box>
          <Box sx={{ justifyContent: 'flex-end' }}>
            <Switch color="default" />
          </Box>
        </WidgetHeader>
        <WidgetBody>
          <InviteBox onClick={() => setShowUserSelectModal(true)}>
            <InviteSubText>People, emails, groups</InviteSubText>
            <InviteText>Invite</InviteText>
          </InviteBox>
          {invitedUsersOrGroups.length ? (
            <Box
              sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
            >
              {invitedUsersOrGroups.map((user, index) => (
                <InvitedUser
                  key={`invited_${user.id}`}
                  user={user}
                  index={index}
                />
              ))}
            </Box>
          ) : null}
        </WidgetBody>
        <WidgetFooter>
          <Links>
            <QuestionMarkIcon />
            <span className="share-web">Learn about sharing</span>
          </Links>
          <Links onClick={copyLink}>
            <LinkIcon />
            <span className="share-link">Copy link</span>
          </Links>
        </WidgetFooter>
      </Widget>
      {showUserSelectModal && (
        <UserWidget getInvitedUsersOrGrops={getInvitedUsersOrGrops} />
      )}
    </Box>
  );
});

ShareWidget.propTypes = {
  closeWidget: PropTypes.func.isRequired,
};

export default ShareWidget;
