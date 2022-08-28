import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowerCard from "../FollowerCard/FollowerCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <FollowerCard location="modal" />
    </Modal>
  );
};

export default FollowersModal;
