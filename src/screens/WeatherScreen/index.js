/**
 * @file Magic Weather screen.
 * @author Vadim Savin
 */

import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Credits } from '../../components';
import { testCold, generateSampleData, Environment } from '../../Helpers/SampleData';
import styles from './styles.js';
import { ENTITLEMENT_ID } from '../../constants';

/*
 The app's weather tab that displays our pretend weather data.
 */

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(testCold);

  const navigation = useNavigation();

  const performMagic = async () => {
    // TODO  We should check if we can magically change the weather (subscription active) and if not, display the paywall.
    setWeatherData(generateSampleData(Environment.EARTH));
  };

  return (
    <View style={[styles.page, { backgroundColor: weatherData.weatherColor }]}>
      {/* Sample weather details */}
      <Text style={styles.emoji}>{weatherData.emoji}</Text>
      <Text style={styles.temperature}>
        {weatherData.temperature}°{weatherData.unit.toUpperCase()}️
      </Text>

      {/* The magic button that is disabled behind our paywall */}
      <Pressable onPress={performMagic} style={styles.changeWeatherButton}>
        <Text style={styles.changeWeatherTitle}>✨ Change the Weather</Text>
      </Pressable>

      <Credits />
    </View>
  );
};

export default WeatherScreen;
