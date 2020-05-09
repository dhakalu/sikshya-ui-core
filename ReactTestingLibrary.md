# React Testing Library

## Handeling Events

At times we would want to make sure that our application does something when certain event gets triggered. For example, we might need to make sure that a button does fire the function that we pass as `onClick` prop to it when a user clicks on it. In scanerios like this we can use `fireEvent` method provided by `react-testing-library` as below:

```javascript
    1. const handleClick = jest.fn()
    2. const { getByText } = render(<Button onClick={} name='Click Me'/>)
    3. const button = getByText('Click Me')
    4. fireEvent.click(button)
    5. expect(button).toHaveBeenCalledTimes(1)
```

In line 1 above we mock the fuction that we pass as onClick prop to `Button` component.

In Line 2 we create a `DOM` element by using the `render` function provided by `react-testing-library`. 

In line 3 we are extracting the `button` element from the `DOM` created in line 2.

In line 4 we fire the `click` event on the `button` element extracted in line 2. A complete list of available commands can be found [here](https://github.com/testing-library/dom-testing-library/blob/master/src/event-map.js).

In line 4 we make sure that the `handleClick` function that we passed was called when the click happened.

### Checking for styles

At times we might need to make sure that a particular element looks certain way to match the styling guidelines. For example we need to make sure that our primary button has the background of our `brand` color. In scanerios like this we can:

```javascript
     /* **button** below can be replaced by anything that we queried from
     *  dom created by render method of react testing library
     */
     expect(button).toHaveStyle(`background: companyColor`) 
```