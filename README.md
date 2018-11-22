
# react-native-library-boilerplate

A boilerplate to simply create a React Native
Android Library tailored for wrapping third party SDKs with Javascript
developers in mind. You can read about the opinions and
structure of this boilerplate here . // TODO add medium link

#### Features
- Executing a Promise in Java from a React Native app and changing state based on the result.
- Executing a method in Java and listening to a callback for a response (DeviceEventEmitter). This mimics the behaviour you'll most likely need when wrapping third party SDKs.
- Testing with Jest.
- A speedy development environment  with a test application.
- Best practices from react-native-create-bridge and react-native-create-library.


#### Getting started 
##### Running the example app
`cd ExampleApp && yarn install && react-native run-android`.

##### Updating the example app react-native-test-lib 
`cd ExampleApp && yarn updateLib`

