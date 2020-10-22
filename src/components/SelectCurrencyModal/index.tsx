import React, { FC, useState } from 'react';
import { View, Text, Modal, TouchableHighlight} from 'react-native';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const SelectCurrencies: FC<DefaultProps | any> = ({ theming: { theme }, show }: any) => {

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <><Modal
    animationType="slide"
    transparent={true}
    visible={show}
>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>

        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
     
    </>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrencies);
