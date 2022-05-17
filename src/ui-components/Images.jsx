/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function Images(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="670px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Images")}
    >
      <View
        height="670px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <View
        height="550px"
        position="absolute"
        top="60.16px"
        left="2.5%"
        right="2.5%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Image
          height="550px"
          position="absolute"
          top="calc(50% - 275px - 0.16px)"
          left="1.32%"
          right="67.98%"
          width="30.7%"
          borderRadius="14px 0px 0px 14px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IMAGE2190")}
        ></Image>
        <Image
          height="550px"
          position="absolute"
          top="calc(50% - 275px - 0.16px)"
          left="67.98%"
          right="1.32%"
          width="30.7%"
          borderRadius="0px 14px 14px 0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IMAGE2191")}
        ></Image>
        <Image
          height="550px"
          position="absolute"
          top="calc(50% - 275px - 0.16px)"
          left="34.65%"
          right="34.65%"
          width="30.7%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IMAGE2192")}
        ></Image>
      </View>
    </View>
  );
}
