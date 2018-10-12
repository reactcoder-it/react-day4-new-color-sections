import React, {Component} from 'react';
import './ColorContainer.css';

class ColorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            nextData: 0,
            timer: null
        }
    }

    handleClick() {
        // Останавливаем таймер
        let timer = this.state.timer;
        clearInterval(timer);

        // Поменяли значение
        let next = this.state.nextData;
        next++;
        if (next > 4) {
            next = 0
        }
        this.setState({nextData: next});

        // Запускаем таймер снова
        this.setState({timer: setInterval(() => this.tick(), 3000)});
    }

    tick() {
        let next = this.state.nextData;
        next++;
        if (next > 4) {
            next = 0
        }
        this.setState({nextData: next});
    }

    render() {

        let section = this.state.data[this.state.nextData];
        let color = section.color;
        let colorClass;

        if (color === "green") {
            colorClass = "section_color_green";
        } else if (color === "blue") {
            colorClass = "section_color_blue";
        } else if (color === "yellow") {
            colorClass = "section_color_yellow";
        } else if (color === "magenta") {
            colorClass = "section_color_magenta";
        } else {
            colorClass = "section_color_black";
        }

        if (this.state.timer === null) {
            this.setState({timer: setInterval(() => this.tick(), 3000)});
        }

        return (
            <section id={section.id} className={`section ${colorClass}`}>
                <h2 className="title">{section.title}</h2>
                <p className="text">{section.text}</p>
                <button onClick={() => this.handleClick()} className="btn">
                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-circle-right" className="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                </button>
            </section>
        );
    }
}

export default ColorContainer;