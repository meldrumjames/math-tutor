import React, { useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";

import Equation from "../components/Equation";
import MainButton from "../components/MainButton";
import InputArea from "../components/InputArea";

const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};

const numberOne = generateRandomNumber(1, 10);
const numberTwo = generateRandomNumber(1, 10);

const EquationScreen = (props) => {
  const [userInput, setUserInput] = useState("");

  const inputHandler = (inputDigits) => {
    setUserInput(inputDigits.replace(/[^0-9]/g, ""));
  };

  const submitUserInputHandler = () => {
    const inputNumber = parseInt(userInput);
    if (isNaN(userInput)) {
      console.log("NaN");
    }
    equationHandler(inputNumber);
    //setConfirmed(true);
    //setFinalInput(inputNumber);
    // if (inputNumber === numberOne + numberTwo) {
    //   console.log("correct");
    // }
    setUserInput("");
    Keyboard.dismiss();
    props.navigation.navigate({ routeName: "Result" });
  };

  const catID = props.navigation.getParam("categoryID");

  const equationHandler = (input) => {
    switch (catID) {
      case "+":
        if (input === numberOne + numberTwo) {
          console.log("addition correct");
        }
        break;
      case "-":
        if (input === numberOne - numberTwo) {
          console.log("subtraction correct");
        }
        break;
      case "x":
        if (input === numberOne * numberTwo) {
          console.log("multiplication correct");
        }
        break;
      case "÷":
        if (input === numberOne / numberTwo) {
          console.log("division correct");
        }
        break;
      default:
        console.log("error");
    }
  };

  return (
    <View style={styles.screen}>
      <Equation>
        {numberOne} {catID} {numberTwo} =
      </Equation>
      <View style={styles.inputContainer}>
        <InputArea
          placeholder="placeholder text"
          value={userInput}
          disableFullscreenUI={true}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputHandler}
        />
      </View>
      <MainButton onPress={submitUserInputHandler}>Submit</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    alignItems: "center",
  },
});

export default EquationScreen;
