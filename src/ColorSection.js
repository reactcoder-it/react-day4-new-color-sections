import React, { Component } from 'react';
import './ColorSection.css';

class ColorSection extends Component {
    render() {

        let colorClass;

        if (this.props.color === "green") {
            colorClass = "section_color_green";
        } else if (this.props.color === "blue") {
            colorClass = "section_color_blue";
        } else if (this.props.color === "yellow") {
            colorClass = "section_color_yellow";
        } else if (this.props.color === "magenta") {
            colorClass = "section_color_magenta";
        } else {
            colorClass = "section_color_black";
        }

        return (
            <section id={this.props.id} className={`section ${colorClass}`}>
                <h2 className="title">{this.props.title}</h2>
                <p className="text">{this.props.text}</p>
                <a href={"#" + this.props.goto} className="btn">Вниз</a>
            </section>
        );
    }
}

export default ColorSection;