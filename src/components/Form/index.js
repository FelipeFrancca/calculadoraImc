import React, { useState } from "react";
import { View, TextInput, Text, Button, Alert } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc(
      (
        (parseFloat(weight.replace(",", ".")) /
        (parseFloat(height.replace(",", ".")) * parseFloat(height.replace(",", "."))))
      ).toFixed(2)
    );
  }

  function validationImc() {
    if (!height || !weight) {
      Alert.alert(
        "Atenção",
        "É necessário preencher os campos de altura e peso.",
        [{ text: "OK", onPress: () => console.log("Pressionado OK") }]
      );
      return;
    }
    imcCalculator();
    setHeight("");
    setWeight("");
    setMessageImc("Seu IMC é igual: ");
    setTextButton("Calcular Novamente");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={(newHeight) => setHeight(newHeight)}
          value={height}
          placeholder="Ex.: 1.70"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={(newWeight) => setWeight(newWeight)}
          value={weight}
          placeholder="Ex.: 75.3"
          keyboardType="numeric"
        />

        <Button onPress={() => validationImc()} title={textButton} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}