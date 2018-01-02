import * as React from "react";
import { Card } from "../Card/Card";
import "./BusinessCard.css";

export interface BusinessCardProps {
    name: string;
    pictureUrl: string;
    email: string;
    onClickClose: () => void;
}

export class BusinessCard extends React.Component<BusinessCardProps> {
    public render(): JSX.Element {
        const { pictureUrl, name, email, onClickClose } = this.props;
        return (
            <Card>
                <img className="picture" src={pictureUrl} />
                <div className="info">
                    <div className="name" >
                        <div className="label">vārds:</div>
                        <div className="field">{name}</div>
                    </div>
                    <div className="email" >
                        <div className="label">e-pasts:</div>
                        <div className="field">
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                </div>
                <button className="logout" onClick={onClickClose} />
            </Card>
        );
    }
}
