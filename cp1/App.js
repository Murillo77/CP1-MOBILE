import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [porcentagemAumento, setPorcentagemAumento] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularAumento = () => {
    if (!nomeProduto || !valorProduto || !porcentagemAumento) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    const valor = parseFloat(valorProduto);
    const porcentagem = parseFloat(porcentagemAumento);

    if (isNaN(valor) || isNaN(porcentagem)) {
      Alert.alert('Erro', 'Valores inválidos.');
      return;
    }

    const aumento = (valor * porcentagem) / 100;
    const novoValor = valor + aumento;

    setResultado({
      valorProduto: valor,
      aumentoPercentual: porcentagem,
      novoValor: novoValor,
      valorAumento: aumento,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Logo_NIKE.svg.png')}
        style={styles.imagem}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor original"
        value={valorProduto}
        onChangeText={setValorProduto}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de aumento"
        value={porcentagemAumento}
        onChangeText={setPorcentagemAumento}
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={calcularAumento}
      />

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoText}>Valor original: {resultado.valorProduto}</Text>
          <Text style={styles.resultadoText}>Aumento percentual: {resultado.aumentoPercentual}%</Text>
          <Text style={styles.resultadoText}>Novo valor: {resultado.novoValor}</Text>
          <Text style={styles.resultadoText}>Valor do aumento: {resultado.valorAumento}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9BCBECFF',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    marginLeft: 50,
    backgroundColor: 'transparent',
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#37A4EDFF',
  },
  resultadoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});