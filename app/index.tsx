import { generatorDesculpa } from "@/service/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [desculpa, setDesculpa] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratorDesculpa = async () => {
    if(desculpa.length < 5) {
      alert("Desculpa, o evento precisa ter mais de 5 caracteres")
      return;
    }
    setIsLoading(true);

    // Generator AI
    await generatorDesculpa(desculpa).then((response) => {
      setResposta(response)
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desculpator 3000</Text>
      <Text style={styles.subtitle}>Sua máquina de desculpas profissional</Text>
      <TextInput
        onChangeText={setDesculpa}
        style={styles.input}
        placeholder="Digite o evento que você quer evitar..."
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleGeneratorDesculpa}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar desculpa infalível!"}</Text>
      </TouchableOpacity>

        {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>Sua desculpa está pronta:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }
    </View>
  );
}
