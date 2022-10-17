import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaFolder, FaFolderOpen, FaMarkdown } from "react-icons/fa";

import { useRouter } from "next/router";
import { Link } from "@modules/shared/components/Link";
import { useState } from "react";
import { anchors } from "@modules/shared/constants/anchors";
import { useTabStore } from "@modules/shared/stores/useTabStore";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function AboutSideMenu() {
  const { tabsOpened, set } = useTabStore();
  const [openedFolder, setOpenedFolder] = useState("habilidades");

  const router = useRouter();

  const decodedURI = decodeURI(router.asPath.split("#")[1]);
  const anchorName = decodedURI === "undefined" ? undefined : decodedURI;
  return (
    <div style={{ animation: "fadeIn .7s" }}>
      {anchors.map(({ name, sub }) => (
        <div key={name}>
          <Link
            display="flex"
            onClick={() => {
              if (sub && name !== openedFolder) setOpenedFolder(name);
              if (sub && name === openedFolder) {
                setOpenedFolder("");
              }
              if (!sub) {
                const hasTab = tabsOpened.includes(name);
                set({
                  tabsOpened: hasTab ? tabsOpened : [...tabsOpened, name],
                });
              }
            }}
            href={anchorName ? `#${sub ? anchorName : name}` : ""}
            transition=".3s"
            bg={
              anchorName === name ? "rgba(255, 255, 255, 0.2)" : "transparent"
            }
            color={anchorName === name ? "white" : "text"}
            px={4}
            py={2}
            alignItems="center"
            gap={2}
            _hover={{
              textDecor: "none",
              bg:
                anchorName === name
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
            }}
          >
            {sub && (
              <Icon
                as={ChevronRightIcon}
                transition=".3s"
                transform={openedFolder === name ? "rotate(90deg)" : "none"}
              />
            )}
            <Icon
              as={
                !sub
                  ? FaMarkdown
                  : sub && name !== openedFolder
                  ? FaFolder
                  : FaFolderOpen
              }
            />{" "}
            <Text>
              {name}
              {!sub && ".md"}
            </Text>
          </Link>
          <Flex direction="column" bg="black">
            {openedFolder === name &&
              sub?.map((name, index) => (
                <Link
                  display="flex"
                  animation="fadeIn .3s"
                  onClick={() => {
                    const hasTab = tabsOpened.includes(name);
                    set({
                      tabsOpened: hasTab ? tabsOpened : [...tabsOpened, name],
                    });
                  }}
                  key={name}
                  href={`#${name}`}
                  transition=".3s"
                  bg={
                    anchorName === name
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent"
                  }
                  color={anchorName === name ? "white" : "text"}
                  px={4}
                  py={2}
                  alignItems="center"
                  gap={2}
                  _hover={{
                    textDecor: "none",
                    bg:
                      anchorName === name
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(255, 255, 255, 0.1)",
                  }}
                  fontSize="14px"
                >
                  <Icon as={FaMarkdown} />
                  <Text>{String(name).replaceAll("-", " ")}</Text>
                </Link>
              ))}
          </Flex>
        </div>
      ))}
    </div>
  );
}
