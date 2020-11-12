import { StyleSheet, PixelRatio, Dimensions, Platform } from "react-native";

const dimension = Dimensions.get('window').width;
const scale = dimension / 320;

const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS == 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize))
  return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
}

const shadowOptions = (width: number, height: number, opacity: number, radius: number, color: string, elevation: number) => {
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
  main: {
    height: '100%'
  },

  summaryContent: {
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '10%'
  },

  balanceText: {
    fontSize: normalize(14),
    fontWeight: 'bold'
  },

  userContainer: {
    marginTop: '1%',
    flexDirection: 'row',
    width: '100%'
  },

  userText: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginRight: '8%'
  },

  balanceContainer: {
    marginTop: '2%',
    marginLeft: '5%'
  },

  balance: {
    fontSize: normalize(25),
    fontWeight: 'bold'
  },

  chartContent: {
    width: '100%',
    marginTop: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  chartCards: {
    position: 'absolute',
    width: '92%',
    height: 74,
    borderRadius: 10,
    ...shadowOptions(0, 2, 0.25, 3.84, '#000', 3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    zIndex: 999,
    left: '4%',
    right: '4%'
  },

  smallCard: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardGradient: {
    width: 9,
    height: 9,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: '3%',
  },

  percent: {
    fontSize: normalize(12)
  },

  filterParent: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  filterCard: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10
  },

  bigCard: {
    ...shadowOptions(0, 2, 0.25, 2.84, '#000', 3),
    width: '70%',
    borderRadius: 5,
    alignSelf: 'center',
    padding: '5%',
    marginVertical: '5%'
  },

  row: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  textBold: {
    fontWeight: 'bold'
  },

  message: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  chartItem : {
    position: 'relative',
    height: 93, width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default styles;
