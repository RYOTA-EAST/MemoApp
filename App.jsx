import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年11月11日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年11月11日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年11月11日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      
      <View>
        <Text>X</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#0E2BC2',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    backgroundColor: "gray",
    alignItems: "center",
  },
  appbarRight: {
    position: "absolute",
    right: 19,
    bottom: 18,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
