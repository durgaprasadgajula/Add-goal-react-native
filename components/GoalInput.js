import { useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  Image,
  Button,
} from "react-native";

function GoalInput(props) {
  const [goalWrite, setText] = useState("");
  function goalChanger(event) {
    setText(event);
  }

  function addGoalHandlers() {
    props.onAddGoal(goalWrite);
    setText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal2.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Add Your Goal"
          onChangeText={goalChanger}
          value={goalWrite}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandlers}
              color="#ff8000"
            />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} color="#ff8000" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f5c20a",
    backgroundColor: "#4d4d4d",
  },
  TextInput: {
    borderWidth: 2,
    borderColor: "#f5c20a",
    width: "100%",
    marginRight: 8,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#f5c20a",
    borderRadius: 10,
    width: "40%",
    marginHorizontal: 8,
  },
});
