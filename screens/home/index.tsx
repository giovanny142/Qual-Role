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
      name: 'Estancia do Cupim Bar',
      id: '2',
      image: 'https://instagram.fudi2-1.fna.fbcdn.net/v/t51.2885-19/419079218_1899928753775236_1245383432769312634_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jqTk84RY1CMQ7kNvgHoRaob&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfC4yqc9spVmXSOdBN6cLpCFeBFBpmBtChZnZ99oXvUX6g&oe=663A5CAA&_nc_sid=cf751b',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Seu Rosa Bar3 pizarria',
      id: '3',
      image: 'https://instagram.fudi2-1.fna.fbcdn.net/v/t51.2885-19/118876409_1257102114642025_5623420947777649059_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=CT8ZK_0VwT8Q7kNvgEH9Mbc&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AfCvIMZAKiBqeNzC-RdZplJEvAjNtfogzxX0jaB1w6FC8Q&oe=663A37D9&_nc_sid=cf751b',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Magnit Gourmet',
      id: '4',
      image: 'https://instagram.fudi2-1.fna.fbcdn.net/v/t51.2885-19/273717369_266651375598108_2504509244372071635_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=n0-8jiGOH_UQ7kNvgE8NbF7&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AfCMbXlSw1912rDd_rAO0LbHRdC6Pn3sYA71NJ-FhVg1yA&oe=663A518B&_nc_sid=cf751b',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Seu Eurico Bar',
      id: '5',
      image: 'https://instagram.fudi2-1.fna.fbcdn.net/v/t51.2885-19/370797743_118656344640188_8494532748225957110_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=jzSNim60qQUQ7kNvgG0Bpr0&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AfDr2pcxxEpg7IhL42oFyIrK4O5JGS9dR7RRCAmCOpYRLA&oe=663A38B1&_nc_sid=cf751b',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Seu Eurico Bar',
      id: '6',
      image: 'https://instagram.fudi2-1.fna.fbcdn.net/v/t51.2885-19/324576328_714766470211622_5255039347391505530_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=UIDQ78nWvuwQ7kNvgFMLxto&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AfA6dfjQxOeS9TAQNlrmzTCgbJdutAdcYc-CJMbmKJXo4A&oe=663A5365&_nc_sid=cf751b',
      description: 'Chega mais',
      maxQuantity: 10,
      currentQuantity: 5
    },
    {
      name: 'Seu Eurico Bar',
      id: '7',
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
        style={{backgroundColor:'#dbdada'}}
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