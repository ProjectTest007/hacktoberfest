import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Left</button>
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
            </div>
        )
    }
}
