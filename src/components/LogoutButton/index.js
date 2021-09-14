/**
 * @file Logout Button.
 * @author Vadim Savin
 */

import React from 'react';
import { Pressable, Text, Alert } from 'react-native';
import styles from './styles';

const LogoutButton = ({ onLogout }) => {
  const logout = async () => {
    // TODO logout the user
  };

  return (
    <Pressable onPress={logout} style={styles.button}>
      <Text style={styles.text}>Logout</Text>
    </Pressable>
  );
};

export default LogoutButton;
