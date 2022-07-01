import axios from 'axios';
import _ from 'lodash';

const randSpellID = Math.floor(Math.random() * 71) + 1;
const spell = (await axios.get("https://fedeperin-harry-potter-api-en.herokuapp.com/spells/" + `${randSpellID}`)).data;
console.log(spell.spell);