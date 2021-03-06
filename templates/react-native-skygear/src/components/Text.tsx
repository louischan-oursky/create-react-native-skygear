import * as React from "react";
import { Text, TextProps } from "react-native";
import { FormattedMessage } from "@oursky/react-messageformat";

export const AppText: React.SFC<TextProps> = props => (
  <Text allowFontScaling={false} {...props} />
);

interface LocalizedTextProps extends TextProps {
  messageID: string;
}

export function LocalizedText(props: LocalizedTextProps) {
  const { messageID, ...textProps } = props;
  return (
    <AppText {...textProps}>
      <FormattedMessage id={messageID} />
    </AppText>
  );
}
