import { forwardRef, useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import QuestionMarkIcon from "../../icons/QuestionMarkIcon";
import LinkIcon from "../../icons/LinkIcon";
import WebIcon from "../../icons/WebIcon";
import UserWidget from "../userWidget/UserWidget";
import {
  Widget,
  WidgetHeader,
  WidgetBody,
  WidgetFooter,
  InviteBox,
  Links,
} from "../../style/Style";
import InvitedUser from "./InvitedUser";

const ShareWidget = forwardRef(function (props, ref) {
  const [showUserSelectModal, setShowUserSelectModal] = useState(false);
  const [invitedUsersOrGroups, setInvitedUsersOrGroups] = useState([]);

  const getInvitedUsersOrGrops = (selectedUsers) => {
    const editInvitedUsersOrGroups = [...invitedUsersOrGroups];
    selectedUsers.forEach((user) => {
      const editUserIndex = editInvitedUsersOrGroups.findIndex(
        (val) => val.id === user.id
      );
      if (editUserIndex === -1) {
        editInvitedUsersOrGroups.push(user);
      } else {
        editInvitedUsersOrGroups[editUserIndex].access_type = user.access_type;
      }
    });

    setInvitedUsersOrGroups(editInvitedUsersOrGroups);
    setShowUserSelectModal(false);
  };

  return (
    <Box ref={ref}>
      <Widget>
        <WidgetHeader>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            <WebIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0 16px",
              }}
            >
              <span className="share-title">Share to web</span>
              <span className="share-sub-title">
                Publish and share link with anyone
              </span>
            </Box>
          </Box>
          <Box sx={{ justifyContent: "flex-end" }}>
            <Switch color="default" />
          </Box>
        </WidgetHeader>
        <WidgetBody>
          <InviteBox onClick={() => setShowUserSelectModal(true)}>
            <div className="test11">People, emails, groups</div>
            <div className="test12">Invite</div>
          </InviteBox>
          {invitedUsersOrGroups.length ? (
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              {invitedUsersOrGroups.map((user, index) => {
                return (
                  <InvitedUser
                    key={"invited_" + user.id}
                    user={user}
                    index={index}
                  />
                );
              })}
            </Box>
          ) : null}
        </WidgetBody>
        <WidgetFooter>
          <Links>
            <QuestionMarkIcon />
            <span className="share-web">Learn about sharing</span>
          </Links>
          <Links>
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

export default ShareWidget;
