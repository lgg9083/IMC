import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "../ResultImc";
import styles from "../ResultImc/styles";
export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = useState("preecha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButto, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function calcularImc() {
    const pesoNumber = Number(peso.replace(",", "."));
    const alturaNumber = Number(altura.replace(",", "."));
    const resultado = setImc(
      (pesoNumber / (alturaNumber * alturaNumber)).toFixed(2)
    );
    setImcList((arr) => [...arr, { id: new Date().getTime, imc: resultado }]);
    return resultado;
  }
  function error() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("campo Obrigatorio");
    }
  }

  function validacao() {
    if (peso != null && altura != null) {
      calcularImc();
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular Novamente");
      setPeso(null);
      setAltura(null);
      setErrorMessage(null);
    } else {
      error();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("preecha o peso e a altura ");
    }
  }
  return (
    <>
      <View style={styles.formContext}>
        {imc == null ? (
          <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}> {errorMessage}</Text>
            <TextInput
              style={styles.input}
              value={altura}
              onChangeText={setAltura}
              placeholder="Ex. 1.75"
              keyboardType="numeric"
            ></TextInput>
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}> {errorMessage}</Text>
            <TextInput
              style={styles.input}
              value={peso}
              onChangeText={setPeso}
              placeholder="Ex. 70.36"
              keyboardType="numeric"
            ></TextInput>
            <TouchableOpacity
              style={styles.buttonCalculador}
              onPress={() => {
                validacao();
              }}
            >
              <Text style={styles.textButtonCalculador}>{textButto}</Text>
            </TouchableOpacity>
          </Pressable>
        ) : (
          <View style={styles.exibirResultado}>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <TouchableOpacity
              style={styles.buttonCalculador}
              onPress={() => {
                validacao();
              }}
            >
              <Text style={styles.textButtonCalculador}>{textButto}</Text>
            </TouchableOpacity>
          </View>
        )}
        <FlatList
          data={imcList}
          renderItem={({ item }) => {
            return <Text>Resultado IMC = {item.imc}</Text>;
          }}
         keyExtractor={item => item.id}
        ></FlatList>
      </View>
    </>
  );
}
