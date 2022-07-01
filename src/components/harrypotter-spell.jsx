import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class PotterSpell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            spellName: '',
            spellUse: ''
        };
    }

    loadRandomSpell = async () => {
        this.setState({
            isLoading: true
        });

        const randSpellID = Math.floor(Math.random() * 71) + 1;
        const spell = (await axios.get("https://fedeperin-harry-potter-api-en.herokuapp.com/spells/" + `${randSpellID}`)).data;

        this.setState({
            isLoading: false,
            spellName: spell.spell,
            spellUse: spell.use
        });
    }

    async componentDidMount() {
        await this.loadRandomSpell(); 
    }

    render() {
        return (
            <>
                {
                    this.state.isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <button type="button" onClick={this.loadRandomSpell}>
                                Randomize
                            </button>
                            <div>
                                <p>
                                    {this.state.spellName}
                                    {this.state.spellUse}
                                </p>
                            </div>
                        </>
                    )
                }
            </>
        );
    }
}

export { PotterSpell };