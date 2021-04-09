import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! sdfusvdui fdgdfgfgdgfd dffds</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.table__container}>
      <ScrollView horizontal={true}>
        <View style={styles.table__wrap}>
          <Text>phfsdiohfioghudsguguigdigsdifuguifgsdiuguigduisguiguidsguiguifdgsui gdsuid fgio goui gd ofsig udfig fdsuuuuuuuuuuuuuuuuuuuuuuuuuoig ug fuigs dfiugosdf gdosf igfs ouig diug dfsuiougd ui g</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Dessert</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Frozen yogurt</DataTable.Cell>
              <DataTable.Cell numeric>159</DataTable.Cell>
              <DataTable.Cell numeric>6.0 fdg fgd dg </DataTable.Cell>
              <DataTable.Cell numeric>6.0 gfd d gf</DataTable.Cell>
              <DataTable.Cell numeric>6.0 dfg  gfd g</DataTable.Cell>
              <DataTable.Cell numeric>6.0 gfg </DataTable.Cell>
              <DataTable.Cell numeric>6.0 gfgg </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>
        </View>
        
      </ScrollView>

    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table__container: {
    flex: 1,
    width: '100%',
  },
  table__wrap: {
    flex: 1,
    backgroundColor: 'yellow',
  }
});
