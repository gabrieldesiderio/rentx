import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";

import { Car } from '../../components/Car';

import { 
  Container, 
  Header, 
  HeaderContent,
  TotalCars,
  CarList
} from "./styles";

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  };

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar 
        style="light" 
        backgroundColor="transparent" 
        translucent 
      />

      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)} 
            height={RFValue(12)} 
          />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
      />
    </Container>
  );
}
