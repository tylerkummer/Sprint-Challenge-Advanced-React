- [ ] Why would you use class component over function components (removing hooks from the question)?

    Now that function components have replaced class components with newer applications, there is still a lot of older applications and legacy code that are written with class components. If you are working on an application that is still using class components then it would be easier to stick with that than spending tons of time transferring over to function components.

- [ ] Name three lifecycle methods and their purposes.

    1. The Birth/Mounting Phase
        - Render method is invoked
        - The function componentDidMount gets invoked

    2. Growth/Updating Phase
        - The setState can be used to change state data of a component
        - The shouldComponentUpdate method can be used to stop a render from calling

    3. Death/Un-mounting Phase
        - The component is removed from the screen
        - The componentWillUnmount method is called to be used for any more cleanup.

- [ ] What is the purpose of a custom hook?

    Custom Hooks are hooks that are being built or customized by the user, these hooks have no visual behavior or stateful logic. The point of these hooks are to be reused over and over again. Custom Hooks can be built to handle controlled inputs, manage event listeners, etc.

- [ ] Why is it important to test our apps?

    By testing our apps we are minimizing the risk of any bugs finding their way into production code. Testing allows us to reduce the risk of regressions, allows us to trust our code more, act as documentation for our code, makes us think about edge cases, etc.