import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Movimento() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Movimento</Text>
        <Text style={styles.subtitle}>Acompanhe a sua atividade física diária</Text>
        
        <View style={styles.metricContainer}>
          <Text style={styles.metricValue}>0.0</Text>
          <Text style={styles.metricLabel}>m/s²</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Sombra para Android
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
    textAlign: 'center',
  },
  metricContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 100,
    backgroundColor: '#e0f2fe',
    width: 140,
    height: 140,
  },
  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  metricLabel: {
    fontSize: 12,
    color: '#0369a1',
    fontWeight: '600',
  },
});