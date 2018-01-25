import React from 'react'
import { string, func, bool } from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { ToggleIcon } from './'
import Icons from 'react-native-vector-icons/Entypo'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    backgroundColor,
    paddingLeft: 10,
    paddingRight: 35,
    fontSize: 16
  },
  logo: {
    marginLeft: 5,
    height: 25,
    width: 25
  }
})

const TopBar = (props) => {
  const {
    logo,
    more,
    title,
    theme,
    onMorePress,
    onBackPress
  } = props
  return (
    <LinearGradient colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0)']} style={styles.container}>
      <View style={styles.row}>
        <Icons
            style={[styles.more,{paddingLeft: 5,backgroundColor:'rgba(0,0,0,0)'}]}
            onPress={() => onBackPress()}
            name={'chevron-with-circle-left'}
            size={22}
            color={theme}
          />
        <Text
          style={[styles.title, { color: theme }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        { more &&
          <ToggleIcon
            style={styles.more}
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-horiz"
            iconOn="more-horiz"
            theme={theme}
            size={25}
          />
        }
      </View>
    </LinearGradient>
  )
}

TopBar.propTypes = {
  title: string,
  logo: string,
  more: bool,
  onMorePress: func,
  theme: string
}

TopBar.defaultProps = {
  title: '',
  logo: undefined,
  more: false,
  onMorePress: undefined,
  theme: null
}

export { TopBar }
