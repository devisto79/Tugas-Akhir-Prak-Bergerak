import { StyleSheet, View, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pinimg.com/236x/08/ed/f7/08edf75294fd6eb21fc50f8e6b554f3b.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Adriya</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    height: '95%',
    padding: 20,
    borderRadius: 10,
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
