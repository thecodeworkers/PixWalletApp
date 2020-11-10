const styles: any = {
  touchableContainer: {
    height: 50,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '6%'
  },
  separatorContainer: {
    marginHorizontal: '5%'
  },
  firstSection: {
    flex: 0.2,
    justifyContent: 'center'
  },
  iconContainer: {
    width: 50,
    height: 50
  },
  secondSection: {
    flex: 0.5,
    justifyContent: 'center'
  },
  thirdSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  normalFont: (fontSize: number, color: string) => ({
    fontSize,
    color
  }),
  weightFont: (fontSize: number, fontWeight: string, color: string) => ({
    fontSize,
    fontWeight,
    color
  })
};

export default styles;
