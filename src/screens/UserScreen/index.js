/**
 * @file User Screen.
 * @author Vadim Savin
 */

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ENTITLEMENT_ID } from '../../constants';
import { LoginForm, LogoutButton, RestorePurchasesButton, Credits } from '../../components';
import styles from './styles.js';

/*
 The app's user tab to display user's details like subscription status and ID's.
 */
const UserScreen = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [userId, setUserId] = useState(null);
  const [subscriptionActive, setSubscriptionActive] = useState(false);

  return (
    <View style={styles.page}>
      {/* The user's current app user ID and subscription status */}
      <Text style={styles.headline}>Current User Identifier</Text>
      <Text style={styles.userIdentifier}>{userId}</Text>

      <Text style={styles.headline}>Subscription Status</Text>
      <Text style={{ color: subscriptionActive ? 'green' : 'red' }}>
        {subscriptionActive ? 'Active' : 'Not Active'}
      </Text>

      {/* Authentication UI */}
      {isAnonymous ? <LoginForm onLogin={() => {}} /> : <LogoutButton onLogout={() => {}} />}

      {/* You should always give users the option to restore purchases to connect their purchase to their current app user ID */}
      <RestorePurchasesButton />

      <Credits />
    </View>
  );
};

export default UserScreen;
