/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Navbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="66px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Navbar")}
    >
      <View
        height="66px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <View
        height="49.47px"
        position="absolute"
        top="calc(50% - 24.73px - 0.27px)"
        left="2.5%"
        right="2.5%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame26")}
      >
        <View
          height="49.47px"
          position="absolute"
          top="calc(50% - 24.73px - 0px)"
          left="18.5%"
          right="1.32%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame27")}
        >
          <Text
            fontFamily="DM Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="26.399999618530273px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="12px"
            left="2.53%"
            right="92%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "Home")}
          ></Text>
          <Text
            fontFamily="DM Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="26.399999618530273px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="12px"
            left="51.87%"
            right="42.99%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Audit"
            {...getOverrideProps(overrides, "Audit")}
          ></Text>
          <Text
            fontFamily="DM Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="26.399999618530273px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="12px"
            left="93.22%"
            right="2.52%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Help"
            {...getOverrideProps(overrides, "Help")}
          ></Text>
          <Text
            fontFamily="DM Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="26.399999618530273px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="12px"
            left="22.88%"
            right="65.2%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="How It works"
            {...getOverrideProps(overrides, "How It works")}
          ></Text>
          <Text
            fontFamily="DM Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="26.399999618530273px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="12px"
            left="71.78%"
            right="21.66%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pricing"
            {...getOverrideProps(overrides, "Pricing")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
