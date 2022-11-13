import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import QuestionMarkIcon from "../../icons/QuestionMarkIcon";
import TextField from "@mui/material/TextField";
import {
  Widget,
  WidgetHeader,
  WidgetBody,
  WidgetFooter,
  Links,
  User,
} from "../../style/Style";
import WadeAvtar from "../../icons/avtar/WadeAvtar";
import { users, groups } from "./users";
import Dropdown from "../Dropdown";

const UserWidget = ({ getInvitedUsersOrGrops }) => {
  const [selectedGroupOrUser, setSelectedGroupOrUser] = useState([]);
  const [searchUserOrGroup, setSearchUserOrGroup] = useState("");
  const [accessRights, setAccessRights] = useState("Full access");
  const getAccessRights = (access_type) => setAccessRights(access_type);

  const handlePillBtnClick = (user) => {
    const removeUser = [...selectedGroupOrUser].filter(
      (val) => val.id !== user.id
    );
    setSelectedGroupOrUser(removeUser);
  };

  const handleUserOrGroupClick = (user) => {
    const addUserIndex = [...selectedGroupOrUser].findIndex(
      (val) => val.id === user.id
    );
    if (addUserIndex === -1) {
      const updateUser = { ...user, access_type: accessRights };
      setSelectedGroupOrUser([...selectedGroupOrUser, updateUser]);
    }
  };

  const handleInviteBtnClick = () => {
    if (selectedGroupOrUser.length) {
      const updateUserAccessRights = [...selectedGroupOrUser].map(
        (selectedUser) => {
          selectedUser.access_type = accessRights;
          return selectedUser;
        }
      );
      console.log(updateUserAccessRights);
      getInvitedUsersOrGrops(updateUserAccessRights);
    }
  };

  return (
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 16px",
            }}
          >
            {selectedGroupOrUser.length ? (
              <div>
                {" "}
                {selectedGroupOrUser.map((user) => (
                  <div className="pill-btn" key={user.name + user.id}>
                    <span>{user.name}</span>
                    <div
                      onClick={() => handlePillBtnClick(user)}
                      className="close-btn"
                    >
                      X
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            <TextField
              sx={{ padding: "0px" }}
              placeholder={
                !searchUserOrGroup ? "Search people, emails or groups" : ""
              }
              variant="standard"
              value={searchUserOrGroup}
            />
          </Box>
        </Box>
        <Dropdown
          defaultAccessRight={accessRights}
          getAccessRights={getAccessRights}
        />
        <Box sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            disabled={!selectedGroupOrUser.length}
            onClick={handleInviteBtnClick}
          >
            Invite
          </Button>
        </Box>
      </WidgetHeader>
      <WidgetBody sx={{ padding: "10px" }}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <span>Select a person</span>
          {users.map((user) => {
            return (
              <User
                onClick={() => handleUserOrGroupClick(user)}
                key={"selected_" + user.id}
              >
                <WadeAvtar />
                <span className="user-name">{user.name}</span>
              </User>
            );
          })}
        </Box>
        <Box sx={{ width: "100%" }}>
          <span>Select a group</span>
          {groups.map((group) => {
            return (
              <User
                onClick={() => handleUserOrGroupClick(group)}
                key={"selected_" + group.id}
              >
                <div className="group-icon">{group.name.substring(0, 1)}</div>
                <span className="user-name">{group.name}</span>
              </User>
            );
          })}
        </Box>
      </WidgetBody>
      <WidgetFooter>
        <Links>
          <QuestionMarkIcon />
          <span className="share-web">Learn about sharing</span>
        </Links>
      </WidgetFooter>
    </Widget>
  );
};

export default UserWidget;
