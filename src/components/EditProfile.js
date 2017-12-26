import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Content, Header, Title, Container } from 'native-base'
import { registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender } from '../actions'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex.johnson@gmail.com",
        password: "123456",
        passcode: "1111",
        phoneNumber: "+1 213 221 49 51"
      }
  }

  onFirstNameChange (text) {
    this.props.registerFirstNameChanged(text)
  }

  onLastNameChange (text) {
    this.props.registerLastNameChanged(text)
  }

  onEmailChange (text) {
    this.props.registerEmailChanged(text)
  }

  onPasswordChange (text) {
    this.props.registerPasswordChanged(text)
  }

  onPhoneNumberChange (text) {
    this.props.registerPhoneNumberChanged(text)
  }

  onButtonPress (firstName, lastName, email, password, phoneNumber) {
    // this.props.registerLender({ firstName, lastName, email, password, phoneNumber })

  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Text style={styles.header}>{'Edit Profile'.toUpperCase()}</Text>
            <Container>
              <Content>
                <Form style={styles.form}>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'First Name'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onFirstNameChange.bind(this)}
                      value={this.state.firstName}
                      autoCorrect={false}
                      highlightColor="#00ACC1" // cyan600
                      autoFocus autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'Last Name'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onLastNameChange.bind(this)}
                      value={this.state.lastName}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'Your email'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.state.email}
                      keyboard-type='email-address'
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'Password'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.state.password}
                      secureTextEntry returnKeyType='done' autoCorrect={false} />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'Passcode'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      // onChangeText={this.onPasswordChange.bind(this)}
                      value={this.state.passcode}
                      secureTextEntry returnKeyType='done' autoCorrect={false} />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'Phone number'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onPhoneNumberChange.bind(this)}
                      value={this.state.phoneNumber}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  {this.renderError()}
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Button
                        style={styles.button}
                        // onPress={this.onButtonPress.bind(this)}
                        onPress={() => navigate('VerifyPhoneNumber')}
                        block primary>
                        <Text
                          style={styles.buttonText}
                        >Save</Text>
                      </Button>
                    </View>
                    <View style={styles.cellRight}>
                      <Button
                        style={styles.button2}
                        // onPress={this.onButtonPress.bind(this)}
                        onPress={() => navigate('VerifyPhoneNumber')}
                        block primary>
                        <Text
                          style={styles.buttonText2}
                        >Cancel</Text>
                      </Button>
                    </View>
                  </View>
                </Form>

              </Content>
            </Container>
          </View>

        </ImageBackground>
      </View>

    )
  }

  renderError () {
    if (this.props.error !== '') { return (<Text style={styles.errorText}>{this.props.error}</Text>) }
    return <View />
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'top',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  logo: {
    // position: 'absolute',
    width: 140,
    height: 40,
    marginLeft: 35,
    marginBottom: 5
  },
  header: {
		fontSize: 38,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  formContainer: {
    marginTop: 100
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  label: {
    // color: '#9CA9B6',
    // fontSize: 12
  },
  floatingWrapper: {
    borderBottomWidth: 0,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 21,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    width: 130
  },
  button2: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    width: 130
  },
  buttonText: {
    color: '#333333'
  },
  buttonText2: {
    color: '#ffffff'
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    // borderTopColor: 'rgba(255, 255, 255, 0.1)',
    // borderTopWidth: 2
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40,
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40,
  },
})

const mapStateToProps = state => {
  return {
    firstName: state.register.firstName,
    lastName: state.register.lastName,
    email: state.register.email,
    password: state.register.password,
    phoneNumber: state.register.phoneNumber,

    error: state.register.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
