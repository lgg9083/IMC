import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

interface resultImc {
  resultImc: number;
  messageResultImc: string;
}

export default function ResultImc(props: resultImc) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu Imc é: " + props.resultImc,
    });
  };
  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
      <Text style={styles.textMessage}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
        <TouchableOpacity style={styles.shared} onPress={onShare}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
