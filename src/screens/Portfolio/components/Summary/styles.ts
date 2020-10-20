import { StyleSheet, PixelRatio, Dimensions, Platform } from "react-native";

// const font = PixelRatio.getFontScale();
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
    flex: 1
  },

  summaryContent: {
    marginRight: '5%',
    marginLeft: '5%'
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
    height: '30%',
    width: '100%',
    marginTop: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  chartCards: {
    position: 'absolute',
    width: '83%',
    height: 74,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%'
  },

  smallCard: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardGradient: {
    width: 9,
    height: 8,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: '3%'
  },

  percent: {
    fontSize: normalize(12)
  }

});

export default styles;
