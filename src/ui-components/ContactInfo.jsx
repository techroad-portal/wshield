/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ContactInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="398px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ContactInfo")}
    >
      <View
        height="398px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,119,255,1)"
        {...getOverrideProps(overrides, "Rectangle2258")}
      ></View>
      <View
        width="760px"
        height="157.97px"
        position="absolute"
        top="120.41px"
        left="calc(50% - 380px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame2259")}
      >
        <View
          height="92px"
          position="absolute"
          top="10.59px"
          left="1.97%"
          right="1.97%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame2260")}
        >
          <View
            height="92px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle2261")}
          ></View>
          <Text
            fontFamily="DM Sans"
            fontSize="35px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="38.720001220703125px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="683px"
            position="absolute"
            top="-4px"
            left="calc(50% - 341.5px - -0.5px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Can't find what you're looking for? Please contact our support, for help."
            {...getOverrideProps(
              overrides,
              "Can't find what you're looking for? Please contact our support, for help."
            )}
          ></Text>
        </View>
        <View
          width="134px"
          height="45px"
          position="absolute"
          top="calc(50% - 22.5px - -55.11px)"
          left="calc(50% - 67px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame2263")}
        >
          <View
            height="45px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            boxShadow="0px 1px 2px rgba(0, 0, 0, 0.20000000298023224)"
            borderRadius="100px 100px 100px 100px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle2264")}
          ></View>
          <Text
            fontFamily="DM Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,119,255,1)"
            lineHeight="26.399999618530273px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="96px"
            position="absolute"
            top="calc(50% - 13.5px - 0px)"
            left="calc(50% - 48px - 0px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact us"
            {...getOverrideProps(overrides, "Contact us")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
