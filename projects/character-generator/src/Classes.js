import React, { Component } from "react";
import { getClasses, getBarbarian, getBard, getCleric, getDruid, getFighter, getMonk, getPaladin, getRanger, getRogue, getSorcerer, getWarlock, getWizard } from './redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from "react-router-dom";
import ClassBlock from './ClassBlock'

class Classes extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        this.props.getClasses()
        this.props.getBarbarian()
        this.props.getBard()
        this.props.getCleric()
        this.props.getDruid()
        this.props.getFighter()
        this.props.getMonk()
        this.props.getPaladin()
        this.props.getRanger()
        this.props.getRogue()
        this.props.getSorcerer()
        this.props.getWarlock()
        this.props.getWizard()
    }

    
    render() {
        return (
            <section className="contentWrapper">
                <div className="classWrapper">
                    <h1 className="classTitle">Select A Class For More Info</h1>
                    <div className="classTable">
                        <ClassBlock class={this.props.barbarian} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80072&d=1484611251" />
                        <ClassBlock class={this.props.bard} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80073&d=1484611251" />
                        <ClassBlock class={this.props.cleric} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80074&d=1484611251" />
                        <ClassBlock class={this.props.druid} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80075&d=1484611252" />
                        <ClassBlock class={this.props.fighter} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80077&d=1484611252" />
                        <ClassBlock class={this.props.monk} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80078&d=1484611252" />
                        <Switch>
                            <Route path='/classes/:classType' render={props => {
                                let { classType } = props.match.params;
                                classType = classType.toLowerCase();
                                return (
                                    <div className="descriptiveBlock">
                                        <div className="descriptionName">
                                            {this.props[classType].name}
                                        </div>
                                        <div className="hitDie">
                                            Hit Dice: {this.props[classType] && this.props[classType].hit_die}
                                        </div>
                                        <div>
                                            Proficiencies: {this.props[classType].proficiencies && this.props[classType].proficiencies.map((prof, i) => {
                                                if (i < this.props[classType].proficiencies.length) return `${prof.name}, `
                                                return `${prof.name}`
                                            })}
                                        </div>
                                        <div>
                                            SavingThrows: {this.props[classType].saving_throws && this.props[classType].saving_throws.map((save, i) => {
                                                if (i < this.props[classType].saving_throws.length - 1) return `${save.name}, `
                                                return `${save.name}`
                                            })}
                                        </div>
                                        <div>
                                            Proficiency Choices:  {this.props[classType].proficiency_choices && this.props[classType].proficiency_choices[0].from.map((prof, i) => {
                                                if (i < this.props[classType].proficiency_choices[0].from) return `${prof.name}, `
                                                return `${prof.name}`
                                            })} (choose {this.props[classType].proficiency_choices && this.props[classType].proficiency_choices[0].choose})
                                        </div>
                                    </div>
                                )
                            }} />
                        </Switch>
                        <ClassBlock class={this.props.paladin} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80079&d=1484611253" />
                        <ClassBlock class={this.props.ranger} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80080&d=1484611253" />
                        <ClassBlock class={this.props.rogue} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80081&d=1484611254" />
                        <ClassBlock class={this.props.sorcerer} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80076&d=1484611252" />
                        <ClassBlock class={this.props.warlock} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80083&d=1484611255" />
                        <ClassBlock class={this.props.wizard} image="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80084&d=1484611255" />

                    </div>
                </div>
            </section>
        )
    }
}
export default withRouter(connect(state => state, { getClasses, getBarbarian, getBard, getCleric, getDruid, getFighter, getMonk, getPaladin, getRanger, getRogue, getSorcerer, getWarlock, getWizard })(Classes));

