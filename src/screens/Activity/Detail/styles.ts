import { generalShadow } from '../../../assets/styles';

const styles: any = {
  container: {
    flex: 1
  },
  firstCard: {
    height: 110,
    marginTop: '10%',
    marginBottom: '8%',
    marginHorizontal: '7%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  symbolContainer: {
    flex: 0.40,
    justifyContent: 'center'
  },
  currency: {
    width: 60,
    height: 60
  },
  sentText: {
    flex: 0.40,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  secondCard: {
    height: 89,
    marginBottom: '8%',
    marginHorizontal: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  feeCard: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  dateCard: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  thirdCard: {
    height: 110,
    marginBottom: '8%',
    marginHorizontal: '7%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  fourthCard: {
    height: 73,
    marginBottom: '8%',
    marginHorizontal: '7%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  fifthCard: {
    height: 73,
    marginBottom: '8%',
    marginHorizontal: '7%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  normalFont: (color: string, fontSize: number) => ({
    color,
    fontSize
  }),
  marginFont: (color: string, fontSize: number = 15, marginBottom: number = 5) => ({
    color,
    fontSize,
    marginBottom
  }),
  widthFont: {
    color: '#B7B7B7',
    fontSize: 12,
    width: 195,
    textAlign: 'center'
  }
};

export default styles;
