import React, { useRef, useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(1)).current  // Initial value for opacity: 0
  useEffect(() => {
        animate(fadeAnim);
  }, [fadeAnim])

  const animate = (ref) => {
    Animated.loop(Animated.timing(
        ref,
        {
          toValue: !ref,
          duration: 1000,
          useNativeDriver:true
        }
      )).start(()=>{
          animate(ref);
      });
  }

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        borderRadius:100,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}



const Dot = ({display}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', display:display}}>
         <FadeInView style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
      </View>
    );
  }

const ThreeDots = () =>{
    const [oneSecond, setOneSecond] = useState(false);
    const [twoSeconds, setTwoSeconds] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setOneSecond(true);
        },1000 );
        setTimeout(()=>{
            setTwoSeconds(true);

        },2000 );

    });
    
    return (
<View style={{flex:1, flexDirection:'row'}}>
        <Dot display={'inline'}/>
        <Dot display={oneSecond?'visibility:hidden':'inline'}/>
        <Dot display={twoSeconds?'inline':'visibility:hidden'}/>
</View>

    );
}



export default ThreeDots;