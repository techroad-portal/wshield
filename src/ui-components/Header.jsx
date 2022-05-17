/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="1023px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <View
        height="1023px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "Rectangle214")}
      ></View>
      <Image
        height="1023px"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IMAGE")}
      ></Image>
      <View
        height="1023px"
        position="absolute"
        top="0px"
        left="-25.75%"
        right="-25.83%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle217")}
      ></View>
      <View
        width="855px"
        height="573px"
        position="absolute"
        top="450px"
        left="calc(50% - 427.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame218")}
      >
        <View
          height="573px"
          position="absolute"
          top="0px"
          left="0%"
          right="0%"
          borderRadius="4px 4px 4px 4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle219")}
        ></View>
        <View
          height="573px"
          position="absolute"
          top="0px"
          left="1.75%"
          right="1.75%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame220")}
        >
          <View
            height="573px"
            position="absolute"
            top="0px"
            left="0%"
            right="0%"
            borderRadius="12px 12px 0px 0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle221")}
          ></View>
          <View
            height="445px"
            position="absolute"
            top="64px"
            left="7.7%"
            right="7.82%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame222")}
          >
            <Text
              fontFamily="DM Sans"
              fontSize="22px"
              fontWeight="400"
              color="rgba(51,51,51,1)"
              lineHeight="31.360000610351562px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="671px"
              position="absolute"
              top="189px"
              left="calc(50% - 335.5px - -0.5px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="There are many hacking cases in the cryptocurrency field, so auditing smart contracts are so crucial. Auditing smart contracts are the first step in keeping project assets safe. Recently, we saw opensea hacked, and even a good person noticed opensea two weeks ago. Our movement will protect cool projects from bad hackers."
              {...getOverrideProps(
                overrides,
                "There are many hacking cases in the cryptocurrency field, so auditing smart contracts are so crucial. Auditing smart contracts are the first step in keeping project assets safe. Recently, we saw opensea hacked, and even a good person noticed opensea two weeks ago. Our movement will protect cool projects from bad hackers."
              )}
            ></Text>
            <Text
              fontFamily="DM Sans"
              fontSize="74px"
              fontWeight="400"
              color="rgba(17,17,17,1)"
              lineHeight="80.95999908447266px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="501px"
              position="absolute"
              top="-8px"
              left="calc(50% - 250.5px - -0.5px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="White Hacker Shield"
              {...getOverrideProps(overrides, "White Hacker Shield")}
            ></Text>
            <Text
              fontFamily="DM Sans"
              fontSize="22px"
              fontWeight="400"
              color="rgba(0,119,255,1)"
              lineHeight="31.360000610351562px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="190px"
              position="absolute"
              top="406px"
              left="calc(50% - 95px - 16px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Become a partner"
              {...getOverrideProps(overrides, "Become a partner")}
            ></Text>
          </View>
        </View>
      </View>
    </View>
  );
}
