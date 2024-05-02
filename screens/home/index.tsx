import { View, SafeAreaView, StyleSheet, StatusBar, Text, ListRenderItemInfo } from 'react-native';
import { FlatList, VStack } from 'native-base';
import SearchBar from '../../components/listRestaurants/searchBar';
import Header from '../../components/listRestaurants/header';
import { ListRestaurants } from '../../components/listRestaurants/flatListRestaurant';
import { IRestaurant } from '../../interfaces/IRestaurant';

export default function HomeScreen() {

  let listRestaurants: IRestaurant[] = [
    {
      name: 'Seu Rosa Bar',
      id: '1',
      image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/292231869_703640564398593_2185607748979856353_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvk2DqfpJHi67o5IsqRL-Php92qKrAI8-Gn3aoqsAj49l_tXrpiiw_dKu_zkpnIZvS_htbpuHXJiHjcWP4iw9&_nc_ohc=8RK6eK218A4Q7kNvgFIDDn3&_nc_ht=scontent.fudi2-1.fna&oh=00_AfATXKsipvhPqneVnv-Qd0DV-Bs8Rpyq6j6Kkz_U3yOe9Q&oe=662FB7AD',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'estancia do cupim bar',
      id: '2',
      image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/292231869_703640564398593_2185607748979856353_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvk2DqfpJHi67o5IsqRL-Php92qKrAI8-Gn3aoqsAj49l_tXrpiiw_dKu_zkpnIZvS_htbpuHXJiHjcWP4iw9&_nc_ohc=8RK6eK218A4Q7kNvgFIDDn3&_nc_ht=scontent.fudi2-1.fna&oh=00_AfATXKsipvhPqneVnv-Qd0DV-Bs8Rpyq6j6Kkz_U3yOe9Q&oe=662FB7AD',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Seu Rosa Bar3 pizarria',
      id: '3',
      image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/292231869_703640564398593_2185607748979856353_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvk2DqfpJHi67o5IsqRL-Php92qKrAI8-Gn3aoqsAj49l_tXrpiiw_dKu_zkpnIZvS_htbpuHXJiHjcWP4iw9&_nc_ohc=8RK6eK218A4Q7kNvgFIDDn3&_nc_ht=scontent.fudi2-1.fna&oh=00_AfATXKsipvhPqneVnv-Qd0DV-Bs8Rpyq6j6Kkz_U3yOe9Q&oe=662FB7AD',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Magnit Gourmet',
      id: '4',
      image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/292231869_703640564398593_2185607748979856353_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvk2DqfpJHi67o5IsqRL-Php92qKrAI8-Gn3aoqsAj49l_tXrpiiw_dKu_zkpnIZvS_htbpuHXJiHjcWP4iw9&_nc_ohc=8RK6eK218A4Q7kNvgFIDDn3&_nc_ht=scontent.fudi2-1.fna&oh=00_AfATXKsipvhPqneVnv-Qd0DV-Bs8Rpyq6j6Kkz_U3yOe9Q&oe=662FB7AD',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Seu Eurico Bar',
      id: '5',
      image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/292231869_703640564398593_2185607748979856353_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvk2DqfpJHi67o5IsqRL-Php92qKrAI8-Gn3aoqsAj49l_tXrpiiw_dKu_zkpnIZvS_htbpuHXJiHjcWP4iw9&_nc_ohc=8RK6eK218A4Q7kNvgFIDDn3&_nc_ht=scontent.fudi2-1.fna&oh=00_AfATXKsipvhPqneVnv-Qd0DV-Bs8Rpyq6j6Kkz_U3yOe9Q&oe=662FB7AD',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    }
  ]

  function renderItem({ item }: ListRenderItemInfo<IRestaurant>) {
    const list = <ListRestaurants {...item} />
    return list
  }

  return (
    <VStack flex={1}>
      <Header />
        <SearchBar />
        <FlatList
        style={{backgroundColor:'#ebebeb'}}
          data={listRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderBlockColor: 'green'
  }
});