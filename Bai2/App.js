import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const App = () => {
  return (
      <LinearGradient  colors={['#C7F4F6','#D1F4F6','#E5F4F5','#37D6F8','#00CCF9']}
      style={styles.container}>
            <View style = {styles.box1}>
          <View style = {styles.eclipse}></View>
          </View>
        <View style = {styles.box2}>
          <Text style ={styles.text_box2}>grow{'\n'}your business</Text>
        </View>
        <View style = {styles.box3}>
          <Text style={styles.text_box3}>We will help you to grow your business using online server</Text>
        </View>
        <View style = {styles.box4}>
            <View style ={{width : 119 , height : 48  , borderRadius : 10,backgroundColor : '#E3C000',  alignItems : 'center' , justifyContent : 'center'}} >
                <Text style = {{fontWeight : '700'}}>LOGIN</Text>
            </View>
            <View style ={{width : 119 , height : 48  , borderRadius : 10 ,  backgroundColor : '#E3C000' , alignItems : 'center' , justifyContent : 'center'}} >
                <Text style = {{fontWeight : '700'}}>SIGN UP</Text>
            </View>
        </View>

        <View style = {styles.box5}>
          <Text style={{fontSize : 18 , fontWeight : '700'}}>HOW WE WORK?</Text>
        </View>
      </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1 : {
    flex : 2,
    justifyContent : 'center',
    alignItems: 'center',
  },
  eclipse:
  {
    width: 140,
    height: 140,
    gap: 0,
    borderWidth: 15,
    borderRadius : 70,
    borderColor : "black",
  },
  box2 : {
    flex : 1 ,
    justifyContent : "center",
    alignItems : 'center'
    
  },
  text_box2 : {
    textAlign : 'center',
    fontSize : 25,
    fontWeight : '700',
    textTransform : 'uppercase',
  },
  box3 : {
    flex : 1 ,
    alignItems : 'center'
  },
  text_box3 : {
    marginLeft : 10,
    marginRight : 10,
    fontSize : 15,
    lineHeight : 17.58,
    fontWeight : '700',
    textAlign : 'center'
  },
  box4 : {
    flex : 1 ,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  
  },
  box5 : {
    flex : 1,
    justifyContent : 'flex-start',
    alignItems : 'center'
  }
});
export default App ;
