import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type TabelaProps = {
  headers: string[];
  data: string[][];
};

const Tabela: React.FC<TabelaProps> = ({ headers, data }) => {
  return (
    <ScrollView horizontal>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          {headers.map((header, index) => (
            <View key={index} style={styles.headerCell}>
              <Text style={styles.headerText}>{header}</Text>
            </View>
          ))}
        </View>

        {data.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={[
              styles.dataRow,
              { backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : '#ffffff' },
            ]}
          >
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={styles.dataCell}>
                <Text style={styles.cellText}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
  },
  headerCell: {
    padding: 12,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#357ABD',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  dataRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  dataCell: {
    padding: 12,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#eee',
  },
  cellText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Tabela;