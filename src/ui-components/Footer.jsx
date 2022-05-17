/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="117px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Footer")}
    >
      <View
        height="117px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle2433")}
      ></View>
      <View
        height="42px"
        position="absolute"
        top="45.16px"
        left="2.5%"
        right="2.5%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame2434")}
      >
        <View
          height="26px"
          position="absolute"
          top="22.84px"
          left="1.32%"
          right="51.32%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame2435")}
        >
          <View
            height="26px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle2436")}
          ></View>
          <Text
            fontFamily="DM Sans"
            fontSize="17px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="26.399999618530273px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="0%"
            right="83.33%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="© Mobirise"
            {...getOverrideProps(overrides, "\u00A9 Mobirise")}
          ></Text>
        </View>
        <View
          height="26px"
          position="absolute"
          top="22.84px"
          left="51.32%"
          right="1.32%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame2438")}
        >
          <View
            height="26px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle2439")}
          ></View>
          <Text
            fontFamily="DM Sans"
            fontSize="17px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="26.399999618530273px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="382px"
            position="absolute"
            top="0px"
            right="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Copyright 2025 Mobirise - All Rights Reserved"
            {...getOverrideProps(
              overrides,
              "Copyright 2025 Mobirise - All Rights Reserved"
            )}
          ></Text>
        </View>
      </View>
    </View>
  );
}
