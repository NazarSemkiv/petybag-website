import React, { Component } from 'react';
import "./sizes-info.scss";
import sizesImg from "../../../images/icons/sizes-img.svg";

class SizesInfo extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-sizes-info">
                    <div className="m-bottom--x-large" vertical="center" horizontal="between">
                        <div className="pb-sizes-info__label p-right--xx-large">
                            A Petybag Está Disponível Para Todos os Tamanhos
                        </div>
                        <div className="pb-sizes-info__description">
                            Uma Bolsa Para Cada Necessidade: A Petybag Está Pronta para Atender Todos os Tamanhos. Seja um cãozinho ou um amigo felino, nossas bolsas são projetadas para oferecer conforto e estilo, independentemente do porte do seu companheiro
                        </div>
                    </div>

                    <div className="p-top--x-large">
                        <img className="pb-sizes-info__img" alt="Sizes" src={sizesImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SizesInfo
