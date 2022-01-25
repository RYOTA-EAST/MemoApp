import React, { useState } from 'react';
import { 
  View, TextInput, StyleSheet,
} from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from './KeyboardSageView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }
  
  return (
    <KeyboardSafeView style={styles.container} behavior="height" keyboardVerticalOffset="60">
      <View style={styles.inputContainer}>
        <TextInput
        value={bodyText}
        multiline
        style={styles.input}
        onChangeText={(text) => { setBodyText(text); }}
        autoFocus
      />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    textAlignVertical: 'top',
  },
});