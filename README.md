# mcLine

An angular directive that wraps d3 line
charts. The actual directive can be
found under...

`app/scripts/directives/mc_line/`

## Usage

```html
<mc-linechart data='data' styles='styles' duration='500'>
</mc-linechart>
```

### Data Attribute

The data attribute takes in an array of x and y values
for your line chart, like so.

```javascript
$scope.data = [
  { x: 1,  y: 40 },
  { x: 10, y: 90 },
  { x: 20, y: 55 },
  { x: 30, y: 56 },
];
```

### Style Attributes

The style attribute takes in an object literal describing
the visual elements of the graph.

```javascript
$scope.lineStyles = {
  width:   1000,
  height:  500,
  type:    'basis-open',
  borders: {
    top:    20,
    right:  20,
    bottom: 20,
    left:   50
  },
  color:   'blue',
  stroke:  2,
  fill:    true
};
```

### Durration Attribute

Controls how often a graph should update it's self. If
the duration is set to 0, the graph will never check
for updates.
