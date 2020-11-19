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
    flex: 0.16,
    justifyContent: 'center'
  },
  iconContainer: {
    width: 50,
    height: 50
  },
  secondSection: {
    flex: 0.4,
    justifyContent: 'center'
  },
  thirdSection: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  iconSection: {
    flex: 0.16,
    // justifyContent: 'center',
    alignItems: 'center'
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
