import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import { Car } from "../../components/Car";
import { LoadAnimation } from "../../components/LoadAnimation";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {
      try {
        const { data } = await api.get("/cars");
        if(isMounted) {
          setCars(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if(isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCars();

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
