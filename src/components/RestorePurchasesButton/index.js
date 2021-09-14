/**
 * @file Restore Purchases Button.
 * @author Vadim Savin
 */

import React from 'react';
import { Pressable, Text, Alert } from 'react-native';
import styles from './styles';

const RestorePurchasesButton = () => {
  const restorePurchases = async () => {
    // TODO Restore user's transactions
  };

  return (
    <Pressable onPress={restorePurchases} style={styles.button}>
      <Text style={styles.text}>Restore Purchases</Text>
    </Pressable>
  );
};

export default RestorePurchasesButton;
