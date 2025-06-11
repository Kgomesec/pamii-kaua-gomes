import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import Tabela from './components/Tabela';

export default function App() {
  const headers = ['Nome', 'Idade', 'Cidade'];
  const data = [
    ['Maria', '28', 'São Paulo'],
    ['João', '35', 'Rio de Janeiro'],
    ['Ana', '22', 'Belo Horizonte'],
    ['Carlos', '40', 'Curitiba'],
    ['Fernanda', '31', 'Porto Alegre'],
    ['Rafael', '29', 'Salvador'],
    ['Juliana', '27', 'Recife'],
    ['Bruno', '33', 'Fortaleza'],
    ['Patrícia', '24', 'Manaus'],
    ['Ricardo', '45', 'Belém'],
    ['Aline', '30', 'Goiânia'],
    ['Felipe', '26', 'São Luís'],
    ['Camila', '34', 'Campinas'],
    ['Gustavo', '38', 'Natal'],
    ['Luciana', '32', 'Maceió'],
    ['Diego', '37', 'João Pessoa'],
    ['Natália', '25', 'Teresina'],
    ['Marcos', '41', 'Aracaju'],
    ['Vanessa', '36', 'Cuiabá'],
    ['Eduardo', '39', 'Florianópolis'],
    ['Larissa', '23', 'Vitória'],
    ['André', '28', 'Campo Grande'],
    ['Beatriz', '31', 'São Bernardo do Campo'],
    ['Tiago', '42', 'Niterói'],
  ];  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <Text style={styles.title}>Tabela de Pessoas</Text>
      <Tabela headers={headers} data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});