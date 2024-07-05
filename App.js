import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import System from './System';
import Home from './Home';
import PreConfiguration from './Preconfiguration';
import Groups from './Groups';
import Tracks1 from './Tracks1';
import Tracks2 from './Tracks2';
import Master from './Master';
import BackPlane from './BackPlane';
import Slot1 from './Slot1';
import Slot2 from './Slot2';
import Slot3 from './Slot3';
import Slot4 from './Slot4';
import Communication from './Communication';
import Display from './Display';
import Schedules from './Schedules';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import Forgot from './Forgot';
import CreatePass from './CreatePass';

import { LogBox } from 'react-native';
import { ScrollView } from 'react-native';
LogBox.ignoreAllLogs();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation ,name}) => {
  const [common, setCommon] = useState(false);
  const [device, setDevice] = useState(false);
  const [quad, setQuad] = useState(false);
  const [tracks,setTracks] = useState(false);
  const [selected, setSelected] = useState(null);
  const renderDrawerItem = (Icon,label, icon1, icon2, onPress,index) => (
    <TouchableOpacity onPress={() => {
      setSelected(index);
      onPress();
    }} style={[styles.drawerItem, selected === index && styles.selectedItem]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
        <Icon name={icon1} size={18} color={'black'} />
        <Text style={styles.labelStyle}>{label}</Text>
        <Icon name={icon2} size={18} color={'black'} style={{ marginLeft:100 }} />
      </View>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 0.1,margin:-4, backgroundColor: '#0366b1' }} >
        <TouchableOpacity
          style={styles.profile}
        >
          <View style={{
            marginLeft: 10,
          }} >
            <Text style={styles.ProfileHeader}>
              Bluetooth App</Text>
            <Text style={styles.ProfileExplanation} >
              Hi {name}..</Text>
          </View>
          <Image source={require('./src/assets/image/logo.png')}
            style={styles.blutoothImage}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.9,  
          paddingHorizontal: 0,
        }}
      >
        <View
          style={{
            flex: 0.9,
            paddingHorizontal: 0,
          }}
        >
          <ScrollView>
            {renderDrawerItem(FontAwesome5,"Home", "home",null,  () => navigation.navigate("Home"),0)}
            <View>
              {renderDrawerItem(AntDesign,"PreConfiguration", "iconfontdesktop", null, () => navigation.navigate("PreConfiguration"),1)}
              {renderDrawerItem(MaterialIcons,"System", "devices-other", null, () => navigation.navigate("System"),2)}
              {renderDrawerItem(MaterialIcons,"Common", "data-usage", "keyboard-arrow-down", () => setCommon(!common),3)}
              {common ? (
                <View style={{marginLeft:40}}>
                  {renderDrawerItem(FontAwesome5,"Groups", "layer-group", null, () => navigation.navigate("Groups"),4)}
                  {renderDrawerItem(MaterialIcons,"Tracks", "multitrack-audio", "keyboard-arrow-down", () => setTracks(!tracks),5)}
                  {tracks ? (
                    <View style={{marginLeft:40}}>
                      {renderDrawerItem(Feather,"Normal Tracks", "activity", null, () => navigation.navigate("Tracks1"),6)}
                      {renderDrawerItem(Feather,"Special Tracks", "trending-up", null, () => navigation.navigate("Tracks2"),18)}
                    </View>
                  ):null}
                  {renderDrawerItem(MaterialCommunityIcons,"Schedules", "timetable", null, () => navigation.navigate("Schedules"),7)}
                </View>
              ) : null}
              {renderDrawerItem(MaterialIcons,"Device     ", "important-devices", "keyboard-arrow-down", () => setDevice(!device),8)}
              {device ? (
                <View style={{marginLeft:40}}>
                  {renderDrawerItem(MaterialCommunityIcons,"Master", "semantic-web", null, () => navigation.navigate("Master"),9)}
                  {renderDrawerItem(Octicons,"BackPlane", "paper-airplane", null, () => navigation.navigate("BackPlane"),10)}
                  {renderDrawerItem(MaterialIcons,"Quad", "all-inclusive", "keyboard-arrow-down",() => setQuad(!quad),11)}
                  {quad ? (
                    <View style={{marginLeft:40}}>
                      {renderDrawerItem(Octicons,"Slot1", "paper-airplane", null, () => navigation.navigate("Slot1"),12)}
                      {renderDrawerItem(Octicons,"Slot2", "paper-airplane", null, () => navigation.navigate("Slot2"),13)}
                      {renderDrawerItem(Octicons,"Slot3", "paper-airplane", null, () => navigation.navigate("Slot3"),14)}
                      {renderDrawerItem(Octicons,"Slot4", "paper-airplane",null, () => navigation.navigate("Slot4"),15)}
                    </View>
                  ) : null}
                  {renderDrawerItem(MaterialIcons,"Communication", "bluetooth-searching", null, () => navigation.navigate("Communication"),16)}
                  {renderDrawerItem(FontAwesome5,"Display", "wrench", null, () => navigation.navigate("Display"),17)}
                </View>
              ) : null}
            </View>
          </ScrollView>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

function DrawerHome({ navigation,route }) {
  const {name}=route.params;
  console.log('name',name);
  return (
      <Drawer.Navigator useLegacyImplementation={false}
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Home"
        drawerStyle={styles.drawer}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={props => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              name={name}
            />
          )
        }}
        style={{ width: 200 }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: false,
          gestureEnabled: false,
          headerTitleAlign: 'center',

          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#0A2647',
          headerTitleStyle: {
            fontSize: 21,
            fontWeight: 'bold',
          }
          ,
          drawerStyle: {
            width: 280,
          },

        }}
      >
        <Drawer.Screen name='Home' component={Home} options={{
          headerTitle: () => <Image source={require('./src/assets/image/logo.png')} style={{ width: 50, height: 50 ,borderRadius:15}} />,
          headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='PreConfiguration' component={PreConfiguration} options={{
          headerTitle: 'PreConfiguration', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='System' component={System} options={{
          headerTitle: '', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        
        <Drawer.Screen name='Groups' component={Groups} options={{
          headerTitle: 'Groups', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Tracks1' component={Tracks1} options={{
          headerTitle: 'Normal Tracks', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Tracks2' component={Tracks2} options={{
          headerTitle: 'Special Tracks', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Schedules' component={Schedules} options={{
          headerTitle: 'Schedules', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true,
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Master' component={Master} options={{
          headerTitle: '', headerTintColor: 'white', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='BackPlane' component={BackPlane} options={{
          headerTitle: '', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Slot1' component={Slot1} options={{
          headerTitle: 'Quad', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Slot2' component={Slot2} options={{
          headerTitle: 'Quad', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Slot3' component={Slot3} options={{
          headerTitle: 'Quad', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Slot4' component={Slot4} options={{
          headerTitle: 'Quad', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />
        <Drawer.Screen name='Communication' component={Communication} options={{
          headerTitle: '', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />

        <Drawer.Screen name='Display' component={Display} options={{
          headerTitle: '', headerStyle: { backgroundColor: '#0366b1' }, headerTitleAlign: 'center', headerShown: true, headerTintColor: 'white',
          headerRight: () =>
            <View style={{ marginRight: 15 }} >
              <AntDesign name={'logout'} size={20} color={'white'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        }} />

      </Drawer.Navigator>
    

  );
}


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }} >
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="DrawerHome" component={DrawerHome} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="CreatePass" component={CreatePass} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    width: 100,
    height: 200,
    paddingRight: 20,
    // backgroundColor: 'green',
  },
  profile: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    margin:0,
    marginBottom: 35,
    // borderBottomWidth: 2,
    // borderBottomColor: 'black'
  },
  ProfileHeader: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    paddingBottom:5
  },
  ProfileExplanation: {
    color: 'white',
    fontSize: 12,
    marginLeft: 10
  },
  labelStyle: {
    color: "black",
    fontSize: 15,marginLeft:20
  },
  blutoothImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 30,
  },
  drawerItem: {
    backgroundColor: 'white',
    width: 300,
    padding:10,
    // height:45,
    // margin: 5,
  },
  // labelStyle: {
  //   marginLeft: 10,
  //   color:'black',
  //   height:30,
  //   alignItems:'center'
  //   // Add other styles for label
  // },
  selectedItem: {
    backgroundColor: '#eeeeee',
    
  },
});
export default App;