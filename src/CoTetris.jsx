var React = require('react');
var Tiles = require('./Tiles.jsx');

var Grid = React.createClass({
    render: function() {
        return (
            <div className='grid' id={this.props.id}>
            </div>
        );
    }
});

var Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                Co-Tetris Main Screen
                <Tiles />
            </div>
        );
    }
});

var CoTetris = React.createClass({
    render: function() {
        return (
            <div className="coTetris">
                <Main />
                <Grid id={'col1'}/>
                <Grid id={'col2'}/>
            </div>
        );
    }
});

module.exports = CoTetris;
