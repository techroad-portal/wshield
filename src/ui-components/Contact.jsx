/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Contact(props) {
  const { overrides, ...rest } = props;
  const [
    rectangleTwoTwoSevenSixBackgroundColor,
    setRectangleTwoTwoSevenSixBackgroundColor,
  ] = useStateMutationAction("rgba(0,119,255,1)");
  const rectangleTwoTwoSevenSixOnMouseOver = () => {
    setRectangleTwoTwoSevenSixBackgroundColor("#003bff");
  };
  const rectangleTwoTwoSevenSixOnMouseLeave = () => {
    setRectangleTwoTwoSevenSixBackgroundColor("#0077ff");
  };
  const sendmessageOnMouseOver = () => {
    setRectangleTwoTwoSevenSixBackgroundColor("#003bff");
  };
  return (
    <View
      width="1600px"
      height="602px"
      position="relative"
      padding="0px 0px 0px 0px"
      as="form"
      {...rest}
      {...getOverrideProps(overrides, "Contact")}
    >
      <View
        height="602px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Rectangle2267")}
      ></View>
      <View
        height="451.78px"
        position="absolute"
        top="75.38px"
        left="19.17%"
        right="19.17%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame2268")}
      >
        <View
          height="76px"
          position="absolute"
          top="19.63px"
          left="0.68%"
          right="0.68%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame2269")}
        >
          <View
            height="76px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle2270")}
          ></View>
          <Text
            fontFamily="DM Sans"
            fontSize="48px"
            fontWeight="400"
            color="rgba(35,35,35,1)"
            lineHeight="52.79999923706055px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="193px"
            position="absolute"
            top="-6px"
            left="calc(50% - 96.5px - -0.83px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Write us"
            {...getOverrideProps(overrides, "Write us")}
          ></Text>
        </View>
        <View
          width="247px"
          height="63px"
          position="absolute"
          top="calc(50% - 31.5px - -221.23px)"
          left="calc(50% - 123.5px - -0.17px)"
          padding="0px 0px 0px 0px"
          cursor="pointer"
          {...getOverrideProps(overrides, "SaveButton")}
        >
          <View
            height="63px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            borderRadius="4px 4px 4px 4px"
            padding="0px 0px 0px 0px"
            backgroundColor={rectangleTwoTwoSevenSixBackgroundColor}
            cursor="pointer"
            onMouseOver={() => {
              rectangleTwoTwoSevenSixOnMouseOver();
            }}
            onMouseLeave={() => {
              rectangleTwoTwoSevenSixOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "Rectangle2276")}
          ></View>
          <Text
            fontFamily="DM Sans"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="31.360000610351562px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="151px"
            position="absolute"
            top="calc(50% - 16px - 0.5px)"
            left="calc(50% - 75.5px - 0px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            cursor="pointer"
            children="Send Message"
            onMouseOver={() => {
              sendmessageOnMouseOver();
            }}
            {...getOverrideProps(overrides, "Sendmessage")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="480px"
          height="66px"
          position="absolute"
          top="100.63px"
          left="6.67px"
          {...getOverrideProps(overrides, "NameField")}
        >
          <View
            height="66px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            border="1px SOLID rgba(204,204,204,1)"
            borderRadius="4px 4px 4px 4px"
            padding="22px"
            backgroundColor="rgba(255,255,255,1)"
            as="input"
            placeholder="Name"
            fontSize="22px"
            name="name"
            {...getOverrideProps(overrides, "Name")}
          ></View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="480px"
          height="66px"
          position="absolute"
          top="100.63px"
          left="500px"
          {...getOverrideProps(overrides, "EmailField")}
        >
          <View
            height="66px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            border="1px SOLID rgba(204,204,204,1)"
            borderRadius="4px 4px 4px 4px"
            padding="22px"
            backgroundColor="rgba(255,255,255,1)"
            as="input"
            type="email"
            placeholder="E-mail"
            fontSize="22px"
            name="email"
            {...getOverrideProps(overrides, "Email")}
          ></View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="973.33px"
          height="66px"
          position="absolute"
          top="182.63px"
          left="6.67px"
          {...getOverrideProps(overrides, "SiteField")}
        >
          <View
            height="66px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            border="1px SOLID rgba(204,204,204,1)"
            borderRadius="4px 4px 4px 4px"
            padding="22px"
            backgroundColor="rgba(255,255,255,1)"
            as="input"
            fontSize="22px"
            placeholder="Your site"
            name="site"
            {...getOverrideProps(overrides, "YourSite")}
          ></View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="973.33px"
          height="112px"
          position="absolute"
          top="277.63px"
          left="6.67px"
          {...getOverrideProps(overrides, "MessageField")}
        >
          <View
            height="112px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            border="1px SOLID rgba(204,204,204,1)"
            borderRadius="4px 4px 4px 4px"
            padding="22px"
            backgroundColor="rgba(255,255,255,1)"
            as="textarea"
            resize="vertical"
            fontSize="22px"
            placeholder="Message"
            name="message"
            {...getOverrideProps(overrides, "Message")}
          ></View>
        </View>
      </View>
    </View>
  );
}
