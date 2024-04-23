import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:'100%',
        height:'100%',
         backgroundColor: '#ffffff',
         alignItems: 'center',
         borderTopRightRadius:30,
         borderTopLeftRadius:30,
         paddingTop:30,
      
        

    },
    form: {
        width:'100%',
        height:'100%',
      
    },
    formLabel:{
        color:'#000000',
        fontSize:18,
        paddingLeft: 20,
    },
  input:{
    width:'90%',
    borderRadius:50,
    backgroundColor:'#f6f6f6',
    height:40,
    margin:12,
    paddingLeft:10

  }, 
  
  buttonCalculador :{
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    backgroundColor:'#FF0043',
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    margin:30

  },
  textButtonCalculador:{
    fontSize:20,
    color:"#ffffff"
  },
  textMessage : {
     color:'red',
     fontSize:18,
     fontWeight:'bold'
  },
  resultImc: {
    flex:1,
    marginTop: 20,
    paddingTop:15,
    borderRadius:50,
    alignItems:"center",
    width:"100%" ,
    
  },
  numberImc: {
    color:'red',
    fontSize:48,
    fontWeight:'bold'
  },
  errorMessage: {
    fontSize:12,
    color:'red',
    fontWeight: 'bold',
    paddingLeft:20
  },
  boxShareButton : {
    width:'100%',
    alignItems:'center',
    marginBottom:10,

  },
  shared:{
    backgroundColor:'#1877f2',
    borderRadius:50,
    paddingBottom:5,
    paddingTop:5.
  },
  sharedText: {
    color:'#ffffff',
    fontWeight:'bold',
    paddingHorizontal: 30,
  },
  exibirResultado:{
    width:'100%',
    height:'50%',
    
  }

})


export default styles