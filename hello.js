import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div>
                Hello, {this.props.name}!
            </div>
        );
    },  // wtf is this comma doing here?
});