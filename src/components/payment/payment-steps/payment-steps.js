import React, { Component } from 'react';
import "./payment-steps.scss";
import completeIconWhite from "../../../images/icons/complete-icon-white.svg";
import StepOne from "./step-one/step-one";
import StepTwo from "./step-two/step-two";
import StepThree from "./step-three/step-three";
import StepFour from "./step-four/step-four";

class PaymentSteps extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        steps: [
            {
                id: 0,
                label: "Etapa 1",
                description: "Verificar os produtos",
                isActive: true,
                isVisited: true,
            },
            {
                id: 1,
                label: "Etapa 2",
                description: "Dados",
                isActive: false,
                isVisited: false,
            },
            {
                id: 2,
                label: "Etapa 3",
                description: "Pagamento",
                isActive: false,
                isVisited: false,
            },
            {
                id: 3,
                label: "Etapa 4",
                description: "Pagamento",
                isActive: false,
                isVisited: false,
            },
        ],
    };

    onToggle = (position) => e => {
        if (position !== null && position !== undefined) {
            let steps = [...this.state.steps];
            steps.forEach(step => {
                if (step.id === position) {
                    step.isActive = true;
                    step.isVisited = true;
                } else {
                    step.isActive = false;
                }
            });
            this.setState({steps});
        }
    };

    onOptionSelected = (option) => e => {
        this.props.onOptionSelected(option);
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-payment-steps">
                    <div className="pb-payment-steps__title m-bottom--x-large">
                        Faça um pedido
                    </div>

                    <div className="pb-payment-steps__steps-wrapper">
                        {this.state.steps.map(step => {
                            return (
                                <div
                                    onClick={this.onToggle(step?.id)}
                                    className={ step?.isActive ? "pb-payment-steps__step-item pb-payment-steps__step-item--active" : "pb-payment-steps__step-item" }
                                    direction="column"
                                    vertical="center"
                                    horizontal="center"
                                >
                                    <div
                                        className={ (step?.isActive || step?.isVisited) ? "pb-payment-steps__step-number pb-payment-steps__step-number--active" : "pb-payment-steps__step-number" }
                                        vertical="center"
                                        horizontal="center"
                                    >
                                        {
                                            (step?.isActive || !step?.isVisited) &&
                                            step?.id + 1
                                        }
                                        {
                                            (!step?.isActive && step?.isVisited) &&
                                            <img alt="Icon" src={completeIconWhite}/>
                                        }
                                    </div>
                                    <div className="pb-payment-steps__step-label m-top--medium">
                                        { step?.label }
                                    </div>
                                    <div className="pb-payment-steps__step-description m-top--xxx-small">
                                        { step?.description }
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={ !this.state.steps[0].isActive ? "pb-payment-steps__step-hidden" : "" }>
                        <StepOne nextStep={this.onToggle} />
                    </div>

                    <div className={ !this.state.steps[1].isActive ? "pb-payment-steps__step-hidden" : "" }>
                        <StepTwo nextStep={this.onToggle} />
                    </div>

                    <div className={ !this.state.steps[2].isActive ? "pb-payment-steps__step-hidden" : "" }>
                        <StepThree nextStep={this.onToggle} />
                    </div>

                    <div className={ !this.state.steps[3].isActive ? "pb-payment-steps__step-hidden" : "" }>
                        <StepFour nextStep={this.onToggle} optionSelected={this.onOptionSelected} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentSteps
