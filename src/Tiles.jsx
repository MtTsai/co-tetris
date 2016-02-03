var React = require('react');

var Tiles = React.createClass({
  render: function() {
    var i;
    var tileSize = 4;
    var width = 10;
    var height = 20;

    var tileRender = [];
    for (i = 0; i < width * height; i++) {
      tileRender.push(<div className='clash-tile' key={i} />);
    }

    return (
      <div>
        {tileRender}
      </div>
    );
  }

});

module.exports = Tiles;
