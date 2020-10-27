import { StyleSheet } from 'react-native';

const shadowOptions = (width: number, height: number, opacity: number, radius: number, color: string, elevation: number)=> {
  const options = {
    shadowColor: color,
    shadowOffset: {
      width,
      height,
    },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation
  }

  return options;
}

const styles = StyleSheet.create({
  actionButtons: {
    marginVertical: '7%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  contentParent: {
    marginRight: '5%',
    marginLeft: '5%',
  },

  leftArrow: {
    transform:[
      {rotate: '25deg'}
    ]
  },

  rightArrow: {
    transform:[
      {rotate: '-25deg'}
    ]
  },

  linearGradient: {
    width: 70,
    paddingVertical: '3%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowOptions(0, 4, 0.30, 2.65, '#000', 8),
  },
});

export default styles;
