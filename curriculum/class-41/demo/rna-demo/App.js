import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Linking } from 'react-native';
import * as Expo from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts:[],
      permission:null,
    };
  }

  async componentDidMount() {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    this.setState({ permission: status === 'granted' });
  }

  showContacts = async () => {
    const contacts = await Expo.Contacts.getContactsAsync();
    this.setState({contacts: contacts.data});
  };

  call = contact => {
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
    .then((supported) => Linking.openURL(link) )
    .catch(console.error);
  };

  keyExtractor = item => item.id;

  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.showContacts}
          title="Show Contacts"
        />

        <View style={styles.section}>
          <Text>Mapped ...</Text>
          {
            this.state.contacts && this.state.contacts.map( (contact,i) =>
              <Text key={i}>{contact.name}</Text>
            )
          }
        </View>

        <View style={styles.section}>
          <Text>FlatList ...</Text>
          <FlatList
            data={this.state.contacts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Button title={item.name} style={styles.person} onPress={() => this.call(item)} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  person: {
    marginTop:"1em"
  },
  section: {
    margin: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginTop: 25,
  },
});
