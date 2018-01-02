import * as React from "react";
import "./Card.css";

const cn = require("classnames");

export interface CardProps { pulsate?: boolean; }

export class Card extends React.Component<CardProps> {
    public defaultProps: Partial<CardProps> = {
        pulsate: false,
    };

    public render(): JSX.Element {
        const pulsate = this.props.pulsate;
        return (
            <div className="wrapper">
                <div className={cn("card", { pulsate })} >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
