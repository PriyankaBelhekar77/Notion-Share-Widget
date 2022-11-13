import { useState, useEffect } from "react";
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
} from "../../style/Style";
import { users, groups } from "./users";
import Dropdown from "../Dropdown";
import DisplayUsers from "./DisplayUsers";
import DisplayGroups from "./DisplayGroups";

const KEY_ENTER = "Enter";
const KEY_UP = "keyup";

const UserWidget = ({ getInvitedUsersOrGrops }) => {
  const [selectedGroupOrUser, setSelectedGroupOrUser] = useState([]);
  const [searchUserOrGroup, setSearchUserOrGroup] = useState("");
  const [accessRights, setAccessRights] = useState("Full access");
  const [userFilterResult, setUserFilterResult] = useState([]);
  const [groupFilterResult, setGroupFilterResult] = useState([]);

  const getAccessRights = (access_type) => setAccessRights(access_type);

  useEffect(() => {
    const handleEnterKeyEvent = (event) => {
      if (event.key === KEY_ENTER) {
        if (userFilterResult.length) {
          handleUserOrGroupClick(userFilterResult[0]);
        } else if (groupFilterResult.length) {
          handleUserOrGroupClick(groupFilterResult[0]);
        }
        setSearchUserOrGroup("");
      }
    };
    document.addEventListener(KEY_UP, handleEnterKeyEvent);

    return () => document.removeEventListener(KEY_UP, handleEnterKeyEvent);
  });

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
      getInvitedUsersOrGrops(updateUserAccessRights);
    }
  };

  const handleInputChange = (event) => {
    setSearchUserOrGroup(event.target.value);
  };

  useEffect(() => {
    if (searchUserOrGroup === "") {
      setUserFilterResult([]);
      setGroupFilterResult([]);
    }
  }, [searchUserOrGroup]);

  const handleInputKeyUp = (event) => {
    if (searchUserOrGroup !== "") {
      const filterUser = [...users].filter((data) => {
        return (
          data.name.toLowerCase().indexOf(searchUserOrGroup.toLowerCase()) !==
          -1
        );
      });

      const filterGroup = [...groups].filter((data) => {
        return (
          data.name.toLowerCase().indexOf(searchUserOrGroup.toLowerCase()) !==
          -1
        );
      });
      setUserFilterResult(filterUser);
      setGroupFilterResult(filterGroup);
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
              <Box>
                {" "}
                {selectedGroupOrUser.map((user) => (
                  <Box className="pill-btn" key={user.name + user.id}>
                    <span>{user.name}</span>
                    <Box
                      onClick={() => handlePillBtnClick(user)}
                      className="close-btn"
                    >
                      X
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : null}
            <TextField
              sx={{ padding: "0px" }}
              placeholder={
                !searchUserOrGroup ? "Search people, emails or groups" : ""
              }
              variant="standard"
              value={searchUserOrGroup}
              onChange={handleInputChange}
              onKeyUp={handleInputKeyUp}
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
        {userFilterResult.length || groupFilterResult.length ? (
          userFilterResult.length ? (
            <DisplayUsers
              users={userFilterResult}
              handleUserOrGroupClick={handleUserOrGroupClick}
            />
          ) : (
            <DisplayGroups
              groups={groupFilterResult}
              handleUserOrGroupClick={handleUserOrGroupClick}
            />
          )
        ) : (
          <>
            <DisplayUsers
              users={users}
              handleUserOrGroupClick={handleUserOrGroupClick}
            />
            <DisplayGroups
              groups={groups}
              handleUserOrGroupClick={handleUserOrGroupClick}
            />
          </>
        )}
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
