import React, { FC } from "react";
import { TextInput } from "react-native-paper";

interface IInput {
  label: string;
}

const Input: FC<IInput> = (props) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode={"outlined"}
      autoComplete={true}
      label={props.label}
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};

export default Input;
