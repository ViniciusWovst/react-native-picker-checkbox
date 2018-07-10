# react-native-picker-checkbox

A simple picker component with checkbox list for React-Native.

### Example
```sh
$ cd example
$ npm i
$ react-native run-ios   // For ios
$ react-native run-android   // For Android
```

### Installation
``npm install react-native-picker-checkbox --save``

### Usage
```javascript
  import PickerCheckBox from 'react-native-picker-checkbox';

  handleConfirm(pItems){
    console.log('pItems =>', pItems);
  }

  const items = [
    {
      itemKey:1,
      itemDescription:'Item 1'
      },
    {
      itemKey:2,
      itemDescription:'Item 2'
      },
    {
      itemKey:3,
      itemDescription:'Item 3'
      }
  ];

  render() {
    return(
      <PickerCheckBox
        data={items}
        headerComponent={<Text style={{fontSize:25}} >items</Text>}
        OnConfirm={(pItems) => this.handleConfirm(pItems)}
        ButtonTitleConfirm='OK'
        DescriptionField='itemDescription'
        KeyField='itemKey'
        placeholder='select some items'
        arrowColor='#FFD740'
        arrowSize={10}
        />
    )
  }
```

### Properties

| Name | Type | Description | Default | Optional
| ------------ | ------------- | ------------ |------------ |------------ |
| `data` | array  | Json with id and description | null | false
| ```headerComponent``` | component  | Header component | null | true
| ```ButtonTitleConfirm``` | String  | confirm button's title | confirm | true
| ```DescriptionField``` | string  | Description Field of data object | null | false
| ```KeyField``` | string  | key Field | null | false
| `placeholder` | string | The string that will be rendered before items has been selected | null | true
| ```containerStyle``` | object  | picker container style | null | true
| ```arrowColor``` | string  | Arrow Color | #000 | true
| ```arrowSize``` | number  | Arrow Size | 8 | true


### Contributing

If you'd like to see something added or changed to this module please open a new GitHub issue. Pull requests are always welcome.

### License

 - [Apache-2.0](https://github.com/ViniciusWovst/react-native-picker-checkbox/blob/master/LICENSE). Vinicius Wovst
