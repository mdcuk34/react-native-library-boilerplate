
# react-native-library-boilerplate

A boilerplate to easily create and use native code that can
encapsulate a Java SDK in the form of a library.
The docs for getting up and running with native code in React Native
are super useful, alongside all the other articles available.
However piecing this altogether into a working library can
be challenging and time consuming, so that's where this project comes in.

You can follow along how this boiler was created in [this](git@github.com:mdcuk34/react-native-library-boilerplate.git)
tutorial.

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