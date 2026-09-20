import { View, Text, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { DeviceMotion } from 'expo-sensors';
import Estilos from '../styles/Estilos';

export default function Movimento() {
  const [status, setStatus] = useState("Parado");

  useEffect(() => {
    let subscription = null;

    DeviceMotion.setUpdateInterval(200);

    subscription = DeviceMotion.addListener((monitor) => {
      const acceleration = monitor.acceleration;

      if (!acceleration) {
        return;
      }

      if (
        Math.abs(acceleration.x) >= 5 ||
        Math.abs(acceleration.y) >= 5 ||
        Math.abs(acceleration.z) >= 5
      ) {
        setStatus("Movimento Detectado!");
      }
      else {
        setStatus("Parado");
      }
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={Estilos.container}>
      <View style={Estilos.card}>
        <Text style={Estilos.title}>Movimento</Text>
        <Text style={Estilos.subtitle}>Acompanhe a sua atividade física diária</Text>
        
        <View style={Estilos.metricContainer}>
          <Text style={Estilos.metricValue}>{status}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}